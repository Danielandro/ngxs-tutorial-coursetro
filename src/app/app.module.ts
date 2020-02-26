import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReadComponent } from './components/read/read.component';
import { CreateComponent } from './components/create/create.component';
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from "@ngxs/logger-plugin";
import { NgxsReduxDevtoolsPluginModule } from "@ngxs/devtools-plugin";
import { TutorialState } from './store/tutorial/tutorial.state';

@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    // add State classes here
    NgxsModule.forRoot([
      TutorialState
    ]),
    // add Redux devtool support
    NgxsReduxDevtoolsPluginModule.forRoot(),
    // add logger
    NgxsLoggerPluginModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
