import React from 'react'
import { View, StyleSheet,ImageBackground, Text  } from 'react-native'

const Special = () => {
  return (
    <View style={styles.wapper}>
      <View style={{width: '49%'}}>
        <ImageBackground  style={{ height: 120}} source={require('../../../images/bg/food_bg.jpg')}>
          <View style={{width: 80,height: 30, justifyContent: 'center' , alignItems: 'center' ,  backgroundColor: '#ed7a32'}}>
            <Text style={{ color: '#ffffff' }}>今日特惠</Text>
          </View>
          <Text style={{marginLeft: 10, marginTop: 5, color: '#004f00', fontWeight: 'bold'}}>休闲食品</Text>
          <Text style={{marginLeft: 10, marginTop: 5, color: '#004f00'}}>红枣核桃</Text>
        </ImageBackground>
      </View>
      <View style={{width: '49%'}}>
        <ImageBackground  style={{ height: 55}} source={require('../../../images/bg/tang_bg.jpg')}>
          <Text style={{marginLeft: 10, marginTop: 5, color: '#004f00', fontWeight: 'bold'}}>8.8折起</Text>
          <Text style={{marginLeft: 10, marginTop: 2, color: '#004f00'}}>好吃漂亮糖果</Text>
        </ImageBackground>
        <ImageBackground  style={{ height: 55, marginTop: 10}} source={require('../../../images/bg/lingshi_bg.jpg')}>
          <Text style={{marginLeft: 10, marginTop: 5, color: '#004f00', fontWeight: 'bold'}}>全场半价</Text>
          <Text style={{marginLeft: 10, marginTop: 2, color: '#004f00'}}>薯片薯条饼干</Text>
        </ImageBackground>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wapper: { flex: 1,flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 },
  
})

export default Special