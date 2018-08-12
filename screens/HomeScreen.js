import React from 'react';
import { Text, View, FlatList, Button,} from 'react-native';
import {List, Card} from 'react-native-elements';
import {ferchApodFromAPI} from '../redux/actions'
import {connect} from 'react-redux'

class HomeScreenComponent extends React.Component {
  componentDidMount() {
    this.props.fetchApodFromAPI()
  }

  handelShowDetail = ({item}) => (
      this.props.navigation.navigate('DetailScreen', {
          title: item.title,
          explanation: item.explanation,
          url: item.url,
          date: item.date,
      })
  )

  handleItemRender = ({item}) => (
      <Card
        image={{uri:item.url}} resizeMode='cover' >
        <Text>{item.title}</Text>
        <Text style={{paddingBottom: 10,}}>{item.date}</Text>
        <Button title='More...' onPress={ () => this.props.navigation.navigate('DetailScreen', {
            title: item.title,
            explanation: item.explanation,
            url: item.url,
            date: item.date,})}/>
      </Card>
  )
  
  render() {
    const {apod, isFetching} = this.props.apod
      if(isFetching) {
        return (
          <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
            <Text style={{fontSize: 16}}>loading...</Text>
            </View>
        )
      }
    return (
      <List containerStyle={{borderTopWidth: 0, borderBottomWidth: 0, marginTop: 0, }}>
        <FlatList
          data={apod}
          renderItem={this.handleItemRender}
          keyExtractor={item => item.date}
        />
      </List>
    )
  }
}

mapStateToProps = state => {
  return {
    apod: state.apod
  }
}

export default connect(mapStateToProps, {fetchApodFromAPI: ferchApodFromAPI})(HomeScreenComponent)
