import React from "react";
import { useState } from "react";
import { Text, View, Button, FlatList } from "react-native";
import ColorBar from "../components/ColorBar";
import Header from "../components/header";


const ColorScreen = () => {

    const [colors, setColor] = useState([]);
    return (
        <div >
            <Header />
            <Button style={{ width: 300, height: 100 }} title="Press for new Color"
                onPress={() => {
                    setColor([...colors, randomrgb()]);
                }} />
            <View style={{ alignSelf: 'baseline', flexWrap: "wrap" }}>

                <FlatList

                    data={colors}
                    keyExtractor={(colorString) => { return colorString }}
                    renderItem={({ item }) => {

                        return <View style={{ flexDirection: 'row' }}> <View style={{ alignSelf: "center", borderRadius: 100, height: 200, width: 200, backgroundColor: item.colorString }}>
                        </View>

                            <View style={{ flexDirection: 'column' }}>
                                <ColorBar 
                                    colorValue={item.red} 
                                    colorHandler={
                                    () => {
                                        setRedColor(item.redLevel)
                                    }
                                }
                                    colorString={item.redLevel} />
                                <ColorBar 
                                    colorValue={item.green} 
                                    colorHandler={
                                    () => {
                                        setGreenColor(item.greenLevel)
                                    }
                                }
                                    colorString={item.greenLevel} />
                                <ColorBar 
                                    colorValue={item.blue}
                                    colorHandler={
                                        () => {
                                            setBlueColor(item.blueLevel)
                                        }
                                    }
                                    colorString={item.blueLevel}
                                />
                            </View>

                        </View>
                    }}
                />


            </View>
        </div>
    );
}


const randomrgb = () => {

    let newColor = {
        red: 0,
        green: 0,
        blue: 0,
        colorString: '',
        redLevel: '',
        greenLevel: '',
        blueLevel: ''

    }

    newColor.red = Math.floor(Math.random() * 256);
    newColor.blue = Math.floor(Math.random() * 256);
    newColor.green = Math.floor(Math.random() * 256);




    newColor.colorString = `rgb(${newColor.red},${newColor.blue},${newColor.green})`;
    newColor.redLevel = `rgb(${newColor.red},${0},${0})`;
    newColor.greenLevel = `rgb(${0},${newColor.green},${0})`;
    newColor.blueLevel = `rgb(${0},${0},${newColor.blue})`;


    return newColor;

}



export default ColorScreen;

/**
 * <!DOCTYPE html>
<html>
<head>
<style>
.flex-container {
  display: flex;
  flex-wrap: wrap;
  background-color: DodgerBlue;
}

.flex-container > div {
  background-color: #f1f1f1;
  width: 100px;
  margin: 10px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;
}
</style>
</head>
<body>

<h1>The flex-wrap Property</h1>

<p>The "flex-wrap: wrap;" specifies that the flex items will wrap if necessary:</p>

<div class="flex-container">
  <div>1</div>
  <div>2</div>
  <div>3</div>  
  <div>4</div>
  <div>5</div>
  <div>6</div>  
  <div>7</div>
  <div>8</div>
  <div>9</div>  
  <div>10</div>
  <div>11</div>
  <div>12</div>  
</div>

<p>Try resizing the browser window.</p>

</body>
</html>



 */

