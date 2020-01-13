import React, {useEffect,useState,useCallback} from 'react';
import {Text, View, StyleSheet, Button, ActivityIndicator} from 'react-native';
import * as Permissions from 'expo-permissions';
import TopBar from '../globalModules/TopBar';
import Frame from './frame_svg.js';
import getStyle from './localStyle.js'
import { BarCodeScanner } from 'expo-barcode-scanner';
import ErrorQr from "./ErrorQr.js"
import {useSendQr} from "../../assets/hooks/useSendQr";

function Scanner(props) {

    const toThanks = () => { props.navigation.navigate('Thanks') };
    const toMenu = () => { props.navigation.navigate('Menu') };
    const back = () => { props.navigation.goBack() };

    const [error, setError] = useState(null);
    const [isLoading,sendQr] = useSendQr({
        onEnd: (res) => {
            toThanks();
        },
        onError: (e) => {
            setError(e);
        }
    });
    const handleBarCodeScanned = useCallback(({ type, data }) => {

        console.log(data)
        if(!isLoading && !error){
            sendQr(data);
        }
    },[isLoading, error]) ;




    const [hasCameraPermission, setHasCameraPermission] = useState(null);
    useEffect(()=>{
        (async () => {
            const { status } = await Permissions.askAsync(Permissions.CAMERA);
            setHasCameraPermission(status === 'granted')
        })();
    },[]);

    const style = getStyle(props);

    if (hasCameraPermission === null) {
      return (
          <View style={{          flex: 1,
              justifyContent: 'center',
              alignItems: 'center',}}>
                  <ActivityIndicator size="large"  />
                  <Text >Requesting for camera permission</Text>
          </View>
      )
    }
    if (hasCameraPermission === false) {
      return (
          <View style={{          flex: 1,
              justifyContent: 'center',
              alignItems: 'center',}}>
                  <ActivityIndicator size="large"  />
                  <Text>No access to camera</Text>
          </View>
      );
    }

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
        {!error && !isLoading ? <Frame /> : <ErrorQr dumpError={() => setError(null)} isLoadign={isLoading} error={error} />}
        {isLoading ? undefined :
          <TopBar style={style.topBar} handlers={[back, toMenu]} color={"#FFF"}> Сканер </TopBar>}
      </View>
    );
}



export default Scanner
