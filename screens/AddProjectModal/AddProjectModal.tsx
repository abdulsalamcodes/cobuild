
import { Feather } from '@expo/vector-icons';
import { useRef, useState } from 'react';
import EditScreenInfo from '../../components/EditScreenInfo';
import InputField from '../../components/InputField/InputField';
import { Text, View, } from '../../components/Themed';
import { color_grey, primary } from '../../constants/Colors';
import { RootTabScreenProps } from '../../types';
import { Button, ScrollView, TouchableOpacity } from 'react-native';
import styles from './AddProjectModalStyle';
import { Formik } from 'formik';
import * as Yup from 'yup';

export default function AddProjectModal({ navigation }: RootTabScreenProps<'Home'>) {
  const [contactType, setContactType] = useState('WhatsApp');
  const [showContactType, setShowContactType] = useState(false)
  const initialValues = {
    title: 'Add Project',
    github: '',
    previewLink: '',
    description: '',
    phone: '',
    myEmail: '',
    myGithub: '',
    myLinkedIn: '',
    myTwitter: '',
  };

  const contactTypes = ['WhatsApp', 'Email', 'Twitter', 'LinkedIn'];
 
  const validateSchema = Yup.object().shape({
    title: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    description: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    github: Yup.string().url('Invalid url').required('Required'),
    phone: Yup.number().required('Required'),
    previewLink: Yup.string().email('Invalid email').required('Required'),
  });
  const scrollViewRef = useRef<ScrollView>(null);
  return (
    <ScrollView ref={scrollViewRef} style={styles.container}>
      <Formik
        initialValues={initialValues}
        validationSchema={validateSchema}
        onSubmit={values => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values, touched, errors }) => {
          const renderContactType = () => {
            let el;
            switch (contactType) {
              case 'WhatsApp':
                el = <InputField
                  label="Your Phone Number"
                  onChangeText={handleChange('phone')}
                  onBlur={handleBlur('phone')}
                  errorMessage={(touched.phone && errors.phone) ? errors.phone : ''}
                  multiline={false} value={values.phone} />
                break;
              case 'Email':
                el = <InputField
                  label="Your Email Address"
                  onChangeText={handleChange('myEmail')}
                  onBlur={handleBlur('myEmail')}
                  errorMessage={(touched.myEmail && errors.myEmail) ? errors.myEmail : ''}
                  multiline={false} value={values.myEmail} />
                break;
              case 'LinkedIn':
                el = <InputField
                  label="Link to your LinkedIn profile"
                  onChangeText={handleChange('myLinkedIn')}
                  onBlur={handleBlur('myLinkedIn')}
                  errorMessage={(touched.myLinkedIn && errors.myLinkedIn) ? errors.myLinkedIn : ''}
                  multiline={false} value={values.myLinkedIn} />
                break;
              case 'Twitter':
                el = <InputField
                  label="Link to your Twitter profile"
                  onChangeText={handleChange('myTwitter')}
                  onBlur={handleBlur('myTwitter')}
                  errorMessage={(touched.title && errors.myLinkedIn) ? errors.myLinkedIn : ''}
                  multiline={false} value={values.myLinkedIn} />
                break;

              default:
                el = 'Unknown Input'
                break;
            }
            return el;
          }
          return <>
            <View style={styles.coverImage}>
              <Feather name='plus' color={color_grey} size={30} />
              <Text style={styles.text}>Add a cover Image</Text>
            </View>
            <InputField
              label="Project Name"
              onChangeText={handleChange('title')}
              onBlur={handleBlur('title')}
              multiline={false} value={values.title}
              errorMessage={(touched.title && errors.title) ? errors.title : ''} />
            <InputField
              onChangeText={handleChange('description')}
              onBlur={handleBlur('description')}
              label="Description"
              multiline value={values.description}
              errorMessage={(touched.description && errors.description) ? errors.description : ''}
            />
            <InputField
              onChangeText={handleChange('previewLink')}
              onBlur={handleBlur('previewLink')}
              label="Preview Link"
              multiline={false}
              value={values.previewLink}
              errorMessage={(touched.previewLink && errors.previewLink) ? errors.previewLink : ''}
            />
            <InputField onChangeText={handleChange('github')}
              onBlur={handleBlur('github')}
              label="Github Link"
              multiline={false}
              errorMessage={(touched.github && errors.github) ? errors.github : ''}
              value={values.github} />
            <View>
              <Text style={styles.contactLabel}>Contact:</Text>
              <TouchableOpacity style={styles.selectButton} onPress={() => {
                setShowContactType(!showContactType);
                scrollViewRef.current.scrollToEnd({ animated: true });
              }}>
                <Text>{contactType}</Text>
                <Feather name='chevron-down' size={20} />
              </TouchableOpacity>
            </View>

            {showContactType ? <View style={styles.contactList}>
              {contactTypes.map((contactType, i) => <TouchableOpacity onPress={() => {
                setContactType(contactType);
                setShowContactType(!showContactType);
              }} style={{ ...styles.item, borderBottomWidth: (i === contactTypes.length - 1) ? 0 : 1 }}>
                <Text>{contactType}</Text>
              </TouchableOpacity>)}
            </View> : null}

            <View style={styles.contactInput}>
              {renderContactType()}
            </View>

            <View style={styles.btnWrapper}>
              <Button onPress={handleSubmit}
                 color={primary}
                 accessibilityLabel="Learn more about this purple button"
                title="Submit" />
            </View>
          </>
        }}
      </Formik>
    </ScrollView>
  );
}
