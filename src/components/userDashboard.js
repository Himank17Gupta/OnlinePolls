import React,{useState} from 'react';
import CreatePoll from './createPoll';
import PollList from './pollList';
import { Container } from '@material-ui/core';
import UserHeader from './userHeader';
import { BrowserRouter,Route,Switch,Redirect } from 'react-router-dom';
import Axios from 'axios';
import { options } from '../models/config';
class UserDashBoard extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
        if(props.location.state==undefined){ 
            this.userid='unsigneduser';
            this._id='unsigneduser';
        }else{
        this.userid=props.location.state.user||'unsigneduser';
        this._id=props.location.state.user_id||'unsigneduser';
        
        }
        this.state={reloadlist:false,signOut:false};
    }
//   componentWillMount(){
//     //Axios.defaults.headers.common['token'] = localStorage.getItem('token');
//      // Axios.get('https://pollsmernrestapi.herokuapp.com/getUserIds',
//       Axios.get('localhost:2002/getUserIds',
//       {
//         headers: {
//             'token': localStorage.getItem('token'),
//             'Accept' : 'application/json',
//             'Content-Type': 'application/json'
//         }
//     }).then(res=>{console.log(res.data);this.setState({...this.state,userList:res.data})}).catch(err=>console.log(err));
//     }  
    signOut(){
        console.log('signout called');
       var Fo=false; 
       // this.setState({...this.state,signOut:true});
       Fo= window.confirm('Are you sure you want SignOut?')?true:false;
      if(Fo){
          localStorage.setItem('loggedIn',false);
          this.props.history.push({pathname:'/'})
        }  
      else{
          console.log('SO cancelled');
          }
    }
  //  console.log(props);
   // var userid=props.location.state.user;
   // var _id=props.location.state.user_id;
   // var [reloadlist,shouldReload]=useState(false);
    refresh=()=>{
    console.log('refresh called');
    this.userid='unsigneduser';
    this._id='unsigneduser';
    this.setState({...this.state,reloadlist:true});
     }

render(){
   // console.log('cs', localStorage.getItem('loggedIn'));
         if(this.userid=='unsigneduser'||localStorage.getItem('loggedIn')=="false"){alert('Please Sign In First to Continue to Polls');
         this.props.history.push({pathname:'/'});
        };
       // if(this.state.signOut==true){
        // }
         console.log(this.state.reloadlist);
    return(
    <Container maxWidth='lg'>
    <div>
        <UserHeader props={this.props} user={ this.userid} signOut={this.signOut.bind(this)} />
        <br/>
    <CreatePoll refresh={this.refresh.bind(this)} userid={this.userid} _id={this._id} ></CreatePoll>
    <br/>
    <PollList shouldrefresh={this.state.reloadlist}
     props={this.props}  />
    </div>
    </Container>
    );
}
}
export default UserDashBoard;