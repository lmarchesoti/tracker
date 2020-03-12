import Route from '@ember/routing/route';

export default class WitnessesRoute extends Route {
  model() {
    let witnessRecord1 = this.store.createRecord('witness', {
      fName: "Todd",
      lName: "Gandee",
      email: "fake@bignerdranch.com",
      title: "Mahatma"
    });
    let witnessRecord2 = this.store.createRecord('witness', {
      fName: "Lucas",
      lName: "Marchesoti",
      email: "lmarchesoti@gmail.com"
    });
    let witnessRecord3 = this.store.createRecord('witness', {
      fName: "Ronne",
      lName: "Scherhelton",
      email: "ronne@callink.com",
      title: "Master"
    });
    return [witnessRecord1, witnessRecord2, witnessRecord3];
  }
}
