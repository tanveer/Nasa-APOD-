import React from 'react';
import { Text, View, FlatList, Button, } from 'react-native';
import { List, Card } from 'react-native-elements';
import { fetchImageOfTheDay } from '../redux/actions'
import { connect } from 'react-redux'

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
            <View>
                <Card
                    image={{ uri: image.url }} resizeMode='cover' >
                    <Text>{image.title}</Text>
                    <Text style={{ paddingBottom: 10, }}>{image.date}</Text>
                </Card>
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