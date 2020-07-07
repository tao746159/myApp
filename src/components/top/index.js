import React from 'react';
import { View, TextInput } from 'react-native';
import { SearchBar } from '@ant-design/react-native';

import SearchList from '../../pages/searchList'
export default class SearchBarDemo extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      value: '',
    };
    this.onChange = value => {
      this.setState({ value });
    };
    this.clear = () => {
      this.setState({ value: '' });
    };
  }
  render() {
    return (
      <View style={{ marginTop: 10, backgroundColor: '#ffffff' }} onPress={() => { this.props.navigator.push(SearchList) }}>
        <TextInput
          value={this.state.value}
          placeholder="搜索"
          style={{ height: 40, backgroundColor: '#ffffff', borderColor: '#dddddd', borderWidth: 1, borderRadius: 5 }}

          onChangeText={this.onChange}
        />
      </View>
    );
  }
}