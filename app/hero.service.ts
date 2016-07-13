/**
 * Created by admin on 7/11/2016.
 */

import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {

  getHeroes() {
    return Promise.resolve(HEROES);
  }
}
