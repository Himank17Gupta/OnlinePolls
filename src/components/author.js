import React,{useEffect,useState} from 'react';
import axios from 'axios';
export default function Author(props){
 var [author,getauthor]=useState(props._id);

useEffect(()=>{
    console.log('useEffect called');
//axios.post("https://pollsmernrestapi.herokuapp.com/getAuthor",{u_id:props.id}).then(res=>{

//getauthor(author=res.data);
//}).catch(err=>console.log(err))
});

return (<>{author} beta</>)

}