import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import Swiper from "react-native-web-swiper";

const PhotoSwiper = () => {
    return (
        <View style={styles.sliderStyle}>
            <Swiper
                loop
                timeout={-5}
                controlsProps={{
                    dotsTouchable: true,
                    nextTitleStyle: { display: 'none' },
                    prevTitleStyle: { display: 'none' },
                }}>
                <View style={[styles.slideContainer, styles.slide1]}>
                    <Image
                        style={styles.imageStyle}
                        source={require('../assets/img/ai.jpg')}
                    />
                </View>
                <View style={[styles.slideContainer, styles.slide2]}>
                    <Image
                        style={styles.imageStyle}
                        source={require('../assets/img/prog.png')}
                    />
                </View>
                <View style={[styles.slideContainer, styles.slide3]}>
                    <Image
                        style={styles.imageStyle}
                        source={require('../assets/img/graphic.jpg')}
                    />
                </View>
            </Swiper>
        </View>

    )
}
const styles = StyleSheet.create({
    sliderStyle: {
        height: 290,
        marginHorizontal: 10,
        marginVertical: 10,

    },
    slideContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
    },
    slide1: {
        backgroundColor: "rgba(20,20,200,0.3)",
    },
    slide2: {
        backgroundColor: "rgba(20,200,20,0.3)"
    },
    slide3: {
        backgroundColor: "rgba(200,20,20,0.3)"
    },
    imageStyle: {
        width: '100%',
        height: '100%',
        borderRadius: 20
    }
});
export default PhotoSwiper;