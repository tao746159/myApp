import React, { useState, useEffect } from 'react'
import {
  View, Text, StyleSheet, Image
} from 'react-native'


import SortRight from './components/SortRight'
import { ScrollView } from 'react-native-gesture-handler'

import axios from 'axios'
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

class Sort extends React.Component {
  constructor() {
    super(...arguments)
    this.state = {
      list: [],
      arrList: [],
      active: 'remen',
      show: false
    }
  }
  componentDidMount () {
    this.setState({ show: true }, () => {
      axios.get('http://www.leother.cool:3002/api/homelist')
      .then((res) => {
        if (res.data.code === 200) {
          this.setState({show: false})
          this.setState({ list: res.data.list, arrList: res.data.list })
        }
      })
    })
    
  }

  handleTabActive = (name) => {
    if (name === 'remen') {
      return this.setState({ list: this.state.arrList, active: name })
    }
    this.setState({
      active: name
    }, () => {
      this.setState({ list: this.state.arrList })
      let arr = this.state.arrList.filter(item => {
        return item.sort === name
      })
      this.setState({ list: arr })
    })
  }

  render() {
    return (
      <View style={styles.top}>
        <View style={styles.left}>
          <View>
            {
              sortList.map((item, index) => {
                return <View key={index} style={styles.item}>
                  <Text style={item.name === this.state.active ? styles.active : ''} onPress={() => { this.handleTabActive(item.name) }}>{item.text}</Text>
                </View>
              })
            }
          </View>
          
        </View>
        <ScrollView style={styles.right}>
          <Image source={{ uri: 'http://i2.tiimg.com/722699/ababe0ac9cbe426b.jpg' }} style={{ width: '100%', height: 100 }} />
          <SortRight list={this.state.list} props={this.props} show={this.state.show}></SortRight>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  top: { flex: 1, flexDirection: 'row', backgroundColor: '#ffffff' },
  left: { width: '25%', height: '100%', borderRightWidth: 1, borderRightColor: '#dddddd', alignItems: 'center' },
  right: { width: '75%', padding: 10 },
  item: { width: '100%', height: 60, justifyContent: 'center', borderBottomColor: '#dddddd', borderBottomWidth: 1 },
  active: { color: '#1bbf80' }
})

export default Sort