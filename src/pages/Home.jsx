import {
  Box,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { postLink } from "../api/DbControll";
import { useState } from "react";
export default function Home() {
  const [hashedLink, setHashedLink] = useState("");
  const [link, setLink] = useState("");
  const handleClick = () => { // TODO: создать ф-цию для копирования текста
    navigator.clipboard.writeText(location.href + hashedLink);
  };
  function handleInputChange(e) {
    setLink(e.target.value);
  }
  async function handleButtonClick(e) {
    e.preventDefault();
    setHashedLink((await postLink({ link: link })).hashedLink);
  }
  return (
    <>
      <Text as="b" fontSize="36px">
        Short your link
      </Text>
      <Box
        maxW="lg"
        borderRadius="lg"
        display="flex"
        alignItems="center"
        flexDirection="column"
        justifyContent="stretch"
        gap="3"
      >
        <form className="form" onSubmit={(e) => handleButtonClick(e)}>
          <Input
            type="url"
            placeholder="Pass your link here"
            onChange={handleInputChange}
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
                <Button h="1.75rem" size="sm" onClick={handleClick}>
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
