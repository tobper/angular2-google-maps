import {Injectable} from '@angular/core';

import {GoogleMapsAPIWrapper} from './../google-maps-api-wrapper';
import * as mapTypes from '../google-maps-types';

@Injectable()
export class ImageMapTypeManager {

  constructor(protected _mapsWrapper: GoogleMapsAPIWrapper) {

  }

  setImageMapType(id: string, options: mapTypes.ImageMapTypeOptions) {
    this._mapsWrapper.setImageMapType(id, options);
  }

}
