import React, {useState,useEffect} from 'react';
import { connect } from 'react-redux';
import MenuRES from './menu_res/index.js';
import MenuREJ from './menu_rej/index.js'
// import Menu from './menu.js';
import setNumber  from '../../actions/setNumber.js';


function Menu(props){
  let newIsPhone = props.store.phone.value;
 
  return (
    newIsPhone ? 
    <MenuRES {...props}/> : 
    <MenuREJ {...props}/>
  )
}

const mapStateToProps = (store /*, ownProps*/) => {
    return {
      store
    }
}
  
const mapDispatchToProps = { setNumber }
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu)