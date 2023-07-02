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

const main = async () =>{
    await getWalletBalance()
}

main()

































































