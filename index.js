const axios = require('axios').default;

function time(unixtime) {
    const u = new Date(unixtime * 1000);
    return u.toISOString().replace('T', ' ').replace('Z', '');
}

function formatObject(data) {
    return {
        title: data.title,
		text: data.selftext,
		flairText: data.link_flair_text,
        author: data.author,
		subreddit: `r/${data.subreddit}`,
		url: data.url,
		permalink: `http://reddit.com${data.permalink}`,
        created: time(parseInt(data.created, 10)),
        created_utc: time(parseInt(data.created_utc, 10)),
        nsfw: data.over_18,
    };
}

async function reddit(subreddit) {
    axios({
        method: "get",
        url: `https://www.reddit.com/r/${subreddit}.json?sort=new&t=day&limit=30`,
    }).then(function (resp) {
		return new Promise((resolve, reject) => {
			let body = resp.data.data;
			let data = body.children;
			const rand = Math.floor(Math.random() * Math.floor(data.length));
			const obj = formatObject(data[rand].data);
			resolve(obj);
		});
    }).catch(e => {
		reject(e);
	});
}

module.exports = reddit;
