import {Point} from 'geojson';
import {Types} from 'mongoose';

export type Species = {
  species_name: string;
  category: Types.ObjectId;
  location: Point;
  image: string;
};
