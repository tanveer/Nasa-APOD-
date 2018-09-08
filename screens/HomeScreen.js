import React from 'react';
import { Dimensions, Text, View } from 'react-native';
import { ferchApodFromAPI } from '../redux/actions'
import { connect } from 'react-redux'
import Carousel from 'react-native-snap-carousel'
import Card from './Card'
import _ from 'lodash'

class HomeScreenComponent extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Image of the day',
    headerTintColor: 'white',
    headerBackTitle: null,
    headerStyle: {
      backgroundColor: 'red',
    },
  })


  componentDidMount() {
    this.props.fetchApodFromAPI()
  }

  handelShowDetail = ({ item }) => (
    this.props.navigation.navigate('DetailScreen', {
      title: item.title,
      explanation: item.explanation,
      url: item.url,
      date: item.date,
    })
  )

  renderCard = (item) => {
    return (
      <Card {...item} navigation={this.props.navigation} />
    )
  }

  setTitle = (title) => (
    this.props.navigation.setParams({title: title})
  )

  render() {
    const { apod, isFetching } = this.props.apod
    const apod_sorted = _.filter(apod, (obj) => {
      return obj.media_type === 'image' // show only images
    }).sort((obj1, obj2) => obj1.date < obj2.date) // sort by date 


    if (isFetching) {
      return (
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
          <Text style={{ fontSize: 16 }}>loading...</Text>
        </View>
      )
    }

    return (
      <Carousel
        data={apod_sorted}
        renderItem={this.renderCard}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={Dimensions.get('window').width}
        containerStyle={{ borderRadius: 10 }}
      />
    )
  }
}

mapStateToProps = state => {
  return {
    apod: state.apod
  }
}

export default connect(mapStateToProps, { fetchApodFromAPI: ferchApodFromAPI })(HomeScreenComponent)
