System.register(['aurelia-framework', 'jquery', 'kendo-ui/src/js/kendo.button'], function (_export) {
    'use strict';

    var customAttribute, bindable, inject, $, AuKendoButton;

    var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

    return {
        setters: [function (_aureliaFramework) {
            customAttribute = _aureliaFramework.customAttribute;
            bindable = _aureliaFramework.bindable;
            inject = _aureliaFramework.inject;
        }, function (_jquery) {
            $ = _jquery['default'];
        }, function (_kendoUiSrcJsKendoButton) {}],
        execute: function () {
            AuKendoButton = (function () {
                var _instanceInitializers = {};
                var _instanceInitializers = {};

                _createDecoratedClass(AuKendoButton, [{
                    key: 'icon',
                    decorators: [bindable],
                    initializer: null,
                    enumerable: true
                }, {
                    key: 'options',
                    decorators: [bindable],
                    initializer: null,
                    enumerable: true
                }], null, _instanceInitializers);

                function AuKendoButton(element) {
                    _classCallCheck(this, _AuKendoButton);

                    _defineDecoratedPropertyDescriptor(this, 'icon', _instanceInitializers);

                    _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers);

                    this.element = element;
                    this.options = {};
                }

                _createDecoratedClass(AuKendoButton, [{
                    key: 'attached',
                    value: function attached() {
                        this._component = $(this.element).kendoButton(this.getOptions()).data('kendoButton');
                    }
                }, {
                    key: 'detached',
                    value: function detached() {
                        if (this._component) this._component.destroy();
                    }
                }, {
                    key: 'getOptions',
                    value: function getOptions() {
                        return Object.assign({}, this.options, { icon: this.icon });
                    }
                }], null, _instanceInitializers);

                var _AuKendoButton = AuKendoButton;
                AuKendoButton = inject(Element)(AuKendoButton) || AuKendoButton;
                AuKendoButton = customAttribute('au-kendo-button')(AuKendoButton) || AuKendoButton;
                return AuKendoButton;
            })();

            _export('AuKendoButton', AuKendoButton);
        }
    };
});