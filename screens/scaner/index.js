import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import * as Permissions from 'expo-permissions';
import TopBar from '../globalModules/TopBar';
import Frame from './frame_svg.js';
import getStyle from './localStyle.js'
import { BarCodeScanner } from 'expo-barcode-scanner';
import ErrorQr from "./ErrorQr.js"


class BarcodeScannerExample extends React.Component {
  state = {
    hasCameraPermission: null,
  };

  async componentDidMount() {
    this.getPermissionsAsync();
  }

  shouldComponentUpdate(nextProps, nextState){
    if(this.props.wait && nextProps.ready){
      this.toThanks()
      this.props.qrDump();
      return true;
    } else return true;

  }
  
  getPermissionsAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  };

  handleBarCodeScanned = ({ type, data }) => {
    this.props.sendQR(this.props.phone, data);
  };

  toThanks = () => { this.props.navigation.navigate('Thanks') };
  toMenu = () => { this.props.navigation.navigate('Menu') };
  back = () => { this.props.navigation.goBack() }

  render() {
    const { hasCameraPermission } = this.state;
    const style = getStyle(this.props);
    const { ready, ...props } = this.props;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }

    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <BarCodeScanner
          onBarCodeScanned={ready ? this.handleBarCodeScanned : undefined}
          style={StyleSheet.absoluteFill}
        />
        {ready ? <Frame /> : <ErrorQr {...props} />}
        {props.wait ? undefined :
          <TopBar style={style.topBar} handlers={[this.back, this.toMenu]} color={"#FFF"}> Сканер </TopBar>}
      </View>
    );
  }
}




import { connect } from 'react-redux';
const mapStateToProps = (store) => {
  return {
    phone: store.phone.value,
    reqState: store.qr.state,
    TOS: store.qr.TOS,
    ready: store.qr.state === store.qr.TOS.READY,
    wait: store.qr.state === store.qr.TOS.WAIT,
    bad: store.qr.state === store.qr.TOS.BAD_QR,
    wrangCheckout: store.qr.state === store.qr.TOS.WRONG_CHECKOUT,
    already: store.qr.state === store.qr.TOS.QR_ALREADY_IS,
  }
}

import sendQR from '../../actions/sendQR.js';
import qrDump from '../../actions/qrDump.js';


const mapDispatchToProps = { sendQR, qrDump }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BarcodeScannerExample)