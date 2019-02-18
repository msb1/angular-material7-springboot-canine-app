import {Component, OnInit} from '@angular/core';
import {CanineService} from '../shared/canine/canine.service';
import {GiphyService} from '../shared/giphy/giphy.service';
import {Observable} from 'rxjs';
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';

@Component({
  selector: 'app-canine-home',
  templateUrl: './canine-home.component.html',
  styleUrls: ['./canine-home.component.scss']
})
export class CanineHomeComponent implements OnInit {

  coolCanines: string[];
  canines: Array<any> = [];
  canine: any;

  constructor(private canineService: CanineService) {

    console.log('CanineListComponent Constructor called...');

    this.coolCanines = ['German Shepherd Dog', 'Akita', 'Belgian Malinois', 'Border Collie', 'Doberman Pinscher',
                        'Labrador Retriever', 'Old English Sheepdog', 'Boxer', 'Rhodesian Ridgeback', 'Shiba Inu',
                        'Standard Schnauzer', 'Samoyed'];
                        // 'Standard Schnauzer', 'Vizsla', 'Samoyed', 'Siberian Husky', 'Finnish Spitz', 'English Setter'];
  }

  ngOnInit() {
    console.log('CanineHomeComponent ngOnInit()');

    for (const cool of this.coolCanines) {
      console.log(cool);
      this.canineService.getByBreed(cool).subscribe(data => {
        this.canine = data;
        console.log(this.canine);
        this.canines.push(this.canine);
      });
      // his.giphyService.get(canine.dogBreed).subscribe(url => canine.giphyUrl = url);
      // canine.href = canine['_links']['self']['href'];
    }
  }

}
