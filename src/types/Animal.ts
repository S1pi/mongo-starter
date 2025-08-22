import {Point} from 'geojson';
import {Types} from 'mongoose';

export type Animal = {
  animal_name: string;
  birthdate: Date;
  species: Types.ObjectId;
  location: Point;
};
