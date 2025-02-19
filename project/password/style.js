import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F6F5F3',
    flex:1,
  },
  header:{
    backgroundColor: '#48A9A6',
    alignItems: 'center',
    paddingTop:50,
    paddingBottom:15,
  },
  h1:{
    fontSize:26,    
  },
  h2:{
    marginTop:10,
    marginLeft:10,
  },
  input: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 15,
  },
  button: {
    margin:15,
    backgroundColor: "#D4B483", 
    paddingVertical: 15,
    width:100,
    borderRadius: 15,
    elevation: 3,
    alignItems:'center',
  },
})

export default styles;