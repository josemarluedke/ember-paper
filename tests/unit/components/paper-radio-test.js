import Ember from 'ember';
import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('paper-radio', 'PaperRadioComponent', {
  needs: ['service:util'],
  unit: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // creates the component instance
  let component = this.subject();
  assert.equal(component._state, 'preRender');

  // appends the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});

test('should set checked css class', function(assert) {
  let component = this.subject();
  this.render();

  Ember.run(function() {
    component.set('checked', true);
  });

  assert.ok(this.$().hasClass('md-checked'));
});

test('it updates when clicked, and triggers the `changed` action', function(assert) {
  let changedActionCallCount = 0;

  let Controller = Ember.Controller.extend({
    actions: {
      changed() {
        changedActionCallCount++;
      }
    }
  });

  let component = this.subject({
    value: 'component-value',
    selected: 'initial-selected-value',
    changed: 'changed',
    targetObject: Controller.create()
  });
  this.render();

  assert.equal(changedActionCallCount, 0);
  assert.equal(component.$().hasClass('md-checked'), false);

  Ember.run(function() {
    component.$().trigger('click');
  });

  assert.equal(component.$().hasClass('md-checked'), true, 'updates element property');
  assert.equal(component.get('checked'), true, 'updates component property');
  assert.equal(component.get('selected'), 'component-value', 'updates selected ');

  assert.equal(changedActionCallCount, 1);
});

test('it is possible to check and set selected property to value', function(assert) {
  let component = this.subject();

  assert.ok(!component.get('selected'));

  let value = 'some value';

  Ember.run(function() {
    component.set('value', value);
  });

  this.$().trigger('click');

  assert.equal(component.get('selected'), value);
});

test('it isn\'t possible to uncheck and set selected property to null', function(assert) {
  let component = this.subject();

  let value = 'some value';

  Ember.run(function() {
    component.set('value', value);
    component.set('selected', value);
  });

  this.$().trigger('click');

  // still has value
  assert.equal(component.get('selected'), value);
});

test('it is possible to uncheck and set selected property to null if toggle is true', function(assert) {
  let component = this.subject();

  let value = 'some value';

  Ember.run(function() {
    component.set('value', value);
    component.set('selected', value);
    component.set('toggle', true);
  });

  this.$().trigger('click');

  assert.equal(component.get('selected'), null);
});

test('it isn\'t possible to check a disabled radio button', function(assert) {
  let component = this.subject();

  Ember.run(function() {
    component.set('disabled', true);
    component.set('selected', false);
  });

  this.$().trigger('click');

  assert.equal(component.get('selected'), false);
});
