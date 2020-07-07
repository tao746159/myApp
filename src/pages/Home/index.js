import React from 'react'
import {
  View, StyleSheet, ScrollView
} from 'react-native'


import Top from './../../components/top'
import RCarousel from './components/Carousel'
import Navigate from './components/Navigate'
import Special from './components/Special'
import Recommend from './components/Recommend'
const Home = (props) => {
  const onHorizontalSelectedIndexChange = (index) => {
    /* tslint:disable: no-console */
    console.log('horizontal change to', index);
  }

  return (
    <View style={styles.Home}>
      <Top props={props} title="首页"></Top>
      <ScrollView>
        <RCarousel></RCarousel>
        <Navigate props={props}></Navigate>
        <Special></Special>
        <Recommend></Recommend>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  Home: { flex: 1, paddingLeft: 15, paddingRight: 15, marginTop: 10, backgroundColor: '#ffffff' },

})

export default Home