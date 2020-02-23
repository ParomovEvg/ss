import React, {useEffect,useState,useCallback} from 'react';
import {Text, View, StyleSheet, Button, ActivityIndicator} from 'react-native';
import * as Permissions from 'expo-permissions';
import TopBar from '../globalModules/TopBar';
import Frame from './frame_svg.js';
import getStyle from './localStyle.js'
import { BarCodeScanner } from 'expo-barcode-scanner';
import ErrorQr from "./ErrorQr.js"
import {useSendQr} from "../../assets/hooks/useSendQr";
import {useEffectOnChange} from "../../assets/hooks/useEffectOnChange";
import { useCameraPermission } from './useCameraPermission';

function Scanner(props) {
    const style = getStyle(props);
    const toThanks = () => { props.navigation.navigate('Thanks') };
    const toMenu = () => { props.navigation.navigate('Menu') };
    const back = () => { props.navigation.goBack() };

    const [data, setData] = useState(null);
    const qr = useSendQr();
    useEffectOnChange(()=>{
        if(!qr.res && !qr.isLoading && !qr.error && data){
            qr.sendQr(data + "&fd=123");
            setData(null);
        }
    }, [data]);

    useEffectOnChange(()=>{
        if(qr.res){
            toThanks();
            qr.dumpQr();
        }
    }, [qr.res, qr.isLoading]);


    const hasCameraPermission = useCameraPermission();
    if (hasCameraPermission === null) {
      return (
          <View style={{          flex: 1,
              justifyContent: 'center',
              alignItems: 'center',}}>
                  <ActivityIndicator size="large"  />
                  <Text >Ожидание разрешения доступа к камере</Text>
          </View>
      )
    }
    if (hasCameraPermission === false) {
      return (
          <View style={{          flex: 1,
              justifyContent: 'center',
              alignItems: 'center',}}>
                  <ActivityIndicator size="large"  />
                  <Text>Нет доступа к камере</Text>
          </View>
      );
    }

    const handleBarCodeScanned = ({ type, data }) => {
        setData(data);
    };

    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <BarCodeScanner
          onBarCodeScanned={handleBarCodeScanned}
          style={StyleSheet.absoluteFill}
        />
        {!qr.isLoading && !qr.error && !qr.res ?
            (
                <Frame />
            ) : (
                <ErrorQr qr={qr}/>
            )
        }
        {qr.isLoading ? undefined :
          <TopBar style={style.topBar} handlers={[back, toMenu]} color={"#FFF"}> Сканер </TopBar>}
      </View>
    );
}



export default Scanner
