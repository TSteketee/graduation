import {Text, View, StyleSheet} from 'react-native';
import { Background } from '../components/Background';




export const AboutView = () => {

  return (
    <View style={styles.container}>
        <Background />
        <Text style={styles.title}>About View Component</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#fff',
      margin: 50,
      textAlign: 'center'
    }
})