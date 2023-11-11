import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import User from '../components/User';

const Profile = async () => {
  const session = await getServerSession();
  if (!session || !session.user) {
    redirect('/');
  }

  return (
    <>
      <User />
    </>
  );
};

export default Profile;
