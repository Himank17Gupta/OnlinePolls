import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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
            <h2 style={{margin:'0px'}} >About</h2>
            Sole Purpose of this Web App is to generate polls
            <br/>by multiple logged in users and to act upon them..<br/>
            Use this App for creating polls, do surveys, share it with friends and much more..
            </div>
        </Grid>
        
        <Grid item xs={3}>
         
        </Grid>
        <Grid item xs={3}>
          
            <h2 style={{margin:'0px'}}>Contact Developer</h2>
            <li/>
            <li/>
          
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