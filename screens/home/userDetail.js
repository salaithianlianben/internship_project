import React, { Component } from 'react'
import { SafeAreaView, View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux';
import userActions from '../../actions/userActions';

class UserDetail extends Component {
    componentDidMount(){
        const {
            fetchUserById,
        } = this.props;

        fetchUserById(this.props.route.params.userId);
    }
    render() {
        return this.props.is_loading == false ?(
            <SafeAreaView>
                {
                    this.props.user_detail.map((user,index) => <View key={index} style={[styles.card, {
                        backgroundColor:user.status == 1? "#17d821" : "#ea3d3d"
                    }]}>
                        <Text style={styles.amount}>{user.amount}</Text>
                        <Text style={styles.payment_ref}>Payment Ref : {user.pay_ref}</Text>
                    </View>)
                }
            </SafeAreaView>
        ):<View>
            <Text>Loading .... </Text>
        </View>
    }
}

const mapStateToProps = (state) => {
    return {
        user_detail: state.userState.user_detail,
        is_loading: state.userState.is_loading,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUserById: (user_id) => {
            dispatch(userActions.fetchUserById(user_id));
        },
    }
}

const styles = StyleSheet.create({
    amount:{
        fontSize:23,
        color:"#fff"
    },
    payment_ref:{
        fontSize:14,
        color:"#fff"
    },
    card:{
        padding:20,
        margin:5,
        borderRadius:10,
        borderWidth:1,
        borderColor:"#bdbdbd"
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(UserDetail);