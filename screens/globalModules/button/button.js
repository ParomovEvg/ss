import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
  } from 'react-native'
import PropTypes from 'prop-types'


function Button  ({onPress,style,styleText,children}) {
    return(
        <TouchableOpacity 
        onPress = {onPress}
            style={[{
                width: "100%",
                justifyContent: 'center',
                alignItems: 'center',
                padding: 20,
                backgroundColor: "#001941",
                borderRadius: 10,
            }, style]}
        >
            <Text 
                style = {[{
                    fontSize: 14,
                    fontWeight: 'bold',
                    color: "#fff",    
                    letterSpacing: 1.4,              
            },styleText]}
            >
                {children}
            </Text>
        </TouchableOpacity>
    )    
}

Button.propTypes = {
    style: PropTypes.object,
    styleText:PropTypes.object,
    children: PropTypes.element.isRequired,
    onPress:PropTypes.func,
};

export default Button;