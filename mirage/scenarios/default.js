export default function (server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  // server.createList('post', 10);
  server.createList('sighting', 4);
  server.createList('witness', 3);
  server.createList('cryptid', 2);
}
