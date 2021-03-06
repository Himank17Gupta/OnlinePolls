import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import linked from '../Linked.png';
import twitter from '../twitter.png';
import github from '../gmail.png';
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="https://onlinepolls.herokuapp.com">
        www.OnlinePolls.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '32vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    paddingBottom:'16px',
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[800] : theme.palette.grey[200],
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primary,
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[800] : theme.palette.grey[200],
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <CssBaseline />
   <footer className={classes.footer}>
    
      <Grid container spacing={3}>
        
        <Grid item xs={6}>
          <div style={{textAlign:"center"}}>
            {/* <h2 style={{margin:'0px'}} >About</h2> */}
            Use this App for generating polls by multiple logged in users,
             do surveys, share it with friends and much more..
             <br/>
             <Copyright/>
            </div>
        </Grid>
        
        <Grid item xs={3}>
         
        </Grid>
        <Grid item xs={3}>
          
            <h2 style={{margin:'0px'}}>Contact Developer</h2>
            <br/>
            
            <Link href="https://www.linkedin.com/in/himank-gupta-b37873192/"> <img src={linked} /></Link>
            &nbsp;&nbsp; 
            <Link href="https://github.com/Himank17Gupta"> <img src={github} /></Link>
            &nbsp;&nbsp;
            <Link href="https://twitter.com/HimanK17Gupta"> <img src={twitter} /></Link>
            &nbsp;&nbsp;
          
        </Grid>
        
      </Grid>
      </footer>
    </div>
  );
}
//       <CssBaseline />
//       <footer className={classes.footer}>
//         <Container maxWidth="sm">
//           <Typography variant="body1">Contact Developers at below links</Typography>
//           <Copyright />
//         </Container>
//       </footer>
//     </div>
//   );
// }