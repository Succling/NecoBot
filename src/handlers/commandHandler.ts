module.exports = (client) =>{
 
    console.log('Going into commandCollection');

    const loadCommandDirs = (dirs:string) =>{ 

        const commandFiles = fs.readdirSync(path.join(__dirname, `../commands/${dirs}`)).filter((file: string) => file.endsWith('.js'));

        for(const file of commandFiles){
            const command = require(path.join(__dirname, `../commands/${dirs}/${file}`)); 

            if(command.name){
                client.commands.set(command.name, command);
            }
            
        } 
    }
    
    ['admin', 'economy', 'fun', 'utility'].forEach(e => loadCommandDirs(e));
}