import React, { useState, useEffect } from 'react'
import {
  View, Text, StyleSheet, ListView, Image
} from 'react-native'


import SortRight from './components/SortRight'
import { ScrollView } from 'react-native-gesture-handler'

const sortList = [
  {
    text: '热门',
    name: 'remen'
  },
  {
    text: '休闲零食',
    name: 'xxls'
  },
  {
    text: '牛奶饮品',
    name: 'nnyp'
  },
  {
    text: '新鲜水果',
    name: 'xxsg'
  },
  {
    text: '熟食小吃',
    name: 'ssxc'
  }
]

const Sort = () => {
  let [list, setList] = useState([])
  let [active, setActive] = useState('remen')
  useEffect(() => {
    fetch('http://www.leother.cool:3002/api/homelist')
      .then((response) => response.json())
      .then((json) => setList(json.list))
  }, [])

  return (
    <View style={styles.top}>
      <View style={styles.left}>
        <View>
          
          {
            sortList.map((item, index) => {
              return <View key={index} style={styles.item}>
                <Text style={item.name === active ? styles.active : ''} onPress={()=>{setActive(item.name)}}>{item.text}</Text>
              </View>
            })
          }
        </View>
      </View>
      <ScrollView style={styles.right}>
        <Image source={{uri: 'http://i2.tiimg.com/722699/ababe0ac9cbe426b.jpg'}} style={{width: '100%', height: 100}} />
        <SortRight list={list}></SortRight>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  top: { flex: 1, flexDirection: 'row', backgroundColor: '#ffffff' },
  left: { width: '25%', height: '100%', borderRightWidth: 1, borderRightColor: '#dddddd', alignItems: 'center' },
  right: { width: '75%', padding: 10 },
  item: { width: '100%', height: 60, justifyContent: 'center', borderBottomColor: '#dddddd', borderBottomWidth: 1 },
  active: {color: '#1bbf80'}
})

export default Sort