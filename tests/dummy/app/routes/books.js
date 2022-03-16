import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class BooksRoute extends Route {
  @service solidAuth;
  @service store;

  async beforeModel(){
    await this.solidAuth.ensureLogin();
  }

  async model() {
    await this.store.fetchGraphForType('book');
    await this.store.fetchGraphForType('author');
    return {
      books: this.store.all('book'),
      authors: this.store.all('author'),
    };
  }
}
