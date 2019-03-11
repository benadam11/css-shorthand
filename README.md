# css-shorthand

Transforms css shorthand values into an expanded object with each property explicitly defined. This is niche to css-in-js solutions like https://github.com/cxs-css/cxs, https://github.com/styletron/styletron and maybe in the future for https://github.com/callstack/linaria (if they make an atomic module). 

## Why

When you are atomizing css properties into individual classes at runtime, you can't guarantee the stylesheet order which leads to specifity issues (for example: `paddingTop: '20px'` followed by  `padding: '10px'`). In this example padding will have a higher specifity and override padddingTop's value. 

If you are doing this transformation at build time, you can sort the properties before you write them to a `<style>` putting generic properties in the sheet before specific ones, but for runtime based solution, padding and paddingTop are unique cache keys and will generate a new className. If padding is added to the sheet after paddingTop, you will not be able to override the value without the use of !important. 

