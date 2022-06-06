# Resources and links

## Project 1 (Quote Generator)

- **[LIVE DEMO](https://mandy8055.github.io/web_handsOn/quote-generator/index.html)**
- font: **[Montserrat](https://fonts.google.com/specimen/Montserrat?query=montser)**
- SVG Backgrounds: **[Hero Patterns](https://heropatterns.com/)**
- API Info:
  - **[type.fit](https://type.fit/)**
  - **[Twitter Integration](https://developer.twitter.com/en/docs/twitter-for-websites/tweet-button/guides/web-intent)**
- **[DOM manipulation cheatsheet](https://htmldom.dev/)**

## Project 2 (Infinite Scroll)

- **[LIVE DEMO](https://mandy8055.github.io/web_handsOn/infinite-scroll/index.html)**
- font: **[Bebas Neue](https://fonts.google.com/specimen/Bebas+Neue?query=Bebas)**
- SVG Loader: **[LoadingIO](https://loading.io/)**
- API Info: **[Unsplash](https://unsplash.com/documentation)**
- <mark style="background-color: yellow">Infinite Scroll Logic Diagram: [ToAdd]</mark>

## Project 3 (Picture-In-Picture)

- **[LIVE DEMO](https://mandy8055.github.io/web_handsOn/picture-in-picture/index.html)**
- font: **[Barlow](https://fonts.google.com/specimen/Barlow)**
- Latest in ES standard: **[tc39 proposals](https://github.com/tc39/proposals)**

## Project 4 (Joke Teller Bot)

- **[LIVE DEMO](https://mandy8055.github.io/web_handsOn/joke-teller-bot/index.html)**
- font: default (Courier New)
- API info:
  - **[VoiceRSS TTS API](https://www.voicerss.org/api/)**
  - **[Joke API](https://sv443.net/jokeapi/v2/)**

## Project 5 (Light and Dark Mode)

- **[LIVE DEMO](https://mandy8055.github.io/web_handsOn/light-dark-mode/index.html)**
- Blogs on designing light and dark mode
  - **[Choosing colors](https://blog.prototypr.io/how-to-design-a-dark-theme-for-your-android-app-3daeb264637)**
  - **[Guide on light and dark mode](https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/)**
- fonts:
  - **[Oswald for nav](https://fonts.google.com/specimen/Oswald)**
  - **[Comfortaa for body](https://fonts.google.com/specimen/Comfortaa)**
  - **[Kaushan Script for h1 titles](https://fonts.google.com/specimen/Kaushan+Script)**
- Illustrations: **[Undraw](https://undraw.co/illustrations)**
- Pending: **Responsiveness**

## Project 6 (Animation Template)

- **[LIVE DEMO](https://mandy8055.github.io/web_handsOn/animated-template/index.html)**
- Third Party Library: **[Animate-On-Scroll](https://michalsnik.github.io/aos/)**

## Project 7 (Navigation Nation)

- **[LIVE DEMO](https://mandy8055.github.io/web_handsOn/navigation-nation/index.html)**
- font: **[Nunito](https://fonts.google.com/specimen/Nunito?query=Nunito)**
- Menu hamburger: **[w3Resource](https://www.w3schools.com/howto/howto_css_menu_icon.asp)**

## Project 8 (Music Player)

- **[LIVE DEMO](https://mandy8055.github.io/web_handsOn/music-player/index.html)**
- font: **[League Spartan](https://fonts.google.com/specimen/League+Spartan)**

## PROJECT 9 (Custom Countdown with caching)

- **[LIVE DEMO](https://mandy8055.github.io/web_handsOn/custom-countdown/index.html)**
- font: **[Nunito](https://fonts.google.com/specimen/Nunito?query=Nunito)**
- Free Stock Videos - **[Pixabay](https://pixabay.com/videos/)**
- Video Compressor - **[youcompress](https://www.youcompress.com/)**

## PROJECT 10 (Book Keeper App with caching)

- **[LIVE DEMO](https://mandy8055.github.io/web_handsOn/book-keeper/index.html)**
- font: **[Karla](https://fonts.google.com/specimen/Karla)**
- **CODE REVIEW REQUIRED**

## PROJECT 11 (Video Player App)

- **[LIVE DEMO](https://mandy8055.github.io/web_handsOn/video-player/index.html)**
- **CODE REVIEW REQUIRED**

# Key Learnings

## HTML

- About `hidden` attribute.
- Providing dedicated _favicon_ using `link` tag.
  - [Blog](https://css-tricks.com/favicons-next-to-external-links/)
- Creating quick loader spinners.
  - [Blog](https://www.w3schools.com/howto/howto_css_loader.asp)
- Using a random template to customize and design website.
- Using third-party library in order to provide animations.
- A button's `title` attribute is used to add the tooltip with title text to the button.
- **AUDIO:**
  - By deafult <audio> player has no visual representation and is invisible. Adding the `controls` attribute makes it visible.
  - There are three supported audio formats in HTML: MP3, WAV, and OGG.
  - For multiple sources, the first supported file type will play.
- **VIDEO:**
  - `<video>` element supports three different video formats: MP4, WebM, and OGG.
  - The `<video>` element can also play audio files, but the `<audio>` tag provides a better user experience.
- **Best practices for form accessibility:**
  - [Blog](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/forms/Basic_form_hints)
- What does `playsinline` mean in video element?
  - [Blog](https://css-tricks.com/what-does-playsinline-mean-in-web-video/)

## CSS

- What is a fallback font?
- How to center an element using CSS?
  - [Blog](https://css-tricks.com/centering-css-complete-guide/)
- By default what's the margin on body?
- Quickest Way to apply style for button hover effect
  - `filter: brightness(%)` property.
- What does `outline: none` property does?
- Giving button a 3-d effect?
  - [Reference](https://github.com/mandy8055/web_handsOn/blob/main/picture-in-picture/style.css)
- Understanding CSS variables and `:root` pseudoclass
  - [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
  - [Blog](https://css-tricks.com/a-complete-guide-to-custom-properties/)
- Using `scroll-behavior` property to implement smooth scroll.
- Making a custom toggle switch
  - [Blog](https://www.w3schools.com/howto/howto_css_switch.asp)
- Animations in CSS
  - [Blog](https://css-tricks.com/almanac/properties/a/animation/)
- `flex-wrap` property is used to put the contents in different row(if `flex-direction: row`) if it overflows screen width.

## Javascript

- Understanding Picture in picture API.
  - [Blog](https://css-tricks.com/an-introduction-to-the-picture-in-picture-web-api/)
- Using the Screen capture API.
  - [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)
- How to ignore Prettier extension from auto-formatting a specific part of code?
  - [Prettier Docs](https://prettier.io/docs/en/ignore.html)
- Complete guide to local storage
  - [Blog](https://blog.logrocket.com/localstorage-javascript-complete-guide/)
- How to load third-party scripts efficiently.
  - [Blog](https://web.dev/optimizing-content-efficiency-loading-third-party-javascript/)
- Async vs differ
  - [Blog](https://web.dev/optimizing-content-efficiency-loading-third-party-javascript/#use-async-or-defer)
- Using **Paint-flash tool** in developer tools to measure performance.
- Difference between `innerText` and `textContent`
  - [Answer](https://stackoverflow.com/a/35213639/19090048)
- Everthing you need to know about date.
  - [Blog](https://css-tricks.com/everything-you-need-to-know-about-date-in-javascript/)
  - [Intl API](https://www.freecodecamp.org/news/how-to-get-started-with-internationalization-in-javascript-c09a0d2cd834/)
  - [Moment.js library](https://momentjs.com/docs/#/parsing/unix-timestamp-milliseconds/)
- Always try to maintain the type of a variable same throughout its lifetime. It'll really help in getting rid of multiple bugs that might arise in future and also help in better code readability.
- How to fullscreen?
  - [Blog](https://www.w3schools.com/howto/howto_js_fullscreen.asp)
- Browser Detection using User Agent
  - [Blog](https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent)

# To Do list

## HTML

- [x] ~~Button `title` attribute.~~
- [x] ~~More reading on `audio` and `video` tags.~~

## CSS

- [ ] RGBA color scheme
- [ ] `transform` property
- [ ] `box-shadow` property
- [ ] Animations is CSS.
- [x] ~~CSS variables.~~
- [ ] object-fit property
- [ ] object-position property
- [x] ~~user-select property~~
- [ ] Positioning in CSS
- [ ] `user-select` property
- [ ] [calc()](https://css-tricks.com/a-complete-guide-to-calc-in-css/)

## Javascript

- [x] ~~`innerText` vs `textContent`~~
- [ ] `classList`
- [ ] `document.documentElement`
- [ ] `children` property
- [x] ~~async vs differ~~
- [ ] More reading on `<input type='date'/>`
- [x] ~~[submit event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event)~~
- [x] ~~[preventDefault()](https://www.w3schools.com/jsref/event_preventdefault.asp)~~
- [x] ~~[javascript timing events](https://www.w3schools.com/js/js_timing.asp)~~
- [x] ~~`JSON.stringify()` and `JSON.parse()`~~
- [ ] `document.createElement()`
- [x] ~~[splice() function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)~~
