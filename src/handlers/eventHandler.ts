const fs = require('fs');
const path = require('path');
module.exports = (client: any, Discord: any) =>{
console.log('Going into eventCollection.js');
    const loadEventDirs = (dirs:string) => {

        const eventFiles = fs.readdirSync(path.join(__dirname, `../events/${dirs}`)).filter((file: string) => file.endsWith('.js'));

        for(const file of eventFiles){

            const event = require(path.join(__dirname, `../events/${dirs}/${file}`));

            client.on(event.name, (...args: any) => event.execute(...args, client, Discord));      
            
        }

        console.log(`Done with collection for directory ${dirs}`);

    }

    ['client', 'guild'].forEach(e => loadEventDirs(e));

}