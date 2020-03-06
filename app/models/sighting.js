import Model, {attr, hasMany, belongsTo} from '@ember-data/model';

export default class SightingModel extends Model {
  @attr('string') location;
  @attr('date') createdAt;
  @attr('date') sightedAt;
  @belongsTo('cryptid') cryptid;
  @hasMany('witness') witness;
}
