import React, { Component } from 'react';
import { SafeAreaView,View,Text,FlatList,StyleSheet,TouchableOpacity } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { connect } from 'react-redux';
import userActions from '../../actions/userActions';
import { TabView, SceneMap } from 'react-native-tab-view';

class HomePage extends Component {
  state = {
    is_loading: false,
  }

  componentDidMount(){
    const {
      fetchAllUsers,
    } = this.props;

    this.setState({
      is_loading:true,
    })

    fetchAllUsers(this.handleCallback)
  }

  handleCallback = () => {
    this.setState({
      is_loading:false,
    });
    console.log("Fetched all users data");
    
  }

  userData = (user) =>{
    return (
      <TouchableOpacity style={styles.container} onPress={()=> this.props.navigation.push('User History',{ userId: user.user_id })}>
        <Text>{user.name} ({user.age})</Text>
      </TouchableOpacity>
    );
  }

  render() {
    console.log(this.props.is_loading);
    return this.props.is_loading == false? (
      <SafeAreaView>
        <FlatList
        data={this.props.all_users}
        renderItem={({item}) => this.userData(item)}
      />
      </SafeAreaView>
    ): <View><Text>Loading .....</Text></View>;
  }
}



const mapStateToProps = (state) => {
  return {
    all_users: state.userState.all_users,
    is_loading: state.userState.is_loading,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllUsers: (handleCallback) => {
      dispatch(userActions.fetchAllUsers(handleCallback));
    },
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:10,
    borderBottomWidth:1,
    borderBottomColor:'grey'
  },
  user: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);