class Mod
{
    constructor()
    {
		Logger.info("Loading: Shared Slots");
		
		ModLoader.onLoad["SharedSlots"] = require("./src/SharedSlots.js").onLoadMod;
    }
}

module.exports.Mod = new Mod();