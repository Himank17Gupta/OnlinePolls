import React,{useState} from 'react'
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
import { Doughnut } from 'react-chartjs-2';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));


export default function VoteCard(props){
// var vote={title:"XYZ",options:['a','b','c','d'],date:1573722717633};
console.log(props.poll.Options);
console.log(props.props.props.location.state);
var user=props.props.props.location.state;
var [Tile,ChangeTile]=useState('poll');
var l=[];
var d=[];
props.poll.Options.forEach(obj=>{l.push(obj.option);d.push(obj.votes)});

console.log(l,d);
var data = {
	labels: l,
	datasets: [{
		data: d,
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
    '#FFCE56',
    '#fcf2fc'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
    '#FFCE56',
    '#fcf2fc'
		]
	}]
};


return (
    
      <Card title={props.poll.author} onClick={()=>{console.log('votecard clicked',props);
     // props.props.props.history.push({pathname:'/PollVote',
     // state:{poll:props.poll,user:user}})
     if(Tile=='poll'){ ChangeTile(Tile='Chart');}
     else { ChangeTile(Tile='poll');}
    }} >
    <CardActionArea>
      {Tile=='poll' ? (
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
     <List component="nav" 
     //aria-label="main mailbox folders"
     >
       {props.poll.Options.map(option=>(
<ListItem key={option._id} button>        
<ListItemText primary={option.option} />
</ListItem>

       ))}
   
  </List>
  <Divider />
    <br/>
    <div className="vote-card__footer">
      <span>by{props.poll.author} </span> at {props.poll.created_on.toString()}
      
      {/* {new Date().toLocaleString()} */}
      </div>
       </CardContent>
      ) : (
        <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
        {props.poll.Question}?
      </Typography>
        <Doughnut data={data} />
        </CardContent>
      )}
      {/* here commenting*/}

      {/* here commenting ends*/}
       
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={()=>{console.log('votecard clicked',props);
      props.props.props.history.push({pathname:'/PollVote',
      state:{poll:props.poll,user:user}})}}>
          Vote
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
// {/* <Typography gutterBottom variant="h5" component="h2">
// {/* {vote.title} */}
// {props.poll.Question}?
// </Typography>
// <Typography variant="body2" color="textSecondary" component="p">
// {/* Description of Poll */}
// {props.poll.Description}
// </Typography>
// <Divider /> */}

/* <ul>
{props.poll.Options.map(option => (
<li key={option._id}><Typography variant="body2" color="textSecondary" component="p">
{option.option}
</Typography></li>
))}
</ul> */
/* <List component="nav" 
//aria-label="main mailbox folders"
>
{props.poll.Options.map(option=>(
<ListItem key={option._id} button>        
<ListItemText primary={option.option} />
</ListItem>

))}
{/* <ListItem button>
<ListItemText primary="Drafts" />
</ListItem> */
//}
