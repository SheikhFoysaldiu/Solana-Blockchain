const {Connection, PublicKey, clusterApiUrl,Keypair,LAMPORTS_PER_SOL} = require('@solana/web3.js');


// Create Wallet 

const wallet = new Keypair()

const publicKey = new PublicKey(wallet._keypair.publicKey)
const secretKey = wallet._keypair.secretKey

// console.log("Wallet Public Key: ", publicKey.toString())
// console.log("Wallet Secret Key: ", secretKey.toString())

const getWalletBalance = async () =>{
    try {
        const connection = new Connection(clusterApiUrl("devnet"),'confirmed')
        const balance = await connection.getBalance(publicKey)
        console.log(`Wallet Balance: ${balance} `)
        
    } catch (error) {
        
    }
}

const airDropSol = async () =>{ 
    try {

        //1 Sol = 1000000000 Lamports
        const connection = new Connection(clusterApiUrl("devnet"),'confirmed')  
        const signature = await connection.requestAirdrop(publicKey,2*LAMPORTS_PER_SOL)

        const latestBlockHash = await connection.getLatestBlockhash();

        console.log("latestBlockHash: ",latestBlockHash)
        console.log("Signature: ",signature)
        await connection.confirmTransaction({
            commitment: 'confirmed',
            signature,
            blockhash: latestBlockHash.blockhash,
            lastValidBlockHeight: latestBlockHash.lastValidBlockHeight
        })
       
        await getWalletBalance()
    } catch (error) {
        console.log(error)
    }
}

const main = async () =>{
    await getWalletBalance()
    await airDropSol()
}

main()

































































