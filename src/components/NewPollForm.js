import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Container } from '@material-ui/core';
import axios from 'axios';
const useStyles = makeStyles({
  card: {
    minWidth: 450,
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

export default class NewPoll extends React.Component {
  constructor(props){
    super(props);
    console.log(props);
    this.fxn=props.refreshpolls;
    //props.refreshpolls();
    this.optionobj={option1:'',option2:'',option3:'',option4:''};
    this.PollObj={user_Id:props._id,question:"",description:"",options:[],created_on:''};
    this.state={'loader':false};
  }

  takeInput(event){
    var key=event.target.name;
    var value=event.target.value;
    if(key=="question"||key=="description")
    this.PollObj[key]=value;
    else{
      this.optionobj[key]=value;
    }
  }
  handleCreate(){
    this.PollObj.options=Object.values(this.optionobj);
    this.PollObj.created_on=Date.now();
    console.log(this.PollObj);
    this.setState({loader:'true'});
    
    axios.post("https://pollsmernrestapi.herokuapp.com/createPoll",this.PollObj).then(res=>{
      this.setState({'loader':false});
      console.log(res);
  if(res.data==="Invalid User Credentials"){
  document.getElementById('errmsg3').innerText=res.data;
  }
  else{
    document.getElementById('errmsg3').innerText='Poll Added';
    alert(res.data);
    this.fxn();
    //props.refreshpolls();
  }
    }).catch(err=>{
      alert("something went wrong");
      console.log(err)});
  }



render(){
  return (
    <>
    <Container maxWidth='md'>
    <div style={{textAlign: "center"}}>
    
    <Card className={useStyles.card} >
      <CardContent>
        <TextField
          required
          id="standard-required"
          name="question"
          label="Question?"
          placeholder="enter Question here.."
          className={useStyles.textField}
          margin="normal"
          onChange={this.takeInput.bind(this)}
        />
        <br/>
        <TextField
          id="standard-required"
          label="Description of the Poll"
          name="description"
          className={useStyles.textField}
          onChange={this.takeInput.bind(this)}
          autoComplete="current-password"
          margin="normal"
        />
        <br/>
        <TextField
          id="standard-required"
          label="Option 1"
          name="option1"
          className={useStyles.textField}
          onChange={this.takeInput.bind(this)}
          autoComplete="current-password"
          margin="normal"
        />
        <br/>
        <TextField
          id="standard-required"
          label="Option 2"
          name="option2"
          className={useStyles.textField}
          onChange={this.takeInput.bind(this)}
          autoComplete="current-password"
          margin="normal"
        />
        <br/>
        <TextField
          id="standard-required"
          label="Option 3"
          name="option3"
          className={useStyles.textField}
          onChange={this.takeInput.bind(this)}
          autoComplete="current-password"
          margin="normal"
        />
        <br/>
        <TextField
          id="standard-required"
          label="Option 4"
          name="option4"
          className={useStyles.textField}
          onChange={this.takeInput.bind(this)}
          autoComplete="current-password"
          margin="normal"
        />
        <br/>
        <label id='errmsg3' style={{color:'#ed8ea1'}}></label>
      
        {  this.state.loader?(<div>
      <CircularProgress color="secondary" />
        </div>):(<></>)}

        <br/>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={this.handleCreate.bind(this)}>Create New </Button>
        <Button size="small" onClick={(()=>{this.props.closeDialog()})}>Skip</Button>
      </CardActions>
    </Card>
    </div>
    </Container>
    </>
  );
}
}