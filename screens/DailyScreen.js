import React from 'react';
import {
    Dimensions,
    ImageBackground,
    StyleSheet,
    ScrollView,
    Text,
    View,
} from 'react-native';
import { fetchImageOfTheDay } from '../redux/actions'
import { connect } from 'react-redux'
const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

class DailyScreenComponent extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        header: null,
    })

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
            <ScrollView style={styles.scrollView}>
                <View style={styles.container}>

                    <ImageBackground source={{ uri: image.url }}
                        resizeMode='cover'
                        style={styles.image}
                    >
                        <Text style={styles.title}>{image.title}</Text>

                    </ImageBackground>
                    <View style={{ flex: 1, backgroundColor: '#fefefa' }}>
                        <Text
                            style={styles.explanation}
                            numberOfLines={4}
                            ellipsizeMode='tail'>
                            {image.explanation}
                        </Text>
                    </View>
                </View>
            </ScrollView>
        )
    }
}



mapStateToProps = state => {
    return {
        apod: state.apod
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fefefa'
    },
    explanation: {
        fontSize: 14,
        fontWeight: '400',
        paddingRight: 10,
        paddingLeft: 10,
        paddingTop: 10
    },
    image: {
        flex: 1,
        height: HEIGHT / 1.5,
        minWidth: WIDTH
    },
    scrollView: {
        flex: 1,
        backgroundColor: '#fefefa',
    },
    title: {
        textAlign: 'center',
        paddingTop: 25,
        color: '#fefefa',
        fontSize: 16,
        fontWeight: 'bold'
    },
})

export default connect(mapStateToProps, { fetchImage: fetchImageOfTheDay })(DailyScreenComponent)
