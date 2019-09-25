import React from "react";
import "./profileimage.scss"

function image (props){
   return(
       <>
   {props.type === "icon"? (
       <img src = {props.image} alt= "profile" className = "icon"/>
   ):
   (props.type === "profileCard" )?(
       <img src = {props.image} alt = "profile" className = "profileCard"/>
   ):
   (props.type === "sideBarIcon")?(
       <img src = {props.image} alt = "profile" className = "sideBarIcon"/>
   ):(
       <img src = {props.image} alt = "profile"/>
   )

   }
   </>
   )
}

export default image