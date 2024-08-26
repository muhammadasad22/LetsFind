import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import JobCard from '../components/JobCard';

const AllJobs = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
      }}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: '600',
          color: '#000',
          paddingTop: 15,
        }}>
        More Jobs
      </Text>
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
          salary={'4500'}
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
          salary={'3500'}
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
          salary={'2500'}
          jobType={'Full-Time'}
          experienceLevel={'Mid-level'}
          jobArea={'Remote'}
        />
        <JobCard
          img={require('../assets/img/insta.jpg')}
          jobTitle={' Sr. UI/UX Designer'}
          companyName={'Netflix'}
          address={'Islamabad'}
          salary={'1500'}
          trusted={'Trusted'}
          jobType={'Full-Time'}
          experienceLevel={'Mid-level'}
          jobArea={'Remote'}
        />
        <JobCard
          img={require('../assets/img/netflix.png')}
          jobTitle={' Sr. UI/UX Designer'}
          companyName={'Netflix'}
          address={'Islamabad'}
          trusted={'Trusted'}
          salary={'4500'}
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
          salary={'3500'}
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
          salary={'2500'}
          jobType={'Full-Time'}
          experienceLevel={'Mid-level'}
          jobArea={'Remote'}
        />
        <JobCard
          img={require('../assets/img/insta.jpg')}
          jobTitle={' Sr. UI/UX Designer'}
          companyName={'Netflix'}
          address={'Islamabad'}
          salary={'1500'}
          trusted={'Trusted'}
          jobType={'Full-Time'}
          experienceLevel={'Mid-level'}
          jobArea={'Remote'}
        />
      </ScrollView>
    </View>
  );
};

export default AllJobs;
