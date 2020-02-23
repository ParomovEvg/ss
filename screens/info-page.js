import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import LocalStyle from "./info/localStyle";
import TopBar from "./globalModules/TopBar";
import colors from "../assets/colors";
import BottomBar from "./globalModules/BottomBar";
import Generate , {GenConstants} from "./toGeneration/Generate";
import { useSelector } from 'react-redux';


const InfoPage = ({navigation}) => {

    const style= LocalStyle();
    const back = ()=>{ navigation.goBack() };
    const toScanner = ()=>{ navigation.navigate('Scanner') };
    const [{Info}, infoId] = useSelector(state => [state.text, state.infoId]);
    console.log({Info, infoId})

    return(
        <View style={style.container}>
            <TopBar handlers={[back]} rightIcon={{style:{display:"none"}}} color = {colors.main}>Информация</TopBar>
            <ScrollView
                style={{paddingHorizontal:15,marginTop: 5}}
            >
                {Info.question_page[infoId].map((element, key) => {
                    if(element.type === GenConstants.Head1 ){
                        return <Generate.Head1  key={key} >{element.text}</Generate.Head1>
                    }
                    if(element.type === GenConstants.Head2 ){
                        return <Generate.Head2  key={key} >{element.text}</Generate.Head2>
                    }
                    if(element.type === GenConstants.Paragraph ){
                        return <Generate.Paragraph key={key} >{element.text}</Generate.Paragraph>
                    }
                    if(element.type === GenConstants.Anchor ){
                        return <Generate.Anchor key={key} url={element.url} >{element.text}</Generate.Anchor>
                    }
                    if(element.type === GenConstants.Img ){
                        return <Generate.Img key={key} url={element.url} />
                    }
                })}
                <View style={{height:20}}/>
            </ScrollView>
            <BottomBar onPress={toScanner} />
        </View>
    )
};



export default InfoPage;
