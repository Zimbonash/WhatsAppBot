// const cli = require('nodemon/lib/cli');
const qrcode = require('qrcode-terminal')
const { Client, LocalAuth} = require('whatsapp-web.js');

const client = new Client({
    authStrategy: new LocalAuth()
});

client.initialize()

client.on('qr', (qr)=>{
    qrcode.generate(qr, {small: true})
    console.log('started server')
})

client.on('ready', ()=>{
    console.log("Client is ready!")
})

let customerName=''
let firstReply = 0
client.on('message', message=>{
   
        while (firstReply === 0){
            client.sendMessage(message.from, `Hello, I'm Customer Service Bot.
            May I please know your name?`)
            firstReply += 1  
            }
})

let secondReply =0
client.on('message',  message=>{
  
    if(secondReply === 0){
        while(secondReply === 0){
        client.sendMessage(message.from, `Ok ${customerName}. Kindly select one of the following options that applies to you
        A: sales & billing 
        B: technical helpdesk
        `)
            secondReply += 1
        }
    }
    return customerName = message.body
})

let thirdReply =0

client.on('message',  message=>{  
    if(thirdReply === 0){
        while(thirdReply === 0){
        if(message.body === 'A' | 'a' | ' A: Option1' | 'option1'){
        client.sendMessage(message.from, `Ok ${newUserFullname}. Kindly select one of the following  options that applies to you
        1: Sales
        2: billing 
        `)
            thirdReply += 1
        }
    }
    }
})

let forthReply =0
client.on('message',  message=>{
    if(forthReply === 0){
        while(forthReply === 0){
        if(message.body === '2' | '2: billing '){
        client.sendMessage(message.from, `Ok ${newUserFullname}.
        1: Network
        2: Other
        `)
            forthReply += 1
        }
    }
    }
})


