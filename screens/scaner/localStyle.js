import {StyleSheet} from 'react-native';
import colors from '../../assets/colors.js';


export default function (props){
    return  StyleSheet.create({
        container:{
            flex:1,
            width:"100%",
            backgroundColor: colors.mainBg,
            paddingTop: 20,
        },
    })
}