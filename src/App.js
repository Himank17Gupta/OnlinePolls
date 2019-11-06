import React from'react';
import { BrowserRouter,Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import SignInCard from './components/Login';
import SignUpCard from './components/SignUp';
import Header from './components/header';
import UserDashBoard from './components/userDashboard';


var App=()=>{

  return(
  <BrowserRouter>
  {/* <Header/> */}
  <Container  maxWidth="lg"> 
  <Route path="/" exact component={SignInCard} />
  <Route path="/SignUp" component={SignUpCard} />
  <Route path="/user" component={UserDashBoard} />
  </Container>
  </BrowserRouter>
  )
}
export default App;




 


