import { StyleSheet } from "react-native";
import Colors, { primary } from '../../constants/Colors';

const styles = StyleSheet.create({
  splashScreen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 45,
    fontWeight: "700",
    color: primary,
  },
  image: {
    width: 284,
    height: 261,
  }
});
export default styles;