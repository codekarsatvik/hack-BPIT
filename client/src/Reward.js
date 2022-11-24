import { Button } from "@material-ui/core";
import React,{useState} from "react";
import {create } from "ipfs-http-client";
// const ipfs = window.IpfsHttpClient();
import { Buffer } from "buffer";
import Navbar from "./Navbar";

const auth =
    'Basic ' + Buffer.from('2HwL4q1E5byYftu9Mb4cNBzOppp' + ':' + '80cde466138574d506a24e5fa9604b81').toString('base64');
const client = create({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
    headers: {
        authorization: auth,
    },
});

const Reward = ({mintNFT}) => {

    const [nftImage, setNftImage] = useState("");
     const hiddenUploadImage = React.useRef(null);
     const [address , setAddress ] = useState("");
     const [nftName , setNFTName ] = useState("");
     const [nftDiscription  , setNFTDiscription  ] = useState("");
     const [nftWarrantyPeriod , setNFTWarrantyPeriod ] = useState("");
     const [nftMetaData , setNFTMetaData] = useState("");

     const addNFT = async () => {
        let address_ = address;
    
        try {
            let temp = {
                name : nftName,
                image : nftImage,
                description : nftDiscription,
                warrentyPeriod : nftWarrantyPeriod
            }
            let jsonObj = JSON.stringify(temp);
            console.log(jsonObj);
            let added = await client.add(jsonObj)
            console.log(added);
            const CID = require('cids')
            let url = new CID(added.path).toV1().toString('base32')
            console.log(url)
            url = 'https://' + url + '.ipfs.dweb.link'
            setNFTMetaData(url)
            await mintNFT(address_,url);
        } catch(error) {
          console.log("Error submitting new NFT", error);
        }
      }

     const uploadNFT = (e) => {
        e.preventDefault();
    
        addNFT();
        setNftImage("");
      };

      const postImageChange = async(e)=> {
        const file = e.target.files[0]
        try {
          const added = await client.add(file)
          console.log(added)
        //   const url = `https://ipfs.infura.io:5001/${added.path}`
        //   console.log(url);

          const CID = require('cids')
          let url = new CID(added.path).toV1().toString('base32')
          console.log(url)
          url = 'https://' + url + '.ipfs.dweb.link'
          console.log(url)
          setNftImage(url)
        } catch (error) {
          console.log('Error uploading file: ', error)
        }  
      }

      const handleUploadImage = (e) => {
        e.preventDefault();
        hiddenUploadImage.current.click();
      }

    return (
        <div className="" style={{  backgroundColor : "#0A0B1E" }}>
            <Navbar/>
            <div className="" style={{display : "flex" , flexDirection : "row" , justifyContent : "space-between" , padding: "70px 10vw 0 10vw"}}>
                <div style={{color : "white" , width: "50%"}}>
                   <div style={{fontSize : "55px" , color : "lightgray"}}>
                        Provide warranty as in form of <span style={{color : "#50b7f5"}}>NFT.</span>
                   </div>
                   <div style={{color : "gray" , fontSize : "20px"}}>
                        To increase transparency and originality of e-warranty this platform provide e-warranty as in form of NFT that will stores on IPFS which is decentralised way of storage.
                   </div>
                   <div style={{marginTop : "40px"}}>
                        <a style={{textDecoration : "none"}} href="#uploadcertificate"><Button style={{padding : "13px", fontWeight : "500", color : "white" , borderRadius : "30px" , backgroundColor: "#50b7f5" , textTransform : "capitalize"}} > Create e-warranty </Button> </a>
                   </div>
                </div>
                <div style={{width : "50%" , marginLeft : "100px"}}>
                    <div className="" style={{width: "350px" ,padding : "10px" , height : "400px" , backgroundColor : "#3b4380"  , borderRadius : "15px" , marginLeft : "30px"}}>
                        <div style={{height: "250px" }} >
                            <img style={{height: "100%" , width : "100%"   , borderRadius : "15px"}} src="https://hackbpit.devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2F1ab61e28cf354325b144b43efe3a281c%2Fassets%2Fcover%2F833.png&w=1440&q=100" alt="" />
                        </div>
                        <div style={{display : "flex " , flexDirection : "row" , justifyContent : "start" , margin: "10px"}}>
                            <div style={{height : "55px" , width: "55px" , borderRadius : "50%" , backgroundColor : "#24294f" , marginRight  : "20px"}}>

                            </div>
                            <div>
                                <div style={{color : "white" , fontSize : "25px" , fontWeight : "500"}}>
                                    HackBPIT 2022
                                </div>
                                <div style={{color  :"gray"}}>
                                    /Authentic Coders/
                                </div>
                            </div>
                        </div>
                        

                    </div>
                </div>
            </div>

            <div id="uploadcertificate" style={{paddingBottom: "100px" , width: "50%" , marginLeft : "25%" , marginTop : "200px" , display : "flex" , alignItems : "center" , flexDirection : "column"}}>
                <div style={{color : "white" , fontSize : "30px" , fontWeight : "600"}} >Provide e-warranty to customer</div>
                <input 
                    style={{marginTop :"50px", color : "white" , background: "transparent" , width: "90%" , height : "40px"  ,border: "none" , borderBottom : "2px solid grey", outline : "none",borderRadius : "8px" , paddingLeft : "10px"}} 
                    onChange={(e) => setAddress(e.target.value)} value={address} placeholder="Customer's wallet address" type="text" />
                <br />
                <button 
                    style={{height : "45px" , width: "95%"  , backgroundColor : " #50b7f5" , border : "none" , color : "white" ,fontWeight : "700 " , borderRadius : "30px" , cursor : "pointer"}}
                    onClick={handleUploadImage} >Select Image</button>
                <input type="file" ref={hiddenUploadImage} onChange={postImageChange} style={{display : "none"}} />
                <br />
                {nftImage ? 
                    <img src={nftImage} alt="nftImage" style={{width : "500px" , marginLeft : "5%" , height: "auto" , marginBottom : "20px"}} /> :
                    ""
                }
                <input 
                    style={{marginTop :"50px", color : "white" , background: "transparent" , width: "90%" , height : "40px"  ,border: "none" , borderBottom : "2px solid grey", outline : "none",borderRadius : "8px" , paddingLeft : "10px"}} 
                    onChange={(e) => setNFTName(e.target.value)} value={nftName} placeholder="Name of product" type="text" />
                <br />
                <input 
                    style={{marginTop :"50px", color : "white" , background: "transparent" , width: "90%" , height : "40px"  ,border: "none" , borderBottom : "2px solid grey", outline : "none",borderRadius : "8px" , paddingLeft : "10px"}} 
                    onChange={(e) => setNFTDiscription(e.target.value)} value={nftDiscription} placeholder="Product Description" type="text" />
                <br />
                <input 
                    style={{marginTop :"50px", color : "white" , background: "transparent" , width: "90%" , height : "40px"  ,border: "none" , borderBottom : "2px solid grey", outline : "none",borderRadius : "8px" , paddingLeft : "10px"}} 
                    onChange={(e) => setNFTWarrantyPeriod(e.target.value)} value={nftWarrantyPeriod} placeholder="WarrantyPeriod" type="text" />
                <br />
                <button 
                    style={{height : "45px" , width: "95%"  , backgroundColor : " #50b7f5" , border : "none" , color : "white" ,fontWeight : "700 " , borderRadius : "30px" ,cursor : "pointer"}}
                onClick={uploadNFT}>Create e-warranty</button>
            </div>

        </div>
    )
}

export default Reward;