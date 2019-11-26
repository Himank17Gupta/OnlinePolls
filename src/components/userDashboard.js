import React,{useState} from 'react';
import CreatePoll from './createPoll';
import PollList from './pollList';
import { Container } from '@material-ui/core';
import UserHeader from './userHeader';
import { BrowserRouter,Route,Switch,Redirect } from 'react-router-dom';
class UserDashBoard extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
        this.userid=props.location.state.user;
        this._id=props.location.state.user_id;
    }
    
  //  console.log(props);
   // var userid=props.location.state.user;
   // var _id=props.location.state.user_id;
   // var [reloadlist,shouldReload]=useState(false);
     refresh=()=>{
    //    console.log(reloadlist);
      //  shouldReload(reloadlist=!reloadlist);
        //console.log(reloadlist);
    console.log('refresh called');
     }
     render(){
    return(
    <Container maxWidth='md'>
    <div>
        <UserHeader user={ this.userid}/>
        <br/>
    <CreatePoll refresh={this.refresh.bind(this)} userid={this.userid} _id={this._id} ></CreatePoll>
    <br/>
    <PollList 
    //shouldrefresh={reloadlist}
     props={this.props}  />
    </div>
    </Container>
    );
}
}
export default UserDashBoard;