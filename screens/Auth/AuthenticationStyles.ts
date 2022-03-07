import { StyleSheet } from "react-native";
import Colors, { primary } from '../../constants/Colors';

const styles = StyleSheet.create({
  splashScreen: {
    flex: 1,
    alignItems: "center",
    paddingTop: 100,
    // justifyContent: "center",
  },
  title: {
    fontSize: 45,
    fontWeight: "700",
    color: primary,
    marginTop: 15,
  },
  subText: {
    fontWeight: '700',
    fontSize: 14,
  },
  about: {
    textAlign: 'center',
    marginTop: 30,
  },
  image: {
    width: 284,
    height: 261,
  },
  cta: {
    // flex: 1,
    marginTop: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signupBtn: {
    backgroundColor: primary,
    borderRadius: 11,
    marginRight: 26,
    paddingHorizontal: 42,
    paddingVertical: 15,
  },
  signupBtnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 17,
  },
  signinBtn: {
    borderRadius: 11,
    borderWidth: 2,
    borderColor: primary,
    // borderStyle: '',
    paddingHorizontal: 42,
    paddingVertical: 15,
  },
  signinBtnText: {
    color: primary,
    fontWeight: "bold",
    fontSize: 17,
  }
});
export default styles;