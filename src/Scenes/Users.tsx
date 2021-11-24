import React from 'react';
import Card from '../Components/Card';
import Text from '../Components/Text';
import { UsersContext } from '../Service/UsersContext';
import { User } from '../Utils/getUsers';
import { ProfileUrl, UserBox } from './styles';

interface UsersComponentProps {
  loading: boolean;
}
const Users = function ({ loading }:UsersComponentProps) {
  const usersList = React.useContext(UsersContext);
  const formatAddress = (user: User) => `${user?.address?.city}, ${user?.address?.street}, ${user?.address?.suite}`;
  if (loading) {
    return <Text title="loading users..." />;
  }

  if (usersList?.length > 0) {
    return (
      <>
        {usersList?.map((user: User) => (
          <Card avatar={user?.name?.charAt(0)?.toUpperCase()}>
            <UserBox>
              <Text title={user.name} fontSize="14px" fontWeight="600" />
              <Text title={user.email} />
              <Text title={user.phone} />
              <Text title={formatAddress(user)} />
              <ProfileUrl href={user?.website} target="_blank" rel="noreferrer">
                {user?.website}
              </ProfileUrl>
            </UserBox>
          </Card>
        ))}
      </>
    );
  }

  return <Text title="no users available, checkin later" fontSize="16px" />;
};

export default Users;
