import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('paper-input', 'Integration | Component | paper input', {
  integration: true
});

test('renders default theme on wrapper', function(assert) {
  assert.expect(1);

  this.render(hbs`{{paper-input}}`);

  let actual = this.$('md-input-container').attr('class');
  let expected = 'ember-view md-default-theme';
  assert.equal(actual, expected);
});

test('renders with label', function(assert) {
  assert.expect(1);

  this.render(hbs`{{paper-input label="Name"}}`);

  let actual = this.$('md-input-container label').text();
  let expected = 'Name';
  assert.equal(actual, expected);
});

test('renders with icon', function(assert) {
  assert.expect(1);

  this.render(hbs`{{paper-input icon="person" icon-class="name"}}`);

  let actual = this.$('md-input-container md-icon').attr('class');
  let expected = 'name ember-view paper-icon md-font material-icons md-default-theme';
  assert.equal(actual, expected);
});

test('renders input', function(assert) {
  assert.expect(2);

  this.render(hbs`{{paper-input icon="person" icon-class="name"}}`);

  let actual = this.$('md-input-container input');
  let expected = 'md-input ember-view ember-text-field';
  assert.equal(actual.attr('class'), expected);
  assert.equal(actual.attr('type'), 'text');
});

test('renders input with id', function(assert) {
  assert.expect(1);

  this.render(hbs`{{paper-input inputElementId="testId"}}`);

  let actual = this.$('md-input-container input').attr('id');
  let expected = 'testId';
  assert.equal(actual, expected);
});

test('renders input with placeholder', function(assert) {
  assert.expect(1);

  this.render(hbs`{{paper-input placeholder="Enter value here"}}`);

  let actual = this.$('md-input-container input').attr('placeholder');
  let expected = 'Enter value here';
  assert.equal(actual, expected);
});

test('renders input with value', function(assert) {
  assert.expect(1);

  this.render(hbs`{{paper-input value="current value"}}`);

  let actual = this.$('md-input-container input').val();
  let expected = 'current value';
  assert.equal(actual, expected);
});

test('renders input as disabled', function(assert) {
  assert.expect(1);

  this.render(hbs`{{paper-input disabled=true}}`);

  let actual = this.$('md-input-container input').attr('disabled');
  let expected = 'disabled';
  assert.equal(actual, expected);
});

test('renders input as required', function(assert) {
  assert.expect(1);

  this.render(hbs`{{paper-input required=true}}`);

  let actual = this.$('md-input-container input').attr('required');
  let expected = 'required';
  assert.equal(actual, expected);
});

test('renders input as autofocus', function(assert) {
  assert.expect(1);

  this.render(hbs`{{paper-input autofocus=true}}`);

  let actual = this.$('md-input-container input').attr('autofocus');
  let expected = 'autofocus';
  assert.equal(actual, expected);
});

test('renders input with accept types of files', function(assert) {
  assert.expect(1);

  this.render(hbs`{{paper-input attr-accept="audio/*|video/*|image/*"}}`);

  let actual = this.$('md-input-container input').attr('accept');
  let expected = 'audio/*|video/*|image/*';
  assert.equal(actual, expected);
});

test('renders input with attribute autocomplete', function(assert) {
  assert.expect(1);

  this.render(hbs`{{paper-input attr-autocomplete=true}}`);

  let actual = this.$('md-input-container input').attr('autocomplete');
  let expected = 'true';

  assert.equal(actual, expected);
});

test('renders input with attribute form', function(assert) {
  assert.expect(1);

  this.render(hbs`{{paper-input attr-form="myform"}}`);

  let actual = this.$('md-input-container input').attr('form');
  let expected = 'myform';

  assert.equal(actual, expected);
});

test('renders input with attribute formnovalidate', function(assert) {
  assert.expect(1);

  this.render(hbs`{{paper-input attr-formnovalidate="formnovalidate"}}`);

  let actual = this.$('md-input-container input').attr('formnovalidate');
  let expected = 'formnovalidate';

  assert.equal(actual, expected);
});

test('renders input with attribute formtarget', function(assert) {
  assert.expect(1);

  this.render(hbs`{{paper-input attr-formtarget="_blank"}}`);

  let actual = this.$('md-input-container input').attr('formtarget');
  let expected = '_blank';

  assert.equal(actual, expected);
});

test('renders input with attribute formenctype', function(assert) {
  assert.expect(1);

  this.render(hbs`{{paper-input attr-formenctype="multipart/form-data"}}`);

  let actual = this.$('md-input-container input').attr('formenctype');
  let expected = 'multipart/form-data';

  assert.equal(actual, expected);
});

test('renders input with multiple form attributes', function(assert) {
  assert.expect(5);

  this.render(hbs`{{paper-input type="submit" attr-form="myform" attr-formnovalidate="formnovalidate" attr-formtarget="_blank" attr-formenctype="multipart/form-data"}}`);

  let $input = this.$('md-input-container input');

  let actual = $input.attr('type');
  let expected = 'submit';
  assert.equal(actual, expected);

  actual = $input.attr('form');
  expected = 'myform';
  assert.equal(actual, expected);

  actual = $input.attr('formnovalidate');
  expected = 'formnovalidate';
  assert.equal(actual, expected);

  actual = $input.attr('formtarget');
  expected = '_blank';
  assert.equal(actual, expected);

  actual = $input.attr('formenctype');
  expected = 'multipart/form-data';
  assert.equal(actual, expected);

});

test('renders input with input mode attribute', function(assert) {
  assert.expect(1);

  this.render(hbs`{{paper-input attr-inputmode="numeric"}}`);

  let $input = this.$('md-input-container input');

  let actual = $input.attr('inputmode');
  let expected = 'numeric';
  assert.equal(actual, expected);
});

test('renders input with multiple attributes', function(assert) {
  assert.expect(12);

  this.render(hbs`{{paper-input type="submit"
      attr-min="2"
      attr-maxlength="20"
      attr-max="42"
      attr-multiple="true"
      attr-name="elementname"
      attr-pattern="(999)999-9999"
      attr-readonly="true"
      attr-size="30"
      attr-spellcheck="true"
      attr-step="2"
      attr-tabindex="1138"
      }}`);

  let $input = this.$('md-input-container input');

  let actual = $input.attr('type');
  let expected = 'submit';
  assert.equal(actual, expected);

  actual = $input.attr('min');
  expected = '2';
  assert.equal(actual, expected);

  actual = $input.attr('maxlength');
  expected = '20';
  assert.equal(actual, expected);

  actual = $input.attr('max');
  expected = '42';
  assert.equal(actual, expected);

  actual = $input.attr('multiple');
  expected = 'multiple';
  assert.equal(actual, expected);

  actual = $input.attr('name');
  expected = 'elementname';
  assert.equal(actual, expected);

  actual = $input.attr('pattern');
  expected = '(999)999-9999';
  assert.equal(actual, expected);

  actual = $input.attr('readonly');
  expected = 'readonly';
  assert.equal(actual, expected);

  actual = $input.attr('size');
  expected = '30';
  assert.equal(actual, expected);

  actual = $input.attr('spellcheck');
  expected = 'true';
  assert.equal(actual, expected);

  actual = $input.attr('step');
  expected = '2';
  assert.equal(actual, expected);

  actual = $input.attr('tabindex');
  expected = '1138';
  assert.equal(actual, expected);

});
