import {
  Box,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useToast,
} from "@chakra-ui/react";
import { postLink } from "../api/DbControll";
import { useState } from "react";
export default function Home() {
  const [hashedLink, setHashedLink] = useState("");
  const [link, setLink] = useState("");
  const toast = useToast();
  const handleCopyClick = () => {
    navigator.clipboard.writeText(location.href + hashedLink);
    toast({
      title: "You copied short-link!",
      description: "Short-link was copied and now it's ready to paste.",
      position: "top-right",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };
  function handleInputLinkChange(e) {
    setLink(e.target.value);
  }
  async function handleButtonShortifyClick(e) {
    e.preventDefault();
    try {
      setHashedLink((await postLink({ link: link })).hashedLink);
    } catch (err) {
      if (err instanceof TypeError) {
        toast({
          title: "Server error",
          description: "There is some error on server. Please try again later.",
          position: "top-right",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    }
  }
  return (
    <>
      <Text as="b" fontSize="36px">
        Short your link
      </Text>
      <Box
        maxW="lg"
        display="flex"
        alignItems="center"
        flexDirection="column"
        gap="3"
      >
        <form className="form" onSubmit={(e) => handleButtonShortifyClick(e)}>
          <Input
            type="url"
            placeholder="Pass your link here"
            onChange={handleInputLinkChange}
            size="lg"
            required
          />
          <Button
            isDisabled={link === ""}
            className="shortify_button"
            colorScheme="teal"
            type="submit"
          >
            Shortify
          </Button>
        </form>
        {hashedLink && (
          <>
            <Text as="b" fontSize="18px">
              Result
            </Text>
            <InputGroup>
              <Input
                value={location.href + hashedLink}
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
        )}
      </Box>
    </>
  );
}
