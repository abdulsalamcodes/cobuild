import {StyleSheet} from 'react-native';
import { color_black, color_grey } from '../../constants/Colors';

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: '100%',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    projectCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        marginBottom: 20,
        
    },
    content: {
        padding: 15
    },
    title: {
        fontSize: 18,
        color: color_black,
        fontWeight: 'bold',
        lineHeight: 25,
        marginBottom: 5,
        
    },
    text: {
        color: color_grey,
        fontSize: 14,
        lineHeight: 19
    }
})

export default styles;