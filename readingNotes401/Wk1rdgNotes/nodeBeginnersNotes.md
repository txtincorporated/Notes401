# Code 401 The Node Beginner Book
## Notes

#### QUESTIONS & COMMENTS
1. **RE. `server.js`:** given that `var http = require('http');`, where is this variable being accessed, since it isn't accessed explicitly in the code?  Is it just there to put a name on the function call?
  * Oh, never mind.  It's being used in the very next line.  Duh.
  * OK, but what is `http` in that case?  Available documentation seems to suggest that `require()` makes a file reference to a module with `exports` declared, including a directory path, yet here there is neither any path, nor any clearly evident 'http' file, let alone any declared `exports`; so what gives?
  * According to the [documentation here](https://nodejs.org/api/http.html#http_http), this apparently loads an interface (see 161017notes.md) containing an http header as defined, in this case, in said next line of the code  
1. **RE. PASSING FUNCTIONS AROUND:** Best illustration I've seen of this yet!
1. **NOTE:** Scoping mistake in example 3 (`start` module code on pg. 17);
  ```javascript
    http.createServer(onRequest).listen(8888);
  ```
  returns `ReferenceError: onRequest is not defined`, inasmuch as the callback name is now out of scope since its definition was wrapped in `start()`.  Will run if  

  ```javascript
    http.createServer(start).listen(8888);
  ```
  ...**BUT** page fails to load, so...

  ```javascript
    function start() {

      function onRequest(request, response) {
        console.log('Request received');
        response.writeHead(200, {'Content-Type': 'text-plain'});
        response.write('Hello World');
        response.end();
      }

      http.createServer(onRequest).listen(8888);
      
    };

  ```

  **...SO...** what would be the test for this?

1. **ANNOYING** that the node package install instructions are so off base
1. **YET ANOTHER CRIPPLING TYPO** in dude's example code in `requestHandlers.js` at lines 32, 36 and 39:  `file`, not `files`; lame


#### TERMS & CONCEPTS
  * **`require()`:** Node fn used to load modules, which otherwise would be invisible to each other and to index.js.
      * Seems a little bit like the html `<script>` tag, which makes *.js files visible to the browser, except without any browser
  * **DEPENDENCY INJECTION:**  In JS, abstracting a module from its dependencies in order to allow it to function with whichever ones may be assigned to it at a given time meaning, presumably, that dependencies for a given module can be specified at runtime rather than at author-time (see comment at `index.js:10:37`)
