import React from 'react';
import Layout from './Layout';
import Users from './Scenes/Users';
import { UsersProvider } from './Service/UsersContext';
import { getUsers, User } from './Utils/getUsers';

const App = function () {
  const [users, setUsers] = React.useState<User[]>([]);
  React.useEffect(() => {
    const getAllUsers = async () => {
      const response = await getUsers();
      setUsers(response);
    };
    getAllUsers();
  }, []);
  return (
    <UsersProvider value={users}>
      <Layout>
        <Users />
      </Layout>
    </UsersProvider>
  );
};

export default App;
