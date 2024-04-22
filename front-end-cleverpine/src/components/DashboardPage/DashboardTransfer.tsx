import { useState } from "react";
import {
  Box,
  Button,
  Flex,
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
import TransferReceiver from "./DashboardTransferComponents/TransferReceiver";
import TransferSender from "./DashboardTransferComponents/TransferSender";

const steps = [
  { title: "Enter receiver's bank credentials", description: "First Step", component: TransferReceiver },
  { title: "Enter your bank credentials", description: "Second Step", component: TransferSender },
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

const DashboardSettings = () => {
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
    const transactionsData = {
      receiverData,
      senderData,
      timestamp: new Date().toISOString(),
    };

    localStorage.setItem("transactionsData", JSON.stringify(transactionsData));

    showFinalToast(true);
  };

  const renderStepComponent = () => {
    const StepComponent = steps[activeStep].component;
    return StepComponent ? (
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
      <Flex gap="5rem" flexDirection="column">
        <Stepper index={activeStep} orientation="horizontal" w="100%" gap="0">
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
              </Box>

              <StepSeparator />
            </Step>
          ))}
        </Stepper>
        <Flex textAlign="center" justifyContent="center" alignItems="center">
          {renderStepComponent()}
        </Flex>
      </Flex>

      <Box mt="4" textAlign="center">
        <Button colorScheme="blue" onClick={handlePrev} disabled={activeStep === 0} mr="2">
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

export default DashboardSettings;
