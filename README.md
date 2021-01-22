# RedditJS
Retrieve stories instantly from reddit.
<p><a href="https://www.npmjs.com/package/@kindl3d/reddit.js" rel="nofollow"><img src="https://badgen.net/npm/dt/@kindl3d/reddit.js" alt="Downloads" /></a></p>

## Installation
```bash
npm install --save @kindl3d/reddit.js
```

## Usage

Reddit.js is fairly simple to use

To get the post object:
```javascript
const { reddit } = require('@kindl3d/reddit.js');

reddit("entitledparents").then(data =>{
	console.log(data);
})
```

This outputs

```
{
  title: "Post title",
  text: "Post text",
  flairText: 'Flair text',
  author: 'Author',
  subreddit: 'r/example',
  url: 'https://www.reddit.com/r/emample/comments/xxxxxxx/xxxxxxxxxxx',
  permalink: 'https://www.reddit.com/r/emample/comments/xxxxxxx/xxxxxxxxxxx',
  created: '2021-01-23 00:02:34.000',
  created_utc: '2021-01-22 16:02:34.000',
  nsfw: false
}
```

Have fun with this simple Reddit API wrapper, open an issue if you discover any bugs :)
