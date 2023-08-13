import React from "react";
import { useState } from "react";
import {Text, View, Button, StyleSheet, FlatList} from "react-native";

const ColorScreen = () =>{

    const [colors,setColor] = useState([]);
    return(
        <View>
            <Text>This is the color screen</Text>
            <Button title="Press for new Color" 
                    onPress={() =>{
                        setColor( [...colors,randomrgb()]);
                    }}/>
            <FlatList 
            data={colors}
            keyExtractor={(color)=>{return color}}
            renderItem={({item})=>{
                return <View style={{height:100, width:100 ,backgroundColor:item}}>

                </View>
            }}
            />
        </View>
    );
}

const styles = StyleSheet.create({

    square:{
        height:100,
        width:100,        
    }
})

const randomrgb = ()=>{

    const red = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);

    let colorString = `rgb(${red},${blue},${green})`;

    return colorString;

    
}

export default ColorScreen;