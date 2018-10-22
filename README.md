# Soccer game time chatbot app (IN DEVELOPMENT)

## Front-end Stack
- Angular 6 (Typescript) - [integration guide](https://github.com/toni-rmc/laravel-angular-integration/blob/master/docs/angular/integration.md)
- A styled components library... [Ant Design](https://ng.ant.design/docs/introduce/en) **OR** [PrimeNG](https://www.primefaces.org/primeng/#/)

## Action plan
### Sprint 1:
- [X] Find APIs to get game times
- [ ] Figure out what format we get data in and create database tables
- [ ] Start Creating UI to display game times

### Sprint 2:
- [ ] Populate database with dummy data
- [ ] Display dummy data from front end
- [ ] Start caching game time data in database
- [ ] Serve game data to front end

### Sprint 3:
- [ ] Build out specific game time info, links, etc
- [ ] Add UI flexibility to restrict game info to specific teams/regions/leagues?
- [ ] Add cron job to collect game time info for database.

### Sprint 4:
- [ ] Integrate basic chat bot functionality for specific game time questions
- [ ] User specific data stored? So each user has certain league games that show.
- [ ] Chat bot extra features?


## Ideas
- For each game, display which network (fox/nbcsn/espn) is hosting the game and provide links to take you right to the game. Always have 'r/soccerstreams' as a fallback.

## Long-term
We want to let the user enter a human-readable question. Interpret what they are asking, and collect the data and serve it back to them.

---
#### begin generated Angular README
---

# Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
