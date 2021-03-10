import React, { useEffect } from 'react';

import Footer from '../footer/footer'
import Header from '../header/header'
import {useHistory} from 'react-router-dom';

const Maker = ({authService}) => {

  const history = useHistory();

  const onLogout = () =>{
    authService.logout()
  }
  
  useEffect(() => {
    authService.onAuthChange(user => {
      if(!user){
        history.push('/');
      }
    })
  })
  
  return(
    <section>
      <Header onLogout={onLogout}/>
      <Footer/>
      
    </section>
  )
}

export default Maker;