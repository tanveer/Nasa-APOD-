import React from 'react'
import {
    Dimensions,
    Image,
    Text,
    View,
    StyleSheet
} from 'react-native';

const HEIGHT = Dimensions.get('window').height
const WIDTH = Dimensions.get('window').width

export default class Card extends React.Component {

    render() {
        const url = this.props.item.hdurl ? this.props.item.hdurl : this.props.item.url
        return (
            <View style={styles.container}>
                <View style={styles.imageContainerView}>
                    <Image
                        resizeMode='cover'
                        source={{ uri: url }}
                        style={styles.image}
                    />
                </View>

                <View style={styles.subView}>

                    <Text style={styles.title}>
                        {this.props.item.title}
                    </Text>

                    <Text style={styles.explanation}>
                        {this.props.item.date}
                    </Text>

                    <Text style={styles.explanation}
                        numberOfLines={4}
                        ellipsizeMode='tail'>
                        {
                            this.props.item.explanation
                        }
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: HEIGHT / 2,
        width: WIDTH,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 10,
        paddingTop: 10,
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
        height: null,
        width: null,
    },
    imageContainerView: {
        flex: 1,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden'
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    subView: {
        height: 150,
        backgroundColor: 'white',
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
    },
})
