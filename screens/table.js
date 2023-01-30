import React, { Component } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Table, Row, Rows, TableWrapper, Cell } from 'react-native-table-component';
import paymentActions from '../actions/paymentActions';
import { DataTable } from 'react-native-paper';
import SelectDropdown from 'react-native-select-dropdown'
import Ionicons from 'react-native-vector-icons/Ionicons';

class TablePage extends Component {

  componentDidMount() {
    const {
      fetchAllPayment,
    } = this.props;


    fetchAllPayment()
  }

  state = {
    tableHead: ['User_id', 'Name', 'Pay_id', 'Status'],
    selectedStatus:null,
  }

  getAllPaymentForTable = () => {
    var paymentTemp = this.props.all_payment.sort((a, b) => { return a.amount - b.amount; });
    var selectedIndex = this.state.selectedStatus == null ? null : this.state.selectedStatus == "success" ? 1 : 0;
    selectedIndex != null ? paymentTemp = paymentTemp.filter((payment)=> payment.status == selectedIndex ) : null;
    return paymentTemp.map((row) => {
      return [
        row.user_id,
        row.name,
        row.pay_id,
        row.status,
      ]
    })
  }

  render() {

    const paymentStatus = ["success","fail"]
    const element = (data, index) => (
        <View style={data == 1 ? styles.successStatus : styles.failStatus}>
          <Text style={{color:'white'}}>{data == 1 ? "success": "fail"}</Text>
        </View>
    );

    console.log("+++++++++++++++++++++++++");
    console.log(this.getAllPaymentForTable());
    console.log("+++++++++++++++++++++++++");

    return this.props.is_loading == false ? (
      <SafeAreaView>
        <ScrollView>
        <View style={styles.container}>
        <SelectDropdown
          data={paymentStatus}
          buttonStyle={{
            borderColor:"grey",
            borderRadius:20,
            borderWidth:1,
          }}
          renderDropdownIcon={isOpened => {
            return <Ionicons name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
          }}
          dropdownIconPosition={'right'}
          onSelect={(selectedItem, index) => {
            this.setState({
              selectedStatus:selectedItem,
            })
          }}
        />
        <View style={{height:10}}/>
          {/* <DataTable style={styles.container}>
            <DataTable.Header style={styles.tableHeader}>
              {
                this.state.tableHead.map((head,index)=> <DataTable.Title key={index}>{head}</DataTable.Title>)
              }
              
            </DataTable.Header>
            {
              this.getAllPaymentForTable().map((row,index)=><DataTable.Row key={index}>
                <DataTable.Cell >{row.user_id}</DataTable.Cell>
                <DataTable.Cell >{row.name}</DataTable.Cell>
                <DataTable.Cell >{row.pay_id}</DataTable.Cell>
                <DataTable.Cell >{row.status}</DataTable.Cell>
              </DataTable.Row>)
            }
          </DataTable> */}
          <Table borderStyle={{borderColor: 'transparent'}}>
          <Row data={this.state.tableHead} style={styles.head} textStyle={styles.text}/>
          {
            this.getAllPaymentForTable().map((rowData, index) => (
              <TableWrapper key={index} style={styles.row}>
                {
                  rowData.map((cellData, cellIndex) => (
                    <Cell key={cellIndex} data={cellIndex === 3 ? element(cellData, index) : cellData} textStyle={styles.cell}/>
                  ))
                }
              </TableWrapper>
            ))
          }
        </Table>

        </View>
        </ScrollView>
        
      </SafeAreaView>
    ) : <View>
      <Text>Loading ...</Text>
    </View>;
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 5, },
  head: { height: 40, backgroundColor: 'green' },
  text: { margin: 6 , color:"white", fontWeight:"bold"},
  cell:{
    margin:3,
  },
  row: { flexDirection: 'row', },
  successStatus:{
    borderRadius:10,
    backgroundColor:"green",
    alignItems:"center",
    alignSelf:"center",
    paddingHorizontal:5,
    paddingVertical:3,
  },
  failStatus:{
    borderRadius:10,
    backgroundColor:"red",
    alignItems:"center",
    alignSelf:"center",
    paddingHorizontal:5,
    paddingVertical:3,
  }
});


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
export default connect(mapStateToProps, mapDispatchToProps)(TablePage);