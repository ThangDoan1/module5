import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs/dist/types";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {DictionaryService, IWord} from "../dictionary.service";

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {

  word: IWord | undefined;
  sub: Subscription;
  constructor(
    private activatedRoute: ActivatedRoute,
    private dictionaryService: DictionaryService
  ) { }

  ngOnInit() {
    /*
    const {snapshot} = this.activatedRoute;
    const key = snapshot.paramMap.get('key');
    const meaning = this.dictionaryService.search(key);
    this.word = {
      key: key,
      meaning: meaning
    };
    */
    this.sub = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const key = paramMap.get('key');
      const meaning = this.dictionaryService.search(key);
      // @ts-ignore
      this.word = {
        key: key,
        meaning: meaning
      };
    });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
