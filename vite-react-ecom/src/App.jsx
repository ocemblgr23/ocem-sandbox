import { useEffect, useState } from 'react';
import { Camera } from 'lucide-react';
import Icon from './components/Icon';
import * as Prime from './config/PrimeConfig';
import LandingPage from './pages/LandingPage';
import Posts from './components/Posts';
import { useQuery } from 'react-query';
import axios from 'axios';
const usersUrl = 'https://jsonplaceholder.typicode.com/users';

const fetchGithubUsers = async () => {
  const response = await axios.get(usersUrl);
  return response.data;
};

function App() {
  const [query, setQuery] = useState('');
  // const [users, setUsers] = useState([]);

  const {
    data: users,
    error,
    isLoading,
  } = useQuery('usersInfo', fetchGithubUsers);

  // Api call

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     const resp = await fetch(usersUrl);
  //     const data = await resp.json();
  //     setUsers(data);
  //   };

  //   fetchUsers();
  // }, []);

  if (isLoading)
    return (
      <div className='flex align-items-center justify-content-center py-4 '>
        <Prime.ProgressSpinner />
      </div>
    );
  if (error)
    return (
      <div className='text-center py-4'>
        <p className='m-0'>An error occurred: {error.message}</p>
      </div>
    );

  const handelChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      {/* Search and Filter */}
      <div className='container'>
        <div className='card py-3 flex align-items-center w-full '>
          <span className=' p-float-label w-full p-input-icon-right'>
            <i className='pi pi-spin pi-spinner' />
            <Prime.InputText
              className='w-full'
              onChange={handelChange}
              placeholder='Search user'
            />
          </span>
        </div>
        <div className='card flex align-items-center justify-content-center '>
          <ul>
            {users &&
              users
                .filter((user) =>
                  query.toLowerCase() === ''
                    ? user
                    : user.name.toLowerCase().includes(query.toLowerCase())
                )
                .map((user, index) => {
                  return (
                    <li key={index}>
                      <div className='card'>
                        <h1>{user.name}</h1>
                        <p>Email: {user.email}</p>
                        <p>Phone: {user.phone}</p>
                      </div>
                    </li>
                  );
                })}
          </ul>
        </div>
      </div>

      <Prime.Divider />
      <Posts />
      <LandingPage />
      {/* <div className='container'>
        <div className='card flex gap-4 p-4 justify-content-center'>
          <h1>Hello World App</h1>
          <Prime.Button label='Check' icon='pi pi-check' />
          <Camera color='red' size={48} />;
          <Icon name={'Home'} size={48} color={'green'} />
        </div>
      </div> */}
    </>
  );
}

export default App;
