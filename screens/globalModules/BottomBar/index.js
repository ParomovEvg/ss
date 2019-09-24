import React from 'react';
import { connect } from 'react-redux';
import {StyleSheet,  Text, View, Image } from 'react-native';
import colors from '../../../assets/colors.js';
import Button from '../button/button.js';
import Timer from './timer.js'

function BottomBar(props){
    let time = new Date(2019,9,15,14,35)
    return(
        <View style={style.container}>
            <Image style={style.bgimage}  source={require('./qr.png')} resizeMode = "cover" />
            <Timer {...{time}}/>
            <Button style={style.button} onPress={props.onPress} > Сканировать </Button>

        </View>
    )
}

const mapStateToProps = (store /*, ownProps*/) => {
    return {
      store
    }
}
  
const mapDispatchToProps = {  }
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BottomBar)

const style = StyleSheet.create({
    container:{
        paddingTop: 20,
        overflow: 'hidden',
        marginTop: "auto",
        backgroundColor: colors.main,
        width: "100%",
        // height: 140,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        // borderRadius: 15,
        elevation: 1,
    },
    bgimage:{
        position: "absolute",
        zIndex: 0,
        bottom: 0,
        left: 0,
        width: "100%",
        height: undefined,
        aspectRatio: 750 / 167,
        
    },
    button:{
        backgroundColor: 'transparent',
        borderColor: colors.active,
        borderWidth: 2,
        width: "90%",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "auto",
        marginBottom: 20,
    },
 
})

