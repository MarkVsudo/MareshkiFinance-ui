import { useEffect, useState, FC } from "react";
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
  IconButton,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

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
  senderAccountType?: string;
  senderCurrency?: string;
}

const DashboardHistory: FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const transactionsData = localStorage.getItem("transactionsData");
    if (transactionsData) {
      const parsedData = JSON.parse(transactionsData);
      const extractedTransactions = parsedData.map((transaction: any) => ({
        amount: parseFloat(transaction.receiverData.amount),
        currency: transaction.receiverData.currency,
        description: transaction.receiverData.description,
        paymentSystem: transaction.receiverData.paymentSystem,
        receiverBIC: transaction.receiverData.receiverBIC,
        receiverBank: transaction.receiverData.receiverBank,
        receiverIBAN: transaction.receiverData.receiverIBAN,
        receiverName: transaction.receiverData.receiverName,
        selectedDate: transaction.receiverData.selectedDate,
        senderName: transaction.receiverData.senderName,
        senderAccountType: transaction.senderData.senderAccountType,
        senderCurrency: transaction.senderData.senderCurrency,
      }));
      setTransactions(extractedTransactions);
    }
  }, []);

  const handleDelete = (index: number) => {
    const updatedTransactions = [...transactions];
    updatedTransactions.splice(index, 1);
    setTransactions(updatedTransactions);
    localStorage.setItem("transactionsData", JSON.stringify(updatedTransactions));
  };

  return (
    <Flex>
      <Box >
        <Text fontSize="xl" fontWeight="bold" mb={4}>
          Transactions history
        </Text>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th isNumeric>№</Th>
              <Th isNumeric>Amount</Th>
              <Th>Currency</Th>
              <Th>Description</Th>
              <Th>Payment System</Th>
              <Th>Receiver BIC</Th>
              <Th>Receiver IBAN</Th>
              <Th>Receiver Name</Th>
              <Th>Date</Th>
              <Th>Sender Name</Th>
              <Th>Sender Account Type</Th>
              <Th>Sender Currency</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {transactions.map((transaction, index) => (
              <Tr key={index+1}>
                <Td isNumeric>
                  {index+1}
                </Td>
                <Td isNumeric>
                  {transaction.amount && transaction.amount.toFixed(2)}
                </Td>
                <Td>{transaction.currency}</Td>
                <Td>{transaction.description}</Td>
                <Td>{transaction.paymentSystem}</Td>
                <Td>{transaction.receiverBIC}</Td>
                <Td>{transaction.receiverIBAN}</Td>
                <Td>{transaction.receiverName}</Td>
                <Td>{transaction.selectedDate}</Td>
                <Td>{transaction.senderName}</Td>
                <Td>{transaction.senderAccountType}</Td>
                <Td>{transaction.senderCurrency}</Td>
                <Td>
                  <IconButton
                    colorScheme="red"
                    aria-label="Delete Transaction"
                    icon={<DeleteIcon />}
                    onClick={() => handleDelete(index)} 
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Flex>
  );
};

export default DashboardHistory;
