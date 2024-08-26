import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';

const Details = ({route}) => {
  const {job} = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{job.title}</Text>
      <Text style={styles.label}>Location:</Text>
      <Text style={styles.value}>{job.location}</Text>
      <Text style={styles.label}>Salary:</Text>
      <Text style={styles.value}>${job.salary}</Text>
      <Text style={styles.label}>Job Type:</Text>
      <Text style={styles.value}>{job.jobType}</Text>
      <Text style={styles.label}>Experience Level:</Text>
      <Text style={styles.value}>{job.experienceLevel}</Text>
      <Text style={styles.label}>Application Deadline:</Text>
      <Text style={styles.value}>
        {new Date(job.applicationDeadline).toDateString()}
      </Text>
      <Text style={styles.label}>Requirements:</Text>
      {job.requirements.map((requirement, index) => (
        <Text key={index} style={styles.requirement}>
          - {requirement}
        </Text>
      ))}
      <Text style={styles.label}>Benefits:</Text>
      {job.benefits.map((benefit, index) => (
        <Text key={index} style={styles.benefit}>
          - {benefit}
        </Text>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#555',
  },
  value: {
    fontSize: 16,
    marginBottom: 5,
    color: '#777',
  },
  requirement: {
    fontSize: 16,
    marginLeft: 10,
    color: '#777',
  },
  benefit: {
    fontSize: 16,
    marginLeft: 10,
    color: '#777',
  },
});

export default Details;
