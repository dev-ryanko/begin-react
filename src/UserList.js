import React, {useEffect} from 'react';

const User = ({user, onRemove, onToggle}) => {
  const { username, email, id, active} = user;
  useEffect(() => {
    console.log('화면ㄲㄱ')
    return () => {
      console.log(user)
    }
  },[user])

  return (
    <div>
      <b onClick={() => onToggle(id)} style={{
        color: active ? 'green' : 'black',
        cursor: 'pointer'
      }}>
        {username}</b> <span>({email})</span>
      <button onClick={() => onRemove(id)}><b>삭제</b></button>
    </div>
  )
}


const UserList = ({users, onRemove, onToggle}) => {
  return (
    <div>
      {
        users.map(
          user => (<User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle}/>)
        )
      }
    </div>
  )
}

export default UserList