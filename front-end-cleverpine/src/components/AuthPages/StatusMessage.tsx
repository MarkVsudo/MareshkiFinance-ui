import { Alert, AlertIcon } from '@chakra-ui/react';

interface StatusMessageProps {
  text: string;
  status?: 'info' | 'warning' | 'success' | 'error' | 'loading';
}

const StatusMessage = ({
  text,
  status = 'error', 
}: StatusMessageProps) => {
  return (
    <Alert status={status} my="1rem">
      <AlertIcon />
      {text}
    </Alert>
  );
};

export default StatusMessage;
