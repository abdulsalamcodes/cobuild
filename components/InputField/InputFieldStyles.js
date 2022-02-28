import { StyleSheet } from "react-native";
import { color_black, color_grey } from "../../constants/Colors";

const styles = StyleSheet.create({
  inputField: {
    marginBottom: 20,
  },

  label: {
      color: color_black,
      marginBottom: 10,
      fontWeight: "bold",
  },
  input: {
    backgroundColor: 'white',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    height: 50,
    alignItems: 'flex-start'
  }, 
  uploadImage:{
      height: 100,
      borderRadius: 20,
      backgroundColor: color_grey,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  }
});

export default styles;