import React,{useState} from 'react'
import Navbar from './Navbar';
function Transfer({transferNFT}) {

    const [toAddress , setToAddress ] = useState("");
    const [tokenId , setTokenId ] = useState("");

    const handleTransferNFT = () => {
        
        
        transferNFT(toAddress , tokenId);
    }

  return (
    <div>
        <Navbar/>
    
    <div style={{backgroundColor : "#3b4380" , height : "100vh" , display: "flex" , justifyContent: "center" }}>
       
        <div style={{width: "60vw" , display: "flex" , alignItems: "center" , flexDirection: "column" , marginTop : "200px"}}>    
            <div style={{color : "white" , fontSize : "30px" , fontWeight : "600"}} >Trasfer ownership of product</div>
                <input 
                    style={{marginTop :"50px", color : "white" , background: "transparent" , width: "90%" , height : "40px"  ,border: "none" , borderBottom : "2px solid grey", outline : "none",borderRadius : "8px" , paddingLeft : "10px"}} 
                    onChange={(e) => setToAddress(e.target.value)} value={toAddress} placeholder="Receiver's Address" type="text" />
                <br />
                <input 
                    style={{marginTop :"50px", color : "white" , background: "transparent" , width: "90%" , height : "40px"  ,border: "none" , borderBottom : "2px solid grey", outline : "none",borderRadius : "8px" , paddingLeft : "10px"}} 
                    onChange={(e) => setTokenId(e.target.value)} value={tokenId} placeholder="Token ID" type="text" />
                <br />
                <button 
                    style={{height : "45px" , width: "95%"  , backgroundColor : " #50b7f5" , border : "none" , color : "white" ,fontWeight : "700 " , borderRadius : "30px" ,cursor : "pointer"}}
                onClick={handleTransferNFT}>Trasfer ownership</button>
            </div>
        </div>
        </div>
                
  )
}

export default Transfer