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

function preventDefault(event) {
  event.preventDefault();
}

export default function Users(props) {

    const [users, setUsers] = useState([]);
  
    useEffect(() => {
      const fetchUsers = async () => {
        const reponse = await axios.get("/api/users");
        setUsers(reponse.data);
      };
  
      fetchUsers();
    }, []);

  return (
    <React.Fragment>
      <Title>Customer Details</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Customer Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Contact</TableCell>
            <TableCell>Account Creation Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {users.map((user,i) => {
                const date = new Date(user.createdAt);
                const dateOnly = date.toLocaleDateString('en-US', {year: 'numeric', month: 'short', day:'numeric'});
                return (
                    <TableRow key={user.id}>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.contact}</TableCell>
                    <TableCell>{dateOnly}</TableCell>
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