import React from 'react'
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native'
import {ActivityIndicator} from '@ant-design/react-native'
import Iconfonts from 'react-native-vector-icons/Ionicons'

const SortRight = (props) => {

  const { navigate } = props.props.navigation;
  return (
    <View>
      {
        props.list.map((item, index) => {
          return <View key={index} style={{ marginTop: 10, marginLeft: 10, marginRight: 10, marginBottom: 30 }}>
            <View style={{ marginTop: 10, flexDirection: 'row', flexWrap: 'wrap' }}>
              <View style={{ width: '30%' }}>
                <TouchableHighlight underlayColor="" onPress={() => { navigate('Defail', { id: item.id }) }}><Image source={{ uri: item.src }} style={{ width: 60, height: 60 }} /></TouchableHighlight>
              </View>
              <View style={{ width: '70%' }}>
                <Text numberOfLines={1}>{item.title}</Text>
                <View>
                  <Text style={{ fontSize: 16, marginTop: 10, color: 'red' }}>{item.pice}</Text>
                  <Iconfonts name="add-circle-outline" size={20} style={{ color: '#1bbf80', position: 'absolute', right: 0, top: 10 }}></Iconfonts>
                </View>
              </View>
            </View>
            <View><ActivityIndicator
          animating={props.show}
          toast
          size="large"
          text="Loading..."
        /></View>
          </View>
        })
      }
    </View>
  )
}

export default SortRight