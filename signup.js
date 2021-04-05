import React, { useState } from 'react';
import { StyleSheet, Text, View, Image,TextInput, TouchableOpacity,Alert } from 'react-native';
//import {Picker} from 'react-native-picker-select';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Picker} from '@react-native-community/picker';
import  AsyncStorage from "@react-native-community/async-storage";

class signup extends React.Component {

  
  constructor(props){
    super(props);
    state = {
       StudentName: '',
       MIS: '',
       Email:'',
       Phonenumber:'',
       YearofAdmission: '',
       Password: '',
       confirmPassword: '',
       selectedIndex: '',
      // isError: '',
    }
  }


 
// Get Local IP

  componentDidMount(){
    this._loadInitialState().done();
  }

  _loadInitialState = async() => {
    var value = await AsyncStorage.getItem('StudentName');
    if (value !== null) {
      this.navigation.navigate('dashboard');
    }
  }
  handleSubmit = () => {
    const { Password, confirmPassword } = this.state;
    // perform all neccassary validations
    if (Password !== confirmPassword) {
        alert("Passwords don't match");
    } else {
        // make API call
        (Password) => this.setState({Password})
    }
}
/*
  const check=(confirmPassword)=>{
    if(Password === confirmPassword){
      setconfirmPassword(confirmPassword) 
    }
    else{
      setisError("Passwords don't match!")
    }
    
  };
 
*/

render()
 {
 // const [selectedValue, setSelectedValue] = useState("");
  //const [Index, setIndex] = useState("");
  /*
  const [StudentName, setStudentName] = useState("");
  const [MIS, setMIS] = useState("");
  const [Email, setEmail] = useState("");
  const [Phonenumber, setPhonenumber] = useState("");
  const [YearofAdmission, setYearofAdmission] = useState("");
  const [Password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [isError, setisError] = useState("");
*/


    return (

      <KeyboardAwareScrollView>

      
      <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.image} source={require("../assets/plate2.png")} />
      </View>
        
    
     
       
          
          <View style={styles.footer}>
          
            <View style={styles.title}>
            <Text style={styles.titletext}>Register with us!</Text>
            </View>
            
          
            <View style={styles.inputView}>
             
             <TextInput
               style={styles.textinput}
               placeholder="StudentName"
               placeholderTextColor="#666"
               autoCapitalize="none"
               autoCorrect={false}
               onChangeText={(StudentName) => this.setState({StudentName})} />
                <View style={styles.iconStyle}>
                <AntDesign name= {"user"} size={25} color='#666' />
            </View> 
           </View>

           <View style={styles.inputView}>           
             <TextInput
               style={styles.textinput}
               placeholder="MIS"
               placeholderTextColor="#666"
               autoCapitalize="none"
              // keyboardType = 'number-pad'
               maxLength={9}
               autoCorrect={false}
               onChangeText={(MIS) => this.setState({MIS})} />
                <View style={styles.iconStyle}>
                <AntDesign name= {"user"} size={25} color='#666' />
            </View> 
           </View>

           <View style={styles.inputView}>            
             <TextInput
               style={styles.textinput}
               placeholder="Email"
               placeholderTextColor="#666"
               keyboardType="email-address"
               autoCapitalize="none"
               autoCorrect={false}
               onChangeText={(Email) => this.setState({Email})} /> 
                <View style={styles.iconStyle}>
                <AntDesign name= {"mail"} size={25} color='#666' />
            </View> 
           </View>

           <View style={styles.inputView}>
             
             <TextInput
               style={styles.textinput}
               placeholder="Phonenumber"
               placeholderTextColor="#666"
               autoCapitalize="none"
               maxLength={10}
               keyboardType = 'number-pad'
               autoCorrect={false}
               onChangeText={(Phonenumber) => this.setState({Phonenumber})} /> 
                <View style={styles.iconStyle}>
                <AntDesign name= {"phone"} size={25} color='#666' />
            </View> 
           </View>

           <View style={styles.inputView}>
             
             <TextInput
               style={styles.textinput}
               placeholder="YearofAdmission(MM/YYYY)"
               maxLength={10}
               //keyboardType = 'numbers-and-punctuation'
               placeholderTextColor="#666"
               autoCapitalize="none"
               autoCorrect={false}
               onChangeText={(YearofAdmission) => this.setState({YearofAdmission})} />
                <View style={styles.iconStyle}>
                <AntDesign name= {"calendar"} size={25} color='#666' />
            </View> 
           </View>
      
        <View style={styles.inputView1}>
        {  /*  <Picker style={styles.pickerStyle} 
              mode="dropdown"
              prompt= "Mess"
              selectedValue={selectedValue}
              style={styles.dropdown}
              //onValueChange={(itemValue, itemIndex) => this.setState({ Value: itemValue, selectedIndex: itemIndex })
              onValueChange={(itemValue, itemIndex) => {setSelectedValue(itemValue) , setIndex(itemIndex)}
              }>
              <Picker.Item label="Mess" value="Mess" color="gray" />
              <Picker.Item label="SaeeMess" value="SaeeMess" />
              <Picker.Item label="BoysMess" value="BoysMess" />
            </Picker>*/}
             <TextInput
               style={styles.textinput}
               placeholder="Mess(1/2)"
               maxLength={7}
               //keyboardType = 'numbers-and-punctuation'
               placeholderTextColor="#666"
               autoCapitalize="none"
               autoCorrect={false}
               onChangeText={(selectedIndex) => this.setState({selectedIndex})} />
            <View style={styles.iconStyle1}>
              <AntDesign name= {"calendar"} size={25} color='#666' />
            </View> 
          </View>

           <View style={styles.inputView}>
           
             <TextInput
               style={styles.textinput}
               placeholder="Password"
               placeholderTextColor="#666"
               secureTextEntry={true}
               onChangeText={(Password) => this.setState({Password})}
             />
              <View style={styles.iconStyle}>
                <AntDesign name= {"lock"} size={25} color='#666' />
            </View> 
           </View>

           <View style={styles.inputView}>
           
           <TextInput
             style={styles.textinput}
             placeholder="ConfirmPassword"
             placeholderTextColor="#666"
             secureTextEntry={true}
            // onChangeText={(confirmPassword) => check(confirmPassword)}
             onChangeText={this.handleSubmit}
           />
            <View style={styles.iconStyle}>
              <AntDesign name= {"lock"} size={25} color='#666' />
          </View> 
         </View>
         <View style={{marginTop: 5, marginLeft:5}}>
         <Text style={{color: 'gray'}}>
           
          </Text>
           </View>
         
  

          <TouchableOpacity style={styles.loginBtn}
            /* onPress={() => {navigation.navigate("dashboard", {name: StudentName,
                                                                    email: Email,
                                                                    mobile: Phonenumber,
                                                                    MIS: MIS,
                                                                    password: Password})}
                                                                    this.props.navigation.navigate("dashboard") 
                                                         */
               onPress={ this.submitForm1  }>
             <Text style={styles.loginText}>REGISTER</Text>   
          </TouchableOpacity>
          
          </View>
          
    </View>
    </KeyboardAwareScrollView>
      );
};

