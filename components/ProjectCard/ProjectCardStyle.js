import { StyleSheet } from "react-native";
import { color_black, color_grey } from "../../constants/Colors";

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: "100%",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  projectCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    marginBottom: 20,
  },
  content: {
    padding: 15,
  },
  title: {
    fontSize: 18,
    color: color_black,
    fontWeight: "bold",
    lineHeight: 25,
    marginBottom: 5,
  },
  bottom: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    padding: 16
  },
  text: {
    color: color_grey,
    fontSize: 14,
    lineHeight: 19,
  },
  userImage: {
      borderRadius: 50,
      height: 40,
      width: 40,
      marginRight: 10,
  },
  userName: { fontSize: 14, color: '#222831'},
  userTitle: { fontSize: 12, color: '#393E46', opacity: .5},
  aboutUser: {
    flexDirection: "row",
    alignItems: "center",
  },

});

export default styles;
