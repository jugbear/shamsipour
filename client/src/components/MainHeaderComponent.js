import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  Modal,
  Dimensions
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
var screenWidth = Dimensions.get('window').width; //full screen width
const MainHeaderComponent = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.headerStyle}>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image style={styles.warningStyle} source={require('../assets/img/warning.png')} />
            <Text style={styles.titleStyle}>دانشکده شهید شمسی پور</Text>
            <Text style={styles.contentStyle}>اپلیکیشن خبری و آموزشی دانشگاه شهید شمسی پور.این اپلیکیشن توسط دانشجو عرفان مبشری برای درس پروژه دوره کاردانی توسعه داده شده است.</Text>
            <Text style={styles.devStyle}>توسعه توسط عرفان مبشری</Text>

            <TouchableOpacity
              style={{ ...styles.openButton, backgroundColor: "#f9c513" }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>بستن</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View style={styles.infoHolder}>
      <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Image source={require('../assets/img/university-logo-black.png')} style={styles.imageStyle} />
      </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({ 
  headerStyle: {
    backgroundColor: '#fff',
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    top: 0

  },
  infoHolder:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
  },
  imageStyle: {
    height: 40,
    width: 40,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    paddingHorizontal: 20
  },
  warningStyle: {

  },
  titleStyle: {
    fontWeight: 'bold',
    fontSize: 18
  },
  contentStyle: {
    textAlign: 'center',
    width: 200,
    marginVertical: 10
  },
  devStyle: {
    fontWeight: 'bold',
    marginBottom: 10
  }
})
export default MainHeaderComponent;