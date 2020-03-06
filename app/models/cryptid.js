import Model, {attr, hasMany} from '@ember-data/model';

export default class CryptidModel extends Model {
  @attr('string') name;
  @attr('string') cryptidType;
  @attr('string') profileImg;
  @hasMany('sighting') sightings;
}
