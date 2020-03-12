import Route from '@ember/routing/route';

export default class CryptidsRoute extends Route {
  model() {
    return this.store.findAll('cryptid');
  }
}
