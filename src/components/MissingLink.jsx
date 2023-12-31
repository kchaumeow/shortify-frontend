import {Button, Heading, Text} from '@chakra-ui/react';
import {Link} from 'react-router-dom';

export default function MissingLink() {
  return (
    <>
      <Heading as="h2" size="lg">
        Oops!
      </Heading>
      <Text fontSize="16px">
        That page does not exists! May be there is some typo in the hash.
      </Text>
      <Button as={Link} to="/" colorScheme="teal">
        Open main page
      </Button>
    </>
  );
}
