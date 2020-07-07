import React from 'react'
import { View,Text,StyleSheet, Image,ScrollView } from 'react-native'
import { Carousel } from '@ant-design/react-native';

const RCarousel = () => {
  return (
     <View style={{height:150,backgroundColor:'#ddd', overflow: 'hidden',marginTop: 16}}>
          <Carousel
              style={styles.wrapper}
              selectedIndex={2}
              autoplay
              infinite
            >
              <View
                style={[styles.containerHorizontal]}
              >
                  <Image source={require('../../../images/caroul/caroul-01.jpg')} style={{maxWidth:'100%'}}/>
              </View>
              <View
                style={[styles.containerHorizontal]}
              >
              <Image source={require('../../../images/caroul/caroul-04.jpg')} style={{maxWidth:'100%'}}/>
              </View>
              <View
                style={[
                  styles.containerHorizontal
                ]}
              >
                <Image source={require('../../../images/caroul/caroul-02.jpg')} style={{maxWidth:'100%'}}/>
              </View>
              <View
                style={[styles.containerHorizontal]}
              >
              <Image source={require('../../../images/caroul/caroul-03.jpg')} style={{maxWidth:'100%'}}/>
              </View>
              
            </Carousel>
        </View>
  )
}
 const styles = StyleSheet.create({
   wrapper: {
    backgroundColor: '#fff',
  },
    containerHorizontal: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
  }
})
 export default RCarousel