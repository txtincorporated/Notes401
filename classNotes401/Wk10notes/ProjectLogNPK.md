# NPK Project Activities
## solo, group and pair/committee

### 1/2/17
| TIME | ACTIVITY | PARTICIPATED WITH |
| --- | --- | --- |
| **9am-12pm** |    |    |   
|   | - Standup, nail down idea	|  group  |	   
|   | - User stories and use cases | '' |   
|   | - TA feedback	| '' |   
|   | - Set up repo and locals | '' |   
| **1pm-3:30** |   |   |
|   | - Heroku | group |    
|   | - structure server and client repos	| '' |   
| **3:30-4pm** |   |   |
|   | - data models | **nk** |
| **4pm-4:45** |   |   |
|   | - mob scheme routes and models | group |
| **5-6pm** |   |   |
|    | - pair code models and model-tests	| mg, **nk** |



### 1/3/17
| TIME | ACTIVITY | PARTICIPATED WITH |
| --- | --- | --- |
| **9am-2:30pm** |   |   |
|   | - Standup/roadmapping | group |
|   | - mob code tests |  '' |
| **1:30-3pm** |   |   |
|   | - AGILE talk |   |
| **3:15-5:30pm**|   |   |
|   | - mob code routes	| group |
| **6:30pm-7:30pm** |   |   |		
|   | - troubleshoot project DEL rte./test | **nk**, mf |

### 1/4/1
| TIME | ACTIVITY | PARTICIPATED WITH |
| --- | --- | --- |
| **9:30-9:45am** |   |   | 
|    | - standup | group |
| **9:45-10:15** |   |   | 
|    | - merges/conflict resolution | mf, mg, **nk** |
|    | - research mlab setup | **nk** |
| **10:15-11am** |   |   | 
|    | - overview Angular Material docs	|group
| **12pm-1pm** |   |   | 
|    | - study mLab setup | **nk** |
| **1pm-3:30** |   |   | 
|    | - set up heroku, mLab | group |
| **3:30-4:15pm** |   |   | 
|    | - roadmap components | group |
| **4:15-5pm** |   |   | 
|    | - set up tasks component | mf, **nk** |
| **5pm-5:30** |   |   | 
|    | - troubleshoot tasks component | mf, gk, **nk** |
| **5:30-6:30** |   |   | 
|    | - troubleshoot tasks component | group |
| **6:30-7pm** |   |   | 
|    | - git housekeeping, sync local with | **nk** |
|    | working changes |  |
| **7pm-8:30** |   |   | 
|    | - work on contexts | **nk** |
| **9:30-11:30pm** |   |   | 
|    | - mess around with skeleton-css | **nk** |


### 1/5/17
| TIME | ACTIVITY | PARTICIPATED WITH |
| --- | --- | --- |
| **9:15-9:45am** |   |   |
|   | - stand-up | group
| **9:45am-12pm** |   | '' |
|   | - work on add tasks feat. | **nk** |
| **12pm-3pm** |   |   |
|   | - get tasks listing for contexts	| **nk** |
| **3pm-3:45** |   |   |
|   | - install Mark's sample data | **nk** |
|   | - pull and review team-mates' | '' |
|   |   most recent changes |   |
| **3:45-5:45pm** |   |   |
|   | - refactor contexts using task-list | **nk** |
|   |   component |  |
|   | - add md formatting to tasks by ctxt | '' |
| **5:45-7pm** |   |   |
|   | - mob code on planning component | group |
|   | - eat |   |
|   | - finish refactoring, add ng-show | **nk** |
| **7pm-8pm** |   |   |
|   | - work on planning component | group |
| **8pm-10:30** |   |   |
|   | - investigate logout issue | **nk** |
|   |   (not clearing page) |   |
|   | - fix logout/login and refactor | '' |
|   | ngDialog (coaching from Marty) | '' |


### 1/6/17
| TIME | ACTIVITY | PARTICIPATED WITH |
| --- | --- | --- |
| **9am-9:45** |   |   |
|   | - "standup", review latest work | group/**nk** |
|   | - push yesterday's changes & do PR | **nk** |
| **9:45-11:30am** |   |   |
|   | - look at formats and styling	| **nk** |
| **11:30-noon** |   |   |
|   | - prepare for presentation | **nk** |


# FINAL PROJECT INDIVIDUAL SUBMISSION RESPONSES
## QUESTIONS:
1. What did you personally contribute?
1. What did you learn?
1. What do you wish you knew better?
1. How was it working on a team?
1. Reflect on your progress from the start of 401
1. Anything else?

# RESPONSES: 
1: Project log here showing what I worked on both individually and collaboratively throughout the week.   I would say my two biggest discrete contributions were writing the `doing` component, in the process setting up the essential code for fetching filtered results from the backend which became the pattern for performing the same work in the `planning` component as well; and debugging and refactoring (thanks, Marty!) the login/logout component to behave like a standard-issue web app.

2: I think Angular bindings really came together for me on this project in a way I didn't realize they hadn't done yet.  After the review lecture two weeks ago I felt like I understood them much better, but this project really forced me to work with the difference between binding a value for the controller via the template and doing so through `$stateProvider`.  

This project also consolidated something I learned on the midterm project, namely that the web token is a great tool for managing queries beyond just its role in authentication, given that you can load all kinds of information about the user into the payload along with it, which can then be used to add specificity to requests.  In both projects for this course that has meant specifically being able to use the Mongoose `_id` property of the user document to fetch just the given user's authorized data without having to pass the id in the clear.

3: I wish we had taken a bit of time to build Angular Material in from the start.  I think we really underestimated its complexity and doing so led us to apply it hurriedly in the last day or so of work; it was a surprise to see how strongly the `md-` tag prefix interacts with the rest of the Angular code, to the point of simply breaking directives that work fine without it and forcing you to think about how to refactor them when you'd rather be doing other things instead.  If we'd thought about this earlier on I think we could have built something a little sharper looking and more responsive in the browser without that much more trouble.

4: I think we really came together remarkably as a team in the last two or three days of the project.  It seemed like this was a really hard one to get to gel, and I think we had a hard time getting coordinated with each other as a result.  Once it started to fall into place, though, it was a very pleasant surprise how quickly it did so and how smoothly we were able to work together.

5: As Michael and I were walking out on Thursday night we couldn't help but marvel at the huge technical difference between what we're able to do pretty confidently now and what we were able to do even at the start of 401.  It feels like I can do things now that would have literally boggled my mind even six weeks ago, let alone ten or twelve, and it's great to come out of the final course in the CF sequence feeling this confident; a week or two in I really wasn't sure that was going to be the case.

6: It feels like a bit of a shock after ten weeks of a boot camp schedule to be suddenly faced with having to get up every day and decide what *my* schedule is going to be.  More sobering than that to me as someone who a year ago couldn't have begun to write a line of code is the realization that, having so quickly gained what feels like a such a massive knowledge base in such a highly specialized subject area, I now have to go out and talk to people about how I am able to apply it on their behalf in real world settings with real dollars and cents on the line.  On the one hand I feel like I've just completed something epic; on the other I feel like the actual journey has barely even begun.