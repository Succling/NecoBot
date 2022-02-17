require('dotenv').config()

module.exports ={
    name: 'necogif',
    description: 'Displays a random Neco-Arc related gif from Tenor.',
    usage: '`b!necogif`',
    cooldown: 0,
    execute(message){
        console.log('Going into necogif.js');

        Tenor.Search.Random('neco arc', '1').then(Results =>{
            Results.forEach(Post => {
                message.channel.send(Post.itemurl);
            })
        })
    }
}