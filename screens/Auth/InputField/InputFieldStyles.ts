import { StyleSheet } from "react-native";
import { color_black, color_grey, primary } from "../../../constants/Colors";

const styles = StyleSheet.create({
  label: {
    color: color_black,
    marginBottom: 8,
    fontWeight: '700',
  },
  input: {
    backgroundColor: '#E5F7F8',
    borderColor: primary,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    height: 50,
    alignItems: 'flex-start'
  },
});

export default styles;