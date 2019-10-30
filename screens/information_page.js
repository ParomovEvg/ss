import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import LocalStyle from "./info/localStyle";
import TopBar from "./globalModules/TopBar";
import colors from "../assets/colors";
import BottomBar from "./globalModules/BottomBar";
import {connect} from "react-redux";
import Generate , {GenConstants} from "./toGeneration/Generate";
const style = StyleSheet.create({
    center:{
        justifyContent:"center",
        flexGrow: 1,
    }
})


const Information_page = ({navigation,info,id}) => {

    const style= LocalStyle();
    const back = ()=>{ navigation.goBack() }
    const toScaner = ()=>{ navigation.navigate('Scaner') };

    return(
        <View style={style.container}>
            <TopBar handlers={[back]} rightIcon={{style:{display:"none"}}} color = {colors.main}>Информация</TopBar>
            <ScrollView
                style={{paddingHorizontal:15,marginTop: 5}}
            >
                {info[id].map((element, key) => {
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
            <BottomBar onPress={toScaner} />
        </View>
    )
};

function mapStateToProps(store) {
    return {
        id: store.generate.info.activeId,
        info: store.generate.info.question_page,
    }
}

export default connect(mapStateToProps,{})(Information_page);
