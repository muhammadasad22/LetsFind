import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import JobCard from '../components/JobCard';

const Home = ({navigation}) => {
  return (
    <View style={styles.mainCont}>
      <Text style={styles.boldText}>Discover your dream job!</Text>
      <TextInput
        placeholder="Search your job.."
        style={styles.input}
        selectionColor={'#000'}
      />
      <View
        style={{
          flexDirection: 'row',
          marginTop: 10,
          marginRight: 5,
        }}>
        <View
          style={{
            height: 155,
            width: '40%',
            backgroundColor: '#2FC786',
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 5,
          }}>
          <Text
            style={{
              fontWeight: '700',
              fontSize: 18,
              color: '#f3f3f3',
            }}>
            UI Design
          </Text>
          <Text
            style={{
              fontWeight: '500',
              fontSize: 14,
              color: '#f3f3f3',
            }}>
            8 Jobs Found
          </Text>
        </View>
        <View
          style={{
            width: '60%',
          }}>
          <View
            style={{
              height: 75,
              width: '100%',
              backgroundColor: '#2D82FF',
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 5,
            }}>
            <Text
              style={{
                fontWeight: '700',
                fontSize: 18,
                color: '#f3f3f3',
              }}>
              Graphic Designer
            </Text>
            <Text
              style={{
                fontWeight: '500',
                fontSize: 14,
                color: '#f3f3f3',
              }}>
              2 Jobs Found
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <View
              style={{
                height: 75,
                width: '50%',
                backgroundColor: '#F7937C',
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 3,
              }}>
              <Text
                style={{
                  fontWeight: '700',
                  fontSize: 15,
                  color: '#f3f3f3',
                }}>
                3D
              </Text>
              <Text
                style={{
                  fontWeight: '500',
                  fontSize: 12,
                  color: '#f3f3f3',
                }}>
                12 Jobs Found
              </Text>
            </View>
            <View
              style={{
                height: 75,
                width: '50%',
                backgroundColor: '#000',
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontWeight: '700',
                  fontSize: 15,
                  color: '#f3f3f3',
                }}>
                Illustration
              </Text>
              <Text
                style={{
                  fontWeight: '500',
                  fontSize: 12,
                  color: '#f3f3f3',
                }}>
                3 Jobs Found
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={styles.boldText}>Search More Jobs</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('AllJobs');
          }}>
          <Text style={[styles.boldText, {color: '#2D82FF', fontSize: 15}]}>
            See All
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: 10,
          paddingBottom: 80,
        }}>
        <JobCard
          img={require('../assets/img/netflix.png')}
          jobTitle={' Sr. UI/UX Designer'}
          companyName={'Netflix'}
          address={'Islamabad'}
          trusted={'Trusted'}
          salary={'5000'}
          jobType={'Full-Time'}
          experienceLevel={'Mid-level'}
          jobArea={'Remote'}
        />
        <JobCard
          img={require('../assets/img/google.png')}
          jobTitle={' Sr. UI/UX Designer'}
          companyName={'Netflix'}
          address={'Islamabad'}
          trusted={'Trusted'}
          salary={'2500'}
          jobType={'Full-Time'}
          experienceLevel={'Mid-level'}
          jobArea={'Remote'}
        />
        <JobCard
          img={require('../assets/img/facebook.png')}
          jobTitle={' Sr. UI/UX Designer'}
          companyName={'Netflix'}
          address={'Islamabad'}
          trusted={'Trusted'}
          salary={'1500'}
          jobType={'Full-Time'}
          experienceLevel={'Mid-level'}
          jobArea={'Remote'}
        />
        <JobCard
          img={require('../assets/img/insta.jpg')}
          jobTitle={' Sr. UI/UX Designer'}
          companyName={'Netflix'}
          address={'Islamabad'}
          salary={'3500'}
          trusted={'Trusted'}
          jobType={'Full-Time'}
          experienceLevel={'Mid-level'}
          jobArea={'Remote'}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainCont: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  boldText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    paddingTop: 20,
  },
  input: {
    width: '100%',
    height: 45,
    borderRadius: 25,
    alignSelf: 'center',
    marginTop: 20,
    paddingLeft: 20,
    backgroundColor: '#FAFAFA',
  },
});

export default Home;
