import { Tutorial } from './tutorial.model';

/*
Actions can be:
-> commands - trigger something to happen
-> events - event of an action that's already happened
 */

// Define class with Action name
// Add static readonly type property
// if any data is passed, add to constructor as a public property

// Same as NgRx (old syntax, apart from properties on type)
export class AddTutorial {
  static readonly type = "[CREATE COMPONENT] Add Tutorial";
  constructor(public payload: Tutorial) { }
}

export class RemoveTutorial {
  static readonly type = "[TUTORIAL] Remove Tutorial";
  constructor(public payload: string) { }
}