submitForm1 = () =>{
  Alert.alert(this.state.StudentName);
  //this.props.navigation.navigate('dashboard');
  fetch('http://192.168.0.103:3000/sign', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  body: JSON.stringify({
    StudentName: this.state.StudentName,
    MIS: this.state.MIS,
    Email: this.state.Email,
    Phonenumber: this.state.Phonenumber,
    YearofAdmission: this.state.YearofAdmission,
    Password: this.state.Password,
    selectedValue: this.state.selectedIndex,
   

  })

  })

  .then((response)=> response.json())
  .then((res)=> {
    
    alert(res.message);
    if (res.success === true) {
     //  AsyncStorage.setItem('StudentName', res.StudentName);
      //this.props.navigation.navigate('dashboard');
      this.props.navigation.navigate("dashboard", {name: StudentName, MIS: MIS,})
    }
    else {
      alert(res.message);
    }
    
  })
  .done();
}
};
export default signup;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#2c4e54'
  },
  header: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 6,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  title: {
    marginTop: -15,
    marginBottom: 5,
    marginLeft: 10
  },
  titletext: {
    color: "black",
    alignSelf: "flex-start",
    fontSize: 18,
  },
  image: {
    marginTop: -5,
    marginBottom: -5,
    marginLeft: '65%',
    justifyContent: 'flex-end',
    width: 120,
    height: 120,
  },
  iconStyle: {
    padding: 10,
    marginTop: -40,
    marginRight: '84%',
    height: '100%',
    //justifyContent: '',
    alignItems: 'flex-start',
    borderRightColor: '#ccc',
    borderRightWidth: 1,
    width: 50,
},
iconStyle1: {
  padding: 10,
  marginTop: -40,
  marginRight: '74%',
  height: '100%',
  //justifyContent: '',
  alignItems: 'flex-start',
  borderRightColor: '#ccc',
  borderRightWidth: 1,
  width: 50,
},
 
  inputView: {
    borderWidth: 1,
    borderRadius: 25,
    width: "100%",
    height: 45,
    borderColor: "gray",
    marginBottom: 0,
    marginTop: 15,
    marginRight: '5%',
    alignItems: "center",
    alignSelf: "center",
  },
  inputView1: {
    borderWidth: 1,
    borderRadius: 25,
    width: "100%",
    height: 45,
    marginTop: 15,
    marginLeft: -10,
    marginRight: '25%',
    borderColor: "gray"
  },
 
  textinput: {
    marginLeft: 53,
    height: 40,
    //flex: 1,
    padding: 10,
    color: "black",
    alignContent: "flex-start",
    alignSelf: "flex-start",
  },
  dropdown: {
    marginLeft: 53,
    height: 40,
    //flex: 1,
    padding: 10,
    color: "black",
  },
  loginBtn: {
    width: "95%",
    borderRadius: 25,
    height: 45,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 25,
    marginRight: '5%',
    backgroundColor: "#2c4e54",
  },
  loginText: {
    color: "#fff",
    alignSelf: "center",
    fontSize: 16,
  },
  pickerStyle:{  
    height: 40,  
    width: "80%",  
    color: 'gray',  
    justifyContent: 'center',  
}
});