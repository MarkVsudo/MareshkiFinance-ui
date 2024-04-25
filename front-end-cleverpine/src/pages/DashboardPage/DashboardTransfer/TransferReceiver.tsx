import {
  ChangeEvent,
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import {
  Flex,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
} from "@chakra-ui/react";
import { atom, useAtom } from "jotai";

export const receiverDataAtom = atom({
  selectedDate: "",
  receiverName: "",
  receiverIBAN: "",
  receiverBIC: "",
  receiverBank: "",
  description: "",
  currency: "",
  amount: 10.0,
  paymentSystem: "",
  senderName: "",
});

interface ReceiverData {
  selectedDate?: string;
  receiverName?: string;
  receiverIBAN?: string;
  receiverBIC?: string;
  receiverBank?: string;
  description?: string;
  currency?: string;
  amount?: number;
  paymentSystem?: string;
  senderName?: string;
}

interface TransferReceiverProps {
  receiverData: ReceiverData;
  setReceiverData: Dispatch<SetStateAction<ReceiverData>>;
}

const TransferReceiver: FC<TransferReceiverProps> = ({
  receiverData,
  setReceiverData,
}) => {
  const [minDateTime, setMinDateTime] = useState<string>("");
  const [storedData, setStoredData] = useAtom(receiverDataAtom);

  useEffect(() => {
    const now = new Date();
    const year = now.getFullYear();
    let month = (now.getMonth() + 1).toString().padStart(2, "0");
    let day = now.getDate().toString().padStart(2, "0");

    const minDatetimeString = `${year}-${month}-${day}`;
    setMinDateTime(minDatetimeString);
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setReceiverData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setStoredData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <Flex flexDirection="column">
        <form>
          <Flex gap="2rem">
            <Flex flexDirection="column" gap="1rem" w="lg">
              <Input
                placeholder="Select Date"
                size="md"
                type="date"
                min={minDateTime}
                name="selectedDate"
                value={receiverData.selectedDate || ""}
                onChange={handleChange}
              />
              <Input
                placeholder="Name of receiver"
                name="receiverName"
                value={receiverData.receiverName || ""}
                onChange={handleChange}
              />
              <Input
                placeholder="IBAN"
                name="receiverIBAN"
                value={receiverData.receiverIBAN || ""}
                onChange={handleChange}
              />
              <Input
                placeholder="BIC"
                name="receiverBIC"
                value={receiverData.receiverBIC || ""}
                onChange={handleChange}
              />
              <Input
                placeholder="Bank of receiver"
                name="receiverBank"
                value={receiverData.receiverBank || ""}
                onChange={handleChange}
              />
            </Flex>
            <Flex flexDirection="column" gap="1rem" w="lg">
              <NumberInput defaultValue={10} precision={2} min={10} step={0.2}>
                <NumberInputField
                  name="amount"
                  value={receiverData.amount || "10.00"}
                  onChange={handleChange}
                />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>{" "}
              <Select
                placeholder="Currency"
                value={receiverData.currency || ""}
                onChange={handleChange}
                name="currency"
              >
                <option value="BGN">BGN</option>
                <option value="EUR">EUR</option>
                <option value="USD">USD</option>
              </Select>
              <Select
                placeholder="Payment system"
                value={receiverData.paymentSystem || ""}
                onChange={handleChange}
                name="paymentSystem"
              >
                <option value="BISERA">BISERA</option>
                <option value="RINGS">RINGS</option>
              </Select>
              <Input
                placeholder="Reason for transfer"
                name="description"
                value={receiverData.description || ""}
                onChange={handleChange}
              />
              <Input
                placeholder="Name of sender"
                name="senderName"
                value={receiverData.senderName || ""}
                onChange={handleChange}
              />
            </Flex>
          </Flex>
        </form>
      </Flex>
    </>
  );
};

export default TransferReceiver;
