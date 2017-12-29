# react-native-enhanced-actionsheet

A super lightweight, fully customizable, dependency-free component for React Native that replicates native iOS action sheet. An Android style action sheet will be added as well within the next few versions.

<div>
  <img src="https://media.giphy.com/media/3oFzlV8xJd8rvElHLW/giphy.gif" />
  <img src="https://media.giphy.com/media/3o752jxkPmWPCjdEiY/giphy.gif" />
</div>


## How to install it
1. Run `npm install react-native-enhanced-actionsheet --save` or `yarn add react-native-enhanced-actionsheet`<br>
2. Import it in the component of your choice `import Actionsheet from 'react-native-enhanced-actionsheet'`

## How to use it
```javascript
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View, 
  Button
} from 'react-native'
import Actionsheet from 'react-native-enhanced-actionsheet'

const COUNT = 0

const OPTIONS = [
  {id: COUNT++, label: 'option #' + COUNT}, 
  {id: COUNT++, label: 'option #' + COUNT}, 
]

export default class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      visible: false,
      selected: 0
    }
  }

  render() {

    const selectedOption = OPTIONS.find((e) => e.id === this.state.selected)

    return (
      <View style={styles.container}>
        <Button
          title="Just tap me bro"
          color="#841584"
          onPress={() => this.setState({visible: true})}
        />
        <View style={{marginTop: 40}}>
          <Text>Selected option: {selectedOption.label}</Text>
        </View>
        <Actionsheet 
          visible={this.state.visible}
          data={OPTIONS} 
          title={'Select an option'}
          selected={this.state.selected}
          onOptionPress={(e) => this.setState({visible: false, selected: e.id})}
          onCancelPress={() => this.setState({visible: false})}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})
```

## Props
| Prop                         | Info          |
| ---------------------------- | ------------- |
| visible                      | (bool) - Toggles actionsheet |
| data                         | (array of objects) - A list of actionsheet options. Each object must have **id** and **label** fields. |
| title                        | (string) - Actionsheet title. Default value is *Select* |
| selected                     | (int) - If you would like to highlight the selected element, provide the id of this element. |
| titleStyle                   | (style object) - Object that styles actionsheet title. Provided styles should be appropriate for *Text* component |
| titleContainerStyle          | (style object) - Object that styles actionsheet title container. Provided styles should be appropriate for *View* component |
| cancelTextStyle              | (style object) - Object that styles cancel text. Provided styles should be appropriate for *Text* component |
| cancelContainerStyle         | (style object) - Object that styles cancel button. Provided styles should be appropriate for *View* component |
| optionTextStyle              | (style object) - Object that styles options text. Provided styles should be appropriate for *Text* component |
| optionContainerStyle         | (style object) - Object that styles option buttons. Provided styles should be appropriate for *View* component |
| selectedOptionTextStyle      | (style object) - Object that styles selected option text. Provided styles should be appropriate for *Text* component |
| selectedOptionContainerStyle | (style object) - Object that styles selected option button. Provided styles should be appropriate for *View* component |
| onOptionPress | (function) - Callback function that it is called when an option is pressed. The whole object of the option that was pressed, is returned. |
| onCancelPress | (function) - Callback function that it is called when cancel button is pressed. |
