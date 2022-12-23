/**
get shadow state for layout style
*/
import {StyleProp, TextStyle, ViewStyle} from 'react-native';

export const getShadow = (size = 1, isText: boolean = false, shadowColor = '#000000') => {
  let shadow: StyleProp<ViewStyle> = {
    elevation: size * 2,
    shadowRadius: size * 3,
    shadowColor,
    shadowOpacity: size / 5,
    shadowOffset: {height: 0, width: 0},
  };
  if (isText) {
    const textShadow: StyleProp<TextStyle> = {
      textShadowColor: shadowColor,
      textShadowRadius: 3,
      textShadowOffset: {width: 0, height: 0},
    };
    shadow = {...shadow, ...textShadow};
  }
  return shadow;
}
