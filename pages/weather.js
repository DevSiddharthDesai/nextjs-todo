import Head from 'next/head';
import { useState } from 'react';
import Header from '@/components/Header/Header';
import { connect } from 'react-redux';
import { setUser } from '@/store/main/main.action';

const weather = (props) => {

  const {userInfo, setUser} = props;
  const [name, setName] = useState('');
  
  return (
    <div className='container'>
      <Head>
        <title>The Weather</title>
      </Head>
      <Header />
      <h1>Hey {userInfo.name}</h1>
      <input 
      name="name" 
      value={name} 
      onChange={(e) => setName(e.target.value)} 
      />
      <button onClick={() => setUser(name)}>Add User</button> 
    </div>
  )
}

const mapStateToProps = state => ({
  userInfo: state.user
});

const mapDispatchToProps = {
  setUser: setUser
}

export default connect(mapStateToProps, mapDispatchToProps)(weather);