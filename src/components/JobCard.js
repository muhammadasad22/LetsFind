import {Image, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import React from 'react';

const JobCard = ({
  img,
  jobTitle,
  companyName,
  address,
  trusted,
  salary,
  jobType,
  experienceLevel,
  jobArea,
}) => {
  return (
    <View style={styles.card}>
      <View style={{flexDirection: 'row', height: '100%'}}>
        <View style={styles.imageContainer}>
          <Image source={img} style={styles.image} resizeMode="center" />
        </View>

        <View
          style={{
            width: '75%',
            height: '100%',
            backgroundColor: '#fff',
            paddingRight: 5,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '700',
                color: '#000',
              }}>
              {jobTitle}
            </Text>
            <Icon name="like1" size={25} color="#000" />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              width: '80%',
              marginTop: 5,
            }}>
            <Text
              style={{
                fontSize: 15,
                color: '#898989',
              }}>
              {companyName}
            </Text>
            <View
              style={{
                width: 7,
                height: 7,
                borderRadius: 5,
                backgroundColor: '#898989',
              }}
            />
            <Text
              style={{
                fontSize: 15,
                color: '#898989',
              }}>
              {address}
            </Text>
            <View
              style={{
                width: 7,
                height: 7,
                borderRadius: 5,
                backgroundColor: '#898989',
              }}
            />
            <Text
              style={{
                fontWeight: '700',
                fontSize: 15,
                color: '#40A55F',
              }}>
              {trusted}
            </Text>
          </View>
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
            <Text
              style={{
                fontWeight: '700',
                fontSize: 22,
                color: '#000',
              }}>
              ${salary}
            </Text>
            <Text
              style={{
                fontSize: 17,
                color: '#898989',
              }}>
              /month
            </Text>
          </View>
          <View
            style={{
              marginTop: 15,
              flexDirection: 'row',
            }}>
            <View
              style={{
                width: '30%',
                borderRadius: 20,
                borderWidth: 1,
                borderColor: '#d3d3d3',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  padding: 5,
                  color: '#898989',
                  fontSize: 12,
                }}>
                {jobType}
              </Text>
            </View>
            <View
              style={{
                width: '30%',
                borderRadius: 20,
                borderWidth: 1,
                borderColor: '#d3d3d3',
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 5,
              }}>
              <Text
                style={{
                  color: '#898989',
                  fontSize: 12,
                }}>
                {experienceLevel}
              </Text>
            </View>
            <View
              style={{
                width: '30%',
                borderRadius: 20,
                borderWidth: 1,
                borderColor: '#d3d3d3',
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 5,
              }}>
              <Text
                style={{
                  color: '#898989',
                  fontSize: 12,
                }}>
                {jobArea}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default JobCard;

const styles = StyleSheet.create({
  card: {
    height: 160,
    width: '100%',
    borderColor: '#d3d3d3',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
    padding: 5,
  },
  imageContainer: {
    width: '25%',
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 20,
    marginTop: 15,
    backgroundColor: '#fff',
  },
});
