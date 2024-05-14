import { getSession, useSession } from 'next-auth/react';
import { GetServerSideProps } from 'next';

const Protected: React.FC = () => {
  const { data: session, status } = useSession();

  if (status === 'loading') return <p>Loading...</p>;
  if (!session) return <p>Access Denied</p>;

  return (
    <div>
      <h1>Protected Page</h1>
      <p>Welcome, {session.user?.email}</p>
    </div>
  );
};

export default Protected;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
};
