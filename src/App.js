import React from'react';
import { BrowserRouter,Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import SignInCard from './components/Login';
import SignUpCard from './components/SignUp';
import Header from './components/header';
import UserDashBoard from './components/userDashboard';
import PollVote from './components/PollVote';
import ProgressBarPage from './components/dummyformdb';
import {connect}  from 'react-redux';
import Profile from './components/Profile';
//https://pollsmernrestapi.herokuapp.com

export default class App extends React.Component{
  constructor(props){
    super(props);
//console.log('app props are :',props);
  }
  render(){
  return(
  <BrowserRouter>
  {/* <Header/> */}
  <Container  maxWidth="xl"> 
  <Route path="/" exact component={SignInCard} />
  <Route path="/SignUp" component={SignUpCard} />
  <Route path="/user" component={UserDashBoard} />
  <Route path="/PollVote" component={PollVote} />
  <Route path='/Profile' component={Profile} />
  </Container>
  
  </BrowserRouter>
  )
}
}


 


