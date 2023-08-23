import {Card} from '@chakra-ui/react';
export default function Layout({children, gapBottom = false}) {
  console.log(gapBottom);
  return (
    <Card
      textAlign="center"
      p="5"
      maxWidth={480}
      width="100%"
      gap="5"
      style={{transform: gapBottom ? `translateY(-15px)` : ``}}
    >
      {children}
    </Card>
  );
}
