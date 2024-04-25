import {
  ChangeEvent,
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { Flex, Input, Select } from "@chakra-ui/react";
import { atom, useAtom } from "jotai";

export const senderDataAtom = atom({
  senderAccountType: "",
  senderCurrency: "",
});

interface Account {
  accountType: string;
  currency: string;
  amount: number;
  iban: string;
  bicSwift: string;
  bankName: string;
}

interface SenderData {
  senderAccountType?: string;
  senderCurrency?: string;
}

interface TransferSenderProps {
  senderData: SenderData;
  setSenderData: Dispatch<SetStateAction<SenderData>>;
}

const TransferSender: FC<TransferSenderProps> = ({
  senderData,
  setSenderData,
}) => {
  const [selectedAccount, setSelectedAccount] = useState<Account | undefined>(
    undefined
  );
  const [selectedAccountType, setSelectedAccountType] = useState<string>("");
  const [selectedCurrency, setSelectedCurrency] = useState<string>("");
  const [storedData, setStoredData] = useAtom(senderDataAtom);

  const handleAccountTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const accountType = e.target.value;
    setSelectedAccountType(accountType);
    setSenderData((prevData) => ({
      ...prevData,
      senderAccountType: accountType,
    }));
    setStoredData((prevData) => ({
      ...prevData,
      senderAccountType: accountType,
    }));
  };

  const handleCurrencyChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const currency = e.target.value;
    setSelectedCurrency(currency);
    setSenderData((prevData) => ({
      ...prevData,
      senderCurrency: currency,
    }));
    setStoredData((prevData) => ({
      ...prevData,
      senderCurrency: currency,
    }));
  };

  useEffect(() => {
    const accounts = JSON.parse(
      localStorage.getItem("bankAccounts") || "[]"
    ) as Account[];
    const account = accounts.find(
      (acc) =>
        acc.accountType === selectedAccountType &&
        acc.currency === selectedCurrency
    );
    setSelectedAccount(account);
  }, [selectedAccountType, selectedCurrency]);

  return (
    <>
      <Flex flexDirection="column">
        <form>
          <Flex flexDirection="column" gap="1rem" w="lg">
            <Select
              placeholder="Account type"
              onChange={handleAccountTypeChange}
              value={senderData.senderAccountType || ""}
            >
              <option value="payment">Payment</option>
              <option value="savings">Savings</option>
            </Select>
            {selectedAccountType && (
              <Select
                placeholder="Currency"
                onChange={handleCurrencyChange}
                value={senderData.senderCurrency || ""}
              >
                <option value="BGN">BGN</option>
                <option value="EUR">EUR</option>
                <option value="USD">USD</option>
              </Select>
            )}
            {selectedAccount && (
              <>
                <Input
                  placeholder="Amount"
                  value={selectedAccount.amount}
                  readOnly
                />
                <Input
                  placeholder="IBAN"
                  value={selectedAccount.iban}
                  readOnly
                />
                <Input
                  placeholder="BIC/SWIFT"
                  value={selectedAccount.bicSwift}
                  readOnly
                />
                <Input
                  placeholder="Bank name"
                  value={selectedAccount.bankName}
                  readOnly
                />
              </>
            )}
          </Flex>
        </form>
      </Flex>
    </>
  );
};

export default TransferSender;
