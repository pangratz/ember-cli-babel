import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';

let App;

module('Simple Acceptance Test', {
  beforeEach() {
    App = startApp();
  },

  afterEach() {
    Ember.run(App, 'destroy');
  }
});

test('value of input', function(assert) {
  visit('/');

  andThen(() => {
    assert.equal('Test Value', find('#test-input').val());
  });
});

test('babel-plugin is looked up from the registry', function(assert) {
  // the string below is replaced by a babel transformation, which is
  // registered as 'babel-plugin' within the 'answer-to-the-universe' in repo
  // addon
  assert.equal('THE-answer', 42);
});
