import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import Iconfonts from 'react-native-vector-icons/Ionicons'
import { CommonActions } from '@react-navigation/native';

const Defail = (props) => {
  console.log(props.route.params.id)
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.top}>
        <TouchableHighlight underlayColor="" onPress={() => { props.navigation.dispatch(CommonActions.goBack()) }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Iconfonts name="chevron-back-outline" size={26} />
            <Text>返回</Text>
          </View>
        </TouchableHighlight>
      </View>
      <Text>defail123</Text>
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
  }
})

export default Defail