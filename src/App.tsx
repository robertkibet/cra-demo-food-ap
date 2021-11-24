import React from 'react';
import Layout from './Layout';
import Users from './Scenes/Users';
import { UsersProvider } from './Service/UsersContext';
import { getUsers, User } from './Utils/getUsers';

const App = function () {
  const [users, setUsers] = React.useState<User[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  React.useEffect(() => {
    const getAllUsers = async () => {
      setLoading(true);
      const response = await getUsers();
      setUsers(response);
      setLoading(false);
    };
    getAllUsers();
  }, []);
  return (
    <UsersProvider value={users}>
      <Layout>
        <Users loading={loading} />
      </Layout>
    </UsersProvider>
  );
};

export default App;
