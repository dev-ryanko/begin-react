import React, { useRef, useState, useMemo, useCallback } from 'react'
import UserList from './UserList'
import CreateUser from "./CreateUser";

const conutActiveUsers= users => {
  console.log('활성사용자수 세는중....')
  return users.filter( user => user.active).length;
}
function App() {
  const [inputs, setInputs] = useState({
    username:'',
    email:''
  })
  const {username, email} = inputs
  const [users, setUsers] = useState([
    {
      id:1,
      username: 'dev-ko',
      email: 'dev-ko@dev.com',
      active:true
    },
    {
      id:2,
      username: 'dev-jo',
      email: 'dev-ko@dev.com',
      active:false
    },
    {
      id:3,
      username: 'dev-lo',
      email: 'dev-lo@dev.com',
      active:false
    }
  ]);

  const nextId = useRef(4)

  const onChange = useCallback(e => {
    const { name, value } = e.target
    setInputs({
      ...inputs,
      [name]:value
    })
  });

  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id));
  }

  const onCreate = () => {
    const user = {
      id : nextId.current,
      username,
      email
    }
    setUsers([...users, user]);
    setInputs({
      username:'',
      email:''
    })
    nextId.current +=1;
  }

  const onToggle = id => {
    setUsers(users.map(
      user => user.id === id
        ? {...user, active: !user.active }
        : user
    ))
  }

  const count = useMemo(() => conutActiveUsers(users), [users])

  return (
    <>
    <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
    <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
    <div>활성 사용자수 : {count}</div>
    </>
  )
}

export default App;
