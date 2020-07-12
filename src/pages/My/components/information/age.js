import React from 'react'
import { View, Text, StyleSheet,TouchableHighlight } from 'react-native'
import { CommonActions } from '@react-navigation/native';
import Iconfonts from 'react-native-vector-icons/Ionicons'
const Age = (props) => {
  return (
    <View>
      <View style={styles.top}>
        <TouchableHighlight underlayColor="" onPress={() => { props.navigation.dispatch(CommonActions.goBack()) }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Iconfonts name="chevron-back-outline" size={26} />
            <Text style={{fontSize: 18}}>年龄修改</Text>
          </View>
        </TouchableHighlight>
      </View>
      <Text>avatar</Text>
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
  list: {
    height: 50,
    marginTop:10,
    backgroundColor: '#fff',
    paddingLeft: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})
export default Age