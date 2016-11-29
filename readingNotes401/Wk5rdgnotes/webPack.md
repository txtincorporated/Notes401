# Code 401
## 11/27/16
## Notes:  [Webpack](https://docs.angularjs.org/guide)


### [WEBPACK MOTIVATION](https://webpack.github.io/docs/motivation.html)   
#### QUESTIONS & COMMENTS   
1. **RE. "No parallell require...":** Wouldn't that be nice!   
1. **RE. AMD style:** Seems like the first encounter with Angular `module` syntax would have been a little less disorienting if we'd had look at this first. 

---     

### [CONCEPTS](https://webpack.js.org/concepts/)   

#### TERMS & CONCEPTS  
  * **Configuration object**: data object containing all the values used by Webpack to deine how to proceed through the bundling process. 
  * **ENTRY:** starting point for Webpack's ordering of project dependencies preparatory to bundling.  
  * **OUTPUT:** destination and filename of bundled app.  
  * **LOADERS:** transform all the disparate file types for assets and so forth into modules.
  * **PLUGINS:** perform further, customizable transformations on bundled module "chunks".  

---     

### [TUTORIALS/GETTING STARTED](https://webpack.github.io/docs/tutorials/getting-started/)   
#### QUESTIONS & COMMENTS   
1. **WHAT** do the bangs do in `require('!style!css!./style.css);`?  It's more or less self-explanatory that `document.write(require('./content.js'));` pulls in the text in `content.js` and displays it in the DOM, but is this new `require` syntax some sort of specialized way of dealing with non-js file types?   
  * **A:** from the following section, it would appear that the loader is `style!css` and the beginning and ending bangs must be some kind of escaping.


#### TERMS & CONCEPTS   
  * **WATCH MODE:** recompiles bundles interactively as changes are made
  * **`webpack-dev-server`:** does all of the above plus serving the DOM on `localhost:8080` via a basic Express server instance in the manner of node `live-server`
    * **USE** `webpack-dev-server --progress --colors` to make it go
    * **NAVIGATE** to `http://localhost:8080/webpack-dev-server/bundle` to see DOM output 

---     
