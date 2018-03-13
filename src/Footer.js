import React from 'react';
import {
  Text,
  View
} from 'react-native';

const Footer = (props) => {
  const { textStyle, backFooter } = styles;
  return (
    <View style={backFooter}>
      <Text style={textStyle}>{props.footerText}</Text>
    </View>
  );
};
const styles = {
    backFooter: {
      backgroundColor: '#212121',
      justifyContent: 'center',
      alignItems: 'center',
      height: 60,
      position: 'relative',
      marginTop: 10
    },
    textStyle: {
      fontSize: 25,
      color: '#fff',
      textAlign: 'center'
    }
}

export default Header;
