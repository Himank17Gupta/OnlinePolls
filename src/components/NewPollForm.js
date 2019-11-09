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

export default class NewPoll extends React.Component {
  constructor(props){
    super(props);
    this.PollObj={Question:"",Description:"",Options:[],Date:''};
    this.state={'loader':false};
  }

  takeInput(event){
    var key=event.target.name;
    var value=event.target.value;
    if(key=="Question"||key=="Description")
    this.PollObj[key]=value;
    else{
      this.PollObj.Options[key]=value;
    }
  }
  handleCreate(){
    this.PollObj.Date=Date.now();
    console.log(this.PollObj);
   
    this.setState({loader:'true'});
    
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
          name="Question"
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
          name="Description"
          className={useStyles.textField}
          onChange={this.takeInput.bind(this)}
          autoComplete="current-password"
          margin="normal"
        />
        <br/>
        <TextField
          id="standard-required"
          label="Option 1"
          name="Option1"
          className={useStyles.textField}
          onChange={this.takeInput.bind(this)}
          autoComplete="current-password"
          margin="normal"
        />
        <br/>
        <TextField
          id="standard-required"
          label="Option 2"
          name="Option2"
          className={useStyles.textField}
          onChange={this.takeInput.bind(this)}
          autoComplete="current-password"
          margin="normal"
        />
        <br/>
        <TextField
          id="standard-required"
          label="Option 3"
          name="Option3"
          className={useStyles.textField}
          onChange={this.takeInput.bind(this)}
          autoComplete="current-password"
          margin="normal"
        />
        <br/>
        <TextField
          id="standard-required"
          label="Option 4"
          name="Option4"
          className={useStyles.textField}
          onChange={this.takeInput.bind(this)}
          autoComplete="current-password"
          margin="normal"
        />
        <br/>
        <label id='errmsg' style={{color:'#ed8ea1'}}></label>
      
        {  this.state.loader?(<div>
      <CircularProgress color="secondary" />
        </div>):(<></>)}

        <br/>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={this.handleCreate.bind(this)}>Create New </Button>
        <Button size="small" onClick={(()=>{console.log('skip')})}>Skip</Button>
      </CardActions>
    </Card>
    </div>
    </Container>
    </>
  );
}
}