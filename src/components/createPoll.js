import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle'
import NewPoll from './NewPollForm';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
});

export default function CreatePoll(props) {
 // const classes = useStyles();
 console.log(props);
 const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
    <Card className={useStyles.card} onClick={handleClickOpen.bind(this)}>
      <CardActionArea>
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Create New Poll
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Enter upto four options to select from.. 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="h4">
            by creating, your poll will be visible to all the visitors and logged in memebers can cast vote only once. 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={handleClickOpen.bind(this)}>
          Create
        </Button>
      </CardActions>
    </Card>
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title"  >
        <DialogTitle id="form-dialog-title">Create New Poll</DialogTitle>
        <DialogContent>
         <NewPoll userid={props.userid} _id={props._id} openDialog={handleClickOpen.bind(this)} closeDialog={handleClose.bind(this)} />
        </DialogContent>
        {/* <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions> */}
      </Dialog>
  </>
  );
}
