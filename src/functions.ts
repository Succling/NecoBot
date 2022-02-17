module.exports = {

    async checkDBProfileExists(discordUserID:number){

        let discordUserDBProfile = await profileModel.findOne( {userID: discordUserID} );

        if(!discordUserDBProfile){
            var profile = await profileModel.create({
                userID: discordUserID,
                level: 1,
                experience: 0,
                necoCoins: 1000,
            });

            discordUserDBProfile = profile;
            profile.save();
        };
        
        return discordUserDBProfile;
    }, 
}