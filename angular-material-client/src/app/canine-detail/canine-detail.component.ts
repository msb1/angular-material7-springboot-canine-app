import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {CanineService} from '../shared/canine/canine.service';
import {GiphyService} from '../shared/giphy/giphy.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-canine-detail',
  templateUrl: './canine-detail.component.html',
  styleUrls: ['./canine-detail.component.scss']
})
export class CanineDetailComponent implements OnInit, OnDestroy {
  canine: any = {};

  sub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private canineService: CanineService,
              private giphyService: GiphyService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.canineService.get(id).subscribe((canine: any) => {
          if (canine) {
            this.canine = canine;
            this.canine.href = canine._links.self.href;
            this.giphyService.get(canine.dogBreed).subscribe(url => canine.giphyUrl = url);
          } else {
            console.log(`Canine with id '${id}' not found, returning to list`);
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
