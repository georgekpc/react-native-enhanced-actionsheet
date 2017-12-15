import React, {Component} from 'react'
import {StyleSheet, View, Text, Dimensions, ScrollView, Modal, TouchableOpacity} from 'react-native'



export default class EnhancedActionSheet extends Component {
    render() {

        const {
                visible, 
                title, 
                data, 
                selected, 
                onCancelPress, 
                onOptionPress,
                titleContainerStyle,
                titleStyle
              } = this.props

        const dataLength = data.length


        return (
            <Modal
                animationType="fade"
                transparent={true}
                visible={visible}> 
                <View style={styles.backgroundLayer}>
                    <View style={styles.container}>
                        <View style={styles.actionsheetContainer}>
                            <View style={[styles.titleContainer, titleContainerStyle]}>
                                <Text style={[styles.title, titleStyle]}>{title ? title : 'Select'}</Text>
                            </View>
                            <ScrollView showsVerticalScrollIndicator={false}>
                                {data.map((e, i) => 
                                    <TouchableOpacity onPress={() => onOptionPress(e)} key={i} activeOpacity={1} 
                                                    style={[
                                                                styles.labelContainer, 
                                                                i === (dataLength - 1) ? styles.lastLabelContainer : null, 
                                                                selected == e.id ? styles.selectedLabelContainer : null]} >
                                        <Text style={[styles.label, selected == e.id ? styles.selectedLabel : null]}>{e.label}</Text>
                                    </TouchableOpacity>
                                )}
                            </ScrollView>
                        </View>
                        <TouchableOpacity onPress={onCancelPress} activeOpacity={1} style={styles.cancelContainer}>
                            <Text style={styles.cancel}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        )
    }
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
