import React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter,Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));


export default function VoteCard(props){
var vote={title:"XYZ",options:['a','b','c','d'],date:1573722717633};
console.log(props);
console.log(props.props.props.location.state);
var user=props.props.props.location.state;

function onVotesucc(obj){
console.log('obj to parent ',obj);
}

return (
    
      <Card title={vote.title} onClick={()=>{console.log('votecard clicked',props);
      props.props.props.history.push({pathname:'/PollVote',
      state:{poll:props.poll,user:user}})}} >
    <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {/* {vote.title} */}
            {props.poll.Question}?
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {/* Description of Poll */}
            {props.poll.Description}
          </Typography>
          <Divider />
         
          {/* <ul>
          {props.poll.Options.map(option => (
            <li key={option._id}><Typography variant="body2" color="textSecondary" component="p">
            {option.option}
          </Typography></li>
          ))}
        </ul> */}
         <List component="nav" 
         //aria-label="main mailbox folders"
         >
           {props.poll.Options.map(option=>(
 <ListItem key={option._id} button>        
 <ListItemText primary={option.option} />
</ListItem>

           ))}
        {/* <ListItem button>
          <ListItemText primary="Drafts" />
        </ListItem> */}
      </List>
      <Divider />
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





// export default function SimpleList() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <List component="nav" aria-label="main mailbox folders">
//         <ListItem button>
//           <ListItemIcon>
//             <InboxIcon />
//           </ListItemIcon>
//           <ListItemText primary="Inbox" />
//         </ListItem>
//         <ListItem button>
//           <ListItemIcon>
//             <DraftsIcon />
//           </ListItemIcon>
//           <ListItemText primary="Drafts" />
//         </ListItem>
//       </List>
//       <Divider />
//       <List component="nav" aria-label="secondary mailbox folders">
//         <ListItem button>
//           <ListItemText primary="Trash" />
//         </ListItem>
        
//       </List>
//     </div>
//   );
// }
