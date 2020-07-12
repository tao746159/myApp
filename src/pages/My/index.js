import React, {useState, useEffect} from 'react'
import {
  View, Text, StyleSheet, Image, TouchableHighlight, AsyncStorage
} from 'react-native'

import Iconfonts from 'react-native-vector-icons/Ionicons'
import { Button } from '@ant-design/react-native'
import axios from 'axios'

class My extends React.Component {
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
   handleLoginOut = () => {
     AsyncStorage.removeItem('username')
     AsyncStorage.removeItem('age')
     AsyncStorage.removeItem('phone')
     AsyncStorage.removeItem('created')
     AsyncStorage.removeItem('nickname')
     this.props.navigation.navigate('Login')
  }
  render () {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatarWarper}>
          <View style={styles.avatar}><Image source={require('../../images/remmend/remmend_16.jpg')} style={{ width: '100%' }} /></View>
          <View style={{ marginLeft: 10, marginTop: 5, }}>
            <Text style={styles.title}>帅气的跳蚤</Text>
            <Text style={{ marginTop: 5, fontSize: 12, color: '#999' }}>13345678888</Text>
          </View>
        </View>
        <View style={styles.right}>
          <TouchableHighlight underlayColor="" style={{ marginTop: 15 }}>
            <Iconfonts name="chevron-forward-outline" size={24} />
          </TouchableHighlight>
        </View>
      </View>
      <View style={styles.content}>
        <TouchableHighlight underlayColor="" onPress={()=>{this.props.navigation.navigate("Information")}}>
          <View style={styles.list}>
            <View style={{ flexDirection: 'row', }}>
              <Iconfonts name="document-text-outline" size={24} />
              <Text style={{ marginLeft: 5, fontSize: 17 }}>个人资料</Text>
            </View>
            <Iconfonts name="chevron-forward-outline" size={24} style={{ marginRight: 20 }} />
          </View>
        </TouchableHighlight>
        <TouchableHighlight underlayColor="" style={{ marginTop: 10 }}>
          <View style={styles.list}>
            <View style={{ flexDirection: 'row', }}>
              <Iconfonts name="location-outline" size={24} />
              <Text style={{ marginLeft: 5, fontSize: 17 }}>我的地址</Text>
            </View>
            <Iconfonts name="chevron-forward-outline" size={24} style={{ marginRight: 20 }} />
          </View>
        </TouchableHighlight>
        <TouchableHighlight underlayColor="" style={{ marginTop: 10 }}>
          <View style={styles.list}>
            <View style={{ flexDirection: 'row', }}>
              <Iconfonts name="heart-outline" size={24} />
              <Text style={{ marginLeft: 5, fontSize: 17 }}>我的收藏</Text>
            </View>
            <Iconfonts name="chevron-forward-outline" size={24} style={{ marginRight: 20 }} />
          </View>
        </TouchableHighlight>
        <Button style={{marginTop: 60, marginLeft: 20, marginRight: 20}} type="warning" onPress={this.handleLoginOut}>退出登录</Button>
      </View>
    </View>
    )
     } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    height: 120,
    padding: 20,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  content: {
    borderRadius: 20,
    height: '100%',
    backgroundColor: '#f8f8f8',
    position: 'relative',
    top: -10,
    marginTop: 20
  },
  avatarWarper: {
    flexDirection: 'row',
  },
  avatar: {
    width: 60,
    height: 60,
    overflow: 'hidden',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 5
  },
  list: {
    height: 50,
    backgroundColor: '#fff',
    paddingLeft: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})

export default My

