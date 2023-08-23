import {Button, Input} from '@chakra-ui/react';

export default function InputLinkSection({
  handleButtonShortifyClick,
  handleInputLinkChange,
  inputLinkValue,
}) {
  return (
    <form className="form" onSubmit={handleButtonShortifyClick}>
      <Input
        type="url"
        placeholder="Pass your link here"
        onChange={handleInputLinkChange}
        size="lg"
        required
      />
      <Button
        isDisabled={inputLinkValue === ''}
        className="shortify_button"
        colorScheme="teal"
        type="submit"
      >
        Shortify
      </Button>
    </form>
  );
}
