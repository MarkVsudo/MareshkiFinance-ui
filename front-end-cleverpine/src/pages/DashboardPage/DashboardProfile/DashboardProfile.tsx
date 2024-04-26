import { ChangeEvent, JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useEffect, useState } from "react";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Input,
  Stack,
  StackDivider,
  Select,
  Button,
  IconButton,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useUsersServiceGetUserProfile } from "../../../../openapi/queries";
import { DeleteIcon } from "@chakra-ui/icons";

interface BankAccount {
  accountType: string;
  currency: string;
  amount: number;
  iban: string;
  bicSwift: string;
  bankName: string;
}

const DashboardProfile = () => {
  const [bankAccount, setBankAccount] = useState<BankAccount>({
    accountType: "",
    currency: "",
    amount: 0,
    iban: "",
    bicSwift: "",
    bankName: "",
  });

  const [userData, setUserData] = useState({
    userId: 0,
    username: "",
    firstName: "",
    email: "",
    image: "",
  });

  const { data: userProfile } = useUsersServiceGetUserProfile({
    userId: userData.userId,
  });

  useEffect(() => {
    if (userProfile) {
      setUserData({
        userId: userProfile.userId || 0,
        username: userProfile.username || "",
        firstName: userProfile.firstName || "",
        email: userProfile.email || "",
        image: userProfile.profile_picture_url || "",
      });
    } else if (!userProfile) {
      setUserData({
        userId: 1,
        username: "mocked_user",
        firstName: "Mocked Name",
        email: "mocked@email.com",
        image: "",
      });
    }
  }, [userProfile]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBankAccount({
      ...bankAccount,
      [name]: value,
    });
  };

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setBankAccount({
      ...bankAccount,
      [name]: value,
    });
  };

  const handleAddBankAccount = () => {
    if (
      bankAccount.accountType &&
      bankAccount.currency &&
      bankAccount.amount &&
      bankAccount.iban &&
      bankAccount.bicSwift &&
      bankAccount.bankName
    ) {
      const bankAccounts = JSON.parse(
        localStorage.getItem("bankAccounts") || "[]"
      );
      localStorage.setItem(
        "bankAccounts",
        JSON.stringify([...bankAccounts, bankAccount])
      );
      setBankAccount({
        accountType: "",
        currency: "",
        amount: 0,
        iban: "",
        bicSwift: "",
        bankName: "",
      });
    } else {
      alert("Please fill in all fields.");
    }
  };


  const initialState = JSON.parse(localStorage.getItem("bankAccounts") || "[]"); 
  
    const [bankAccounts, setBankAccounts] = useState(initialState);
    useEffect(() => {
      localStorage.setItem("bankAccounts", JSON.stringify(bankAccounts));
    }, [bankAccounts]);
  
    const handleDelete = (index: number) => {
      const updatedBankAccounts = bankAccounts.slice(); 
      updatedBankAccounts.splice(index, 1);
      setBankAccounts(updatedBankAccounts);
    };
  

  return (
    <Flex gap="1rem" flexWrap="wrap">
      <Flex gap="1rem" w="100%">
        <Card w="50%">
          <CardHeader>
            <Heading size="md">User Information</Heading>
          </CardHeader>

          <CardBody>
            <Box w="100%">
              <Stack spacing={4}>
                <Input
                  placeholder="Username"
                  name="username"
                  value={userData.username}
                  onChange={handleInputChange}
                />
                <Input
                  placeholder="First name"
                  name="firstName"
                  value={userData.firstName}
                  onChange={handleInputChange}
                />
                <Input
                  placeholder="Email"
                  name="email"
                  value={userData.email}
                  onChange={handleInputChange}
                />
                <Input type="file" accept="image/*" pt=".25rem" name="image" />
              </Stack>
            </Box>
          </CardBody>
        </Card>

        <Card w="50%">
          <CardHeader>
            <Heading size="md">Add Bank Account</Heading>
          </CardHeader>
          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              <Box w="100%">
                <Stack spacing={4}>
                  <Select
                    placeholder="Select Account Type"
                    name="accountType"
                    onChange={handleSelectChange}
                    value={bankAccount.accountType}
                  >
                    <option value="payment">Payment</option>
                    <option value="savings">Savings</option>
                  </Select>
                  <Select
                    placeholder="Select Currency"
                    name="currency"
                    onChange={handleSelectChange}
                    value={bankAccount.currency}
                  >
                    <option value="BGN">BGN</option>
                    <option value="EUR">EUR</option>
                    <option value="USD">USD</option>
                  </Select>
                  <Input
                    placeholder="Amount"
                    type="number"
                    name="amount"
                    onChange={handleInputChange}
                    value={bankAccount.amount}
                  />
                  <Input
                    placeholder="IBAN"
                    name="iban"
                    onChange={handleInputChange}
                    value={bankAccount.iban}
                  />
                  <Input
                    placeholder="BIC/SWIFT"
                    name="bicSwift"
                    onChange={handleInputChange}
                    value={bankAccount.bicSwift}
                  />
                  <Input
                    placeholder="Bank Name"
                    name="bankName"
                    onChange={handleInputChange}
                    value={bankAccount.bankName}
                  />
                  <Button onClick={handleAddBankAccount}>Add Account</Button>
                </Stack>
              </Box>
            </Stack>
          </CardBody>
        </Card>
      </Flex>
      <Card w="100%">
        <CardHeader>
          <Heading size="md">Your available bank accounts</Heading>
        </CardHeader>
        <CardBody>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th isNumeric>№</Th>
                <Th>Account type</Th>
                <Th isNumeric>Amount</Th>
                <Th>Bank name</Th>
                <Th>BIC/SWIFT</Th>
                <Th>Currency</Th>
                <Th>IBAN</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {bankAccounts.map((account: {
                amount: ReactNode;
                bankName: ReactNode;
                bicSwift: ReactNode;
                currency: ReactNode;
                iban: ReactNode; accountType: string | number
}, index: number) => (
                <Tr key={index}>
                  <Td isNumeric>{index}</Td>
                  <Td>{account.accountType}</Td>
                  <Td isNumeric>{account.amount}</Td>
                  <Td>{account.bankName}</Td>
                  <Td>{account.bicSwift}</Td>
                  <Td>{account.currency}</Td>
                  <Td>{account.iban}</Td>
                  <Td>
                  <IconButton
                    colorScheme="red"
                    aria-label="Delete Account"
                    icon={<DeleteIcon />}
                    onClick={() => handleDelete(index)} 
                  />
                </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </CardBody>
      </Card>
    </Flex>
  );
};

export default DashboardProfile;
