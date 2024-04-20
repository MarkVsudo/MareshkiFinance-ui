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
    { title: "Enter receiver's bank credentials", description: "First Step", component:  TransferReceiver},
    { title: "Enter your bank credentials", description: "Second Step", component:  TransferSender},
    { title: "Finalize transaction", description: "Final Step" },
  ];

  const DashboardSettings = () => {
    const { activeStep, goToNext, goToPrevious } = useSteps({
      index: 0, 
      count: steps.length,
    });
    const toast = useToast();

    const handleNext = () => {
      if (activeStep === steps.length - 1) {
        showFinalToast();
      } else {
        goToNext();
      }
    };

    const handlePrev = () => {
      goToPrevious();
    };

    const renderStepComponent = () => {
      const StepComponent = steps[activeStep].component; 
      return StepComponent ? <StepComponent /> : null; 
    };

    const showFinalToast = () => {
      const examplePromise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(200), 2000);
      });

      toast.promise(examplePromise, {
        success: { title: 'Promise resolved', description: 'Looks great' },
        error: { title: 'Promise rejected', description: 'Something wrong' },
        loading: { title: 'Promise pending', description: 'Please wait' },
      });
    };

    return (
      <>
      <Flex gap='5rem' flexDirection='column'>
        <Stepper index={activeStep} orientation="horizontal" w='100%' gap="0">
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
        <Flex textAlign="center" justifyContent='center' alignItems='center'>
          {renderStepComponent()}
        </Flex>

      </Flex>

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
