import { attr } from '@ember-data/model';
import GlobalModel from './global';

export default class UsModel extends GlobalModel {
  @attr('string', { defaultValue: 'united states' }) locale;
}
