import React, {
  useEffect,
  useState,
} from 'react'

import './App.css';

interface User {
  name: string;
  login: string;
  company: string;
  location: string;
  bio: string;
  public_repos: number;
  avatar_url: string;
}

const App: React.FC = () => {
  const [user, setUser] = useState<User>();

  async function loadData() {
    const response = await fetch('https://api.github.com/users/0xrfsd');
    const data = await response.json();
    console.log(data);
    setUser(data);
  }

  useEffect(() => {
    loadData();
  }, [])

  return (
    <div className="App">
      <img src={user?.avatar_url} className="image" alt="profile" />
      <div className="body">
      <div className="a">
      {user?.login}
      </div>
      <div className="a">
      {user?.company}
      </div>
      <div className="a">
      {user?.location}
      </div>
      <div className="a">
      {user?.bio}
      </div>
      </div>
    </div>
  )
}

export default App;