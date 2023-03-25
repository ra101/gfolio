## gfolio | Google Search inspired portfolio website

planning, 'cuz, this is getting a tad bit crazy!

- writing -> blogs/journal, works -> project
- change `search/?q=blogs` to `/blogs/search/?q=`
- remove images, add videos.
- Map -> use world map (d3.js) to show off `socials`
- use tbm "https://stenevang.wordpress.com/2013/02/22/google-advanced-power-search-url-request-parameters/" for all but maps (`/maps` for socials)
- maps will have their "all" component as well
- DialogFlow will be used to determine tbm or tbs, and will used by "google search" and "feeling lucky" (hover would save powered by dialogflow)
- normal search will open page the current page according to "tbm".
- actual search will be performed by some thing else, feeling lucky will open first link from this!
- search for tips and tricks

This is a personal website simulating Google Search. Built with ReactJS.

Try it online: https://gfolio.enjeck.com/

<kbd>
<img src="screenshots/gfolio.gif"  />
 </kbd>

### Usage

```
npm install

# Run the app in the development mode. Open http://localhost:3000 to view it in the browser.
npm start

# build for production to the `build` folder
npm run build
```

### License

[GPL-3.0](LICENSE) Copyright (c) 2021 Enjeck Cleopatra
