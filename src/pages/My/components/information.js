import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import Iconfonts from 'react-native-vector-icons/Ionicons'
import { CommonActions } from '@react-navigation/native';
const Information = (props) => {
  const {username, age, phone, created, nickname,avatar} = props
  return (
    <View style={{flex: 1, backgroundColor: '#dddddd'}}>
      <View style={styles.top}>
        <TouchableHighlight underlayColor="" onPress={() => { props.navigation.dispatch(CommonActions.goBack()) }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Iconfonts name="chevron-back-outline" size={26} />
            <Text style={{fontSize: 18}}>个人资料</Text>
          </View>
        </TouchableHighlight>
      </View>
      <TouchableHighlight underlayColor="" onPress={() => { props.navigation.navigate('Avatar') }}>
        <View style={[styles.list, {height: 80}]}>
          <Text>头像</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={{ uri: avatar }} />
            <Iconfonts name="chevron-forward-outline" size={24} style={{ marginRight: 20 }} />
          </View>
        </View>
      </TouchableHighlight>
      <TouchableHighlight underlayColor="" onPress={() => { props.navigation.navigate('Nickname') }}>
        <View style={styles.list}>
          <Text>昵称</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text>小飞侠</Text>
            <Iconfonts name="chevron-forward-outline" size={24} style={{ marginRight: 20 }} />
          </View>
        </View>
      </TouchableHighlight>
      <TouchableHighlight underlayColor="" underlayColor=""t onPress={() => { props.navigation.navigate('Age') }}>
        <View style={styles.list}>
          <Text>年龄</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text>18</Text>
            <Iconfonts name="chevron-forward-outline" size={24} style={{ marginRight: 20 }} />
          </View>
        </View>
      </TouchableHighlight>
      <TouchableHighlight underlayColor="" onPress={() => { props.navigation.navigate('Phone') }}>
        <View style={styles.list}>
          <Text>电话</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text>13333334444</Text>
            <Iconfonts name="chevron-forward-outline" size={24} style={{ marginRight: 20 }} />
          </View>
        </View>
      </TouchableHighlight>
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

export default Information