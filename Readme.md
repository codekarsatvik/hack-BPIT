# NFT Based Warranty System

Warranty in our country is not regulated and thus faces regular frauds in reselling as fake products 

NFT based warranty system will be a reliable solution for providing transparency by showing actual number of resells and transfers .


## Setting Up Metamask Wallet 

Setup a [MetaMask](httpschrome.google.comwebstoredetailmetamasknkbihfbeogaeaoehlefnkodbefgpgknn) Wallet on your browser by Installing Extension

Or you can choose any wallet of your choice that support polygon TestNet 

## Import an Account to Wallet 

This project allows only admins to create NFT, So can either use our Metamask admin address to import or can create your own account and add that account to Config Files as Admin




```
Our Private Key to Import 48f92b5769fc113b75e05ff1b6ee9b71b507f8c72f40fe4f914f4a99fd847807

```

Now you can create NFT as admin


## Starting Project 

Folder Structure will contain Server and Client Folders.
Follow following Commands to run the project

```
cd client  To basically go to client folder ( Ignore if you are already in that directory)

# Initialise package.json file
npm init

# Install Dependencies
npm i 

#Try npm i --force if above command does not work

# Start Project
npm run start

```
Project will start running on localhost3000
## Creating a NFT

On the landing page you can go to Create E-Warranty and follow the following procedure to Create NFT

```
1) Add Receiver's Wallet Address to whom you are Issuing NFT
2) Upload Image of Physical Warranty or Product
3) Add Warranty Period and Product details
4) create E-Warranty
5) Allow Metamask to proceed with Transiction by clicking Approve

```
After Confirmation NFT will be minted to Respected Wallet Address

## Profile Section

Once a NFT is minted and issued , reciever can go to 
```  Localhost3000profile  ```
For having hisher alloted Nfts with required Details

## Claim Ownership

User can go to ``` owner``` section to check if heshe owns that TokenID of NFT or not

## Other features

Users can Transfer and Check Toeken History on Polygon Dashboard

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Built For HACKBPIT 2022 with 💖