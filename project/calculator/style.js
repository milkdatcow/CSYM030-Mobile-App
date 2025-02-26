import {StyleSheet} from 'react-native'

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
    button:{
      width:50,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 5,

      backgroundColor: '#F7C1AA',
      borderRadius: 30,
    },
    opbutton:{
      width:50,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 5,

      backgroundColor: '#EF8354',
      borderRadius: 30,
    },
    output:{
      borderWidth:1,
      width:170,
      textAlign:'center',
      marginBottom:10,
      borderRadius:10,
    },

  });

export default styles;