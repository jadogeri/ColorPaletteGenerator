import React from "react";
import {View,Text,StyleSheet} from "react-native";

const Header = () =>{
 
    return(
        <Text style={styles.headerText}>Random Color Palette Generator</Text>

    );
}

const styles = StyleSheet.create({
   
    headerText:{
        paddingTop:10,
        fontSize:55,
        alignSelf:"center",
        fontStyle:"italic",

    }
})

export default Header;



