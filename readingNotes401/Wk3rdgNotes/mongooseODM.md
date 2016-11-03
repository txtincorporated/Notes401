# Code 401 
## 11/2/16
## Notes:  [Mongoose ODM](http://mongoosejs.com/docs/)


### [GUIDE](http://mongoosejs.com/docs/guide.html)
#### QUESTIONS & COMMENTS
1. **NOTE**  That these notes are primarily relevant to working with mongoose and mongo in an Express server/routing context.
1. **[Virtual getters & setters](http://mongoosejs.com/docs/guide.html):**  Cool!  Seem esp. useful for PUT routes.
1. **[`toObject`](http://mongoosejs.com/docs/guide.html)METHOD:**  Needed for POST and PUT routes?
1. **NOTE**  That documents are validated before saving with the [validateBeforeSave](http://mongoosejs.com/docs/guide.html) option set to `true` by default; wouldn't this make validating redundant in testing?


#### TERMS & CONCEPTS
  * **[`toObject`](http://mongoosejs.com/docs/api.html#document_Document-toObject) method:** converts document to a JS `object`.  

---     


### [SCHEMA TYPES](http://mongoosejs.com/docs/schematypes.html)
#### QUESTIONS & COMMENTS
1. **NOTE**  Some very useful properties in the 'additional' category, such as `lowercase` and `uppercase` for `String`, for example.


#### TERMS & CONCEPTS
  * **[`lowercase`](http://mongoosejs.com/docs/schematypes.html):** When set to true on an index typed to `String`, forces user input to l.c. for that index 


#### TERMS & CONCEPTS
  * **[`toObject`](http://mongoosejs.com/docs/api.html#document_Document-toObject) method:** converts document to a JS `object`.    


---     



### [MODELS](http://mongoosejs.com/docs/models.html)
#### QUESTIONS & COMMENTS
1. **NOTE**  That 
  > Every model has an associated connection. When you use `mongoose.model()`, your model will use the default mongoose connection.

  ...which is presumably also what makes the model the key to using it for page routing?


#### TERMS & CONCEPTS
  * **`remove` method:** removes all documents matching the query. 
  * **`update` method:** updates all documents matching the query. 
  * **`findOneAndUpdate` method:** updates single matching document and updates according to query. 


---     



### [DOCUMENTS](http://mongoosejs.com/docs/documents.html)
#### QUESTIONS & COMMENTS
1. **NOTE**  That     
  > Each document is an instance of its Model.  

  Very tight relationship.

1. **NOTE**  That     
  > The findAndUpdate/Remove static methods all make a change to at most one document, and return it with just one call to the database. There [are](http://mongoosejs.com/docs/api.html#model_Model.findByIdAndRemove) [several](http://mongoosejs.com/docs/api.html#model_Model.findOneAndUpdate) [variations](http://mongoosejs.com/docs/api.html#model_Model.findOneAndRemove) on the [findAndModify](http://www.mongodb.org/display/DOCS/findAndModify+Command) theme. Read the [API](http://mongoosejs.com/docs/api.html) docs for more detail.   


#### TERMS & CONCEPTS
  * **[`findOneAndUpdate`](http://mongoosejs.com/docs/api.html#model_Model.findOneAndUpdate) method:** locates and updates a single document matching the query 

---


### [QUERIES](http://mongoosejs.com/docs/queries.html)
#### QUESTIONS & COMMENTS
1. **NOTE**  That queries can be executed either via callback or directly from a standalone `exec()` call.
1. **INTERESTING...**  how regex can be used to set placeholders for arguments to be passed to, presuably e.g.,, `console.log()`:
  ```javascript
    console.log('%s %s is a %s.', person.name.first, person.name.last, person.occupation) //Space Ghost is a talk show host.

  ```     
1. **NOTE**  That queries are also chainable.


#### TERMS & CONCEPTS
  * **[`Query#exec`](http://mongoosejs.com/docs/api.html#query_Query-exec):** Method for executing a query call either in a callback or as a standalone function.
  * **[`QueryCursor`](http://mongoosejs.com/docs/api.html#querycursor-js):** A Mongoose-specific extension of the MongoDB [`cursor`](https://docs.mongodb.com/v3.0/reference/glossary/#term-cursor), a kind of pointer or reference to the '
    > result set of a query... See [Cursors](https://docs.mongodb.com/v3.0/reference/glossary/#term-cursor).    

    ...which iterates the cursor one document at a time.

---



### [VALIDATION](http://mongoosejs.com/docs/validation.html)
#### QUESTIONS & COMMENTS
1. **NOTE**  That 
  > Validation is [middleware](http://mongoosejs.com/docs/middleware.html). Mongoose registers validation as a `pre('save')` hook on every schema by default.     
  ...see notes above re. testing.
1. **NOTE**  That no `next` or `done` callbacks are passed to *`post`* hooks.
1. **ALSO NOTE**  That     
  > Error handling middleware is defined as middleware that takes one extra parameter: the 'error' that occurred as the first parameter to the function. Error handling middleware can then transform the error however you want.
1. **RE VALIDATION ERRORS:**  Wow!  Their example shows the validation callback chaining a bunch of `asserts`, almost like they want to build testing right into the interface.
1. **NOTE** That    
  > when running update validators, the document being updated may not be in the server's memory, so by default the value of `this` is not defined.


#### TERMS & CONCEPTS
  * **[Middleware](http://mongoosejs.com/docs/<middleware class="html"></middleware>):** Pre- and post- `hook` functions that run before or after, e.g., `save` operations in certain circumstances in Mongoose, as, for example, validation.     
  
      > Use Cases
      Middleware are useful for atomizing model logic and avoiding nested blocks of async code. Here are some other ideas: 
      - complex validation
      - removing dependent documents    
        ( removing a user removes all his blogposts)
      - asynchronous defaults
      - asynchronous tasks that a certain action triggers
      - triggering custom events
      - notifications


---



### [POPULATE](http://mongoosejs.com/docs/populate.html)
#### QUESTIONS & COMMENTS
1. **NOTE**  That this is an incredibly powerful technique for cross-referencing complex sets of documents without having to manually add or synchronize properties between them, and starts to look like something that would plug nicely in to a relationship management ro content management tool very nicely.


#### TERMS & CONCEPTS
  * **[POPULATION](htbject):** The Mongo/Mongoose answer to `JOIN... ON... WHERE`
    > Population is the process of automatically replacing the specified paths in the document with document(s) from other collection(s). We may populate a single document, multiple documents, plain object, multiple plain objects, or all objects returned from a query. Let's look at some examples.

