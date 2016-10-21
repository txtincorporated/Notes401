# Code 401 The Node Beginner Book
## Notes

#### QUESTIONS & COMMENTS
1. **RE. `server.js`:** given that `var http = require('http');`, where is this variable being accessed, since it isn't accessed explicitly in the code?  Is it just there to put a name on the function call?
  * Oh, never mind.  It's being used in the very next line.  Duh.
  * OK, but what is `http` in that case?  Available documentation seems to suggest that `require()` makes a file reference to a module with `exports` declared, including a directory path, yet here there is neither any path, nor any clearly evident 'http' file, let alone any declared `exports`; so what gives?
  * According to the [documentation here](https://nodejs.org/api/http.html#http_http), this apparently loads an interface (see 161017notes.md) containing an http header as defined, in this case, in said next line of the code  
1. **RE. PASSING FUNCTIONS AROUND:** Best illustration I've seen of this yet!


#### TERMS & CONCEPTS
  * **`require()`:** Node fn used to load modules, which otherwise would be invisible to each other and to index.js.
      * Seems a little bit like the html `<script>` tag, which makes *.js files visible to the browser, except without any browser
