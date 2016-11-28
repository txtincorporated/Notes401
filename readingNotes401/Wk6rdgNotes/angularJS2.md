# Code 401
## 11/27/16
## Notes:  [AngularJS](https://docs.angularjs.org/guide)


### [DEPENDENCY INJECTION](https://docs.angularjs.org/guide/di)   
#### QUESTIONS & COMMENTS   
1. **NOTE**  that [Angular's order of execution](http://stackoverflow.com/questions/20663076/angularjs-app-run-documentation) is:    
  1. `app.config()`   
  1. `app.run()`    
  1. [compile functions, if found]    
  1. `app.controller()`   
  1. [link functions, if found]   
1. **NOTE** that in addition to array annotation (see below), [`$inject` annotation](https://docs.angularjs.org/guide/di) can also be used to pass dependencies into a controller; they can also be passed using so-called 'implicit' annotation, i.e., just the same as with any other functional parameter.  However, if the app is minified the last method will fail to prevent their being renamed, most likely resulting in a broken app.   


#### TERMS & CONCEPTS   
  * **`config()` method:** defines custom values before the application actually starts.  
  * **`run()` method:** functionally similar to `main` in other apps in that it starts the application up.  This is a place where values can be set that need to be global to the app and are hard to unit test; typically might be used for, e.g., redirecting unauthenticated routing requests.  
  * **`factory()` methods:** used to define [directives](https://docs.angularjs.org/guide/directive), [services](https://docs.angularjs.org/guide/services), and [filters](https://docs.angularjs.org/guide/filter).  
  * **`module()` methods:** `config()` and `run()`.  
  * **`controller()` methods:**
    >  Controllers are "classes" or "constructor functions" that are responsible for providing the application behavior that supports the declarative markup in the template. The recommended way of declaring Controllers is using the array notation:
    > ```javascript
      someModule.controller('MyController', ['$scope', 'dep1', 'dep2', function($scope, dep1, dep2) {
        ...
        $scope.aMethod = function() {
          ...
        }
        ...
      }]);      
      ```   

  **NOTE**  that controllers can take `$scope` and [resolves](https://docs.angularjs.org/api/ngRoute/provider/$routeProvider#when) in addition to their other dependencies.

  * **array notation:** allows injected dependencies to keep their names during minification and thus avoid breaking the app.

---     


### [PROVIDERS](https://docs.angularjs.org/guide/providers)
#### QUESTIONS & COMMENTS
1. **NOTE** that, among methods of registering services and specialized objects, **Value**, **Factory**, **Service** and **Constant** may be handy or concise in their various ways but are in reality all just **Provider** by any other name.
1. **WHERE** does the `unicornLauncher()` function live that is being invoked in the "Service Recipe" version of the Angular Provider?  So far I haven't seen anything like this located outside of a module.  Is that where this one would be found?
1. **NOTE** that the straight-ahead **Provider**, while indeed the heart of all the other types, is also the least often required.  ...bazooka... archery match:
  > You should use the Provider recipe only when you want to expose an API for application-wide configuration that must be made before the application starts. This is usually interesting only for reusable services whose behavior might need to vary slightly between applications.


#### TERMS & CONCEPTS
  * **[`config()`](https://docs.angularjs.org/guide/providers):** Very clear explanation here as opposed to the API docs:
    > During application bootstrap, before Angular goes off creating all services, it configures and instantiates all providers. We call this the configuration phase of the application life-cycle. During this phase, services aren't accessible because they haven't been created yet.

  

---  

