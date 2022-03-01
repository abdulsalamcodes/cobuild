import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  image: {
    height: 300,
    width: '100%',
    resizeMode: 'cover'
  },
  wrapper: {
    padding: 16,
  },
  descBox: {
    marginBottom: 30,
  }, 
  title: {
    color: '#393E46',
    fontSize: 18,
    marginBottom: 10,
  },

  descText: {
    color: '#727C8D',
    lineHeight: 19,
    fontSize: 14,
  },

  linkBox: {
    backgroundColor: '#F2F2F2',
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    
  }
})
export default styles;