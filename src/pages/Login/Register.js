import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Alert
} from 'react-native'
import Iconfonts from 'react-native-vector-icons/Ionicons'
import { InputItem, Button, Toast, Provider, ActivityIndicator } from '@ant-design/react-native'
import axios from 'axios'


import {isEmail} from '../../utils/utils'
const Register = (props) => {
  const [value, setValue] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [retpassword, setRetpassword] = React.useState('')
  const [show, setShow] = React.useState(false)
  const handleRegister = () => {
    if (value === '' || password === '' || retpassword === '') return;
    const isTure = isEmail(value)
    if (!isTure) {
      return Toast.info('请输入正确邮箱！')
    }
    if (password.length < 6) {
      return Toast.info('密码最少6位')
    }
    if (password !== retpassword) {
      return Toast.info('两次密码输入不一致')
    }
    // Alert.alert('1')
    axios.post('http://www.leother.cool:3002/api/users/register', { username: value, password: password })
      setShow(true)
      .then(res => {
        if (res.data.code === 200) {
          Toast.success('注册成功')
          setShow(false)
          setTimeout(() => {
            props.navigation.navigate('Login')
             
          }, 1000)
        } else if (res.data.code === 101) {
          setShow(false)
          Toast.info(res.data.msg)
          return
        }
      })
      
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <TouchableHighlight underlayColor onPress={()=>{props.navigation.navigate('Login')}}>
          <View style={{flexDirection: 'row',justifyContent: 'flex-end',alignItems: 'center'}}>
            <Text style={{fontSize: 16}}>已有账号，<Text style={{color: '#578bf2'}}>立即登录</Text></Text>
            <Iconfonts name="chevron-forward-outline" size={22}/>
          </View>
        </TouchableHighlight>
      </View>
      <View style={styles.context}>
        <View style={{alignItems: 'center'}}>
          <Text style={{ fontSize: 20 }}>用户注册</Text>
        </View>
        <View style={{marginTop: 60}}>
          <View>
            <InputItem
            clear
            value={value}
            onChange={value => setValue(value)}
            placeholder="用户名/邮箱"
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
          <View style={{marginTop: 20}}>
            <InputItem
            clear
              value={retpassword}
              type="password"
            onChange={value => {
              setRetpassword(value)
            }}
              placeholder="重复密码"
              
          >
            重复密码
          </InputItem>
          </View>
          <Button type="primary" style={{ marginTop: 40 }} onPress={handleRegister}>注册</Button>
          <View><ActivityIndicator
          animating={show}
          toast
          size="large"
          text="Loading..."
        /></View>
        </View>
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
      <Register {...props} />
    </Provider>
  )
}

export default LoginWapper