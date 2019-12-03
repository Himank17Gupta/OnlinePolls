import React from 'react';
import VoteCard from './voteCard';
import { Container, GridList, GridListTile } from '@material-ui/core';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

class PollList extends React.Component{
  constructor(props){
   super(props);
    console.log(props.shouldrefresh);
    this.polls=[];
    this.state={pollArray:[],progress:true,shouldrefresh:props.shouldrefresh};
    this.prp=props;
    console.log(props);
    //this.userList=props.userList;
  }
componentWillMount(){
  axios.get('https://pollsmernrestapi.herokuapp.com/getUserIds').then(res=>{
    console.log(res.data);
    this.setState({...this.state,userList:res.data})}).catch(err=>console.log(err));
  
}
getAuthor(_id){
  let author='ghost';
  console.log(this.state.userList);
  this.state.userList.forEach(obj=>{if(obj._id==_id)author=obj.userid});
return author;
}
componentDidMount(){
  console.log('compdidmountcalled');
axios.post("https://pollsmernrestapi.herokuapp.com/getListofPolls",{}).then((res)=>{
  console.log(res);
  this.polls=res.data.filter(a=>a);
this.setState({...this.state,pollArray:this.polls,progress:false});
  //  console.log(state.pollArray)
console.log(this.state.pollArray);
}).catch(err=>console.log(err))


}


render(){
  //console.log(props.shouldrefresh);
  console.log(this.state.shouldrefresh);
  console.log(this.state.pollArray);
  //console.log(this.shouldupdate);
//if(this.shouldupdate==true){this.forceUpdate();}
  var columns;
  console.log(window.innerWidth);
if(window.innerWidth<1000&&window.innerWidth>500){columns=2}
if(window.innerWidth<500){columns=1}
else columns=3;
    return(
    <div>
       { this.state.progress?(<div>
        <LinearProgress  color="secondary" />
        </div>):(<></>)}
      
    
    <br/>

    <GridList cols={columns} spacing={25} >

{this.state.pollArray.map(poll => {
        return (
          <GridListTile key={poll._id} style={{height:'100%'}} >
            <VoteCard id={poll._id} poll={poll} getAuthor={this.getAuthor.bind(this)} props={this.prp} />
          </GridListTile>
        );
      })}

    </GridList>

    {/* {num.map(x=><VoteCard/>)}
    <VoteCard/> */}
    </div>);
}
}
export default PollList;
