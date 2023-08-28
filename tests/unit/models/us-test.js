import { module, test } from 'qunit';

import { setupTest } from 'test-locale-models/tests/helpers';

module('Unit | Model | us', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('us', {});
    assert.ok(model);
  });
});
