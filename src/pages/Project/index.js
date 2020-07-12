import React from 'react'
import {
  View, Text, StyleSheet, Image, TouchableHighlight,AsyncStorage
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import Iconfonts from 'react-native-vector-icons/Ionicons'

class Project extends React.Component {
  constructor() {
    super(...arguments)
  }
  componentDidMount () {
    AsyncStorage.getItem('username').then(res => {
      if (res === null) {
        this.props.navigation.navigate('Login')
      }
    })
  }
render() {
  return (
    <View style={styles.content}>
      <View style={styles.topText}>
        <Text style={{ fontSize: 18 }}>购物车</Text>
      </View>
      <ScrollView>
        <View style={styles.context}>
          <View style={{ width: '30%' }}>
            <Image source={require('../../images/remmend/remmend_01.jpg')} style={styles.image} />
          </View>
          <View style={{ marginTop: 10 }}>
            <Text>团员人小核桃礼盒</Text>
            <View style={{ flex: 1, marginTop: 30, flexDirection: 'row', justifyContent: 'space-around' }}>
              <Text style={{ fontSize: 16, color: '#f2510f' }}>￥16.9</Text>
              <View style={{ flexDirection: 'row', marginLeft: 30, alignItems: 'center' }}>
                <TouchableHighlight underlayColor="" onPress={() => { console.log('--') }}><Iconfonts name="remove-circle-outline" size={30} /></TouchableHighlight>
                <Text style={{ marginLeft: 5, marginRight: 5 }}>1</Text>
                <TouchableHighlight underlayColor="" onPress={() => { console.log('++') }}><Iconfonts name="add-circle-outline" size={30} /></TouchableHighlight>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
  }
}

const styles = StyleSheet.create({
  content: { flex: 1, backgroundColor: '#ffffff', padding: 10 },
  topText: { justifyContent: 'center', alignItems: 'center' },
  context: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ddd',
    height: 120,
    borderRadius: 10,
    marginTop: 30,
    padding: 10
  },
  image: { width: 80, height: 80, marginTop: 10, marginLeft: 10 }
})

export default Project