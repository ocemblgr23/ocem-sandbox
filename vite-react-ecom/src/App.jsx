import { useEffect, useState } from 'react';
import { Camera } from 'lucide-react';
import Icon from './components/Icon';
import * as Prime from './config/PrimeConfig';
import LandingPage from './pages/LandingPage';
import Posts from './components/Posts';

function App() {
  const [query, setQuery] = useState('');
  const [users, setUsers] = useState([]);

  const usersUrl = 'https://jsonplaceholder.typicode.com/users';

  // Api call

  useEffect(() => {
    const fetchUsers = async () => {
      const resp = await fetch(usersUrl);
      const data = await resp.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  const handelChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      {/* Search and Filter */}
      <div className='container'>
        <div className='card py-3 flex align-items-center justify-content-center '>
          <span className=' p-float-label p-input-icon-right'>
            <i className='pi pi-spin pi-spinner' />
            <Prime.InputText
              onChange={handelChange}
              placeholder='Search user'
            />
          </span>
        </div>
        <div className='card'>
          <ul>
            {users
              .filter((user) =>
                query.toLowerCase() === ''
                  ? user
                  : user.name.toLowerCase().includes(query.toLowerCase())
              )
              .map((user, index) => {
                return <li key={index}>{user.name}</li>;
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
