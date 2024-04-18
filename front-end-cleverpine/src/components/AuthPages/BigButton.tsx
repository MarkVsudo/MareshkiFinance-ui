import {
  Button,
} from "@chakra-ui/react";

interface BigButtonProps {
  title: string
  bgcolor: string
  variant: string
  onHandleSubmit: () => void
}

export const BigButton = ({ title, bgcolor , variant, onHandleSubmit}: BigButtonProps) => {
    return (
        <Button colorScheme={bgcolor} width="100%" onClick={onHandleSubmit} variant={variant}>{title}</Button>
    )
}
