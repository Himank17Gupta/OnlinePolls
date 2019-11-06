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
    fontSize: 16,
  },
  pos: {
    marginBottom: 12,
  },
});

export default class SignInCard extends React.Component {
  constructor(props){
    super(props);
    this.LoginObj={};
    this.state={'loader':false};
  }

  takeInput(event){
    var key=event.target.name;
    var value=event.target.value;
    this.LoginObj[key]=value;
  }
  handleSubmit(){
    console.log(this.LoginObj);
    if(this.LoginObj.UserId==this.LoginObj.Password){this.props.history.push({pathname:"/user",state:{user:this.LoginObj.UserId}})}
    this.setState({loader:'true'});
    document.getElementById('errmsg').innerText='Incorrect UserId or ReferenceId..Try Again';
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
          Sign In
        </Typography>
        <TextField
          required
          id="standard-required"
          name="UserId"
          label="User Id"
          placeholder="Enter User Id here"
          className={useStyles.textField}
          margin="normal"
          onChange={this.takeInput.bind(this)}
        />
        <br/>
        <TextField
          id="standard-password-input"
          label="Password"
          name="Password"
          className={useStyles.textField}
          type="password"
          onChange={this.takeInput.bind(this)}
          autoComplete="current-password"
          margin="normal"
        />
        <br/><br/>
        <label id='errmsg' style={{color:'#ed8ea1'}}></label>
      
        {  this.state.loader?(<div>
      <CircularProgress color="secondary" />
        </div>):(<></>)}

        <br/>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={this.handleSubmit.bind(this)}>Sign in</Button>
        <Button size="small" onClick={()=>{this.props.history.push({pathname:'/SignUp'})}}>register now</Button>
      </CardActions>
    </Card>
    </div>
    </Container>
    </>
  );
}
}