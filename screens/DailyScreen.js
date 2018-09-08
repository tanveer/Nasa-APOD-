import React from 'react';
import { Dimensions, Image, View, Text, } from 'react-native';
import { List, Card } from 'react-native-elements';
import { fetchImageOfTheDay } from '../redux/actions'
import { connect } from 'react-redux'
const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

class DailyScreenComponent extends React.Component {
    componentDidMount() {
        this.props.fetchImage()
    }

    handelShowDetail = ({ item }) => (
        this.props.navigation.navigate('DetailScreen', {
            title: item.title,
            explanation: item.explanation,
            url: item.url,
            date: item.date,
        })
    )

    render() {
        const { image, isFetching } = this.props.apod

        if (isFetching) {
            return (
                <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                    <Text style={{ fontSize: 16 }}>loading...</Text>
                </View>
            )
        }

        return (
            <View sryle={{felx: 1}}>
                <Image source={{ uri: image.url }}
                    resizeMode='contain'
                    style={{ height: WIDTH, width: WIDTH}}
                />
            </View>
        )
    }
}

mapStateToProps = state => {
    return {
        apod: state.apod
    }
}

export default connect(mapStateToProps, { fetchImage: fetchImageOfTheDay })(DailyScreenComponent)