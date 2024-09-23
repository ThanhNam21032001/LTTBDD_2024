import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView,Image, Button } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topView}>
        <Image style={styles.phoneImg} source={require('./Img/vs_blue.png')}/>
      </View >
      <View style={styles.middleView}>
        <Text>Điện thoại VSmart Joy 3- Hàng chính hãng</Text>
      </View>
      <View style={styles.bottomView}>
        <Button style={styles.button} title='Chọn mua'>
        </Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button:{
    backgroundColorcolor:'red'
  },
  topView:{
    flex:2,
    marginTop:50,
    alignItems:'center'

  },
  phoneImg:{
    height:400,
  },
  middleView:{
    flex:1
  },
  bottomViewView:{
    flex:1
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignContent:'center',
    justifyContent:'center',
    alignItems:'center'
    
  },
});
