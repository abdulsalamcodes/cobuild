import React from 'react'
import { FlatList } from 'react-native'
import projects from '../dummy/projects';
import styles from './Home/HomeStyles';
import ProjectCard from '../components/ProjectCard/ProjectCard';

const MyProjects = ({ navigation}) => {
  const renderItem = ({ item }: any) => (
    <ProjectCard detail={item} navigation={navigation} />
  );
  return <FlatList
    data={projects}
    style={styles.list}
    renderItem={renderItem}
    keyExtractor={item => item.id}
  />
}

export default MyProjects
