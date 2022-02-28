import React from 'react'
import { View, Image, Text } from 'react-native'
import styles from './ProjectCardStyle'
const ProjectCard = () => {
  return (
    <View style={styles.projectCard}>
      <Image source={require('../../assets/images/project-demo.jpg')} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.title}>GeezUp</Text>
        <Text style={styles.text}>An open source project that focuses on automating the developer flow, merging pull, request, reviewing code and...</Text>
      </View>
    </View>
  )
}

export default ProjectCard
