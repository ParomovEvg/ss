import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
  } from 'react-native'

export default function Button  (props) {
    return(
        <TouchableOpacity 
            style={[{
                width: "100%",
                justifyContent: 'center',
                alignItems: 'center',
                padding: 20,
                backgroundColor: "#001941",
                borderRadius: 10,
            }, props.style]}
        >
            <Text 
                style = {[{
                    fontSize: 14,
                    fontWeight: 'bold',
                    color: "#fff",    
                    letterSpacing: 1.4,              
            },props.styleText]}
            >
                {props.children}
            </Text>
        </TouchableOpacity>
    )    
}