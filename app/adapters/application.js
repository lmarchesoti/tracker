import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
  host = 'https://bnr-tracker-api.herokuapp.com';
  namespace = 'api';
}
