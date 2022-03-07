import { StyleSheet } from "react-native";
import Colors, { primary } from '../../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    // paddingVertical: 50,
    paddingTop: 50,
    // paddingBottom: 100,
    paddingHorizontal: 20,
  },
  formWrapper: {
    marginTop: 20,
  },
  header: {
    fontSize: 45,
    fontWeight: "700",
    color: primary,
  },
  btnWrapper: {
    marginTop: 28,
  },
  toLoginWrapper: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 60,
  },
  toLoginText: {
    fontSize: 13,
    fontWeight: 'normal',
    marginRight: 5,
  },
  toLoginBtnText: {
    fontSize: 13,
    color: primary,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  }
});
export default styles;