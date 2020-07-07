import React from 'react'
import {View,Text, StyleSheet, Image } from 'react-native'

const Navigate = (props) => {
    return (
      <View style={styles.navigate}>
        <View style={styles.navigateFlue}>
          <View style={styles.ViewsWarpper}>
            <View style={[styles.icons, {backgroundColor: 'darkgreen'}]}>
            <Image source={require('../../../images/icons/snack.png')} style={{width: 50, height: 50}} />
          </View>
          <View style={styles.iconsText}><Text>休闲食品</Text></View>
          </View>
          <View style={styles.ViewsWarpper}>
            <View style={[styles.icons, {backgroundColor: '#4e83f3'}]}>
            <Image source={require('../../../images/icons/drink.png')} style={{width: 40, height: 40}} />
          </View>
          <View style={styles.iconsText}><Text>乳品饮料</Text></View>
          </View>
          <View style={styles.ViewsWarpper}>
            <View style={[styles.icons, {backgroundColor: '#ee8036'}]}>
            <Image source={require('../../../images/icons/seafood.png')} style={{width: 50, height: 50}} />
          </View>
          <View style={styles.iconsText}><Text>水产海鲜</Text></View>
          </View>
          <View style={styles.ViewsWarpper}>
            <View style={[styles.icons, {backgroundColor: '#f4bc52'}]}>
            <Image source={require('../../../images/icons/fruit.png')} style={{width: 45, height: 45}} />
          </View>
          <View style={styles.iconsText}><Text>新鲜水果</Text></View>
          </View>
        </View>
      </View>
    )
}
 
const styles = StyleSheet.create({
  navigate: {
     flex: 1
  },
  navigateFlue: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  },
  icons: {
    
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  iconsText: {
    marginTop: 5
  }
 })
 
 export default Navigate