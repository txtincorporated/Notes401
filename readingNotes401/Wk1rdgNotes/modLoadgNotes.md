# Code 401 Module Loading in Node.js
## Notes

### [Node.js "Modules" Documentation](https://nodejs.org/api/modules.html#modules_modules)
#### QUESTIONS & COMMENTS
1. **MAIN MODULE:** What's that? See the **Folders as Modules** heading?  Like, for example, `index.js`, apparently, so yeah.  Although it looks first for a `package.json`.
1. **RE. `require.main === module`:** Presumably this has to be written into a test file which will be run with, e.g., Mocha, reminding me of the fact that I really have no idea what I'm looking at with so-called 'hooks' like `it()` and `describe()`.  But have no fear!  Just see Terms & Concepts below.
1. **PACKAGE:** Wow!  I just realized I don't really know what that is.  Is it a collection of modules assembled for some particular purpose almost like an application?  Is it the same thing as the `.pkg` files that OS X installers use?
1. **FREE VARIABLE:**  What's that?  According to Wikipedia, neither a local variable nor a parameter in computer science, but that case why does the documentation insist that the `module` variable is a free variable and yet that it is 'local to each module'?
 
#### TERMS & CONCEPTS
  * **MAIN MODULE:** What's that? See the **Folders as Modules** heading?  Like, for example, `index.js`, apparently, so yeah.  Although it looks first for a `package.json`.
  * **CORE MODULES:** Modules compiled into the binary, e.g. `http`, as in (**NOTE!**) `require('http')`, so that, BTW, they don't need a path argument specified in `require()` 
  * **CYCLES:**  A kind of anti-async behavior where a module that calls it parent while the parent is still in the middle of calling it will receive a kind of down payment on the parent which will complete once the parent is done executing, and vice versa, to avoid a recursive loop; these don't just work out by themselves but have to be structured properly at author-time
  * **`module`:** a variable reserved for local scopes on module objects in Node.js; however, **NOTE** that [according to Wikipedia](https://en.wikipedia.org/wiki/Free_variables_and_bound_variables), 
  > 'the term free variable refers to variables used in a function that are neither local variables nor parameters of that function. The term non-local variable is often a synonym in this context.'
  * **`it()`:** As per [this gist](https://gist.github.com/samwize/8877226), a so-called 'test-case', some sort of function that returns a boolean value as to whether or not a defined test condition passes
  * **`describe()`:** Again according to [my man Samwize](https://gist.github.com/samwize/8877226), 'container' function for grouping `it()` functions into 'test-suites'
  * **PACKAGE:**  "I don't know that!" [goes flying off the bridge]
  * **FREE VARIABLE:**  See above.
  * **`emit(event)`:** apparently, a function or method of some sort that fires the event specified by the event parameter, e.g., `module.exports.emit('ready');`
  * **`module.parent`:** 'The module that first required this one' -- yet another instance of pseudo-OOP in action, presumably

### [SitePoint](https://www.sitepoint.com/understanding-module-exports-exports-node-js/)
#### QUESTIONS & COMMENTS
1. **SHEESH:** Really should have read this first.
1. **RE. STEP 3:**  We kind of knew this from doing the blog labs in 301, I guess.
1. **RE. `exports` VS. `module.exports`:**  Cf. Node.js documentation on this point:
  > If you want the root of your module's export to be a function (such as a constructor) or if you want to export a complete object in one assignment instead of building it one property at a time, assign it to module.exports instead of exports.

#### TERMS & CONCEPTS
  * **`module.export` & `export`:** used to make entire modules or individual module properties publicly available, respectively (**NOTE** that this article fails to make the distinction explicit) 
  * **`require()`:**  the flip side of `export`/`module.export`, used for loading a module or publicly available module property in from elsewhere

### [Schott](http://fredkschott.com/post/2014/06/require-and-the-module-system/)
#### QUESTIONS & COMMENTS
1. **WHAT DOES IT MEAN** to say 'an abstraction over' `module.require`?
1. **RE.** 'singleton-like modules that can keep state across a project':  Does this mean that modules can modify each other the way other JS functions can? 
1. **`Module.prototype._compile`:** Now *that* sounds like JavaScript!  


#### TERMS & CONCEPTS
  * **`Module.prototype._compile`:** As the man says, this is where the magic happens.  The heart of `require()` is in this constructor, which sets it up,  attaches its methods, wraps it in a function that supplies its locally-scoped vars, and fires it up. 

### [openmymind.net](http://openmymind.net/2012/2/3/Node-Require-and-Exports/)
#### QUESTIONS & COMMENTS
1. **I GET IT...** but why is it important?