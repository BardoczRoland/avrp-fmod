const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client();
bot.commands = new Discord.Collection();

bot.on("message", async message => {

  if (message.author.bot) return;
  if (message.content.indexOf(botconfig.prefix) !== 0) return;

  // Definálás
  const args = message.content.slice(botconfig.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  try {
    let commandFile = require(`./${command}.js`);
    commandFile.run(bot, message, args);
  } catch (err) {
  }

});

bot.on("message", message => {
    if (message.content === "f/Információ") {
      const embed = {
        "description": "Ez a(z) **AVRP Fórum Moderátorai** számára \nelkészített Applikáció használata egyszerű, érdemleges.",
        "url": "",
        "color": 1016572,
        "footer": {
          "icon_url": "",
          "text": "AVRP @ 2019 - Fórum Moderátori Csapat" 
        },
          "image": {
          "url": ""
        },
        "author": {
          "name": "Információ",
          "url": "",
          "icon_url": ""
        },
        "fields": [
    	   	{
    				"name": "Elkészült",
            "value": "2019 **/** 06 **/** 30 \n**'rxlvnd#6220** által."
    			},
              
        ]
      };
      message.delete().catch();
      message.channel.send({ embed });
    }
});

bot.on("message", message => {
	var authorid = message.author.tag;
	var kiiras = `Idézte: ${authorid}.`
  if (message.content === "f/Parancsok") {
    const embed = {
      "description": "Ez a(z) parancs a **Fórum Moderátor** csapatnak \nszánt infórmációkat írja ki.",
      "url": "",
      "color": 1016572,
      "footer": {
        "icon_url": "",
        "text": kiiras
      },
      "image": {
        "url": ""
      },
      "author": {
        "name": "f/Felhívás",
        "url": "",
        "icon_url": ""
      },
      "fields": [
  			{
  				"name": "f/Információ",
          "value": "Ez a(z) parancs körül ír pár fontosabb **információt**.",
  			},
  			{
  				"name": "f/Parancsok",
          "value": "Ez a(z) parancs kilistázza az **Applikáció** összes parancsát."
  			},
      ]
    };
    message.delete().catch();
    message.channel.send({ embed });
  }
});

bot.on ('message', message => {
    if (message.isMentioned(bot.user)) {
      var authorid = message.author.tag;
  	  var kiiras = `Idézte: ${authorid}.`
      const embed = {
          "description": "Ez a(z) parancs a **Fórum Moderátor** csapatnak \nszánt infórmációkat írja ki.",
          "url": "",
          "color": 1016572,
          "footer": {
          "icon_url": "",
          "text": kiiras
        },
        "image": {
          "url": ""
        },
        "author": {
          "name": "f/Felhívás",
          "url": "",
          "icon_url": ""
        },
        "fields": [
    			{
    				"name": "f/Információ",
            "value": "Ez a(z) parancs körül ír pár fontosabb **információt**.",
    			},
    			{
    				"name": "f/Parancsok",
            "value": "Ez a(z) parancs kilistázza az **Applikáció** összes parancsát."
    			},
        ]
      };
      message.channel.send({ embed });
    }
});

const activevar = [
    "Fórum Moderátorok Tevékenysége!",
    "Amennyiben kérdésed akadna, fordulj Daemonhoz!"
];

bot.on("ready", function() {
	var actID = 0;
    setInterval(function() {
        if (actID == 0){
	        bot.user.setActivity(activevar[0], {type: "WATCHING"});
	        actID = 1;
		}else if (actID == 1){
			bot.user.setActivity(activevar[1], {type: "WATCHING"});
			actID = 0;
		};
    }, 10000)
    console.log(`${bot.user.username} bot ${bot.guilds.size} szerveren online!`);
});

bot.login("NTk0OTA5Mjk4NjI3MzEzNzYy.XRjSgA.a1wCo72a4Vw2GCw6FCg5V4D2lNc");
