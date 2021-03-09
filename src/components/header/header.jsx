import React from 'react';

const Header = ({onLogout}) => (
  <header>
    {onLogout && (<button onClick={onLogout}>Logout</button>)}
    <h1>Thumbnail Maker</h1>
  </header>
)


export default Header;