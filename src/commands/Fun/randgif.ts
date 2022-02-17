require('dotenv').config();

module.exports ={
    name: 'randgif',
    description: 'Displays a random query gif from Tenor.',
    usage: '`b!randgif <query>`',
    cooldown: 0,
    execute(message){
        console.log("Going into randgif.js")

        const query = message.content.slice(10);

        if(!query) return message.reply('I need something to search for!');
        
        Tenor.Search.Random(query, '1').then(Results =>{
            Results.forEach(Post => {

                const randGifEmbed = new MessageEmbed()
                    .setColor('RANDOM')
                    .setDescription(`Random gif for "${query}"`)
                    .setImage(Post.media[0].gif.url)

                message.reply({ embeds: [randGifEmbed] });
            })
        })
    }
}