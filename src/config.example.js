const config = {
	ownerID: ['522965553472864256'],
	token: 'Nzk4Mjk0NDIyMDU1Mjg4ODYy.X_y7nQ.s0ju4Qf4tFQ7o0QfhEK5n1lUxqo',
	botClient: '798294422055288862',
	// For looking up Twitch, Fortnite, Steam accounts
	api_keys: {
		// https://dev.twitch.tv/console/apps
		twitch: 'wxwsd54atuqlv3ep13qj4b0wietaqn',
		// https://fortnitetracker.com/site-api
		fortnite: 'fortniteAPI-Key',
		// https://api.ksoft.si/
		ksoft: 'eyJ0IjogImFwcCIsICJrIjogImtobWFjc2lnIiwgInBrIjogNTg0OCwgIm8iOiAiNTIyOTY1NTUzNDcyODY0MjU2IiwgImMiOiAxNzY2NTIyN30.7dbff6bc26b23967d5061d03ce33a776ebfa3d97bb24c8cf4649181683499fdf',
		// https://steamcommunity.com/dev
		steam: 'steamAPI-Key',
		// https://developer.spotify.com/documentation/web-api/
		spotify: {
			iD: '921b7500d86d48b0bf61890be04fcfa9',
			secret: '5cbe8aec626d4f978e28be042a225b3b',
		},
		// Your Ubisoft email and password (You don't need to enable anything)
		rainbow: {
			email: 'email',
			password: 'password',
		},
		// https://genius.com/developers
		genuis: 'gvrYMVGp9hA09_uX1fJF40NS_8Rc1wBkLO5HvfRvcB8BmwkjVObLN0NL3jW8GIG1',
		// https://amethyste.moe/en
		amethyste: 'amethysteAPI-Key',
	},
	// IF you want any commands/plugins disabled
	disabledCommands: [],
	disabledPlugins: [],
	// This is a list of websites that the bot is on. API to interect with server/shard count
	DiscordBotLists: {
		// https://discord.boats/
		DiscordBoatAPI_Key: '',
		// https://arcane-center.xyz/
		ArcaneBotAPI_KEY: '',
		// https://botlist.space/
		botlist_spaceAPI_KEY: '',
	},
	websiteURL: 'Bot\'s dashboard',
	// your support server
	SupportServer: {
		// Link to your support server
		link: 'https://discord.gg/2fQJfUTVSg',
		// Your support's server ID
		GuildID: '721654305358086215',
		// This for using the suggestion command on your server
		ModRole: '805938537614147584',
		// What channel to post the suggestions
		SuggestionChannel: '721791372637765642',
		// Where the bot will send Guild join/leave messages to
		GuildChannel: '721654305358086219',
	},
	// This is just so some commands can be ran in DM channels
	defaultSettings: {
		// default settings
		prefix: 'e!',
		Language: 'en-US',
	},
	// Custom emojis, just for cosmetic (change these if you wish)
	emojis: {
		cross: ':negative_squared_cross_mark:',
		tick: ':white_check_mark:',
	},
	// URL to mongodb
	MongoDBURl: 'mongodb+srv://bot:5540@bot.3482r.mongodb.net/Bot?retryWrites=true&w=majority',
	// if you want debugging turned on or not
	debug: false,
};

module.exports = config;
