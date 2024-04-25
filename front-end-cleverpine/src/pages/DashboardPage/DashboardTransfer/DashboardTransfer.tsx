import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Text,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  Stepper,
  StepSeparator,
  StepStatus,
  StepTitle,
  useSteps,
  useToast,
} from "@chakra-ui/react";
import TransferReceiver from "./TransferReceiver";
import TransferSender from "./TransferSender";

const steps = [
  {
    title: "Enter receiver's bank credentials",
    description: "First Step",
    component: TransferReceiver,
  },
  {
    title: "Enter your bank credentials",
    description: "Second Step",
    component: TransferSender,
  },
  { title: "Finalize transaction", description: "Final Step" },
];

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

interface SenderData {
  senderAccountType?: string;
  senderCurrency?: string;
}

const DashboardTransfer = () => {
  const { activeStep, goToNext, goToPrevious } = useSteps({
    index: 0,
    count: steps.length,
  });
  const toast = useToast();

  const [receiverData, setReceiverData] = useState<ReceiverData>({});
  const [senderData, setSenderData] = useState<SenderData>({});

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      handleFinalize();
    } else {
      goToNext();
    }
  };

  const handlePrev = () => {
    goToPrevious();
  };

  const handleFinalize = () => {
    const existingTransactions = JSON.parse(
      localStorage.getItem("transactionsData") || "[]"
    );

    const newTransaction = {
      receiverData,
      senderData,
      timestamp: new Date().toISOString(),
    };

    const updatedTransactions = [...existingTransactions, newTransaction];

    localStorage.setItem(
      "transactionsData",
      JSON.stringify(updatedTransactions)
    );

    showFinalToast(true);
  };

  const renderStepComponent = () => {
    const StepComponent = steps[activeStep].component;
    return StepComponent && activeStep < steps.length - 1 ? (
      <StepComponent
        receiverData={receiverData}
        setReceiverData={setReceiverData}
        senderData={senderData}
        setSenderData={setSenderData}
      />
    ) : null;
  };

  const showFinalToast = (success: boolean) => {
    toast({
      title: success ? "Transfer resolved" : "Transfer rejected",
      description: success ? "Looks great" : "Something went wrong",
      status: success ? "success" : "error",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <>
      <Flex gap="1rem" flexDirection="column">
        <Text fontSize="xl" fontWeight="bold" mb={4}>
          Make a transaction
        </Text>
        <Stepper index={activeStep} orientation="vertical" w="100%" gap="0">
          {steps.map((step, index) => (
            <Step key={index}>
              <StepIndicator>
                <StepStatus
                  complete={<StepIcon />}
                  incomplete={<StepNumber />}
                  active={<StepNumber />}
                />
              </StepIndicator>

              <Box flexShrink="0">
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>{step.description}</StepDescription>
                <Flex
                  textAlign="center"
                  justifyContent="center"
                  alignItems="center"
                  my="1rem"
                >
                  {index === activeStep && renderStepComponent()}
                </Flex>
              </Box>

              <StepSeparator />
            </Step>
          ))}
        </Stepper>
      </Flex>

      <Box mt="4">
        <Button
          colorScheme="blue"
          onClick={handlePrev}
          disabled={activeStep === 0}
          mr="2"
          display={activeStep === 0 ? "none" : ""}
        >
          Previous
        </Button>
        <Button
          colorScheme="blue"
          onClick={handleNext}
          disabled={activeStep === steps.length - 1}
        >
          {activeStep === steps.length - 1 ? "Finalize Transfer" : "Next"}
        </Button>
      </Box>
    </>
  );
};

export default DashboardTransfer;
