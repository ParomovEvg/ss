import React, {useState,useEffect} from 'react';
import {connect, useSelector} from 'react-redux';
import MenuRES from './menu_res/index.js';
import MenuREJ from './menu_rej/index.js'
// import Menu from './menu.js';
import setNumber  from '../../actions/setNumber.js';



function Menu(props){


    const token = useSelector(state => state.token);
    const changingPassword = useSelector(state => state.changingPassword);

  return (
      !token || changingPassword ?
          <MenuREJ {...props}/> :
          <MenuRES {...props}/>

  )
}

  

export default Menu