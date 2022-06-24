import { StyleSheet, View, Text } from "react-native"
import { Box } from "../components/Box"
import { Background } from "../components/Background"
import { Logo } from "../components/Logo"
import { Room } from "../components/Room"


export const MainView = ({navigation, data, room}) => {
  return (
    <View style={styles.container}>
        <Background />
        <Logo />
        <Room room={room}/>
        <View style={styles.boxContainer}>
          <Box title={"Thermal"}  text={"Comfort"}    navigation={navigation} page={'MainViewInfoThermal'}  icon={'thermal'}  data={data}/>
          <Box title={"Visual"}   text={"Comfort"}    navigation={navigation} page={'MainViewInfoVisual'}   icon={'visual'}   data={data}/>
          <Box title={"Social"}   text={"Comfort"}    navigation={navigation} page={'MainViewInfoSocial'}   icon={'social'}   data={data}/>
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    boxContainer: {
        height: '83%',
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
    },
    box: {
        flex: 1,
    },
    logoContainer: {
        alignItems: "center",
        justifyContent: "center",
        height: '10%',
    },
    logo: {
      height: 50,
      width: 57,
      alignContent: "center",
      justifyContent: "center"
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    }
})