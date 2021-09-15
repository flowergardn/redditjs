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
        permalink: `http://reddit.com${data.permalink}`,
        created: time(parseInt(data.created, 10)),
        nsfw: data.over_18,
    };
}

async function getPost(subreddit) {
    // Return a promise
    return new Promise(async (resolve, reject) => {
        // Try to connect to the Reddit API
        try {
            const resp = await axios({method: "get", url: `https://www.reddit.com/r/${subreddit}/random.json`})
            // Extract the data
            let body = resp.data[0].data;
            // Get the children out of that body
            let data = body.children;
            // Format the object so it can be readable
            const obj = formatObject(data[0].data);
            // Resolve the object
            resolve(obj);
        } catch(err) {
            reject(e);
        }
    });
}

module.exports.getPost = getPost;