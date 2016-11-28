# Code 401 
## 11/25/16
## Notes:  [AngularJS](https://docs.angularjs.org/guide)


### [CONCEPTUAL OVERVIEW](https://docs.angularjs.org/guide/concepts#)
#### QUESTIONS & COMMENTS
1. **NOTE**  that variables in curly-braced Angular expressions are not scoped globally but rather in a scope that is set by Angular specific to the markup where they live.
  - **Q: DOES THIS MEAN** that they are specific to the controller (a method on a JS object by any other name) in which they occur, or is it more flexible than this?
1. **HOW**  does the 'as' operator work in the `ng-controller` attribute, and where is it from?  Clearly instantiates a controller and simultaneously assigns it to a variable within HTML attribute syntax, but is it HTML, JS, or Angular proper?
  - **A: [SEEMS TO BE](https://toddmotto.com/digging-into-angulars-controller-as-syntax/)** a bit of the latter two; an Angular-specific instantiation of JS class-construction used to control scoping in a more orderly fashion.  See [`ng-controller` documentation](https://docs.angularjs.org/api/ng/directive/ngController) for details.
  - **NOTE** that this usage helps restrict the scope for variables dot-prefixed with the name of the assignment to just the controller being assigned.

1. **WHY**  in the example does the controller first have to be instatiated explicitly against Angular as a module and only then as a controller instance against that?  Why can't it just be instantiated directly against Angular?  If `controller` is an object on `Angular.module`, in fact, why can't it just be instantiated directly?  Is this because we're working with JS 'classes' and not just vanilla objects?
  - **A: [BECAUSE](https://docs.angularjs.org/guide/concepts#di)** this is how Angular implements the so-called [dependency-injection](https://en.wikipedia.org/wiki/Dependency_injection) design pattern.
  - **NOTE** the bracketed arguments being passed into functions; these are dependencies of those functions, abstracted out so as to be reusable.  The chaining dot-notation in the method call is similar to that used in vanilla JS, in this case allowing a given `module` object's component methods to be defined as, e.g., either `controller` or `factory` types. 



#### TERMS & CONCEPTS
  * **template:** HTML augmented with responsive functionality via Angular markup.  
  * **directives:** HTML markup attributes bound to AngularJS functions controlling how the page view responds to user actions, e.g., text display updating in response to field input.  
  * **compiler:** the part of Angular's code responsible for parsing and processing the template.  
  * **controller:** a javascript component of an Angular app which directly binds to the template and provides robust control logic for changing the view and manipulating the DOM in response to user actions and other events.  
  * **service:** js logic that is abstractable from any particular view and thus can be located in an independent file where it is more scalable and reusable than if it were in a controller.  
  * **[dependency injection](https://docs.angularjs.org/guide/concepts#di):** passing, e.g., service modules into controller modules that need them (i.e., passing them as ['dependencies'](https://en.wikipedia.org/wiki/Dependency_injection) of the controller) as needed, rather than placing them in a global scope or repeating their code *ad nauseam* in every scope that depends on it.  As explained in the docs:
    > ```javascript
      angular.module('invoice2', ['finance2'])
      .controller('InvoiceController', ['currencyConverter', function InvoiceController(currencyConverter) {
        this.qty = 1;
        this.cost = 2;
        this.inCurr = 'EUR';
        this.currencies = currencyConverter.currencies;

    >   this.total = function total(outCurr) {
          return currencyConverter.convert(this.qty * this.cost, this.inCurr, outCurr);
        };
        this.pay = function pay() {
          window.alert('Thanks!');
        };
      }]);
      ```
    > ...Back to the initial question: How does the `InvoiceController` get a reference to the `currencyConverter` function? In Angular, this is done by simply defining arguments on the constructor function. With this, the injector is able to create the objects in the right order and pass the previously created objects into the factories of the objects that depend on them.  In our example, the `InvoiceController` has an argument named `currencyConverter`. By this, Angular knows about the dependency between the controller and the service and calls the controller with the service instance as argument.

---  



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


### [DIRECTIVES](https://docs.angularjs.org/guide/directive)
#### QUESTIONS & COMMENTS
1. **NOTE**  that directives are "injectable just like a controller", and seem to be a kind of cousin to the `module.controller` in other ways as well, e.g., in that they tell the module how to make the page do stuff; or again they can be related to services in that they incorporate factory functions:
  > ...Much like controllers, directives are registered on modules. To register a directive, you use the `module.directive` API. `module.directive` takes the normalized directive name followed by a factory function. This factory function should return an object with the different options to tell `$compile` how the directive should behave when matched.

1. **NOTE ALSO**  that Angular bundles with a number of built-in directives, including `ngBind`, `ngModel` and `ngClass`.
  * **NOTE FURTHER** that, since HTML is case-insensitive, when attaching directives in the DOM it is best to **normalize** directive names from camelCase to kebab-case; thus, `ngBind` on the prototype becomes `ng-bind` in the DOM, though there are several alternative styles of denotation depending on legacy back-compatibility requirements and other project specifics.
1. **NOTE**  that directives can be attached not only via attribute and tag but, if needed, via class as well, and even via comments.  See [the `restrict` entry](https://docs.angularjs.org/api/ng/service/$compile#directive-definition-object) under `$compile`.
  * **ALSO NOTE, HOWEVER,** that the latter two options are deprecated as inviting potential conflicts with future versions of HTML and CSS.


#### TERMS & CONCEPTS
  * **directive:**
    > At a high level, directives are markers on a DOM element (such as an attribute, element name, comment or CSS class) that tell AngularJS's **HTML compiler** (`$compile`) to attach a specified behavior to that DOM element (e.g. via event listeners), or even to transform the DOM element and its children.

    > Angular comes with a set of these directives built-in, like `ngBind`, `ngModel`, and `ngClass`. Much like you create controllers and services, you can create your own directives for Angular to use...  
  * **isolate [scope](https://docs.angularjs.org/api/ng/service/$compile#-scope-):** 
    > ...The 'isolate' scope differs from normal scope in that it does not prototypically inherit from its parent scope. This is useful when creating reusable components **[relative to a given directive to which the [scope](https://docs.angularjs.org/api/ng/service/$compile#-scope-) is attached]**, which should not accidentally read or modify data in the parent scope.
  * **[transclude](https://doope):** 
    > What does this transclude option do, exactly? transclude makes the contents of a directive with this option have access to the scope outside of the directive rather than inside.


---     


### [SCOPES](https://docs.angularjs.org/guide/scope)
#### QUESTIONS & COMMENTS
1. **NOTE:**  See below.

#### TERMS & CONCEPTS
  * **SCOPE:**
    > Scope is an object that refers to the application model. It is an execution context for expressions. Scopes are arranged in hierarchical structure which mimic the DOM structure of the application. Scopes can watch expressions and propagate events.  

  * **`link`:** option attached to `.directive()` that is typically the one used for DOM manipulation

---     


### [COMPILER](https://docs.angularjs.org/guide/compiler)
#### QUESTIONS & COMMENTS
1. **NOTE**  that in regard to the **LINK** process, 
  > Any changes in the scope model are reflected in the view, and any user interactions with the view are reflected in the scope model. This makes the scope model the single source of truth. 

  This seems like a good thing to remember about Angular generally, not just in connection with this particular detail.


#### TERMS & CONCEPTS
  * **COMPILE:** First phase of the **COMPILER** process, in which Compiler proceeds to "traverse the DOM and collect all of the directives.  The result is a linking function."  
  * **LINK:** The second phase of the process, in which the Compiler goes on to "combine the directives with a scope and produce a live view" usually either element by element or selector by selector. 
    * **NOTE** that 
    > A link function allows the directive to register listeners to the specific cloned DOM element instance as well as to copy content into the DOM from the scope.

    That is, `link()` is kind of the secret sauce. 
