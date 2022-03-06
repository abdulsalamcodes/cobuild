import { Feather } from '@expo/vector-icons'
import React, { useCallback } from 'react'
import { View, Text, Linking, Alert, TouchableOpacity, Image, ScrollView } from 'react-native'
import styles from './ProjectDetailStyles';

const ProjectDetail = ({ navigation, route }: any) => {

  const OpenURLButton = ({ icon,url, children }) => {
    const handlePress = useCallback(async () => {
      // Checking if the link is supported for links with custom URL scheme.
      const supported = await Linking.canOpenURL(url);
  
      if (supported) {
        // Opening the link with some app, if the URL scheme is "http" the web link should be opened
        // by some browser in the mobile
        await Linking.openURL(url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
    }, [url]);
  
    return <TouchableOpacity style={styles.linkBox}  onPress={handlePress}>
    <View style={styles.left}>
        <Feather name={icon} size={15} />
        <Text style={{marginLeft: 10}}>{children }</Text>
    </View>
    <Feather name='arrow-right' size={15} />
  </TouchableOpacity>
  };
  return (
    <ScrollView style={styles.container}>
      <Image style={styles.image} source={require('../../assets/images/project-demo.jpg')} />
      <View style={styles.wrapper}>
      <View style={styles.descBox}>
        <Text style={styles.title}>Description</Text>
          <Text style={styles.descText}>{route.params.description}</Text>
      </View>
      <OpenURLButton icon='eye' url={route.params.previewLink}>Preview Project</OpenURLButton>
      <OpenURLButton icon='github' url={route.params.github}>View on Github</OpenURLButton>
      <OpenURLButton icon='phone' url={route.params.phone}>Reach out on WhatsApp</OpenURLButton>

      </View>
    </ScrollView>
  )
}

export default ProjectDetail
