import {StyleSheet} from 'react-native'
/*
Colours
https://coolors.co/palette/f08080-f4978e-f8ad9d-fbc4ab-ffdab9


*/
const colour1 = '#F08080';
const colour2 = '#F4978E';
const colour3 = '#F8AD9D';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
    },
    centreContainer: {
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
      fontWeight: 'bold',
      marginBottom: 4,
    },
    input: {
      height: 40,
      width: 300,
      margin: 10,
      borderWidth: 1,
      padding: 10,
      borderRadius: 5,
    },
    button: {
      height: 40,
      width: 150,
      margin:10,
      backgroundColor: colour3, 
      borderRadius: 5,
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
      backgroundColor: colour3,
      borderRadius: 5,
    },
    opbutton:{
      width:50,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 5,

      backgroundColor: colour1,
      borderRadius: 5,
    },
    output:{
      borderWidth:0.5,
      width:170,
      height:25,
      textAlign:'center',
      marginBottom:10,
      borderRadius:5,
    },
    qbutton: {
      backgroundColor: '#f0f0f0',
      padding: 15,
      marginVertical: 5,
      borderRadius: 5,
      width: '80%',
    },
    image:{
      width:250,
      height:250,
    },
    listContainer: {
      padding: 12,
      borderBottomWidth: 1,
      borderBottomColor: '#eee',
      marginBottom: 8,
    },
    deleteButton:{
        height: 20,
        width: 80,
        marginTop:10,
        backgroundColor: colour1, 
        borderRadius: 5,
        alignItems:'center',
        justifyContent: 'center',
    }
  });

export default styles;
  