import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ColorScreen from "./screens/ColorScreen"

export default function App() {
  return (
    <View style={styles.container}>
   
      <StatusBar style="auto" />
      <ColorScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   
    backgroundColor: '#fff',
    alignItems: 'center',
    borderWidth:10,
    width:100,
    flex:1,
    padding:20
    

  },
});
