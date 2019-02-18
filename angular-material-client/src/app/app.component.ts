import { Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription, Observable} from 'rxjs';
import { FormControl } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {CanineService} from './shared/canine/canine.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Dog Breeds of Notoriety';
  alphabet: Array<string>;

  letter: string;
  canines: Array<any>;
  sub: Subscription;
  queryField: FormControl = new FormControl();

  constructor(private route: ActivatedRoute,
              private router: Router,
              private canineService: CanineService) {

    console.log('AppComponent Constructor called...');
    this.alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  }

  ngOnInit() {
    console.log('CanineHomeComponent ngOnInit()');
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  goHome() {
    this.router.navigate(['/canine-home']);
  }

  onQueryChange() {
    // console.log(this.queryField.value);
    if (this.queryField.value) {
      this.canineService.getByBreedInitial(this.queryField.value).subscribe(data => {
        if (this.queryField.value) {
          this.canines = data;
          // console.log(this.canines.length);
          if (this.canines.length === 0) {
            this.goHome();
          }
        } else {
          console.log(`Canines with id '${this.queryField.value}' not found, returning to list`);
          this.goHome();
        }
      });
    }
  }

  onClose() {
    this.canines = null;
  }
}


