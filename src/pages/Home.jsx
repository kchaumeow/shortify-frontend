import { Box, Text, useToast } from "@chakra-ui/react";
import { postLink } from "../api/DbControll";
import { useState } from "react";
import Layout from "../components/Layout";
import ResultLink from "../components/ResultLink";
import InputLinkSection from "../components/InputLinkSection";
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
    <Layout gapBottom={hashedLink === ""}>
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
        <InputLinkSection
          handleButtonShortifyClick={handleButtonShortifyClick}
          handleInputLinkChange={handleInputLinkChange}
          inputLinkValue={link}
        />
        {hashedLink && (
          <ResultLink
            hashedLink={location.href + hashedLink}
            handleCopyClick={handleCopyClick}
          />
        )}
      </Box>
    </Layout>
  );
}
