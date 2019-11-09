//import libraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  StatusBar,
  Image,
  ScrollView,
} from 'react-native';
import {postEvento} from '../actions/';
import {connect} from 'react-redux';
import {Header} from 'native-base';
import ImagePicker from 'react-native-image-picker';

// create a component
class Post extends Component {
  state = {
    title: '',
    place: '',
    eventDate: '',
    photo: null,
  };

  submit = () => {
    this.props.postEvento(
      this.state.title,
      this.state.place,
      this.state.eventDate,
      this.state.photo,
    );
    this.setState({
      title: '',
      place: '',
      eventDate: '',
      photo: null,
    });
    this.props.navigation.navigate('Blogs');
  };

  state = {
    photo: null,
  };

  handleChoosePhoto = () => {
    const options = {
      noData: true,
    };
    ImagePicker.launchImageLibrary(options, response => {
      console.log('response', response);
      if (response.uri) {
        this.setState({photo: response});
      }
    });
  };

  render() {
    const {photo} = this.state;
    return (
      <View style={{flex: 1}}>
        <Header
          style={{
            backgroundColor: '#00A9F4',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              marginLeft: 7,
              marginRight: 7,
            }}>
            <Text
              style={{
                color: '#fff',
                textAlign: 'center',
                fontSize: 20,
              }}>
              Create Event
            </Text>
          </View>
        </Header>
        <ScrollView style={styles.container}>
          <StatusBar backgroundColor="#0097DA" />

          <View style={styles.viewForm}>
            {/*
            It's actually just selecting an image from gallery,
            but it's not uploading to firebase storage..
            */}

            <View style={styles.photoStyle}>
              {photo && (
                <Image source={{uri: photo.uri}} style={styles.photoStyle} />
              )}
            </View>
            <TouchableOpacity
              title="Choose a photo"
              onPress={this.handleChoosePhoto}
              style={styles.btnChoosePhoto}>
              <Text style={styles.btnCreateEventText}>Pick a foto</Text>
            </TouchableOpacity>

            <Text style={{fontSize: 16, paddingLeft: 4, fontWeight: 'bold'}}>
              Event name:
            </Text>
            <TextInput
              style={styles.inputTxt}
              placeholderTextColor="#ccc"
              placeholder="Event name..."
              onChangeText={title => this.setState({title})}
              value={this.state.title}
            />

            <Text style={{fontSize: 16, paddingLeft: 4, fontWeight: 'bold'}}>
              Place:
            </Text>
            <TextInput
              style={styles.inputTxt}
              placeholderTextColor="#ccc"
              placeholder="Place..."
              onChangeText={place => this.setState({place})}
              value={this.state.place}
            />

            <Text style={{fontSize: 16, paddingLeft: 4, fontWeight: 'bold'}}>
              Date:
            </Text>
            <TextInput
              style={styles.inputTxt}
              placeholderTextColor="#ccc"
              placeholder="Event date..."
              onChangeText={eventDate => this.setState({eventDate})}
              value={this.state.eventDate}
            />
            <TouchableOpacity onPress={this.submit} style={styles.btnSubmit}>
              <Text style={styles.btnCreateEventText}>Create new event</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 30,
    flex: 1,
    backgroundColor: '#F5F5FC',
  },
  btnSubmit: {
    height: 40,
    width: 300,
    backgroundColor: '#00A9F4',
    marginTop: 20,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  photoStyle: {
    justifyContent: 'center',
    width: 100,
    height: 100,
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 15,
    borderWidth: 0.1,
  },
  btnChoosePhoto: {
    height: 40,
    width: 300,
    backgroundColor: '#00A9F4',
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  btnCreateEventText: {
    color: '#FFF',
    fontSize: 16,
  },
  inputTxt: {
    color: '#000',
    fontSize: 16,
    height: 46,
    alignSelf: 'stretch',
    borderColor: '#000',
    borderBottomWidth: 1,
    marginBottom: 5,
    marginBottom: 30,
  },
  viewForm: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 80,
    borderRadius: 15,
  },
});

//make this component available to the app
export default connect(
  null,
  {postEvento},
)(Post);
