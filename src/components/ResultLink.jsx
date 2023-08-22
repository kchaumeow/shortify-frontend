import {
  Input,
  InputGroup,
  InputRightElement,
  Text,
  Button,
} from "@chakra-ui/react";

export default function ResultLink({ hashedLink, handleCopyClick }) {
  return (
    <>
      <Text as="b" fontSize="18px" lineHeight="27px">
        Result
      </Text>
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
