import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  AsyncStorage
} from 'react-native'
import Iconfonts from 'react-native-vector-icons/Ionicons'
import { InputItem, Button, Provider, Toast, ActivityIndicator } from '@ant-design/react-native'
import axios from 'axios'
const Login = (props) => {
  const [value, setValue] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [show, setShow] = React.useState(false)
  
  const handleLogin = () => {
    if (value === '' || password === '') return
    setShow(true)
    axios.post('http://www.leother.cool:3002/api/users/login', { username: value, password: password })
      .then(res => {
        console.log(res.data)
        if (res.data.code === 200) {
          setShow(false)
          Toast.success('登录成功')
           AsyncStorage.setItem('username', res.data.username)
           AsyncStorage.setItem('age', res.data.age)
           AsyncStorage.setItem('phone', res.data.phone)
           AsyncStorage.setItem('nickname', res.data.nickname)
           AsyncStorage.setItem('created', res.data.created)
          setTimeout(() => {
            props.navigation.navigate('Home')
          }, 1000)
        } else {
          Toast.info(res.data.msg)
          setShow(false)
      }
    } )
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <TouchableHighlight underlayColor onPress={()=>{props.navigation.navigate('Register')}}>
          <View style={{flexDirection: 'row',justifyContent: 'flex-end',alignItems: 'center'}}>
            <Text style={{fontSize: 16}}>还没有账号，<Text style={{color: '#578bf2'}}>立即注册</Text></Text>
            <Iconfonts name="chevron-forward-outline" size={22}/>
          </View>
        </TouchableHighlight>
      </View>
      <View style={styles.context}>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 20}}>用户登录</Text>
        </View>
        <View style={{marginTop: 60}}>
          <View>
            <InputItem
            clear
            value={value}
            onChange={value => setValue(value)}
            placeholder="用户名"
          >
              用户名
          </InputItem>
            
          </View>
          <View style={{marginTop: 20}}>
            <InputItem
            clear
              value={password}
              type="password"
            onChange={value => {
              setPassword(value)
            }}
              placeholder="密码"
              
          >
            密码
          </InputItem>
          </View>
        </View>
        <Button onPress={handleLogin} style={{ marginTop: 60 }} type="primary">登录</Button>
        <View><ActivityIndicator animating={show}  toast
          size="large"
          text="Loading..."/></View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{flex: 1, backgroundColor: '#fff'},
  top: {
    height: 60,
    padding: 15
  },
  context: {
    padding: 20
  }
})


const LoginWapper = (props) => {
  return (
    <Provider>
    <Login {...props} />
  </Provider>
 )
}

export default LoginWapper