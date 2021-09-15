# RedditJS
Retrieve stories instantly from reddit.
<p><a href="https://www.npmjs.com/package/@kindl3d/reddit.js" rel="nofollow"><img src="https://badgen.net/npm/dt/@kindl3d/reddit.js" alt="Downloads" /></a></p>

## Installation
```bash
npm install --save @kindl3d/reddit.js
```
or
```bash
npm install --save https://github.com/k1ndled/redditjs
```

## Usage

Reddit.js is fairly simple to use

To get the post object:

```javascript
const { getPost } = require('@kindl3d/reddit.js');

getPost("entitledparents").then(data =>{
	console.log(data);
})
```

This outputs the following object:

```
{
  "title": "Post title",
  "text": "Post text",
  "flairText": 'Flair text',
  "author": 'Author',
  "subreddit": 'r/example',
  "permalink": 'https://www.reddit.com/r/emample/comments/xxxxxxx/xxxxxxxxxxx',
  "created": '2021-01-23 00:02:34.000',
  "created_utc": '2021-01-22 16:02:34.000',
  "nsfw": false
}
```

## v2

Now, this module uses the /random endpoint from Reddit thanks to a pull request from @ImAARIX.

### Breaking changes

1) URL is no longer apart of the Post object, you can just use permalink.
2) Function was renamed to `getPost` instead of `reddit` to make things more simple.


