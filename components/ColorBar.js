import React from "react";
import {View,Text} from "react-native";

const ColorBar = (props) =>{
 
    return(
        <View style={{backgroundColor:props.colorString,
                      flexDirection:'row',
                      height:200/3,
                      width:1000}} 
              onPress={props.colorHandler}>  
        <Text>{props.colorValue}</Text>
        <Text>{props.colorString}</Text>

        </View>
    );
}


export default ColorBar;



