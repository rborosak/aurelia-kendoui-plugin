'use strict';

exports.__esModule = true;

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

var _aureliaFramework = require('aurelia-framework');

var _commonWidgetBase = require('../common/widget-base');

var _commonDecorators = require('../common/decorators');

require('kendo-ui/js/kendo.progressbar.min');

var ProgressBar = (function (_WidgetBase) {
  var _instanceInitializers = {};

  _inherits(ProgressBar, _WidgetBase);

  _createDecoratedClass(ProgressBar, [{
    key: 'options',
    decorators: [_aureliaFramework.bindable],
    initializer: function initializer() {
      return {};
    },
    enumerable: true
  }], null, _instanceInitializers);

  function ProgressBar(element) {
    _classCallCheck(this, _ProgressBar);

    _WidgetBase.call(this, 'kendoProgressBar', element);

    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers);
  }

  ProgressBar.prototype.bind = function bind(ctx) {
    _WidgetBase.prototype.bind.call(this, ctx);

    this._initialize();
  };

  ProgressBar.prototype.kEnableChanged = function kEnableChanged(newValue) {
    if (this.widget) {
      this.widget.enable(newValue);
    }
  };

  ProgressBar.prototype.kValueChanged = function kValueChanged(newValue) {
    if (this.widget) {
      this.widget.value(newValue);
    }
  };

  ProgressBar.prototype.value = function value(newValue) {
    if (this.widget) {
      return this.widget.value(newValue);
    }
  };

  ProgressBar.prototype.enable = function enable(newValue) {
    if (this.widget) {
      return this.widget.enable(newValue);
    }
  };

  var _ProgressBar = ProgressBar;
  ProgressBar = _aureliaFramework.inject(Element)(ProgressBar) || ProgressBar;
  ProgressBar = _commonDecorators.generateBindables('kendoProgressBar')(ProgressBar) || ProgressBar;
  ProgressBar = _aureliaFramework.customAttribute('k-progress-bar')(ProgressBar) || ProgressBar;
  return ProgressBar;
})(_commonWidgetBase.WidgetBase);

exports.ProgressBar = ProgressBar;