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
        ///this.his=props.history;
        if(props.location.state==undefined){ 
            this.userid='unsigneduser';
            this._id='unsigneduser';
        }else{
        this.userid=props.location.state.user||'unsigneduser';
        this._id=props.location.state.user_id||'unsigneduser';
        }
        this.state={reloadlist:false,signOut:false};
    }
    signOut(){
        console.log('signout called');
        this.setState({...this.state,signOut:true});

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
    
         if(this.userid=='unsigneduser'){alert('login to continue');
         this.props.history.push({pathname:'/'});
        };
        if(this.state.signOut==true){
           window.confirm('Are you sure you want SignOut?')?this.props.history.push({pathname:'/'}):console.log('SO cancelled');
        }
         console.log(this.state.reloadlist);
    return(
    <Container maxWidth='lg'>
    <div>
        <UserHeader user={ this.userid} signOut={this.signOut.bind(this)} />
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