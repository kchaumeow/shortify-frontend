import {Center, Spinner, Text} from '@chakra-ui/react';
export default function WaitingLinkComponent() {
  return (
    <>
      <Center>
        <Text as="b" fontSize="30px">
          Redirecting...
        </Text>
      </Center>
      <Center>
        <Spinner size="xl" />
      </Center>
    </>
  );
}
