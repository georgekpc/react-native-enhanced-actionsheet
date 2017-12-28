# react-native-enhanced-actionsheet

A super lightweight, dependency-free component for React Native that replicates native iOS action sheet. An Android style action sheet will be added as well within the next few versions.

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
