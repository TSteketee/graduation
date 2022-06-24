import { StyleSheet, Text, Image, View } from 'react-native';


export const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image
            style={styles.logo}
            source={require('../assets/logo.png')}
          />
        <Text style={styles.maintext}>Welcome back</Text>
    </View>

  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    maintext: {
      fontSize: 30,
      color: '#fff',
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 50
    },
    logo: {
      height: 50,
      width: 57
    }
  
  });
  