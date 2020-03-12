import Model, {attr, hasMany} from '@ember-data/model';
import {computed} from '@ember/object';

export default class WitnessModel extends Model {
  @attr('string') fName;
  @attr('string') lName;
  @attr('string') email;
  @attr('string', {defaultValue: 'Mr.'}) title;
  @hasMany('sighting') sightings;
  @computed('fName', 'lName', function () {
    return this.get('fName') + ' ' + this.get('lName');
  }) fullName;
  @computed('title', 'lName', function () {
    return this.get('title') + ' ' + this.get('lName');
  }) titleName;
}
