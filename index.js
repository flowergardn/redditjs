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
        url: data.url_overridden_by_dest,
        permalink: `http://reddit.com${data.permalink}`,
        created: time(parseInt(data.created, 10)),
        created_utc: time(parseInt(data.created_utc, 10)),
        nsfw: data.over_18,
    };
}


module.exports = {
    async reddit(subreddit) {
        return new Promise((resolve, reject) => {
            axios({
                method: "get",
                url: `https://www.reddit.com/r/${subreddit}/random.json`,
            }).then(function (resp) {
                    let body = resp.data[0].data;
                    let data = body.children;
                    //const rand = Math.floor(Math.random() * Math.floor(data.length));
                    const obj = formatObject(data[0].data);
                    resolve(obj);
            }).catch(e => {
                reject(e);
            });
        });
    }
}