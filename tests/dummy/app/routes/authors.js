import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class AuthorsRoute extends Route {
  @service solidAuth;
  @service store;

  async beforeModel(){
    await this.solidAuth.ensureLogin();
  }

  async model() {
    await this.store.fetchGraphForType('author');
    await this.store.fetchGraphForType('book');
    return this.store.all('author');
  }
}
