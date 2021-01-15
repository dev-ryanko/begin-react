import React from 'react';

function Hello({color,name, isSpecial}) {
  const style = {
    backgroundColor:'back'
  }
  return (
      <div style={{color}}>
        {isSpecial && <b>*</b>}안녕! {name}
      </div>
  );
}

Hello.defaultProps = {
  name:'이름없음',
  color:'black'
}
export default Hello;
