import {useLoaderData} from 'react-router-dom';
import WaitingLinkComponent from '../components/WaitingLinkComponent';
import MissingLink from '../components/MissingLink';
import Layout from '../components/Layout';
export default function LinkPage() {
  const result = useLoaderData();
  return (
    <>
      {result.error ? (
        <Layout>
          <MissingLink />
        </Layout>
      ) : (
        <Layout>
          <WaitingLinkComponent />
        </Layout>
      )}
    </>
  );
}
