import Route from '@ember/routing/route';

export default class WitnessesRoute extends Route {
  model() {
    return this.store.findAll('witness');
  }
}
