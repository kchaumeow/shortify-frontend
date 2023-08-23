import {
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Heading,
  useToast,
} from '@chakra-ui/react';

export default function ResultLink({hashedLink}) {
  const toast = useToast();
  const handleCopyClick = () => {
    navigator.clipboard.writeText(hashedLink);
    toast({
      title: 'You copied short-link!',
      description: "Short-link was copied and now it's ready to paste.",
      position: 'top-right',
      status: 'success',
      duration: 9000,
      isClosable: true,
    });
  };
  return (
    <>
      <Heading as="h2" size="md">
        Result
      </Heading>
      <InputGroup>
        <Input
          value={hashedLink}
          isReadOnly
          focusBorderColor="#E2E8F0"
          colorScheme="gray"
        />
        <InputRightElement width="5rem">
          <Button h="1.75rem" size="sm" onClick={handleCopyClick}>
            Copy
          </Button>
        </InputRightElement>
      </InputGroup>
    </>
  );
}
