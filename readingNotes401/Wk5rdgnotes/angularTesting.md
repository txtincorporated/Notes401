# Code 401
## 11/30/16
## Notes:  Angular Testing


### [UNIT TESTING](https://docs.angularjs.org/guide/unit-testing)   

#### QUESTIONS & COMMENTS   
1. **IS KARMA** for unit testing?  I thought it was just for browser-dependent e2e testing. 
1. **RE. TRANSCLUDE TESTING:** what is the relationship between a **transclude** directive and **isolate scopes**?  In the example... 
```javascript
<script>
  angular.module('transcludeExample', [])
   .directive('pane', function(){
      return {
        restrict: 'E',
        transclude: true,
        scope: { title:'@' },
        template: '<div style="border: 1px solid black;">' +
                    '<div style="background-color: gray">{{title}}</div>' +
                    '<ng-transclude></ng-transclude>' +
                  '</div>'
      };
  })
  .controller('ExampleController', ['$scope', function($scope) {
    $scope.title = 'Lorem Ipsum';
    $scope.text = 'Neque porro quisquam est qui dolorem ipsum quia dolor...';
  }]);
</script>
<div ng-controller="ExampleController">
  <input ng-model="title" aria-label="title"> <br/>
  <textarea ng-model="text" aria-label="text"></textarea> <br/>
  <pane title="{{title}}"><span>{{text}}</span></pane>
</div> 
``` 
...is `<pane>` an isolate scope? 

1. **NOTE** that testing promises is complicated by the fact that promise callbacks are only run at the end of the digest cycle.  Call a scope's `$apply` method to trigger a digest; if there is no scope defined `$rootScope` can be injected and `$apply` called against that. 
1. **NOTE** that any injectors needed for `it` blocks following `beforeAll` must also be declared in a `beforeAll` hook first. 



#### TERMS & CONCEPTS  
  * **[MOCK](https://en.wikipedia.org/wiki/Mock_object)**: a piece of code designed to mimic the result of some operation you wish to avoid having to actually execute but whose output is required by whatever operation you actually wish to test, e.g., the data on an HTTP server response. 
  * **[STUB](https://en.wikipedia.org/wiki/Method_stub)**: a function or other piece of code used to produce mock data for testing of another piece of code. 
  * **`beforeAll`**: Jasmine's equivalent of Mocha's `before` hook. 


---     

### [ANGULAR UNIT TESTING](https://www.airpair.com/angularjs/posts/unit-testing-angularjs-applications)   

#### QUESTIONS & COMMENTS   
1. **NOTE** what a great resource this article looks to be as regards the details of setting up your tests; much better than Angular's own docs, which are certainly not terrible. 
1. **RE. `$provide`** in the `beforeAll` vs. creating your own reusable provider:  what are the relative merits of each option? 


#### TERMS & CONCEPTS  
  * **`$q`**: an Angular service for running functions asynchronously and then returning the results/errors in an orderly fashion. 
  * **`spyOn`, etc.**: Jasmine's suite of stub functions. 
  * **`callThrough()`**: Jasmine's function for delegating a given operation to the actual function responsible for it in the code as opposed to stubbing it or mocking the result. 
  * **`.spec`**: suffix to be added to names of test files so that they sort adjacent to the files they test in a directory view, e.g. `src/my-service.spec.js` immediately adjacent to `src/my-server.js`. 
  * **`$httpBackend`**: Angular's HTTP server stub. 
