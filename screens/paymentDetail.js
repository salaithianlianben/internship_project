import React, { Component } from 'react'
import { SafeAreaView, View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux';
import paymentActions from '../actions/paymentActions';

class PaymentDetail extends Component {
    componentDidMount(){
        const {
            fetchPaymentById ,
        } = this.props;

        fetchPaymentById(this.props.route.params.payId);
    }
    render() {
        console.log(this.props.payment_detail)
        return this.props.is_loading == false ?(
            <SafeAreaView>
                {
                    this.props.payment_detail.map((payment,index)=> <View style={styles.card} key={index}>
                    <View style={{
                        flexDirection:"row",
                        justifyContent:"space-between"
                    }}>
                        <Text style={{
                            fontSize:18,
                        }}>{payment.name}</Text>
                        <Text style={{
                            fontSize:18
                        }}>{payment.amount}</Text>
                    </View>
                    <View style={{
                        height:10,
                    }}/>
                    <View style={{
                        flexDirection:"row",
                        justifyContent:"space-between"
                    }}>
                        <Text style={{
                            fontSize:10,
                        }}>{payment.pay_ref}</Text>
                        <Text style={{
                            color: payment.status == 0 ? "red" : "green"
                        }}>{payment.status == 0 ? "fail" : "success"}</Text>
                    </View>
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
        payment_detail: state.paymentState.payment_detail,
        is_loading: state.paymentState.is_loading,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPaymentById: (pay_id) => {
            dispatch(paymentActions.fetchPaymentById(pay_id));
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
        // flex:1,
        padding:20,
        margin:5,
        borderRadius:10,
        borderWidth:1,
        borderColor:"#bdbdbd"
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(PaymentDetail);