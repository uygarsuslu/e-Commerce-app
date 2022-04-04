import React from 'react'

import { useQuery } from "react-query";
import { fetchOrders } from "../../../api";
import { Table, Thead, Tbody, Tr, Td, Th, TableCaption, Text } from "@chakra-ui/react";

function Orders() {

    const { isLoading, isError, data, error } = useQuery("admin:orders", fetchOrders);

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (isError) {
        return <div>Error {error.messages} </div>
    }

    console.log(data);

    return (
        <div>
            <Text fontSize="2xl" padding={5}>Orders</Text>

            <Table variant='simple'>
                <TableCaption>Imperial to metric conversion factors</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Users</Th>
                        <Th>Address</Th>
                        <Th>Item</Th>
                    </Tr>
                </Thead>

                <Tbody>
                    {
                        data.map((item) => (
                            <Tr key={item._id}>
                                <Td>{item.user.email}</Td>
                                <Td>{item.adress}</Td>
                                <Td isNumeric>{item.items.length}</Td>
                            </Tr>
                        ))
                    }
                </Tbody>
            </Table>
        </div>
    )
}

export default Orders