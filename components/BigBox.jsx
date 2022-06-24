import { useEffect, useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native'
import { Dimensions } from 'react-native'
import { Background } from './Background'
import { Rating } from '../components/Rating'
import { useNavigation } from '@react-navigation/native'
import { Rooms } from '../assets/data/Rooms'


const Item = ({ title, value, navigation }) => (
  <TouchableOpacity style={styles.item} onPress={() => navigation.navigate("ListViewInfo")}>
    <Text style={styles.listTitle}>{title}</Text>
    <Rating value={value}/>
  </TouchableOpacity>
);

const RoomItem = ({ title, navigation }) => (
  title == "LA222" ? 
  <TouchableOpacity style={styles.roomItem} onPress={() => navigation.navigate("BottomTabNavigator")}>
    <Text style={styles.listTitle}>{title}</Text>
  </TouchableOpacity> :

  <View style={styles.roomItem}>
    <Text style={styles.listTitleInactive}>{title}</Text>
  </View>
);

export const BixBoxMainView = (props) => {
  return (
    <View style={styles.box}>
      <View style={styles.middle}>
        <Background reverse={true} style={styles.bg}/>
        <View style={styles.container}>
          {props.children}
        </View>
      </View>
    </View>
  )
}

export const BigBoxRoomList = ({nav}) => {
  const navigation = useNavigation()
  const renderItem = ({ item }) => <RoomItem title={item.title} navigation={navigation} />;

  return (
    <View style={styles.box}>
        <View style={styles.middle}>
            <Background reverse={true} style={styles.bg}/>
            <View style={styles.itemContainer}>
              <FlatList data={Rooms} renderItem={renderItem} keyExtractor={item => item.id} />
            </View>
        </View>
    </View>
  )
}

export const BigBoxList = ({listData}) => {
  const navigation = useNavigation()
  const [rooms, setRooms] = useState(null)
  // useeffect that will update every time the component is rendered

  useEffect(() => {
    setRooms(listData.sort((a, b) => (b.value - a.value) || (a.title < b.title ? -1 : 1)))
  }, [listData])


  const renderItem = ({ item }) => <Item title={item.title} value={item.value} navigation={navigation}  />;

  return (
      
    <View style={styles.box}>
        <View style={styles.middle}>
            <Background reverse={true} style={styles.bg}/>
            <View style={styles.itemContainer}>
              <FlatList data={rooms} renderItem={renderItem} keyExtractor={item => item.key} />
            </View>
        </View>
    </View>
  )
}

export const BigBoxInfo = ({title, text, navigation}) => {
  return (
    <View style={styles.box}>
        <View style={styles.middle}>
            <Background reverse={true} style={styles.bg}/>
            <Text style={styles.title}>Info</Text> 
        </View>
    </View>
  )
}

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const styles = StyleSheet.create({



    box: {
        borderRadius: 15,
        width: windowWidth * 0.9,
        height: windowHeight * 0.83,
        top: 50
        },
    boxNoBottomTab: {
      borderRadius: 15,
      width: windowWidth * 0.9,
      height: windowHeight * 0.8,
      top: 50
      },
    title: {
        fontSize: 20,
        color: "white",
        fontWeight: "bold",
    },
    text: {
        fontSize: 20,
        color: "white",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        borderRightWidth: 1,
    },
    listTitle: {
      fontSize: 20,
      color: "white",
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 10,
      fontWeight: "bold"
  },
  listTitleInactive:{
    fontSize: 20,
    color: 'rgba(255,255,255,0.3)',
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    fontWeight: "bold"
  },
    middle: {
        // padding: 15,
        borderRadius: 30,
        overflow: 'hidden',
        height: '100%',
        width: '100%',
        
    },
    itemContainer: {
      padding: 0,
      margin: 0
    },

    item: {
        flexDirection: "row",
        backgroundColor: 'transparent',
        padding: 15,
        borderBottomWidth: .2,
        borderBottomColor: "white",
    },
    roomItem: {
      alignItems:"center"
    },
    container:{
      flex: 1,
      alignItems: "center"
    }
})
