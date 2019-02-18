import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription, Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {CanineService} from '../shared/canine/canine.service';

@Component({
  selector: 'app-canine-list',
  templateUrl: './canine-list.component.html',
  styleUrls: ['./canine-list.component.scss']
})

export class CanineListComponent implements OnInit, OnDestroy  {

  canines: Array<any>;
  letter: string;
  sub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private canineService: CanineService) {

    this.letter = '';
    console.log('CanineListComponent Constructor called...');
  }

  ngOnInit() {
    console.log('CanineListComponent ngOnInit()');

    this.sub = this.route.params.subscribe(params => {
      this.letter = params['letter'].toUpperCase();
      console.log('Query this letter: ' + this.letter);

      if (this.letter) {
        this.canineService.getByBreedInitial(this.letter).subscribe(data => {
          if (this.letter) {
            this.canines = data;
            if (this.canines.length === 0) {
              this.goHome();
            }
          } else {
            console.log(`Canines with id '${this.letter}' not found, returning to list`);
            this.goHome();
          }
        });
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  goHome() {
    this.router.navigate(['/canine-home']);
  }
}
