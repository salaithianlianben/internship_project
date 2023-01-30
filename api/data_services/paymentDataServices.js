import request from '../request';
import config from '../../utils/configs';

const paymentDataServices = {
  getAllPayment: () => {
    let path = `${config.fetchAllPayments}`;
    
    return request.sendRequestGET(path);
  },
  getPaymentById: (pay_id) => {
    let path = `${config.fetchPaymentByPayId}${pay_id}`;
    
    return request.sendRequestGET(path);
  },
};

export default paymentDataServices;