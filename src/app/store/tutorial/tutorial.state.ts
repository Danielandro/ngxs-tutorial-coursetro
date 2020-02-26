import { Action, State, Selector, StateContext } from "@ngxs/store";
import { Tutorial } from './tutorial.model';
import { AddTutorial, RemoveTutorial } from "./tutorial.actions";

// THIS IS A REPLACEMENT FOR A REDUCER

// Define a model for the state i.e. properties this state should have
export class TutorialStateModel {
  tutorials: Tutorial[];
  select?: string;
}

// Define metadata for the state
// name - what we want to call this state
// default - deafult state values, based on the state model
@State<TutorialStateModel>({
  name: "tutorial",
  defaults: {
    tutorials: []
  }
})

// Define State class - here we define selectors and what happens
// when actions are dispatched on this state
export class TutorialState {
  // create functions that return data or a selection from data
  @Selector()
  static getTutorials(state: TutorialStateModel) {
    return state.tutorials;
  }


  // use Action decorator to define handling for dispatched actions
  // getState() -> get whole state
  // patchState() -> immutable update to state
  // setState()

  @Action(AddTutorial)
  // add a method passing in (StateContext<FeatureStateModel>, { payload }: ActionClass)
  add({ getState, patchState }: StateContext<TutorialStateModel>, { payload }: AddTutorial) {
    const state = getState(); // store current state
    // return new state
    patchState({
      tutorials: [...state.tutorials, payload]
    });
  }

  @Action(RemoveTutorial)
  remove({ getState, patchState }: StateContext<TutorialStateModel>, { payload }: RemoveTutorial) {
    patchState({
      tutorials: getState().tutorials.filter(tutorial => tutorial.name !== payload)
    });
  }



}
