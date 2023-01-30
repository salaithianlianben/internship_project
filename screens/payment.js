import React, { Component } from 'react';
import { SafeAreaView,View,Text,TouchableOpacity,FlatList,StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import paymentActions from '../actions/paymentActions';

class PaymentPage extends Component {

  componentDidMount(){
    const {
      fetchAllPayment,
    } = this.props;


    fetchAllPayment()
  }

  paymentData = (payment) =>{
    return (
      <TouchableOpacity style={styles.container} onPress={()=> this.props.navigation.push('Payment Detail',{ payId: payment.pay_id })}>
        <View style={styles.amount}>
        <Text>{payment.name}  </Text>
        <Text style={{
          color: payment.status == 0 ? "red":"green"
        }}>* {payment.status == 0 ? "fail":"success" }</Text>
        </View>
        <Text style>{payment.pay_ref}</Text>
      </TouchableOpacity>
    );
  }

  render() {
    return this.props.is_loading == false? (
      <SafeAreaView>
        <FlatList
        data={this.props.all_payment}
        renderItem={({item}) => this.paymentData(item)}
      />
      </SafeAreaView>
    ): <View><Text>Loading .....</Text></View>;
  }
}

const mapStateToProps = (state) => {
  return {
    all_payment: state.paymentState.all_payment,
    is_loading: state.paymentState.is_loading,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllPayment: () => {
      dispatch(paymentActions.fetchAllPayment());
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
  amount:{
    flex:1,
    flexDirection:'row',
  }
});

export default connect(mapStateToProps,mapDispatchToProps)(PaymentPage);