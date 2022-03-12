import React, {Component} from 'react';
import { Text, View, StyleSheet, Animated, ImageBackground} from 'react-native';


export default  class App extends  Component { 

constructor(props) { 
  super(props);
  this.state={
     Largura: new Animated.Value(200),
     Altura: new Animated.Value(180),
     Opacidade: new Animated.Value(1)
  };

Animated.loop(
  Animated.sequence([
    Animated.timing(
      this.state.Altura,{
        toValue: 5,
        duration: 800
      }
    ),

    Animated.timing(
      this.state.Largura,{
        toValue: 0,
        duration: 800
      }
    )
  ])
).start(); 
}

 render() { 
   return ( 
    <View style={style.container}> 
      <ImageBackground
        style={style.tinyLogo}
        source={require('./televisor.jpeg')}
      >
        <View style={{height: 180, width: 200, justifyContent: 'center', alignItems: 'center'}}>
          <Animated.View style ={{
            width: this.state.Largura, 
            height: this.state.Altura, 
            backgroundColor: "white" , 
            justifyContent: 'center',
            alignSelf: 'center',
            marginRight: 94,
            marginTop: 218,
            opacity: this.state.Opacidade }}> 
          </Animated.View>
        </View>
      </ImageBackground>
    </View>
   );
 }
} 

const style = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#fffff'
  },

  tinyLogo: {
    alignItems: 'center',
    width: 350,
    height: 350,
  }
});