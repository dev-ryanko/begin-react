import React from 'react';

const CreateUser = ({username, email, onChange, onCreate }) => {
  return (
    <div>
      <input name='username' placeholder="계정명" onChange={onChange} value={username} />
      <input name='email' placeholder="E-Mail" onChange={onChange} value={email} />
      <button onClick={onCreate}><b>등록</b></button>
    </div>
  );
}

export default CreateUser