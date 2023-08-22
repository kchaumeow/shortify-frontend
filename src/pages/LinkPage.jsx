import { useLoaderData } from "react-router-dom";
import WaitingLinkComponent from "../components/WaitingLinkComponent";
import MissingLink from "../components/MissingLink";
import Layout from "../components/Layout";
export default function LinkPage() {
  const result = useLoaderData();
  if (result.error)
    return (
      <Layout>
        <MissingLink />
      </Layout>
    );
  return (
    <Layout>
      <WaitingLinkComponent />
    </Layout>
  );
}
