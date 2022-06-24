import { StyleSheet, Image, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const logoWidth = 57;

export const Background = ({reverse}) =>  {
    let x_start = 0;
    let x_end = 0;
    let y_start = 0;
    let y_end = 0;
    reverse ? x_start = 1 : x_start = 0;
    reverse ? x_end = 0 : x_end = 1;
    reverse ? y_start = 0 : y_start = 1;
    reverse ? y_end = 1 : y_end = 0;

  return (
    <>

    <LinearGradient
        colors={['rgb(32,61,60)', 'rgb(29,29,29)']}
        start={{ x: x_start, y: y_start }}
        end={{ x: x_end, y: y_end }}
        style= {reverse ? styles.backgroundReverse : styles.background}
  />
    </>
  )
}


const styles = StyleSheet.create({
    background: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    },
    backgroundReverse: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      }
  });