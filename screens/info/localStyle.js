import { StyleSheet } from 'react-native';
import colors from '../../assets/colors.js'



export default function(){
    let obgect = StyleSheet.create({
        container:{
            flex:1,
            width:"100%",
            backgroundColor: colors.mainBg,
            paddingTop: 20,
        },



    })
    return obgect;
}


