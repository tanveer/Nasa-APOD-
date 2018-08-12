import React from 'react';
import { ScrollView, StyleSheet, Text, View, FlatList, Button, Image, Dimensions} from 'react-native';
import { Card } from 'react-native-elements';


export default class DetailScreenComponent extends React.Component {

state = {
  title: '',
  explanation: '',
  url: '',
  date: '',
}

handleGoBack = () => {
  this.props.navigation.navigate('HomeScreen')
}

handleData = () => {
  this.setState({
    title: this.props.navigation.getParam('title'),
    explanation: this.props.navigation.getParam('explanation'),
    url: this.props.navigation.getParam('url'),
    date: this.props.navigation.getParam('date'),
  })
}
  render() {

    const { width, height } = Dimensions.get('window')

    return (
      <ScrollView>
    <Card
      image={{uri: this.props.navigation.getParam('url')}}
      resizeMode='cover'
      imageStyle={{height: 300,}}
      >

        <Text style={{paddingBottom: 10, fontFamily: 'Helvetica-Bold', alignItems: 'center',}}>
        {this.props.navigation.getParam('title')}</Text>
        <Text>{this.props.navigation.getParam('date')}</Text>
        <Text>{this.props.navigation.getParam('explanation')}</Text>
      </Card>
      </ScrollView>
    )
  }
}
