import React from 'react'


const Payment = () => {
  return (
      <>
        <h3 className="py-4">Payment</h3>
      <table className="payment-table">
              <tr id="payment-table-head">
                  <th>Service</th>
                  <th>ID</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Process</th>
                  <th>Status</th>
                  <th>Action</th>
              </tr>
              <tr className="payment-table-item">
                <td>Car Wash</td>
                <td>9878 578 456</td>
                <td>12-08-22</td>
                <td>50$</td>
                <td>Pending</td>
                <td className="text-danger">Not paid</td>
                <td><span className=" bg-dark p-1 text-white rounded">Make Payment</span> </td>
              </tr>
              <tr className="payment-table-item">
                <td>battery Change</td>
                <td>9878 578 456</td>
                <td>12-08-22</td>
                <td>50$</td>
                <td>Pending</td>
                <td className="text-danger">Not paid</td>
                <td><span className=" bg-success p-1 text-white rounded">Make Payment</span> </td>
              </tr>
        

            </table>
    </>
  )
}

export default Payment
