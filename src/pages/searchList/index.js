import React from 'react'
import { View, TextInput, StyleSheet, TouchableHighlight, Text } from 'react-native'
import Iconfonts from 'react-native-vector-icons/Ionicons'
import { CommonActions } from '@react-navigation/native';
const SearchList = (props) => {
  let [value, setValue] = React.useState()
  return (
    <View>
      <View style={styles.top}>
        <TouchableHighlight underlayColor="" onPress={() => { props.navigation.dispatch(CommonActions.goBack()) }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Iconfonts name="chevron-back-outline" size={26} />
            <Text>返回</Text>
          </View>
        </TouchableHighlight>
      </View>
      <View style={{ marginTop: 20, backgroundColor: '#ffffff', height: 100, padding: 10, position: 'relative' }} onPress={() => { this.props.navigator.push(SearchList) }}>
        <TextInput
          value={value}
          placeholder="搜索"
          style={{ height: 40, backgroundColor: '#ffffff', borderColor: '#dddddd', borderWidth: 1, borderRadius: 10 }}
          onChangeText={() => { setValue(value) }}
          onSubmitEditing={(event) => { console.log(event.nativeEvent.text) }}
        />
        <TouchableHighlight underlayColor="" onPress={() => { console.log(value) }}>
          <Iconfonts name="search" size={20} style={{ position: 'absolute', right: 20, top: -30 }} />
        </TouchableHighlight>
        <View style={styles.tabs}>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  top: {
    height: 40,
    flexDirection: 'row',
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    alignItems: 'center'
  },
  tabs: {
    flex: 1,
    flexDirection: 'row'
  }
})
export default SearchList