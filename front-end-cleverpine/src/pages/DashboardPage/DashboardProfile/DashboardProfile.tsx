import { ChangeEvent, useState } from "react";
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
} from "@chakra-ui/react";

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

  return (
    <Flex gap="3rem">
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
                onChange={handleInputChange}
              />
              <Input
                placeholder="First name"
                name="firstName"
                onChange={handleInputChange}
              />
              <Input
                placeholder="Email"
                name="email"
                onChange={handleInputChange}
              />
              <Input
                placeholder="Country"
                name="country"
                onChange={handleInputChange}
              />
              <Input
                placeholder="City"
                name="city"
                onChange={handleInputChange}
              />
              <Input
                type="file"
                accept="image/*"
                pt=".25rem"
                name="image"
                onChange={handleInputChange}
              />
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
  );
};

export default DashboardProfile;
