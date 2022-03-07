import { StyleSheet } from "react-native";
import Colors, { primary } from '../../../constants/Colors';

const styles = StyleSheet.create({
  btnStyle: {
    width: '100%',
    paddingVertical: 12,
    borderRadius: 10,
    backgroundColor: primary,
    alignItems: 'center',
  },
  btnTextStyle: {
    color: '#fff',
    fontWeight: 'bold',
  }
});
export default styles;