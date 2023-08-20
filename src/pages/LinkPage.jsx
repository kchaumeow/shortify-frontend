import { useLoaderData } from "react-router-dom";
import WaitingLinkComponent from "../components/WaitingLinkComponent";
import MissingLink from "../components/MissingLink";
export default function LinkPage() {
  const result = useLoaderData();
  if (result.error) return <MissingLink />;
  return <WaitingLinkComponent />;
}
