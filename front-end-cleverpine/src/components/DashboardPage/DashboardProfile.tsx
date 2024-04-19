import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Input,
  Stack,
  StackDivider,
} from "@chakra-ui/react";

const DashboardProfile = () => {
  return (
    <Flex justifyContent='center' alignItems='center'>
      <Card w="xl">
        <CardHeader>
          <Heading size="md">User Information</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4"></Stack>
          <Box>
            <Stack spacing={4}>
              <Input placeholder="Username" />
              <Input placeholder="First name" />
              <Input placeholder="Email" />
              <Input placeholder="Country" />
              <Input placeholder="City" />
              <Input type="file" accept="image/*" pt=".25rem" />
            </Stack>
          </Box>
        </CardBody>
      </Card>
    </Flex>
  );
};

export default DashboardProfile;
