import React from 'react';
import LottieView from 'lottie-react-native';
import {View, Image} from 'react-native';

export default class ListAnimation extends React.Component {
  render() {
    return (

      <LottieView
      source={require('../assets/9935-list.json')}
      style={{width:"15%"}}
      autoPlay loop
       />
    )
  }
}
