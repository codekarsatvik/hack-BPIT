

import React,{useState} from 'react'

function Navbar({Navbar}) {

 

  return (
    <div className='' style={{height: "70px" , backgroundColor : "#50b7f5" , width: "100%"}}>
            <div class="navbar" style={{display:"flex", width: "100%",height: "50px", backgroundColor: "#50b7f5" , top: "0", bottom :"10", alignItems:"center", justifyContent:"flex-end", position:"fixed"}}>
                <div>
                <a href="/" style={{marginRight: "20px",fontWeight:"bold", textDecoration:"none", fontfamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif"}}>HackBPIT</a>
                </div>
                    <div class="navbar-container" style ={{display: "flex" , alignItems : "center" , padding: "0 20px", height: "100%", color: "#000000", fontfamily: "Sen, sans-serif"}}>
                        {/* <img src="/img/home.png"></img> */}
                        
                        <a href="/profile" style={{marginRight: "20px",fontWeight:"bold", textDecoration:"none", fontfamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif"}}>Profile</a>
                        <a href="/owner" style={{marginRight: "20px",fontWeight:"bold", textDecoration:"none",fontfamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif"}}>Owner</a>
                        <a href="/transfer" style={{marginRight: "20px",fontWeight:"bold", textDecoration:"none",fontfamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif"}}>Transfer</a>
                        <a href="/tokenhistory" style={{marginRight: "20px",fontWeight:"bold", textDecoration:"none",fontfamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif"}}>Token History</a>                    
                    </div>
                </div>
            </div>
                
  )
}

export default Navbar