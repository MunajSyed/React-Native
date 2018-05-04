import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
    //Destructor so that u dont have to keep using props.album.title
    const { title, artist, thumbnail_image, image, url } = album;
    //Destructor so that you dont have to keep calling style
    const { headerContentStyle, thumbnailStyle, thumbnailContainerStyle,
         headerTextStyle, imageStyle } = styles;
    return (
        <Card>
            {/*Artist image, name, and song */ }
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            {/*Album cover */ }
            <CardSection>
                <Image style={imageStyle} source={{ uri: image }} />
            </CardSection>
            {/*Button to Buy */ }
            <CardSection>
                {/*Linking is set for a button to open a URL */ }
                <Button onPress={() => Linking.openURL(url)} >
                    Buy Now
                </Button>
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    }
};

export default AlbumDetail;
