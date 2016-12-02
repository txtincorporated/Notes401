# Code 401
## 12/01/16
## Notes:  Angular $http


### [ANGULAR **`$http`**](https://docs.angularjs.org/guide/unit-testing)   

#### QUESTIONS & COMMENTS   
1. **NOTE** that abbreviated or 'shortcut methods' are available, e.g., `$http.get`, for cases when just one specific request type is required.  Presumably this saves the trouble of having to code up an entire configuration object just for a simple one-off request?   
1. **NOTE** that `$http` default headers can be supplemented, edited or altered in several ways.
  - To do so without changing them globally you can modify the `config` passed to a given request.
  - To remove a default property, set it as `undefined`.  
1. **ALSO NOTE** that `data` should be backed up through copying or selective transcription to a new object before it is passed into a `transformRequest`, since on its own Angular makes no copy of it beforehand.
1. **NOTE FURTHER** that responses are not cached by default; 
  - must be set manually
  - only available for `GET` and `JSONP` methods


#### TERMS & CONCEPTS  
  * **[`$http(config)`](https://docs.angularjs.org/api/ng/service/$http#usage) (CONFIGURATION OBJECT)**: Configuration parameter for `$http`, consisting of an object with basic REST features (e.g., method, url, headers, etc.) plus various handlers and methods necessary to process traffic as required for Angular. 
  * **$sce**: Angular service for certifying interpolation content from cross-domain sources as safe to inject into the DOM. 
  * **[`cacheFactory()`](https://docs.angularjs.org/api/ng/service/$cacheFactory)**: a factory service for constructing and affording access to `$http` cache objects in the event one is set as the `$http` response cache value.
  * **INTERCEPTORS**: the `$http` version of route middleware functions for, e.g., error-handling or authentication
    - service factories
    - based on `$q` and promise/deferred APIs
    - handle both synchronous and asynchronous pre-processing
    - applicable to both requests and responses
  * **[XSRF](https://en.wikipedia.org/wiki/JSONP#Untrusted_third-party_code)**: Cross-Site Request Forgery, a type of attack in which a currently logged in client is tricked into passing privileged JSON data such as user security tokens or login info to a malicious third party who is then able to use them to insert unwanted code into the DOM in the form of `<script>` tags, which, **REMEMBER**, do not observe the same origin policy for REST requests.
  

---     
