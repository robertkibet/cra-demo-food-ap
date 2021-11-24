import axios from 'axios';
// api in use, credits: https://rapidapi.com/shashwath-KR/api/fake-users7/

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: {
    street: string;
    suite: string;
    city: string;
  };
  website: string;
}
export const getUsers = async (): Promise<Array<User>> => new Promise((resolve, reject) => {
    axios
      .request({
        method: 'GET',
        url: 'https://fake-users7.p.rapidapi.com/users',
        headers: {
          'x-rapidapi-host': 'fake-users7.p.rapidapi.com', // ideally this would be in a env file
          'x-rapidapi-key': '7db10e227cmsh92a30f51bb63de4p106d42jsnc361699220b6', // ideally this would be in a env file
        },
      })
      .then((response) => {
        const users = response?.data?.users;
        if (users?.length > 0) {
          const cleanedUsersObj = users?.map((user: User) => ({
            id: user?.id,
            name: user?.name,
            email: user?.email,
            phone: user?.phone,
            address: user?.address,
            website: user?.website,
          }));
          resolve(cleanedUsersObj);
        } else {
          resolve([]);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
