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

const TransferSender = () => {
  return (
    <>
      <Flex flexDirection="column">
        <form>
          <Flex gap='2rem'>
            <Flex flexDirection="column" gap='1rem' w='lg'>
              <Input
                placeholder="Select Date and Time"
                size="md"
                type="datetime-local"
              />
              <Input placeholder="Name of receiver" />
              <Input placeholder="IBAN" />
              <Input placeholder="BIC" />
              <Input placeholder="Bank of receiver" />
            </Flex>
            <Flex flexDirection="column" gap='1rem' w='lg'>
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
              <Select placeholder="Payment account">
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

export default TransferSender;
