'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FhalPicker = function () {
  function FhalPicker() {
    _classCallCheck(this, FhalPicker);

    this.init();
  }

  _createClass(FhalPicker, [{
    key: 'init',
    value: function init() {
      console.log('Init class');
      var newButton = document.createElement('button');
      newButton.textContent = 'Click me!';
      newButton.addEventListener('click', function () {
        alert('Button clicked!');
      });

      document.body.appendChild(newButton);

      this.renderCalendar();
    }
  }, {
    key: 'renderCalendar',
    value: function renderCalendar() {
      var body = document.querySelector('body');
      var html = '';

      html += '\n      <div>\n        <button>My Button</button>\n      </div>\n    ';

      var htmlEl = document.createElement('div');
      htmlEl.innerHTML = html;

      body.appendChild(htmlEl);
    }
  }, {
    key: 'doSomething',
    value: function doSomething() {
      console.log('this is my first package');
    }
  }]);

  return FhalPicker;
}();