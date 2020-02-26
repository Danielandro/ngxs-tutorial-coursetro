import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { TutorialState } from './store/tutorial/tutorial.state';
import { Tutorial } from './store/tutorial/tutorial.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngxs-tutorial-coursetro';
}
