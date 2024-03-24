import { StatusBar } from 'expo-status-bar';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import DiceOne from './assets/One.png'
import DiceTwo from './assets/Two.png'
import DiceThree from './assets/Three.png'
import DiceFour from './assets/Four.png'
import DiceFive from './assets/Five.png'
import DiceSix from './assets/Six.png'
import { ImageSourcePropType } from 'react-native';
import { PropsWithChildren, useState } from 'react';
import RNReactNativeHapticFeedback from 'react-native-haptic-feedback';
// type DiceProps = PropsWithChildren<{
//   imagrUrl : ImageSourcePropType
// }>
const Dice= ({imageUrl})=>{

  return (
    <View>
      <Image style={styles.diceImage} source={imageUrl}/>
    </View>
  )

}
const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false
};
function App() {
  const [diceImage,setDiceImage]= useState(DiceOne)

  const rolledDiceOnTap = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    switch(randomNumber){
      case 1: setDiceImage(DiceOne)
      break;
      case 2: setDiceImage(DiceTwo)
      break;
      case 3 : setDiceImage(DiceThree)
      break;
      case 4 : setDiceImage(DiceFour)
      break;
      case 5 : setDiceImage(DiceFive)
      break;
      case 6 : setDiceImage(DiceSix)
      break;
      default: setDiceImage(DiceOne)
      break;

    }
    RNReactNativeHapticFeedback.trigger("impactLight", options);
  }
  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImage}/>
      <Pressable
      onPress={rolledDiceOnTap} >
        <Text style={styles.rollDiceBtnText}>
          Roll the dice
          </Text>
          </Pressable>
    </View>
  );

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});

export default App;
