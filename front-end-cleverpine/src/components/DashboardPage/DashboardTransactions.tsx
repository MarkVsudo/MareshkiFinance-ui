import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

const DashboardTransactions = () => {
  return (
    <>
      <Card w="max-content">
        <CardHeader>
          <Heading size="md">Transactions history</Heading>
        </CardHeader>

        <CardBody>
        <TableContainer>
      <Table variant="simple">
        <TableCaption>Bank Transactions</TableCaption>
        <Thead>
          <Tr>
            <Th>Date</Th>
            <Th>Description</Th>
            <Th isNumeric>Amount</Th>
            <Th isNumeric>Balance</Th>
            <Th>Type</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>2024-04-15</Td>
            <Td>Deposit from Employer</Td>
            <Td isNumeric>$2000.00</Td>
            <Td isNumeric>$5000.00</Td>
            <Td>Deposit</Td>
            <Td>Completed</Td>
          </Tr>
          <Tr>
            <Td>2024-04-16</Td>
            <Td>Electricity Bill Payment</Td>
            <Td isNumeric>-$100.00</Td>
            <Td isNumeric>$4900.00</Td>
            <Td>Withdrawal</Td>
            <Td>Completed</Td>
          </Tr>
          <Tr>
            <Td>2024-04-17</Td>
            <Td>Transfer to Savings Account</Td>
            <Td isNumeric>-$500.00</Td>
            <Td isNumeric>$4400.00</Td>
            <Td>Transfer</Td>
            <Td>Completed</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
        </CardBody>
      </Card>
    </>
  );
};

export default DashboardTransactions;
