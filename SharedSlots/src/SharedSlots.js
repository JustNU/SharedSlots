"use strict";

class SharedSlots
{
	static onLoadMod() 
	{
		const config = require("../config/config.json");
		
		const glasses = [
			"5b432be65acfc433000ed01f",
			"59e770b986f7742cbd762754",
			"5d5fca1ea4b93635fd598c07",
			"603409c80ca681766b6a0fb2",
			"5c1a1cc52e221602b3136e3d",
			"5aa2b923e5b5b000137b7589",
			"5e71f70186f77429ee09f183",
			"5c0d32fcd174af02a1659c75",
			"557ff21e4bdc2d89578b4586",
			"5aa2b986e5b5b00014028f4c",
			"5d6d2e22a4b9361bd5780d05",
			"5d6d2ef3a4b93618084f58bd",
			"5aa2b9aee5b5b00015693121"
		];
		
		const balaclavas = [
			"572b7f1624597762ae139822",
			"5ab8f39486f7745cd93a1cca",
			"5ab8f4ff86f77431c60d91ba",
			"5b432f3d5acfc4704b4a1dfb",
			"5b4325355acfc40019478126",
			"5ab8f85d86f7745cd93a1cf5",
			"5fd8d28367cb5e077335170f"
		];
		
		const lowerHalfmasks = [
			"572b7fa524597762b747ce82",
			"5e54f76986f7740366043752",
			"5e71fad086f77422443d4604"
		];
		
		const upperHalfmasks = [
			"5b4326435acfc433000ed01d",
			"5e71f6be86f77429f2683c44"
		];
		
		const fullHeadMasks = [
			"5bd06f5d86f77427101ad47c", 
			"5b432c305acfc40019478128", 
			"5bd0716d86f774171822ef4b"
		];
		
		for (const item in DatabaseServer.tables.templates.items) {
			
			// add glasses to facecover
			if (DatabaseServer.tables.templates.items[item]._parent === "5448e5724bdc2ddf718b4568") {
				DatabaseServer.tables.templates.items["55d7217a4bdc2d86028b456d"]._props.Slots[4]._props.filters[0].Filter.push(item)
				
				let ConflictingItems = JsonUtil.clone(DatabaseServer.tables.templates.items[item]._props.ConflictingItems);
				DatabaseServer.tables.templates.items[item]._props.ConflictingItems = [
					...ConflictingItems,
					...glasses
				];
			}
			
			// add facecover to glasses
			if (DatabaseServer.tables.templates.items[item]._parent === "5a341c4686f77469e155819e") {
				DatabaseServer.tables.templates.items["55d7217a4bdc2d86028b456d"]._props.Slots[13]._props.filters[0].Filter.push(item)
				
				DatabaseServer.tables.templates.items[item]._props.ConflictingItems.push(item)
			}
			
			// Now do it with armband slot
			if (config.UnlockArmbandSlot) {
				if (DatabaseServer.tables.templates.items[item]._parent === "5b3f15d486f77432d0509248") {
					DatabaseServer.tables.templates.items["55d7217a4bdc2d86028b456d"]._props.Slots[4]._props.filters[0].Filter.push(item)
					DatabaseServer.tables.templates.items["55d7217a4bdc2d86028b456d"]._props.Slots[13]._props.filters[0].Filter.push(item)
				};
				
				DatabaseServer.tables.templates.items["55d7217a4bdc2d86028b456d"]._props.Slots[14]._props.filters[0].Filter.push(
					"572b7f1624597762ae139822",
					"5ab8f39486f7745cd93a1cca",
					"5ab8f4ff86f77431c60d91ba",
					"5b432f3d5acfc4704b4a1dfb",
					"5b4325355acfc40019478126",
					"5ab8f85d86f7745cd93a1cf5",
					"5fd8d28367cb5e077335170f",
					"572b7fa524597762b747ce82",
					"5e54f76986f7740366043752",
					"5e71fad086f77422443d4604",
					"59e7715586f7742ee5789605",
					"5bd0716d86f774171822ef4b",
					"59e770b986f7742cbd762754",
					"557ff21e4bdc2d89578b4586"
				);
			}
		}
		
		// change conflicting items
		// Balaclava
		let ConflictingItems = JsonUtil.clone(DatabaseServer.tables.templates.items["572b7f1624597762ae139822"]._props.ConflictingItems);
		DatabaseServer.tables.templates.items["572b7f1624597762ae139822"]._props.ConflictingItems = [
			...ConflictingItems,
			...balaclavas,
			...lowerHalfmasks,
			...upperHalfmasks,
			...fullHeadMasks
		];
		DatabaseServer.tables.templates.items["572b7f1624597762ae139822"]._props.ConflictingItems.push(
			"5bd073a586f7747e6f135799", 
			"5c1a1e3f2e221602b66cc4c2", 
			"60363c0c92ec1c31037959f5", 
			"5bd071d786f7747e707b93a3"
		);
		
		// Cold Fear Balaclava
		ConflictingItems = JsonUtil.clone(DatabaseServer.tables.templates.items["5ab8f39486f7745cd93a1cca"]._props.ConflictingItems);
		DatabaseServer.tables.templates.items["5ab8f39486f7745cd93a1cca"]._props.ConflictingItems = [
			...ConflictingItems,
			...balaclavas,
			...fullHeadMasks
		];
		DatabaseServer.tables.templates.items["5ab8f39486f7745cd93a1cca"]._props.ConflictingItems.push(
			"5bd073a586f7747e6f135799", 
			"5c1a1e3f2e221602b66cc4c2"
		);
		
		// Ghost Balaclava
		ConflictingItems = JsonUtil.clone(DatabaseServer.tables.templates.items["5ab8f4ff86f77431c60d91ba"]._props.ConflictingItems);
		DatabaseServer.tables.templates.items["5ab8f4ff86f77431c60d91ba"]._props.ConflictingItems = [
			...ConflictingItems,
			...balaclavas,
			...lowerHalfmasks,
			...upperHalfmasks,
			...fullHeadMasks
		];
		DatabaseServer.tables.templates.items["5ab8f4ff86f77431c60d91ba"]._props.ConflictingItems.push(
			"5bd073a586f7747e6f135799", 
			"5c1a1e3f2e221602b66cc4c2"
		);
		
		// Momex Balaclava
		ConflictingItems = JsonUtil.clone(DatabaseServer.tables.templates.items["5b432f3d5acfc4704b4a1dfb"]._props.ConflictingItems);
		DatabaseServer.tables.templates.items["5b432f3d5acfc4704b4a1dfb"]._props.ConflictingItems = [
			...ConflictingItems,
			...balaclavas,
			...lowerHalfmasks,
			...upperHalfmasks,
			...fullHeadMasks
		];
		DatabaseServer.tables.templates.items["5b432f3d5acfc4704b4a1dfb"]._props.ConflictingItems.push(
			"5bd073a586f7747e6f135799", 
			"5c1a1e3f2e221602b66cc4c2", 
			"5bd071d786f7747e707b93a3"
		);
		
		// Shemagh Tan
		ConflictingItems = JsonUtil.clone(DatabaseServer.tables.templates.items["5b4325355acfc40019478126"]._props.ConflictingItems);
		DatabaseServer.tables.templates.items["5b4325355acfc40019478126"]._props.ConflictingItems = [
			...ConflictingItems,
			...balaclavas,
			...lowerHalfmasks,
			...upperHalfmasks,
			...fullHeadMasks
		];
		DatabaseServer.tables.templates.items["5b4325355acfc40019478126"]._props.ConflictingItems.push(
			"5bd073a586f7747e6f135799", 
			"5c1a1e3f2e221602b66cc4c2", 
			"5b432b6c5acfc4001a599bf0", 
			"60363c0c92ec1c31037959f5", 
			"5bd071d786f7747e707b93a3", 
			"5b432b2f5acfc4771e1c6622"
		);
		
		// Shemagh Green
		ConflictingItems = JsonUtil.clone(DatabaseServer.tables.templates.items["5ab8f85d86f7745cd93a1cf5"]._props.ConflictingItems);
		DatabaseServer.tables.templates.items["5ab8f85d86f7745cd93a1cf5"]._props.ConflictingItems = [
			...ConflictingItems,
			...balaclavas,
			...lowerHalfmasks,
			...upperHalfmasks,
			...fullHeadMasks
		];
		DatabaseServer.tables.templates.items["5ab8f85d86f7745cd93a1cf5"]._props.ConflictingItems.push(
			"5bd073a586f7747e6f135799", 
			"5c1a1e3f2e221602b66cc4c2", 
			"5b432b6c5acfc4001a599bf0", 
			"60363c0c92ec1c31037959f5", 
			"5bd071d786f7747e707b93a3", 
			"5b432b2f5acfc4771e1c6622"
		);
		
		// Smoke Balaclava
		ConflictingItems = JsonUtil.clone(DatabaseServer.tables.templates.items["5fd8d28367cb5e077335170f"]._props.ConflictingItems);
		DatabaseServer.tables.templates.items["5fd8d28367cb5e077335170f"]._props.ConflictingItems = [
			...ConflictingItems,
			...balaclavas,
			...lowerHalfmasks,
			...upperHalfmasks,
			...fullHeadMasks
		];
		DatabaseServer.tables.templates.items["5fd8d28367cb5e077335170f"]._props.ConflictingItems.push(
			"5bd073a586f7747e6f135799", 
			"5c1a1e3f2e221602b66cc4c2", 
			"5bd071d786f7747e707b93a3", 
			"5b432b2f5acfc4771e1c6622"
		);
		
		// Lower Half-Mask
		ConflictingItems = JsonUtil.clone(DatabaseServer.tables.templates.items["572b7fa524597762b747ce82"]._props.ConflictingItems);
		DatabaseServer.tables.templates.items["572b7fa524597762b747ce82"]._props.ConflictingItems = [
			...ConflictingItems,
			...lowerHalfmasks,
			...upperHalfmasks
		];
		DatabaseServer.tables.templates.items["572b7fa524597762b747ce82"]._props.ConflictingItems.push(
			"5bd073a586f7747e6f135799", 
			"5c1a1e3f2e221602b66cc4c2", 
			"5b432b2f5acfc4771e1c6622", 
			"5bd0716d86f774171822ef4b"
		);
		
		// Shroud Half-Mask
		ConflictingItems = JsonUtil.clone(DatabaseServer.tables.templates.items["5e54f76986f7740366043752"]._props.ConflictingItems);
		DatabaseServer.tables.templates.items["5e54f76986f7740366043752"]._props.ConflictingItems = [
			...ConflictingItems,
			...lowerHalfmasks,
			...upperHalfmasks
		];
		DatabaseServer.tables.templates.items["5e54f76986f7740366043752"]._props.ConflictingItems.push(
			"5bd073a586f7747e6f135799", 
			"5c1a1e3f2e221602b66cc4c2", 
			"5b432b6c5acfc4001a599bf0", 
			"5b432b2f5acfc4771e1c6622", 
			"5bd071d786f7747e707b93a3"
		);
		
		// Rivals Half-Mask
		ConflictingItems = JsonUtil.clone(DatabaseServer.tables.templates.items["5e71fad086f77422443d4604"]._props.ConflictingItems);
		DatabaseServer.tables.templates.items["5e71fad086f77422443d4604"]._props.ConflictingItems = [
			...ConflictingItems,
			...lowerHalfmasks,
			...upperHalfmasks
		];
		DatabaseServer.tables.templates.items["5e71fad086f77422443d4604"]._props.ConflictingItems.push(
			"5bd073a586f7747e6f135799", 
			"5c1a1e3f2e221602b66cc4c2", 
			"5b432b6c5acfc4001a599bf0", 
			"5b432b2f5acfc4771e1c6622", 
			"5bd071d786f7747e707b93a3"
		);
		
		// Mustache
		ConflictingItems = JsonUtil.clone(DatabaseServer.tables.templates.items["5bd073a586f7747e6f135799"]._props.ConflictingItems);
		DatabaseServer.tables.templates.items["5bd073a586f7747e6f135799"]._props.ConflictingItems = [
			...ConflictingItems,
			...upperHalfmasks
		];
		
		// Beard
		ConflictingItems = JsonUtil.clone(DatabaseServer.tables.templates.items["5c1a1e3f2e221602b66cc4c2"]._props.ConflictingItems);
		DatabaseServer.tables.templates.items["5c1a1e3f2e221602b66cc4c2"]._props.ConflictingItems = [
			...ConflictingItems,
			...upperHalfmasks
		];
		DatabaseServer.tables.templates.items["5c1a1e3f2e221602b66cc4c2"]._props.ConflictingItems.push(
			"5b432b2f5acfc4771e1c6622", 
			"60363c0c92ec1c31037959f5", 
			"5bd071d786f7747e707b93a3", 
			"5b432b6c5acfc4001a599bf0", 
			"60a7ad2a2198820d95707a2e", 
			"60a7ad3a0c5cb24b0134664a", 
			"5bd06f5d86f77427101ad47c", 
			"5b432c305acfc40019478128"
		);
		
		// Neoprene mask
		ConflictingItems = JsonUtil.clone(DatabaseServer.tables.templates.items["5b4326435acfc433000ed01d"]._props.ConflictingItems);
		DatabaseServer.tables.templates.items["5b4326435acfc433000ed01d"]._props.ConflictingItems = [
			...ConflictingItems,
			...upperHalfmasks,
			...fullHeadMasks
		];
		DatabaseServer.tables.templates.items["5b4326435acfc433000ed01d"]._props.ConflictingItems.push(
			"5b432b6c5acfc4001a599bf0", 
			"5bd071d786f7747e707b93a3", 
			"5b432b2f5acfc4771e1c6622", 
			"5b432c305acfc40019478128", 
			"5bd0716d86f774171822ef4b"
		);
		
		// Twitch Rivals Mask
		ConflictingItems = JsonUtil.clone(DatabaseServer.tables.templates.items["5e71f6be86f77429f2683c44"]._props.ConflictingItems);
		DatabaseServer.tables.templates.items["5e71f6be86f77429f2683c44"]._props.ConflictingItems = [
			...ConflictingItems,
			...upperHalfmasks,
			...fullHeadMasks
		];
		DatabaseServer.tables.templates.items["5e71f6be86f77429f2683c44"]._props.ConflictingItems.push(
			"5b432b6c5acfc4001a599bf0", 
			"5bd071d786f7747e707b93a3", 
			"5b432b2f5acfc4771e1c6622", 
			"5b432c305acfc40019478128", 
			"5bd0716d86f774171822ef4b"
		);
		
		// Respirator
		DatabaseServer.tables.templates.items["59e7715586f7742ee5789605"]._props.ConflictingItems.push(
			"60363c0c92ec1c31037959f5", 
			"60a7ad2a2198820d95707a2e", 
			"60a7ad3a0c5cb24b0134664a"
		);
		
		// Deadly Skull
		DatabaseServer.tables.templates.items["5b432b6c5acfc4001a599bf0"]._props.BlocksEyewear = false;
		DatabaseServer.tables.templates.items["5b432b6c5acfc4001a599bf0"]._props.BlocksFaceCover = false;
		DatabaseServer.tables.templates.items["5b432b6c5acfc4001a599bf0"]._props.ConflictingItems.push(
			"5bd071d786f7747e707b93a3", 
			"5b432c305acfc40019478128", 
			"5bd06f5d86f77427101ad47c", 
			"5aa2b923e5b5b000137b7589", 
			"5d6d2ef3a4b93618084f58bd", 
			"5aa2b9aee5b5b00015693121"
		);
		
		// GP-7
		DatabaseServer.tables.templates.items["60363c0c92ec1c31037959f5"]._props.BlocksEyewear = false;
		DatabaseServer.tables.templates.items["60363c0c92ec1c31037959f5"]._props.BlocksFaceCover = false;
		DatabaseServer.tables.templates.items["60363c0c92ec1c31037959f5"]._props.ConflictingItems.push(
			"5bd071d786f7747e707b93a3", 
			"5b432b2f5acfc4771e1c6622", 
			"60a7ad2a2198820d95707a2e", 
			"60a7ad3a0c5cb24b0134664a", 
			"5bd06f5d86f77427101ad47c", 
			"5b432be65acfc433000ed01f", 
			"59e770b986f7742cbd762754"
		);
		
		// Jason Mask
		DatabaseServer.tables.templates.items["5bd071d786f7747e707b93a3"]._props.ConflictingItems.push(
			"5e54f79686f7744022011103", 
			"5bd06f5d86f77427101ad47c"
		);
		
		// Shattered
		DatabaseServer.tables.templates.items["5b432b2f5acfc4771e1c6622"]._props.BlocksEyewear = false;
		DatabaseServer.tables.templates.items["5b432b2f5acfc4771e1c6622"]._props.BlocksFaceCover = false;
		DatabaseServer.tables.templates.items["5b432b2f5acfc4771e1c6622"]._props.ConflictingItems.push(
			"5e54f79686f7744022011103", 
			"60a7ad2a2198820d95707a2e", 
			"60a7ad3a0c5cb24b0134664a", 
			"5bd06f5d86f77427101ad47c", 
			"5b432c305acfc40019478128"
		);
		
		// Plague Mask
		DatabaseServer.tables.templates.items["5e54f79686f7744022011103"]._props.BlocksEyewear = false;
		DatabaseServer.tables.templates.items["5e54f79686f7744022011103"]._props.BlocksFaceCover = false;
		DatabaseServer.tables.templates.items["5e54f79686f7744022011103"]._props.ConflictingItems.push(
			"60a7ad2a2198820d95707a2e", 
			"60a7ad3a0c5cb24b0134664a", 
			"5bd06f5d86f77427101ad47c", 
			"5b432c305acfc40019478128"
		);
		
		// Weld Mask UBEY
		DatabaseServer.tables.templates.items["60a7ad2a2198820d95707a2e"]._props.BlocksEyewear = false;
		DatabaseServer.tables.templates.items["60a7ad2a2198820d95707a2e"]._props.BlocksFaceCover = false;
		DatabaseServer.tables.templates.items["60a7ad2a2198820d95707a2e"]._props.ConflictingItems.push(
			"60a7ad3a0c5cb24b0134664a", 
			"5b432c305acfc40019478128"
		);
		
		// Weld Mask Gorilla
		DatabaseServer.tables.templates.items["60a7ad3a0c5cb24b0134664a"]._props.BlocksEyewear = false;
		DatabaseServer.tables.templates.items["60a7ad3a0c5cb24b0134664a"]._props.BlocksFaceCover = false;
		DatabaseServer.tables.templates.items["60a7ad3a0c5cb24b0134664a"]._props.ConflictingItems.push("5b432c305acfc40019478128");
		
		// Slender Mask
		DatabaseServer.tables.templates.items["5bd06f5d86f77427101ad47c"]._props.ConflictingItems.push("5b432c305acfc40019478128");
		
		// GP-5
		DatabaseServer.tables.templates.items["5b432c305acfc40019478128"]._props.BlocksEyewear = false;
		DatabaseServer.tables.templates.items["5b432c305acfc40019478128"]._props.BlocksFaceCover = false;
		
		// Misha Mayorov
		DatabaseServer.tables.templates.items["5bd0716d86f774171822ef4b"]._props.BlocksEyewear = false;
		DatabaseServer.tables.templates.items["5bd0716d86f774171822ef4b"]._props.BlocksFaceCover = false;
	}
}
	
module.exports = SharedSlots;