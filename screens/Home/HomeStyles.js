import { StyleSheet } from "react-native";
import Colors, { primary } from "../../constants/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: 'white'
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  list: {
    padding: 16,
    marginBottom: 40,
  },
  tabItem: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white'
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

  btnText: {
    color: 'white',
  }
});
export default styles;
