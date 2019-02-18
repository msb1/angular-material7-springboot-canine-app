import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatListModule,
  MatToolbarModule,
  MatSidenavModule,
  MatTabsModule,
  MatIconModule,
  MatFormFieldModule,
  MatAutocompleteModule,
  MatGridListModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CanineService } from './shared/canine/canine.service';
import { GiphyService } from './shared/giphy/giphy.service';
import { HttpClientModule } from '@angular/common/http';
import { CanineListComponent } from './canine-list/canine-list.component';
import { CanineDetailComponent } from './canine-detail/canine-detail.component';
import { CanineHomeComponent } from './canine-home/canine-home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SearchComponent } from './search/search.component';

@NgModule({
   declarations: [
      AppComponent,
      CanineListComponent,
      CanineDetailComponent,
      CanineHomeComponent,
      AboutComponent,
      ContactComponent,
      SearchComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MatButtonModule,
      MatCardModule,
      MatInputModule,
      MatListModule,
      MatToolbarModule,
      MatSidenavModule,
      MatTabsModule,
      MatIconModule,
      MatFormFieldModule,
      MatAutocompleteModule,
      MatGridListModule,
      FormsModule,
      ReactiveFormsModule,
      FlexLayoutModule
   ],
   providers: [
      CanineService,
      GiphyService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
