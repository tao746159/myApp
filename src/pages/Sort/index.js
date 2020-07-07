import React, { useState, useEffect } from 'react'
import {
  View, Text, StyleSheet, ListView
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
                <Text>{item.text}</Text>
              </View>
            })
          }
        </View>
      </View>
      <ScrollView style={styles.right}>
        <SortRight list={list}></SortRight>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  top: { flex: 1, flexDirection: 'row' },
  left: { width: '25%', height: '100%', borderRightWidth: 1, borderRightColor: '#dddddd', alignItems: 'center' },
  right: { width: '75%' },
  item: { width: '100%', height: 60, justifyContent: 'center', borderBottomColor: '#dddddd', borderBottomWidth: 1 }
})

export default Sort