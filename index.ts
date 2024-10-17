import * as IRC from 'irc-framework';

const bot = new IRC.Client();
bot.connect({
	host: 'irc.freenode.net',
	port: 6667,
	nick: 'anynickname'
})

bot.on('socket close', (event: any) => {
	console.log('Socket closed.', event);
});

bot.on('reconnecting', (event: any) => {
        console.log('Reconnecting to the server...', event);
});
