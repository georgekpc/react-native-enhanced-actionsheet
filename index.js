import React, {Component} from 'react'
import {StyleSheet, View, Text, Dimensions, ScrollView, Modal, TouchableOpacity} from 'react-native'



export default class EnhancedActionSheet extends Component {
    render() {

        const {
                visible, 
                title, 
                data, 
                onCancelPress, 
                titleContainerStyle
              } = this.props

        const dataLength = data ? data.length : 0


        return (
            <Modal
                animationType="fade"
                transparent={true}
                visible={visible}> 
                <View style={styles.backgroundLayer}>
                    <View style={styles.container}>
                        <View style={styles.actionsheetContainer}>
                            <View style={[styles.titleContainer, this._styleTitleContainer()]}>
                                <Text style={[styles.title, this._styleTitle()]}>{title ? title : 'Select'}</Text>
                            </View>
                            <ScrollView showsVerticalScrollIndicator={false}>
                                {data.map((e, i) => 
                                   this._renderOption(e, i, dataLength) 
                                )}
                            </ScrollView>
                        </View>
                        <TouchableOpacity onPress={onCancelPress} activeOpacity={1} style={[styles.cancelContainer, this._styleCancelContainer()]}>
                            <Text style={[styles.cancel, this._styleCancelText()]}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        )
    }

    _styleTitle = () => {
        if(this.props.titleStyle) {
            return this.props.titleStyle
        }
    }

    _styleTitleContainer = () => {
        if(this.props.titleContainerStyle) {
            return this.props.titleContainerStyle
        }
    }

    _styleCancelText = () => {
        if(this.props.cancelTextStyle) {
            return this.props.cancelTextStyle
        }
    }

    _styleCancelContainer = () => {
        if(this.props.cancelContainerStyle) {
            return this.props.cancelContainerStyle
        }
    }

    _renderOption = (e, i, dataLength) => (
        <TouchableOpacity onPress={() => this.props.onOptionPress ? this.props.onOptionPress(e) : {}} 
                            key={i} 
                            activeOpacity={1} 
                            style={[
                                    styles.labelContainer, 
                                    this._isLastOption(i, dataLength) ? styles.lastLabelContainer : null, 
                                    this._isSelected(e) ? styles.selectedLabelContainer : null,
                                    this._styleOptionContainer(),
                                    this._styleSelectedOptionContainer(e)
                            ]} >
            <Text style={[
                            styles.label, 
                            this._isSelected(e) ? styles.selectedLabel : null, 
                            this._styleOptionText(),
                            this._styleSelectedOptionText(e)]}>
                {e.label}
            </Text>
        </TouchableOpacity>
    )

    _styleOptionContainer = () => {
        if(this.props.optionContainerStyle) {
            return this.props.optionContainerStyle
        }
    }

    _styleOptionText = () => {
        if(this.props.optionTextStyle) {
            return this.props.optionTextStyle
        }
    }

    _styleSelectedOptionContainer = (e) => {
        if(this.props.selectedOptionContainerStyle && this._isSelected(e)) {
            return this.props.selectedOptionContainerStyle
        }
    }

    _styleSelectedOptionText = (e) => {
        if(this.props.selectedOptionTextStyle && this._isSelected(e)) {
            return this.props.selectedOptionTextStyle
        }
    }

    _isLastOption = (i, dataLength) => i === (dataLength - 1)

    _isSelected = (e) => this.props.selected === e.id && e.id !== undefined
}

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window')

const styles = StyleSheet.create({
    backgroundLayer: {
        flex: 1, 
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
        width: SCREEN_WIDTH, 
        height: SCREEN_HEIGHT, 
        alignItems: 'center'
    },
    container: {
        position: 'absolute', 
        bottom: 0, 
        width: SCREEN_WIDTH - 20, 
        marginBottom: 15
    },
    actionsheetContainer: {
        borderRadius: 14, 
        marginBottom: 10, 
        backgroundColor: '#fff', 
        maxHeight: (SCREEN_HEIGHT/3)*2
    },
    titleContainer: {
        backgroundColor: '#fff', 
        alignItems: 'center', 
        paddingTop: 15, 
        paddingBottom: 30, 
        borderTopLeftRadius: 14, 
        borderTopRightRadius: 14
    },
    title: {
        fontSize: 14, 
        color: 'gray', 
        fontWeight: '500'
    },
    labelContainer: {
        backgroundColor: '#fff', 
        alignItems: 'center', 
        paddingVertical: 15, 
        borderTopWidth: 1, 
        borderColor: 'lightgray'
    },
    lastLabelContainer: {
        borderBottomLeftRadius: 14, 
        borderBottomRightRadius: 14
    },
    selectedLabelContainer: {
        paddingVertical: 30, 
    },
    label: {
        fontSize: 20, 
        color: '#0076FF'
    },
    selectedLabel: {
        fontSize: 20, 
        color: 'gray'
    },
    cancelContainer: {
        backgroundColor: '#fff', 
        alignItems: 'center', 
        paddingVertical: 15, 
        borderRadius: 14
    },
    cancel: {
        fontSize: 20, 
        fontWeight: '600', 
        color: '#0076FF'
    }
})
