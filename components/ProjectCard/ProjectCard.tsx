import React from 'react'
import { View, Image, Text } from 'react-native'
import styles from './ProjectCardStyle'
const ProjectCard = () => {
  return (
    <View style={styles.projectCard}>
      <Image source={{
        url: 'https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      }} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.title}>GeezUp</Text>
        <Text style={styles.text}>An open source project that focuses on automating the developer flow, merging pull, request, reviewing code and...</Text>
      </View>
    </View>
  )
}

export default ProjectCard
