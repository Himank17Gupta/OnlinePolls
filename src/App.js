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
//https://pollsmernrestapi.herokuapp.com

export default class App extends React.Component{
  constructor(props){
    super(props);
console.log('app props are :',props);
  }
  render(){
  return(
  <BrowserRouter>
  {/* <Header/> */}
  <Container  maxWidth="lg"> 
  <Route path="/" exact component={SignInCard} />
  <Route path="/SignUp" component={SignUpCard} />
  <Route path="/user" component={UserDashBoard} />
  <Route path="/PollVote" component={PollVote} />
  </Container>
  
  </BrowserRouter>
  )
}
}
//export default App;

// const mapStateToProps = (state)=>{
//      return {
//          state : state              //changed from count:state.length
//      };
//  }
//  var fn=connect(mapStateToProps);
//  export default fn(App);


 


