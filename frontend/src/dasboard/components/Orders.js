import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from '../Title';
import { useState, useEffect } from "react";
import axios from "axios";

const buttonStyles = {
    backgroundColor: '#be4d25',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '5px',
    cursor: 'pointer'
  }

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders(props) {

    const [orders, setOrders] = useState([]);
  
    useEffect(() => {
      const fetchOrders = async () => {
        const reponse = await axios.get("/api/orders");
        setOrders(reponse.data);
      };
  
      fetchOrders();
    }, []);

  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Customer Name</TableCell>
            <TableCell>Ship To</TableCell>
            <TableCell>Sale Amount</TableCell>
            <TableCell>Delivery Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {orders.slice().reverse().map((order,i) => {
                const date = new Date(order.createdAt);
                const dateOnly = date.toLocaleDateString('en-US', {year: 'numeric', month: 'short', day:'numeric'});
                return (
                    <TableRow key={order.id}>
                    <TableCell>{dateOnly}</TableCell>
                    <TableCell>{order.shippingAddress.fullName}</TableCell>
                    <TableCell>{order.shippingAddress.address}, {order.shippingAddress.city}</TableCell>
                    <TableCell>Rs. {order.totalPrice}</TableCell>
                    <TableCell>
                        {order.isDelivered ? 'Completed ' : 'Pending '}
                    </TableCell>
                    <TableCell>
                    <button disabled={order.isDelivered} style={buttonStyles} onClick={() => {
                        // code to mark the order as delivered
                        }}>Mark as Delivered</button>
                        </TableCell>
                    </TableRow>
                );
            })}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
  );
}