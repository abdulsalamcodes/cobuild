import { StyleSheet } from "react-native";
import Colors, { primary } from "../../constants/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#EEEEEE'
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  tabItem: {
    flex: 1,
    padding: 16,
    backgroundColor: '#EEEEEE'
  },
  tabBar: {
    flexDirection: "row",
  },

  plusIcon: {
    position: "absolute",
    right: 30,
    bottom: 30,
    backgroundColor: primary,
    borderRadius: 50,
    padding: 10,
  },
  topHeader: {
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 50,
    backgroundColor: primary,
  },
  btn: {
    backgroundColor: primary,
    padding: 10,
    borderRadius: 5,
  },
  btnText: {
    color: 'white',
  }
});
export default styles;
