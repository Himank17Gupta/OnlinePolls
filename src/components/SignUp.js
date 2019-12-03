import React from'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Container } from '@material-ui/core';
import Header from './header';
import axios from 'axios';
 
const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 18,
  },
  pos: {
    marginBottom: 12,
  },
});

export default class SignUpCard extends React.Component {
  constructor(props){
    super(props);
    this.SignUpObj={};
    this.state={'loader':false};
  }

  takeInput(event){
    var key=event.target.name;
    var value=event.target.value;
    this.SignUpObj[key]=value;
  }
  handleSubmit(){
    console.log(this.SignUpObj);
    this.setState({loader:'true'});
    axios.post("https://pollsmernrestapi.herokuapp.com/signup",this.SignUpObj).then(res=>{
      this.setState({'loader':false});
      console.log(res);
  if(res.data==="Error during adding user"){
  document.getElementById('errmsg2').innerText="Couldn't add user...Try Again with correct details" ;
  }
  else{
    document.getElementById('errmsg2').innerText="User Added...Sign In to continue" ;
  }
    }).catch(err=>{
      alert("something went wrong");
      console.log(err)});
    

  //  document.getElementById('errmsg').innerText='Incorrect UserId or ReferenceId..Try Again';
  }
render(){
  return (
    <>
    <Header/>
    <Container maxWidth='sm'>
    <div style={{textAlign: "center"}}>
      <p></p>
    <br/>
    <br/>
    <br/>
    
    <Card className={useStyles.card} >
      <CardContent>
        <Typography className={useStyles.title} color="inherit" >
        <br/>
          Sign Up
        </Typography>
        <TextField
          required
          id="standard-required"
          name="userid"
          label="Name"
          placeholder="Enter Name here"
          className={useStyles.textField}
          margin="normal"
          onChange={this.takeInput.bind(this)}
        />
        <br/>
        <TextField
          required
          id="standard-required"
          name="email"
          label="Email"
          placeholder="Enter Email Id here"
          className={useStyles.textField}
          margin="normal"
          onChange={this.takeInput.bind(this)}
        />
        <br/>
        <TextField
          required
          id="standard-required"
          name="contact"
          label="Contact No."
          placeholder="Enter your Contact No."
          className={useStyles.textField}
          margin="normal"
          onChange={this.takeInput.bind(this)}
        />
        <br/>
        <TextField
          id="standard-password-input"
          label="Set your Password"
          name="password"
          className={useStyles.textField}
          type="password"
          onChange={this.takeInput.bind(this)}
          autoComplete="current-password"
          margin="normal"
        />
        <br/><br/>
        <label id='errmsg2' style={{color:'#ed8ea1'}}></label>
      
        {  this.state.loader?(<div>
      <CircularProgress color="secondary" />
        </div>):(<></>)}

        <br/>
      </CardContent>

      <CardActions>
        <Button size="small" onClick={this.handleSubmit.bind(this)}>Sign Up</Button>
        <Button size="small" onClick={()=>{this.props.history.push({pathname:'/'})}}>Sign In</Button>
      </CardActions>
    </Card>
    </div>
    </Container>
    
    </>
  );
}
}