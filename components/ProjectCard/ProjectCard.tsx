import { Feather } from '@expo/vector-icons';
import React from 'react'
import { View, Image, Text, TouchableOpacity, Pressable } from 'react-native'
import { ProjectCardType } from '../../types'
import styles from './ProjectCardStyle';

const ProjectCard = ({ detail, navigation }) => {
  return (
    <Pressable style={styles.projectCard} onPress={() => navigation.navigate('Project Details', { ...detail })}>
      <Image source={require('../../assets/images/project-demo.jpg')} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{detail.title}</Text>
        <Text style={styles.text}>{detail.description.slice(0, 100) + '...'}</Text>
      </View>
      <View
          style={{
            borderBottomColor: '#C4C4C4',
            borderBottomWidth: 1,
          }}
        />
      <View style={styles.bottom}>
        <View style={styles.aboutUser}>
          <Image style={styles.userImage} source={require('../../assets/images/avatar.jpeg')} />
          <View>
            <Text style={styles.userName}>{detail.fullName}</Text>
            <Text style={styles.userTitle}>{detail.userTitle}</Text>
          </View>
        </View>
       
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Feather name='eye' />
          <Text style={{ ...styles.text, marginLeft: 10}}>3k views</Text>
        </View>

      </View>
    </Pressable>
  )
}

export default ProjectCard
