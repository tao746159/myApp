import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'



const Recommend = (props) => {
  let [list, setList] = useState([])
  const handleGetList = () => {
    fetch('http://www.leother.cool:3002/api/homelist')
      .then((response) => response.json())
      .then((json) => setList(json.list))
  }

  useEffect(() => {
    handleGetList()
  }, [])
  const { navigate } = props.navigation;
  return (
    <View style={{ marginBottom: 30 }}>
      <View style={styles.recommendTop}>
        <Text style={styles.text}>为你推荐</Text>
        <View style={{ flexDirection: 'row' }} >
          <Text>查看全部</Text>
          <Ionicons name="ios-chevron-forward" size={20}></Ionicons>
        </View>
      </View>
      <View style={styles.content}>
        {
          list.map((item, index) => {
            return <TouchableHighlight underlayColor="" key={index} onPress={() => { navigate('Defail', { id: item.id }) }} key={index} style={{ width: '49%', marginTop: 20 }}>
              <View>
                <View>
                  <Image source={{ uri: item.src }} style={{ maxWidth: '100%', height: 120 }} />
                </View>
                <View>
                  <Text numberOfLines={1} style={styles.title}>{item.title}</Text>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.pice}>{item.pice}</Text>
                    <Text style={{ marginLeft: 5, color: '#dddddd' }}>{item.paying}</Text>
                  </View>
                </View>
              </View>
            </TouchableHighlight>
          })
        }


      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wapper: { flex: 1 },
  recommendTop: { marginTop: 30, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  text: { fontSize: 24 },
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginTop: 20
  },
  title: {
    marginTop: 10
  },
  pice: {
    color: '#f2510f',
    fontSize: 18,
    fontWeight: 'bold'
  }
})


export default Recommend