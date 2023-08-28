import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class ApplicationRoute extends Route {
  @service store;
  @service router;

  model() {
    const locales = ['fr', 'us', 'global'];

    window.locale = locales[Math.floor(Math.random() * locales.length)];

    this.store.createRecord('base', {
      name: Math.random(),
    });

    return this.store.peekAll('base');
  }

  @action
  refreshModel() {
    window.location.reload(true);
  }
}
