import {StyleSheet} from 'react-native'
/*
Colours
#8ECAE6
#219EBC
#126782
#023047
#FFB703
#FD9E02
#FB8500

*/
const colour1 = '#FB8500';
const colour2 = '#FD9E02';
const colour3 = '#FFB703';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    row:{
      flexDirection: 'row',
      justifyContent: 'center',
    },
    h1:{
      fontSize:26,    
    },
    h2:{
      fontSize:20,
    },
    h3:{
      fontSize:16,
    },
    input: {
      height: 40,
      width: 150,
      margin: 10,
      borderWidth: 1,
      padding: 10,
      borderRadius: 10,
    },
    button: {
      height: 40,
      width: 150,
      margin:10,
      backgroundColor: colour3, 
      borderRadius: 10,
      elevation: 3,
      alignItems:'center',
      justifyContent: 'center',
    },
    cbutton:{
      width:50,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 5,
      backgroundColor: '#FFB703',
      borderRadius: 30,
    },
    opbutton:{
      width:50,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 5,

      backgroundColor: '#FB8500',
      borderRadius: 30,
    },
    output:{
      borderWidth:0.5,
      width:170,
      height:25,
      textAlign:'center',
      marginBottom:10,
      borderRadius:10,
    },
    items:{
      flexDirection: 'row',
      borderWidth:1,
      padding:20,
      width:400,
      height:200
    },
    qbutton: {
      backgroundColor: '#f0f0f0',
      padding: 15,
      marginVertical: 5,
      borderRadius: 10,
      width: '80%',
    },
    image:{
      width:250,
      height:250,
    },
  });

export default styles;
  