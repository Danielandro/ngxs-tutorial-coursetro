import { Component, OnInit } from '@angular/core';
import { Tutorial } from 'src/app/store/tutorial/tutorial.model';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { tap } from "rxjs/operators";
import { RemoveTutorial } from 'src/app/store/tutorial/tutorial.actions';
import { TutorialState } from 'src/app/store/tutorial/tutorial.state';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {
  // store return tutorials
  // tutorials$: Observable<Tutorial[]>;

  // using select defined on StateClass
  @Select(TutorialState.getTutorials) tutorials$: Observable<Tutorial[]>;

  constructor(private store: Store) {

  }

  ngOnInit(): void {
    // use select to get slice of state
    // access state then slice the property of the particular state
    // this.tutorials$ = this.store.select(state => state.tutorial.tutorials);
  }

  // dispatch RemoveTutorial action
  delTutorial(name) {
    this.store.dispatch(new RemoveTutorial(name));
  }

}
