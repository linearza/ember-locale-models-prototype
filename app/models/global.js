import Model, { attr } from '@ember-data/model';

export default class GlobalModel extends Model {
  @attr('string', { defaultValue: 'global' }) locale;
  @attr name;
}
