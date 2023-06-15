import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{color:'gray', paddingTop: 30,}}>English (India) v</Text>
      <View style={styles.loginform}>
        <Image style={styles.islogo} source={require('./images/logo.png')}/>
        <TextInput placeholder='Phone number, email or username' 
        placeholderTextColor={'black'} style={styles.iginput} />
        <TextInput placeholder='Password' 
        placeholderTextColor={'black'} style={styles.iginput}
        secureTextEntry={true} />
        <TouchableOpacity>
          <Text style={styles.btn}>Log in</Text>
        </TouchableOpacity>
        <Text style={styles.pri}>Forgot your login details?<Text style={styles.sec}> Get help logging in.</Text>
        </Text>

        <View style={{width: 350, flex: 0, flexDirection:'row',alignItems:'center',
      justifyContent:'center',}}>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
              height: 1,
              width: "40%",
            }}>
          </View>
          <Text style={{fontWeight:'600',fontSize: 15,
          padding: 5,}}>OR</Text>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
              height: 1,
              width: "40%",
            }}>

            </View>
        </View>
      </View>
      <View style={styles.bot}>
        <Text style={styles.pri}>Don't have an account?<Text style={styles.sec}> Sign up.</Text>
        </Text>
      </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  // bot:{
  //   borderBottomColor: 'black',
  //   borderBottomWidth: 1,
  //   height: 1,
  //   width: 500,
  // },
 loginform:{
  width: '90%',
  alignItems: 'center',
  justifyContent: 'center',
 },
  islogo:{
    width: 300,
    height: 60,
    resizeMode: 'contain',
  },
  pri:{
    color: 'grey',
    fontSize: 13,
    paddingTop:10,
    paddingBottom: 20,
  },
  sec:{
    fontWeight: "700",
    color: 'black',
  },
  iginput:{
    backgroundColor: 'gray',
    fontSize: 15,
    padding: 10,
    margin: 10,
    borderRadius: 5,
    color:'black',
    width: 350,
  },
  btn:{
    color: 'white',
    backgroundColor: 'black',
    fontSize: 17,
    width: 350,
    padding: 10,
    textAlign: 'center',
    fontWeight: "700",
    borderRadius: 5,
  }
});
