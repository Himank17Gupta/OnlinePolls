import React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



export default function VoteCard(){
var vote={title:"XYZ",options:['a','b','c','d']};

return (
    
      <Card title={vote.title}>
    <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {vote.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Description of Poll
          </Typography>
          <ul>
          {vote.options.map(option => (
            <li key={option}><Typography variant="body2" color="textSecondary" component="p">
            {option}
          </Typography></li>
          ))}
          
        </ul>
        <br/>
        <div className="vote-card__footer">
          <span>by </span> at {new Date().toLocaleString()}
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