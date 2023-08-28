import { attr } from '@ember-data/model';
import GlobalModel from './global';

export default class FrModel extends GlobalModel {
  @attr('string', { defaultValue: 'france' }) locale;
}
