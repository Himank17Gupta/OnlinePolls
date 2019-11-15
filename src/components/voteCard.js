import React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter,Route } from 'react-router-dom';


export default function VoteCard(props){
var vote={title:"XYZ",options:['a','b','c','d'],date:1573722717633};
console.log(props);
console.log(props.props.props.location.state);
var user=props.props.props.location.state;
return (
    
      <Card title={vote.title} onClick={()=>{console.log('votecard clicked',props.id);props.props.props.history.push({pathname:'/PollVote',state:{poll:props.id,user:user}})}} >
    <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {/* {vote.title} */}
            {props.poll.Question} ?
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {/* Description of Poll */}
            {props.poll.Description} .
          </Typography>
          <ul>
          {/* {vote.options.map(option => (
            <li key={option}><Typography variant="body2" color="textSecondary" component="p">
            {option}
          </Typography></li>
          ))} */}
          {props.poll.Options.map(option => (
            <li key={option._id}><Typography variant="body2" color="textSecondary" component="p">
            {option.option}
          </Typography></li>
          ))} 


        </ul>
        <br/>
        <div className="vote-card__footer">
          <span>by{props.poll.author} </span> at {props.poll.created_on.toString()}
          
          {/* {new Date().toLocaleString()} */}
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          #vote
        </Button>
      </CardActions>
      </Card>
  )
          }