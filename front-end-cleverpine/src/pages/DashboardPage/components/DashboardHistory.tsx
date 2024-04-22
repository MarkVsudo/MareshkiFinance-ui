import React from "react";
import {
  Flex,
  Box,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";

interface Transaction {
  amount?: number;
  currency?: string;
  description?: string;
  paymentSystem?: string;
  receiverBIC?: string;
  receiverBank?: string;
  receiverIBAN?: string;
  receiverName?: string;
  selectedDate?: string;
  senderName?: string;
  balance?: number;
  status?: string;
  // senderAccountType?: string;
  // senderCurrency?: string;
}

const TransactionsTable: React.FC = () => {
  const transactionsData = localStorage.getItem("transactionsData");
  const { receiverData, senderData } = transactionsData
    ? JSON.parse(transactionsData)
    : { receiverData: {}, senderData: {} };

  const transactions: Transaction[] = [
    {
      amount: parseFloat(receiverData.amount),
      currency: receiverData.currency,
      description: receiverData.description,
      paymentSystem: receiverData.paymentSystem,
      receiverBIC: receiverData.receiverBIC,
      receiverBank: receiverData.receiverBank,
      receiverIBAN: receiverData.receiverIBAN,
      receiverName: receiverData.receiverName,
      selectedDate: receiverData.selectedDate,
      senderName: receiverData.senderName,
      // senderAccountType: senderData.senderAccountType,
      // senderCurrency: senderData.senderCurrency,
    },
  ];

  return (
    <Flex justifyContent="center" alignItems="center">
      <Box w="max-content">
        <Text fontSize="xl" fontWeight="bold" mb={4}>
          Transactions history
        </Text>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th isNumeric>Amount</Th>
              <Th>Currency</Th>
              <Th>Description</Th>
              <Th>Payment System</Th>
              <Th>Receiver BIC</Th>
              <Th>Receiver IBAN</Th>
              <Th>Receiver Name</Th>
              <Th>Date</Th>
              <Th>Sender Name</Th>
              {/* <Th>Sender Account Type</Th>
              <Th>Sender Currency</Th> */}
            </Tr>
          </Thead>
          <Tbody>
            {transactions.map((transaction, index) => (
              <Tr key={index}>
                <Td isNumeric>
                  {transaction.amount && `${transaction.amount.toFixed(2)}`}
                </Td>
                <Td>{transaction.currency}</Td>
                <Td>{transaction.description}</Td>
                <Td>{transaction.paymentSystem}</Td>
                <Td>{transaction.receiverBIC}</Td>
                <Td>{transaction.receiverIBAN}</Td>
                <Td>{transaction.receiverBank}</Td>
                <Td>{transaction.selectedDate}</Td>
                <Td>{transaction.receiverName}</Td>
                {/* <Td>{transaction.senderAccountType}</Td>
                <Td>{transaction.senderCurrency}</Td> */}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Flex>
  );
};

export default TransactionsTable;
