import {Text, View, StyleSheet} from 'react-native'
import {TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {Background} from '../components/Background'
import {Logo} from '../components/Logo'
import {BixBoxMainView} from '../components/BigBox'



export const ListViewInfo = () => {
  const navigation = useNavigation();
  
  // Return component
  return (
    <View style={styles.container}>
      <Background />
      <Logo />
      <BixBoxMainView style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Thermal </Text>
          <Text style={styles.text}>Comfort</Text>
        </View>


        
        <TouchableOpacity title="Submit" 
                          onPress={() => navigation.navigate('MainViewComfortFeedback')}
                          // onPress={() => { postDataAlert('Aborted')  }}
                          style={styles.submitBtn}
        >
          <Text style={ styles.btnText}>Give Feedback</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.backBtn} title="Back" onPress={() => navigation.goBack()}>
          <Text style={styles.btnText}>Go back</Text>
        </TouchableOpacity>

      </BixBoxMainView>
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center'
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },

  text: {
    fontSize: 15,
    color: '#fff'
  },
  title: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 20,
  },
  
  backBtn: {
    backgroundColor: '#e2b673',
    padding: 10,
    paddingHorizontal: 30,
    margin: 10,
    borderRadius: 100,
    position: "absolute",
    bottom: 0,
    right: 0,
  },

  submitBtn: {
    backgroundColor: '#e2b673',
    padding: 10,
    paddingHorizontal: 30,
    margin: 10,
    borderRadius: 100
  },
  submitBtnDisabled: {
    backgroundColor: '#7b7b7b',
    padding: 10,
    paddingHorizontal: 30,
    margin: 10,
    borderRadius: 100
  },

  btnText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  btnTextDisabled: {
    color: '#313131',
    fontSize: 20,
    fontWeight: 'bold',
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    height: 1
  },
  icon: {
    width: 100,
    height: 100,
    resizeMode: 'contain'
  }
})