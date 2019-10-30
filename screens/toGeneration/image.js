import React from 'react';
import {View,Image , StyleSheet} from 'react-native'
import colors from "../../assets/colors";
const style = StyleSheet.create({
    img:{
        borderRadius:10,
        margin: 15,
        width: 160,
        height: 160,
        borderWidth:1,
        borderColor: colors.main,
    }
})

const ImageAdd = ({url}) => {
    return (
        <Image source={{uri: url}}
               style={style.img} />
    );
};

export default ImageAdd;


