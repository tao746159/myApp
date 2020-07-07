import React from 'react'
import {
  View,Text,StyleSheet, Image
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

const Project = () => {
  return (
    <View style={styles.content}>
      <View style={styles.topText}>
        <Text style={{fontSize: 18}}>购物车</Text>
      </View>
      <ScrollView>
        <View style={styles.context}>
          <View style={{ width: '30%' }}>
            <Image source={require('../../images/remmend/remmend_01.jpg')} style={styles.image} />
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  content: { flex: 1, backgroundColor: '#ffffff', padding: 10 },
  topText: { justifyContent: 'center', alignItems: 'center' },
  context: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ddd',
    height: 100,
    borderRadius: 10,
    marginTop: 10
  },
  image: {width: 80, height: 80, marginTop: 10, marginLeft: 10}
})

export default Project