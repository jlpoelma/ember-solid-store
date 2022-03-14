import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object'

export default class AuthorsController extends Controller {
    @service router;
    @service store;

    @action
    async createAuthor(){
        this.store.create("author", {
            givenName: "Hetty",
            familyName: "Test"
        })

        await this.store.persist();

        this.router.refresh();
    }

    @action 
    async deleteAuthor(author){
        author.destroy();
        await this.store.persist();

        this.router.refresh();
    }
}