import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddTutorial } from 'src/app/store/tutorial/tutorial.actions';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  // import store so we can access state
  constructor(private store: Store) { }

  // dispatch by passing in an instance of the Action with payload?
  addTutorial(name, url) {
    this.store.dispatch(new AddTutorial({ name, url }));
  }
  ngOnInit(): void {
  }

}
