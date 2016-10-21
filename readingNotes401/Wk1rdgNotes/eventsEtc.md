# Code 401 Events, Emitters & Streams
## Notes

### [Node.js Events Documentation](https://nodejs.org/api/events.html#events_events)
#### QUESTIONS & COMMENTS
1. **NOTE** that any functions attached to an emitted event are called synchronously, and therefore any values returned by called listeners will be ignored and discarded; **HOWEVER,** see notes below re. `setImmediate()`, `process.nextTick()`
1. **NOTE** that if `error` event emitted w/o at least one listener registered, error when thrown will cause Node to crash; see below.

#### TERMS & CONCEPTS
  * **EVENT EMITTER:** Any object that emits an event
  * **`setImmediate()`:**  can switch listener calls to asynchronous mode as needed
  * **`process.nextTick()`:** see prev.
  * **`eventEmitter.once()`:** causes listener to be called once and only once during session despite unlimited calls default
  * **[`uncaughtException`](https://nodejs.org/api/process.html#process_event_uncaughtexception) :** event solely designed to handle `error` events not otherwise caught, as in...   

  ```javascript
    const myEmitter = new myEmitter();

    process.on(uncaughtException, (err) => {
      console.log('Whoops!  There was an error.');
    });
    
    //Prints: Whoops!  There was an error.
    myEmitter.emit('error', new Error('Whoops!'));
  ``` 
  ...instead of just having Node.js crash.
  **HOWEVER, NOTE** that this event is discouraged as too crude for regular use; nor is it recommended to continue operating without proper recovery from the `error` event.

### [Andrew Burgess Using Node's Event Module](https://code.tutsplus.com/tutorials/using-nodes-event-module--net-35941)
#### QUESTIONS & COMMENTS
1. **WHY USE NODE.JS EVENTS?** Allow pub/sub events beyond just the user-generated variety found in the browser, which can then serve as an alternative to extensive reliance on nested callbacks
  **ALSO NOTE** that they are very low-commitment; if one passes without a listener, no error is thrown, but it remains available for use in coupling parts of Node's exclusively async code without tons of callbacks making your code look 'like a giant funnel'.  

1. **USING EVENTS:**
```javascript
  var events = require('events').EventEmitter;
```
Authoring cycle is then essentially construct, define, then call:  

  ```javascript
  var ee = new EventEmitter(); //construct

  //define
  ee.on("someEvent", function () {
    console.log("event has occured");
  });

  //call
  ee.emit("someEvent");
  ```

#### TERMS & CONCEPTS
  * **`ev.on()`:** listens
  * **`ev.emit()`:**  three guesses!

### [Alexander Cogneau Node.js Events & EventEmitter](https://www.sitepoint.com/nodejs-events-and-eventemitter/)
#### QUESTIONS & COMMENTS
1. **WHAT'S THE BIG DIFF** between having a function call other functions this way and just having it call them as its own methods?
  * **DUH, YOU BIG DOPE!**  This way you get to manage async without callbacks! 
  * **ALSO NOTE** that, unlike browser events, this way you get unlimited listeners (well, ten at least; after that you have to [reset the max](https://nodejs.org/api/events.html#events_emitter_setmaxlisteners_n))
1. **NOTE** very clear, vara nas discooshon of creating one's own events, e.g., the nice brownish front door object which lets you actually define a function `open` as an event that can then be attached to your `front-door` object, and a second event `ring` which can be fired in response.  Vara nass!  A wall ba usung thatt!  Not for my front door, perhaps, but who knows?
1. **RE `frontDoor. .removeAllListeners()`:**  weird syntax.  Is that a typo?

#### TERMS & CONCEPTS
  * **[OBSERVER PATTERN](https://en.wikipedia.org/wiki/Observer_pattern):** Software design pattern crucial to MVC architecture in which a so-called 'subject' object notifies a list of 'observers', or 'dependencies', functions called in response to its execution, when it runs -- typified by Node.js `events`

### [Node.js Stream Documentation](https://nodejs.org/api/stream.html#stream_simplified_constructor_api)
#### QUESTIONS & COMMENTS
1. **NOTE:** 

    > All streams are instances of `EventEmitter`.
1. **RE TRANSFORM:** Ooooh!  I smell a bitmap-transformer trick!
1. **NOTE** that duplex and transform streams each maintain two separate buffers, a Readable and a Writable, which operate independently of each other 

#### TERMS & CONCEPTS
  * **[READABLE](https://nodejs.org/api/stream.html#stream_class_stream_readable):** data can be read from stream.
  * **[WRITABLE](https://nodejs.org/api/stream.html#stream_class_stream_writable):** yep, you got it.
  * **[DUPLEX](https://nodejs.org/api/stream.html#stream_class_stream_duplex):** Cool!  Either or both, e.g., `net.Socket`
  * **[TRANSFORM](https://nodejs.org/api/stream.html#stream_class_stream_transform):** can modify or transform the data as it is written and read (for example [zlib.createDeflate()](https://nodejs.org/api/zlib.html#zlib_zlib_createdeflate_options))


