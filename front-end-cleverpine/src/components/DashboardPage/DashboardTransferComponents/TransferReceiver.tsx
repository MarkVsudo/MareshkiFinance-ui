// TransferReceiver.tsx
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

interface ReceiverData {
  selectedDate?: string;
  receiverName?: string;
  receiverIBAN?: string;
  receiverBIC?: string;
  receiverBank?: string;
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

  useEffect(() => {
    const now = new Date();
    const year = now.getFullYear();
    let month = (now.getMonth() + 1).toString();
    let day = now.getDate().toString();

    if (month.length === 1) month = "0" + month;
    if (day.length === 1) day = "0" + day;

    const minDatetimeString = `${year}-${month}-${day}`;
    console.log("Min Datetime:", minDatetimeString);
    setMinDateTime(minDatetimeString);
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setReceiverData((prevData) => ({
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
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>{" "}
              <Select placeholder="Currency">
                <option value="option1">BGN</option>
                <option value="option2">EUR</option>
                <option value="option3">USD</option>
              </Select>
              <Select placeholder="Payment system">
                <option value="option1">BISERA</option>
                <option value="option2">RINGS</option>
              </Select>
              <Input placeholder="Reason for transfer" />
              <Input placeholder="Name of sender" />
            </Flex>
          </Flex>
        </form>
      </Flex>
    </>
  );
};

export default TransferReceiver;
