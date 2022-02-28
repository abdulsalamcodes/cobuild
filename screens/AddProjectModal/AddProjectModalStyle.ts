import { StyleSheet } from "react-native";
import { color_grey, primary } from "../../constants/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  coverImage: {
    borderRadius: 20,
    backgroundColor: "#F0F0F0",
    marginBottom: 20,
    height: 150,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
  },
  contactLabel: {
    marginBottom: 10,
    fontWeight: "bold",
  },

  selectButton: {
    backgroundColor: "#fff",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  contactList: {
    marginBottom: 10,
    borderStyle: "dotted",
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#f2f2f2",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    marginTop: -3,
    zIndex: 10,
  },
  item: {
    textTransform: "capitalize",
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: "100%",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  contactInput: {
    marginTop: 20,
  },
  btnWrapper: {
    marginBottom: 30,
    backgroundColor: primary
  },
});

export default styles;
