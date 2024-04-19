import {
  Box,
  Button,
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
  { title: "Enter your bank credentials", description: "First Step", component: TransferSender },
  { title: "Enter receiver's bank credentials", description: "Second Step", component: TransferReceiver },
  { title: "Finalize transaction", description: "Final Step" },
];

const DashboardSettings = () => {
  const { activeStep, goToNext, goToPrevious } = useSteps({
    index: 0, // Start from the first step
    count: steps.length,
  });
  const toast = useToast();

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      // If it's the final step, show the toast
      showFinalToast();
    } else {
      goToNext();
    }
  };

  const handlePrev = () => {
    goToPrevious();
  };

  // Define a function to render the component for the active step
  const renderStepComponent = () => {
    const StepComponent = steps[activeStep].component; // Get the component for the active step
    return StepComponent ? <StepComponent /> : null; // Render the component if it exists
  };

  // Function to show the final toast
  const showFinalToast = () => {
    // Create an example promise that resolves in 5s
    const examplePromise = new Promise((resolve, reject) => {
      setTimeout(() => resolve(200), 5000);
    });

    // Will display the loading toast until the promise is either resolved
    // or rejected.
    toast.promise(examplePromise, {
      success: { title: 'Promise resolved', description: 'Looks great' },
      error: { title: 'Promise rejected', description: 'Something wrong' },
      loading: { title: 'Promise pending', description: 'Please wait' },
    });
  };

  return (
    <>
      <Stepper index={activeStep} orientation="vertical" minHeight="450px" gap="0">
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

      {/* Render the component for the active step */}
      <Box mt="4" textAlign="center">
        {renderStepComponent()}
      </Box>

      {/* Buttons to navigate through steps */}
      <Box mt="4" textAlign="center">
        <Button
          colorScheme="blue"
          onClick={handlePrev}
          disabled={activeStep === 0}
          mr="2"
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

export default DashboardSettings;
