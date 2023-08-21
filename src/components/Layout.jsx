import { Card } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
export default function Layout() {
  return (
    <Card textAlign="center" p="5" maxWidth={480} width="100%" gap="5">
      <Outlet />
    </Card>
  );
}
