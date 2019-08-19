/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../react-character-map/dist/component/CharacterMap.js":
/*!*************************************************************!*\
  !*** ../react-character-map/dist/component/CharacterMap.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _react = __webpack_require__(/*! react */ "../react-character-map/node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _chars = __webpack_require__(/*! ./chars.json */ "../react-character-map/dist/component/chars.json");

var _chars2 = _interopRequireDefault(_chars);

__webpack_require__(/*! ./style.css */ "../react-character-map/dist/component/style.css");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
/**
 * <CharacterMap /> Element
 *
 * @example <CharacterMap onSelect={function(char,el){ console.log(char, el); }} />
 * @extends React
 */


var CharacterMap = function (_React$Component) {
  _inherits(CharacterMap, _React$Component);

  function CharacterMap(props) {
    _classCallCheck(this, CharacterMap);

    var _this = _possibleConstructorReturn(this, (CharacterMap.__proto__ || Object.getPrototypeOf(CharacterMap)).call(this, props));

    _this.state = {
      active: 0,
      search: '',
      categoryList: '',
      charList: '',
      fullCharList: '',
      update: 1
    };
    _this.resultsCache = [];
    _this.handleSearchChange = _this.handleSearchChange.bind(_this);
    _this.clickCategoryHandler = _this.clickCategoryHandler.bind(_this);
    _this.setupCharacters = _this.setupCharacters.bind(_this);
    return _this;
  }
  /**
   * Handle clicks to the category tabs.
   *
   * @param {Event} e The React synthetic event.
   */


  _createClass(CharacterMap, [{
    key: 'clickCategoryHandler',
    value: function clickCategoryHandler(e) {
      console.log('clickCategoryHandler');
      var cat = e.target.getAttribute('data-category-index');
      this.setupCharacters(cat);
    }
    /**
     * Extract character data at a tab.
     *
     * @param {Number} tab The tab to display.
     */

  }, {
    key: 'setupCharacters',
    value: function setupCharacters(tab) {
      var characterData = this.props.characterData;
      var characters = characterData || _chars2["default"];

      var _charListFromCharacte = this.charListFromCharacters(characters, tab),
          charList = _charListFromCharacte.charList,
          categoryList = _charListFromCharacte.categoryList;

      this.setState({
        charList: charList,
        categoryList: categoryList,
        fullCharList: charList
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setupCharacters(0);
    } // Handle clicks to the characters, running callback function.

  }, {
    key: 'charClickHandler',
    value: function charClickHandler(e, _char) {
      e.preventDefault();
      return this.props.onSelect(_char, e.target);
    }
    /**
     * Perform the character search.
     *
     * @param {string} search The search string.
     */

  }, {
    key: 'performSearch',
    value: function performSearch(search) {
      var characterData = this.props.characterData;
      var characters = characterData || _chars2["default"];
      var filteredCharacters = {
        'Results': []
      };
      var sortedResults = [];
      Object.keys(characters).forEach(function (group) {
        Object.keys(characters[group]).forEach(function (character) {
          if (!characters[group][character].name) {
            return;
          } // If search string is one character long, look for names that start with that character.


          if (1 === search.length) {
            if (0 === characters[group][character].name.toLowerCase().indexOf(search.toLowerCase())) {
              filteredCharacters['Results'].push(characters[group][character]);
            }
          } else {
            // When the search string is two or more characters, do a full search of the name.
            var index = characters[group][character].name.toLowerCase().indexOf(search.toLowerCase());

            if (-1 !== index) {
              // Store the results in a sorted array of buckets based on search result index.
              // Matches with index of 20 or more are stored in the final bucket.
              var sortPosition = index < 20 ? index : 20;
              sortedResults[index] = sortedResults[index] || [];
              sortedResults[index].push(characters[group][character]);
            }
          }
        });
      }); // If we built a sorted array, map that to filteredCharacters, preserving the sert order.

      if (0 !== sortedResults.length) {
        sortedResults.forEach(function (results) {
          results.forEach(function (result) {
            filteredCharacters['Results'].push(result);
          });
        });
      }

      return filteredCharacters;
    } // Filter the displayed characters.

  }, {
    key: 'handleSearchChange',
    value: function handleSearchChange(e) {
      var search = e.target.value;
      var _state = this.state,
          fullCharList = _state.fullCharList,
          charList = _state.charList;

      if ('' === search) {
        this.setState({
          charList: fullCharList
        });
      } else {
        var filteredCharacters = this.resultsCache[search] ? this.resultsCache[search] : this.performSearch(search);
        this.resultsCache[search] = filteredCharacters;

        var _charListFromCharacte2 = this.charListFromCharacters(filteredCharacters, 0),
            _charList = _charListFromCharacte2.charList;

        this.setState({
          charList: _charList
        });
      }

      this.setState({
        search: search
      });
    }
  }, {
    key: 'charListFromCharacters',
    value: function charListFromCharacters(characters, active) {
      var self = this;
      var categoryList = [];
      var i = -1;
      self.activeTab = parseInt(active, 10);
      console.log('active in charlistfromcharacters', active); // Loop through each category

      var charList = Object.keys(characters).map(function (category) {
        i++;

        if (self.activeTab === i) {
          // In the active category, loop through the characters and create the list
          var currentItems = Object.keys(characters[category]).map(function (p, c) {
            return _react2["default"].createElement('li', {
              key: 'topli' + p
            }, _react2["default"].createElement('button', {
              'data-hex': characters[category][p].hex,
              'data-entity': characters[category][p].entity,
              'data-char': characters[category][p]["char"],
              'data-title': characters[category][p].name,
              onClick: function onClick(e) {
                return self.charClickHandler(e, characters[category][p]);
              }
            }, characters[category][p]["char"]));
          });
        }

        categoryList.push(_react2["default"].createElement('li', {
          key: 'clli' + category + i,
          className: "charMap--category-menu-item" + (self.activeTab === i ? ' active' : '')
        }, _react2["default"].createElement('button', {
          'data-category-index': i,
          onClick: self.clickCategoryHandler
        }, category)));
        return _react2["default"].createElement('li', {
          key: 'innerli' + category + i,
          'data-category-name': category
        }, _react2["default"].createElement('ul', {
          className: "charMap--category " + (self.activeTab === i ? ' active' : '')
        }, currentItems));
      });
      return {
        charList: charList,
        categoryList: categoryList
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _state2 = this.state,
          categoryList = _state2.categoryList,
          charList = _state2.charList,
          search = _state2.search;
      return _react2["default"].createElement('div', {
        className: 'charMap--container'
      }, _react2["default"].createElement('ul', {
        className: 'charMap--category-menu',
        'aria-label': 'Categories'
      }, _react2["default"].createElement('label', {
        'for': 'filter'
      }, 'Filter: '), _react2["default"].createElement('input', {
        type: 'text',
        name: 'filter',
        'aria-label': 'Filter',
        value: search,
        onChange: this.handleSearchChange,
        autoComplete: false
      })), '' === search && _react2["default"].createElement('ul', {
        className: 'charMap--category-menu'
      }, categoryList), _react2["default"].createElement('ul', {
        className: 'charMap--categories',
        'aria-label': 'Character List'
      }, charList));
    }
  }]);

  return CharacterMap;
}(_react2["default"].Component);

exports["default"] = CharacterMap;

/***/ }),

/***/ "../react-character-map/dist/component/chars.json":
/*!********************************************************!*\
  !*** ../react-character-map/dist/component/chars.json ***!
  \********************************************************/
/*! exports provided: Misc, Math, Latin, Arrows, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"Misc\":[{\"entity\":\"&trade;\",\"hex\":\"&#2122;\",\"name\":\"TRADEMARK SIGN\",\"char\":\"™\"},{\"entity\":\"&copy;\",\"hex\":\"&#00A9;\",\"name\":\"COPYRIGHT SIGN\",\"char\":\"©\"},{\"entity\":\"&reg;\",\"hex\":\"&#00AE;\",\"name\":\"REGISTERED SIGN\",\"char\":\"®\"},{\"hex\":\"&#0024;\",\"name\":\"DOLLAR SIGN\",\"char\":\"$\"},{\"hex\":\"&#20AC;\",\"name\":\"EURO SIGN\",\"char\":\"€\"},{\"entity\":\"&cent;\",\"hex\":\"&#00A2;\",\"name\":\"CENT SIGN\",\"char\":\"¢\"},{\"entity\":\"&pound;\",\"hex\":\"&#00A3;\",\"name\":\"POUND SIGN\",\"char\":\"£\"},{\"entity\":\"&curren;\",\"hex\":\"&#00A4;\",\"name\":\"CURRENCY SIGN\",\"char\":\"¤\"},{\"entity\":\"&yen;\",\"hex\":\"&#00A5;\",\"name\":\"YEN SIGN\",\"char\":\"¥\"},{\"entity\":\"&para;\",\"hex\":\"&#00B6;\",\"name\":\"PILCROW SIGN\",\"char\":\"¶\"},{\"entity\":\"&sect;\",\"hex\":\"&#00A7;\",\"name\":\"SECTION SIGN\",\"char\":\"§\"},{\"hex\":\"&#275D;\",\"name\":\"HEAVY DOUBLE TURNED COMMA QUOTATION MARK ORNAMENT\",\"char\":\"❝\"},{\"hex\":\"&#275E;\",\"name\":\"HEAVY DOUBLE COMMA QUOTATION MARK ORNAMENT\",\"char\":\"❞\"},{\"entity\":\"&infin;\",\"hex\":\"&#221E;\",\"name\":\"INFINITY\",\"char\":\"∞\"},{\"entity\":\"&oslash;\",\"hex\":\"&#00F8;\",\"name\":\"LATIN SMALL LETTER O WITH STROKE\",\"char\":\"ø\"},{\"entity\":\"&ne;\",\"hex\":\"&#2260;\",\"name\":\"NOT EQUAL TO\",\"char\":\"≠\"},{\"hex\":\"&#0025;\",\"name\":\"PERCENT SIGN\",\"char\":\"%\"},{\"entity\":\"&hellip;\",\"hex\":\"&#2026;\",\"name\":\"HORIZONTAL ELLIPSIS\",\"char\":\"…\"},{\"entity\":\"&int;\",\"hex\":\"&#222B;\",\"name\":\"INTEGRAL\",\"char\":\"∫\"},{\"entity\":\"&asymp;\",\"hex\":\"&#2248;\",\"name\":\"ALMOST EQUAL TO\",\"char\":\"≈\"},{\"entity\":\"&there4;\",\"hex\":\"&#2234;\",\"name\":\"THEREFORE\",\"char\":\"∴\"},{\"entity\":\"&prop;\",\"hex\":\"&#221D;\",\"name\":\"PROPORTIONAL TO\",\"char\":\"∝\"},{\"entity\":\"&micro;\",\"hex\":\"&#00B5;\",\"name\":\"MICRO SIGN\",\"char\":\"µ\"},{\"entity\":\"&part;\",\"hex\":\"&#2202;\",\"name\":\"PARTIAL DIFFERENTIAL\",\"char\":\"∂\"},{\"entity\":\"&Omega;\",\"hex\":\"&#03A9;\",\"name\":\"GREEK CAPITAL LETTER OMEGA\",\"char\":\"Ω\"},{\"entity\":\"&Phi;\",\"hex\":\"&#03A6;\",\"name\":\"GREEK CAPITAL LETTER PHI\",\"char\":\"Φ\"},{\"entity\":\"&Psi;\",\"hex\":\"&#03A8;\",\"name\":\"GREEK CAPITAL LETTER PSI\",\"char\":\"Ψ\"},{\"entity\":\"&lambda;\",\"hex\":\"&#03BB;\",\"name\":\"GREEK SMALL LETTER LAMDA\",\"char\":\"λ\"},{\"hex\":\"&#03F4;\",\"name\":\"GREEK CAPITAL THETA SYMBOL\",\"char\":\"ϴ\"},{\"entity\":\"&omega;\",\"hex\":\"&#03C9;\",\"name\":\"GREEK SMALL LETTER OMEGA\",\"char\":\"ω\"},{\"hex\":\"&#A74F;\",\"name\":\"LATIN SMALL LETTER OO\",\"char\":\"ꝏ\"},{\"hex\":\"&#1D60;\",\"name\":\"MODIFIER LETTER SMALL GREEK PHI\",\"char\":\"ᵠ\"},{\"hex\":\"&#2103;\",\"name\":\"DEGREE CELSIUS\",\"char\":\"℃\"},{\"hex\":\"&#2109;\",\"name\":\"DEGREE FAHRENHEIT\",\"char\":\"℉\"},{\"hex\":\"&#2691;\",\"name\":\"BLACK FLAG\",\"char\":\"⚑\"},{\"hex\":\"&#2690;\",\"name\":\"WHITE FLAG\",\"char\":\"⚐\"},{\"hex\":\"&#2766;\",\"name\":\"FLORAL HEART\",\"char\":\"❦\"},{\"hex\":\"&#2619;\",\"name\":\"REVERSED ROTATED FLORAL HEART BULLET\",\"char\":\"☙\"},{\"hex\":\"&#2668;\",\"name\":\"HOT SPRINGS EMOJI\",\"char\":\"♨\"},{\"hex\":\"&#2601;\",\"name\":\"CLOUD\",\"char\":\"☁\"},{\"hex\":\"&#2696;\",\"name\":\"SCALES EMOJI\",\"char\":\"⚖\"},{\"entity\":\"&uml;\",\"hex\":\"&#00A8;\",\"name\":\"DIAERESIS\",\"char\":\"¨\"},{\"entity\":\"&not;\",\"hex\":\"&#00AC;\",\"name\":\"NOT SIGN\",\"char\":\"¬\"},{\"entity\":\"&macr;\",\"hex\":\"&#00AF;\",\"name\":\"MACRON\",\"char\":\"¯\"},{\"entity\":\"&acute;\",\"hex\":\"&#00B4;\",\"name\":\"ACUTE ACCENT\",\"char\":\"´\"},{\"entity\":\"&micro;\",\"hex\":\"&#00B5;\",\"name\":\"MICRO SIGN\",\"char\":\"µ\"},{\"entity\":\"&middot;\",\"hex\":\"&#00B7;\",\"name\":\"MIDDLE DOT\",\"char\":\"·\"},{\"entity\":\"&cedil;\",\"hex\":\"&#00B8;\",\"name\":\"CEDILLA\",\"char\":\"¸\"},{\"entity\":\"&plusmn;\",\"hex\":\"&#00B1;\",\"name\":\"PLUS-MINUS SIGN\",\"char\":\"±\"},{\"entity\":\"&sup1;\",\"hex\":\"&#00B9;\",\"name\":\"SUPERSCRIPT ONE\",\"char\":\"¹\"},{\"entity\":\"&sup2;\",\"hex\":\"&#00B2;\",\"name\":\"SUPERSCRIPT TWO\",\"char\":\"²\"},{\"entity\":\"&sup3;\",\"hex\":\"&#00B3;\",\"name\":\"SUPERSCRIPT THREE\",\"char\":\"³\"},{\"entity\":\"&deg;\",\"hex\":\"&#00B0;\",\"name\":\"DEGREE SIGN\",\"char\":\"°\"},{\"entity\":\"&ordf;\",\"hex\":\"&#00AA;\",\"name\":\"FEMININE ORDINAL INDICATOR\",\"char\":\"ª\"},{\"entity\":\"&ordm;\",\"hex\":\"&#00BA;\",\"name\":\"MASCULINE ORDINAL INDICATOR\",\"char\":\"º\"},{\"entity\":\"&frac14;\",\"hex\":\"&#00BC;\",\"name\":\"VULGAR FRACTION ONE QUARTER\",\"char\":\"¼\"},{\"entity\":\"&frac12;\",\"hex\":\"&#00BD;\",\"name\":\"VULGAR FRACTION ONE HALF\",\"char\":\"½\"},{\"entity\":\"&frac34;\",\"hex\":\"&#00BE;\",\"name\":\"VULGAR FRACTION THREE QUARTERS\",\"char\":\"¾\"},{\"entity\":\"&iquest;\",\"hex\":\"&#00BF;\",\"name\":\"INVERTED QUESTION MARK\",\"char\":\"¿\"},{\"entity\":\"&iexcl;\",\"hex\":\"&#00A1;\",\"name\":\"INVERTED EXCLAMATION MARK\",\"char\":\"¡\"},{\"entity\":\"&brvbar;\",\"hex\":\"&#00A6;\",\"name\":\"BROKEN BAR\",\"char\":\"¦\"},{\"entity\":\"&laquo;\",\"hex\":\"&#00AB;\",\"name\":\"LEFT-POINTING DOUBLE ANGLE QUOTATION MARK\",\"char\":\"«\"},{\"entity\":\"&raquo;\",\"hex\":\"&#00BB;\",\"name\":\"RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK\",\"char\":\"»\"},{\"hex\":\"&#25A0;\",\"name\":\"BLACK SQUARE\",\"char\":\"■\"},{\"hex\":\"&#25A1;\",\"name\":\"WHITE SQUARE\",\"char\":\"□\"},{\"hex\":\"&#25A2;\",\"name\":\"WHITE SQUARE WITH ROUNDED CORNERS\",\"char\":\"▢\"},{\"hex\":\"&#25A3;\",\"name\":\"WHITE SQUARE CONTAINING BLACK SMALL SQUARE\",\"char\":\"▣\"},{\"hex\":\"&#25A4;\",\"name\":\"SQUARE WITH HORIZONTAL FILL\",\"char\":\"▤\"},{\"hex\":\"&#25A5;\",\"name\":\"SQUARE WITH VERTICAL FILL\",\"char\":\"▥\"},{\"hex\":\"&#25A6;\",\"name\":\"SQUARE WITH ORTHOGONAL CROSSHATCH FILL\",\"char\":\"▦\"},{\"hex\":\"&#25A7;\",\"name\":\"SQUARE WITH UPPER LEFT TO LOWER RIGHT FILL\",\"char\":\"▧\"},{\"hex\":\"&#25A8;\",\"name\":\"SQUARE WITH UPPER RIGHT TO LOWER LEFT FILL\",\"char\":\"▨\"},{\"hex\":\"&#25A9;\",\"name\":\"SQUARE WITH DIAGONAL CROSSHATCH FILL\",\"char\":\"▩\"},{\"hex\":\"&#25AA;\",\"name\":\"BLACK SMALL SQUARE\",\"char\":\"▪\"},{\"hex\":\"&#25AB;\",\"name\":\"WHITE SMALL SQUARE\",\"char\":\"▫\"},{\"hex\":\"&#25AC;\",\"name\":\"BLACK RECTANGLE\",\"char\":\"▬\"},{\"hex\":\"&#25AD;\",\"name\":\"WHITE RECTANGLE\",\"char\":\"▭\"},{\"hex\":\"&#25AE;\",\"name\":\"BLACK VERTICAL RECTANGLE\",\"char\":\"▮\"},{\"hex\":\"&#25AF;\",\"name\":\"WHITE VERTICAL RECTANGLE\",\"char\":\"▯\"},{\"hex\":\"&#25B0;\",\"name\":\"BLACK PARALLELOGRAM\",\"char\":\"▰\"},{\"hex\":\"&#25B1;\",\"name\":\"WHITE PARALLELOGRAM\",\"char\":\"▱\"},{\"hex\":\"&#25B2;\",\"name\":\"BLACK UP-POINTING TRIANGLE\",\"char\":\"▲\"},{\"hex\":\"&#25B3;\",\"name\":\"WHITE UP-POINTING TRIANGLE\",\"char\":\"△\"},{\"hex\":\"&#25B4;\",\"name\":\"BLACK UP-POINTING SMALL TRIANGLE\",\"char\":\"▴\"},{\"hex\":\"&#25B5;\",\"name\":\"WHITE UP-POINTING SMALL TRIANGLE\",\"char\":\"▵\"},{\"hex\":\"&#25B6;\",\"name\":\"BLACK RIGHT-POINTING TRIANGLE\",\"char\":\"▶\"},{\"hex\":\"&#25B7;\",\"name\":\"WHITE RIGHT-POINTING TRIANGLE\",\"char\":\"▷\"},{\"hex\":\"&#25B8;\",\"name\":\"BLACK RIGHT-POINTING SMALL TRIANGLE\",\"char\":\"▸\"},{\"hex\":\"&#25B9;\",\"name\":\"WHITE RIGHT-POINTING SMALL TRIANGLE\",\"char\":\"▹\"},{\"hex\":\"&#25BA;\",\"name\":\"BLACK RIGHT-POINTING POINTER\",\"char\":\"►\"},{\"hex\":\"&#25BB;\",\"name\":\"WHITE RIGHT-POINTING POINTER\",\"char\":\"▻\"},{\"hex\":\"&#25BC;\",\"name\":\"BLACK DOWN-POINTING TRIANGLE\",\"char\":\"▼\"},{\"hex\":\"&#25BD;\",\"name\":\"WHITE DOWN-POINTING TRIANGLE\",\"char\":\"▽\"},{\"hex\":\"&#25BE;\",\"name\":\"BLACK DOWN-POINTING SMALL TRIANGLE\",\"char\":\"▾\"},{\"hex\":\"&#25BF;\",\"name\":\"WHITE DOWN-POINTING SMALL TRIANGLE\",\"char\":\"▿\"},{\"hex\":\"&#25C0;\",\"name\":\"BLACK LEFT-POINTING TRIANGLE\",\"char\":\"◀\"},{\"hex\":\"&#25C1;\",\"name\":\"WHITE LEFT-POINTING TRIANGLE\",\"char\":\"◁\"},{\"hex\":\"&#25C2;\",\"name\":\"BLACK LEFT-POINTING SMALL TRIANGLE\",\"char\":\"◂\"},{\"hex\":\"&#25C3;\",\"name\":\"WHITE LEFT-POINTING SMALL TRIANGLE\",\"char\":\"◃\"},{\"hex\":\"&#25C4;\",\"name\":\"BLACK LEFT-POINTING POINTER\",\"char\":\"◄\"},{\"hex\":\"&#25C5;\",\"name\":\"WHITE LEFT-POINTING POINTER\",\"char\":\"◅\"},{\"hex\":\"&#25C6;\",\"name\":\"BLACK DIAMOND\",\"char\":\"◆\"},{\"hex\":\"&#25C7;\",\"name\":\"WHITE DIAMOND\",\"char\":\"◇\"},{\"hex\":\"&#25C8;\",\"name\":\"WHITE DIAMOND CONTAINING BLACK SMALL DIAMOND\",\"char\":\"◈\"},{\"hex\":\"&#25C9;\",\"name\":\"FISHEYE\",\"char\":\"◉\"},{\"entity\":\"&loz;\",\"hex\":\"&#25CA;\",\"name\":\"LOZENGE\",\"char\":\"◊\"},{\"hex\":\"&#25CB;\",\"name\":\"WHITE CIRCLE\",\"char\":\"○\"},{\"hex\":\"&#25CC;\",\"name\":\"DOTTED CIRCLE\",\"char\":\"◌\"},{\"hex\":\"&#25CD;\",\"name\":\"CIRCLE WITH VERTICAL FILL\",\"char\":\"◍\"},{\"hex\":\"&#25CE;\",\"name\":\"BULLSEYE\",\"char\":\"◎\"},{\"hex\":\"&#25CF;\",\"name\":\"BLACK CIRCLE\",\"char\":\"●\"},{\"hex\":\"&#25D0;\",\"name\":\"CIRCLE WITH LEFT HALF BLACK\",\"char\":\"◐\"},{\"hex\":\"&#25D1;\",\"name\":\"CIRCLE WITH RIGHT HALF BLACK\",\"char\":\"◑\"},{\"hex\":\"&#25D2;\",\"name\":\"CIRCLE WITH LOWER HALF BLACK\",\"char\":\"◒\"},{\"hex\":\"&#25D3;\",\"name\":\"CIRCLE WITH UPPER HALF BLACK\",\"char\":\"◓\"},{\"hex\":\"&#25D4;\",\"name\":\"CIRCLE WITH UPPER RIGHT QUADRANT BLACK\",\"char\":\"◔\"},{\"hex\":\"&#25D5;\",\"name\":\"CIRCLE WITH ALL BUT UPPER LEFT QUADRANT BLACK\",\"char\":\"◕\"},{\"hex\":\"&#25D6;\",\"name\":\"LEFT HALF BLACK CIRCLE\",\"char\":\"◖\"},{\"hex\":\"&#25D7;\",\"name\":\"RIGHT HALF BLACK CIRCLE\",\"char\":\"◗\"},{\"hex\":\"&#25D8;\",\"name\":\"INVERSE BULLET\",\"char\":\"◘\"},{\"hex\":\"&#25D9;\",\"name\":\"INVERSE WHITE CIRCLE\",\"char\":\"◙\"},{\"hex\":\"&#25DA;\",\"name\":\"UPPER HALF INVERSE WHITE CIRCLE\",\"char\":\"◚\"},{\"hex\":\"&#25DB;\",\"name\":\"LOWER HALF INVERSE WHITE CIRCLE\",\"char\":\"◛\"},{\"hex\":\"&#25DC;\",\"name\":\"UPPER LEFT QUADRANT CIRCULAR ARC\",\"char\":\"◜\"},{\"hex\":\"&#25DD;\",\"name\":\"UPPER RIGHT QUADRANT CIRCULAR ARC\",\"char\":\"◝\"},{\"hex\":\"&#25DE;\",\"name\":\"LOWER RIGHT QUADRANT CIRCULAR ARC\",\"char\":\"◞\"},{\"hex\":\"&#25DF;\",\"name\":\"LOWER LEFT QUADRANT CIRCULAR ARC\",\"char\":\"◟\"},{\"hex\":\"&#25E0;\",\"name\":\"UPPER HALF CIRCLE\",\"char\":\"◠\"},{\"hex\":\"&#25E1;\",\"name\":\"LOWER HALF CIRCLE\",\"char\":\"◡\"},{\"hex\":\"&#25E2;\",\"name\":\"BLACK LOWER RIGHT TRIANGLE\",\"char\":\"◢\"},{\"hex\":\"&#25E3;\",\"name\":\"BLACK LOWER LEFT TRIANGLE\",\"char\":\"◣\"},{\"hex\":\"&#25E4;\",\"name\":\"BLACK UPPER LEFT TRIANGLE\",\"char\":\"◤\"},{\"hex\":\"&#25E5;\",\"name\":\"BLACK UPPER RIGHT TRIANGLE\",\"char\":\"◥\"},{\"hex\":\"&#25E6;\",\"name\":\"WHITE BULLET\",\"char\":\"◦\"},{\"hex\":\"&#25E7;\",\"name\":\"SQUARE WITH LEFT HALF BLACK\",\"char\":\"◧\"},{\"hex\":\"&#25E8;\",\"name\":\"SQUARE WITH RIGHT HALF BLACK\",\"char\":\"◨\"},{\"hex\":\"&#25E9;\",\"name\":\"SQUARE WITH UPPER LEFT DIAGONAL HALF BLACK\",\"char\":\"◩\"},{\"hex\":\"&#25EA;\",\"name\":\"SQUARE WITH LOWER RIGHT DIAGONAL HALF BLACK\",\"char\":\"◪\"},{\"hex\":\"&#25EB;\",\"name\":\"WHITE SQUARE WITH VERTICAL BISECTING LINE\",\"char\":\"◫\"},{\"hex\":\"&#25EC;\",\"name\":\"WHITE UP-POINTING TRIANGLE WITH DOT\",\"char\":\"◬\"},{\"hex\":\"&#25ED;\",\"name\":\"UP-POINTING TRIANGLE WITH LEFT HALF BLACK\",\"char\":\"◭\"},{\"hex\":\"&#25EE;\",\"name\":\"UP-POINTING TRIANGLE WITH RIGHT HALF BLACK\",\"char\":\"◮\"},{\"hex\":\"&#25EF;\",\"name\":\"LARGE CIRCLE\",\"char\":\"◯\"},{\"hex\":\"&#25F0;\",\"name\":\"WHITE SQUARE WITH UPPER LEFT QUADRANT\",\"char\":\"◰\"},{\"hex\":\"&#25F1;\",\"name\":\"WHITE SQUARE WITH LOWER LEFT QUADRANT\",\"char\":\"◱\"},{\"hex\":\"&#25F2;\",\"name\":\"WHITE SQUARE WITH LOWER RIGHT QUADRANT\",\"char\":\"◲\"},{\"hex\":\"&#25F3;\",\"name\":\"WHITE SQUARE WITH UPPER RIGHT QUADRANT\",\"char\":\"◳\"},{\"hex\":\"&#25F4;\",\"name\":\"WHITE CIRCLE WITH UPPER LEFT QUADRANT\",\"char\":\"◴\"},{\"hex\":\"&#25F5;\",\"name\":\"WHITE CIRCLE WITH LOWER LEFT QUADRANT\",\"char\":\"◵\"},{\"hex\":\"&#25F6;\",\"name\":\"WHITE CIRCLE WITH LOWER RIGHT QUADRANT\",\"char\":\"◶\"},{\"hex\":\"&#25F7;\",\"name\":\"WHITE CIRCLE WITH UPPER RIGHT QUADRANT\",\"char\":\"◷\"},{\"hex\":\"&#25F8;\",\"name\":\"UPPER LEFT TRIANGLE\",\"char\":\"◸\"},{\"hex\":\"&#25F9;\",\"name\":\"UPPER RIGHT TRIANGLE\",\"char\":\"◹\"},{\"hex\":\"&#25FA;\",\"name\":\"LOWER LEFT TRIANGLE\",\"char\":\"◺\"},{\"hex\":\"&#25FB;\",\"name\":\"WHITE MEDIUM SQUARE\",\"char\":\"◻\"},{\"hex\":\"&#25FC;\",\"name\":\"BLACK MEDIUM SQUARE\",\"char\":\"◼\"},{\"hex\":\"&#25FD;\",\"name\":\"WHITE MEDIUM SMALL SQUARE\",\"char\":\"◽\"},{\"hex\":\"&#25FE;\",\"name\":\"BLACK MEDIUM SMALL SQUARE\",\"char\":\"◾\"},{\"hex\":\"&#25FF;\",\"name\":\"LOWER RIGHT TRIANGLE\",\"char\":\"◿\"},{\"hex\":\"&#2B12;\",\"name\":\"SQUARE WITH TOP HALF BLACK\",\"char\":\"⬒\"},{\"hex\":\"&#2B13;\",\"name\":\"SQUARE WITH BOTTOM HALF BLACK\",\"char\":\"⬓\"},{\"hex\":\"&#2B14;\",\"name\":\"SQUARE WITH UPPER RIGHT DIAGONAL HALF BLACK\",\"char\":\"⬔\"},{\"hex\":\"&#2B15;\",\"name\":\"SQUARE WITH LOWER LEFT DIAGONAL HALF BLACK\",\"char\":\"⬕\"},{\"hex\":\"&#2B16;\",\"name\":\"DIAMOND WITH LEFT HALF BLACK\",\"char\":\"⬖\"},{\"hex\":\"&#2B17;\",\"name\":\"DIAMOND WITH RIGHT HALF BLACK\",\"char\":\"⬗\"},{\"hex\":\"&#2B18;\",\"name\":\"DIAMOND WITH TOP HALF BLACK\",\"char\":\"⬘\"},{\"hex\":\"&#2B19;\",\"name\":\"DIAMOND WITH BOTTOM HALF BLACK\",\"char\":\"⬙\"},{\"hex\":\"&#2B1A;\",\"name\":\"DOTTED SQUARE\",\"char\":\"⬚\"},{\"hex\":\"&#2B1F;\",\"name\":\"BLACK PENTAGON\",\"char\":\"⬟\"},{\"hex\":\"&#2B20;\",\"name\":\"WHITE PENTAGON\",\"char\":\"⬠\"},{\"hex\":\"&#2B21;\",\"name\":\"WHITE HEXAGON\",\"char\":\"⬡\"},{\"hex\":\"&#2B22;\",\"name\":\"BLACK HEXAGON\",\"char\":\"⬢\"},{\"hex\":\"&#2B23;\",\"name\":\"HORIZONTAL BLACK HEXAGON\",\"char\":\"⬣\"},{\"hex\":\"&#2B24;\",\"name\":\"BLACK LARGE CIRCLE\",\"char\":\"⬤\"},{\"hex\":\"&#2B53;\",\"name\":\"BLACK RIGHT-POINTING PENTAGON\",\"char\":\"⭓\"},{\"hex\":\"&#2B54;\",\"name\":\"WHITE RIGHT-POINTING PENTAGON\",\"char\":\"⭔\"},{\"hex\":\"&#2600;\",\"name\":\"BLACK SUN WITH RAYS\",\"char\":\"☀\"},{\"hex\":\"&#2601;\",\"name\":\"CLOUD\",\"char\":\"☁\"},{\"hex\":\"&#2602;\",\"name\":\"UMBRELLA\",\"char\":\"☂\"},{\"hex\":\"&#2603;\",\"name\":\"SNOWMAN\",\"char\":\"☃\"},{\"hex\":\"&#2604;\",\"name\":\"COMET\",\"char\":\"☄\"},{\"hex\":\"&#2605;\",\"name\":\"BLACK STAR\",\"char\":\"★\"},{\"hex\":\"&#2606;\",\"name\":\"WHITE STAR\",\"char\":\"☆\"},{\"hex\":\"&#2607;\",\"name\":\"LIGHTNING\",\"char\":\"☇\"},{\"hex\":\"&#2608;\",\"name\":\"THUNDERSTORM\",\"char\":\"☈\"},{\"hex\":\"&#2609;\",\"name\":\"SUN\",\"char\":\"☉\"},{\"hex\":\"&#260A;\",\"name\":\"ASCENDING NODE\",\"char\":\"☊\"},{\"hex\":\"&#260B;\",\"name\":\"DESCENDING NODE\",\"char\":\"☋\"},{\"hex\":\"&#260C;\",\"name\":\"CONJUNCTION\",\"char\":\"☌\"},{\"hex\":\"&#260D;\",\"name\":\"OPPOSITION\",\"char\":\"☍\"},{\"hex\":\"&#260E;\",\"name\":\"BLACK TELEPHONE\",\"char\":\"☎\"},{\"hex\":\"&#260F;\",\"name\":\"WHITE TELEPHONE\",\"char\":\"☏\"},{\"hex\":\"&#2610;\",\"name\":\"BALLOT BOX\",\"char\":\"☐\"},{\"hex\":\"&#2611;\",\"name\":\"BALLOT BOX WITH CHECK\",\"char\":\"☑\"},{\"hex\":\"&#2612;\",\"name\":\"BALLOT BOX WITH X\",\"char\":\"☒\"},{\"hex\":\"&#2613;\",\"name\":\"SALTIRE\",\"char\":\"☓\"},{\"hex\":\"&#2614;\",\"name\":\"UMBRELLA WITH RAIN DROPS\",\"char\":\"☔\"},{\"hex\":\"&#2615;\",\"name\":\"HOT BEVERAGE\",\"char\":\"☕\"},{\"hex\":\"&#2616;\",\"name\":\"WHITE SHOGI PIECE\",\"char\":\"☖\"},{\"hex\":\"&#2617;\",\"name\":\"BLACK SHOGI PIECE\",\"char\":\"☗\"},{\"hex\":\"&#2618;\",\"name\":\"SHAMROCK\",\"char\":\"☘\"},{\"hex\":\"&#2619;\",\"name\":\"REVERSED ROTATED FLORAL HEART BULLET\",\"char\":\"☙\"},{\"hex\":\"&#261A;\",\"name\":\"BLACK LEFT POINTING INDEX\",\"char\":\"☚\"},{\"hex\":\"&#261B;\",\"name\":\"BLACK RIGHT POINTING INDEX\",\"char\":\"☛\"},{\"hex\":\"&#261C;\",\"name\":\"WHITE LEFT POINTING INDEX\",\"char\":\"☜\"},{\"hex\":\"&#261D;\",\"name\":\"WHITE UP POINTING INDEX\",\"char\":\"☝\"},{\"hex\":\"&#261E;\",\"name\":\"WHITE RIGHT POINTING INDEX\",\"char\":\"☞\"},{\"hex\":\"&#261F;\",\"name\":\"WHITE DOWN POINTING INDEX\",\"char\":\"☟\"},{\"hex\":\"&#2620;\",\"name\":\"SKULL AND CROSSBONES\",\"char\":\"☠\"},{\"hex\":\"&#2621;\",\"name\":\"CAUTION SIGN\",\"char\":\"☡\"},{\"hex\":\"&#2622;\",\"name\":\"RADIOACTIVE SIGN\",\"char\":\"☢\"},{\"hex\":\"&#2623;\",\"name\":\"BIOHAZARD SIGN\",\"char\":\"☣\"},{\"hex\":\"&#2624;\",\"name\":\"CADUCEUS\",\"char\":\"☤\"},{\"hex\":\"&#2625;\",\"name\":\"ANKH\",\"char\":\"☥\"},{\"hex\":\"&#2626;\",\"name\":\"ORTHODOX CROSS\",\"char\":\"☦\"},{\"hex\":\"&#2627;\",\"name\":\"CHI RHO\",\"char\":\"☧\"},{\"hex\":\"&#2628;\",\"name\":\"CROSS OF LORRAINE\",\"char\":\"☨\"},{\"hex\":\"&#2629;\",\"name\":\"CROSS OF JERUSALEM\",\"char\":\"☩\"},{\"hex\":\"&#262A;\",\"name\":\"STAR AND CRESCENT\",\"char\":\"☪\"},{\"hex\":\"&#262B;\",\"name\":\"FARSI SYMBOL\",\"char\":\"☫\"},{\"hex\":\"&#262C;\",\"name\":\"ADI SHAKTI\",\"char\":\"☬\"},{\"hex\":\"&#262D;\",\"name\":\"HAMMER AND SICKLE\",\"char\":\"☭\"},{\"hex\":\"&#262E;\",\"name\":\"PEACE SYMBOL\",\"char\":\"☮\"},{\"hex\":\"&#262F;\",\"name\":\"YIN YANG\",\"char\":\"☯\"},{\"hex\":\"&#2630;\",\"name\":\"TRIGRAM FOR HEAVEN\",\"char\":\"☰\"},{\"hex\":\"&#2631;\",\"name\":\"TRIGRAM FOR LAKE\",\"char\":\"☱\"},{\"hex\":\"&#2632;\",\"name\":\"TRIGRAM FOR FIRE\",\"char\":\"☲\"},{\"hex\":\"&#2633;\",\"name\":\"TRIGRAM FOR THUNDER\",\"char\":\"☳\"},{\"hex\":\"&#2634;\",\"name\":\"TRIGRAM FOR WIND\",\"char\":\"☴\"},{\"hex\":\"&#2635;\",\"name\":\"TRIGRAM FOR WATER\",\"char\":\"☵\"},{\"hex\":\"&#2636;\",\"name\":\"TRIGRAM FOR MOUNTAIN\",\"char\":\"☶\"},{\"hex\":\"&#2637;\",\"name\":\"TRIGRAM FOR EARTH\",\"char\":\"☷\"},{\"hex\":\"&#2638;\",\"name\":\"WHEEL OF DHARMA\",\"char\":\"☸\"},{\"hex\":\"&#2639;\",\"name\":\"WHITE FROWNING FACE\",\"char\":\"☹\"},{\"hex\":\"&#263A;\",\"name\":\"WHITE SMILING FACE\",\"char\":\"☺\"},{\"hex\":\"&#263B;\",\"name\":\"BLACK SMILING FACE\",\"char\":\"☻\"},{\"hex\":\"&#263C;\",\"name\":\"WHITE SUN WITH RAYS\",\"char\":\"☼\"},{\"hex\":\"&#263D;\",\"name\":\"FIRST QUARTER MOON\",\"char\":\"☽\"},{\"hex\":\"&#263E;\",\"name\":\"LAST QUARTER MOON\",\"char\":\"☾\"},{\"hex\":\"&#263F;\",\"name\":\"MERCURY\",\"char\":\"☿\"},{\"hex\":\"&#2640;\",\"name\":\"FEMALE SIGN\",\"char\":\"♀\"},{\"hex\":\"&#2641;\",\"name\":\"EARTH\",\"char\":\"♁\"},{\"hex\":\"&#2642;\",\"name\":\"MALE SIGN\",\"char\":\"♂\"},{\"hex\":\"&#2643;\",\"name\":\"JUPITER\",\"char\":\"♃\"},{\"hex\":\"&#2644;\",\"name\":\"SATURN\",\"char\":\"♄\"},{\"hex\":\"&#2645;\",\"name\":\"URANUS\",\"char\":\"♅\"},{\"hex\":\"&#2646;\",\"name\":\"NEPTUNE\",\"char\":\"♆\"},{\"hex\":\"&#2647;\",\"name\":\"PLUTO\",\"char\":\"♇\"},{\"hex\":\"&#2648;\",\"name\":\"ARIES\",\"char\":\"♈\"},{\"hex\":\"&#2649;\",\"name\":\"TAURUS\",\"char\":\"♉\"},{\"hex\":\"&#264A;\",\"name\":\"GEMINI\",\"char\":\"♊\"},{\"hex\":\"&#264B;\",\"name\":\"CANCER\",\"char\":\"♋\"},{\"hex\":\"&#264C;\",\"name\":\"LEO\",\"char\":\"♌\"},{\"hex\":\"&#264D;\",\"name\":\"VIRGO\",\"char\":\"♍\"},{\"hex\":\"&#264E;\",\"name\":\"LIBRA\",\"char\":\"♎\"},{\"hex\":\"&#264F;\",\"name\":\"SCORPIUS\",\"char\":\"♏\"},{\"hex\":\"&#2650;\",\"name\":\"SAGITTARIUS\",\"char\":\"♐\"},{\"hex\":\"&#2651;\",\"name\":\"CAPRICORN\",\"char\":\"♑\"},{\"hex\":\"&#2652;\",\"name\":\"AQUARIUS\",\"char\":\"♒\"},{\"hex\":\"&#2653;\",\"name\":\"PISCES\",\"char\":\"♓\"},{\"hex\":\"&#2654;\",\"name\":\"WHITE CHESS KING\",\"char\":\"♔\"},{\"hex\":\"&#2655;\",\"name\":\"WHITE CHESS QUEEN\",\"char\":\"♕\"},{\"hex\":\"&#2656;\",\"name\":\"WHITE CHESS ROOK\",\"char\":\"♖\"},{\"hex\":\"&#2657;\",\"name\":\"WHITE CHESS BISHOP\",\"char\":\"♗\"},{\"hex\":\"&#2658;\",\"name\":\"WHITE CHESS KNIGHT\",\"char\":\"♘\"},{\"hex\":\"&#2659;\",\"name\":\"WHITE CHESS PAWN\",\"char\":\"♙\"},{\"hex\":\"&#265A;\",\"name\":\"BLACK CHESS KING\",\"char\":\"♚\"},{\"hex\":\"&#265B;\",\"name\":\"BLACK CHESS QUEEN\",\"char\":\"♛\"},{\"hex\":\"&#265C;\",\"name\":\"BLACK CHESS ROOK\",\"char\":\"♜\"},{\"hex\":\"&#265D;\",\"name\":\"BLACK CHESS BISHOP\",\"char\":\"♝\"},{\"hex\":\"&#265E;\",\"name\":\"BLACK CHESS KNIGHT\",\"char\":\"♞\"},{\"hex\":\"&#265F;\",\"name\":\"BLACK CHESS PAWN\",\"char\":\"♟\"},{\"hex\":\"&#2660;\",\"entity\":\"&spades;\",\"name\":\"BLACK SPADE SUIT\",\"char\":\"♠\"},{\"hex\":\"&#2661;\",\"name\":\"WHITE HEART SUIT\",\"char\":\"♡\"},{\"hex\":\"&#2662;\",\"name\":\"WHITE DIAMOND SUIT\",\"char\":\"♢\"},{\"hex\":\"&#2663;\",\"entity\":\"&clubs;\",\"name\":\"BLACK CLUB SUIT\",\"char\":\"♣\"},{\"hex\":\"&#2664;\",\"name\":\"WHITE SPADE SUIT\",\"char\":\"♤\"},{\"hex\":\"&#2665;\",\"entity\":\"&hearts;\",\"name\":\"BLACK HEART SUIT\",\"char\":\"♥\"},{\"hex\":\"&#2666;\",\"entity\":\"&diams;\",\"name\":\"BLACK DIAMOND SUIT\",\"char\":\"♦\"},{\"hex\":\"&#2667;\",\"name\":\"WHITE CLUB SUIT\",\"char\":\"♧\"},{\"hex\":\"&#2668;\",\"name\":\"HOT SPRINGS\",\"char\":\"♨\"},{\"hex\":\"&#2669;\",\"name\":\"QUARTER NOTE\",\"char\":\"♩\"},{\"hex\":\"&#266A;\",\"name\":\"EIGHTH NOTE\",\"char\":\"♪\"},{\"hex\":\"&#266B;\",\"name\":\"BEAMED EIGHTH NOTES\",\"char\":\"♫\"},{\"hex\":\"&#266C;\",\"name\":\"BEAMED SIXTEENTH NOTES\",\"char\":\"♬\"},{\"hex\":\"&#266D;\",\"name\":\"MUSIC FLAT SIGN\",\"char\":\"♭\"},{\"hex\":\"&#266E;\",\"name\":\"MUSIC NATURAL SIGN\",\"char\":\"♮\"},{\"hex\":\"&#266F;\",\"name\":\"MUSIC SHARP SIGN\",\"char\":\"♯\"},{\"hex\":\"&#2670;\",\"name\":\"WEST SYRIAC CROSS\",\"char\":\"♰\"},{\"hex\":\"&#2671;\",\"name\":\"EAST SYRIAC CROSS\",\"char\":\"♱\"},{\"hex\":\"&#2672;\",\"name\":\"UNIVERSAL RECYCLING SYMBOL\",\"char\":\"♲\"},{\"hex\":\"&#2673;\",\"name\":\"RECYCLING SYMBOL FOR TYPE-1 PLASTICS\",\"char\":\"♳\"},{\"hex\":\"&#2674;\",\"name\":\"RECYCLING SYMBOL FOR TYPE-2 PLASTICS\",\"char\":\"♴\"},{\"hex\":\"&#2675;\",\"name\":\"RECYCLING SYMBOL FOR TYPE-3 PLASTICS\",\"char\":\"♵\"},{\"hex\":\"&#2676;\",\"name\":\"RECYCLING SYMBOL FOR TYPE-4 PLASTICS\",\"char\":\"♶\"},{\"hex\":\"&#2677;\",\"name\":\"RECYCLING SYMBOL FOR TYPE-5 PLASTICS\",\"char\":\"♷\"},{\"hex\":\"&#2678;\",\"name\":\"RECYCLING SYMBOL FOR TYPE-6 PLASTICS\",\"char\":\"♸\"},{\"hex\":\"&#2679;\",\"name\":\"RECYCLING SYMBOL FOR TYPE-7 PLASTICS\",\"char\":\"♹\"},{\"hex\":\"&#267A;\",\"name\":\"RECYCLING SYMBOL FOR GENERIC MATERIALS\",\"char\":\"♺\"},{\"hex\":\"&#267B;\",\"name\":\"BLACK UNIVERSAL RECYCLING SYMBOL\",\"char\":\"♻\"},{\"hex\":\"&#267C;\",\"name\":\"RECYCLED PAPER SYMBOL\",\"char\":\"♼\"},{\"hex\":\"&#267D;\",\"name\":\"PARTIALLY-RECYCLED PAPER SYMBOL\",\"char\":\"♽\"},{\"hex\":\"&#267E;\",\"name\":\"PERMANENT PAPER SIGN\",\"char\":\"♾\"},{\"hex\":\"&#267F;\",\"name\":\"WHEELCHAIR SYMBOL\",\"char\":\"♿\"},{\"hex\":\"&#2680;\",\"name\":\"DIE FACE-1\",\"char\":\"⚀\"},{\"hex\":\"&#2681;\",\"name\":\"DIE FACE-2\",\"char\":\"⚁\"},{\"hex\":\"&#2682;\",\"name\":\"DIE FACE-3\",\"char\":\"⚂\"},{\"hex\":\"&#2683;\",\"name\":\"DIE FACE-4\",\"char\":\"⚃\"},{\"hex\":\"&#2684;\",\"name\":\"DIE FACE-5\",\"char\":\"⚄\"},{\"hex\":\"&#2685;\",\"name\":\"DIE FACE-6\",\"char\":\"⚅\"},{\"hex\":\"&#2686;\",\"name\":\"WHITE CIRCLE WITH DOT RIGHT\",\"char\":\"⚆\"},{\"hex\":\"&#2687;\",\"name\":\"WHITE CIRCLE WITH TWO DOTS\",\"char\":\"⚇\"},{\"hex\":\"&#2688;\",\"name\":\"BLACK CIRCLE WITH WHITE DOT RIGHT\",\"char\":\"⚈\"},{\"hex\":\"&#2689;\",\"name\":\"BLACK CIRCLE WITH TWO WHITE DOTS\",\"char\":\"⚉\"},{\"hex\":\"&#268A;\",\"name\":\"MONOGRAM FOR YANG\",\"char\":\"⚊\"},{\"hex\":\"&#268B;\",\"name\":\"MONOGRAM FOR YIN\",\"char\":\"⚋\"},{\"hex\":\"&#268C;\",\"name\":\"DIGRAM FOR GREATER YANG\",\"char\":\"⚌\"},{\"hex\":\"&#268D;\",\"name\":\"DIGRAM FOR LESSER YIN\",\"char\":\"⚍\"},{\"hex\":\"&#268E;\",\"name\":\"DIGRAM FOR LESSER YANG\",\"char\":\"⚎\"},{\"hex\":\"&#268F;\",\"name\":\"DIGRAM FOR GREATER YIN\",\"char\":\"⚏\"},{\"hex\":\"&#2690;\",\"name\":\"WHITE FLAG\",\"char\":\"⚐\"},{\"hex\":\"&#2691;\",\"name\":\"BLACK FLAG\",\"char\":\"⚑\"},{\"hex\":\"&#2692;\",\"name\":\"HAMMER AND PICK\",\"char\":\"⚒\"},{\"hex\":\"&#2693;\",\"name\":\"ANCHOR\",\"char\":\"⚓\"},{\"hex\":\"&#2694;\",\"name\":\"CROSSED SWORDS\",\"char\":\"⚔\"},{\"hex\":\"&#2695;\",\"name\":\"STAFF OF AESCULAPIUS\",\"char\":\"⚕\"},{\"hex\":\"&#2696;\",\"name\":\"SCALES\",\"char\":\"⚖\"},{\"hex\":\"&#2697;\",\"name\":\"ALEMBIC\",\"char\":\"⚗\"},{\"hex\":\"&#2698;\",\"name\":\"FLOWER\",\"char\":\"⚘\"},{\"hex\":\"&#2699;\",\"name\":\"GEAR\",\"char\":\"⚙\"},{\"hex\":\"&#269A;\",\"name\":\"STAFF OF HERMES\",\"char\":\"⚚\"},{\"hex\":\"&#269B;\",\"name\":\"ATOM SYMBOL\",\"char\":\"⚛\"},{\"hex\":\"&#269C;\",\"name\":\"FLEUR-DE-LIS\",\"char\":\"⚜\"},{\"hex\":\"&#26A0;\",\"name\":\"WARNING SIGN\",\"char\":\"⚠\"},{\"hex\":\"&#26A1;\",\"name\":\"HIGH VOLTAGE SIGN\",\"char\":\"⚡\"},{\"hex\":\"&#26A2;\",\"name\":\"DOUBLED FEMALE SIGN\",\"char\":\"⚢\"},{\"hex\":\"&#26A3;\",\"name\":\"DOUBLED MALE SIGN\",\"char\":\"⚣\"},{\"hex\":\"&#26A4;\",\"name\":\"INTERLOCKED FEMALE AND MALE SIGN\",\"char\":\"⚤\"},{\"hex\":\"&#26A5;\",\"name\":\"MALE AND FEMALE SIGN\",\"char\":\"⚥\"},{\"hex\":\"&#26A6;\",\"name\":\"MALE WITH STROKE SIGN\",\"char\":\"⚦\"},{\"hex\":\"&#26A7;\",\"name\":\"MALE WITH STROKE AND MALE AND FEMALE SIGN\",\"char\":\"⚧\"},{\"hex\":\"&#26A8;\",\"name\":\"VERTICAL MALE WITH STROKE SIGN\",\"char\":\"⚨\"},{\"hex\":\"&#26A9;\",\"name\":\"HORIZONTAL MALE WITH STROKE SIGN\",\"char\":\"⚩\"},{\"hex\":\"&#26AA;\",\"name\":\"MEDIUM WHITE CIRCLE\",\"char\":\"⚪\"},{\"hex\":\"&#26AB;\",\"name\":\"MEDIUM BLACK CIRCLE\",\"char\":\"⚫\"},{\"hex\":\"&#26AC;\",\"name\":\"MEDIUM SMALL WHITE CIRCLE\",\"char\":\"⚬\"},{\"hex\":\"&#26AD;\",\"name\":\"MARRIAGE SYMBOL\",\"char\":\"⚭\"},{\"hex\":\"&#26AE;\",\"name\":\"DIVORCE SYMBOL\",\"char\":\"⚮\"},{\"hex\":\"&#26AF;\",\"name\":\"UNMARRIED PARTNERSHIP SYMBOL\",\"char\":\"⚯\"},{\"hex\":\"&#26B0;\",\"name\":\"COFFIN\",\"char\":\"⚰\"},{\"hex\":\"&#26B1;\",\"name\":\"FUNERAL URN\",\"char\":\"⚱\"},{\"hex\":\"&#26B2;\",\"name\":\"NEUTER\",\"char\":\"⚲\"},{\"entity\":\"&#9907;\",\"hex\":\"&#26B3;\",\"name\":\"CERES\",\"char\":\"⚳\"},{\"hex\":\"&#26B4;\",\"name\":\"PALLAS\",\"char\":\"⚴\"},{\"hex\":\"&#26B5;\",\"name\":\"JUNO\",\"char\":\"⚵\"},{\"hex\":\"&#26B6;\",\"name\":\"VESTA\",\"char\":\"⚶\"},{\"hex\":\"&#26B7;\",\"name\":\"CHIRON\",\"char\":\"⚷\"},{\"hex\":\"&#26B8;\",\"name\":\"BLACK MOON LILITH\",\"char\":\"⚸\"},{\"hex\":\"&#2701;\",\"name\":\"UPPER BLADE SCISSORS\",\"char\":\"✁\"},{\"hex\":\"&#2702;\",\"name\":\"BLACK SCISSORS\",\"char\":\"✂\"},{\"hex\":\"&#2703;\",\"name\":\"LOWER BLADE SCISSORS\",\"char\":\"✃\"},{\"hex\":\"&#2704;\",\"name\":\"WHITE SCISSORS\",\"char\":\"✄\"},{\"hex\":\"&#2706;\",\"name\":\"TELEPHONE LOCATION SIGN\",\"char\":\"✆\"},{\"hex\":\"&#2707;\",\"name\":\"TAPE DRIVE\",\"char\":\"✇\"},{\"hex\":\"&#2708;\",\"name\":\"AIRPLANE\",\"char\":\"✈\"},{\"hex\":\"&#2709;\",\"name\":\"ENVELOPE\",\"char\":\"✉\"},{\"hex\":\"&#270C;\",\"name\":\"VICTORY HAND\",\"char\":\"✌\"},{\"hex\":\"&#270D;\",\"name\":\"WRITING HAND\",\"char\":\"✍\"},{\"hex\":\"&#270E;\",\"name\":\"LOWER RIGHT PENCIL\",\"char\":\"✎\"},{\"hex\":\"&#270F;\",\"name\":\"PENCIL\",\"char\":\"✏\"},{\"hex\":\"&#2710;\",\"name\":\"UPPER RIGHT PENCIL\",\"char\":\"✐\"},{\"hex\":\"&#2711;\",\"name\":\"WHITE NIB\",\"char\":\"✑\"},{\"hex\":\"&#2712;\",\"name\":\"BLACK NIB\",\"char\":\"✒\"},{\"hex\":\"&#2713;\",\"name\":\"CHECK MARK\",\"char\":\"✓\"},{\"hex\":\"&#2714;\",\"name\":\"HEAVY CHECK MARK\",\"char\":\"✔\"},{\"hex\":\"&#2715;\",\"name\":\"MULTIPLICATION X\",\"char\":\"✕\"},{\"hex\":\"&#2716;\",\"name\":\"HEAVY MULTIPLICATION X\",\"char\":\"✖\"},{\"hex\":\"&#2717;\",\"name\":\"BALLOT X\",\"char\":\"✗\"},{\"hex\":\"&#2718;\",\"name\":\"HEAVY BALLOT X\",\"char\":\"✘\"},{\"hex\":\"&#2719;\",\"name\":\"OUTLINED GREEK CROSS\",\"char\":\"✙\"},{\"hex\":\"&#271A;\",\"name\":\"HEAVY GREEK CROSS\",\"char\":\"✚\"},{\"hex\":\"&#271B;\",\"name\":\"OPEN CENTRE CROSS\",\"char\":\"✛\"},{\"hex\":\"&#271C;\",\"name\":\"HEAVY OPEN CENTRE CROSS\",\"char\":\"✜\"},{\"hex\":\"&#271D;\",\"name\":\"LATIN CROSS\",\"char\":\"✝\"},{\"hex\":\"&#271E;\",\"name\":\"SHADOWED WHITE LATIN CROSS\",\"char\":\"✞\"},{\"hex\":\"&#271F;\",\"name\":\"OUTLINED LATIN CROSS\",\"char\":\"✟\"},{\"hex\":\"&#2720;\",\"name\":\"MALTESE CROSS\",\"char\":\"✠\"},{\"hex\":\"&#2721;\",\"name\":\"STAR OF DAVID\",\"char\":\"✡\"},{\"hex\":\"&#2722;\",\"name\":\"FOUR TEARDROP-SPOKED ASTERISK\",\"char\":\"✢\"},{\"hex\":\"&#2723;\",\"name\":\"FOUR BALLOON-SPOKED ASTERISK\",\"char\":\"✣\"},{\"hex\":\"&#2724;\",\"name\":\"HEAVY FOUR BALLOON-SPOKED ASTERISK\",\"char\":\"✤\"},{\"hex\":\"&#2725;\",\"name\":\"FOUR CLUB-SPOKED ASTERISK\",\"char\":\"✥\"},{\"hex\":\"&#2726;\",\"name\":\"BLACK FOUR POINTED STAR\",\"char\":\"✦\"},{\"hex\":\"&#2727;\",\"name\":\"WHITE FOUR POINTED STAR\",\"char\":\"✧\"},{\"hex\":\"&#2729;\",\"name\":\"STRESS OUTLINED WHITE STAR\",\"char\":\"✩\"},{\"hex\":\"&#272A;\",\"name\":\"CIRCLED WHITE STAR\",\"char\":\"✪\"},{\"hex\":\"&#272B;\",\"name\":\"OPEN CENTRE BLACK STAR\",\"char\":\"✫\"},{\"hex\":\"&#272C;\",\"name\":\"BLACK CENTRE WHITE STAR\",\"char\":\"✬\"},{\"hex\":\"&#272D;\",\"name\":\"OUTLINED BLACK STAR\",\"char\":\"✭\"},{\"hex\":\"&#272E;\",\"name\":\"HEAVY OUTLINED BLACK STAR\",\"char\":\"✮\"},{\"hex\":\"&#272F;\",\"name\":\"PINWHEEL STAR\",\"char\":\"✯\"},{\"hex\":\"&#2730;\",\"name\":\"SHADOWED WHITE STAR\",\"char\":\"✰\"},{\"hex\":\"&#2731;\",\"name\":\"HEAVY ASTERISK\",\"char\":\"✱\"},{\"hex\":\"&#2732;\",\"name\":\"OPEN CENTRE ASTERISK\",\"char\":\"✲\"},{\"hex\":\"&#2733;\",\"name\":\"EIGHT SPOKED ASTERISK\",\"char\":\"✳\"},{\"hex\":\"&#2734;\",\"name\":\"EIGHT POINTED BLACK STAR\",\"char\":\"✴\"},{\"hex\":\"&#2735;\",\"name\":\"EIGHT POINTED PINWHEEL STAR\",\"char\":\"✵\"},{\"hex\":\"&#2736;\",\"name\":\"SIX POINTED BLACK STAR\",\"char\":\"✶\"},{\"hex\":\"&#2737;\",\"name\":\"EIGHT POINTED RECTILINEAR BLACK STAR\",\"char\":\"✷\"},{\"hex\":\"&#2738;\",\"name\":\"HEAVY EIGHT POINTED RECTILINEAR BLACK STAR\",\"char\":\"✸\"},{\"hex\":\"&#2739;\",\"name\":\"TWELVE POINTED BLACK STAR\",\"char\":\"✹\"},{\"hex\":\"&#273A;\",\"name\":\"SIXTEEN POINTED ASTERISK\",\"char\":\"✺\"},{\"hex\":\"&#273B;\",\"name\":\"TEARDROP-SPOKED ASTERISK\",\"char\":\"✻\"},{\"hex\":\"&#273C;\",\"name\":\"OPEN CENTRE TEARDROP-SPOKED ASTERISK\",\"char\":\"✼\"},{\"hex\":\"&#273D;\",\"name\":\"HEAVY TEARDROP-SPOKED ASTERISK\",\"char\":\"✽\"},{\"hex\":\"&#273E;\",\"name\":\"SIX PETALLED BLACK AND WHITE FLORETTE\",\"char\":\"✾\"},{\"hex\":\"&#273F;\",\"name\":\"BLACK FLORETTE\",\"char\":\"✿\"},{\"hex\":\"&#2740;\",\"name\":\"WHITE FLORETTE\",\"char\":\"❀\"},{\"hex\":\"&#2741;\",\"name\":\"EIGHT PETALLED OUTLINED BLACK FLORETTE\",\"char\":\"❁\"},{\"hex\":\"&#2742;\",\"name\":\"CIRCLED OPEN CENTRE EIGHT POINTED STAR\",\"char\":\"❂\"},{\"hex\":\"&#2743;\",\"name\":\"HEAVY TEARDROP-SPOKED PINWHEEL ASTERISK\",\"char\":\"❃\"},{\"hex\":\"&#2744;\",\"name\":\"SNOWFLAKE\",\"char\":\"❄\"},{\"hex\":\"&#2745;\",\"name\":\"TIGHT TRIFOLIATE SNOWFLAKE\",\"char\":\"❅\"},{\"hex\":\"&#2746;\",\"name\":\"HEAVY CHEVRON SNOWFLAKE\",\"char\":\"❆\"},{\"hex\":\"&#2747;\",\"name\":\"SPARKLE\",\"char\":\"❇\"},{\"hex\":\"&#2748;\",\"name\":\"HEAVY SPARKLE\",\"char\":\"❈\"},{\"hex\":\"&#2749;\",\"name\":\"BALLOON-SPOKED ASTERISK\",\"char\":\"❉\"},{\"hex\":\"&#274A;\",\"name\":\"EIGHT TEARDROP-SPOKED PROPELLER ASTERISK\",\"char\":\"❊\"},{\"hex\":\"&#274B;\",\"name\":\"HEAVY EIGHT TEARDROP-SPOKED PROPELLER ASTERISK\",\"char\":\"❋\"},{\"hex\":\"&#274D;\",\"name\":\"SHADOWED WHITE CIRCLE\",\"char\":\"❍\"},{\"hex\":\"&#274F;\",\"name\":\"LOWER RIGHT DROP-SHADOWED WHITE SQUARE\",\"char\":\"❏\"},{\"hex\":\"&#2750;\",\"name\":\"UPPER RIGHT DROP-SHADOWED WHITE SQUARE\",\"char\":\"❐\"},{\"hex\":\"&#2751;\",\"name\":\"LOWER RIGHT SHADOWED WHITE SQUARE\",\"char\":\"❑\"},{\"hex\":\"&#2752;\",\"name\":\"UPPER RIGHT SHADOWED WHITE SQUARE\",\"char\":\"❒\"},{\"hex\":\"&#2756;\",\"name\":\"BLACK DIAMOND MINUS WHITE X\",\"char\":\"❖\"},{\"hex\":\"&#2758;\",\"name\":\"LIGHT VERTICAL BAR\",\"char\":\"❘\"},{\"hex\":\"&#2759;\",\"name\":\"MEDIUM VERTICAL BAR\",\"char\":\"❙\"},{\"hex\":\"&#275A;\",\"name\":\"HEAVY VERTICAL BAR\",\"char\":\"❚\"},{\"hex\":\"&#275B;\",\"name\":\"HEAVY SINGLE TURNED COMMA QUOTATION MARK ORNAMENT\",\"char\":\"❛\"},{\"hex\":\"&#275C;\",\"name\":\"HEAVY SINGLE COMMA QUOTATION MARK ORNAMENT\",\"char\":\"❜\"},{\"hex\":\"&#275D;\",\"name\":\"HEAVY DOUBLE TURNED COMMA QUOTATION MARK ORNAMENT\",\"char\":\"❝\"},{\"hex\":\"&#275E;\",\"name\":\"HEAVY DOUBLE COMMA QUOTATION MARK ORNAMENT\",\"char\":\"❞\"},{\"hex\":\"&#2761;\",\"name\":\"CURVED STEM PARAGRAPH SIGN ORNAMENT\",\"char\":\"❡\"},{\"hex\":\"&#2762;\",\"name\":\"HEAVY EXCLAMATION MARK ORNAMENT\",\"char\":\"❢\"},{\"hex\":\"&#2763;\",\"name\":\"HEAVY HEART EXCLAMATION MARK ORNAMENT\",\"char\":\"❣\"},{\"hex\":\"&#2764;\",\"name\":\"HEAVY BLACK HEART\",\"char\":\"❤\"},{\"hex\":\"&#2765;\",\"name\":\"ROTATED HEAVY BLACK HEART BULLET\",\"char\":\"❥\"},{\"hex\":\"&#2766;\",\"name\":\"FLORAL HEART\",\"char\":\"❦\"},{\"hex\":\"&#2767;\",\"name\":\"ROTATED FLORAL HEART BULLET\",\"char\":\"❧\"},{\"hex\":\"&#2768;\",\"name\":\"MEDIUM LEFT PARENTHESIS ORNAMENT\",\"char\":\"❨\"},{\"hex\":\"&#2769;\",\"name\":\"MEDIUM RIGHT PARENTHESIS ORNAMENT\",\"char\":\"❩\"},{\"hex\":\"&#276A;\",\"name\":\"MEDIUM FLATTENED LEFT PARENTHESIS ORNAMENT\",\"char\":\"❪\"},{\"hex\":\"&#276B;\",\"name\":\"MEDIUM FLATTENED RIGHT PARENTHESIS ORNAMENT\",\"char\":\"❫\"},{\"hex\":\"&#276C;\",\"name\":\"MEDIUM LEFT-POINTING ANGLE BRACKET ORNAMENT\",\"char\":\"❬\"},{\"hex\":\"&#276D;\",\"name\":\"MEDIUM RIGHT-POINTING ANGLE BRACKET ORNAMENT\",\"char\":\"❭\"},{\"hex\":\"&#276E;\",\"name\":\"HEAVY LEFT-POINTING ANGLE QUOTATION MARK ORNAMENT\",\"char\":\"❮\"},{\"hex\":\"&#276F;\",\"name\":\"HEAVY RIGHT-POINTING ANGLE QUOTATION MARK ORNAMENT\",\"char\":\"❯\"},{\"hex\":\"&#2770;\",\"name\":\"HEAVY LEFT-POINTING ANGLE BRACKET ORNAMENT\",\"char\":\"❰\"},{\"hex\":\"&#2771;\",\"name\":\"HEAVY RIGHT-POINTING ANGLE BRACKET ORNAMENT\",\"char\":\"❱\"},{\"hex\":\"&#2772;\",\"name\":\"LIGHT LEFT TORTOISE SHELL BRACKET ORNAMENT\",\"char\":\"❲\"},{\"hex\":\"&#2773;\",\"name\":\"LIGHT RIGHT TORTOISE SHELL BRACKET ORNAMENT\",\"char\":\"❳\"},{\"hex\":\"&#2774;\",\"name\":\"MEDIUM LEFT CURLY BRACKET ORNAMENT\",\"char\":\"❴\"},{\"hex\":\"&#2775;\",\"name\":\"MEDIUM RIGHT CURLY BRACKET ORNAMENT\",\"char\":\"❵\"},{\"hex\":\"&#2776;\",\"name\":\"DINGBAT NEGATIVE CIRCLED DIGIT ONE\",\"char\":\"❶\"},{\"hex\":\"&#2777;\",\"name\":\"DINGBAT NEGATIVE CIRCLED DIGIT TWO\",\"char\":\"❷\"},{\"hex\":\"&#2778;\",\"name\":\"DINGBAT NEGATIVE CIRCLED DIGIT THREE\",\"char\":\"❸\"},{\"hex\":\"&#2779;\",\"name\":\"DINGBAT NEGATIVE CIRCLED DIGIT FOUR\",\"char\":\"❹\"},{\"hex\":\"&#277A;\",\"name\":\"DINGBAT NEGATIVE CIRCLED DIGIT FIVE\",\"char\":\"❺\"},{\"hex\":\"&#277B;\",\"name\":\"DINGBAT NEGATIVE CIRCLED DIGIT SIX\",\"char\":\"❻\"},{\"hex\":\"&#277C;\",\"name\":\"DINGBAT NEGATIVE CIRCLED DIGIT SEVEN\",\"char\":\"❼\"},{\"hex\":\"&#277D;\",\"name\":\"DINGBAT NEGATIVE CIRCLED DIGIT EIGHT\",\"char\":\"❽\"},{\"hex\":\"&#277E;\",\"name\":\"DINGBAT NEGATIVE CIRCLED DIGIT NINE\",\"char\":\"❾\"},{\"hex\":\"&#277F;\",\"name\":\"DINGBAT NEGATIVE CIRCLED NUMBER TEN\",\"char\":\"❿\"},{\"hex\":\"&#2780;\",\"name\":\"DINGBAT CIRCLED SANS-SERIF DIGIT ONE\",\"char\":\"➀\"},{\"hex\":\"&#2781;\",\"name\":\"DINGBAT CIRCLED SANS-SERIF DIGIT TWO\",\"char\":\"➁\"},{\"hex\":\"&#2782;\",\"name\":\"DINGBAT CIRCLED SANS-SERIF DIGIT THREE\",\"char\":\"➂\"},{\"hex\":\"&#2783;\",\"name\":\"DINGBAT CIRCLED SANS-SERIF DIGIT FOUR\",\"char\":\"➃\"},{\"hex\":\"&#2784;\",\"name\":\"DINGBAT CIRCLED SANS-SERIF DIGIT FIVE\",\"char\":\"➄\"},{\"hex\":\"&#2785;\",\"name\":\"DINGBAT CIRCLED SANS-SERIF DIGIT SIX\",\"char\":\"➅\"},{\"hex\":\"&#2786;\",\"name\":\"DINGBAT CIRCLED SANS-SERIF DIGIT SEVEN\",\"char\":\"➆\"},{\"hex\":\"&#2787;\",\"name\":\"DINGBAT CIRCLED SANS-SERIF DIGIT EIGHT\",\"char\":\"➇\"},{\"hex\":\"&#2788;\",\"name\":\"DINGBAT CIRCLED SANS-SERIF DIGIT NINE\",\"char\":\"➈\"},{\"hex\":\"&#2789;\",\"name\":\"DINGBAT CIRCLED SANS-SERIF NUMBER TEN\",\"char\":\"➉\"},{\"hex\":\"&#278A;\",\"name\":\"DINGBAT NEGATIVE CIRCLED SANS-SERIF DIGIT ONE\",\"char\":\"➊\"},{\"hex\":\"&#278B;\",\"name\":\"DINGBAT NEGATIVE CIRCLED SANS-SERIF DIGIT TWO\",\"char\":\"➋\"},{\"hex\":\"&#278C;\",\"name\":\"DINGBAT NEGATIVE CIRCLED SANS-SERIF DIGIT THREE\",\"char\":\"➌\"},{\"hex\":\"&#278D;\",\"name\":\"DINGBAT NEGATIVE CIRCLED SANS-SERIF DIGIT FOUR\",\"char\":\"➍\"},{\"hex\":\"&#278E;\",\"name\":\"DINGBAT NEGATIVE CIRCLED SANS-SERIF DIGIT FIVE\",\"char\":\"➎\"},{\"hex\":\"&#278F;\",\"name\":\"DINGBAT NEGATIVE CIRCLED SANS-SERIF DIGIT SIX\",\"char\":\"➏\"},{\"hex\":\"&#2790;\",\"name\":\"DINGBAT NEGATIVE CIRCLED SANS-SERIF DIGIT SEVEN\",\"char\":\"➐\"},{\"hex\":\"&#2791;\",\"name\":\"DINGBAT NEGATIVE CIRCLED SANS-SERIF DIGIT EIGHT\",\"char\":\"➑\"},{\"hex\":\"&#2792;\",\"name\":\"DINGBAT NEGATIVE CIRCLED SANS-SERIF DIGIT NINE\",\"char\":\"➒\"},{\"hex\":\"&#2793;\",\"name\":\"DINGBAT NEGATIVE CIRCLED SANS-SERIF NUMBER TEN\",\"char\":\"➓\"}],\"Math\":[{\"hex\":\"&#2200;\",\"entity\":\"&forall;\",\"name\":\"FOR ALL\",\"char\":\"∀\"},{\"hex\":\"&#2201;\",\"name\":\"COMPLEMENT\",\"char\":\"∁\"},{\"hex\":\"&#2202;\",\"entity\":\"&part;\",\"name\":\"PARTIAL DIFFERENTIAL\",\"char\":\"∂\"},{\"hex\":\"&#2203;\",\"entity\":\"&exist;\",\"name\":\"THERE EXISTS\",\"char\":\"∃\"},{\"hex\":\"&#2204;\",\"name\":\"THERE DOES NOT EXIST\",\"char\":\"∄\"},{\"hex\":\"&#2205;\",\"entity\":\"&empty;\",\"name\":\"EMPTY SET\",\"char\":\"∅\"},{\"hex\":\"&#2206;\",\"name\":\"INCREMENT\",\"char\":\"∆\"},{\"hex\":\"&#2207;\",\"entity\":\"&nabla;\",\"name\":\"NABLA\",\"char\":\"∇\"},{\"hex\":\"&#2208;\",\"entity\":\"&isin;\",\"name\":\"ELEMENT OF\",\"char\":\"∈\"},{\"hex\":\"&#2209;\",\"entity\":\"&notin;\",\"name\":\"NOT AN ELEMENT OF\",\"char\":\"∉\"},{\"hex\":\"&#220A;\",\"name\":\"SMALL ELEMENT OF\",\"char\":\"∊\"},{\"hex\":\"&#220B;\",\"entity\":\"&ni;\",\"name\":\"CONTAINS AS MEMBER\",\"char\":\"∋\"},{\"hex\":\"&#220C;\",\"name\":\"DOES NOT CONTAIN AS MEMBER\",\"char\":\"∌\"},{\"hex\":\"&#220D;\",\"name\":\"SMALL CONTAINS AS MEMBER\",\"char\":\"∍\"},{\"hex\":\"&#220E;\",\"name\":\"END OF PROOF\",\"char\":\"∎\"},{\"hex\":\"&#220F;\",\"entity\":\"&prod;\",\"name\":\"N-ARY PRODUCT\",\"char\":\"∏\"},{\"hex\":\"&#2210;\",\"name\":\"N-ARY COPRODUCT\",\"char\":\"∐\"},{\"hex\":\"&#2211;\",\"entity\":\"&sum;\",\"name\":\"N-ARY SUMMATION\",\"char\":\"∑\"},{\"hex\":\"&#2212;\",\"entity\":\"&minus;\",\"name\":\"MINUS SIGN\",\"char\":\"−\"},{\"hex\":\"&#2213;\",\"name\":\"MINUS-OR-PLUS SIGN\",\"char\":\"∓\"},{\"hex\":\"&#2214;\",\"name\":\"DOT PLUS\",\"char\":\"∔\"},{\"hex\":\"&#2215;\",\"name\":\"DIVISION SLASH\",\"char\":\"∕\"},{\"hex\":\"&#2216;\",\"name\":\"SET MINUS\",\"char\":\"∖\"},{\"hex\":\"&#2217;\",\"entity\":\"&lowast;\",\"name\":\"ASTERISK OPERATOR\",\"char\":\"∗\"},{\"hex\":\"&#2218;\",\"name\":\"RING OPERATOR\",\"char\":\"∘\"},{\"hex\":\"&#2219;\",\"name\":\"BULLET OPERATOR\",\"char\":\"∙\"},{\"hex\":\"&#221A;\",\"entity\":\"&radic;\",\"name\":\"SQUARE ROOT\",\"char\":\"√\"},{\"hex\":\"&#221B;\",\"name\":\"CUBE ROOT\",\"char\":\"∛\"},{\"hex\":\"&#221C;\",\"name\":\"FOURTH ROOT\",\"char\":\"∜\"},{\"hex\":\"&#221D;\",\"entity\":\"&prop;\",\"name\":\"PROPORTIONAL TO\",\"char\":\"∝\"},{\"hex\":\"&#221E;\",\"entity\":\"&infin;\",\"name\":\"INFINITY\",\"char\":\"∞\"},{\"hex\":\"&#221F;\",\"name\":\"RIGHT ANGLE\",\"char\":\"∟\"},{\"hex\":\"&#2220;\",\"entity\":\"&ang;\",\"name\":\"ANGLE\",\"char\":\"∠\"},{\"hex\":\"&#2221;\",\"name\":\"MEASURED ANGLE\",\"char\":\"∡\"},{\"hex\":\"&#2222;\",\"name\":\"SPHERICAL ANGLE\",\"char\":\"∢\"},{\"hex\":\"&#2223;\",\"name\":\"DIVIDES\",\"char\":\"∣\"},{\"hex\":\"&#2224;\",\"name\":\"DOES NOT DIVIDE\",\"char\":\"∤\"},{\"hex\":\"&#2225;\",\"name\":\"PARALLEL TO\",\"char\":\"∥\"},{\"hex\":\"&#2226;\",\"name\":\"NOT PARALLEL TO\",\"char\":\"∦\"},{\"hex\":\"&#2227;\",\"entity\":\"&and;\",\"name\":\"LOGICAL AND\",\"char\":\"∧\"},{\"hex\":\"&#2228;\",\"entity\":\"&or;\",\"name\":\"LOGICAL OR\",\"char\":\"∨\"},{\"hex\":\"&#2229;\",\"entity\":\"&cap;\",\"name\":\"INTERSECTION\",\"char\":\"∩\"},{\"hex\":\"&#222A;\",\"entity\":\"&cup;\",\"name\":\"UNION\",\"char\":\"∪\"},{\"hex\":\"&#222B;\",\"entity\":\"&int;\",\"name\":\"INTEGRAL\",\"char\":\"∫\"},{\"hex\":\"&#222C;\",\"name\":\"DOUBLE INTEGRAL\",\"char\":\"∬\"},{\"hex\":\"&#222D;\",\"name\":\"TRIPLE INTEGRAL\",\"char\":\"∭\"},{\"hex\":\"&#222E;\",\"name\":\"CONTOUR INTEGRAL\",\"char\":\"∮\"},{\"hex\":\"&#222F;\",\"name\":\"SURFACE INTEGRAL\",\"char\":\"∯\"},{\"hex\":\"&#2230;\",\"name\":\"VOLUME INTEGRAL\",\"char\":\"∰\"},{\"hex\":\"&#2231;\",\"name\":\"CLOCKWISE INTEGRAL\",\"char\":\"∱\"},{\"hex\":\"&#2232;\",\"name\":\"CLOCKWISE CONTOUR INTEGRAL\",\"char\":\"∲\"},{\"hex\":\"&#2233;\",\"name\":\"ANTICLOCKWISE CONTOUR INTEGRAL\",\"char\":\"∳\"},{\"hex\":\"&#2234;\",\"entity\":\"&there4;\",\"name\":\"THEREFORE\",\"char\":\"∴\"},{\"hex\":\"&#2235;\",\"name\":\"BECAUSE\",\"char\":\"∵\"},{\"hex\":\"&#2236;\",\"name\":\"RATIO\",\"char\":\"∶\"},{\"hex\":\"&#2237;\",\"name\":\"PROPORTION\",\"char\":\"∷\"},{\"hex\":\"&#2238;\",\"name\":\"DOT MINUS\",\"char\":\"∸\"},{\"hex\":\"&#2239;\",\"name\":\"EXCESS\",\"char\":\"∹\"},{\"hex\":\"&#223A;\",\"name\":\"GEOMETRIC PROPORTION\",\"char\":\"∺\"},{\"hex\":\"&#223B;\",\"name\":\"HOMOTHETIC\",\"char\":\"∻\"},{\"hex\":\"&#223C;\",\"entity\":\"&sim;\",\"name\":\"TILDE OPERATOR\",\"char\":\"∼\"},{\"hex\":\"&#223D;\",\"name\":\"REVERSED TILDE\",\"char\":\"∽\"},{\"hex\":\"&#223E;\",\"name\":\"INVERTED LAZY S\",\"char\":\"∾\"},{\"hex\":\"&#223F;\",\"name\":\"SINE WAVE\",\"char\":\"∿\"},{\"hex\":\"&#2240;\",\"name\":\"WREATH PRODUCT\",\"char\":\"≀\"},{\"hex\":\"&#2241;\",\"name\":\"NOT TILDE\",\"char\":\"≁\"},{\"hex\":\"&#2242;\",\"name\":\"MINUS TILDE\",\"char\":\"≂\"},{\"hex\":\"&#2243;\",\"name\":\"ASYMPTOTICALLY EQUAL TO\",\"char\":\"≃\"},{\"hex\":\"&#2244;\",\"name\":\"NOT ASYMPTOTICALLY EQUAL TO\",\"char\":\"≄\"},{\"hex\":\"&#2245;\",\"entity\":\"&cong;\",\"name\":\"APPROXIMATELY EQUAL TO\",\"char\":\"≅\"},{\"hex\":\"&#2246;\",\"name\":\"APPROXIMATELY BUT NOT ACTUALLY EQUAL TO\",\"char\":\"≆\"},{\"hex\":\"&#2247;\",\"name\":\"NEITHER APPROXIMATELY NOR ACTUALLY EQUAL TO\",\"char\":\"≇\"},{\"hex\":\"&#2248;\",\"entity\":\"&asymp;\",\"name\":\"ALMOST EQUAL TO\",\"char\":\"≈\"},{\"hex\":\"&#2249;\",\"name\":\"NOT ALMOST EQUAL TO\",\"char\":\"≉\"},{\"hex\":\"&#224A;\",\"name\":\"ALMOST EQUAL OR EQUAL TO\",\"char\":\"≊\"},{\"hex\":\"&#224B;\",\"name\":\"TRIPLE TILDE\",\"char\":\"≋\"},{\"hex\":\"&#224C;\",\"name\":\"ALL EQUAL TO\",\"char\":\"≌\"},{\"hex\":\"&#224D;\",\"name\":\"EQUIVALENT TO\",\"char\":\"≍\"},{\"hex\":\"&#224E;\",\"name\":\"GEOMETRICALLY EQUIVALENT TO\",\"char\":\"≎\"},{\"hex\":\"&#224F;\",\"name\":\"DIFFERENCE BETWEEN\",\"char\":\"≏\"},{\"hex\":\"&#2250;\",\"name\":\"APPROACHES THE LIMIT\",\"char\":\"≐\"},{\"hex\":\"&#2251;\",\"name\":\"GEOMETRICALLY EQUAL TO\",\"char\":\"≑\"},{\"hex\":\"&#2252;\",\"name\":\"APPROXIMATELY EQUAL TO OR THE IMAGE OF\",\"char\":\"≒\"},{\"hex\":\"&#2253;\",\"name\":\"IMAGE OF OR APPROXIMATELY EQUAL TO\",\"char\":\"≓\"},{\"hex\":\"&#2254;\",\"name\":\"COLON EQUALS\",\"char\":\"≔\"},{\"hex\":\"&#2255;\",\"name\":\"EQUALS COLON\",\"char\":\"≕\"},{\"hex\":\"&#2256;\",\"name\":\"RING IN EQUAL TO\",\"char\":\"≖\"},{\"hex\":\"&#2257;\",\"name\":\"RING EQUAL TO\",\"char\":\"≗\"},{\"hex\":\"&#2258;\",\"name\":\"CORRESPONDS TO\",\"char\":\"≘\"},{\"hex\":\"&#2259;\",\"name\":\"ESTIMATES\",\"char\":\"≙\"},{\"hex\":\"&#225A;\",\"name\":\"EQUIANGULAR TO\",\"char\":\"≚\"},{\"hex\":\"&#225B;\",\"name\":\"STAR EQUALS\",\"char\":\"≛\"},{\"hex\":\"&#225C;\",\"name\":\"DELTA EQUAL TO\",\"char\":\"≜\"},{\"hex\":\"&#225D;\",\"name\":\"EQUAL TO BY DEFINITION\",\"char\":\"≝\"},{\"hex\":\"&#225E;\",\"name\":\"MEASURED BY\",\"char\":\"≞\"},{\"hex\":\"&#225F;\",\"name\":\"QUESTIONED EQUAL TO\",\"char\":\"≟\"},{\"hex\":\"&#2260;\",\"entity\":\"&ne;\",\"name\":\"NOT EQUAL TO\",\"char\":\"≠\"},{\"hex\":\"&#2261;\",\"entity\":\"&equiv;\",\"name\":\"IDENTICAL TO\",\"char\":\"≡\"},{\"hex\":\"&#2262;\",\"name\":\"NOT IDENTICAL TO\",\"char\":\"≢\"},{\"hex\":\"&#2263;\",\"name\":\"STRICTLY EQUIVALENT TO\",\"char\":\"≣\"},{\"hex\":\"&#2264;\",\"entity\":\"&le;\",\"name\":\"LESS-THAN OR EQUAL TO\",\"char\":\"≤\"},{\"hex\":\"&#2265;\",\"entity\":\"&ge;\",\"name\":\"GREATER-THAN OR EQUAL TO\",\"char\":\"≥\"},{\"hex\":\"&#2266;\",\"name\":\"LESS-THAN OVER EQUAL TO\",\"char\":\"≦\"},{\"hex\":\"&#2267;\",\"name\":\"GREATER-THAN OVER EQUAL TO\",\"char\":\"≧\"},{\"hex\":\"&#2268;\",\"name\":\"LESS-THAN BUT NOT EQUAL TO\",\"char\":\"≨\"},{\"hex\":\"&#2269;\",\"name\":\"GREATER-THAN BUT NOT EQUAL TO\",\"char\":\"≩\"},{\"hex\":\"&#226A;\",\"name\":\"MUCH LESS-THAN\",\"char\":\"≪\"},{\"hex\":\"&#226B;\",\"name\":\"MUCH GREATER-THAN\",\"char\":\"≫\"},{\"hex\":\"&#226C;\",\"name\":\"BETWEEN\",\"char\":\"≬\"},{\"hex\":\"&#226D;\",\"name\":\"NOT EQUIVALENT TO\",\"char\":\"≭\"},{\"hex\":\"&#226E;\",\"name\":\"NOT LESS-THAN\",\"char\":\"≮\"},{\"hex\":\"&#226F;\",\"name\":\"NOT GREATER-THAN\",\"char\":\"≯\"},{\"hex\":\"&#2270;\",\"name\":\"NEITHER LESS-THAN NOR EQUAL TO\",\"char\":\"≰\"},{\"hex\":\"&#2271;\",\"name\":\"NEITHER GREATER-THAN NOR EQUAL TO\",\"char\":\"≱\"},{\"hex\":\"&#2272;\",\"name\":\"LESS-THAN OR EQUIVALENT TO\",\"char\":\"≲\"},{\"hex\":\"&#2273;\",\"name\":\"GREATER-THAN OR EQUIVALENT TO\",\"char\":\"≳\"},{\"hex\":\"&#2274;\",\"name\":\"NEITHER LESS-THAN NOR EQUIVALENT TO\",\"char\":\"≴\"},{\"hex\":\"&#2275;\",\"name\":\"NEITHER GREATER-THAN NOR EQUIVALENT TO\",\"char\":\"≵\"},{\"hex\":\"&#2276;\",\"name\":\"LESS-THAN OR GREATER-THAN\",\"char\":\"≶\"},{\"hex\":\"&#2277;\",\"name\":\"GREATER-THAN OR LESS-THAN\",\"char\":\"≷\"},{\"hex\":\"&#2278;\",\"name\":\"NEITHER LESS-THAN NOR GREATER-THAN\",\"char\":\"≸\"},{\"hex\":\"&#2279;\",\"name\":\"NEITHER GREATER-THAN NOR LESS-THAN\",\"char\":\"≹\"},{\"hex\":\"&#227A;\",\"name\":\"PRECEDES\",\"char\":\"≺\"},{\"hex\":\"&#227B;\",\"name\":\"SUCCEEDS\",\"char\":\"≻\"},{\"hex\":\"&#227C;\",\"name\":\"PRECEDES OR EQUAL TO\",\"char\":\"≼\"},{\"hex\":\"&#227D;\",\"name\":\"SUCCEEDS OR EQUAL TO\",\"char\":\"≽\"},{\"hex\":\"&#227E;\",\"name\":\"PRECEDES OR EQUIVALENT TO\",\"char\":\"≾\"},{\"hex\":\"&#227F;\",\"name\":\"SUCCEEDS OR EQUIVALENT TO\",\"char\":\"≿\"},{\"hex\":\"&#2280;\",\"name\":\"DOES NOT PRECEDE\",\"char\":\"⊀\"},{\"hex\":\"&#2281;\",\"name\":\"DOES NOT SUCCEED\",\"char\":\"⊁\"},{\"hex\":\"&#2282;\",\"entity\":\"&sub;\",\"name\":\"SUBSET OF\",\"char\":\"⊂\"},{\"hex\":\"&#2283;\",\"entity\":\"&sup;\",\"name\":\"SUPERSET OF\",\"char\":\"⊃\"},{\"hex\":\"&#2284;\",\"entity\":\"&nsub;\",\"name\":\"NOT A SUBSET OF\",\"char\":\"⊄\"},{\"hex\":\"&#2285;\",\"name\":\"NOT A SUPERSET OF\",\"char\":\"⊅\"},{\"hex\":\"&#2286;\",\"entity\":\"&sube;\",\"name\":\"SUBSET OF OR EQUAL TO\",\"char\":\"⊆\"},{\"hex\":\"&#2287;\",\"entity\":\"&supe;\",\"name\":\"SUPERSET OF OR EQUAL TO\",\"char\":\"⊇\"},{\"hex\":\"&#2288;\",\"name\":\"NEITHER A SUBSET OF NOR EQUAL TO\",\"char\":\"⊈\"},{\"hex\":\"&#2289;\",\"name\":\"NEITHER A SUPERSET OF NOR EQUAL TO\",\"char\":\"⊉\"},{\"hex\":\"&#228A;\",\"name\":\"SUBSET OF WITH NOT EQUAL TO\",\"char\":\"⊊\"},{\"hex\":\"&#228B;\",\"name\":\"SUPERSET OF WITH NOT EQUAL TO\",\"char\":\"⊋\"},{\"hex\":\"&#228C;\",\"name\":\"MULTISET\",\"char\":\"⊌\"},{\"hex\":\"&#228D;\",\"name\":\"MULTISET MULTIPLICATION\",\"char\":\"⊍\"},{\"hex\":\"&#228E;\",\"name\":\"MULTISET UNION\",\"char\":\"⊎\"},{\"hex\":\"&#228F;\",\"name\":\"SQUARE IMAGE OF\",\"char\":\"⊏\"},{\"hex\":\"&#2290;\",\"name\":\"SQUARE ORIGINAL OF\",\"char\":\"⊐\"},{\"hex\":\"&#2291;\",\"name\":\"SQUARE IMAGE OF OR EQUAL TO\",\"char\":\"⊑\"},{\"hex\":\"&#2292;\",\"name\":\"SQUARE ORIGINAL OF OR EQUAL TO\",\"char\":\"⊒\"},{\"hex\":\"&#2293;\",\"name\":\"SQUARE CAP\",\"char\":\"⊓\"},{\"hex\":\"&#2294;\",\"name\":\"SQUARE CUP\",\"char\":\"⊔\"},{\"hex\":\"&#2295;\",\"entity\":\"&oplus;\",\"name\":\"CIRCLED PLUS\",\"char\":\"⊕\"},{\"hex\":\"&#2296;\",\"name\":\"CIRCLED MINUS\",\"char\":\"⊖\"},{\"hex\":\"&#2297;\",\"entity\":\"&otimes;\",\"name\":\"CIRCLED TIMES\",\"char\":\"⊗\"},{\"hex\":\"&#2298;\",\"name\":\"CIRCLED DIVISION SLASH\",\"char\":\"⊘\"},{\"hex\":\"&#2299;\",\"name\":\"CIRCLED DOT OPERATOR\",\"char\":\"⊙\"},{\"hex\":\"&#229A;\",\"name\":\"CIRCLED RING OPERATOR\",\"char\":\"⊚\"},{\"hex\":\"&#229B;\",\"name\":\"CIRCLED ASTERISK OPERATOR\",\"char\":\"⊛\"},{\"hex\":\"&#229C;\",\"name\":\"CIRCLED EQUALS\",\"char\":\"⊜\"},{\"hex\":\"&#229D;\",\"name\":\"CIRCLED DASH\",\"char\":\"⊝\"},{\"hex\":\"&#229E;\",\"name\":\"SQUARED PLUS\",\"char\":\"⊞\"},{\"hex\":\"&#229F;\",\"name\":\"SQUARED MINUS\",\"char\":\"⊟\"},{\"hex\":\"&#22A0;\",\"name\":\"SQUARED TIMES\",\"char\":\"⊠\"},{\"hex\":\"&#22A1;\",\"name\":\"SQUARED DOT OPERATOR\",\"char\":\"⊡\"},{\"hex\":\"&#22A2;\",\"name\":\"RIGHT TACK\",\"char\":\"⊢\"},{\"hex\":\"&#22A3;\",\"name\":\"LEFT TACK\",\"char\":\"⊣\"},{\"hex\":\"&#22A4;\",\"name\":\"DOWN TACK\",\"char\":\"⊤\"},{\"hex\":\"&#22A5;\",\"entity\":\"&perp;\",\"name\":\"UP TACK\",\"char\":\"⊥\"},{\"hex\":\"&#22A6;\",\"name\":\"ASSERTION\",\"char\":\"⊦\"},{\"hex\":\"&#22A7;\",\"name\":\"MODELS\",\"char\":\"⊧\"},{\"hex\":\"&#22A8;\",\"name\":\"TRUE\",\"char\":\"⊨\"},{\"hex\":\"&#22A9;\",\"name\":\"FORCES\",\"char\":\"⊩\"},{\"hex\":\"&#22AA;\",\"name\":\"TRIPLE VERTICAL BAR RIGHT TURNSTILE\",\"char\":\"⊪\"},{\"hex\":\"&#22AB;\",\"name\":\"DOUBLE VERTICAL BAR DOUBLE RIGHT TURNSTILE\",\"char\":\"⊫\"},{\"hex\":\"&#22AC;\",\"name\":\"DOES NOT PROVE\",\"char\":\"⊬\"},{\"hex\":\"&#22AD;\",\"name\":\"NOT TRUE\",\"char\":\"⊭\"},{\"hex\":\"&#22AE;\",\"name\":\"DOES NOT FORCE\",\"char\":\"⊮\"},{\"hex\":\"&#22AF;\",\"name\":\"NEGATED DOUBLE VERTICAL BAR DOUBLE RIGHT TURNSTILE\",\"char\":\"⊯\"},{\"hex\":\"&#22B0;\",\"name\":\"PRECEDES UNDER RELATION\",\"char\":\"⊰\"},{\"hex\":\"&#22B1;\",\"name\":\"SUCCEEDS UNDER RELATION\",\"char\":\"⊱\"},{\"hex\":\"&#22B2;\",\"name\":\"NORMAL SUBGROUP OF\",\"char\":\"⊲\"},{\"hex\":\"&#22B3;\",\"name\":\"CONTAINS AS NORMAL SUBGROUP\",\"char\":\"⊳\"},{\"hex\":\"&#22B4;\",\"name\":\"NORMAL SUBGROUP OF OR EQUAL TO\",\"char\":\"⊴\"},{\"hex\":\"&#22B5;\",\"name\":\"CONTAINS AS NORMAL SUBGROUP OR EQUAL TO\",\"char\":\"⊵\"},{\"hex\":\"&#22B6;\",\"name\":\"ORIGINAL OF\",\"char\":\"⊶\"},{\"hex\":\"&#22B7;\",\"name\":\"IMAGE OF\",\"char\":\"⊷\"},{\"hex\":\"&#22B8;\",\"name\":\"MULTIMAP\",\"char\":\"⊸\"},{\"hex\":\"&#22B9;\",\"name\":\"HERMITIAN CONJUGATE MATRIX\",\"char\":\"⊹\"},{\"hex\":\"&#22BA;\",\"name\":\"INTERCALATE\",\"char\":\"⊺\"},{\"hex\":\"&#22BB;\",\"name\":\"XOR\",\"char\":\"⊻\"},{\"hex\":\"&#22BC;\",\"name\":\"NAND\",\"char\":\"⊼\"},{\"hex\":\"&#22BD;\",\"name\":\"NOR\",\"char\":\"⊽\"},{\"hex\":\"&#22BE;\",\"name\":\"RIGHT ANGLE WITH ARC\",\"char\":\"⊾\"},{\"hex\":\"&#22BF;\",\"name\":\"RIGHT TRIANGLE\",\"char\":\"⊿\"},{\"hex\":\"&#22C0;\",\"name\":\"N-ARY LOGICAL AND\",\"char\":\"⋀\"},{\"hex\":\"&#22C1;\",\"name\":\"N-ARY LOGICAL OR\",\"char\":\"⋁\"},{\"hex\":\"&#22C2;\",\"name\":\"N-ARY INTERSECTION\",\"char\":\"⋂\"},{\"hex\":\"&#22C3;\",\"name\":\"N-ARY UNION\",\"char\":\"⋃\"},{\"hex\":\"&#22C4;\",\"name\":\"DIAMOND OPERATOR\",\"char\":\"⋄\"},{\"hex\":\"&#22C5;\",\"entity\":\"&sdot;\",\"name\":\"DOT OPERATOR\",\"char\":\"⋅\"},{\"hex\":\"&#22C6;\",\"name\":\"STAR OPERATOR\",\"char\":\"⋆\"},{\"hex\":\"&#22C7;\",\"name\":\"DIVISION TIMES\",\"char\":\"⋇\"},{\"hex\":\"&#22C8;\",\"name\":\"BOWTIE\",\"char\":\"⋈\"},{\"hex\":\"&#22C9;\",\"name\":\"LEFT NORMAL FACTOR SEMIDIRECT PRODUCT\",\"char\":\"⋉\"},{\"hex\":\"&#22CA;\",\"name\":\"RIGHT NORMAL FACTOR SEMIDIRECT PRODUCT\",\"char\":\"⋊\"},{\"hex\":\"&#22CB;\",\"name\":\"LEFT SEMIDIRECT PRODUCT\",\"char\":\"⋋\"},{\"hex\":\"&#22CC;\",\"name\":\"RIGHT SEMIDIRECT PRODUCT\",\"char\":\"⋌\"},{\"hex\":\"&#22CD;\",\"name\":\"REVERSED TILDE EQUALS\",\"char\":\"⋍\"},{\"hex\":\"&#22CE;\",\"name\":\"CURLY LOGICAL OR\",\"char\":\"⋎\"},{\"hex\":\"&#22CF;\",\"name\":\"CURLY LOGICAL AND\",\"char\":\"⋏\"},{\"hex\":\"&#22D0;\",\"name\":\"DOUBLE SUBSET\",\"char\":\"⋐\"},{\"hex\":\"&#22D1;\",\"name\":\"DOUBLE SUPERSET\",\"char\":\"⋑\"},{\"hex\":\"&#22D2;\",\"name\":\"DOUBLE INTERSECTION\",\"char\":\"⋒\"},{\"hex\":\"&#22D3;\",\"name\":\"DOUBLE UNION\",\"char\":\"⋓\"},{\"hex\":\"&#22D4;\",\"name\":\"PITCHFORK\",\"char\":\"⋔\"},{\"hex\":\"&#22D5;\",\"name\":\"EQUAL AND PARALLEL TO\",\"char\":\"⋕\"},{\"hex\":\"&#22D6;\",\"name\":\"LESS-THAN WITH DOT\",\"char\":\"⋖\"},{\"hex\":\"&#22D7;\",\"name\":\"GREATER-THAN WITH DOT\",\"char\":\"⋗\"},{\"hex\":\"&#22D8;\",\"name\":\"VERY MUCH LESS-THAN\",\"char\":\"⋘\"},{\"hex\":\"&#22D9;\",\"name\":\"VERY MUCH GREATER-THAN\",\"char\":\"⋙\"},{\"hex\":\"&#22DA;\",\"name\":\"LESS-THAN EQUAL TO OR GREATER-THAN\",\"char\":\"⋚\"},{\"hex\":\"&#22DB;\",\"name\":\"GREATER-THAN EQUAL TO OR LESS-THAN\",\"char\":\"⋛\"},{\"hex\":\"&#22DC;\",\"name\":\"EQUAL TO OR LESS-THAN\",\"char\":\"⋜\"},{\"hex\":\"&#22DD;\",\"name\":\"EQUAL TO OR GREATER-THAN\",\"char\":\"⋝\"},{\"hex\":\"&#22DE;\",\"name\":\"EQUAL TO OR PRECEDES\",\"char\":\"⋞\"},{\"hex\":\"&#22DF;\",\"name\":\"EQUAL TO OR SUCCEEDS\",\"char\":\"⋟\"},{\"hex\":\"&#22E0;\",\"name\":\"DOES NOT PRECEDE OR EQUAL\",\"char\":\"⋠\"},{\"hex\":\"&#22E1;\",\"name\":\"DOES NOT SUCCEED OR EQUAL\",\"char\":\"⋡\"},{\"hex\":\"&#22E2;\",\"name\":\"NOT SQUARE IMAGE OF OR EQUAL TO\",\"char\":\"⋢\"},{\"hex\":\"&#22E3;\",\"name\":\"NOT SQUARE ORIGINAL OF OR EQUAL TO\",\"char\":\"⋣\"},{\"hex\":\"&#22E4;\",\"name\":\"SQUARE IMAGE OF OR NOT EQUAL TO\",\"char\":\"⋤\"},{\"hex\":\"&#22E5;\",\"name\":\"SQUARE ORIGINAL OF OR NOT EQUAL TO\",\"char\":\"⋥\"},{\"hex\":\"&#22E6;\",\"name\":\"LESS-THAN BUT NOT EQUIVALENT TO\",\"char\":\"⋦\"},{\"hex\":\"&#22E7;\",\"name\":\"GREATER-THAN BUT NOT EQUIVALENT TO\",\"char\":\"⋧\"},{\"hex\":\"&#22E8;\",\"name\":\"PRECEDES BUT NOT EQUIVALENT TO\",\"char\":\"⋨\"},{\"hex\":\"&#22E9;\",\"name\":\"SUCCEEDS BUT NOT EQUIVALENT TO\",\"char\":\"⋩\"},{\"hex\":\"&#22EA;\",\"name\":\"NOT NORMAL SUBGROUP OF\",\"char\":\"⋪\"},{\"hex\":\"&#22EB;\",\"name\":\"DOES NOT CONTAIN AS NORMAL SUBGROUP\",\"char\":\"⋫\"},{\"hex\":\"&#22EC;\",\"name\":\"NOT NORMAL SUBGROUP OF OR EQUAL TO\",\"char\":\"⋬\"},{\"hex\":\"&#22ED;\",\"name\":\"DOES NOT CONTAIN AS NORMAL SUBGROUP OR EQUAL\",\"char\":\"⋭\"},{\"hex\":\"&#22EE;\",\"name\":\"VERTICAL ELLIPSIS\",\"char\":\"⋮\"},{\"hex\":\"&#22EF;\",\"name\":\"MIDLINE HORIZONTAL ELLIPSIS\",\"char\":\"⋯\"},{\"hex\":\"&#22F0;\",\"name\":\"UP RIGHT DIAGONAL ELLIPSIS\",\"char\":\"⋰\"},{\"hex\":\"&#22F1;\",\"name\":\"DOWN RIGHT DIAGONAL ELLIPSIS\",\"char\":\"⋱\"},{\"hex\":\"&#22F2;\",\"name\":\"ELEMENT OF WITH LONG HORIZONTAL STROKE\",\"char\":\"⋲\"},{\"hex\":\"&#22F3;\",\"name\":\"ELEMENT OF WITH VERTICAL BAR AT END OF HORIZONTAL STROKE\",\"char\":\"⋳\"},{\"hex\":\"&#22F4;\",\"name\":\"SMALL ELEMENT OF WITH VERTICAL BAR AT END OF HORIZONTAL STROKE\",\"char\":\"⋴\"},{\"hex\":\"&#22F5;\",\"name\":\"ELEMENT OF WITH DOT ABOVE\",\"char\":\"⋵\"},{\"hex\":\"&#22F6;\",\"name\":\"ELEMENT OF WITH OVERBAR\",\"char\":\"⋶\"},{\"hex\":\"&#22F7;\",\"name\":\"SMALL ELEMENT OF WITH OVERBAR\",\"char\":\"⋷\"},{\"hex\":\"&#22F8;\",\"name\":\"ELEMENT OF WITH UNDERBAR\",\"char\":\"⋸\"},{\"hex\":\"&#22F9;\",\"name\":\"ELEMENT OF WITH TWO HORIZONTAL STROKES\",\"char\":\"⋹\"},{\"hex\":\"&#22FA;\",\"name\":\"CONTAINS WITH LONG HORIZONTAL STROKE\",\"char\":\"⋺\"},{\"hex\":\"&#22FB;\",\"name\":\"CONTAINS WITH VERTICAL BAR AT END OF HORIZONTAL STROKE\",\"char\":\"⋻\"},{\"hex\":\"&#22FC;\",\"name\":\"SMALL CONTAINS WITH VERTICAL BAR AT END OF HORIZONTAL STROKE\",\"char\":\"⋼\"},{\"hex\":\"&#22FD;\",\"name\":\"CONTAINS WITH OVERBAR\",\"char\":\"⋽\"},{\"hex\":\"&#22FE;\",\"name\":\"SMALL CONTAINS WITH OVERBAR\",\"char\":\"⋾\"},{\"hex\":\"&#22FF;\",\"name\":\"Z NOTATION BAG MEMBERSHIP\",\"char\":\"⋿\"},{\"hex\":\"&#2153;\",\"name\":\"VULGAR FRACTION ONE THIRD\",\"char\":\"⅓\"},{\"hex\":\"&#2154;\",\"name\":\"VULGAR FRACTION TWO THIRDS\",\"char\":\"⅔\"},{\"hex\":\"&#2155;\",\"name\":\"VULGAR FRACTION ONE FIFTH\",\"char\":\"⅕\"},{\"hex\":\"&#2156;\",\"name\":\"VULGAR FRACTION TWO FIFTHS\",\"char\":\"⅖\"},{\"hex\":\"&#2157;\",\"name\":\"VULGAR FRACTION THREE FIFTHS\",\"char\":\"⅗\"},{\"hex\":\"&#2158;\",\"name\":\"VULGAR FRACTION FOUR FIFTHS\",\"char\":\"⅘\"},{\"hex\":\"&#2159;\",\"name\":\"VULGAR FRACTION ONE SIXTH\",\"char\":\"⅙\"},{\"hex\":\"&#215A;\",\"name\":\"VULGAR FRACTION FIVE SIXTHS\",\"char\":\"⅚\"},{\"hex\":\"&#215B;\",\"name\":\"VULGAR FRACTION ONE EIGHTH (present in WGL4)\",\"char\":\"⅛\"},{\"hex\":\"&#215C;\",\"name\":\"VULGAR FRACTION THREE EIGHTHS (present in WGL4)\",\"char\":\"⅜\"},{\"hex\":\"&#215D;\",\"name\":\"VULGAR FRACTION FIVE EIGHTHS (present in WGL4)\",\"char\":\"⅝\"},{\"hex\":\"&#215E;\",\"name\":\"VULGAR FRACTION SEVEN EIGHTHS (present in WGL4)\",\"char\":\"⅞\"},{\"hex\":\"&#215F;\",\"name\":\"FRACTION NUMERATOR ONE\",\"char\":\"⅟\"},{\"hex\":\"&#2160;\",\"name\":\"ROMAN NUMERAL ONE\",\"char\":\"Ⅰ\"},{\"hex\":\"&#2161;\",\"name\":\"ROMAN NUMERAL TWO\",\"char\":\"Ⅱ\"},{\"hex\":\"&#2162;\",\"name\":\"ROMAN NUMERAL THREE\",\"char\":\"Ⅲ\"},{\"hex\":\"&#2163;\",\"name\":\"ROMAN NUMERAL FOUR\",\"char\":\"Ⅳ\"},{\"hex\":\"&#2164;\",\"name\":\"ROMAN NUMERAL FIVE\",\"char\":\"Ⅴ\"},{\"hex\":\"&#2165;\",\"name\":\"ROMAN NUMERAL SIX\",\"char\":\"Ⅵ\"},{\"hex\":\"&#2166;\",\"name\":\"ROMAN NUMERAL SEVEN\",\"char\":\"Ⅶ\"},{\"hex\":\"&#2167;\",\"name\":\"ROMAN NUMERAL EIGHT\",\"char\":\"Ⅷ\"},{\"hex\":\"&#2168;\",\"name\":\"ROMAN NUMERAL NINE\",\"char\":\"Ⅸ\"},{\"hex\":\"&#2169;\",\"name\":\"ROMAN NUMERAL TEN\",\"char\":\"Ⅹ\"},{\"hex\":\"&#216A;\",\"name\":\"ROMAN NUMERAL ELEVEN\",\"char\":\"Ⅺ\"},{\"hex\":\"&#216B;\",\"name\":\"ROMAN NUMERAL TWELVE\",\"char\":\"Ⅻ\"},{\"hex\":\"&#216C;\",\"name\":\"ROMAN NUMERAL FIFTY\",\"char\":\"Ⅼ\"},{\"hex\":\"&#216D;\",\"name\":\"ROMAN NUMERAL ONE HUNDRED\",\"char\":\"Ⅽ\"},{\"hex\":\"&#216E;\",\"name\":\"ROMAN NUMERAL FIVE HUNDRED\",\"char\":\"Ⅾ\"},{\"hex\":\"&#216F;\",\"name\":\"ROMAN NUMERAL ONE THOUSAND\",\"char\":\"Ⅿ\"},{\"hex\":\"&#2170;\",\"name\":\"SMALL ROMAN NUMERAL ONE\",\"char\":\"ⅰ\"},{\"hex\":\"&#2171;\",\"name\":\"SMALL ROMAN NUMERAL TWO\",\"char\":\"ⅱ\"},{\"hex\":\"&#2172;\",\"name\":\"SMALL ROMAN NUMERAL THREE\",\"char\":\"ⅲ\"},{\"hex\":\"&#2173;\",\"name\":\"SMALL ROMAN NUMERAL FOUR\",\"char\":\"ⅳ\"},{\"hex\":\"&#2174;\",\"name\":\"SMALL ROMAN NUMERAL FIVE\",\"char\":\"ⅴ\"},{\"hex\":\"&#2175;\",\"name\":\"SMALL ROMAN NUMERAL SIX\",\"char\":\"ⅵ\"},{\"hex\":\"&#2176;\",\"name\":\"SMALL ROMAN NUMERAL SEVEN\",\"char\":\"ⅶ\"},{\"hex\":\"&#2177;\",\"name\":\"SMALL ROMAN NUMERAL EIGHT\",\"char\":\"ⅷ\"},{\"hex\":\"&#2178;\",\"name\":\"SMALL ROMAN NUMERAL NINE\",\"char\":\"ⅸ\"},{\"hex\":\"&#2179;\",\"name\":\"SMALL ROMAN NUMERAL TEN\",\"char\":\"ⅹ\"},{\"hex\":\"&#217A;\",\"name\":\"SMALL ROMAN NUMERAL ELEVEN\",\"char\":\"ⅺ\"},{\"hex\":\"&#217B;\",\"name\":\"SMALL ROMAN NUMERAL TWELVE\",\"char\":\"ⅻ\"},{\"hex\":\"&#217C;\",\"name\":\"SMALL ROMAN NUMERAL FIFTY\",\"char\":\"ⅼ\"},{\"hex\":\"&#217D;\",\"name\":\"SMALL ROMAN NUMERAL ONE HUNDRED\",\"char\":\"ⅽ\"},{\"hex\":\"&#217E;\",\"name\":\"SMALL ROMAN NUMERAL FIVE HUNDRED\",\"char\":\"ⅾ\"},{\"hex\":\"&#217F;\",\"name\":\"SMALL ROMAN NUMERAL ONE THOUSAND\",\"char\":\"ⅿ\"},{\"hex\":\"&#2180;\",\"name\":\"ROMAN NUMERAL ONE THOUSAND C D\",\"char\":\"ↀ\"},{\"hex\":\"&#2181;\",\"name\":\"ROMAN NUMERAL FIVE THOUSAND\",\"char\":\"ↁ\"},{\"hex\":\"&#2182;\",\"name\":\"ROMAN NUMERAL TEN THOUSAND\",\"char\":\"ↂ\"},{\"hex\":\"&#2183;\",\"name\":\"ROMAN NUMERAL REVERSED ONE HUNDRED\",\"char\":\"Ↄ\"},{\"hex\":\"&#2184;\",\"name\":\"LATIN SMALL LETTER REVERSED C\",\"char\":\"ↄ\"},{\"hex\":\"&#2A00;\",\"name\":\"N-ARY CIRCLED DOT OPERATOR\",\"char\":\"⨀\"},{\"hex\":\"&#2A01;\",\"name\":\"N-ARY CIRCLED PLUS OPERATOR\",\"char\":\"⨁\"},{\"hex\":\"&#2A02;\",\"name\":\"N-ARY CIRCLED TIMES OPERATOR\",\"char\":\"⨂\"},{\"hex\":\"&#2A0C;\",\"name\":\"QUADRUPLE INTEGRAL OPERATOR\",\"char\":\"⨌\"},{\"hex\":\"&#2A0D;\",\"name\":\"FINITE PART INTEGRAL\",\"char\":\"⨍\"},{\"hex\":\"&#2A0E;\",\"name\":\"INTEGRAL WITH DOUBLE STROKE\",\"char\":\"⨎\"},{\"hex\":\"&#2A0F;\",\"name\":\"INTEGRAL AVERAGE WITH SLASH\",\"char\":\"⨏\"},{\"hex\":\"&#2A10;\",\"name\":\"CIRCULATION FUNCTION\",\"char\":\"⨐\"},{\"hex\":\"&#2A11;\",\"name\":\"ANTICLOCKWISE INTEGRATION\",\"char\":\"⨑\"},{\"hex\":\"&#2A12;\",\"name\":\"LINE INTEGRATION WITH RECTANGULAR PATH AROUND POLE\",\"char\":\"⨒\"},{\"hex\":\"&#2A13;\",\"name\":\"LINE INTEGRATION WITH SEMICIRCULAR PATH AROUND POLE\",\"char\":\"⨓\"},{\"hex\":\"&#2A14;\",\"name\":\"LINE INTEGRATION NOT INCLUDING THE POLE\",\"char\":\"⨔\"},{\"hex\":\"&#2A15;\",\"name\":\"INTEGRAL AROUND A POINT OPERATOR\",\"char\":\"⨕\"},{\"hex\":\"&#2A16;\",\"name\":\"QUATERNION INTEGRAL OPERATOR\",\"char\":\"⨖\"},{\"hex\":\"&#2A17;\",\"name\":\"INTEGRAL WITH LEFTWARDS ARROW WITH HOOK\",\"char\":\"⨗\"},{\"hex\":\"&#2A18;\",\"name\":\"INTEGRAL WITH TIMES SIGN\",\"char\":\"⨘\"},{\"hex\":\"&#2A19;\",\"name\":\"INTEGRAL WITH INTERSECTION\",\"char\":\"⨙\"},{\"hex\":\"&#2A1A;\",\"name\":\"INTEGRAL WITH UNION\",\"char\":\"⨚\"},{\"hex\":\"&#2A1B;\",\"name\":\"INTEGRAL WITH OVERBAR\",\"char\":\"⨛\"},{\"hex\":\"&#2A1C;\",\"name\":\"INTEGRAL WITH UNDERBAR\",\"char\":\"⨜\"},{\"hex\":\"&#2A2F;\",\"name\":\"VECTOR OR CROSS PRODUCT\",\"char\":\"⨯\"},{\"hex\":\"&#2A7D;\",\"name\":\"LESS-THAN OR SLANTED EQUAL TO\",\"char\":\"⩽\"},{\"hex\":\"&#2A7E;\",\"name\":\"GREATER-THAN OR SLANTED EQUAL TO\",\"char\":\"⩾\"},{\"hex\":\"&#2A7F;\",\"name\":\"LESS-THAN OR SLANTED EQUAL TO WITH DOT INSIDE\",\"char\":\"⩿\"},{\"hex\":\"&#2A80;\",\"name\":\"GREATER-THAN OR SLANTED EQUAL TO WITH DOT INSIDE\",\"char\":\"⪀\"},{\"hex\":\"&#2A81;\",\"name\":\"LESS-THAN OR SLANTED EQUAL TO WITH DOT ABOVE\",\"char\":\"⪁\"},{\"hex\":\"&#2A82;\",\"name\":\"GREATER-THAN OR SLANTED EQUAL TO WITH DOT ABOVE\",\"char\":\"⪂\"},{\"hex\":\"&#2A83;\",\"name\":\"LESS-THAN OR SLANTED EQUAL TO WITH DOT ABOVE RIGHT\",\"char\":\"⪃\"},{\"hex\":\"&#2A84;\",\"name\":\"GREATER-THAN OR SLANTED EQUAL TO WITH DOT ABOVE LEFT\",\"char\":\"⪄\"},{\"hex\":\"&#2A85;\",\"name\":\"LESS-THAN OR APPROXIMATE\",\"char\":\"⪅\"},{\"hex\":\"&#2A86;\",\"name\":\"GREATER-THAN OR APPROXIMATE\",\"char\":\"⪆\"},{\"hex\":\"&#2A87;\",\"name\":\"LESS-THAN AND SINGLE-LINE NOT EQUAL TO\",\"char\":\"⪇\"},{\"hex\":\"&#2A88;\",\"name\":\"GREATER-THAN AND SINGLE-LINE NOT EQUAL TO\",\"char\":\"⪈\"},{\"hex\":\"&#2A89;\",\"name\":\"LESS-THAN AND NOT APPROXIMATE\",\"char\":\"⪉\"},{\"hex\":\"&#2A8A;\",\"name\":\"GREATER-THAN AND NOT APPROXIMATE\",\"char\":\"⪊\"},{\"hex\":\"&#2A8B;\",\"name\":\"LESS-THAN ABOVE DOUBLE-LINE EQUAL ABOVE GREATER-THAN\",\"char\":\"⪋\"},{\"hex\":\"&#2A8C;\",\"name\":\"GREATER-THAN ABOVE DOUBLE-LINE EQUAL ABOVE LESS-THAN\",\"char\":\"⪌\"},{\"hex\":\"&#2A8D;\",\"name\":\"LESS-THAN ABOVE SIMILAR OR EQUAL\",\"char\":\"⪍\"},{\"hex\":\"&#2A8E;\",\"name\":\"GREATER-THAN ABOVE SIMILAR OR EQUAL\",\"char\":\"⪎\"},{\"hex\":\"&#2A8F;\",\"name\":\"LESS-THAN ABOVE SIMILAR ABOVE GREATER-THAN\",\"char\":\"⪏\"},{\"hex\":\"&#2A90;\",\"name\":\"GREATER-THAN ABOVE SIMILAR ABOVE LESS-THAN\",\"char\":\"⪐\"},{\"hex\":\"&#2A91;\",\"name\":\"LESS-THAN ABOVE GREATER-THAN ABOVE DOUBLE-LINE EQUAL\",\"char\":\"⪑\"},{\"hex\":\"&#2A92;\",\"name\":\"GREATER-THAN ABOVE LESS-THAN ABOVE DOUBLE-LINE EQUAL\",\"char\":\"⪒\"},{\"hex\":\"&#2A93;\",\"name\":\"LESS-THAN ABOVE SLANTED EQUAL ABOVE GREATER-THAN ABOVE SLANTED EQUAL\",\"char\":\"⪓\"},{\"hex\":\"&#2A94;\",\"name\":\"GREATER-THAN ABOVE SLANTED EQUAL ABOVE LESS-THAN ABOVE SLANTED EQUAL\",\"char\":\"⪔\"},{\"hex\":\"&#2A95;\",\"name\":\"SLANTED EQUAL TO OR LESS-THAN\",\"char\":\"⪕\"},{\"hex\":\"&#2A96;\",\"name\":\"SLANTED EQUAL TO OR GREATER-THAN\",\"char\":\"⪖\"},{\"hex\":\"&#2A97;\",\"name\":\"SLANTED EQUAL TO OR LESS-THAN WITH DOT INSIDE\",\"char\":\"⪗\"},{\"hex\":\"&#2A98;\",\"name\":\"SLANTED EQUAL TO OR GREATER-THAN WITH DOT INSIDE\",\"char\":\"⪘\"},{\"hex\":\"&#2A99;\",\"name\":\"DOUBLE-LINE EQUAL TO OR LESS-THAN\",\"char\":\"⪙\"},{\"hex\":\"&#2A9A;\",\"name\":\"DOUBLE-LINE EQUAL TO OR GREATER-THAN\",\"char\":\"⪚\"},{\"hex\":\"&#2A9B;\",\"name\":\"DOUBLE-LINE SLANTED EQUAL TO OR LESS-THAN\",\"char\":\"⪛\"},{\"hex\":\"&#2A9C;\",\"name\":\"DOUBLE-LINE SLANTED EQUAL TO OR GREATER-THAN\",\"char\":\"⪜\"},{\"hex\":\"&#2A9D;\",\"name\":\"SIMILAR OR LESS-THAN\",\"char\":\"⪝\"},{\"hex\":\"&#2A9E;\",\"name\":\"SIMILAR OR GREATER-THAN\",\"char\":\"⪞\"},{\"hex\":\"&#2A9F;\",\"name\":\"SIMILAR ABOVE LESS-THAN ABOVE EQUALS SIGN\",\"char\":\"⪟\"},{\"hex\":\"&#2AA0;\",\"name\":\"SIMILAR ABOVE GREATER-THAN ABOVE EQUALS SIGN\",\"char\":\"⪠\"},{\"hex\":\"&#2AAE;\",\"name\":\"EQUALS SIGN WITH BUMPY ABOVE\",\"char\":\"⪮\"},{\"hex\":\"&#2AAF;\",\"name\":\"PRECEDES ABOVE SINGLE-LINE EQUALS SIGN\",\"char\":\"⪯\"},{\"hex\":\"&#2AB0;\",\"name\":\"SUCCEEDS ABOVE SINGLE-LINE EQUALS SIGN\",\"char\":\"⪰\"},{\"hex\":\"&#2AB1;\",\"name\":\"PRECEDES ABOVE SINGLE-LINE NOT EQUAL TO\",\"char\":\"⪱\"},{\"hex\":\"&#2AB2;\",\"name\":\"SUCCEEDS ABOVE SINGLE-LINE NOT EQUAL TO\",\"char\":\"⪲\"},{\"hex\":\"&#2AB3;\",\"name\":\"PRECEDES ABOVE EQUALS SIGN\",\"char\":\"⪳\"},{\"hex\":\"&#2AB4;\",\"name\":\"SUCCEEDS ABOVE EQUALS SIGN\",\"char\":\"⪴\"},{\"hex\":\"&#2AB5;\",\"name\":\"PRECEDES ABOVE NOT EQUAL TO\",\"char\":\"⪵\"},{\"hex\":\"&#2AB6;\",\"name\":\"SUCCEEDS ABOVE NOT EQUAL TO\",\"char\":\"⪶\"},{\"hex\":\"&#2AB7;\",\"name\":\"PRECEDES ABOVE ALMOST EQUAL TO\",\"char\":\"⪷\"},{\"hex\":\"&#2AB8;\",\"name\":\"SUCCEEDS ABOVE ALMOST EQUAL TO\",\"char\":\"⪸\"},{\"hex\":\"&#2AB9;\",\"name\":\"PRECEDES ABOVE NOT ALMOST EQUAL TO\",\"char\":\"⪹\"},{\"hex\":\"&#2ABA;\",\"name\":\"SUCCEEDS ABOVE NOT ALMOST EQUAL TO\",\"char\":\"⪺\"},{\"hex\":\"&#2AF9;\",\"name\":\"DOUBLE-LINE SLANTED LESS-THAN OR EQUAL TO\",\"char\":\"⫹\"},{\"hex\":\"&#2AFA;\",\"name\":\"DOUBLE-LINE SLANTED GREATER-THAN OR EQUAL TO\",\"char\":\"⫺\"},{\"hex\":\"&#2460;\",\"name\":\"CIRCLED DIGIT ONE\",\"char\":\"①\"},{\"hex\":\"&#2461;\",\"name\":\"CIRCLED DIGIT TWO\",\"char\":\"②\"},{\"hex\":\"&#2462;\",\"name\":\"CIRCLED DIGIT THREE\",\"char\":\"③\"},{\"hex\":\"&#2463;\",\"name\":\"CIRCLED DIGIT FOUR\",\"char\":\"④\"},{\"hex\":\"&#2464;\",\"name\":\"CIRCLED DIGIT FIVE\",\"char\":\"⑤\"},{\"hex\":\"&#2465;\",\"name\":\"CIRCLED DIGIT SIX\",\"char\":\"⑥\"},{\"hex\":\"&#2466;\",\"name\":\"CIRCLED DIGIT SEVEN\",\"char\":\"⑦\"},{\"hex\":\"&#2467;\",\"name\":\"CIRCLED DIGIT EIGHT\",\"char\":\"⑧\"},{\"hex\":\"&#2468;\",\"name\":\"CIRCLED DIGIT NINE\",\"char\":\"⑨\"},{\"hex\":\"&#2469;\",\"name\":\"CIRCLED NUMBER TEN\",\"char\":\"⑩\"},{\"hex\":\"&#246A;\",\"name\":\"CIRCLED NUMBER ELEVEN\",\"char\":\"⑪\"},{\"hex\":\"&#246B;\",\"name\":\"CIRCLED NUMBER TWELVE\",\"char\":\"⑫\"},{\"hex\":\"&#246C;\",\"name\":\"CIRCLED NUMBER THIRTEEN\",\"char\":\"⑬\"},{\"hex\":\"&#246D;\",\"name\":\"CIRCLED NUMBER FOURTEEN\",\"char\":\"⑭\"},{\"hex\":\"&#246E;\",\"name\":\"CIRCLED NUMBER FIFTEEN\",\"char\":\"⑮\"},{\"hex\":\"&#246F;\",\"name\":\"CIRCLED NUMBER SIXTEEN\",\"char\":\"⑯\"},{\"hex\":\"&#2470;\",\"name\":\"CIRCLED NUMBER SEVENTEEN\",\"char\":\"⑰\"},{\"hex\":\"&#2471;\",\"name\":\"CIRCLED NUMBER EIGHTEEN\",\"char\":\"⑱\"},{\"hex\":\"&#2472;\",\"name\":\"CIRCLED NUMBER NINETEEN\",\"char\":\"⑲\"},{\"hex\":\"&#2473;\",\"name\":\"CIRCLED NUMBER TWENTY\",\"char\":\"⑳\"},{\"hex\":\"&#2474;\",\"name\":\"PARENTHESIZED DIGIT ONE\",\"char\":\"⑴\"},{\"hex\":\"&#2475;\",\"name\":\"PARENTHESIZED DIGIT TWO\",\"char\":\"⑵\"},{\"hex\":\"&#2476;\",\"name\":\"PARENTHESIZED DIGIT THREE\",\"char\":\"⑶\"},{\"hex\":\"&#2477;\",\"name\":\"PARENTHESIZED DIGIT FOUR\",\"char\":\"⑷\"},{\"hex\":\"&#2478;\",\"name\":\"PARENTHESIZED DIGIT FIVE\",\"char\":\"⑸\"},{\"hex\":\"&#2479;\",\"name\":\"PARENTHESIZED DIGIT SIX\",\"char\":\"⑹\"},{\"hex\":\"&#247A;\",\"name\":\"PARENTHESIZED DIGIT SEVEN\",\"char\":\"⑺\"},{\"hex\":\"&#247B;\",\"name\":\"PARENTHESIZED DIGIT EIGHT\",\"char\":\"⑻\"},{\"hex\":\"&#247C;\",\"name\":\"PARENTHESIZED DIGIT NINE\",\"char\":\"⑼\"},{\"hex\":\"&#247D;\",\"name\":\"PARENTHESIZED NUMBER TEN\",\"char\":\"⑽\"},{\"hex\":\"&#247E;\",\"name\":\"PARENTHESIZED NUMBER ELEVEN\",\"char\":\"⑾\"},{\"hex\":\"&#247F;\",\"name\":\"PARENTHESIZED NUMBER TWELVE\",\"char\":\"⑿\"},{\"hex\":\"&#2480;\",\"name\":\"PARENTHESIZED NUMBER THIRTEEN\",\"char\":\"⒀\"},{\"hex\":\"&#2481;\",\"name\":\"PARENTHESIZED NUMBER FOURTEEN\",\"char\":\"⒁\"},{\"hex\":\"&#2482;\",\"name\":\"PARENTHESIZED NUMBER FIFTEEN\",\"char\":\"⒂\"},{\"hex\":\"&#2483;\",\"name\":\"PARENTHESIZED NUMBER SIXTEEN\",\"char\":\"⒃\"},{\"hex\":\"&#2484;\",\"name\":\"PARENTHESIZED NUMBER SEVENTEEN\",\"char\":\"⒄\"},{\"hex\":\"&#2485;\",\"name\":\"PARENTHESIZED NUMBER EIGHTEEN\",\"char\":\"⒅\"},{\"hex\":\"&#2486;\",\"name\":\"PARENTHESIZED NUMBER NINETEEN\",\"char\":\"⒆\"},{\"hex\":\"&#2487;\",\"name\":\"PARENTHESIZED NUMBER TWENTY\",\"char\":\"⒇\"},{\"hex\":\"&#2488;\",\"name\":\"DIGIT ONE FULL STOP\",\"char\":\"⒈\"},{\"hex\":\"&#2489;\",\"name\":\"DIGIT TWO FULL STOP\",\"char\":\"⒉\"},{\"hex\":\"&#248A;\",\"name\":\"DIGIT THREE FULL STOP\",\"char\":\"⒊\"},{\"hex\":\"&#248B;\",\"name\":\"DIGIT FOUR FULL STOP\",\"char\":\"⒋\"},{\"hex\":\"&#248C;\",\"name\":\"DIGIT FIVE FULL STOP\",\"char\":\"⒌\"},{\"hex\":\"&#248D;\",\"name\":\"DIGIT SIX FULL STOP\",\"char\":\"⒍\"},{\"hex\":\"&#248E;\",\"name\":\"DIGIT SEVEN FULL STOP\",\"char\":\"⒎\"},{\"hex\":\"&#248F;\",\"name\":\"DIGIT EIGHT FULL STOP\",\"char\":\"⒏\"},{\"hex\":\"&#2490;\",\"name\":\"DIGIT NINE FULL STOP\",\"char\":\"⒐\"},{\"hex\":\"&#2491;\",\"name\":\"NUMBER TEN FULL STOP\",\"char\":\"⒑\"},{\"hex\":\"&#2492;\",\"name\":\"NUMBER ELEVEN FULL STOP\",\"char\":\"⒒\"},{\"hex\":\"&#2493;\",\"name\":\"NUMBER TWELVE FULL STOP\",\"char\":\"⒓\"},{\"hex\":\"&#2494;\",\"name\":\"NUMBER THIRTEEN FULL STOP\",\"char\":\"⒔\"},{\"hex\":\"&#2495;\",\"name\":\"NUMBER FOURTEEN FULL STOP\",\"char\":\"⒕\"},{\"hex\":\"&#2496;\",\"name\":\"NUMBER FIFTEEN FULL STOP\",\"char\":\"⒖\"},{\"hex\":\"&#2497;\",\"name\":\"NUMBER SIXTEEN FULL STOP\",\"char\":\"⒗\"},{\"hex\":\"&#2498;\",\"name\":\"NUMBER SEVENTEEN FULL STOP\",\"char\":\"⒘\"},{\"hex\":\"&#2499;\",\"name\":\"NUMBER EIGHTEEN FULL STOP\",\"char\":\"⒙\"},{\"hex\":\"&#249A;\",\"name\":\"NUMBER NINETEEN FULL STOP\",\"char\":\"⒚\"},{\"hex\":\"&#249B;\",\"name\":\"NUMBER TWENTY FULL STOP\",\"char\":\"⒛\"},{\"hex\":\"&#249C;\",\"name\":\"PARENTHESIZED LATIN SMALL LETTER A\",\"char\":\"⒜\"},{\"hex\":\"&#249D;\",\"name\":\"PARENTHESIZED LATIN SMALL LETTER B\",\"char\":\"⒝\"},{\"hex\":\"&#249E;\",\"name\":\"PARENTHESIZED LATIN SMALL LETTER C\",\"char\":\"⒞\"},{\"hex\":\"&#249F;\",\"name\":\"PARENTHESIZED LATIN SMALL LETTER D\",\"char\":\"⒟\"},{\"hex\":\"&#24A0;\",\"name\":\"PARENTHESIZED LATIN SMALL LETTER E\",\"char\":\"⒠\"},{\"hex\":\"&#24A1;\",\"name\":\"PARENTHESIZED LATIN SMALL LETTER F\",\"char\":\"⒡\"},{\"hex\":\"&#24A2;\",\"name\":\"PARENTHESIZED LATIN SMALL LETTER G\",\"char\":\"⒢\"},{\"hex\":\"&#24A3;\",\"name\":\"PARENTHESIZED LATIN SMALL LETTER H\",\"char\":\"⒣\"},{\"hex\":\"&#24A4;\",\"name\":\"PARENTHESIZED LATIN SMALL LETTER I\",\"char\":\"⒤\"},{\"hex\":\"&#24A5;\",\"name\":\"PARENTHESIZED LATIN SMALL LETTER J\",\"char\":\"⒥\"},{\"hex\":\"&#24A6;\",\"name\":\"PARENTHESIZED LATIN SMALL LETTER K\",\"char\":\"⒦\"},{\"hex\":\"&#24A7;\",\"name\":\"PARENTHESIZED LATIN SMALL LETTER L\",\"char\":\"⒧\"},{\"hex\":\"&#24A8;\",\"name\":\"PARENTHESIZED LATIN SMALL LETTER M\",\"char\":\"⒨\"},{\"hex\":\"&#24A9;\",\"name\":\"PARENTHESIZED LATIN SMALL LETTER N\",\"char\":\"⒩\"},{\"hex\":\"&#24AA;\",\"name\":\"PARENTHESIZED LATIN SMALL LETTER O\",\"char\":\"⒪\"},{\"hex\":\"&#24AB;\",\"name\":\"PARENTHESIZED LATIN SMALL LETTER P\",\"char\":\"⒫\"},{\"hex\":\"&#24AC;\",\"name\":\"PARENTHESIZED LATIN SMALL LETTER Q\",\"char\":\"⒬\"},{\"hex\":\"&#24AD;\",\"name\":\"PARENTHESIZED LATIN SMALL LETTER R\",\"char\":\"⒭\"},{\"hex\":\"&#24AE;\",\"name\":\"PARENTHESIZED LATIN SMALL LETTER S\",\"char\":\"⒮\"},{\"hex\":\"&#24AF;\",\"name\":\"PARENTHESIZED LATIN SMALL LETTER T\",\"char\":\"⒯\"},{\"hex\":\"&#24B0;\",\"name\":\"PARENTHESIZED LATIN SMALL LETTER U\",\"char\":\"⒰\"},{\"hex\":\"&#24B1;\",\"name\":\"PARENTHESIZED LATIN SMALL LETTER V\",\"char\":\"⒱\"},{\"hex\":\"&#24B2;\",\"name\":\"PARENTHESIZED LATIN SMALL LETTER W\",\"char\":\"⒲\"},{\"hex\":\"&#24B3;\",\"name\":\"PARENTHESIZED LATIN SMALL LETTER X\",\"char\":\"⒳\"},{\"hex\":\"&#24B4;\",\"name\":\"PARENTHESIZED LATIN SMALL LETTER Y\",\"char\":\"⒴\"},{\"hex\":\"&#24B5;\",\"name\":\"PARENTHESIZED LATIN SMALL LETTER Z\",\"char\":\"⒵\"},{\"hex\":\"&#24B6;\",\"name\":\"CIRCLED LATIN CAPITAL LETTER A\",\"char\":\"Ⓐ\"},{\"hex\":\"&#24B7;\",\"name\":\"CIRCLED LATIN CAPITAL LETTER B\",\"char\":\"Ⓑ\"},{\"hex\":\"&#24B8;\",\"name\":\"CIRCLED LATIN CAPITAL LETTER C\",\"char\":\"Ⓒ\"},{\"hex\":\"&#24B9;\",\"name\":\"CIRCLED LATIN CAPITAL LETTER D\",\"char\":\"Ⓓ\"},{\"hex\":\"&#24BA;\",\"name\":\"CIRCLED LATIN CAPITAL LETTER E\",\"char\":\"Ⓔ\"},{\"hex\":\"&#24BB;\",\"name\":\"CIRCLED LATIN CAPITAL LETTER F\",\"char\":\"Ⓕ\"},{\"hex\":\"&#24BC;\",\"name\":\"CIRCLED LATIN CAPITAL LETTER G\",\"char\":\"Ⓖ\"},{\"hex\":\"&#24BD;\",\"name\":\"CIRCLED LATIN CAPITAL LETTER H\",\"char\":\"Ⓗ\"},{\"hex\":\"&#24BE;\",\"name\":\"CIRCLED LATIN CAPITAL LETTER I\",\"char\":\"Ⓘ\"},{\"hex\":\"&#24BF;\",\"name\":\"CIRCLED LATIN CAPITAL LETTER J\",\"char\":\"Ⓙ\"},{\"hex\":\"&#24C0;\",\"name\":\"CIRCLED LATIN CAPITAL LETTER K\",\"char\":\"Ⓚ\"},{\"hex\":\"&#24C1;\",\"name\":\"CIRCLED LATIN CAPITAL LETTER L\",\"char\":\"Ⓛ\"},{\"hex\":\"&#24C2;\",\"name\":\"CIRCLED LATIN CAPITAL LETTER M\",\"char\":\"Ⓜ\"},{\"hex\":\"&#24C3;\",\"name\":\"CIRCLED LATIN CAPITAL LETTER N\",\"char\":\"Ⓝ\"},{\"hex\":\"&#24C4;\",\"name\":\"CIRCLED LATIN CAPITAL LETTER O\",\"char\":\"Ⓞ\"},{\"hex\":\"&#24C5;\",\"name\":\"CIRCLED LATIN CAPITAL LETTER P\",\"char\":\"Ⓟ\"},{\"hex\":\"&#24C6;\",\"name\":\"CIRCLED LATIN CAPITAL LETTER Q\",\"char\":\"Ⓠ\"},{\"hex\":\"&#24C7;\",\"name\":\"CIRCLED LATIN CAPITAL LETTER R\",\"char\":\"Ⓡ\"},{\"hex\":\"&#24C8;\",\"name\":\"CIRCLED LATIN CAPITAL LETTER S\",\"char\":\"Ⓢ\"},{\"hex\":\"&#24C9;\",\"name\":\"CIRCLED LATIN CAPITAL LETTER T\",\"char\":\"Ⓣ\"},{\"hex\":\"&#24CA;\",\"name\":\"CIRCLED LATIN CAPITAL LETTER U\",\"char\":\"Ⓤ\"},{\"hex\":\"&#24CB;\",\"name\":\"CIRCLED LATIN CAPITAL LETTER V\",\"char\":\"Ⓥ\"},{\"hex\":\"&#24CC;\",\"name\":\"CIRCLED LATIN CAPITAL LETTER W\",\"char\":\"Ⓦ\"},{\"hex\":\"&#24CD;\",\"name\":\"CIRCLED LATIN CAPITAL LETTER X\",\"char\":\"Ⓧ\"},{\"hex\":\"&#24CE;\",\"name\":\"CIRCLED LATIN CAPITAL LETTER Y\",\"char\":\"Ⓨ\"},{\"hex\":\"&#24CF;\",\"name\":\"CIRCLED LATIN CAPITAL LETTER Z\",\"char\":\"Ⓩ\"},{\"hex\":\"&#24D0;\",\"name\":\"CIRCLED LATIN SMALL LETTER A\",\"char\":\"ⓐ\"},{\"hex\":\"&#24D1;\",\"name\":\"CIRCLED LATIN SMALL LETTER B\",\"char\":\"ⓑ\"},{\"hex\":\"&#24D2;\",\"name\":\"CIRCLED LATIN SMALL LETTER C\",\"char\":\"ⓒ\"},{\"hex\":\"&#24D3;\",\"name\":\"CIRCLED LATIN SMALL LETTER D\",\"char\":\"ⓓ\"},{\"hex\":\"&#24D4;\",\"name\":\"CIRCLED LATIN SMALL LETTER E\",\"char\":\"ⓔ\"},{\"hex\":\"&#24D5;\",\"name\":\"CIRCLED LATIN SMALL LETTER F\",\"char\":\"ⓕ\"},{\"hex\":\"&#24D6;\",\"name\":\"CIRCLED LATIN SMALL LETTER G\",\"char\":\"ⓖ\"},{\"hex\":\"&#24D7;\",\"name\":\"CIRCLED LATIN SMALL LETTER H\",\"char\":\"ⓗ\"},{\"hex\":\"&#24D8;\",\"name\":\"CIRCLED LATIN SMALL LETTER I\",\"char\":\"ⓘ\"},{\"hex\":\"&#24D9;\",\"name\":\"CIRCLED LATIN SMALL LETTER J\",\"char\":\"ⓙ\"},{\"hex\":\"&#24DA;\",\"name\":\"CIRCLED LATIN SMALL LETTER K\",\"char\":\"ⓚ\"},{\"hex\":\"&#24DB;\",\"name\":\"CIRCLED LATIN SMALL LETTER L\",\"char\":\"ⓛ\"},{\"hex\":\"&#24DC;\",\"name\":\"CIRCLED LATIN SMALL LETTER M\",\"char\":\"ⓜ\"},{\"hex\":\"&#24DD;\",\"name\":\"CIRCLED LATIN SMALL LETTER N\",\"char\":\"ⓝ\"},{\"hex\":\"&#24DE;\",\"name\":\"CIRCLED LATIN SMALL LETTER O\",\"char\":\"ⓞ\"},{\"hex\":\"&#24DF;\",\"name\":\"CIRCLED LATIN SMALL LETTER P\",\"char\":\"ⓟ\"},{\"hex\":\"&#24E0;\",\"name\":\"CIRCLED LATIN SMALL LETTER Q\",\"char\":\"ⓠ\"},{\"hex\":\"&#24E1;\",\"name\":\"CIRCLED LATIN SMALL LETTER R\",\"char\":\"ⓡ\"},{\"hex\":\"&#24E2;\",\"name\":\"CIRCLED LATIN SMALL LETTER S\",\"char\":\"ⓢ\"},{\"hex\":\"&#24E3;\",\"name\":\"CIRCLED LATIN SMALL LETTER T\",\"char\":\"ⓣ\"},{\"hex\":\"&#24E4;\",\"name\":\"CIRCLED LATIN SMALL LETTER U\",\"char\":\"ⓤ\"},{\"hex\":\"&#24E5;\",\"name\":\"CIRCLED LATIN SMALL LETTER V\",\"char\":\"ⓥ\"},{\"hex\":\"&#24E6;\",\"name\":\"CIRCLED LATIN SMALL LETTER W\",\"char\":\"ⓦ\"},{\"hex\":\"&#24E7;\",\"name\":\"CIRCLED LATIN SMALL LETTER X\",\"char\":\"ⓧ\"},{\"hex\":\"&#24E8;\",\"name\":\"CIRCLED LATIN SMALL LETTER Y\",\"char\":\"ⓨ\"},{\"hex\":\"&#24E9;\",\"name\":\"CIRCLED LATIN SMALL LETTER Z\",\"char\":\"ⓩ\"},{\"hex\":\"&#24EA;\",\"name\":\"CIRCLED DIGIT ZERO\",\"char\":\"⓪\"},{\"hex\":\"&#2070;\",\"name\":\"SUPERSCRIPT ZERO\",\"char\":\"⁰\"},{\"hex\":\"&#2071;\",\"name\":\"SUPERSCRIPT LATIN SMALL LETTER I\",\"char\":\"ⁱ\"},{\"hex\":\"&#2074;\",\"name\":\"SUPERSCRIPT FOUR\",\"char\":\"⁴\"},{\"hex\":\"&#2075;\",\"name\":\"SUPERSCRIPT FIVE\",\"char\":\"⁵\"},{\"hex\":\"&#2076;\",\"name\":\"SUPERSCRIPT SIX\",\"char\":\"⁶\"},{\"hex\":\"&#2077;\",\"name\":\"SUPERSCRIPT SEVEN\",\"char\":\"⁷\"},{\"hex\":\"&#2078;\",\"name\":\"SUPERSCRIPT EIGHT\",\"char\":\"⁸\"},{\"hex\":\"&#2079;\",\"name\":\"SUPERSCRIPT NINE\",\"char\":\"⁹\"},{\"hex\":\"&#207A;\",\"name\":\"SUPERSCRIPT PLUS SIGN\",\"char\":\"⁺\"},{\"hex\":\"&#207B;\",\"name\":\"SUPERSCRIPT MINUS\",\"char\":\"⁻\"},{\"hex\":\"&#207C;\",\"name\":\"SUPERSCRIPT EQUALS SIGN\",\"char\":\"⁼\"},{\"hex\":\"&#207D;\",\"name\":\"SUPERSCRIPT LEFT PARENTHESIS\",\"char\":\"⁽\"},{\"hex\":\"&#207E;\",\"name\":\"SUPERSCRIPT RIGHT PARENTHESIS\",\"char\":\"⁾\"},{\"hex\":\"&#207F;\",\"name\":\"SUPERSCRIPT LATIN SMALL LETTER N (present in WGL4)\",\"char\":\"ⁿ\"},{\"hex\":\"&#2080;\",\"name\":\"SUBSCRIPT ZERO\",\"char\":\"₀\"},{\"hex\":\"&#2081;\",\"name\":\"SUBSCRIPT ONE\",\"char\":\"₁\"},{\"hex\":\"&#2082;\",\"name\":\"SUBSCRIPT TWO\",\"char\":\"₂\"},{\"hex\":\"&#2083;\",\"name\":\"SUBSCRIPT THREE\",\"char\":\"₃\"},{\"hex\":\"&#2084;\",\"name\":\"SUBSCRIPT FOUR\",\"char\":\"₄\"},{\"hex\":\"&#2085;\",\"name\":\"SUBSCRIPT FIVE\",\"char\":\"₅\"},{\"hex\":\"&#2086;\",\"name\":\"SUBSCRIPT SIX\",\"char\":\"₆\"},{\"hex\":\"&#2087;\",\"name\":\"SUBSCRIPT SEVEN\",\"char\":\"₇\"},{\"hex\":\"&#2088;\",\"name\":\"SUBSCRIPT EIGHT\",\"char\":\"₈\"},{\"hex\":\"&#2089;\",\"name\":\"SUBSCRIPT NINE\",\"char\":\"₉\"},{\"hex\":\"&#208A;\",\"name\":\"SUBSCRIPT PLUS SIGN\",\"char\":\"₊\"},{\"hex\":\"&#208B;\",\"name\":\"SUBSCRIPT MINUS\",\"char\":\"₋\"},{\"hex\":\"&#208C;\",\"name\":\"SUBSCRIPT EQUALS SIGN\",\"char\":\"₌\"},{\"hex\":\"&#208D;\",\"name\":\"SUBSCRIPT LEFT PARENTHESIS\",\"char\":\"₍\"},{\"hex\":\"&#208E;\",\"name\":\"SUBSCRIPT RIGHT PARENTHESIS\",\"char\":\"₎\"},{\"hex\":\"&#2090;\",\"name\":\"LATIN SUBSCRIPT SMALL LETTER A\",\"char\":\"ₐ\"},{\"hex\":\"&#2091;\",\"name\":\"LATIN SUBSCRIPT SMALL LETTER E\",\"char\":\"ₑ\"},{\"hex\":\"&#2092;\",\"name\":\"LATIN SUBSCRIPT SMALL LETTER O\",\"char\":\"ₒ\"},{\"hex\":\"&#2093;\",\"name\":\"LATIN SUBSCRIPT SMALL LETTER X\",\"char\":\"ₓ\"},{\"hex\":\"&#2094;\",\"name\":\"LATIN SUBSCRIPT SMALL LETTER SCHWA\",\"char\":\"ₔ\"}],\"Latin\":[{\"entity\":\"&Agrave;\",\"hex\":\"&#00C0;\",\"name\":\"LATIN CAPITAL LETTER A WITH GRAVE\",\"char\":\"À\"},{\"entity\":\"&Aacute;\",\"hex\":\"&#00C1;\",\"name\":\"LATIN CAPITAL LETTER A WITH ACUTE\",\"char\":\"Á\"},{\"entity\":\"&Acirc;\",\"hex\":\"&#00C2;\",\"name\":\"LATIN CAPITAL LETTER A WITH CIRCUMFLEX\",\"char\":\"Â\"},{\"entity\":\"&Atilde;\",\"hex\":\"&#00C3;\",\"name\":\"LATIN CAPITAL LETTER A WITH TILDE\",\"char\":\"Ã\"},{\"entity\":\"&Auml;\",\"hex\":\"&#00C4;\",\"name\":\"LATIN CAPITAL LETTER A WITH DIAERESIS\",\"char\":\"Ä\"},{\"entity\":\"&Aring;\",\"hex\":\"&#00C5;\",\"name\":\"LATIN CAPITAL LETTER A WITH RING ABOVE\",\"char\":\"Å\"},{\"entity\":\"&AElig;\",\"hex\":\"&#00C6;\",\"name\":\"LATIN CAPITAL LETTER AE\",\"char\":\"Æ\"},{\"entity\":\"&Ccedil;\",\"hex\":\"&#00C7;\",\"name\":\"LATIN CAPITAL LETTER C WITH CEDILLA\",\"char\":\"Ç\"},{\"entity\":\"&Egrave;\",\"hex\":\"&#00C8;\",\"name\":\"LATIN CAPITAL LETTER E WITH GRAVE\",\"char\":\"È\"},{\"entity\":\"&Eacute;\",\"hex\":\"&#00C9;\",\"name\":\"LATIN CAPITAL LETTER E WITH ACUTE\",\"char\":\"É\"},{\"entity\":\"&Ecirc;\",\"hex\":\"&#00CA;\",\"name\":\"LATIN CAPITAL LETTER E WITH CIRCUMFLEX\",\"char\":\"Ê\"},{\"entity\":\"&Euml;\",\"hex\":\"&#00CB;\",\"name\":\"LATIN CAPITAL LETTER E WITH DIAERESIS\",\"char\":\"Ë\"},{\"entity\":\"&Igrave;\",\"hex\":\"&#00CC;\",\"name\":\"LATIN CAPITAL LETTER I WITH GRAVE\",\"char\":\"Ì\"},{\"entity\":\"&Iacute;\",\"hex\":\"&#00CD;\",\"name\":\"LATIN CAPITAL LETTER I WITH ACUTE\",\"char\":\"Í\"},{\"entity\":\"&Icirc;\",\"hex\":\"&#00CE;\",\"name\":\"LATIN CAPITAL LETTER I WITH CIRCUMFLEX\",\"char\":\"Î\"},{\"entity\":\"&Iuml;\",\"hex\":\"&#00CF;\",\"name\":\"LATIN CAPITAL LETTER I WITH DIAERESIS\",\"char\":\"Ï\"},{\"entity\":\"&ETH;\",\"hex\":\"&#00D0;\",\"name\":\"LATIN CAPITAL LETTER ETH\",\"char\":\"Ð\"},{\"entity\":\"&Ntilde;\",\"hex\":\"&#00D1;\",\"name\":\"LATIN CAPITAL LETTER N WITH TILDE\",\"char\":\"Ñ\"},{\"entity\":\"&Ograve;\",\"hex\":\"&#00D2;\",\"name\":\"LATIN CAPITAL LETTER O WITH GRAVE\",\"char\":\"Ò\"},{\"entity\":\"&Oacute;\",\"hex\":\"&#00D3;\",\"name\":\"LATIN CAPITAL LETTER O WITH ACUTE\",\"char\":\"Ó\"},{\"entity\":\"&Ocirc;\",\"hex\":\"&#00D4;\",\"name\":\"LATIN CAPITAL LETTER O WITH CIRCUMFLEX\",\"char\":\"Ô\"},{\"entity\":\"&Otilde;\",\"hex\":\"&#00D5;\",\"name\":\"LATIN CAPITAL LETTER O WITH TILDE\",\"char\":\"Õ\"},{\"entity\":\"&Ouml;\",\"hex\":\"&#00D6;\",\"name\":\"LATIN CAPITAL LETTER O WITH DIAERESIS\",\"char\":\"Ö\"},{\"entity\":\"&times;\",\"hex\":\"&#00D7;\",\"name\":\"MULTIPLICATION SIGN\",\"char\":\"×\"},{\"entity\":\"&Oslash;\",\"hex\":\"&#00D8;\",\"name\":\"LATIN CAPITAL LETTER O WITH STROKE\",\"char\":\"Ø\"},{\"entity\":\"&Ugrave;\",\"hex\":\"&#00D9;\",\"name\":\"LATIN CAPITAL LETTER U WITH GRAVE\",\"char\":\"Ù\"},{\"entity\":\"&Uacute;\",\"hex\":\"&#00DA;\",\"name\":\"LATIN CAPITAL LETTER U WITH ACUTE\",\"char\":\"Ú\"},{\"entity\":\"&Ucirc;\",\"hex\":\"&#00DB;\",\"name\":\"LATIN CAPITAL LETTER U WITH CIRCUMFLEX\",\"char\":\"Û\"},{\"entity\":\"&Uuml;\",\"hex\":\"&#00DC;\",\"name\":\"LATIN CAPITAL LETTER U WITH DIAERESIS\",\"char\":\"Ü\"},{\"entity\":\"&Yacute;\",\"hex\":\"&#00DD;\",\"name\":\"LATIN CAPITAL LETTER Y WITH ACUTE\",\"char\":\"Ý\"},{\"entity\":\"&THORN;\",\"hex\":\"&#00DE;\",\"name\":\"LATIN CAPITAL LETTER THORN\",\"char\":\"Þ\"},{\"entity\":\"&szlig;\",\"hex\":\"&#00DF;\",\"name\":\"LATIN SMALL LETTER SHARP S\",\"char\":\"ß\"},{\"entity\":\"&agrave;\",\"hex\":\"&#00E0;\",\"name\":\"LATIN SMALL LETTER A WITH GRAVE\",\"char\":\"à\"},{\"entity\":\"&aacute;\",\"hex\":\"&#00E1;\",\"name\":\"LATIN SMALL LETTER A WITH ACUTE\",\"char\":\"á\"},{\"entity\":\"&acirc;\",\"hex\":\"&#00E2;\",\"name\":\"LATIN SMALL LETTER A WITH CIRCUMFLEX\",\"char\":\"â\"},{\"entity\":\"&atilde;\",\"hex\":\"&#00E3;\",\"name\":\"LATIN SMALL LETTER A WITH TILDE\",\"char\":\"ã\"},{\"entity\":\"&auml;\",\"hex\":\"&#00E4;\",\"name\":\"LATIN SMALL LETTER A WITH DIAERESIS\",\"char\":\"ä\"},{\"entity\":\"&aring;\",\"hex\":\"&#00E5;\",\"name\":\"LATIN SMALL LETTER A WITH RING ABOVE\",\"char\":\"å\"},{\"entity\":\"&aelig;\",\"hex\":\"&#00E6;\",\"name\":\"LATIN SMALL LETTER AE\",\"char\":\"æ\"},{\"entity\":\"&ccedil;\",\"hex\":\"&#00E7;\",\"name\":\"LATIN SMALL LETTER C WITH CEDILLA\",\"char\":\"ç\"},{\"entity\":\"&egrave;\",\"hex\":\"&#00E8;\",\"name\":\"LATIN SMALL LETTER E WITH GRAVE\",\"char\":\"è\"},{\"entity\":\"&eacute;\",\"hex\":\"&#00E9;\",\"name\":\"LATIN SMALL LETTER E WITH ACUTE\",\"char\":\"é\"},{\"entity\":\"&ecirc;\",\"hex\":\"&#00EA;\",\"name\":\"LATIN SMALL LETTER E WITH CIRCUMFLEX\",\"char\":\"ê\"},{\"entity\":\"&euml;\",\"hex\":\"&#00EB;\",\"name\":\"LATIN SMALL LETTER E WITH DIAERESIS\",\"char\":\"ë\"},{\"entity\":\"&igrave;\",\"hex\":\"&#00EC;\",\"name\":\"LATIN SMALL LETTER I WITH GRAVE\",\"char\":\"ì\"},{\"entity\":\"&iacute;\",\"hex\":\"&#00ED;\",\"name\":\"LATIN SMALL LETTER I WITH ACUTE\",\"char\":\"í\"},{\"entity\":\"&icirc;\",\"hex\":\"&#00EE;\",\"name\":\"LATIN SMALL LETTER I WITH CIRCUMFLEX\",\"char\":\"î\"},{\"entity\":\"&iuml;\",\"hex\":\"&#00EF;\",\"name\":\"LATIN SMALL LETTER I WITH DIAERESIS\",\"char\":\"ï\"},{\"entity\":\"&eth;\",\"hex\":\"&#00F0;\",\"name\":\"LATIN SMALL LETTER ETH\",\"char\":\"ð\"},{\"entity\":\"&ntilde;\",\"hex\":\"&#00F1;\",\"name\":\"LATIN SMALL LETTER N WITH TILDE\",\"char\":\"ñ\"},{\"entity\":\"&ograve;\",\"hex\":\"&#00F2;\",\"name\":\"LATIN SMALL LETTER O WITH GRAVE\",\"char\":\"ò\"},{\"entity\":\"&oacute;\",\"hex\":\"&#00F3;\",\"name\":\"LATIN SMALL LETTER O WITH ACUTE\",\"char\":\"ó\"},{\"entity\":\"&ocirc;\",\"hex\":\"&#00F4;\",\"name\":\"LATIN SMALL LETTER O WITH CIRCUMFLEX\",\"char\":\"ô\"},{\"entity\":\"&otilde;\",\"hex\":\"&#00F5;\",\"name\":\"LATIN SMALL LETTER O WITH TILDE\",\"char\":\"õ\"},{\"entity\":\"&ouml;\",\"hex\":\"&#00F6;\",\"name\":\"LATIN SMALL LETTER O WITH DIAERESIS\",\"char\":\"ö\"},{\"entity\":\"&divide;\",\"hex\":\"&#00F7;\",\"name\":\"DIVISION SIGN\",\"char\":\"÷\"},{\"entity\":\"&oslash;\",\"hex\":\"&#00F8;\",\"name\":\"LATIN SMALL LETTER O WITH STROKE\",\"char\":\"ø\"},{\"entity\":\"&ugrave;\",\"hex\":\"&#00F9;\",\"name\":\"LATIN SMALL LETTER U WITH GRAVE\",\"char\":\"ù\"},{\"entity\":\"&uacute;\",\"hex\":\"&#00FA;\",\"name\":\"LATIN SMALL LETTER U WITH ACUTE\",\"char\":\"ú\"},{\"entity\":\"&ucirc;\",\"hex\":\"&#00FB;\",\"name\":\"LATIN SMALL LETTER U WITH CIRCUMFLEX\",\"char\":\"û\"},{\"entity\":\"&uuml;\",\"hex\":\"&#00FC;\",\"name\":\"LATIN SMALL LETTER U WITH DIAERESIS\",\"char\":\"ü\"},{\"entity\":\"&yacute;\",\"hex\":\"&#00FD;\",\"name\":\"LATIN SMALL LETTER Y WITH ACUTE\",\"char\":\"ý\"},{\"entity\":\"&thorn;\",\"hex\":\"&#00FE;\",\"name\":\"LATIN SMALL LETTER THORN\",\"char\":\"þ\"},{\"entity\":\"&yuml;\",\"hex\":\"&#00FF;\",\"name\":\"LATIN SMALL LETTER Y WITH DIAERESIS\",\"char\":\"ÿ\"},{\"hex\":\"&#0100;\",\"name\":\"LATIN CAPITAL LETTER A WITH MACRON\",\"char\":\"Ā\"},{\"hex\":\"&#0101;\",\"name\":\"LATIN SMALL LETTER A WITH MACRON\",\"char\":\"ā\"},{\"hex\":\"&#0102;\",\"name\":\"LATIN CAPITAL LETTER A WITH BREVE\",\"char\":\"Ă\"},{\"hex\":\"&#0103;\",\"name\":\"LATIN SMALL LETTER A WITH BREVE\",\"char\":\"ă\"},{\"hex\":\"&#0104;\",\"name\":\"LATIN CAPITAL LETTER A WITH OGONEK\",\"char\":\"Ą\"},{\"hex\":\"&#0105;\",\"name\":\"LATIN SMALL LETTER A WITH OGONEK\",\"char\":\"ą\"},{\"hex\":\"&#0106;\",\"name\":\"LATIN CAPITAL LETTER C WITH ACUTE\",\"char\":\"Ć\"},{\"hex\":\"&#0107;\",\"name\":\"LATIN SMALL LETTER C WITH ACUTE\",\"char\":\"ć\"},{\"hex\":\"&#0108;\",\"name\":\"LATIN CAPITAL LETTER C WITH CIRCUMFLEX\",\"char\":\"Ĉ\"},{\"hex\":\"&#0109;\",\"name\":\"LATIN SMALL LETTER C WITH CIRCUMFLEX\",\"char\":\"ĉ\"},{\"hex\":\"&#010A;\",\"name\":\"LATIN CAPITAL LETTER C WITH DOT ABOVE\",\"char\":\"Ċ\"},{\"hex\":\"&#010B;\",\"name\":\"LATIN SMALL LETTER C WITH DOT ABOVE\",\"char\":\"ċ\"},{\"hex\":\"&#010C;\",\"name\":\"LATIN CAPITAL LETTER C WITH CARON\",\"char\":\"Č\"},{\"hex\":\"&#010D;\",\"name\":\"LATIN SMALL LETTER C WITH CARON\",\"char\":\"č\"},{\"hex\":\"&#010E;\",\"name\":\"LATIN CAPITAL LETTER D WITH CARON\",\"char\":\"Ď\"},{\"hex\":\"&#010F;\",\"name\":\"LATIN SMALL LETTER D WITH CARON\",\"char\":\"ď\"},{\"hex\":\"&#0110;\",\"name\":\"LATIN CAPITAL LETTER D WITH STROKE\",\"char\":\"Đ\"},{\"hex\":\"&#0111;\",\"name\":\"LATIN SMALL LETTER D WITH STROKE\",\"char\":\"đ\"},{\"hex\":\"&#0112;\",\"name\":\"LATIN CAPITAL LETTER E WITH MACRON\",\"char\":\"Ē\"},{\"hex\":\"&#0113;\",\"name\":\"LATIN SMALL LETTER E WITH MACRON\",\"char\":\"ē\"},{\"hex\":\"&#0114;\",\"name\":\"LATIN CAPITAL LETTER E WITH BREVE\",\"char\":\"Ĕ\"},{\"hex\":\"&#0115;\",\"name\":\"LATIN SMALL LETTER E WITH BREVE\",\"char\":\"ĕ\"},{\"hex\":\"&#0116;\",\"name\":\"LATIN CAPITAL LETTER E WITH DOT ABOVE\",\"char\":\"Ė\"},{\"hex\":\"&#0117;\",\"name\":\"LATIN SMALL LETTER E WITH DOT ABOVE\",\"char\":\"ė\"},{\"hex\":\"&#0118;\",\"name\":\"LATIN CAPITAL LETTER E WITH OGONEK\",\"char\":\"Ę\"},{\"hex\":\"&#0119;\",\"name\":\"LATIN SMALL LETTER E WITH OGONEK\",\"char\":\"ę\"},{\"hex\":\"&#011A;\",\"name\":\"LATIN CAPITAL LETTER E WITH CARON\",\"char\":\"Ě\"},{\"hex\":\"&#011B;\",\"name\":\"LATIN SMALL LETTER E WITH CARON\",\"char\":\"ě\"},{\"hex\":\"&#011C;\",\"name\":\"LATIN CAPITAL LETTER G WITH CIRCUMFLEX\",\"char\":\"Ĝ\"},{\"hex\":\"&#011D;\",\"name\":\"LATIN SMALL LETTER G WITH CIRCUMFLEX\",\"char\":\"ĝ\"},{\"hex\":\"&#011E;\",\"name\":\"LATIN CAPITAL LETTER G WITH BREVE\",\"char\":\"Ğ\"},{\"hex\":\"&#011F;\",\"name\":\"LATIN SMALL LETTER G WITH BREVE\",\"char\":\"ğ\"},{\"hex\":\"&#0120;\",\"name\":\"LATIN CAPITAL LETTER G WITH DOT ABOVE\",\"char\":\"Ġ\"},{\"hex\":\"&#0121;\",\"name\":\"LATIN SMALL LETTER G WITH DOT ABOVE\",\"char\":\"ġ\"},{\"hex\":\"&#0122;\",\"name\":\"LATIN CAPITAL LETTER G WITH CEDILLA\",\"char\":\"Ģ\"},{\"hex\":\"&#0123;\",\"name\":\"LATIN SMALL LETTER G WITH CEDILLA\",\"char\":\"ģ\"},{\"hex\":\"&#0124;\",\"name\":\"LATIN CAPITAL LETTER H WITH CIRCUMFLEX\",\"char\":\"Ĥ\"},{\"hex\":\"&#0125;\",\"name\":\"LATIN SMALL LETTER H WITH CIRCUMFLEX\",\"char\":\"ĥ\"},{\"hex\":\"&#0126;\",\"name\":\"LATIN CAPITAL LETTER H WITH STROKE\",\"char\":\"Ħ\"},{\"hex\":\"&#0127;\",\"name\":\"LATIN SMALL LETTER H WITH STROKE\",\"char\":\"ħ\"},{\"hex\":\"&#0128;\",\"name\":\"LATIN CAPITAL LETTER I WITH TILDE\",\"char\":\"Ĩ\"},{\"hex\":\"&#0129;\",\"name\":\"LATIN SMALL LETTER I WITH TILDE\",\"char\":\"ĩ\"},{\"hex\":\"&#012A;\",\"name\":\"LATIN CAPITAL LETTER I WITH MACRON\",\"char\":\"Ī\"},{\"hex\":\"&#012B;\",\"name\":\"LATIN SMALL LETTER I WITH MACRON\",\"char\":\"ī\"},{\"hex\":\"&#012C;\",\"name\":\"LATIN CAPITAL LETTER I WITH BREVE\",\"char\":\"Ĭ\"},{\"hex\":\"&#012D;\",\"name\":\"LATIN SMALL LETTER I WITH BREVE\",\"char\":\"ĭ\"},{\"hex\":\"&#012E;\",\"name\":\"LATIN CAPITAL LETTER I WITH OGONEK\",\"char\":\"Į\"},{\"hex\":\"&#012F;\",\"name\":\"LATIN SMALL LETTER I WITH OGONEK\",\"char\":\"į\"},{\"hex\":\"&#0130;\",\"name\":\"LATIN CAPITAL LETTER I WITH DOT ABOVE\",\"char\":\"İ\"},{\"hex\":\"&#0131;\",\"name\":\"LATIN SMALL LETTER DOTLESS I\",\"char\":\"ı\"},{\"hex\":\"&#0132;\",\"name\":\"LATIN CAPITAL LIGATURE IJ\",\"char\":\"Ĳ\"},{\"hex\":\"&#0133;\",\"name\":\"LATIN SMALL LIGATURE IJ\",\"char\":\"ĳ\"},{\"hex\":\"&#0134;\",\"name\":\"LATIN CAPITAL LETTER J WITH CIRCUMFLEX\",\"char\":\"Ĵ\"},{\"hex\":\"&#0135;\",\"name\":\"LATIN SMALL LETTER J WITH CIRCUMFLEX\",\"char\":\"ĵ\"},{\"hex\":\"&#0136;\",\"name\":\"LATIN CAPITAL LETTER K WITH CEDILLA\",\"char\":\"Ķ\"},{\"hex\":\"&#0137;\",\"name\":\"LATIN SMALL LETTER K WITH CEDILLA\",\"char\":\"ķ\"},{\"hex\":\"&#0138;\",\"name\":\"LATIN SMALL LETTER KRA\",\"char\":\"ĸ\"},{\"hex\":\"&#0139;\",\"name\":\"LATIN CAPITAL LETTER L WITH ACUTE\",\"char\":\"Ĺ\"},{\"hex\":\"&#013A;\",\"name\":\"LATIN SMALL LETTER L WITH ACUTE\",\"char\":\"ĺ\"},{\"hex\":\"&#013B;\",\"name\":\"LATIN CAPITAL LETTER L WITH CEDILLA\",\"char\":\"Ļ\"},{\"hex\":\"&#013C;\",\"name\":\"LATIN SMALL LETTER L WITH CEDILLA\",\"char\":\"ļ\"},{\"hex\":\"&#013D;\",\"name\":\"LATIN CAPITAL LETTER L WITH CARON\",\"char\":\"Ľ\"},{\"hex\":\"&#013E;\",\"name\":\"LATIN SMALL LETTER L WITH CARON\",\"char\":\"ľ\"},{\"hex\":\"&#013F;\",\"name\":\"LATIN CAPITAL LETTER L WITH MIDDLE DOT\",\"char\":\"Ŀ\"},{\"hex\":\"&#0140;\",\"name\":\"LATIN SMALL LETTER L WITH MIDDLE DOT\",\"char\":\"ŀ\"},{\"hex\":\"&#0141;\",\"name\":\"LATIN CAPITAL LETTER L WITH STROKE\",\"char\":\"Ł\"},{\"hex\":\"&#0142;\",\"name\":\"LATIN SMALL LETTER L WITH STROKE\",\"char\":\"ł\"},{\"hex\":\"&#0143;\",\"name\":\"LATIN CAPITAL LETTER N WITH ACUTE\",\"char\":\"Ń\"},{\"hex\":\"&#0144;\",\"name\":\"LATIN SMALL LETTER N WITH ACUTE\",\"char\":\"ń\"},{\"hex\":\"&#0145;\",\"name\":\"LATIN CAPITAL LETTER N WITH CEDILLA\",\"char\":\"Ņ\"},{\"hex\":\"&#0146;\",\"name\":\"LATIN SMALL LETTER N WITH CEDILLA\",\"char\":\"ņ\"},{\"hex\":\"&#0147;\",\"name\":\"LATIN CAPITAL LETTER N WITH CARON\",\"char\":\"Ň\"},{\"hex\":\"&#0148;\",\"name\":\"LATIN SMALL LETTER N WITH CARON\",\"char\":\"ň\"},{\"hex\":\"&#0149;\",\"name\":\"LATIN SMALL LETTER N PRECEDED BY APOSTROPHE\",\"char\":\"ŉ\"},{\"hex\":\"&#014A;\",\"name\":\"LATIN CAPITAL LETTER ENG\",\"char\":\"Ŋ\"},{\"hex\":\"&#014B;\",\"name\":\"LATIN SMALL LETTER ENG\",\"char\":\"ŋ\"},{\"hex\":\"&#014C;\",\"name\":\"LATIN CAPITAL LETTER O WITH MACRON\",\"char\":\"Ō\"},{\"hex\":\"&#014D;\",\"name\":\"LATIN SMALL LETTER O WITH MACRON\",\"char\":\"ō\"},{\"hex\":\"&#014E;\",\"name\":\"LATIN CAPITAL LETTER O WITH BREVE\",\"char\":\"Ŏ\"},{\"hex\":\"&#014F;\",\"name\":\"LATIN SMALL LETTER O WITH BREVE\",\"char\":\"ŏ\"},{\"hex\":\"&#0150;\",\"name\":\"LATIN CAPITAL LETTER O WITH DOUBLE ACUTE\",\"char\":\"Ő\"},{\"hex\":\"&#0151;\",\"name\":\"LATIN SMALL LETTER O WITH DOUBLE ACUTE\",\"char\":\"ő\"},{\"entity\":\"&OElig;\",\"hex\":\"&#0152;\",\"name\":\"LATIN CAPITAL LIGATURE OE\",\"char\":\"Œ\"},{\"entity\":\"&oelig;\",\"hex\":\"&#0153;\",\"name\":\"LATIN SMALL LIGATURE OE\",\"char\":\"œ\"},{\"hex\":\"&#0154;\",\"name\":\"LATIN CAPITAL LETTER R WITH ACUTE\",\"char\":\"Ŕ\"},{\"hex\":\"&#0155;\",\"name\":\"LATIN SMALL LETTER R WITH ACUTE\",\"char\":\"ŕ\"},{\"hex\":\"&#0156;\",\"name\":\"LATIN CAPITAL LETTER R WITH CEDILLA\",\"char\":\"Ŗ\"},{\"hex\":\"&#0157;\",\"name\":\"LATIN SMALL LETTER R WITH CEDILLA\",\"char\":\"ŗ\"},{\"hex\":\"&#0158;\",\"name\":\"LATIN CAPITAL LETTER R WITH CARON\",\"char\":\"Ř\"},{\"hex\":\"&#0159;\",\"name\":\"LATIN SMALL LETTER R WITH CARON\",\"char\":\"ř\"},{\"hex\":\"&#015A;\",\"name\":\"LATIN CAPITAL LETTER S WITH ACUTE\",\"char\":\"Ś\"},{\"hex\":\"&#015B;\",\"name\":\"LATIN SMALL LETTER S WITH ACUTE\",\"char\":\"ś\"},{\"hex\":\"&#015C;\",\"name\":\"LATIN CAPITAL LETTER S WITH CIRCUMFLEX\",\"char\":\"Ŝ\"},{\"hex\":\"&#015D;\",\"name\":\"LATIN SMALL LETTER S WITH CIRCUMFLEX\",\"char\":\"ŝ\"},{\"hex\":\"&#015E;\",\"name\":\"LATIN CAPITAL LETTER S WITH CEDILLA\",\"char\":\"Ş\"},{\"hex\":\"&#015F;\",\"name\":\"LATIN SMALL LETTER S WITH CEDILLA\",\"char\":\"ş\"},{\"entity\":\"&Scaron;\",\"hex\":\"&#0160;\",\"name\":\"LATIN CAPITAL LETTER S WITH CARON\",\"char\":\"Š\"},{\"entity\":\"&scaron;\",\"hex\":\"&#0161;\",\"name\":\"LATIN SMALL LETTER S WITH CARON\",\"char\":\"š\"},{\"hex\":\"&#0162;\",\"name\":\"LATIN CAPITAL LETTER T WITH CEDILLA\",\"char\":\"Ţ\"},{\"hex\":\"&#0163;\",\"name\":\"LATIN SMALL LETTER T WITH CEDILLA\",\"char\":\"ţ\"},{\"hex\":\"&#0164;\",\"name\":\"LATIN CAPITAL LETTER T WITH CARON\",\"char\":\"Ť\"},{\"hex\":\"&#0165;\",\"name\":\"LATIN SMALL LETTER T WITH CARON\",\"char\":\"ť\"},{\"hex\":\"&#0166;\",\"name\":\"LATIN CAPITAL LETTER T WITH STROKE\",\"char\":\"Ŧ\"},{\"hex\":\"&#0167;\",\"name\":\"LATIN SMALL LETTER T WITH STROKE\",\"char\":\"ŧ\"},{\"hex\":\"&#0168;\",\"name\":\"LATIN CAPITAL LETTER U WITH TILDE\",\"char\":\"Ũ\"},{\"hex\":\"&#0169;\",\"name\":\"LATIN SMALL LETTER U WITH TILDE\",\"char\":\"ũ\"},{\"hex\":\"&#016A;\",\"name\":\"LATIN CAPITAL LETTER U WITH MACRON\",\"char\":\"Ū\"},{\"hex\":\"&#016B;\",\"name\":\"LATIN SMALL LETTER U WITH MACRON\",\"char\":\"ū\"},{\"hex\":\"&#016C;\",\"name\":\"LATIN CAPITAL LETTER U WITH BREVE\",\"char\":\"Ŭ\"},{\"hex\":\"&#016D;\",\"name\":\"LATIN SMALL LETTER U WITH BREVE\",\"char\":\"ŭ\"},{\"hex\":\"&#016E;\",\"name\":\"LATIN CAPITAL LETTER U WITH RING ABOVE\",\"char\":\"Ů\"},{\"hex\":\"&#016F;\",\"name\":\"LATIN SMALL LETTER U WITH RING ABOVE\",\"char\":\"ů\"},{\"hex\":\"&#0170;\",\"name\":\"LATIN CAPITAL LETTER U WITH DOUBLE ACUTE\",\"char\":\"Ű\"},{\"hex\":\"&#0171;\",\"name\":\"LATIN SMALL LETTER U WITH DOUBLE ACUTE\",\"char\":\"ű\"},{\"hex\":\"&#0172;\",\"name\":\"LATIN CAPITAL LETTER U WITH OGONEK\",\"char\":\"Ų\"},{\"hex\":\"&#0173;\",\"name\":\"LATIN SMALL LETTER U WITH OGONEK\",\"char\":\"ų\"},{\"hex\":\"&#0174;\",\"name\":\"LATIN CAPITAL LETTER W WITH CIRCUMFLEX\",\"char\":\"Ŵ\"},{\"hex\":\"&#0175;\",\"name\":\"LATIN SMALL LETTER W WITH CIRCUMFLEX\",\"char\":\"ŵ\"},{\"hex\":\"&#0176;\",\"name\":\"LATIN CAPITAL LETTER Y WITH CIRCUMFLEX\",\"char\":\"Ŷ\"},{\"hex\":\"&#0177;\",\"name\":\"LATIN SMALL LETTER Y WITH CIRCUMFLEX\",\"char\":\"ŷ\"},{\"entity\":\"&Yuml;\",\"hex\":\"&#0178;\",\"name\":\"LATIN CAPITAL LETTER Y WITH DIAERESIS\",\"char\":\"Ÿ\"},{\"hex\":\"&#0179;\",\"name\":\"LATIN CAPITAL LETTER Z WITH ACUTE\",\"char\":\"Ź\"},{\"hex\":\"&#017A;\",\"name\":\"LATIN SMALL LETTER Z WITH ACUTE\",\"char\":\"ź\"},{\"hex\":\"&#017B;\",\"name\":\"LATIN CAPITAL LETTER Z WITH DOT ABOVE\",\"char\":\"Ż\"},{\"hex\":\"&#017C;\",\"name\":\"LATIN SMALL LETTER Z WITH DOT ABOVE\",\"char\":\"ż\"},{\"hex\":\"&#017D;\",\"name\":\"LATIN CAPITAL LETTER Z WITH CARON\",\"char\":\"Ž\"},{\"hex\":\"&#017E;\",\"name\":\"LATIN SMALL LETTER Z WITH CARON\",\"char\":\"ž\"},{\"hex\":\"&#017F;\",\"name\":\"LATIN SMALL LETTER LONG S\",\"char\":\"ſ\"},{\"hex\":\"&#0180;\",\"name\":\"LATIN SMALL LETTER B WITH STROKE\",\"char\":\"ƀ\"},{\"hex\":\"&#0181;\",\"name\":\"LATIN CAPITAL LETTER B WITH HOOK\",\"char\":\"Ɓ\"},{\"hex\":\"&#0182;\",\"name\":\"LATIN CAPITAL LETTER B WITH TOPBAR\",\"char\":\"Ƃ\"},{\"hex\":\"&#0183;\",\"name\":\"LATIN SMALL LETTER B WITH TOPBAR\",\"char\":\"ƃ\"},{\"hex\":\"&#0184;\",\"name\":\"LATIN CAPITAL LETTER TONE SIX\",\"char\":\"Ƅ\"},{\"hex\":\"&#0185;\",\"name\":\"LATIN SMALL LETTER TONE SIX\",\"char\":\"ƅ\"},{\"hex\":\"&#0186;\",\"name\":\"LATIN CAPITAL LETTER OPEN O\",\"char\":\"Ɔ\"},{\"hex\":\"&#0187;\",\"name\":\"LATIN CAPITAL LETTER C WITH HOOK\",\"char\":\"Ƈ\"},{\"hex\":\"&#0188;\",\"name\":\"LATIN SMALL LETTER C WITH HOOK\",\"char\":\"ƈ\"},{\"hex\":\"&#0189;\",\"name\":\"LATIN CAPITAL LETTER AFRICAN D\",\"char\":\"Ɖ\"},{\"hex\":\"&#018A;\",\"name\":\"LATIN CAPITAL LETTER D WITH HOOK\",\"char\":\"Ɗ\"},{\"hex\":\"&#018B;\",\"name\":\"LATIN CAPITAL LETTER D WITH TOPBAR\",\"char\":\"Ƌ\"},{\"hex\":\"&#018C;\",\"name\":\"LATIN SMALL LETTER D WITH TOPBAR\",\"char\":\"ƌ\"},{\"hex\":\"&#018D;\",\"name\":\"LATIN SMALL LETTER TURNED DELTA\",\"char\":\"ƍ\"},{\"hex\":\"&#018E;\",\"name\":\"LATIN CAPITAL LETTER REVERSED E\",\"char\":\"Ǝ\"},{\"hex\":\"&#018F;\",\"name\":\"LATIN CAPITAL LETTER SCHWA\",\"char\":\"Ə\"},{\"hex\":\"&#0190;\",\"name\":\"LATIN CAPITAL LETTER OPEN E\",\"char\":\"Ɛ\"},{\"hex\":\"&#0191;\",\"name\":\"LATIN CAPITAL LETTER F WITH HOOK\",\"char\":\"Ƒ\"},{\"entity\":\"&fnof;\",\"hex\":\"&#0192;\",\"name\":\"LATIN SMALL LETTER F WITH HOOK\",\"char\":\"ƒ\"},{\"hex\":\"&#0193;\",\"name\":\"LATIN CAPITAL LETTER G WITH HOOK\",\"char\":\"Ɠ\"},{\"hex\":\"&#0194;\",\"name\":\"LATIN CAPITAL LETTER GAMMA\",\"char\":\"Ɣ\"},{\"hex\":\"&#0195;\",\"name\":\"LATIN SMALL LETTER HV\",\"char\":\"ƕ\"},{\"hex\":\"&#0196;\",\"name\":\"LATIN CAPITAL LETTER IOTA\",\"char\":\"Ɩ\"},{\"hex\":\"&#0197;\",\"name\":\"LATIN CAPITAL LETTER I WITH STROKE\",\"char\":\"Ɨ\"},{\"hex\":\"&#0198;\",\"name\":\"LATIN CAPITAL LETTER K WITH HOOK\",\"char\":\"Ƙ\"},{\"hex\":\"&#0199;\",\"name\":\"LATIN SMALL LETTER K WITH HOOK\",\"char\":\"ƙ\"},{\"hex\":\"&#019A;\",\"name\":\"LATIN SMALL LETTER L WITH BAR\",\"char\":\"ƚ\"},{\"hex\":\"&#019B;\",\"name\":\"LATIN SMALL LETTER LAMBDA WITH STROKE\",\"char\":\"ƛ\"},{\"hex\":\"&#019C;\",\"name\":\"LATIN CAPITAL LETTER TURNED M\",\"char\":\"Ɯ\"},{\"hex\":\"&#019D;\",\"name\":\"LATIN CAPITAL LETTER N WITH LEFT HOOK\",\"char\":\"Ɲ\"},{\"hex\":\"&#019E;\",\"name\":\"LATIN SMALL LETTER N WITH LONG RIGHT LEG\",\"char\":\"ƞ\"},{\"hex\":\"&#019F;\",\"name\":\"LATIN CAPITAL LETTER O WITH MIDDLE TILDE\",\"char\":\"Ɵ\"},{\"hex\":\"&#01A0;\",\"name\":\"LATIN CAPITAL LETTER O WITH HORN\",\"char\":\"Ơ\"},{\"hex\":\"&#01A1;\",\"name\":\"LATIN SMALL LETTER O WITH HORN\",\"char\":\"ơ\"},{\"hex\":\"&#01A2;\",\"name\":\"LATIN CAPITAL LETTER OI\",\"char\":\"Ƣ\"},{\"hex\":\"&#01A3;\",\"name\":\"LATIN SMALL LETTER OI\",\"char\":\"ƣ\"},{\"hex\":\"&#01A4;\",\"name\":\"LATIN CAPITAL LETTER P WITH HOOK\",\"char\":\"Ƥ\"},{\"hex\":\"&#01A5;\",\"name\":\"LATIN SMALL LETTER P WITH HOOK\",\"char\":\"ƥ\"},{\"hex\":\"&#01A6;\",\"name\":\"LATIN LETTER YR\",\"char\":\"Ʀ\"},{\"hex\":\"&#01A7;\",\"name\":\"LATIN CAPITAL LETTER TONE TWO\",\"char\":\"Ƨ\"},{\"hex\":\"&#01A8;\",\"name\":\"LATIN SMALL LETTER TONE TWO\",\"char\":\"ƨ\"},{\"hex\":\"&#01A9;\",\"name\":\"LATIN CAPITAL LETTER ESH\",\"char\":\"Ʃ\"},{\"hex\":\"&#01AA;\",\"name\":\"LATIN LETTER REVERSED ESH LOOP\",\"char\":\"ƪ\"},{\"hex\":\"&#01AB;\",\"name\":\"LATIN SMALL LETTER T WITH PALATAL HOOK\",\"char\":\"ƫ\"},{\"hex\":\"&#01AC;\",\"name\":\"LATIN CAPITAL LETTER T WITH HOOK\",\"char\":\"Ƭ\"},{\"hex\":\"&#01AD;\",\"name\":\"LATIN SMALL LETTER T WITH HOOK\",\"char\":\"ƭ\"},{\"hex\":\"&#01AE;\",\"name\":\"LATIN CAPITAL LETTER T WITH RETROFLEX HOOK\",\"char\":\"Ʈ\"},{\"hex\":\"&#01AF;\",\"name\":\"LATIN CAPITAL LETTER U WITH HORN\",\"char\":\"Ư\"},{\"hex\":\"&#01B0;\",\"name\":\"LATIN SMALL LETTER U WITH HORN\",\"char\":\"ư\"},{\"hex\":\"&#01B1;\",\"name\":\"LATIN CAPITAL LETTER UPSILON\",\"char\":\"Ʊ\"},{\"hex\":\"&#01B2;\",\"name\":\"LATIN CAPITAL LETTER V WITH HOOK\",\"char\":\"Ʋ\"},{\"hex\":\"&#01B3;\",\"name\":\"LATIN CAPITAL LETTER Y WITH HOOK\",\"char\":\"Ƴ\"},{\"hex\":\"&#01B4;\",\"name\":\"LATIN SMALL LETTER Y WITH HOOK\",\"char\":\"ƴ\"},{\"hex\":\"&#01B5;\",\"name\":\"LATIN CAPITAL LETTER Z WITH STROKE\",\"char\":\"Ƶ\"},{\"hex\":\"&#01B6;\",\"name\":\"LATIN SMALL LETTER Z WITH STROKE\",\"char\":\"ƶ\"},{\"hex\":\"&#01B7;\",\"name\":\"LATIN CAPITAL LETTER EZH\",\"char\":\"Ʒ\"},{\"hex\":\"&#01B8;\",\"name\":\"LATIN CAPITAL LETTER EZH REVERSED\",\"char\":\"Ƹ\"},{\"hex\":\"&#01B9;\",\"name\":\"LATIN SMALL LETTER EZH REVERSED\",\"char\":\"ƹ\"},{\"hex\":\"&#01BA;\",\"name\":\"LATIN SMALL LETTER EZH WITH TAIL\",\"char\":\"ƺ\"},{\"hex\":\"&#01BB;\",\"name\":\"LATIN LETTER TWO WITH STROKE\",\"char\":\"ƻ\"},{\"hex\":\"&#01BC;\",\"name\":\"LATIN CAPITAL LETTER TONE FIVE\",\"char\":\"Ƽ\"},{\"hex\":\"&#01BD;\",\"name\":\"LATIN SMALL LETTER TONE FIVE\",\"char\":\"ƽ\"},{\"hex\":\"&#01BE;\",\"name\":\"LATIN LETTER INVERTED GLOTTAL STOP WITH STROKE\",\"char\":\"ƾ\"},{\"hex\":\"&#01BF;\",\"name\":\"LATIN LETTER WYNN\",\"char\":\"ƿ\"},{\"hex\":\"&#01C0;\",\"name\":\"LATIN LETTER DENTAL CLICK\",\"char\":\"ǀ\"},{\"hex\":\"&#01C1;\",\"name\":\"LATIN LETTER LATERAL CLICK\",\"char\":\"ǁ\"},{\"hex\":\"&#01C2;\",\"name\":\"LATIN LETTER ALVEOLAR CLICK\",\"char\":\"ǂ\"},{\"hex\":\"&#01C3;\",\"name\":\"LATIN LETTER RETROFLEX CLICK\",\"char\":\"ǃ\"},{\"hex\":\"&#01C4;\",\"name\":\"LATIN CAPITAL LETTER DZ WITH CARON\",\"char\":\"Ǆ\"},{\"hex\":\"&#01C5;\",\"name\":\"LATIN CAPITAL LETTER D WITH SMALL LETTER Z WITH CARON\",\"char\":\"ǅ\"},{\"hex\":\"&#01C6;\",\"name\":\"LATIN SMALL LETTER DZ WITH CARON\",\"char\":\"ǆ\"},{\"hex\":\"&#01C7;\",\"name\":\"LATIN CAPITAL LETTER LJ\",\"char\":\"Ǉ\"},{\"hex\":\"&#01C8;\",\"name\":\"LATIN CAPITAL LETTER L WITH SMALL LETTER J\",\"char\":\"ǈ\"},{\"hex\":\"&#01C9;\",\"name\":\"LATIN SMALL LETTER LJ\",\"char\":\"ǉ\"},{\"hex\":\"&#01CA;\",\"name\":\"LATIN CAPITAL LETTER NJ\",\"char\":\"Ǌ\"},{\"hex\":\"&#01CB;\",\"name\":\"LATIN CAPITAL LETTER N WITH SMALL LETTER J\",\"char\":\"ǋ\"},{\"hex\":\"&#01CC;\",\"name\":\"LATIN SMALL LETTER NJ\",\"char\":\"ǌ\"},{\"hex\":\"&#01CD;\",\"name\":\"LATIN CAPITAL LETTER A WITH CARON\",\"char\":\"Ǎ\"},{\"hex\":\"&#01CE;\",\"name\":\"LATIN SMALL LETTER A WITH CARON\",\"char\":\"ǎ\"},{\"hex\":\"&#01CF;\",\"name\":\"LATIN CAPITAL LETTER I WITH CARON\",\"char\":\"Ǐ\"},{\"hex\":\"&#01D0;\",\"name\":\"LATIN SMALL LETTER I WITH CARON\",\"char\":\"ǐ\"},{\"hex\":\"&#01D1;\",\"name\":\"LATIN CAPITAL LETTER O WITH CARON\",\"char\":\"Ǒ\"},{\"hex\":\"&#01D2;\",\"name\":\"LATIN SMALL LETTER O WITH CARON\",\"char\":\"ǒ\"},{\"hex\":\"&#01D3;\",\"name\":\"LATIN CAPITAL LETTER U WITH CARON\",\"char\":\"Ǔ\"},{\"hex\":\"&#01D4;\",\"name\":\"LATIN SMALL LETTER U WITH CARON\",\"char\":\"ǔ\"},{\"hex\":\"&#01D5;\",\"name\":\"LATIN CAPITAL LETTER U WITH DIAERESIS AND MACRON\",\"char\":\"Ǖ\"},{\"hex\":\"&#01D6;\",\"name\":\"LATIN SMALL LETTER U WITH DIAERESIS AND MACRON\",\"char\":\"ǖ\"},{\"hex\":\"&#01D7;\",\"name\":\"LATIN CAPITAL LETTER U WITH DIAERESIS AND ACUTE\",\"char\":\"Ǘ\"},{\"hex\":\"&#01D8;\",\"name\":\"LATIN SMALL LETTER U WITH DIAERESIS AND ACUTE\",\"char\":\"ǘ\"},{\"hex\":\"&#01D9;\",\"name\":\"LATIN CAPITAL LETTER U WITH DIAERESIS AND CARON\",\"char\":\"Ǚ\"},{\"hex\":\"&#01DA;\",\"name\":\"LATIN SMALL LETTER U WITH DIAERESIS AND CARON\",\"char\":\"ǚ\"},{\"hex\":\"&#01DB;\",\"name\":\"LATIN CAPITAL LETTER U WITH DIAERESIS AND GRAVE\",\"char\":\"Ǜ\"},{\"hex\":\"&#01DC;\",\"name\":\"LATIN SMALL LETTER U WITH DIAERESIS AND GRAVE\",\"char\":\"ǜ\"},{\"hex\":\"&#01DD;\",\"name\":\"LATIN SMALL LETTER TURNED E\",\"char\":\"ǝ\"},{\"hex\":\"&#01DE;\",\"name\":\"LATIN CAPITAL LETTER A WITH DIAERESIS AND MACRON\",\"char\":\"Ǟ\"},{\"hex\":\"&#01DF;\",\"name\":\"LATIN SMALL LETTER A WITH DIAERESIS AND MACRON\",\"char\":\"ǟ\"},{\"hex\":\"&#01E0;\",\"name\":\"LATIN CAPITAL LETTER A WITH DOT ABOVE AND MACRON\",\"char\":\"Ǡ\"},{\"hex\":\"&#01E1;\",\"name\":\"LATIN SMALL LETTER A WITH DOT ABOVE AND MACRON\",\"char\":\"ǡ\"},{\"hex\":\"&#01E2;\",\"name\":\"LATIN CAPITAL LETTER AE WITH MACRON\",\"char\":\"Ǣ\"},{\"hex\":\"&#01E3;\",\"name\":\"LATIN SMALL LETTER AE WITH MACRON\",\"char\":\"ǣ\"},{\"hex\":\"&#01E4;\",\"name\":\"LATIN CAPITAL LETTER G WITH STROKE\",\"char\":\"Ǥ\"},{\"hex\":\"&#01E5;\",\"name\":\"LATIN SMALL LETTER G WITH STROKE\",\"char\":\"ǥ\"},{\"hex\":\"&#01E6;\",\"name\":\"LATIN CAPITAL LETTER G WITH CARON\",\"char\":\"Ǧ\"},{\"hex\":\"&#01E7;\",\"name\":\"LATIN SMALL LETTER G WITH CARON\",\"char\":\"ǧ\"},{\"hex\":\"&#01E8;\",\"name\":\"LATIN CAPITAL LETTER K WITH CARON\",\"char\":\"Ǩ\"},{\"hex\":\"&#01E9;\",\"name\":\"LATIN SMALL LETTER K WITH CARON\",\"char\":\"ǩ\"},{\"hex\":\"&#01EA;\",\"name\":\"LATIN CAPITAL LETTER O WITH OGONEK\",\"char\":\"Ǫ\"},{\"hex\":\"&#01EB;\",\"name\":\"LATIN SMALL LETTER O WITH OGONEK\",\"char\":\"ǫ\"},{\"hex\":\"&#01EC;\",\"name\":\"LATIN CAPITAL LETTER O WITH OGONEK AND MACRON\",\"char\":\"Ǭ\"},{\"hex\":\"&#01ED;\",\"name\":\"LATIN SMALL LETTER O WITH OGONEK AND MACRON\",\"char\":\"ǭ\"},{\"hex\":\"&#01EE;\",\"name\":\"LATIN CAPITAL LETTER EZH WITH CARON\",\"char\":\"Ǯ\"},{\"hex\":\"&#01EF;\",\"name\":\"LATIN SMALL LETTER EZH WITH CARON\",\"char\":\"ǯ\"},{\"hex\":\"&#01F0;\",\"name\":\"LATIN SMALL LETTER J WITH CARON\",\"char\":\"ǰ\"},{\"hex\":\"&#01F1;\",\"name\":\"LATIN CAPITAL LETTER DZ\",\"char\":\"Ǳ\"},{\"hex\":\"&#01F2;\",\"name\":\"LATIN CAPITAL LETTER D WITH SMALL LETTER Z\",\"char\":\"ǲ\"},{\"hex\":\"&#01F3;\",\"name\":\"LATIN SMALL LETTER DZ\",\"char\":\"ǳ\"},{\"hex\":\"&#01F4;\",\"name\":\"LATIN CAPITAL LETTER G WITH ACUTE\",\"char\":\"Ǵ\"},{\"hex\":\"&#01F5;\",\"name\":\"LATIN SMALL LETTER G WITH ACUTE\",\"char\":\"ǵ\"},{\"hex\":\"&#01F6;\",\"name\":\"LATIN CAPITAL LETTER HWAIR\",\"char\":\"Ƕ\"},{\"hex\":\"&#01F7;\",\"name\":\"LATIN CAPITAL LETTER WYNN\",\"char\":\"Ƿ\"},{\"hex\":\"&#01F8;\",\"name\":\"LATIN CAPITAL LETTER N WITH GRAVE\",\"char\":\"Ǹ\"},{\"hex\":\"&#01F9;\",\"name\":\"LATIN SMALL LETTER N WITH GRAVE\",\"char\":\"ǹ\"},{\"hex\":\"&#01FA;\",\"name\":\"LATIN CAPITAL LETTER A WITH RING ABOVE AND ACUTE (present in WGL4)\",\"char\":\"Ǻ\"},{\"hex\":\"&#01FB;\",\"name\":\"LATIN SMALL LETTER A WITH RING ABOVE AND ACUTE (present in WGL4)\",\"char\":\"ǻ\"},{\"hex\":\"&#01FC;\",\"name\":\"LATIN CAPITAL LETTER AE WITH ACUTE (present in WGL4)\",\"char\":\"Ǽ\"},{\"hex\":\"&#01FD;\",\"name\":\"LATIN SMALL LETTER AE WITH ACUTE (present in WGL4)\",\"char\":\"ǽ\"},{\"hex\":\"&#01FE;\",\"name\":\"LATIN CAPITAL LETTER O WITH STROKE AND ACUTE (present in WGL4)\",\"char\":\"Ǿ\"},{\"hex\":\"&#01FF;\",\"name\":\"LATIN SMALL LETTER O WITH STROKE AND ACUTE (present in WGL4)\",\"char\":\"ǿ\"},{\"hex\":\"&#0200;\",\"name\":\"LATIN CAPITAL LETTER A WITH DOUBLE GRAVE\",\"char\":\"Ȁ\"},{\"hex\":\"&#0201;\",\"name\":\"LATIN SMALL LETTER A WITH DOUBLE GRAVE\",\"char\":\"ȁ\"},{\"hex\":\"&#0202;\",\"name\":\"LATIN CAPITAL LETTER A WITH INVERTED BREVE\",\"char\":\"Ȃ\"},{\"hex\":\"&#0203;\",\"name\":\"LATIN SMALL LETTER A WITH INVERTED BREVE\",\"char\":\"ȃ\"},{\"hex\":\"&#0204;\",\"name\":\"LATIN CAPITAL LETTER E WITH DOUBLE GRAVE\",\"char\":\"Ȅ\"},{\"hex\":\"&#0205;\",\"name\":\"LATIN SMALL LETTER E WITH DOUBLE GRAVE\",\"char\":\"ȅ\"},{\"hex\":\"&#0206;\",\"name\":\"LATIN CAPITAL LETTER E WITH INVERTED BREVE\",\"char\":\"Ȇ\"},{\"hex\":\"&#0207;\",\"name\":\"LATIN SMALL LETTER E WITH INVERTED BREVE\",\"char\":\"ȇ\"},{\"hex\":\"&#0208;\",\"name\":\"LATIN CAPITAL LETTER I WITH DOUBLE GRAVE\",\"char\":\"Ȉ\"},{\"hex\":\"&#0209;\",\"name\":\"LATIN SMALL LETTER I WITH DOUBLE GRAVE\",\"char\":\"ȉ\"},{\"hex\":\"&#020A;\",\"name\":\"LATIN CAPITAL LETTER I WITH INVERTED BREVE\",\"char\":\"Ȋ\"},{\"hex\":\"&#020B;\",\"name\":\"LATIN SMALL LETTER I WITH INVERTED BREVE\",\"char\":\"ȋ\"},{\"hex\":\"&#020C;\",\"name\":\"LATIN CAPITAL LETTER O WITH DOUBLE GRAVE\",\"char\":\"Ȍ\"},{\"hex\":\"&#020D;\",\"name\":\"LATIN SMALL LETTER O WITH DOUBLE GRAVE\",\"char\":\"ȍ\"},{\"hex\":\"&#020E;\",\"name\":\"LATIN CAPITAL LETTER O WITH INVERTED BREVE\",\"char\":\"Ȏ\"},{\"hex\":\"&#020F;\",\"name\":\"LATIN SMALL LETTER O WITH INVERTED BREVE\",\"char\":\"ȏ\"},{\"hex\":\"&#0210;\",\"name\":\"LATIN CAPITAL LETTER R WITH DOUBLE GRAVE\",\"char\":\"Ȑ\"},{\"hex\":\"&#0211;\",\"name\":\"LATIN SMALL LETTER R WITH DOUBLE GRAVE\",\"char\":\"ȑ\"},{\"hex\":\"&#0212;\",\"name\":\"LATIN CAPITAL LETTER R WITH INVERTED BREVE\",\"char\":\"Ȓ\"},{\"hex\":\"&#0213;\",\"name\":\"LATIN SMALL LETTER R WITH INVERTED BREVE\",\"char\":\"ȓ\"},{\"hex\":\"&#0214;\",\"name\":\"LATIN CAPITAL LETTER U WITH DOUBLE GRAVE\",\"char\":\"Ȕ\"},{\"hex\":\"&#0215;\",\"name\":\"LATIN SMALL LETTER U WITH DOUBLE GRAVE\",\"char\":\"ȕ\"},{\"hex\":\"&#0216;\",\"name\":\"LATIN CAPITAL LETTER U WITH INVERTED BREVE\",\"char\":\"Ȗ\"},{\"hex\":\"&#0217;\",\"name\":\"LATIN SMALL LETTER U WITH INVERTED BREVE\",\"char\":\"ȗ\"},{\"hex\":\"&#0218;\",\"name\":\"LATIN CAPITAL LETTER S WITH COMMA BELOW\",\"char\":\"Ș\"},{\"hex\":\"&#0219;\",\"name\":\"LATIN SMALL LETTER S WITH COMMA BELOW\",\"char\":\"ș\"},{\"hex\":\"&#021A;\",\"name\":\"LATIN CAPITAL LETTER T WITH COMMA BELOW\",\"char\":\"Ț\"},{\"hex\":\"&#021B;\",\"name\":\"LATIN SMALL LETTER T WITH COMMA BELOW\",\"char\":\"ț\"},{\"hex\":\"&#021C;\",\"name\":\"LATIN CAPITAL LETTER YOGH\",\"char\":\"Ȝ\"},{\"hex\":\"&#021D;\",\"name\":\"LATIN SMALL LETTER YOGH\",\"char\":\"ȝ\"},{\"hex\":\"&#021E;\",\"name\":\"LATIN CAPITAL LETTER H WITH CARON\",\"char\":\"Ȟ\"},{\"hex\":\"&#021F;\",\"name\":\"LATIN SMALL LETTER H WITH CARON\",\"char\":\"ȟ\"},{\"hex\":\"&#0220;\",\"name\":\"LATIN CAPITAL LETTER N WITH LONG RIGHT LEG\",\"char\":\"Ƞ\"},{\"hex\":\"&#0221;\",\"name\":\"LATIN SMALL LETTER D WITH CURL\",\"char\":\"ȡ\"},{\"hex\":\"&#0222;\",\"name\":\"LATIN CAPITAL LETTER OU\",\"char\":\"Ȣ\"},{\"hex\":\"&#0223;\",\"name\":\"LATIN SMALL LETTER OU\",\"char\":\"ȣ\"},{\"hex\":\"&#0224;\",\"name\":\"LATIN CAPITAL LETTER Z WITH HOOK\",\"char\":\"Ȥ\"},{\"hex\":\"&#0225;\",\"name\":\"LATIN SMALL LETTER Z WITH HOOK\",\"char\":\"ȥ\"},{\"hex\":\"&#0226;\",\"name\":\"LATIN CAPITAL LETTER A WITH DOT ABOVE\",\"char\":\"Ȧ\"},{\"hex\":\"&#0227;\",\"name\":\"LATIN SMALL LETTER A WITH DOT ABOVE\",\"char\":\"ȧ\"},{\"hex\":\"&#0228;\",\"name\":\"LATIN CAPITAL LETTER E WITH CEDILLA\",\"char\":\"Ȩ\"},{\"hex\":\"&#0229;\",\"name\":\"LATIN SMALL LETTER E WITH CEDILLA\",\"char\":\"ȩ\"},{\"hex\":\"&#022A;\",\"name\":\"LATIN CAPITAL LETTER O WITH DIAERESIS AND MACRON\",\"char\":\"Ȫ\"},{\"hex\":\"&#022B;\",\"name\":\"LATIN SMALL LETTER O WITH DIAERESIS AND MACRON\",\"char\":\"ȫ\"},{\"hex\":\"&#022C;\",\"name\":\"LATIN CAPITAL LETTER O WITH TILDE AND MACRON\",\"char\":\"Ȭ\"},{\"hex\":\"&#022D;\",\"name\":\"LATIN SMALL LETTER O WITH TILDE AND MACRON\",\"char\":\"ȭ\"},{\"hex\":\"&#022E;\",\"name\":\"LATIN CAPITAL LETTER O WITH DOT ABOVE\",\"char\":\"Ȯ\"},{\"hex\":\"&#022F;\",\"name\":\"LATIN SMALL LETTER O WITH DOT ABOVE\",\"char\":\"ȯ\"},{\"hex\":\"&#0230;\",\"name\":\"LATIN CAPITAL LETTER O WITH DOT ABOVE AND MACRON\",\"char\":\"Ȱ\"},{\"hex\":\"&#0231;\",\"name\":\"LATIN SMALL LETTER O WITH DOT ABOVE AND MACRON\",\"char\":\"ȱ\"},{\"hex\":\"&#0232;\",\"name\":\"LATIN CAPITAL LETTER Y WITH MACRON\",\"char\":\"Ȳ\"},{\"hex\":\"&#0233;\",\"name\":\"LATIN SMALL LETTER Y WITH MACRON\",\"char\":\"ȳ\"},{\"hex\":\"&#0234;\",\"name\":\"LATIN SMALL LETTER L WITH CURL\",\"char\":\"ȴ\"},{\"hex\":\"&#0235;\",\"name\":\"LATIN SMALL LETTER N WITH CURL\",\"char\":\"ȵ\"},{\"hex\":\"&#0236;\",\"name\":\"LATIN SMALL LETTER T WITH CURL\",\"char\":\"ȶ\"},{\"hex\":\"&#0237;\",\"name\":\"LATIN SMALL LETTER DOTLESS J\",\"char\":\"ȷ\"},{\"hex\":\"&#0238;\",\"name\":\"LATIN SMALL LETTER DB DIGRAPH\",\"char\":\"ȸ\"},{\"hex\":\"&#0239;\",\"name\":\"LATIN SMALL LETTER QP DIGRAPH\",\"char\":\"ȹ\"},{\"hex\":\"&#023A;\",\"name\":\"LATIN CAPITAL LETTER A WITH STROKE\",\"char\":\"Ⱥ\"},{\"hex\":\"&#023B;\",\"name\":\"LATIN CAPITAL LETTER C WITH STROKE\",\"char\":\"Ȼ\"},{\"hex\":\"&#023C;\",\"name\":\"LATIN SMALL LETTER C WITH STROKE\",\"char\":\"ȼ\"},{\"hex\":\"&#023D;\",\"name\":\"LATIN CAPITAL LETTER L WITH BAR\",\"char\":\"Ƚ\"},{\"hex\":\"&#023E;\",\"name\":\"LATIN CAPITAL LETTER T WITH DIAGONAL STROKE\",\"char\":\"Ⱦ\"},{\"hex\":\"&#023F;\",\"name\":\"LATIN SMALL LETTER S WITH SWASH TAIL\",\"char\":\"ȿ\"},{\"hex\":\"&#0240;\",\"name\":\"LATIN SMALL LETTER Z WITH SWASH TAIL\",\"char\":\"ɀ\"},{\"hex\":\"&#0241;\",\"name\":\"LATIN CAPITAL LETTER GLOTTAL STOP\",\"char\":\"Ɂ\"},{\"hex\":\"&#0242;\",\"name\":\"LATIN SMALL LETTER GLOTTAL STOP\",\"char\":\"ɂ\"},{\"hex\":\"&#0243;\",\"name\":\"LATIN CAPITAL LETTER B WITH STROKE\",\"char\":\"Ƀ\"},{\"hex\":\"&#0244;\",\"name\":\"LATIN CAPITAL LETTER U BAR\",\"char\":\"Ʉ\"},{\"hex\":\"&#0245;\",\"name\":\"LATIN CAPITAL LETTER TURNED V\",\"char\":\"Ʌ\"},{\"hex\":\"&#0246;\",\"name\":\"LATIN CAPITAL LETTER E WITH STROKE\",\"char\":\"Ɇ\"},{\"hex\":\"&#0247;\",\"name\":\"LATIN SMALL LETTER E WITH STROKE\",\"char\":\"ɇ\"},{\"hex\":\"&#0248;\",\"name\":\"LATIN CAPITAL LETTER J WITH STROKE\",\"char\":\"Ɉ\"},{\"hex\":\"&#0249;\",\"name\":\"LATIN SMALL LETTER J WITH STROKE\",\"char\":\"ɉ\"},{\"hex\":\"&#024A;\",\"name\":\"LATIN CAPITAL LETTER SMALL Q WITH HOOK TAIL\",\"char\":\"Ɋ\"},{\"hex\":\"&#024B;\",\"name\":\"LATIN SMALL LETTER Q WITH HOOK TAIL\",\"char\":\"ɋ\"},{\"hex\":\"&#024C;\",\"name\":\"LATIN CAPITAL LETTER R WITH STROKE\",\"char\":\"Ɍ\"},{\"hex\":\"&#024D;\",\"name\":\"LATIN SMALL LETTER R WITH STROKE\",\"char\":\"ɍ\"},{\"hex\":\"&#024E;\",\"name\":\"LATIN CAPITAL LETTER Y WITH STROKE\",\"char\":\"Ɏ\"},{\"hex\":\"&#024F;\",\"name\":\"LATIN SMALL LETTER Y WITH STROKE\",\"char\":\"ɏ\"},{\"hex\":\"&#2C60;\",\"name\":\"LATIN CAPITAL LETTER L WITH DOUBLE BAR\",\"char\":\"Ⱡ\"},{\"hex\":\"&#2C61;\",\"name\":\"LATIN SMALL LETTER L WITH DOUBLE BAR\",\"char\":\"ⱡ\"},{\"hex\":\"&#2C62;\",\"name\":\"LATIN CAPITAL LETTER L WITH MIDDLE TILDE\",\"char\":\"Ɫ\"},{\"hex\":\"&#2C63;\",\"name\":\"LATIN CAPITAL LETTER P WITH STROKE\",\"char\":\"Ᵽ\"},{\"hex\":\"&#2C64;\",\"name\":\"LATIN CAPITAL LETTER R WITH TAIL\",\"char\":\"Ɽ\"},{\"hex\":\"&#2C65;\",\"name\":\"LATIN SMALL LETTER A WITH STROKE\",\"char\":\"ⱥ\"},{\"hex\":\"&#2C66;\",\"name\":\"LATIN SMALL LETTER T WITH DIAGONAL STROKE\",\"char\":\"ⱦ\"},{\"hex\":\"&#2C67;\",\"name\":\"LATIN CAPITAL LETTER H WITH DESCENDER\",\"char\":\"Ⱨ\"},{\"hex\":\"&#2C68;\",\"name\":\"LATIN SMALL LETTER H WITH DESCENDER\",\"char\":\"ⱨ\"},{\"hex\":\"&#2C69;\",\"name\":\"LATIN CAPITAL LETTER K WITH DESCENDER\",\"char\":\"Ⱪ\"},{\"hex\":\"&#2C6A;\",\"name\":\"LATIN SMALL LETTER K WITH DESCENDER\",\"char\":\"ⱪ\"},{\"hex\":\"&#2C6B;\",\"name\":\"LATIN CAPITAL LETTER Z WITH DESCENDER\",\"char\":\"Ⱬ\"},{\"hex\":\"&#2C6C;\",\"name\":\"LATIN SMALL LETTER Z WITH DESCENDER\",\"char\":\"ⱬ\"},{\"hex\":\"&#2C6D;\",\"name\":\"LATIN CAPITAL LETTER ALPHA\",\"char\":\"Ɑ\"},{\"hex\":\"&#2C6E;\",\"name\":\"LATIN CAPITAL LETTER M WITH HOOK\",\"char\":\"Ɱ\"},{\"hex\":\"&#2C6F;\",\"name\":\"LATIN CAPITAL LETTER TURNED A\",\"char\":\"Ɐ\"},{\"hex\":\"&#2C70;\",\"name\":\"LATIN CAPITAL LETTER TURNED ALPHA\",\"char\":\"Ɒ\"},{\"hex\":\"&#2C71;\",\"name\":\"LATIN SMALL LETTER V WITH RIGHT HOOK\",\"char\":\"ⱱ\"},{\"hex\":\"&#2C72;\",\"name\":\"LATIN CAPITAL LETTER W WITH HOOK\",\"char\":\"Ⱳ\"},{\"hex\":\"&#2C73;\",\"name\":\"LATIN SMALL LETTER W WITH HOOK\",\"char\":\"ⱳ\"},{\"hex\":\"&#2C74;\",\"name\":\"LATIN SMALL LETTER V WITH CURL\",\"char\":\"ⱴ\"},{\"hex\":\"&#2C75;\",\"name\":\"LATIN CAPITAL LETTER HALF H\",\"char\":\"Ⱶ\"},{\"hex\":\"&#2C76;\",\"name\":\"LATIN SMALL LETTER HALF H\",\"char\":\"ⱶ\"},{\"hex\":\"&#2C77;\",\"name\":\"LATIN SMALL LETTER TAILLESS PHI\",\"char\":\"ⱷ\"},{\"hex\":\"&#2C78;\",\"name\":\"LATIN SMALL LETTER E WITH NOTCH\",\"char\":\"ⱸ\"},{\"hex\":\"&#2C79;\",\"name\":\"LATIN SMALL LETTER TURNED R WITH TAIL\",\"char\":\"ⱹ\"},{\"hex\":\"&#2C7A;\",\"name\":\"LATIN SMALL LETTER O WITH LOW RING INSIDE\",\"char\":\"ⱺ\"},{\"hex\":\"&#2C7B;\",\"name\":\"LATIN LETTER SMALL CAPITAL TURNED E\",\"char\":\"ⱻ\"},{\"hex\":\"&#2C7C;\",\"name\":\"LATIN SUBSCRIPT SMALL LETTER J\",\"char\":\"ⱼ\"},{\"hex\":\"&#2C7D;\",\"name\":\"MODIFIER LETTER CAPITAL V\",\"char\":\"ⱽ\"},{\"hex\":\"&#2C7E;\",\"name\":\"LATIN CAPITAL LETTER S WITH SWASH TAIL\",\"char\":\"Ȿ\"},{\"hex\":\"&#2C7F;\",\"name\":\"LATIN CAPITAL LETTER Z WITH SWASH TAIL\",\"char\":\"Ɀ\"},{\"hex\":\"&#A720;\",\"name\":\"MODIFIER LETTER STRESS AND HIGH TONE\",\"char\":\"꜠\"},{\"hex\":\"&#A721;\",\"name\":\"MODIFIER LETTER STRESS AND LOW TONE\",\"char\":\"꜡\"},{\"hex\":\"&#A722;\",\"name\":\"LATIN CAPITAL LETTER EGYPTOLOGICAL ALEF\",\"char\":\"Ꜣ\"},{\"hex\":\"&#A723;\",\"name\":\"LATIN SMALL LETTER EGYPTOLOGICAL ALEF\",\"char\":\"ꜣ\"},{\"hex\":\"&#A724;\",\"name\":\"LATIN CAPITAL LETTER EGYPTOLOGICAL AIN\",\"char\":\"Ꜥ\"},{\"hex\":\"&#A725;\",\"name\":\"LATIN SMALL LETTER EGYPTOLOGICAL AIN\",\"char\":\"ꜥ\"},{\"hex\":\"&#A726;\",\"name\":\"LATIN CAPITAL LETTER HENG\",\"char\":\"Ꜧ\"},{\"hex\":\"&#A727;\",\"name\":\"LATIN SMALL LETTER HENG\",\"char\":\"ꜧ\"},{\"hex\":\"&#A728;\",\"name\":\"LATIN CAPITAL LETTER TZ\",\"char\":\"Ꜩ\"},{\"hex\":\"&#A729;\",\"name\":\"LATIN SMALL LETTER TZ\",\"char\":\"ꜩ\"},{\"hex\":\"&#A72A;\",\"name\":\"LATIN CAPITAL LETTER TRESILLO\",\"char\":\"Ꜫ\"},{\"hex\":\"&#A72B;\",\"name\":\"LATIN SMALL LETTER TRESILLO\",\"char\":\"ꜫ\"},{\"hex\":\"&#A72C;\",\"name\":\"LATIN CAPITAL LETTER CUATRILLO\",\"char\":\"Ꜭ\"},{\"hex\":\"&#A72D;\",\"name\":\"LATIN SMALL LETTER CUATRILLO\",\"char\":\"ꜭ\"},{\"hex\":\"&#A72E;\",\"name\":\"LATIN CAPITAL LETTER CUATRILLO WITH COMMA\",\"char\":\"Ꜯ\"},{\"hex\":\"&#A72F;\",\"name\":\"LATIN SMALL LETTER CUATRILLO WITH COMMA\",\"char\":\"ꜯ\"},{\"hex\":\"&#A730;\",\"name\":\"LATIN LETTER SMALL CAPITAL F\",\"char\":\"ꜰ\"},{\"hex\":\"&#A731;\",\"name\":\"LATIN LETTER SMALL CAPITAL S\",\"char\":\"ꜱ\"},{\"hex\":\"&#A732;\",\"name\":\"LATIN CAPITAL LETTER AA\",\"char\":\"Ꜳ\"},{\"hex\":\"&#A733;\",\"name\":\"LATIN SMALL LETTER AA\",\"char\":\"ꜳ\"},{\"hex\":\"&#A734;\",\"name\":\"LATIN CAPITAL LETTER AO\",\"char\":\"Ꜵ\"},{\"hex\":\"&#A735;\",\"name\":\"LATIN SMALL LETTER AO\",\"char\":\"ꜵ\"},{\"hex\":\"&#A736;\",\"name\":\"LATIN CAPITAL LETTER AU\",\"char\":\"Ꜷ\"},{\"hex\":\"&#A737;\",\"name\":\"LATIN SMALL LETTER AU\",\"char\":\"ꜷ\"},{\"hex\":\"&#A738;\",\"name\":\"LATIN CAPITAL LETTER AV\",\"char\":\"Ꜹ\"},{\"hex\":\"&#A739;\",\"name\":\"LATIN SMALL LETTER AV\",\"char\":\"ꜹ\"},{\"hex\":\"&#A73A;\",\"name\":\"LATIN CAPITAL LETTER AV WITH HORIZONTAL BAR\",\"char\":\"Ꜻ\"},{\"hex\":\"&#A73B;\",\"name\":\"LATIN SMALL LETTER AV WITH HORIZONTAL BAR\",\"char\":\"ꜻ\"},{\"hex\":\"&#A73C;\",\"name\":\"LATIN CAPITAL LETTER AY\",\"char\":\"Ꜽ\"},{\"hex\":\"&#A73D;\",\"name\":\"LATIN SMALL LETTER AY\",\"char\":\"ꜽ\"},{\"hex\":\"&#A73E;\",\"name\":\"LATIN CAPITAL LETTER REVERSED C WITH DOT\",\"char\":\"Ꜿ\"},{\"hex\":\"&#A73F;\",\"name\":\"LATIN SMALL LETTER REVERSED C WITH DOT\",\"char\":\"ꜿ\"},{\"hex\":\"&#A740;\",\"name\":\"LATIN CAPITAL LETTER K WITH STROKE\",\"char\":\"Ꝁ\"},{\"hex\":\"&#A741;\",\"name\":\"LATIN SMALL LETTER K WITH STROKE\",\"char\":\"ꝁ\"},{\"hex\":\"&#A742;\",\"name\":\"LATIN CAPITAL LETTER K WITH DIAGONAL STROKE\",\"char\":\"Ꝃ\"},{\"hex\":\"&#A743;\",\"name\":\"LATIN SMALL LETTER K WITH DIAGONAL STROKE\",\"char\":\"ꝃ\"},{\"hex\":\"&#A744;\",\"name\":\"LATIN CAPITAL LETTER K WITH STROKE AND DIAGONAL STROKE\",\"char\":\"Ꝅ\"},{\"hex\":\"&#A745;\",\"name\":\"LATIN SMALL LETTER K WITH STROKE AND DIAGONAL STROKE\",\"char\":\"ꝅ\"},{\"hex\":\"&#A746;\",\"name\":\"LATIN CAPITAL LETTER BROKEN L\",\"char\":\"Ꝇ\"},{\"hex\":\"&#A747;\",\"name\":\"LATIN SMALL LETTER BROKEN L\",\"char\":\"ꝇ\"},{\"hex\":\"&#A748;\",\"name\":\"LATIN CAPITAL LETTER L WITH HIGH STROKE\",\"char\":\"Ꝉ\"},{\"hex\":\"&#A749;\",\"name\":\"LATIN SMALL LETTER L WITH HIGH STROKE\",\"char\":\"ꝉ\"},{\"hex\":\"&#A74A;\",\"name\":\"LATIN CAPITAL LETTER O WITH LONG STROKE OVERLAY\",\"char\":\"Ꝋ\"},{\"hex\":\"&#A74B;\",\"name\":\"LATIN SMALL LETTER O WITH LONG STROKE OVERLAY\",\"char\":\"ꝋ\"},{\"hex\":\"&#A74C;\",\"name\":\"LATIN CAPITAL LETTER O WITH LOOP\",\"char\":\"Ꝍ\"},{\"hex\":\"&#A74D;\",\"name\":\"LATIN SMALL LETTER O WITH LOOP\",\"char\":\"ꝍ\"},{\"hex\":\"&#A74E;\",\"name\":\"LATIN CAPITAL LETTER OO\",\"char\":\"Ꝏ\"},{\"hex\":\"&#A74F;\",\"name\":\"LATIN SMALL LETTER OO\",\"char\":\"ꝏ\"},{\"hex\":\"&#A750;\",\"name\":\"LATIN CAPITAL LETTER P WITH STROKE THROUGH DESCENDER\",\"char\":\"Ꝑ\"},{\"hex\":\"&#A751;\",\"name\":\"LATIN SMALL LETTER P WITH STROKE THROUGH DESCENDER\",\"char\":\"ꝑ\"},{\"hex\":\"&#A752;\",\"name\":\"LATIN CAPITAL LETTER P WITH FLOURISH\",\"char\":\"Ꝓ\"},{\"hex\":\"&#A753;\",\"name\":\"LATIN SMALL LETTER P WITH FLOURISH\",\"char\":\"ꝓ\"},{\"hex\":\"&#A754;\",\"name\":\"LATIN CAPITAL LETTER P WITH SQUIRREL TAIL\",\"char\":\"Ꝕ\"},{\"hex\":\"&#A755;\",\"name\":\"LATIN SMALL LETTER P WITH SQUIRREL TAIL\",\"char\":\"ꝕ\"},{\"hex\":\"&#A756;\",\"name\":\"LATIN CAPITAL LETTER Q WITH STROKE THROUGH DESCENDER\",\"char\":\"Ꝗ\"},{\"hex\":\"&#A757;\",\"name\":\"LATIN SMALL LETTER Q WITH STROKE THROUGH DESCENDER\",\"char\":\"ꝗ\"},{\"hex\":\"&#A758;\",\"name\":\"LATIN CAPITAL LETTER Q WITH DIAGONAL STROKE\",\"char\":\"Ꝙ\"},{\"hex\":\"&#A759;\",\"name\":\"LATIN SMALL LETTER Q WITH DIAGONAL STROKE\",\"char\":\"ꝙ\"},{\"hex\":\"&#A75A;\",\"name\":\"LATIN CAPITAL LETTER R ROTUNDA\",\"char\":\"Ꝛ\"},{\"hex\":\"&#A75B;\",\"name\":\"LATIN SMALL LETTER R ROTUNDA\",\"char\":\"ꝛ\"},{\"hex\":\"&#A75C;\",\"name\":\"LATIN CAPITAL LETTER RUM ROTUNDA\",\"char\":\"Ꝝ\"},{\"hex\":\"&#A75D;\",\"name\":\"LATIN SMALL LETTER RUM ROTUNDA\",\"char\":\"ꝝ\"},{\"hex\":\"&#A75E;\",\"name\":\"LATIN CAPITAL LETTER V WITH DIAGONAL STROKE\",\"char\":\"Ꝟ\"},{\"hex\":\"&#A75F;\",\"name\":\"LATIN SMALL LETTER V WITH DIAGONAL STROKE\",\"char\":\"ꝟ\"},{\"hex\":\"&#A760;\",\"name\":\"LATIN CAPITAL LETTER VY\",\"char\":\"Ꝡ\"},{\"hex\":\"&#A761;\",\"name\":\"LATIN SMALL LETTER VY\",\"char\":\"ꝡ\"},{\"hex\":\"&#A762;\",\"name\":\"LATIN CAPITAL LETTER VISIGOTHIC Z\",\"char\":\"Ꝣ\"},{\"hex\":\"&#A763;\",\"name\":\"LATIN SMALL LETTER VISIGOTHIC Z\",\"char\":\"ꝣ\"},{\"hex\":\"&#A764;\",\"name\":\"LATIN CAPITAL LETTER THORN WITH STROKE\",\"char\":\"Ꝥ\"},{\"hex\":\"&#A765;\",\"name\":\"LATIN SMALL LETTER THORN WITH STROKE\",\"char\":\"ꝥ\"},{\"hex\":\"&#A766;\",\"name\":\"LATIN CAPITAL LETTER THORN WITH STROKE THROUGH DESCENDER\",\"char\":\"Ꝧ\"},{\"hex\":\"&#A767;\",\"name\":\"LATIN SMALL LETTER THORN WITH STROKE THROUGH DESCENDER\",\"char\":\"ꝧ\"},{\"hex\":\"&#A768;\",\"name\":\"LATIN CAPITAL LETTER VEND\",\"char\":\"Ꝩ\"},{\"hex\":\"&#A769;\",\"name\":\"LATIN SMALL LETTER VEND\",\"char\":\"ꝩ\"},{\"hex\":\"&#A76A;\",\"name\":\"LATIN CAPITAL LETTER ET\",\"char\":\"Ꝫ\"},{\"hex\":\"&#A76B;\",\"name\":\"LATIN SMALL LETTER ET\",\"char\":\"ꝫ\"},{\"hex\":\"&#A76C;\",\"name\":\"LATIN CAPITAL LETTER IS\",\"char\":\"Ꝭ\"},{\"hex\":\"&#A76D;\",\"name\":\"LATIN SMALL LETTER IS\",\"char\":\"ꝭ\"},{\"hex\":\"&#A76E;\",\"name\":\"LATIN CAPITAL LETTER CON\",\"char\":\"Ꝯ\"},{\"hex\":\"&#A76F;\",\"name\":\"LATIN SMALL LETTER CON\",\"char\":\"ꝯ\"},{\"hex\":\"&#A770;\",\"name\":\"MODIFIER LETTER US\",\"char\":\"ꝰ\"},{\"hex\":\"&#A771;\",\"name\":\"LATIN SMALL LETTER DUM\",\"char\":\"ꝱ\"},{\"hex\":\"&#A772;\",\"name\":\"LATIN SMALL LETTER LUM\",\"char\":\"ꝲ\"},{\"hex\":\"&#A773;\",\"name\":\"LATIN SMALL LETTER MUM\",\"char\":\"ꝳ\"},{\"hex\":\"&#A774;\",\"name\":\"LATIN SMALL LETTER NUM\",\"char\":\"ꝴ\"},{\"hex\":\"&#A775;\",\"name\":\"LATIN SMALL LETTER RUM\",\"char\":\"ꝵ\"},{\"hex\":\"&#A776;\",\"name\":\"LATIN LETTER SMALL CAPITAL RUM\",\"char\":\"ꝶ\"},{\"hex\":\"&#A777;\",\"name\":\"LATIN SMALL LETTER TUM\",\"char\":\"ꝷ\"},{\"hex\":\"&#A778;\",\"name\":\"LATIN SMALL LETTER UM\",\"char\":\"ꝸ\"},{\"hex\":\"&#A779;\",\"name\":\"LATIN CAPITAL LETTER INSULAR D\",\"char\":\"Ꝺ\"},{\"hex\":\"&#A77A;\",\"name\":\"LATIN SMALL LETTER INSULAR D\",\"char\":\"ꝺ\"},{\"hex\":\"&#A77B;\",\"name\":\"LATIN CAPITAL LETTER INSULAR F\",\"char\":\"Ꝼ\"},{\"hex\":\"&#A77C;\",\"name\":\"LATIN SMALL LETTER INSULAR F\",\"char\":\"ꝼ\"},{\"hex\":\"&#A77D;\",\"name\":\"LATIN CAPITAL LETTER INSULAR G\",\"char\":\"Ᵹ\"},{\"hex\":\"&#A77E;\",\"name\":\"LATIN CAPITAL LETTER TURNED INSULAR G\",\"char\":\"Ꝿ\"},{\"hex\":\"&#A77F;\",\"name\":\"LATIN SMALL LETTER TURNED INSULAR G\",\"char\":\"ꝿ\"},{\"hex\":\"&#A780;\",\"name\":\"LATIN CAPITAL LETTER TURNED L\",\"char\":\"Ꞁ\"},{\"hex\":\"&#A781;\",\"name\":\"LATIN SMALL LETTER TURNED L\",\"char\":\"ꞁ\"},{\"hex\":\"&#A782;\",\"name\":\"LATIN CAPITAL LETTER INSULAR R\",\"char\":\"Ꞃ\"},{\"hex\":\"&#A783;\",\"name\":\"LATIN SMALL LETTER INSULAR R\",\"char\":\"ꞃ\"},{\"hex\":\"&#A784;\",\"name\":\"LATIN CAPITAL LETTER INSULAR S\",\"char\":\"Ꞅ\"},{\"hex\":\"&#A785;\",\"name\":\"LATIN SMALL LETTER INSULAR S\",\"char\":\"ꞅ\"},{\"hex\":\"&#A786;\",\"name\":\"LATIN CAPITAL LETTER INSULAR T\",\"char\":\"Ꞇ\"},{\"hex\":\"&#A787;\",\"name\":\"LATIN SMALL LETTER INSULAR T\",\"char\":\"ꞇ\"},{\"hex\":\"&#A788;\",\"name\":\"MODIFIER LETTER LOW CIRCUMFLEX ACCENT\",\"char\":\"ꞈ\"},{\"hex\":\"&#A789;\",\"name\":\"MODIFIER LETTER COLON\",\"char\":\"꞉\"},{\"hex\":\"&#A78A;\",\"name\":\"MODIFIER LETTER SHORT EQUALS SIGN\",\"char\":\"꞊\"},{\"hex\":\"&#A78B;\",\"name\":\"LATIN CAPITAL LETTER SALTILLO\",\"char\":\"Ꞌ\"},{\"hex\":\"&#A78C;\",\"name\":\"LATIN SMALL LETTER SALTILLO\",\"char\":\"ꞌ\"},{\"hex\":\"&#A78D;\",\"name\":\"LATIN CAPITAL LETTER TURNED H\",\"char\":\"Ɥ\"},{\"hex\":\"&#A78E;\",\"name\":\"LATIN SMALL LETTER L WITH RETROFLEX HOOK AND BELT\",\"char\":\"ꞎ\"},{\"hex\":\"&#A790;\",\"name\":\"LATIN CAPITAL LETTER N WITH DESCENDER\",\"char\":\"Ꞑ\"},{\"hex\":\"&#A791;\",\"name\":\"LATIN SMALL LETTER N WITH DESCENDER\",\"char\":\"ꞑ\"},{\"hex\":\"&#A7A0;\",\"name\":\"LATIN CAPITAL LETTER G WITH OBLIQUE STROKE\",\"char\":\"Ꞡ\"},{\"hex\":\"&#A7A1;\",\"name\":\"LATIN SMALL LETTER G WITH OBLIQUE STROKE\",\"char\":\"ꞡ\"},{\"hex\":\"&#A7A2;\",\"name\":\"LATIN CAPITAL LETTER K WITH OBLIQUE STROKE\",\"char\":\"Ꞣ\"},{\"hex\":\"&#A7A3;\",\"name\":\"LATIN SMALL LETTER K WITH OBLIQUE STROKE\",\"char\":\"ꞣ\"},{\"hex\":\"&#A7A4;\",\"name\":\"LATIN CAPITAL LETTER N WITH OBLIQUE STROKE\",\"char\":\"Ꞥ\"},{\"hex\":\"&#A7A5;\",\"name\":\"LATIN SMALL LETTER N WITH OBLIQUE STROKE\",\"char\":\"ꞥ\"},{\"hex\":\"&#A7A6;\",\"name\":\"LATIN CAPITAL LETTER R WITH OBLIQUE STROKE\",\"char\":\"Ꞧ\"},{\"hex\":\"&#A7A7;\",\"name\":\"LATIN SMALL LETTER R WITH OBLIQUE STROKE\",\"char\":\"ꞧ\"},{\"hex\":\"&#A7A8;\",\"name\":\"LATIN CAPITAL LETTER S WITH OBLIQUE STROKE\",\"char\":\"Ꞩ\"},{\"hex\":\"&#A7A9;\",\"name\":\"LATIN SMALL LETTER S WITH OBLIQUE STROKE\",\"char\":\"ꞩ\"},{\"hex\":\"&#A7FA;\",\"name\":\"LATIN LETTER SMALL CAPITAL TURNED M\",\"char\":\"ꟺ\"},{\"hex\":\"&#A7FB;\",\"name\":\"LATIN EPIGRAPHIC LETTER REVERSED F\",\"char\":\"ꟻ\"},{\"hex\":\"&#A7FC;\",\"name\":\"LATIN EPIGRAPHIC LETTER REVERSED P\",\"char\":\"ꟼ\"},{\"hex\":\"&#A7FD;\",\"name\":\"LATIN EPIGRAPHIC LETTER INVERTED M\",\"char\":\"ꟽ\"},{\"hex\":\"&#A7FE;\",\"name\":\"LATIN EPIGRAPHIC LETTER I LONGA\",\"char\":\"ꟾ\"},{\"hex\":\"&#A7FF;\",\"name\":\"LATIN EPIGRAPHIC LETTER ARCHAIC M\",\"char\":\"ꟿ\"},{\"hex\":\"&#1E00;\",\"name\":\"LATIN CAPITAL LETTER A WITH RING BELOW\",\"char\":\"Ḁ\"},{\"hex\":\"&#1E01;\",\"name\":\"LATIN SMALL LETTER A WITH RING BELOW\",\"char\":\"ḁ\"},{\"hex\":\"&#1E02;\",\"name\":\"LATIN CAPITAL LETTER B WITH DOT ABOVE\",\"char\":\"Ḃ\"},{\"hex\":\"&#1E03;\",\"name\":\"LATIN SMALL LETTER B WITH DOT ABOVE\",\"char\":\"ḃ\"},{\"hex\":\"&#1E04;\",\"name\":\"LATIN CAPITAL LETTER B WITH DOT BELOW\",\"char\":\"Ḅ\"},{\"hex\":\"&#1E05;\",\"name\":\"LATIN SMALL LETTER B WITH DOT BELOW\",\"char\":\"ḅ\"},{\"hex\":\"&#1E06;\",\"name\":\"LATIN CAPITAL LETTER B WITH LINE BELOW\",\"char\":\"Ḇ\"},{\"hex\":\"&#1E07;\",\"name\":\"LATIN SMALL LETTER B WITH LINE BELOW\",\"char\":\"ḇ\"},{\"hex\":\"&#1E08;\",\"name\":\"LATIN CAPITAL LETTER C WITH CEDILLA AND ACUTE\",\"char\":\"Ḉ\"},{\"hex\":\"&#1E09;\",\"name\":\"LATIN SMALL LETTER C WITH CEDILLA AND ACUTE\",\"char\":\"ḉ\"},{\"hex\":\"&#1E0A;\",\"name\":\"LATIN CAPITAL LETTER D WITH DOT ABOVE\",\"char\":\"Ḋ\"},{\"hex\":\"&#1E0B;\",\"name\":\"LATIN SMALL LETTER D WITH DOT ABOVE\",\"char\":\"ḋ\"},{\"hex\":\"&#1E0C;\",\"name\":\"LATIN CAPITAL LETTER D WITH DOT BELOW\",\"char\":\"Ḍ\"},{\"hex\":\"&#1E0D;\",\"name\":\"LATIN SMALL LETTER D WITH DOT BELOW\",\"char\":\"ḍ\"},{\"hex\":\"&#1E0E;\",\"name\":\"LATIN CAPITAL LETTER D WITH LINE BELOW\",\"char\":\"Ḏ\"},{\"hex\":\"&#1E0F;\",\"name\":\"LATIN SMALL LETTER D WITH LINE BELOW\",\"char\":\"ḏ\"},{\"hex\":\"&#1E10;\",\"name\":\"LATIN CAPITAL LETTER D WITH CEDILLA\",\"char\":\"Ḑ\"},{\"hex\":\"&#1E11;\",\"name\":\"LATIN SMALL LETTER D WITH CEDILLA\",\"char\":\"ḑ\"},{\"hex\":\"&#1E12;\",\"name\":\"LATIN CAPITAL LETTER D WITH CIRCUMFLEX BELOW\",\"char\":\"Ḓ\"},{\"hex\":\"&#1E13;\",\"name\":\"LATIN SMALL LETTER D WITH CIRCUMFLEX BELOW\",\"char\":\"ḓ\"},{\"hex\":\"&#1E14;\",\"name\":\"LATIN CAPITAL LETTER E WITH MACRON AND GRAVE\",\"char\":\"Ḕ\"},{\"hex\":\"&#1E15;\",\"name\":\"LATIN SMALL LETTER E WITH MACRON AND GRAVE\",\"char\":\"ḕ\"},{\"hex\":\"&#1E16;\",\"name\":\"LATIN CAPITAL LETTER E WITH MACRON AND ACUTE\",\"char\":\"Ḗ\"},{\"hex\":\"&#1E17;\",\"name\":\"LATIN SMALL LETTER E WITH MACRON AND ACUTE\",\"char\":\"ḗ\"},{\"hex\":\"&#1E18;\",\"name\":\"LATIN CAPITAL LETTER E WITH CIRCUMFLEX BELOW\",\"char\":\"Ḙ\"},{\"hex\":\"&#1E19;\",\"name\":\"LATIN SMALL LETTER E WITH CIRCUMFLEX BELOW\",\"char\":\"ḙ\"},{\"hex\":\"&#1E1A;\",\"name\":\"LATIN CAPITAL LETTER E WITH TILDE BELOW\",\"char\":\"Ḛ\"},{\"hex\":\"&#1E1B;\",\"name\":\"LATIN SMALL LETTER E WITH TILDE BELOW\",\"char\":\"ḛ\"},{\"hex\":\"&#1E1C;\",\"name\":\"LATIN CAPITAL LETTER E WITH CEDILLA AND BREVE\",\"char\":\"Ḝ\"},{\"hex\":\"&#1E1D;\",\"name\":\"LATIN SMALL LETTER E WITH CEDILLA AND BREVE\",\"char\":\"ḝ\"},{\"hex\":\"&#1E1E;\",\"name\":\"LATIN CAPITAL LETTER F WITH DOT ABOVE\",\"char\":\"Ḟ\"},{\"hex\":\"&#1E1F;\",\"name\":\"LATIN SMALL LETTER F WITH DOT ABOVE\",\"char\":\"ḟ\"},{\"hex\":\"&#1E20;\",\"name\":\"LATIN CAPITAL LETTER G WITH MACRON\",\"char\":\"Ḡ\"},{\"hex\":\"&#1E21;\",\"name\":\"LATIN SMALL LETTER G WITH MACRON\",\"char\":\"ḡ\"},{\"hex\":\"&#1E22;\",\"name\":\"LATIN CAPITAL LETTER H WITH DOT ABOVE\",\"char\":\"Ḣ\"},{\"hex\":\"&#1E23;\",\"name\":\"LATIN SMALL LETTER H WITH DOT ABOVE\",\"char\":\"ḣ\"},{\"hex\":\"&#1E24;\",\"name\":\"LATIN CAPITAL LETTER H WITH DOT BELOW\",\"char\":\"Ḥ\"},{\"hex\":\"&#1E25;\",\"name\":\"LATIN SMALL LETTER H WITH DOT BELOW\",\"char\":\"ḥ\"},{\"hex\":\"&#1E26;\",\"name\":\"LATIN CAPITAL LETTER H WITH DIAERESIS\",\"char\":\"Ḧ\"},{\"hex\":\"&#1E27;\",\"name\":\"LATIN SMALL LETTER H WITH DIAERESIS\",\"char\":\"ḧ\"},{\"hex\":\"&#1E28;\",\"name\":\"LATIN CAPITAL LETTER H WITH CEDILLA\",\"char\":\"Ḩ\"},{\"hex\":\"&#1E29;\",\"name\":\"LATIN SMALL LETTER H WITH CEDILLA\",\"char\":\"ḩ\"},{\"hex\":\"&#1E2A;\",\"name\":\"LATIN CAPITAL LETTER H WITH BREVE BELOW\",\"char\":\"Ḫ\"},{\"hex\":\"&#1E2B;\",\"name\":\"LATIN SMALL LETTER H WITH BREVE BELOW\",\"char\":\"ḫ\"},{\"hex\":\"&#1E2C;\",\"name\":\"LATIN CAPITAL LETTER I WITH TILDE BELOW\",\"char\":\"Ḭ\"},{\"hex\":\"&#1E2D;\",\"name\":\"LATIN SMALL LETTER I WITH TILDE BELOW\",\"char\":\"ḭ\"},{\"hex\":\"&#1E2E;\",\"name\":\"LATIN CAPITAL LETTER I WITH DIAERESIS AND ACUTE\",\"char\":\"Ḯ\"},{\"hex\":\"&#1E2F;\",\"name\":\"LATIN SMALL LETTER I WITH DIAERESIS AND ACUTE\",\"char\":\"ḯ\"},{\"hex\":\"&#1E30;\",\"name\":\"LATIN CAPITAL LETTER K WITH ACUTE\",\"char\":\"Ḱ\"},{\"hex\":\"&#1E31;\",\"name\":\"LATIN SMALL LETTER K WITH ACUTE\",\"char\":\"ḱ\"},{\"hex\":\"&#1E32;\",\"name\":\"LATIN CAPITAL LETTER K WITH DOT BELOW\",\"char\":\"Ḳ\"},{\"hex\":\"&#1E33;\",\"name\":\"LATIN SMALL LETTER K WITH DOT BELOW\",\"char\":\"ḳ\"},{\"hex\":\"&#1E34;\",\"name\":\"LATIN CAPITAL LETTER K WITH LINE BELOW\",\"char\":\"Ḵ\"},{\"hex\":\"&#1E35;\",\"name\":\"LATIN SMALL LETTER K WITH LINE BELOW\",\"char\":\"ḵ\"},{\"hex\":\"&#1E36;\",\"name\":\"LATIN CAPITAL LETTER L WITH DOT BELOW\",\"char\":\"Ḷ\"},{\"hex\":\"&#1E37;\",\"name\":\"LATIN SMALL LETTER L WITH DOT BELOW\",\"char\":\"ḷ\"},{\"hex\":\"&#1E38;\",\"name\":\"LATIN CAPITAL LETTER L WITH DOT BELOW AND MACRON\",\"char\":\"Ḹ\"},{\"hex\":\"&#1E39;\",\"name\":\"LATIN SMALL LETTER L WITH DOT BELOW AND MACRON\",\"char\":\"ḹ\"},{\"hex\":\"&#1E3A;\",\"name\":\"LATIN CAPITAL LETTER L WITH LINE BELOW\",\"char\":\"Ḻ\"},{\"hex\":\"&#1E3B;\",\"name\":\"LATIN SMALL LETTER L WITH LINE BELOW\",\"char\":\"ḻ\"},{\"hex\":\"&#1E3C;\",\"name\":\"LATIN CAPITAL LETTER L WITH CIRCUMFLEX BELOW\",\"char\":\"Ḽ\"},{\"hex\":\"&#1E3D;\",\"name\":\"LATIN SMALL LETTER L WITH CIRCUMFLEX BELOW\",\"char\":\"ḽ\"},{\"hex\":\"&#1E3E;\",\"name\":\"LATIN CAPITAL LETTER M WITH ACUTE\",\"char\":\"Ḿ\"},{\"hex\":\"&#1E3F;\",\"name\":\"LATIN SMALL LETTER M WITH ACUTE\",\"char\":\"ḿ\"},{\"hex\":\"&#1E40;\",\"name\":\"LATIN CAPITAL LETTER M WITH DOT ABOVE\",\"char\":\"Ṁ\"},{\"hex\":\"&#1E41;\",\"name\":\"LATIN SMALL LETTER M WITH DOT ABOVE\",\"char\":\"ṁ\"},{\"hex\":\"&#1E42;\",\"name\":\"LATIN CAPITAL LETTER M WITH DOT BELOW\",\"char\":\"Ṃ\"},{\"hex\":\"&#1E43;\",\"name\":\"LATIN SMALL LETTER M WITH DOT BELOW\",\"char\":\"ṃ\"},{\"hex\":\"&#1E44;\",\"name\":\"LATIN CAPITAL LETTER N WITH DOT ABOVE\",\"char\":\"Ṅ\"},{\"hex\":\"&#1E45;\",\"name\":\"LATIN SMALL LETTER N WITH DOT ABOVE\",\"char\":\"ṅ\"},{\"hex\":\"&#1E46;\",\"name\":\"LATIN CAPITAL LETTER N WITH DOT BELOW\",\"char\":\"Ṇ\"},{\"hex\":\"&#1E47;\",\"name\":\"LATIN SMALL LETTER N WITH DOT BELOW\",\"char\":\"ṇ\"},{\"hex\":\"&#1E48;\",\"name\":\"LATIN CAPITAL LETTER N WITH LINE BELOW\",\"char\":\"Ṉ\"},{\"hex\":\"&#1E49;\",\"name\":\"LATIN SMALL LETTER N WITH LINE BELOW\",\"char\":\"ṉ\"},{\"hex\":\"&#1E4A;\",\"name\":\"LATIN CAPITAL LETTER N WITH CIRCUMFLEX BELOW\",\"char\":\"Ṋ\"},{\"hex\":\"&#1E4B;\",\"name\":\"LATIN SMALL LETTER N WITH CIRCUMFLEX BELOW\",\"char\":\"ṋ\"},{\"hex\":\"&#1E4C;\",\"name\":\"LATIN CAPITAL LETTER O WITH TILDE AND ACUTE\",\"char\":\"Ṍ\"},{\"hex\":\"&#1E4D;\",\"name\":\"LATIN SMALL LETTER O WITH TILDE AND ACUTE\",\"char\":\"ṍ\"},{\"hex\":\"&#1E4E;\",\"name\":\"LATIN CAPITAL LETTER O WITH TILDE AND DIAERESIS\",\"char\":\"Ṏ\"},{\"hex\":\"&#1E4F;\",\"name\":\"LATIN SMALL LETTER O WITH TILDE AND DIAERESIS\",\"char\":\"ṏ\"},{\"hex\":\"&#1E50;\",\"name\":\"LATIN CAPITAL LETTER O WITH MACRON AND GRAVE\",\"char\":\"Ṑ\"},{\"hex\":\"&#1E51;\",\"name\":\"LATIN SMALL LETTER O WITH MACRON AND GRAVE\",\"char\":\"ṑ\"},{\"hex\":\"&#1E52;\",\"name\":\"LATIN CAPITAL LETTER O WITH MACRON AND ACUTE\",\"char\":\"Ṓ\"},{\"hex\":\"&#1E53;\",\"name\":\"LATIN SMALL LETTER O WITH MACRON AND ACUTE\",\"char\":\"ṓ\"},{\"hex\":\"&#1E54;\",\"name\":\"LATIN CAPITAL LETTER P WITH ACUTE\",\"char\":\"Ṕ\"},{\"hex\":\"&#1E55;\",\"name\":\"LATIN SMALL LETTER P WITH ACUTE\",\"char\":\"ṕ\"},{\"hex\":\"&#1E56;\",\"name\":\"LATIN CAPITAL LETTER P WITH DOT ABOVE\",\"char\":\"Ṗ\"},{\"hex\":\"&#1E57;\",\"name\":\"LATIN SMALL LETTER P WITH DOT ABOVE\",\"char\":\"ṗ\"},{\"hex\":\"&#1E58;\",\"name\":\"LATIN CAPITAL LETTER R WITH DOT ABOVE\",\"char\":\"Ṙ\"},{\"hex\":\"&#1E59;\",\"name\":\"LATIN SMALL LETTER R WITH DOT ABOVE\",\"char\":\"ṙ\"},{\"hex\":\"&#1E5A;\",\"name\":\"LATIN CAPITAL LETTER R WITH DOT BELOW\",\"char\":\"Ṛ\"},{\"hex\":\"&#1E5B;\",\"name\":\"LATIN SMALL LETTER R WITH DOT BELOW\",\"char\":\"ṛ\"},{\"hex\":\"&#1E5C;\",\"name\":\"LATIN CAPITAL LETTER R WITH DOT BELOW AND MACRON\",\"char\":\"Ṝ\"},{\"hex\":\"&#1E5D;\",\"name\":\"LATIN SMALL LETTER R WITH DOT BELOW AND MACRON\",\"char\":\"ṝ\"},{\"hex\":\"&#1E5E;\",\"name\":\"LATIN CAPITAL LETTER R WITH LINE BELOW\",\"char\":\"Ṟ\"},{\"hex\":\"&#1E5F;\",\"name\":\"LATIN SMALL LETTER R WITH LINE BELOW\",\"char\":\"ṟ\"},{\"hex\":\"&#1E60;\",\"name\":\"LATIN CAPITAL LETTER S WITH DOT ABOVE\",\"char\":\"Ṡ\"},{\"hex\":\"&#1E61;\",\"name\":\"LATIN SMALL LETTER S WITH DOT ABOVE\",\"char\":\"ṡ\"},{\"hex\":\"&#1E62;\",\"name\":\"LATIN CAPITAL LETTER S WITH DOT BELOW\",\"char\":\"Ṣ\"},{\"hex\":\"&#1E63;\",\"name\":\"LATIN SMALL LETTER S WITH DOT BELOW\",\"char\":\"ṣ\"},{\"hex\":\"&#1E64;\",\"name\":\"LATIN CAPITAL LETTER S WITH ACUTE AND DOT ABOVE\",\"char\":\"Ṥ\"},{\"hex\":\"&#1E65;\",\"name\":\"LATIN SMALL LETTER S WITH ACUTE AND DOT ABOVE\",\"char\":\"ṥ\"},{\"hex\":\"&#1E66;\",\"name\":\"LATIN CAPITAL LETTER S WITH CARON AND DOT ABOVE\",\"char\":\"Ṧ\"},{\"hex\":\"&#1E67;\",\"name\":\"LATIN SMALL LETTER S WITH CARON AND DOT ABOVE\",\"char\":\"ṧ\"},{\"hex\":\"&#1E68;\",\"name\":\"LATIN CAPITAL LETTER S WITH DOT BELOW AND DOT ABOVE\",\"char\":\"Ṩ\"},{\"hex\":\"&#1E69;\",\"name\":\"LATIN SMALL LETTER S WITH DOT BELOW AND DOT ABOVE\",\"char\":\"ṩ\"},{\"hex\":\"&#1E6A;\",\"name\":\"LATIN CAPITAL LETTER T WITH DOT ABOVE\",\"char\":\"Ṫ\"},{\"hex\":\"&#1E6B;\",\"name\":\"LATIN SMALL LETTER T WITH DOT ABOVE\",\"char\":\"ṫ\"},{\"hex\":\"&#1E6C;\",\"name\":\"LATIN CAPITAL LETTER T WITH DOT BELOW\",\"char\":\"Ṭ\"},{\"hex\":\"&#1E6D;\",\"name\":\"LATIN SMALL LETTER T WITH DOT BELOW\",\"char\":\"ṭ\"},{\"hex\":\"&#1E6E;\",\"name\":\"LATIN CAPITAL LETTER T WITH LINE BELOW\",\"char\":\"Ṯ\"},{\"hex\":\"&#1E6F;\",\"name\":\"LATIN SMALL LETTER T WITH LINE BELOW\",\"char\":\"ṯ\"},{\"hex\":\"&#1E70;\",\"name\":\"LATIN CAPITAL LETTER T WITH CIRCUMFLEX BELOW\",\"char\":\"Ṱ\"},{\"hex\":\"&#1E71;\",\"name\":\"LATIN SMALL LETTER T WITH CIRCUMFLEX BELOW\",\"char\":\"ṱ\"},{\"hex\":\"&#1E72;\",\"name\":\"LATIN CAPITAL LETTER U WITH DIAERESIS BELOW\",\"char\":\"Ṳ\"},{\"hex\":\"&#1E73;\",\"name\":\"LATIN SMALL LETTER U WITH DIAERESIS BELOW\",\"char\":\"ṳ\"},{\"hex\":\"&#1E74;\",\"name\":\"LATIN CAPITAL LETTER U WITH TILDE BELOW\",\"char\":\"Ṵ\"},{\"hex\":\"&#1E75;\",\"name\":\"LATIN SMALL LETTER U WITH TILDE BELOW\",\"char\":\"ṵ\"},{\"hex\":\"&#1E76;\",\"name\":\"LATIN CAPITAL LETTER U WITH CIRCUMFLEX BELOW\",\"char\":\"Ṷ\"},{\"hex\":\"&#1E77;\",\"name\":\"LATIN SMALL LETTER U WITH CIRCUMFLEX BELOW\",\"char\":\"ṷ\"},{\"hex\":\"&#1E78;\",\"name\":\"LATIN CAPITAL LETTER U WITH TILDE AND ACUTE\",\"char\":\"Ṹ\"},{\"hex\":\"&#1E79;\",\"name\":\"LATIN SMALL LETTER U WITH TILDE AND ACUTE\",\"char\":\"ṹ\"},{\"hex\":\"&#1E7A;\",\"name\":\"LATIN CAPITAL LETTER U WITH MACRON AND DIAERESIS\",\"char\":\"Ṻ\"},{\"hex\":\"&#1E7B;\",\"name\":\"LATIN SMALL LETTER U WITH MACRON AND DIAERESIS\",\"char\":\"ṻ\"},{\"hex\":\"&#1E7C;\",\"name\":\"LATIN CAPITAL LETTER V WITH TILDE\",\"char\":\"Ṽ\"},{\"hex\":\"&#1E7D;\",\"name\":\"LATIN SMALL LETTER V WITH TILDE\",\"char\":\"ṽ\"},{\"hex\":\"&#1E7E;\",\"name\":\"LATIN CAPITAL LETTER V WITH DOT BELOW\",\"char\":\"Ṿ\"},{\"hex\":\"&#1E7F;\",\"name\":\"LATIN SMALL LETTER V WITH DOT BELOW\",\"char\":\"ṿ\"},{\"hex\":\"&#1E80;\",\"name\":\"LATIN CAPITAL LETTER W WITH GRAVE (present in WGL4)\",\"char\":\"Ẁ\"},{\"hex\":\"&#1E81;\",\"name\":\"LATIN SMALL LETTER W WITH GRAVE (present in WGL4)\",\"char\":\"ẁ\"},{\"hex\":\"&#1E82;\",\"name\":\"LATIN CAPITAL LETTER W WITH ACUTE (present in WGL4)\",\"char\":\"Ẃ\"},{\"hex\":\"&#1E83;\",\"name\":\"LATIN SMALL LETTER W WITH ACUTE (present in WGL4)\",\"char\":\"ẃ\"},{\"hex\":\"&#1E84;\",\"name\":\"LATIN CAPITAL LETTER W WITH DIAERESIS (present in WGL4)\",\"char\":\"Ẅ\"},{\"hex\":\"&#1E85;\",\"name\":\"LATIN SMALL LETTER W WITH DIAERESIS (present in WGL4)\",\"char\":\"ẅ\"},{\"hex\":\"&#1E86;\",\"name\":\"LATIN CAPITAL LETTER W WITH DOT ABOVE\",\"char\":\"Ẇ\"},{\"hex\":\"&#1E87;\",\"name\":\"LATIN SMALL LETTER W WITH DOT ABOVE\",\"char\":\"ẇ\"},{\"hex\":\"&#1E88;\",\"name\":\"LATIN CAPITAL LETTER W WITH DOT BELOW\",\"char\":\"Ẉ\"},{\"hex\":\"&#1E89;\",\"name\":\"LATIN SMALL LETTER W WITH DOT BELOW\",\"char\":\"ẉ\"},{\"hex\":\"&#1E8A;\",\"name\":\"LATIN CAPITAL LETTER X WITH DOT ABOVE\",\"char\":\"Ẋ\"},{\"hex\":\"&#1E8B;\",\"name\":\"LATIN SMALL LETTER X WITH DOT ABOVE\",\"char\":\"ẋ\"},{\"hex\":\"&#1E8C;\",\"name\":\"LATIN CAPITAL LETTER X WITH DIAERESIS\",\"char\":\"Ẍ\"},{\"hex\":\"&#1E8D;\",\"name\":\"LATIN SMALL LETTER X WITH DIAERESIS\",\"char\":\"ẍ\"},{\"hex\":\"&#1E8E;\",\"name\":\"LATIN CAPITAL LETTER Y WITH DOT ABOVE\",\"char\":\"Ẏ\"},{\"hex\":\"&#1E8F;\",\"name\":\"LATIN SMALL LETTER Y WITH DOT ABOVE\",\"char\":\"ẏ\"},{\"hex\":\"&#1E90;\",\"name\":\"LATIN CAPITAL LETTER Z WITH CIRCUMFLEX\",\"char\":\"Ẑ\"},{\"hex\":\"&#1E91;\",\"name\":\"LATIN SMALL LETTER Z WITH CIRCUMFLEX\",\"char\":\"ẑ\"},{\"hex\":\"&#1E92;\",\"name\":\"LATIN CAPITAL LETTER Z WITH DOT BELOW\",\"char\":\"Ẓ\"},{\"hex\":\"&#1E93;\",\"name\":\"LATIN SMALL LETTER Z WITH DOT BELOW\",\"char\":\"ẓ\"},{\"hex\":\"&#1E94;\",\"name\":\"LATIN CAPITAL LETTER Z WITH LINE BELOW\",\"char\":\"Ẕ\"},{\"hex\":\"&#1E95;\",\"name\":\"LATIN SMALL LETTER Z WITH LINE BELOW\",\"char\":\"ẕ\"},{\"hex\":\"&#1E96;\",\"name\":\"LATIN SMALL LETTER H WITH LINE BELOW\",\"char\":\"ẖ\"},{\"hex\":\"&#1E97;\",\"name\":\"LATIN SMALL LETTER T WITH DIAERESIS\",\"char\":\"ẗ\"},{\"hex\":\"&#1E98;\",\"name\":\"LATIN SMALL LETTER W WITH RING ABOVE\",\"char\":\"ẘ\"},{\"hex\":\"&#1E99;\",\"name\":\"LATIN SMALL LETTER Y WITH RING ABOVE\",\"char\":\"ẙ\"},{\"hex\":\"&#1E9A;\",\"name\":\"LATIN SMALL LETTER A WITH RIGHT HALF RING\",\"char\":\"ẚ\"},{\"hex\":\"&#1E9B;\",\"name\":\"LATIN SMALL LETTER LONG S WITH DOT ABOVE\",\"char\":\"ẛ\"},{\"hex\":\"&#1E9C;\",\"name\":\"LATIN SMALL LETTER LONG S WITH DIAGONAL STROKE\",\"char\":\"ẜ\"},{\"hex\":\"&#1E9D;\",\"name\":\"LATIN SMALL LETTER LONG S WITH HIGH STROKE\",\"char\":\"ẝ\"},{\"hex\":\"&#1E9E;\",\"name\":\"LATIN CAPITAL LETTER SHARP S\",\"char\":\"ẞ\"},{\"hex\":\"&#1E9F;\",\"name\":\"LATIN SMALL LETTER DELTA\",\"char\":\"ẟ\"},{\"hex\":\"&#1EA0;\",\"name\":\"LATIN CAPITAL LETTER A WITH DOT BELOW\",\"char\":\"Ạ\"},{\"hex\":\"&#1EA1;\",\"name\":\"LATIN SMALL LETTER A WITH DOT BELOW\",\"char\":\"ạ\"},{\"hex\":\"&#1EA2;\",\"name\":\"LATIN CAPITAL LETTER A WITH HOOK ABOVE\",\"char\":\"Ả\"},{\"hex\":\"&#1EA3;\",\"name\":\"LATIN SMALL LETTER A WITH HOOK ABOVE\",\"char\":\"ả\"},{\"hex\":\"&#1EA4;\",\"name\":\"LATIN CAPITAL LETTER A WITH CIRCUMFLEX AND ACUTE\",\"char\":\"Ấ\"},{\"hex\":\"&#1EA5;\",\"name\":\"LATIN SMALL LETTER A WITH CIRCUMFLEX AND ACUTE\",\"char\":\"ấ\"},{\"hex\":\"&#1EA6;\",\"name\":\"LATIN CAPITAL LETTER A WITH CIRCUMFLEX AND GRAVE\",\"char\":\"Ầ\"},{\"hex\":\"&#1EA7;\",\"name\":\"LATIN SMALL LETTER A WITH CIRCUMFLEX AND GRAVE\",\"char\":\"ầ\"},{\"hex\":\"&#1EA8;\",\"name\":\"LATIN CAPITAL LETTER A WITH CIRCUMFLEX AND HOOK ABOVE\",\"char\":\"Ẩ\"},{\"hex\":\"&#1EA9;\",\"name\":\"LATIN SMALL LETTER A WITH CIRCUMFLEX AND HOOK ABOVE\",\"char\":\"ẩ\"},{\"hex\":\"&#1EAA;\",\"name\":\"LATIN CAPITAL LETTER A WITH CIRCUMFLEX AND TILDE\",\"char\":\"Ẫ\"},{\"hex\":\"&#1EAB;\",\"name\":\"LATIN SMALL LETTER A WITH CIRCUMFLEX AND TILDE\",\"char\":\"ẫ\"},{\"hex\":\"&#1EAC;\",\"name\":\"LATIN CAPITAL LETTER A WITH CIRCUMFLEX AND DOT BELOW\",\"char\":\"Ậ\"},{\"hex\":\"&#1EAD;\",\"name\":\"LATIN SMALL LETTER A WITH CIRCUMFLEX AND DOT BELOW\",\"char\":\"ậ\"},{\"hex\":\"&#1EAE;\",\"name\":\"LATIN CAPITAL LETTER A WITH BREVE AND ACUTE\",\"char\":\"Ắ\"},{\"hex\":\"&#1EAF;\",\"name\":\"LATIN SMALL LETTER A WITH BREVE AND ACUTE\",\"char\":\"ắ\"},{\"hex\":\"&#1EB0;\",\"name\":\"LATIN CAPITAL LETTER A WITH BREVE AND GRAVE\",\"char\":\"Ằ\"},{\"hex\":\"&#1EB1;\",\"name\":\"LATIN SMALL LETTER A WITH BREVE AND GRAVE\",\"char\":\"ằ\"},{\"hex\":\"&#1EB2;\",\"name\":\"LATIN CAPITAL LETTER A WITH BREVE AND HOOK ABOVE\",\"char\":\"Ẳ\"},{\"hex\":\"&#1EB3;\",\"name\":\"LATIN SMALL LETTER A WITH BREVE AND HOOK ABOVE\",\"char\":\"ẳ\"},{\"hex\":\"&#1EB4;\",\"name\":\"LATIN CAPITAL LETTER A WITH BREVE AND TILDE\",\"char\":\"Ẵ\"},{\"hex\":\"&#1EB5;\",\"name\":\"LATIN SMALL LETTER A WITH BREVE AND TILDE\",\"char\":\"ẵ\"},{\"hex\":\"&#1EB6;\",\"name\":\"LATIN CAPITAL LETTER A WITH BREVE AND DOT BELOW\",\"char\":\"Ặ\"},{\"hex\":\"&#1EB7;\",\"name\":\"LATIN SMALL LETTER A WITH BREVE AND DOT BELOW\",\"char\":\"ặ\"},{\"hex\":\"&#1EB8;\",\"name\":\"LATIN CAPITAL LETTER E WITH DOT BELOW\",\"char\":\"Ẹ\"},{\"hex\":\"&#1EB9;\",\"name\":\"LATIN SMALL LETTER E WITH DOT BELOW\",\"char\":\"ẹ\"},{\"hex\":\"&#1EBA;\",\"name\":\"LATIN CAPITAL LETTER E WITH HOOK ABOVE\",\"char\":\"Ẻ\"},{\"hex\":\"&#1EBB;\",\"name\":\"LATIN SMALL LETTER E WITH HOOK ABOVE\",\"char\":\"ẻ\"},{\"hex\":\"&#1EBC;\",\"name\":\"LATIN CAPITAL LETTER E WITH TILDE\",\"char\":\"Ẽ\"},{\"hex\":\"&#1EBD;\",\"name\":\"LATIN SMALL LETTER E WITH TILDE\",\"char\":\"ẽ\"},{\"hex\":\"&#1EBE;\",\"name\":\"LATIN CAPITAL LETTER E WITH CIRCUMFLEX AND ACUTE\",\"char\":\"Ế\"},{\"hex\":\"&#1EBF;\",\"name\":\"LATIN SMALL LETTER E WITH CIRCUMFLEX AND ACUTE\",\"char\":\"ế\"},{\"hex\":\"&#1EC0;\",\"name\":\"LATIN CAPITAL LETTER E WITH CIRCUMFLEX AND GRAVE\",\"char\":\"Ề\"},{\"hex\":\"&#1EC1;\",\"name\":\"LATIN SMALL LETTER E WITH CIRCUMFLEX AND GRAVE\",\"char\":\"ề\"},{\"hex\":\"&#1EC2;\",\"name\":\"LATIN CAPITAL LETTER E WITH CIRCUMFLEX AND HOOK ABOVE\",\"char\":\"Ể\"},{\"hex\":\"&#1EC3;\",\"name\":\"LATIN SMALL LETTER E WITH CIRCUMFLEX AND HOOK ABOVE\",\"char\":\"ể\"},{\"hex\":\"&#1EC4;\",\"name\":\"LATIN CAPITAL LETTER E WITH CIRCUMFLEX AND TILDE\",\"char\":\"Ễ\"},{\"hex\":\"&#1EC5;\",\"name\":\"LATIN SMALL LETTER E WITH CIRCUMFLEX AND TILDE\",\"char\":\"ễ\"},{\"hex\":\"&#1EC6;\",\"name\":\"LATIN CAPITAL LETTER E WITH CIRCUMFLEX AND DOT BELOW\",\"char\":\"Ệ\"},{\"hex\":\"&#1EC7;\",\"name\":\"LATIN SMALL LETTER E WITH CIRCUMFLEX AND DOT BELOW\",\"char\":\"ệ\"},{\"hex\":\"&#1EC8;\",\"name\":\"LATIN CAPITAL LETTER I WITH HOOK ABOVE\",\"char\":\"Ỉ\"},{\"hex\":\"&#1EC9;\",\"name\":\"LATIN SMALL LETTER I WITH HOOK ABOVE\",\"char\":\"ỉ\"},{\"hex\":\"&#1ECA;\",\"name\":\"LATIN CAPITAL LETTER I WITH DOT BELOW\",\"char\":\"Ị\"},{\"hex\":\"&#1ECB;\",\"name\":\"LATIN SMALL LETTER I WITH DOT BELOW\",\"char\":\"ị\"},{\"hex\":\"&#1ECC;\",\"name\":\"LATIN CAPITAL LETTER O WITH DOT BELOW\",\"char\":\"Ọ\"},{\"hex\":\"&#1ECD;\",\"name\":\"LATIN SMALL LETTER O WITH DOT BELOW\",\"char\":\"ọ\"},{\"hex\":\"&#1ECE;\",\"name\":\"LATIN CAPITAL LETTER O WITH HOOK ABOVE\",\"char\":\"Ỏ\"},{\"hex\":\"&#1ECF;\",\"name\":\"LATIN SMALL LETTER O WITH HOOK ABOVE\",\"char\":\"ỏ\"},{\"hex\":\"&#1ED0;\",\"name\":\"LATIN CAPITAL LETTER O WITH CIRCUMFLEX AND ACUTE\",\"char\":\"Ố\"},{\"hex\":\"&#1ED1;\",\"name\":\"LATIN SMALL LETTER O WITH CIRCUMFLEX AND ACUTE\",\"char\":\"ố\"},{\"hex\":\"&#1ED2;\",\"name\":\"LATIN CAPITAL LETTER O WITH CIRCUMFLEX AND GRAVE\",\"char\":\"Ồ\"},{\"hex\":\"&#1ED3;\",\"name\":\"LATIN SMALL LETTER O WITH CIRCUMFLEX AND GRAVE\",\"char\":\"ồ\"},{\"hex\":\"&#1ED4;\",\"name\":\"LATIN CAPITAL LETTER O WITH CIRCUMFLEX AND HOOK ABOVE\",\"char\":\"Ổ\"},{\"hex\":\"&#1ED5;\",\"name\":\"LATIN SMALL LETTER O WITH CIRCUMFLEX AND HOOK ABOVE\",\"char\":\"ổ\"},{\"hex\":\"&#1ED6;\",\"name\":\"LATIN CAPITAL LETTER O WITH CIRCUMFLEX AND TILDE\",\"char\":\"Ỗ\"},{\"hex\":\"&#1ED7;\",\"name\":\"LATIN SMALL LETTER O WITH CIRCUMFLEX AND TILDE\",\"char\":\"ỗ\"},{\"hex\":\"&#1ED8;\",\"name\":\"LATIN CAPITAL LETTER O WITH CIRCUMFLEX AND DOT BELOW\",\"char\":\"Ộ\"},{\"hex\":\"&#1ED9;\",\"name\":\"LATIN SMALL LETTER O WITH CIRCUMFLEX AND DOT BELOW\",\"char\":\"ộ\"},{\"hex\":\"&#1EDA;\",\"name\":\"LATIN CAPITAL LETTER O WITH HORN AND ACUTE\",\"char\":\"Ớ\"},{\"hex\":\"&#1EDB;\",\"name\":\"LATIN SMALL LETTER O WITH HORN AND ACUTE\",\"char\":\"ớ\"},{\"hex\":\"&#1EDC;\",\"name\":\"LATIN CAPITAL LETTER O WITH HORN AND GRAVE\",\"char\":\"Ờ\"},{\"hex\":\"&#1EDD;\",\"name\":\"LATIN SMALL LETTER O WITH HORN AND GRAVE\",\"char\":\"ờ\"},{\"hex\":\"&#1EDE;\",\"name\":\"LATIN CAPITAL LETTER O WITH HORN AND HOOK ABOVE\",\"char\":\"Ở\"},{\"hex\":\"&#1EDF;\",\"name\":\"LATIN SMALL LETTER O WITH HORN AND HOOK ABOVE\",\"char\":\"ở\"},{\"hex\":\"&#1EE0;\",\"name\":\"LATIN CAPITAL LETTER O WITH HORN AND TILDE\",\"char\":\"Ỡ\"},{\"hex\":\"&#1EE1;\",\"name\":\"LATIN SMALL LETTER O WITH HORN AND TILDE\",\"char\":\"ỡ\"},{\"hex\":\"&#1EE2;\",\"name\":\"LATIN CAPITAL LETTER O WITH HORN AND DOT BELOW\",\"char\":\"Ợ\"},{\"hex\":\"&#1EE3;\",\"name\":\"LATIN SMALL LETTER O WITH HORN AND DOT BELOW\",\"char\":\"ợ\"},{\"hex\":\"&#1EE4;\",\"name\":\"LATIN CAPITAL LETTER U WITH DOT BELOW\",\"char\":\"Ụ\"},{\"hex\":\"&#1EE5;\",\"name\":\"LATIN SMALL LETTER U WITH DOT BELOW\",\"char\":\"ụ\"},{\"hex\":\"&#1EE6;\",\"name\":\"LATIN CAPITAL LETTER U WITH HOOK ABOVE\",\"char\":\"Ủ\"},{\"hex\":\"&#1EE7;\",\"name\":\"LATIN SMALL LETTER U WITH HOOK ABOVE\",\"char\":\"ủ\"},{\"hex\":\"&#1EE8;\",\"name\":\"LATIN CAPITAL LETTER U WITH HORN AND ACUTE\",\"char\":\"Ứ\"},{\"hex\":\"&#1EE9;\",\"name\":\"LATIN SMALL LETTER U WITH HORN AND ACUTE\",\"char\":\"ứ\"},{\"hex\":\"&#1EEA;\",\"name\":\"LATIN CAPITAL LETTER U WITH HORN AND GRAVE\",\"char\":\"Ừ\"},{\"hex\":\"&#1EEB;\",\"name\":\"LATIN SMALL LETTER U WITH HORN AND GRAVE\",\"char\":\"ừ\"},{\"hex\":\"&#1EEC;\",\"name\":\"LATIN CAPITAL LETTER U WITH HORN AND HOOK ABOVE\",\"char\":\"Ử\"},{\"hex\":\"&#1EED;\",\"name\":\"LATIN SMALL LETTER U WITH HORN AND HOOK ABOVE\",\"char\":\"ử\"},{\"hex\":\"&#1EEE;\",\"name\":\"LATIN CAPITAL LETTER U WITH HORN AND TILDE\",\"char\":\"Ữ\"},{\"hex\":\"&#1EEF;\",\"name\":\"LATIN SMALL LETTER U WITH HORN AND TILDE\",\"char\":\"ữ\"},{\"hex\":\"&#1EF0;\",\"name\":\"LATIN CAPITAL LETTER U WITH HORN AND DOT BELOW\",\"char\":\"Ự\"},{\"hex\":\"&#1EF1;\",\"name\":\"LATIN SMALL LETTER U WITH HORN AND DOT BELOW\",\"char\":\"ự\"},{\"hex\":\"&#1EF2;\",\"name\":\"LATIN CAPITAL LETTER Y WITH GRAVE (present in WGL4)\",\"char\":\"Ỳ\"},{\"hex\":\"&#1EF3;\",\"name\":\"LATIN SMALL LETTER Y WITH GRAVE (present in WGL4)\",\"char\":\"ỳ\"},{\"hex\":\"&#1EF4;\",\"name\":\"LATIN CAPITAL LETTER Y WITH DOT BELOW\",\"char\":\"Ỵ\"},{\"hex\":\"&#1EF5;\",\"name\":\"LATIN SMALL LETTER Y WITH DOT BELOW\",\"char\":\"ỵ\"},{\"hex\":\"&#1EF6;\",\"name\":\"LATIN CAPITAL LETTER Y WITH HOOK ABOVE\",\"char\":\"Ỷ\"},{\"hex\":\"&#1EF7;\",\"name\":\"LATIN SMALL LETTER Y WITH HOOK ABOVE\",\"char\":\"ỷ\"},{\"hex\":\"&#1EF8;\",\"name\":\"LATIN CAPITAL LETTER Y WITH TILDE\",\"char\":\"Ỹ\"},{\"hex\":\"&#1EF9;\",\"name\":\"LATIN SMALL LETTER Y WITH TILDE\",\"char\":\"ỹ\"},{\"hex\":\"&#1EFA;\",\"name\":\"LATIN CAPITAL LETTER MIDDLE-WELSH LL\",\"char\":\"Ỻ\"},{\"hex\":\"&#1EFB;\",\"name\":\"LATIN SMALL LETTER MIDDLE-WELSH LL\",\"char\":\"ỻ\"},{\"hex\":\"&#1EFC;\",\"name\":\"LATIN CAPITAL LETTER MIDDLE-WELSH V\",\"char\":\"Ỽ\"},{\"hex\":\"&#1EFD;\",\"name\":\"LATIN SMALL LETTER MIDDLE-WELSH V\",\"char\":\"ỽ\"},{\"hex\":\"&#1EFE;\",\"name\":\"LATIN CAPITAL LETTER Y WITH LOOP\",\"char\":\"Ỿ\"},{\"hex\":\"&#1EFF;\",\"name\":\"LATIN SMALL LETTER Y WITH LOOP\",\"char\":\"ỿ\"}],\"Arrows\":[{\"entity\":\"&larr;\",\"hex\":\"&#2190;\",\"name\":\"LEFTWARDS ARROW\",\"char\":\"←\"},{\"entity\":\"&uarr;\",\"hex\":\"&#2191;\",\"name\":\"UPWARDS ARROW\",\"char\":\"↑\"},{\"entity\":\"&rarr;\",\"hex\":\"&#2192;\",\"name\":\"RIGHTWARDS ARROW\",\"char\":\"→\"},{\"entity\":\"&darr;\",\"hex\":\"&#2193;\",\"name\":\"DOWNWARDS ARROW\",\"char\":\"↓\"},{\"entity\":\"&harr;\",\"hex\":\"&#2194;\",\"name\":\"LEFT RIGHT ARROW\",\"char\":\"↔\"},{\"hex\":\"&#2195;\",\"name\":\"UP DOWN ARROW\",\"char\":\"↕\"},{\"hex\":\"&#2196;\",\"name\":\"NORTH WEST ARROW\",\"char\":\"↖\"},{\"hex\":\"&#2197;\",\"name\":\"NORTH EAST ARROW\",\"char\":\"↗\"},{\"hex\":\"&#2198;\",\"name\":\"SOUTH EAST ARROW\",\"char\":\"↘\"},{\"hex\":\"&#2199;\",\"name\":\"SOUTH WEST ARROW\",\"char\":\"↙\"},{\"hex\":\"&#219A;\",\"name\":\"LEFTWARDS ARROW WITH STROKE\",\"char\":\"↚\"},{\"hex\":\"&#219B;\",\"name\":\"RIGHTWARDS ARROW WITH STROKE\",\"char\":\"↛\"},{\"hex\":\"&#219C;\",\"name\":\"LEFTWARDS WAVE ARROW\",\"char\":\"↜\"},{\"hex\":\"&#219D;\",\"name\":\"RIGHTWARDS WAVE ARROW\",\"char\":\"↝\"},{\"hex\":\"&#219E;\",\"name\":\"LEFTWARDS TWO HEADED ARROW\",\"char\":\"↞\"},{\"hex\":\"&#219F;\",\"name\":\"UPWARDS TWO HEADED ARROW\",\"char\":\"↟\"},{\"hex\":\"&#21A0;\",\"name\":\"RIGHTWARDS TWO HEADED ARROW\",\"char\":\"↠\"},{\"hex\":\"&#21A1;\",\"name\":\"DOWNWARDS TWO HEADED ARROW\",\"char\":\"↡\"},{\"hex\":\"&#21A2;\",\"name\":\"LEFTWARDS ARROW WITH TAIL\",\"char\":\"↢\"},{\"hex\":\"&#21A3;\",\"name\":\"RIGHTWARDS ARROW WITH TAIL\",\"char\":\"↣\"},{\"hex\":\"&#21A4;\",\"name\":\"LEFTWARDS ARROW FROM BAR\",\"char\":\"↤\"},{\"hex\":\"&#21A5;\",\"name\":\"UPWARDS ARROW FROM BAR\",\"char\":\"↥\"},{\"hex\":\"&#21A6;\",\"name\":\"RIGHTWARDS ARROW FROM BAR\",\"char\":\"↦\"},{\"hex\":\"&#21A7;\",\"name\":\"DOWNWARDS ARROW FROM BAR\",\"char\":\"↧\"},{\"hex\":\"&#21A8;\",\"name\":\"UP DOWN ARROW WITH BASE\",\"char\":\"↨\"},{\"hex\":\"&#21A9;\",\"name\":\"LEFTWARDS ARROW WITH HOOK\",\"char\":\"↩\"},{\"hex\":\"&#21AA;\",\"name\":\"RIGHTWARDS ARROW WITH HOOK\",\"char\":\"↪\"},{\"hex\":\"&#21AB;\",\"name\":\"LEFTWARDS ARROW WITH LOOP\",\"char\":\"↫\"},{\"hex\":\"&#21AC;\",\"name\":\"RIGHTWARDS ARROW WITH LOOP\",\"char\":\"↬\"},{\"hex\":\"&#21AD;\",\"name\":\"LEFT RIGHT WAVE ARROW\",\"char\":\"↭\"},{\"hex\":\"&#21AE;\",\"name\":\"LEFT RIGHT ARROW WITH STROKE\",\"char\":\"↮\"},{\"hex\":\"&#21AF;\",\"name\":\"DOWNWARDS ZIGZAG ARROW\",\"char\":\"↯\"},{\"hex\":\"&#21B0;\",\"name\":\"UPWARDS ARROW WITH TIP LEFTWARDS\",\"char\":\"↰\"},{\"hex\":\"&#21B1;\",\"name\":\"UPWARDS ARROW WITH TIP RIGHTWARDS\",\"char\":\"↱\"},{\"hex\":\"&#21B2;\",\"name\":\"DOWNWARDS ARROW WITH TIP LEFTWARDS\",\"char\":\"↲\"},{\"hex\":\"&#21B3;\",\"name\":\"DOWNWARDS ARROW WITH TIP RIGHTWARDS\",\"char\":\"↳\"},{\"hex\":\"&#21B4;\",\"name\":\"RIGHTWARDS ARROW WITH CORNER DOWNWARDS\",\"char\":\"↴\"},{\"entity\":\"&crarr;\",\"hex\":\"&#21B5;\",\"name\":\"DOWNWARDS ARROW WITH CORNER LEFTWARDS\",\"char\":\"↵\"},{\"hex\":\"&#21B6;\",\"name\":\"ANTICLOCKWISE TOP SEMICIRCLE ARROW\",\"char\":\"↶\"},{\"hex\":\"&#21B7;\",\"name\":\"CLOCKWISE TOP SEMICIRCLE ARROW\",\"char\":\"↷\"},{\"hex\":\"&#21B8;\",\"name\":\"NORTH WEST ARROW TO LONG BAR\",\"char\":\"↸\"},{\"hex\":\"&#21B9;\",\"name\":\"LEFTWARDS ARROW TO BAR OVER RIGHTWARDS ARROW TO BAR\",\"char\":\"↹\"},{\"hex\":\"&#21BA;\",\"name\":\"ANTICLOCKWISE OPEN CIRCLE ARROW\",\"char\":\"↺\"},{\"hex\":\"&#21BB;\",\"name\":\"CLOCKWISE OPEN CIRCLE ARROW\",\"char\":\"↻\"},{\"hex\":\"&#21BC;\",\"name\":\"LEFTWARDS HARPOON WITH BARB UPWARDS\",\"char\":\"↼\"},{\"hex\":\"&#21BD;\",\"name\":\"LEFTWARDS HARPOON WITH BARB DOWNWARDS\",\"char\":\"↽\"},{\"hex\":\"&#21BE;\",\"name\":\"UPWARDS HARPOON WITH BARB RIGHTWARDS\",\"char\":\"↾\"},{\"hex\":\"&#21BF;\",\"name\":\"UPWARDS HARPOON WITH BARB LEFTWARDS\",\"char\":\"↿\"},{\"hex\":\"&#21C0;\",\"name\":\"RIGHTWARDS HARPOON WITH BARB UPWARDS\",\"char\":\"⇀\"},{\"hex\":\"&#21C1;\",\"name\":\"RIGHTWARDS HARPOON WITH BARB DOWNWARDS\",\"char\":\"⇁\"},{\"hex\":\"&#21C2;\",\"name\":\"DOWNWARDS HARPOON WITH BARB RIGHTWARDS\",\"char\":\"⇂\"},{\"hex\":\"&#21C3;\",\"name\":\"DOWNWARDS HARPOON WITH BARB LEFTWARDS\",\"char\":\"⇃\"},{\"hex\":\"&#21C4;\",\"name\":\"RIGHTWARDS ARROW OVER LEFTWARDS ARROW\",\"char\":\"⇄\"},{\"hex\":\"&#21C5;\",\"name\":\"UPWARDS ARROW LEFTWARDS OF DOWNWARDS ARROW\",\"char\":\"⇅\"},{\"hex\":\"&#21C6;\",\"name\":\"LEFTWARDS ARROW OVER RIGHTWARDS ARROW\",\"char\":\"⇆\"},{\"hex\":\"&#21C7;\",\"name\":\"LEFTWARDS PAIRED ARROWS\",\"char\":\"⇇\"},{\"hex\":\"&#21C8;\",\"name\":\"UPWARDS PAIRED ARROWS\",\"char\":\"⇈\"},{\"hex\":\"&#21C9;\",\"name\":\"RIGHTWARDS PAIRED ARROWS\",\"char\":\"⇉\"},{\"hex\":\"&#21CA;\",\"name\":\"DOWNWARDS PAIRED ARROWS\",\"char\":\"⇊\"},{\"hex\":\"&#21CB;\",\"name\":\"LEFTWARDS HARPOON OVER RIGHTWARDS HARPOON\",\"char\":\"⇋\"},{\"hex\":\"&#21CC;\",\"name\":\"RIGHTWARDS HARPOON OVER LEFTWARDS HARPOON\",\"char\":\"⇌\"},{\"hex\":\"&#21CD;\",\"name\":\"LEFTWARDS DOUBLE ARROW WITH STROKE\",\"char\":\"⇍\"},{\"hex\":\"&#21CE;\",\"name\":\"LEFT RIGHT DOUBLE ARROW WITH STROKE\",\"char\":\"⇎\"},{\"hex\":\"&#21CF;\",\"name\":\"RIGHTWARDS DOUBLE ARROW WITH STROKE\",\"char\":\"⇏\"},{\"entity\":\"&lArr;\",\"hex\":\"&#21D0;\",\"name\":\"LEFTWARDS DOUBLE ARROW\",\"char\":\"⇐\"},{\"entity\":\"&uArr;\",\"hex\":\"&#21D1;\",\"name\":\"UPWARDS DOUBLE ARROW\",\"char\":\"⇑\"},{\"entity\":\"&rArr;\",\"hex\":\"&#21D2;\",\"name\":\"RIGHTWARDS DOUBLE ARROW\",\"char\":\"⇒\"},{\"entity\":\"&dArr;\",\"hex\":\"&#21D3;\",\"name\":\"DOWNWARDS DOUBLE ARROW\",\"char\":\"⇓\"},{\"entity\":\"&hArr;\",\"hex\":\"&#21D4;\",\"name\":\"LEFT RIGHT DOUBLE ARROW\",\"char\":\"⇔\"},{\"hex\":\"&#21D5;\",\"name\":\"UP DOWN DOUBLE ARROW\",\"char\":\"⇕\"},{\"hex\":\"&#21D6;\",\"name\":\"NORTH WEST DOUBLE ARROW\",\"char\":\"⇖\"},{\"hex\":\"&#21D7;\",\"name\":\"NORTH EAST DOUBLE ARROW\",\"char\":\"⇗\"},{\"hex\":\"&#21D8;\",\"name\":\"SOUTH EAST DOUBLE ARROW\",\"char\":\"⇘\"},{\"hex\":\"&#21D9;\",\"name\":\"SOUTH WEST DOUBLE ARROW\",\"char\":\"⇙\"},{\"hex\":\"&#21DA;\",\"name\":\"LEFTWARDS TRIPLE ARROW\",\"char\":\"⇚\"},{\"hex\":\"&#21DB;\",\"name\":\"RIGHTWARDS TRIPLE ARROW\",\"char\":\"⇛\"},{\"hex\":\"&#21DC;\",\"name\":\"LEFTWARDS SQUIGGLE ARROW\",\"char\":\"⇜\"},{\"hex\":\"&#21DD;\",\"name\":\"RIGHTWARDS SQUIGGLE ARROW\",\"char\":\"⇝\"},{\"hex\":\"&#21DE;\",\"name\":\"UPWARDS ARROW WITH DOUBLE STROKE\",\"char\":\"⇞\"},{\"hex\":\"&#21DF;\",\"name\":\"DOWNWARDS ARROW WITH DOUBLE STROKE\",\"char\":\"⇟\"},{\"hex\":\"&#21E0;\",\"name\":\"LEFTWARDS DASHED ARROW\",\"char\":\"⇠\"},{\"hex\":\"&#21E1;\",\"name\":\"UPWARDS DASHED ARROW\",\"char\":\"⇡\"},{\"hex\":\"&#21E2;\",\"name\":\"RIGHTWARDS DASHED ARROW\",\"char\":\"⇢\"},{\"hex\":\"&#21E3;\",\"name\":\"DOWNWARDS DASHED ARROW\",\"char\":\"⇣\"},{\"hex\":\"&#21E4;\",\"name\":\"LEFTWARDS ARROW TO BAR\",\"char\":\"⇤\"},{\"hex\":\"&#21E5;\",\"name\":\"RIGHTWARDS ARROW TO BAR\",\"char\":\"⇥\"},{\"hex\":\"&#21E6;\",\"name\":\"LEFTWARDS WHITE ARROW\",\"char\":\"⇦\"},{\"hex\":\"&#21E7;\",\"name\":\"UPWARDS WHITE ARROW\",\"char\":\"⇧\"},{\"hex\":\"&#21E8;\",\"name\":\"RIGHTWARDS WHITE ARROW\",\"char\":\"⇨\"},{\"hex\":\"&#21E9;\",\"name\":\"DOWNWARDS WHITE ARROW\",\"char\":\"⇩\"},{\"hex\":\"&#21EA;\",\"name\":\"UPWARDS WHITE ARROW FROM BAR\",\"char\":\"⇪\"},{\"hex\":\"&#21EB;\",\"name\":\"UPWARDS WHITE ARROW ON PEDESTAL\",\"char\":\"⇫\"},{\"hex\":\"&#21EC;\",\"name\":\"UPWARDS WHITE ARROW ON PEDESTAL WITH HORIZONTAL BAR\",\"char\":\"⇬\"},{\"hex\":\"&#21ED;\",\"name\":\"UPWARDS WHITE ARROW ON PEDESTAL WITH VERTICAL BAR\",\"char\":\"⇭\"},{\"hex\":\"&#21EE;\",\"name\":\"UPWARDS WHITE DOUBLE ARROW\",\"char\":\"⇮\"},{\"hex\":\"&#21EF;\",\"name\":\"UPWARDS WHITE DOUBLE ARROW ON PEDESTAL\",\"char\":\"⇯\"},{\"hex\":\"&#21F0;\",\"name\":\"RIGHTWARDS WHITE ARROW FROM WALL\",\"char\":\"⇰\"},{\"hex\":\"&#21F1;\",\"name\":\"NORTH WEST ARROW TO CORNER\",\"char\":\"⇱\"},{\"hex\":\"&#21F2;\",\"name\":\"SOUTH EAST ARROW TO CORNER\",\"char\":\"⇲\"},{\"hex\":\"&#21F3;\",\"name\":\"UP DOWN WHITE ARROW\",\"char\":\"⇳\"},{\"hex\":\"&#21F4;\",\"name\":\"RIGHT ARROW WITH SMALL CIRCLE\",\"char\":\"⇴\"},{\"hex\":\"&#21F5;\",\"name\":\"DOWNWARDS ARROW LEFTWARDS OF UPWARDS ARROW\",\"char\":\"⇵\"},{\"hex\":\"&#21F6;\",\"name\":\"THREE RIGHTWARDS ARROWS\",\"char\":\"⇶\"},{\"hex\":\"&#21F7;\",\"name\":\"LEFTWARDS ARROW WITH VERTICAL STROKE\",\"char\":\"⇷\"},{\"hex\":\"&#21F8;\",\"name\":\"RIGHTWARDS ARROW WITH VERTICAL STROKE\",\"char\":\"⇸\"},{\"hex\":\"&#21F9;\",\"name\":\"LEFT RIGHT ARROW WITH VERTICAL STROKE\",\"char\":\"⇹\"},{\"hex\":\"&#21FA;\",\"name\":\"LEFTWARDS ARROW WITH DOUBLE VERTICAL STROKE\",\"char\":\"⇺\"},{\"hex\":\"&#21FB;\",\"name\":\"RIGHTWARDS ARROW WITH DOUBLE VERTICAL STROKE\",\"char\":\"⇻\"},{\"hex\":\"&#21FC;\",\"name\":\"LEFT RIGHT ARROW WITH DOUBLE VERTICAL STROKE\",\"char\":\"⇼\"},{\"hex\":\"&#21FD;\",\"name\":\"LEFTWARDS OPEN-HEADED ARROW\",\"char\":\"⇽\"},{\"hex\":\"&#21FE;\",\"name\":\"RIGHTWARDS OPEN-HEADED ARROW\",\"char\":\"⇾\"},{\"hex\":\"&#21FF;\",\"name\":\"\",\"char\":\"⇿\"},{\"hex\":\"&#2B00;\",\"name\":\"NORTH EAST WHITE ARROW\",\"char\":\"⬀\"},{\"hex\":\"&#2B01;\",\"name\":\"NORTH WEST WHITE ARROW\",\"char\":\"⬁\"},{\"hex\":\"&#2B02;\",\"name\":\"SOUTH EAST WHITE ARROW\",\"char\":\"⬂\"},{\"hex\":\"&#2B03;\",\"name\":\"SOUTH WEST WHITE ARROW\",\"char\":\"⬃\"},{\"hex\":\"&#2B04;\",\"name\":\"LEFT RIGHT WHITE ARROW\",\"char\":\"⬄\"},{\"hex\":\"&#2B05;\",\"name\":\"LEFTWARDS BLACK ARROW\",\"char\":\"⬅\"},{\"hex\":\"&#2B06;\",\"name\":\"UPWARDS BLACK ARROW\",\"char\":\"⬆\"},{\"hex\":\"&#2B07;\",\"name\":\"DOWNWARDS BLACK ARROW\",\"char\":\"⬇\"},{\"hex\":\"&#2B08;\",\"name\":\"NORTH EAST BLACK ARROW\",\"char\":\"⬈\"},{\"hex\":\"&#2B09;\",\"name\":\"NORTH WEST BLACK ARROW\",\"char\":\"⬉\"},{\"hex\":\"&#2B0A;\",\"name\":\"SOUTH EAST BLACK ARROW\",\"char\":\"⬊\"},{\"hex\":\"&#2B0B;\",\"name\":\"SOUTH WEST BLACK ARROW\",\"char\":\"⬋\"},{\"hex\":\"&#2B0C;\",\"name\":\"LEFT RIGHT BLACK ARROW\",\"char\":\"⬌\"},{\"hex\":\"&#2B0D;\",\"name\":\"UP DOWN BLACK ARROW\",\"char\":\"⬍\"},{\"hex\":\"&#2B0E;\",\"name\":\"RIGHTWARDS ARROW WITH TIP DOWNWARDS\",\"char\":\"⬎\"},{\"hex\":\"&#2B0F;\",\"name\":\"RIGHTWARDS ARROW WITH TIP UPWARDS\",\"char\":\"⬏\"},{\"hex\":\"&#2B10;\",\"name\":\"LEFTWARDS ARROW WITH TIP DOWNWARDS\",\"char\":\"⬐\"},{\"hex\":\"&#2B11;\",\"name\":\"LEFTWARDS ARROW WITH TIP UPWARDS\",\"char\":\"⬑\"},{\"hex\":\"&#2794;\",\"name\":\"HEAVY WIDE-HEADED RIGHTWARDS ARROW\",\"char\":\"➔\"},{\"hex\":\"&#2798;\",\"name\":\"HEAVY SOUTH EAST ARROW\",\"char\":\"➘\"},{\"hex\":\"&#2799;\",\"name\":\"HEAVY RIGHTWARDS ARROW\",\"char\":\"➙\"},{\"hex\":\"&#279A;\",\"name\":\"HEAVY NORTH EAST ARROW\",\"char\":\"➚\"},{\"hex\":\"&#279B;\",\"name\":\"DRAFTING POINT RIGHTWARDS ARROW\",\"char\":\"➛\"},{\"hex\":\"&#279C;\",\"name\":\"HEAVY ROUND-TIPPED RIGHTWARDS ARROW\",\"char\":\"➜\"},{\"hex\":\"&#279D;\",\"name\":\"TRIANGLE-HEADED RIGHTWARDS ARROW\",\"char\":\"➝\"},{\"hex\":\"&#279E;\",\"name\":\"HEAVY TRIANGLE-HEADED RIGHTWARDS ARROW\",\"char\":\"➞\"},{\"hex\":\"&#279F;\",\"name\":\"DASHED TRIANGLE-HEADED RIGHTWARDS ARROW\",\"char\":\"➟\"},{\"hex\":\"&#27A0;\",\"name\":\"HEAVY DASHED TRIANGLE-HEADED RIGHTWARDS ARROW\",\"char\":\"➠\"},{\"hex\":\"&#27A1;\",\"name\":\"BLACK RIGHTWARDS ARROW\",\"char\":\"➡\"},{\"hex\":\"&#27A2;\",\"name\":\"THREE-D TOP-LIGHTED RIGHTWARDS ARROWHEAD\",\"char\":\"➢\"},{\"hex\":\"&#27A3;\",\"name\":\"THREE-D BOTTOM-LIGHTED RIGHTWARDS ARROWHEAD\",\"char\":\"➣\"},{\"hex\":\"&#27A4;\",\"name\":\"BLACK RIGHTWARDS ARROWHEAD\",\"char\":\"➤\"},{\"hex\":\"&#27A5;\",\"name\":\"HEAVY BLACK CURVED DOWNWARDS AND RIGHTWARDS ARROW\",\"char\":\"➥\"},{\"hex\":\"&#27A6;\",\"name\":\"HEAVY BLACK CURVED UPWARDS AND RIGHTWARDS ARROW\",\"char\":\"➦\"},{\"hex\":\"&#27A7;\",\"name\":\"SQUAT BLACK RIGHTWARDS ARROW\",\"char\":\"➧\"},{\"hex\":\"&#27A8;\",\"name\":\"HEAVY CONCAVE-POINTED BLACK RIGHTWARDS ARROW\",\"char\":\"➨\"},{\"hex\":\"&#27A9;\",\"name\":\"RIGHT-SHADED WHITE RIGHTWARDS ARROW\",\"char\":\"➩\"},{\"hex\":\"&#27AA;\",\"name\":\"LEFT-SHADED WHITE RIGHTWARDS ARROW\",\"char\":\"➪\"},{\"hex\":\"&#27AB;\",\"name\":\"BACK-TILTED SHADOWED WHITE RIGHTWARDS ARROW\",\"char\":\"➫\"},{\"hex\":\"&#27AC;\",\"name\":\"FRONT-TILTED SHADOWED WHITE RIGHTWARDS ARROW\",\"char\":\"➬\"},{\"hex\":\"&#27AD;\",\"name\":\"HEAVY LOWER RIGHT-SHADOWED WHITE RIGHTWARDS ARROW\",\"char\":\"➭\"},{\"hex\":\"&#27AE;\",\"name\":\"HEAVY UPPER RIGHT-SHADOWED WHITE RIGHTWARDS ARROW\",\"char\":\"➮\"},{\"hex\":\"&#27AF;\",\"name\":\"NOTCHED LOWER RIGHT-SHADOWED WHITE RIGHTWARDS ARROW\",\"char\":\"➯\"},{\"hex\":\"&#27B1;\",\"name\":\"NOTCHED UPPER RIGHT-SHADOWED WHITE RIGHTWARDS ARROW\",\"char\":\"➱\"},{\"hex\":\"&#27B2;\",\"name\":\"CIRCLED HEAVY WHITE RIGHTWARDS ARROW\",\"char\":\"➲\"},{\"hex\":\"&#27B3;\",\"name\":\"WHITE-FEATHERED RIGHTWARDS ARROW\",\"char\":\"➳\"},{\"hex\":\"&#27B4;\",\"name\":\"BLACK-FEATHERED SOUTH EAST ARROW\",\"char\":\"➴\"},{\"hex\":\"&#27B5;\",\"name\":\"BLACK-FEATHERED RIGHTWARDS ARROW\",\"char\":\"➵\"},{\"hex\":\"&#27B6;\",\"name\":\"BLACK-FEATHERED NORTH EAST ARROW\",\"char\":\"➶\"},{\"hex\":\"&#27B7;\",\"name\":\"HEAVY BLACK-FEATHERED SOUTH EAST ARROW\",\"char\":\"➷\"},{\"hex\":\"&#27B8;\",\"name\":\"HEAVY BLACK-FEATHERED RIGHTWARDS ARROW\",\"char\":\"➸\"},{\"hex\":\"&#27B9;\",\"name\":\"HEAVY BLACK-FEATHERED NORTH EAST ARROW\",\"char\":\"➹\"},{\"hex\":\"&#27BA;\",\"name\":\"TEARDROP-BARBED RIGHTWARDS ARROW\",\"char\":\"➺\"},{\"hex\":\"&#27BB;\",\"name\":\"HEAVY TEARDROP-SHANKED RIGHTWARDS ARROW\",\"char\":\"➻\"},{\"hex\":\"&#27BC;\",\"name\":\"WEDGE-TAILED RIGHTWARDS ARROW\",\"char\":\"➼\"},{\"hex\":\"&#27BD;\",\"name\":\"HEAVY WEDGE-TAILED RIGHTWARDS ARROW\",\"char\":\"➽\"},{\"hex\":\"&#27BE;\",\"name\":\"OPEN-OUTLINED RIGHTWARDS ARROW\",\"char\":\"➾\"},{\"hex\":\"&#27F0;\",\"name\":\"UPWARDS QUADRUPLE ARROW\",\"char\":\"⟰\"},{\"hex\":\"&#27F1;\",\"name\":\"DOWNWARDS QUADRUPLE ARROW\",\"char\":\"⟱\"},{\"hex\":\"&#27F2;\",\"name\":\"ANTICLOCKWISE GAPPED CIRCLE ARROW\",\"char\":\"⟲\"},{\"hex\":\"&#27F3;\",\"name\":\"CLOCKWISE GAPPED CIRCLE ARROW\",\"char\":\"⟳\"},{\"hex\":\"&#27F4;\",\"name\":\"RIGHT ARROW WITH CIRCLED PLUS\",\"char\":\"⟴\"},{\"hex\":\"&#27F5;\",\"name\":\"LONG LEFTWARDS ARROW\",\"char\":\"⟵\"},{\"hex\":\"&#27F6;\",\"name\":\"LONG RIGHTWARDS ARROW\",\"char\":\"⟶\"},{\"hex\":\"&#27F7;\",\"name\":\"LONG LEFT RIGHT ARROW\",\"char\":\"⟷\"},{\"hex\":\"&#27F8;\",\"name\":\"LONG LEFTWARDS DOUBLE ARROW\",\"char\":\"⟸\"},{\"hex\":\"&#27F9;\",\"name\":\"LONG RIGHTWARDS DOUBLE ARROW\",\"char\":\"⟹\"},{\"hex\":\"&#27FA;\",\"name\":\"LONG LEFT RIGHT DOUBLE ARROW\",\"char\":\"⟺\"},{\"hex\":\"&#27FB;\",\"name\":\"LONG LEFTWARDS ARROW FROM BAR\",\"char\":\"⟻\"},{\"hex\":\"&#27FC;\",\"name\":\"LONG RIGHTWARDS ARROW FROM BAR\",\"char\":\"⟼\"},{\"hex\":\"&#27FD;\",\"name\":\"LONG LEFTWARDS DOUBLE ARROW FROM BAR\",\"char\":\"⟽\"},{\"hex\":\"&#27FE;\",\"name\":\"LONG RIGHTWARDS DOUBLE ARROW FROM BAR\",\"char\":\"⟾\"},{\"hex\":\"&#27FF;\",\"name\":\"LONG RIGHTWARDS SQUIGGLE ARROW\",\"char\":\"⟿\"},{\"hex\":\"&#2900;\",\"name\":\"RIGHTWARDS TWO-HEADED ARROW WITH VERTICAL STROKE\",\"char\":\"⤀\"},{\"hex\":\"&#2901;\",\"name\":\"RIGHTWARDS TWO-HEADED ARROW WITH DOUBLE VERTICAL STROKE\",\"char\":\"⤁\"},{\"hex\":\"&#2902;\",\"name\":\"LEFTWARDS DOUBLE ARROW WITH VERTICAL STROKE\",\"char\":\"⤂\"},{\"hex\":\"&#2903;\",\"name\":\"RIGHTWARDS DOUBLE ARROW WITH VERTICAL STROKE\",\"char\":\"⤃\"},{\"hex\":\"&#2904;\",\"name\":\"LEFT RIGHT DOUBLE ARROW WITH VERTICAL STROKE\",\"char\":\"⤄\"},{\"hex\":\"&#2905;\",\"name\":\"RIGHTWARDS TWO-HEADED ARROW FROM BAR\",\"char\":\"⤅\"},{\"hex\":\"&#2906;\",\"name\":\"LEFTWARDS DOUBLE ARROW FROM BAR\",\"char\":\"⤆\"},{\"hex\":\"&#2907;\",\"name\":\"RIGHTWARDS DOUBLE ARROW FROM BAR\",\"char\":\"⤇\"},{\"hex\":\"&#2908;\",\"name\":\"DOWNWARDS ARROW WITH HORIZONTAL STROKE\",\"char\":\"⤈\"},{\"hex\":\"&#2909;\",\"name\":\"UPWARDS ARROW WITH HORIZONTAL STROKE\",\"char\":\"⤉\"},{\"hex\":\"&#290A;\",\"name\":\"UPWARDS TRIPLE ARROW\",\"char\":\"⤊\"},{\"hex\":\"&#290B;\",\"name\":\"DOWNWARDS TRIPLE ARROW\",\"char\":\"⤋\"},{\"hex\":\"&#290C;\",\"name\":\"LEFTWARDS DOUBLE DASH ARROW\",\"char\":\"⤌\"},{\"hex\":\"&#290D;\",\"name\":\"RIGHTWARDS DOUBLE DASH ARROW\",\"char\":\"⤍\"},{\"hex\":\"&#290E;\",\"name\":\"LEFTWARDS TRIPLE DASH ARROW\",\"char\":\"⤎\"},{\"hex\":\"&#290F;\",\"name\":\"RIGHTWARDS TRIPLE DASH ARROW\",\"char\":\"⤏\"},{\"hex\":\"&#2910;\",\"name\":\"RIGHTWARDS TWO-HEADED TRIPLE DASH ARROW\",\"char\":\"⤐\"},{\"hex\":\"&#2911;\",\"name\":\"RIGHTWARDS ARROW WITH DOTTED STEM\",\"char\":\"⤑\"},{\"hex\":\"&#2912;\",\"name\":\"UPWARDS ARROW TO BAR\",\"char\":\"⤒\"},{\"hex\":\"&#2913;\",\"name\":\"DOWNWARDS ARROW TO BAR\",\"char\":\"⤓\"},{\"hex\":\"&#2914;\",\"name\":\"RIGHTWARDS ARROW WITH TAIL WITH VERTICAL STROKE\",\"char\":\"⤔\"},{\"hex\":\"&#2915;\",\"name\":\"RIGHTWARDS ARROW WITH TAIL WITH DOUBLE VERTICAL STROKE\",\"char\":\"⤕\"},{\"hex\":\"&#2916;\",\"name\":\"RIGHTWARDS TWO-HEADED ARROW WITH TAIL\",\"char\":\"⤖\"},{\"hex\":\"&#2917;\",\"name\":\"RIGHTWARDS TWO-HEADED ARROW WITH TAIL WITH VERTICAL STROKE\",\"char\":\"⤗\"},{\"hex\":\"&#2918;\",\"name\":\"RIGHTWARDS TWO-HEADED ARROW WITH TAIL WITH DOUBLE VERTICAL STROKE\",\"char\":\"⤘\"},{\"hex\":\"&#2919;\",\"name\":\"LEFTWARDS ARROW-TAIL\",\"char\":\"⤙\"},{\"hex\":\"&#291A;\",\"name\":\"RIGHTWARDS ARROW-TAIL\",\"char\":\"⤚\"},{\"hex\":\"&#291B;\",\"name\":\"LEFTWARDS DOUBLE ARROW-TAIL\",\"char\":\"⤛\"},{\"hex\":\"&#291C;\",\"name\":\"RIGHTWARDS DOUBLE ARROW-TAIL\",\"char\":\"⤜\"},{\"hex\":\"&#291D;\",\"name\":\"LEFTWARDS ARROW TO BLACK DIAMOND\",\"char\":\"⤝\"},{\"hex\":\"&#291E;\",\"name\":\"RIGHTWARDS ARROW TO BLACK DIAMOND\",\"char\":\"⤞\"},{\"hex\":\"&#291F;\",\"name\":\"LEFTWARDS ARROW FROM BAR TO BLACK DIAMOND\",\"char\":\"⤟\"},{\"hex\":\"&#2920;\",\"name\":\"RIGHTWARDS ARROW FROM BAR TO BLACK DIAMOND\",\"char\":\"⤠\"},{\"hex\":\"&#2921;\",\"name\":\"NORTH WEST AND SOUTH EAST ARROW\",\"char\":\"⤡\"},{\"hex\":\"&#2922;\",\"name\":\"NORTH EAST AND SOUTH WEST ARROW\",\"char\":\"⤢\"},{\"hex\":\"&#2923;\",\"name\":\"NORTH WEST ARROW WITH HOOK\",\"char\":\"⤣\"},{\"hex\":\"&#2924;\",\"name\":\"NORTH EAST ARROW WITH HOOK\",\"char\":\"⤤\"},{\"hex\":\"&#2925;\",\"name\":\"SOUTH EAST ARROW WITH HOOK\",\"char\":\"⤥\"},{\"hex\":\"&#2926;\",\"name\":\"SOUTH WEST ARROW WITH HOOK\",\"char\":\"⤦\"},{\"hex\":\"&#2927;\",\"name\":\"NORTH WEST ARROW AND NORTH EAST ARROW\",\"char\":\"⤧\"},{\"hex\":\"&#2928;\",\"name\":\"NORTH EAST ARROW AND SOUTH EAST ARROW\",\"char\":\"⤨\"},{\"hex\":\"&#2929;\",\"name\":\"SOUTH EAST ARROW AND SOUTH WEST ARROW\",\"char\":\"⤩\"},{\"hex\":\"&#292A;\",\"name\":\"SOUTH WEST ARROW AND NORTH WEST ARROW\",\"char\":\"⤪\"},{\"hex\":\"&#292B;\",\"name\":\"RISING DIAGONAL CROSSING FALLING DIAGONAL\",\"char\":\"⤫\"},{\"hex\":\"&#292C;\",\"name\":\"FALLING DIAGONAL CROSSING RISING DIAGONAL\",\"char\":\"⤬\"},{\"hex\":\"&#292D;\",\"name\":\"SOUTH EAST ARROW CROSSING NORTH EAST ARROW\",\"char\":\"⤭\"},{\"hex\":\"&#292E;\",\"name\":\"NORTH EAST ARROW CROSSING SOUTH EAST ARROW\",\"char\":\"⤮\"},{\"hex\":\"&#292F;\",\"name\":\"FALLING DIAGONAL CROSSING NORTH EAST ARROW\",\"char\":\"⤯\"},{\"hex\":\"&#2930;\",\"name\":\"RISING DIAGONAL CROSSING SOUTH EAST ARROW\",\"char\":\"⤰\"},{\"hex\":\"&#2931;\",\"name\":\"NORTH EAST ARROW CROSSING NORTH WEST ARROW\",\"char\":\"⤱\"},{\"hex\":\"&#2932;\",\"name\":\"NORTH WEST ARROW CROSSING NORTH EAST ARROW\",\"char\":\"⤲\"},{\"hex\":\"&#2933;\",\"name\":\"WAVE ARROW POINTING DIRECTLY RIGHT\",\"char\":\"⤳\"},{\"hex\":\"&#2934;\",\"name\":\"ARROW POINTING RIGHTWARDS THEN CURVING UPWARDS\",\"char\":\"⤴\"},{\"hex\":\"&#2935;\",\"name\":\"ARROW POINTING RIGHTWARDS THEN CURVING DOWNWARDS\",\"char\":\"⤵\"},{\"hex\":\"&#2936;\",\"name\":\"ARROW POINTING DOWNWARDS THEN CURVING LEFTWARDS\",\"char\":\"⤶\"},{\"hex\":\"&#2937;\",\"name\":\"ARROW POINTING DOWNWARDS THEN CURVING RIGHTWARDS\",\"char\":\"⤷\"},{\"hex\":\"&#2938;\",\"name\":\"RIGHT-SIDE ARC CLOCKWISE ARROW\",\"char\":\"⤸\"},{\"hex\":\"&#2939;\",\"name\":\"LEFT-SIDE ARC ANTICLOCKWISE ARROW\",\"char\":\"⤹\"},{\"hex\":\"&#293A;\",\"name\":\"TOP ARC ANTICLOCKWISE ARROW\",\"char\":\"⤺\"},{\"hex\":\"&#293B;\",\"name\":\"BOTTOM ARC ANTICLOCKWISE ARROW\",\"char\":\"⤻\"},{\"hex\":\"&#293C;\",\"name\":\"TOP ARC CLOCKWISE ARROW WITH MINUS\",\"char\":\"⤼\"},{\"hex\":\"&#293D;\",\"name\":\"TOP ARC ANTICLOCKWISE ARROW WITH PLUS\",\"char\":\"⤽\"},{\"hex\":\"&#293E;\",\"name\":\"LOWER RIGHT SEMICIRCULAR CLOCKWISE ARROW\",\"char\":\"⤾\"},{\"hex\":\"&#293F;\",\"name\":\"LOWER LEFT SEMICIRCULAR ANTICLOCKWISE ARROW\",\"char\":\"⤿\"},{\"hex\":\"&#2940;\",\"name\":\"ANTICLOCKWISE CLOSED CIRCLE ARROW\",\"char\":\"⥀\"},{\"hex\":\"&#2941;\",\"name\":\"CLOCKWISE CLOSED CIRCLE ARROW\",\"char\":\"⥁\"},{\"hex\":\"&#2942;\",\"name\":\"RIGHTWARDS ARROW ABOVE SHORT LEFTWARDS ARROW\",\"char\":\"⥂\"},{\"hex\":\"&#2943;\",\"name\":\"LEFTWARDS ARROW ABOVE SHORT RIGHTWARDS ARROW\",\"char\":\"⥃\"},{\"hex\":\"&#2944;\",\"name\":\"SHORT RIGHTWARDS ARROW ABOVE LEFTWARDS ARROW\",\"char\":\"⥄\"},{\"hex\":\"&#2945;\",\"name\":\"RIGHTWARDS ARROW WITH PLUS BELOW\",\"char\":\"⥅\"},{\"hex\":\"&#2946;\",\"name\":\"LEFTWARDS ARROW WITH PLUS BELOW\",\"char\":\"⥆\"},{\"hex\":\"&#2947;\",\"name\":\"RIGHTWARDS ARROW THROUGH X\",\"char\":\"⥇\"},{\"hex\":\"&#2948;\",\"name\":\"LEFT RIGHT ARROW THROUGH SMALL CIRCLE\",\"char\":\"⥈\"},{\"hex\":\"&#2949;\",\"name\":\"UPWARDS TWO-HEADED ARROW FROM SMALL CIRCLE\",\"char\":\"⥉\"},{\"hex\":\"&#294A;\",\"name\":\"LEFT BARB UP RIGHT BARB DOWN HARPOON\",\"char\":\"⥊\"},{\"hex\":\"&#294B;\",\"name\":\"LEFT BARB DOWN RIGHT BARB UP HARPOON\",\"char\":\"⥋\"},{\"hex\":\"&#294C;\",\"name\":\"UP BARB RIGHT DOWN BARB LEFT HARPOON\",\"char\":\"⥌\"},{\"hex\":\"&#294D;\",\"name\":\"UP BARB LEFT DOWN BARB RIGHT HARPOON\",\"char\":\"⥍\"},{\"hex\":\"&#294E;\",\"name\":\"LEFT BARB UP RIGHT BARB UP HARPOON\",\"char\":\"⥎\"},{\"hex\":\"&#294F;\",\"name\":\"UP BARB RIGHT DOWN BARB RIGHT HARPOON\",\"char\":\"⥏\"},{\"hex\":\"&#2950;\",\"name\":\"LEFT BARB DOWN RIGHT BARB DOWN HARPOON\",\"char\":\"⥐\"},{\"hex\":\"&#2951;\",\"name\":\"UP BARB LEFT DOWN BARB LEFT HARPOON\",\"char\":\"⥑\"},{\"hex\":\"&#2952;\",\"name\":\"LEFTWARDS HARPOON WITH BARB UP TO BAR\",\"char\":\"⥒\"},{\"hex\":\"&#2953;\",\"name\":\"RIGHTWARDS HARPOON WITH BARB UP TO BAR\",\"char\":\"⥓\"},{\"hex\":\"&#2954;\",\"name\":\"UPWARDS HARPOON WITH BARB RIGHT TO BAR\",\"char\":\"⥔\"},{\"hex\":\"&#2955;\",\"name\":\"DOWNWARDS HARPOON WITH BARB RIGHT TO BAR\",\"char\":\"⥕\"},{\"hex\":\"&#2956;\",\"name\":\"LEFTWARDS HARPOON WITH BARB DOWN TO BAR\",\"char\":\"⥖\"},{\"hex\":\"&#2957;\",\"name\":\"RIGHTWARDS HARPOON WITH BARB DOWN TO BAR\",\"char\":\"⥗\"},{\"hex\":\"&#2958;\",\"name\":\"UPWARDS HARPOON WITH BARB LEFT TO BAR\",\"char\":\"⥘\"},{\"hex\":\"&#2959;\",\"name\":\"DOWNWARDS HARPOON WITH BARB LEFT TO BAR\",\"char\":\"⥙\"},{\"hex\":\"&#295A;\",\"name\":\"LEFTWARDS HARPOON WITH BARB UP FROM BAR\",\"char\":\"⥚\"},{\"hex\":\"&#295B;\",\"name\":\"RIGHTWARDS HARPOON WITH BARB UP FROM BAR\",\"char\":\"⥛\"},{\"hex\":\"&#295C;\",\"name\":\"UPWARDS HARPOON WITH BARB RIGHT FROM BAR\",\"char\":\"⥜\"},{\"hex\":\"&#295D;\",\"name\":\"DOWNWARDS HARPOON WITH BARB RIGHT FROM BAR\",\"char\":\"⥝\"},{\"hex\":\"&#295E;\",\"name\":\"LEFTWARDS HARPOON WITH BARB DOWN FROM BAR\",\"char\":\"⥞\"},{\"hex\":\"&#295F;\",\"name\":\"RIGHTWARDS HARPOON WITH BARB DOWN FROM BAR\",\"char\":\"⥟\"},{\"hex\":\"&#2960;\",\"name\":\"UPWARDS HARPOON WITH BARB LEFT FROM BAR\",\"char\":\"⥠\"},{\"hex\":\"&#2961;\",\"name\":\"DOWNWARDS HARPOON WITH BARB LEFT FROM BAR\",\"char\":\"⥡\"},{\"hex\":\"&#2962;\",\"name\":\"LEFTWARDS HARPOON WITH BARB UP ABOVE LEFTWARDS HARPOON WITH BARB DOWN\",\"char\":\"⥢\"},{\"hex\":\"&#2963;\",\"name\":\"UPWARDS HARPOON WITH BARB LEFT BESIDE UPWARDS HARPOON WITH BARB RIGHT\",\"char\":\"⥣\"},{\"hex\":\"&#2964;\",\"name\":\"RIGHTWARDS HARPOON WITH BARB UP ABOVE RIGHTWARDS HARPOON WITH BARB DOWN\",\"char\":\"⥤\"},{\"hex\":\"&#2965;\",\"name\":\"DOWNWARDS HARPOON WITH BARB LEFT BESIDE DOWNWARDS HARPOON WITH BARB RIGHT\",\"char\":\"⥥\"},{\"hex\":\"&#2966;\",\"name\":\"LEFTWARDS HARPOON WITH BARB UP ABOVE RIGHTWARDS HARPOON WITH BARB UP\",\"char\":\"⥦\"},{\"hex\":\"&#2967;\",\"name\":\"LEFTWARDS HARPOON WITH BARB DOWN ABOVE RIGHTWARDS HARPOON WITH BARB DOWN\",\"char\":\"⥧\"},{\"hex\":\"&#2968;\",\"name\":\"RIGHTWARDS HARPOON WITH BARB UP ABOVE LEFTWARDS HARPOON WITH BARB UP\",\"char\":\"⥨\"},{\"hex\":\"&#2969;\",\"name\":\"RIGHTWARDS HARPOON WITH BARB DOWN ABOVE LEFTWARDS HARPOON WITH BARB DOWN\",\"char\":\"⥩\"},{\"hex\":\"&#296A;\",\"name\":\"LEFTWARDS HARPOON WITH BARB UP ABOVE LONG DASH\",\"char\":\"⥪\"},{\"hex\":\"&#296B;\",\"name\":\"LEFTWARDS HARPOON WITH BARB DOWN BELOW LONG DASH\",\"char\":\"⥫\"},{\"hex\":\"&#296C;\",\"name\":\"RIGHTWARDS HARPOON WITH BARB UP ABOVE LONG DASH\",\"char\":\"⥬\"},{\"hex\":\"&#296D;\",\"name\":\"RIGHTWARDS HARPOON WITH BARB DOWN BELOW LONG DASH\",\"char\":\"⥭\"},{\"hex\":\"&#296E;\",\"name\":\"UPWARDS HARPOON WITH BARB LEFT BESIDE DOWNWARDS HARPOON WITH BARB RIGHT\",\"char\":\"⥮\"},{\"hex\":\"&#296F;\",\"name\":\"DOWNWARDS HARPOON WITH BARB LEFT BESIDE UPWARDS HARPOON WITH BARB RIGHT\",\"char\":\"⥯\"},{\"hex\":\"&#2970;\",\"name\":\"RIGHT DOUBLE ARROW WITH ROUNDED HEAD\",\"char\":\"⥰\"},{\"hex\":\"&#2971;\",\"name\":\"EQUALS SIGN ABOVE RIGHTWARDS ARROW\",\"char\":\"⥱\"},{\"hex\":\"&#2972;\",\"name\":\"TILDE OPERATOR ABOVE RIGHTWARDS ARROW\",\"char\":\"⥲\"},{\"hex\":\"&#2973;\",\"name\":\"LEFTWARDS ARROW ABOVE TILDE OPERATOR\",\"char\":\"⥳\"},{\"hex\":\"&#2974;\",\"name\":\"RIGHTWARDS ARROW ABOVE TILDE OPERATOR\",\"char\":\"⥴\"},{\"hex\":\"&#2975;\",\"name\":\"RIGHTWARDS ARROW ABOVE ALMOST EQUAL TO\",\"char\":\"⥵\"},{\"hex\":\"&#2976;\",\"name\":\"LESS-THAN ABOVE LEFTWARDS ARROW\",\"char\":\"⥶\"},{\"hex\":\"&#2977;\",\"name\":\"LEFTWARDS ARROW THROUGH LESS-THAN\",\"char\":\"⥷\"},{\"hex\":\"&#2978;\",\"name\":\"GREATER-THAN ABOVE RIGHTWARDS ARROW\",\"char\":\"⥸\"},{\"hex\":\"&#2979;\",\"name\":\"SUBSET ABOVE RIGHTWARDS ARROW\",\"char\":\"⥹\"},{\"hex\":\"&#297A;\",\"name\":\"LEFTWARDS ARROW THROUGH SUBSET\",\"char\":\"⥺\"},{\"hex\":\"&#297B;\",\"name\":\"SUPERSET ABOVE LEFTWARDS ARROW\",\"char\":\"⥻\"},{\"hex\":\"&#297C;\",\"name\":\"LEFT FISH TAIL\",\"char\":\"⥼\"},{\"hex\":\"&#297D;\",\"name\":\"RIGHT FISH TAIL\",\"char\":\"⥽\"},{\"hex\":\"&#297E;\",\"name\":\"UP FISH TAIL\",\"char\":\"⥾\"},{\"hex\":\"&#297F;\",\"name\":\"DOWN FISH TAIL\",\"char\":\"⥿\"}]}");

/***/ }),

/***/ "../react-character-map/dist/component/style.css":
/*!*******************************************************!*\
  !*** ../react-character-map/dist/component/style.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../insert-special-characters/node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!../react-character-map/dist/component/style.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../insert-special-characters/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "../react-character-map/dist/index.js":
/*!********************************************!*\
  !*** ../react-character-map/dist/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CharacterMap = undefined;

var _CharacterMap = __webpack_require__(/*! ./component/CharacterMap */ "../react-character-map/dist/component/CharacterMap.js");

var _CharacterMap2 = _interopRequireDefault(_CharacterMap);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

exports.CharacterMap = _CharacterMap2["default"];

/***/ }),

/***/ "../react-character-map/node_modules/create-react-class/factory.js":
/*!*************************************************************************!*\
  !*** ../react-character-map/node_modules/create-react-class/factory.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _assign = __webpack_require__(/*! object-assign */ "../react-character-map/node_modules/object-assign/index.js");

var emptyObject = __webpack_require__(/*! fbjs/lib/emptyObject */ "../react-character-map/node_modules/fbjs/lib/emptyObject.js");

var _invariant = __webpack_require__(/*! fbjs/lib/invariant */ "../react-character-map/node_modules/fbjs/lib/invariant.js");

if (true) {
  var warning = __webpack_require__(/*! fbjs/lib/warning */ "../react-character-map/node_modules/fbjs/lib/warning.js");
}

var MIXINS_KEY = 'mixins'; // Helper function to allow the creation of anonymous functions which do not
// have .name set to the name of the variable being assigned to.

function identity(fn) {
  return fn;
}

var ReactPropTypeLocationNames;

if (true) {
  ReactPropTypeLocationNames = {
    prop: 'prop',
    context: 'context',
    childContext: 'child context'
  };
} else {}

function factory(ReactComponent, isValidElement, ReactNoopUpdateQueue) {
  /**
   * Policies that describe methods in `ReactClassInterface`.
   */
  var injectedMixins = [];
  /**
   * Composite components are higher-level components that compose other composite
   * or host components.
   *
   * To create a new type of `ReactClass`, pass a specification of
   * your new class to `React.createClass`. The only requirement of your class
   * specification is that you implement a `render` method.
   *
   *   var MyComponent = React.createClass({
   *     render: function() {
   *       return <div>Hello World</div>;
   *     }
   *   });
   *
   * The class specification supports a specific protocol of methods that have
   * special meaning (e.g. `render`). See `ReactClassInterface` for
   * more the comprehensive protocol. Any other properties and methods in the
   * class specification will be available on the prototype.
   *
   * @interface ReactClassInterface
   * @internal
   */

  var ReactClassInterface = {
    /**
     * An array of Mixin objects to include when defining your component.
     *
     * @type {array}
     * @optional
     */
    mixins: 'DEFINE_MANY',

    /**
     * An object containing properties and methods that should be defined on
     * the component's constructor instead of its prototype (static methods).
     *
     * @type {object}
     * @optional
     */
    statics: 'DEFINE_MANY',

    /**
     * Definition of prop types for this component.
     *
     * @type {object}
     * @optional
     */
    propTypes: 'DEFINE_MANY',

    /**
     * Definition of context types for this component.
     *
     * @type {object}
     * @optional
     */
    contextTypes: 'DEFINE_MANY',

    /**
     * Definition of context types this component sets for its children.
     *
     * @type {object}
     * @optional
     */
    childContextTypes: 'DEFINE_MANY',
    // ==== Definition methods ====

    /**
     * Invoked when the component is mounted. Values in the mapping will be set on
     * `this.props` if that prop is not specified (i.e. using an `in` check).
     *
     * This method is invoked before `getInitialState` and therefore cannot rely
     * on `this.state` or use `this.setState`.
     *
     * @return {object}
     * @optional
     */
    getDefaultProps: 'DEFINE_MANY_MERGED',

    /**
     * Invoked once before the component is mounted. The return value will be used
     * as the initial value of `this.state`.
     *
     *   getInitialState: function() {
     *     return {
     *       isOn: false,
     *       fooBaz: new BazFoo()
     *     }
     *   }
     *
     * @return {object}
     * @optional
     */
    getInitialState: 'DEFINE_MANY_MERGED',

    /**
     * @return {object}
     * @optional
     */
    getChildContext: 'DEFINE_MANY_MERGED',

    /**
     * Uses props from `this.props` and state from `this.state` to render the
     * structure of the component.
     *
     * No guarantees are made about when or how often this method is invoked, so
     * it must not have side effects.
     *
     *   render: function() {
     *     var name = this.props.name;
     *     return <div>Hello, {name}!</div>;
     *   }
     *
     * @return {ReactComponent}
     * @required
     */
    render: 'DEFINE_ONCE',
    // ==== Delegate methods ====

    /**
     * Invoked when the component is initially created and about to be mounted.
     * This may have side effects, but any external subscriptions or data created
     * by this method must be cleaned up in `componentWillUnmount`.
     *
     * @optional
     */
    componentWillMount: 'DEFINE_MANY',

    /**
     * Invoked when the component has been mounted and has a DOM representation.
     * However, there is no guarantee that the DOM node is in the document.
     *
     * Use this as an opportunity to operate on the DOM when the component has
     * been mounted (initialized and rendered) for the first time.
     *
     * @param {DOMElement} rootNode DOM element representing the component.
     * @optional
     */
    componentDidMount: 'DEFINE_MANY',

    /**
     * Invoked before the component receives new props.
     *
     * Use this as an opportunity to react to a prop transition by updating the
     * state using `this.setState`. Current props are accessed via `this.props`.
     *
     *   componentWillReceiveProps: function(nextProps, nextContext) {
     *     this.setState({
     *       likesIncreasing: nextProps.likeCount > this.props.likeCount
     *     });
     *   }
     *
     * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
     * transition may cause a state change, but the opposite is not true. If you
     * need it, you are probably looking for `componentWillUpdate`.
     *
     * @param {object} nextProps
     * @optional
     */
    componentWillReceiveProps: 'DEFINE_MANY',

    /**
     * Invoked while deciding if the component should be updated as a result of
     * receiving new props, state and/or context.
     *
     * Use this as an opportunity to `return false` when you're certain that the
     * transition to the new props/state/context will not require a component
     * update.
     *
     *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
     *     return !equal(nextProps, this.props) ||
     *       !equal(nextState, this.state) ||
     *       !equal(nextContext, this.context);
     *   }
     *
     * @param {object} nextProps
     * @param {?object} nextState
     * @param {?object} nextContext
     * @return {boolean} True if the component should update.
     * @optional
     */
    shouldComponentUpdate: 'DEFINE_ONCE',

    /**
     * Invoked when the component is about to update due to a transition from
     * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
     * and `nextContext`.
     *
     * Use this as an opportunity to perform preparation before an update occurs.
     *
     * NOTE: You **cannot** use `this.setState()` in this method.
     *
     * @param {object} nextProps
     * @param {?object} nextState
     * @param {?object} nextContext
     * @param {ReactReconcileTransaction} transaction
     * @optional
     */
    componentWillUpdate: 'DEFINE_MANY',

    /**
     * Invoked when the component's DOM representation has been updated.
     *
     * Use this as an opportunity to operate on the DOM when the component has
     * been updated.
     *
     * @param {object} prevProps
     * @param {?object} prevState
     * @param {?object} prevContext
     * @param {DOMElement} rootNode DOM element representing the component.
     * @optional
     */
    componentDidUpdate: 'DEFINE_MANY',

    /**
     * Invoked when the component is about to be removed from its parent and have
     * its DOM representation destroyed.
     *
     * Use this as an opportunity to deallocate any external resources.
     *
     * NOTE: There is no `componentDidUnmount` since your component will have been
     * destroyed by that point.
     *
     * @optional
     */
    componentWillUnmount: 'DEFINE_MANY',

    /**
     * Replacement for (deprecated) `componentWillMount`.
     *
     * @optional
     */
    UNSAFE_componentWillMount: 'DEFINE_MANY',

    /**
     * Replacement for (deprecated) `componentWillReceiveProps`.
     *
     * @optional
     */
    UNSAFE_componentWillReceiveProps: 'DEFINE_MANY',

    /**
     * Replacement for (deprecated) `componentWillUpdate`.
     *
     * @optional
     */
    UNSAFE_componentWillUpdate: 'DEFINE_MANY',
    // ==== Advanced methods ====

    /**
     * Updates the component's currently mounted DOM representation.
     *
     * By default, this implements React's rendering and reconciliation algorithm.
     * Sophisticated clients may wish to override this.
     *
     * @param {ReactReconcileTransaction} transaction
     * @internal
     * @overridable
     */
    updateComponent: 'OVERRIDE_BASE'
  };
  /**
   * Similar to ReactClassInterface but for static methods.
   */

  var ReactClassStaticInterface = {
    /**
     * This method is invoked after a component is instantiated and when it
     * receives new props. Return an object to update state in response to
     * prop changes. Return null to indicate no change to state.
     *
     * If an object is returned, its keys will be merged into the existing state.
     *
     * @return {object || null}
     * @optional
     */
    getDerivedStateFromProps: 'DEFINE_MANY_MERGED'
  };
  /**
   * Mapping from class specification keys to special processing functions.
   *
   * Although these are declared like instance properties in the specification
   * when defining classes using `React.createClass`, they are actually static
   * and are accessible on the constructor instead of the prototype. Despite
   * being static, they must be defined outside of the "statics" key under
   * which all other static methods are defined.
   */

  var RESERVED_SPEC_KEYS = {
    displayName: function displayName(Constructor, _displayName) {
      Constructor.displayName = _displayName;
    },
    mixins: function mixins(Constructor, _mixins) {
      if (_mixins) {
        for (var i = 0; i < _mixins.length; i++) {
          mixSpecIntoComponent(Constructor, _mixins[i]);
        }
      }
    },
    childContextTypes: function childContextTypes(Constructor, _childContextTypes) {
      if (true) {
        validateTypeDef(Constructor, _childContextTypes, 'childContext');
      }

      Constructor.childContextTypes = _assign({}, Constructor.childContextTypes, _childContextTypes);
    },
    contextTypes: function contextTypes(Constructor, _contextTypes) {
      if (true) {
        validateTypeDef(Constructor, _contextTypes, 'context');
      }

      Constructor.contextTypes = _assign({}, Constructor.contextTypes, _contextTypes);
    },

    /**
     * Special case getDefaultProps which should move into statics but requires
     * automatic merging.
     */
    getDefaultProps: function getDefaultProps(Constructor, _getDefaultProps) {
      if (Constructor.getDefaultProps) {
        Constructor.getDefaultProps = createMergedResultFunction(Constructor.getDefaultProps, _getDefaultProps);
      } else {
        Constructor.getDefaultProps = _getDefaultProps;
      }
    },
    propTypes: function propTypes(Constructor, _propTypes) {
      if (true) {
        validateTypeDef(Constructor, _propTypes, 'prop');
      }

      Constructor.propTypes = _assign({}, Constructor.propTypes, _propTypes);
    },
    statics: function statics(Constructor, _statics) {
      mixStaticSpecIntoComponent(Constructor, _statics);
    },
    autobind: function autobind() {}
  };

  function validateTypeDef(Constructor, typeDef, location) {
    for (var propName in typeDef) {
      if (typeDef.hasOwnProperty(propName)) {
        // use a warning instead of an _invariant so components
        // don't show up in prod but only in __DEV__
        if (true) {
          warning(typeof typeDef[propName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', Constructor.displayName || 'ReactClass', ReactPropTypeLocationNames[location], propName);
        }
      }
    }
  }

  function validateMethodOverride(isAlreadyDefined, name) {
    var specPolicy = ReactClassInterface.hasOwnProperty(name) ? ReactClassInterface[name] : null; // Disallow overriding of base class methods unless explicitly allowed.

    if (ReactClassMixin.hasOwnProperty(name)) {
      _invariant(specPolicy === 'OVERRIDE_BASE', 'ReactClassInterface: You are attempting to override ' + '`%s` from your class specification. Ensure that your method names ' + 'do not overlap with React methods.', name);
    } // Disallow defining methods more than once unless explicitly allowed.


    if (isAlreadyDefined) {
      _invariant(specPolicy === 'DEFINE_MANY' || specPolicy === 'DEFINE_MANY_MERGED', 'ReactClassInterface: You are attempting to define ' + '`%s` on your component more than once. This conflict may be due ' + 'to a mixin.', name);
    }
  }
  /**
   * Mixin helper which handles policy validation and reserved
   * specification keys when building React classes.
   */


  function mixSpecIntoComponent(Constructor, spec) {
    if (!spec) {
      if (true) {
        var typeofSpec = _typeof(spec);

        var isMixinValid = typeofSpec === 'object' && spec !== null;

        if (true) {
          warning(isMixinValid, "%s: You're attempting to include a mixin that is either null " + 'or not an object. Check the mixins included by the component, ' + 'as well as any mixins they include themselves. ' + 'Expected object but got %s.', Constructor.displayName || 'ReactClass', spec === null ? null : typeofSpec);
        }
      }

      return;
    }

    _invariant(typeof spec !== 'function', "ReactClass: You're attempting to " + 'use a component class or function as a mixin. Instead, just use a ' + 'regular object.');

    _invariant(!isValidElement(spec), "ReactClass: You're attempting to " + 'use a component as a mixin. Instead, just use a regular object.');

    var proto = Constructor.prototype;
    var autoBindPairs = proto.__reactAutoBindPairs; // By handling mixins before any other properties, we ensure the same
    // chaining order is applied to methods with DEFINE_MANY policy, whether
    // mixins are listed before or after these methods in the spec.

    if (spec.hasOwnProperty(MIXINS_KEY)) {
      RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
    }

    for (var name in spec) {
      if (!spec.hasOwnProperty(name)) {
        continue;
      }

      if (name === MIXINS_KEY) {
        // We have already handled mixins in a special case above.
        continue;
      }

      var property = spec[name];
      var isAlreadyDefined = proto.hasOwnProperty(name);
      validateMethodOverride(isAlreadyDefined, name);

      if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
        RESERVED_SPEC_KEYS[name](Constructor, property);
      } else {
        // Setup methods on prototype:
        // The following member methods should not be automatically bound:
        // 1. Expected ReactClass methods (in the "interface").
        // 2. Overridden methods (that were mixed in).
        var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
        var isFunction = typeof property === 'function';
        var shouldAutoBind = isFunction && !isReactClassMethod && !isAlreadyDefined && spec.autobind !== false;

        if (shouldAutoBind) {
          autoBindPairs.push(name, property);
          proto[name] = property;
        } else {
          if (isAlreadyDefined) {
            var specPolicy = ReactClassInterface[name]; // These cases should already be caught by validateMethodOverride.

            _invariant(isReactClassMethod && (specPolicy === 'DEFINE_MANY_MERGED' || specPolicy === 'DEFINE_MANY'), 'ReactClass: Unexpected spec policy %s for key %s ' + 'when mixing in component specs.', specPolicy, name); // For methods which are defined more than once, call the existing
            // methods before calling the new property, merging if appropriate.


            if (specPolicy === 'DEFINE_MANY_MERGED') {
              proto[name] = createMergedResultFunction(proto[name], property);
            } else if (specPolicy === 'DEFINE_MANY') {
              proto[name] = createChainedFunction(proto[name], property);
            }
          } else {
            proto[name] = property;

            if (true) {
              // Add verbose displayName to the function, which helps when looking
              // at profiling tools.
              if (typeof property === 'function' && spec.displayName) {
                proto[name].displayName = spec.displayName + '_' + name;
              }
            }
          }
        }
      }
    }
  }

  function mixStaticSpecIntoComponent(Constructor, statics) {
    if (!statics) {
      return;
    }

    for (var name in statics) {
      var property = statics[name];

      if (!statics.hasOwnProperty(name)) {
        continue;
      }

      var isReserved = name in RESERVED_SPEC_KEYS;

      _invariant(!isReserved, 'ReactClass: You are attempting to define a reserved ' + 'property, `%s`, that shouldn\'t be on the "statics" key. Define it ' + 'as an instance property instead; it will still be accessible on the ' + 'constructor.', name);

      var isAlreadyDefined = name in Constructor;

      if (isAlreadyDefined) {
        var specPolicy = ReactClassStaticInterface.hasOwnProperty(name) ? ReactClassStaticInterface[name] : null;

        _invariant(specPolicy === 'DEFINE_MANY_MERGED', 'ReactClass: You are attempting to define ' + '`%s` on your component more than once. This conflict may be ' + 'due to a mixin.', name);

        Constructor[name] = createMergedResultFunction(Constructor[name], property);
        return;
      }

      Constructor[name] = property;
    }
  }
  /**
   * Merge two objects, but throw if both contain the same key.
   *
   * @param {object} one The first object, which is mutated.
   * @param {object} two The second object
   * @return {object} one after it has been mutated to contain everything in two.
   */


  function mergeIntoWithNoDuplicateKeys(one, two) {
    _invariant(one && two && _typeof(one) === 'object' && _typeof(two) === 'object', 'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.');

    for (var key in two) {
      if (two.hasOwnProperty(key)) {
        _invariant(one[key] === undefined, 'mergeIntoWithNoDuplicateKeys(): ' + 'Tried to merge two objects with the same key: `%s`. This conflict ' + 'may be due to a mixin; in particular, this may be caused by two ' + 'getInitialState() or getDefaultProps() methods returning objects ' + 'with clashing keys.', key);

        one[key] = two[key];
      }
    }

    return one;
  }
  /**
   * Creates a function that invokes two functions and merges their return values.
   *
   * @param {function} one Function to invoke first.
   * @param {function} two Function to invoke second.
   * @return {function} Function that invokes the two argument functions.
   * @private
   */


  function createMergedResultFunction(one, two) {
    return function mergedResult() {
      var a = one.apply(this, arguments);
      var b = two.apply(this, arguments);

      if (a == null) {
        return b;
      } else if (b == null) {
        return a;
      }

      var c = {};
      mergeIntoWithNoDuplicateKeys(c, a);
      mergeIntoWithNoDuplicateKeys(c, b);
      return c;
    };
  }
  /**
   * Creates a function that invokes two functions and ignores their return vales.
   *
   * @param {function} one Function to invoke first.
   * @param {function} two Function to invoke second.
   * @return {function} Function that invokes the two argument functions.
   * @private
   */


  function createChainedFunction(one, two) {
    return function chainedFunction() {
      one.apply(this, arguments);
      two.apply(this, arguments);
    };
  }
  /**
   * Binds a method to the component.
   *
   * @param {object} component Component whose method is going to be bound.
   * @param {function} method Method to be bound.
   * @return {function} The bound method.
   */


  function bindAutoBindMethod(component, method) {
    var boundMethod = method.bind(component);

    if (true) {
      boundMethod.__reactBoundContext = component;
      boundMethod.__reactBoundMethod = method;
      boundMethod.__reactBoundArguments = null;
      var componentName = component.constructor.displayName;
      var _bind = boundMethod.bind;

      boundMethod.bind = function (newThis) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        } // User is trying to bind() an autobound method; we effectively will
        // ignore the value of "this" that the user is trying to use, so
        // let's warn.


        if (newThis !== component && newThis !== null) {
          if (true) {
            warning(false, 'bind(): React component methods may only be bound to the ' + 'component instance. See %s', componentName);
          }
        } else if (!args.length) {
          if (true) {
            warning(false, 'bind(): You are binding a component method to the component. ' + 'React does this for you automatically in a high-performance ' + 'way, so you can safely remove this call. See %s', componentName);
          }

          return boundMethod;
        }

        var reboundMethod = _bind.apply(boundMethod, arguments);

        reboundMethod.__reactBoundContext = component;
        reboundMethod.__reactBoundMethod = method;
        reboundMethod.__reactBoundArguments = args;
        return reboundMethod;
      };
    }

    return boundMethod;
  }
  /**
   * Binds all auto-bound methods in a component.
   *
   * @param {object} component Component whose method is going to be bound.
   */


  function bindAutoBindMethods(component) {
    var pairs = component.__reactAutoBindPairs;

    for (var i = 0; i < pairs.length; i += 2) {
      var autoBindKey = pairs[i];
      var method = pairs[i + 1];
      component[autoBindKey] = bindAutoBindMethod(component, method);
    }
  }

  var IsMountedPreMixin = {
    componentDidMount: function componentDidMount() {
      this.__isMounted = true;
    }
  };
  var IsMountedPostMixin = {
    componentWillUnmount: function componentWillUnmount() {
      this.__isMounted = false;
    }
  };
  /**
   * Add more to the ReactClass base class. These are all legacy features and
   * therefore not already part of the modern ReactComponent.
   */

  var ReactClassMixin = {
    /**
     * TODO: This will be deprecated because state should always keep a consistent
     * type signature and the only use case for this, is to avoid that.
     */
    replaceState: function replaceState(newState, callback) {
      this.updater.enqueueReplaceState(this, newState, callback);
    },

    /**
     * Checks whether or not this composite component is mounted.
     * @return {boolean} True if mounted, false otherwise.
     * @protected
     * @final
     */
    isMounted: function isMounted() {
      if (true) {
        warning(this.__didWarnIsMounted, '%s: isMounted is deprecated. Instead, make sure to clean up ' + 'subscriptions and pending requests in componentWillUnmount to ' + 'prevent memory leaks.', this.constructor && this.constructor.displayName || this.name || 'Component');
        this.__didWarnIsMounted = true;
      }

      return !!this.__isMounted;
    }
  };

  var ReactClassComponent = function ReactClassComponent() {};

  _assign(ReactClassComponent.prototype, ReactComponent.prototype, ReactClassMixin);
  /**
   * Creates a composite component class given a class specification.
   * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
   *
   * @param {object} spec Class specification (which must define `render`).
   * @return {function} Component constructor function.
   * @public
   */


  function createClass(spec) {
    // To keep our warnings more understandable, we'll use a little hack here to
    // ensure that Constructor.name !== 'Constructor'. This makes sure we don't
    // unnecessarily identify a class without displayName as 'Constructor'.
    var Constructor = identity(function (props, context, updater) {
      // This constructor gets overridden by mocks. The argument is used
      // by mocks to assert on what gets mounted.
      if (true) {
        warning(this instanceof Constructor, 'Something is calling a React component directly. Use a factory or ' + 'JSX instead. See: https://fb.me/react-legacyfactory');
      } // Wire up auto-binding


      if (this.__reactAutoBindPairs.length) {
        bindAutoBindMethods(this);
      }

      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;
      this.state = null; // ReactClasses doesn't have constructors. Instead, they use the
      // getInitialState and componentWillMount methods for initialization.

      var initialState = this.getInitialState ? this.getInitialState() : null;

      if (true) {
        // We allow auto-mocks to proceed as if they're returning null.
        if (initialState === undefined && this.getInitialState._isMockFunction) {
          // This is probably bad practice. Consider warning here and
          // deprecating this convenience.
          initialState = null;
        }
      }

      _invariant(_typeof(initialState) === 'object' && !Array.isArray(initialState), '%s.getInitialState(): must return an object or null', Constructor.displayName || 'ReactCompositeComponent');

      this.state = initialState;
    });
    Constructor.prototype = new ReactClassComponent();
    Constructor.prototype.constructor = Constructor;
    Constructor.prototype.__reactAutoBindPairs = [];
    injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));
    mixSpecIntoComponent(Constructor, IsMountedPreMixin);
    mixSpecIntoComponent(Constructor, spec);
    mixSpecIntoComponent(Constructor, IsMountedPostMixin); // Initialize the defaultProps property after all mixins have been merged.

    if (Constructor.getDefaultProps) {
      Constructor.defaultProps = Constructor.getDefaultProps();
    }

    if (true) {
      // This is a tag to indicate that the use of these method names is ok,
      // since it's used with createClass. If it's not, then it's likely a
      // mistake so we'll warn you to use the static property, property
      // initializer or constructor respectively.
      if (Constructor.getDefaultProps) {
        Constructor.getDefaultProps.isReactClassApproved = {};
      }

      if (Constructor.prototype.getInitialState) {
        Constructor.prototype.getInitialState.isReactClassApproved = {};
      }
    }

    _invariant(Constructor.prototype.render, 'createClass(...): Class specification must implement a `render` method.');

    if (true) {
      warning(!Constructor.prototype.componentShouldUpdate, '%s has a method called ' + 'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' + 'The name is phrased as a question because the function is ' + 'expected to return a value.', spec.displayName || 'A component');
      warning(!Constructor.prototype.componentWillRecieveProps, '%s has a method called ' + 'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?', spec.displayName || 'A component');
      warning(!Constructor.prototype.UNSAFE_componentWillRecieveProps, '%s has a method called UNSAFE_componentWillRecieveProps(). ' + 'Did you mean UNSAFE_componentWillReceiveProps()?', spec.displayName || 'A component');
    } // Reduce time spent doing lookups by setting these on the prototype.


    for (var methodName in ReactClassInterface) {
      if (!Constructor.prototype[methodName]) {
        Constructor.prototype[methodName] = null;
      }
    }

    return Constructor;
  }

  return createClass;
}

module.exports = factory;

/***/ }),

/***/ "../react-character-map/node_modules/fbjs/lib/emptyFunction.js":
/*!*********************************************************************!*\
  !*** ../react-character-map/node_modules/fbjs/lib/emptyFunction.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}
/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */


var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);

emptyFunction.thatReturnsThis = function () {
  return this;
};

emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),

/***/ "../react-character-map/node_modules/fbjs/lib/emptyObject.js":
/*!*******************************************************************!*\
  !*** ../react-character-map/node_modules/fbjs/lib/emptyObject.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */


var emptyObject = {};

if (true) {
  Object.freeze(emptyObject);
}

module.exports = emptyObject;

/***/ }),

/***/ "../react-character-map/node_modules/fbjs/lib/invariant.js":
/*!*****************************************************************!*\
  !*** ../react-character-map/node_modules/fbjs/lib/invariant.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (true) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;

    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame

    throw error;
  }
}

module.exports = invariant;

/***/ }),

/***/ "../react-character-map/node_modules/fbjs/lib/warning.js":
/*!***************************************************************!*\
  !*** ../react-character-map/node_modules/fbjs/lib/warning.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */


var emptyFunction = __webpack_require__(/*! ./emptyFunction */ "../react-character-map/node_modules/fbjs/lib/emptyFunction.js");
/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */


var warning = emptyFunction;

if (true) {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });

    if (typeof console !== 'undefined') {
      console.error(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;

/***/ }),

/***/ "../react-character-map/node_modules/object-assign/index.js":
/*!******************************************************************!*\
  !*** ../react-character-map/node_modules/object-assign/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    } // Detect buggy property enumeration order in older V8 versions.
    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

    test1[5] = 'de';

    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test2 = {};

    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }

    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });

    if (order2.join('') !== '0123456789') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });

    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }

    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }

    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);

      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }

  return to;
};

/***/ }),

/***/ "../react-character-map/node_modules/prop-types/checkPropTypes.js":
/*!************************************************************************!*\
  !*** ../react-character-map/node_modules/prop-types/checkPropTypes.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var printWarning = function printWarning() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "../react-character-map/node_modules/prop-types/lib/ReactPropTypesSecret.js");

  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function printWarning(text) {
    var message = 'Warning: ' + text;

    if (typeof console !== 'undefined') {
      console.error(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}
/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */


function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + _typeof(typeSpecs[typeSpecName]) + '`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }

        if (error && !(error instanceof Error)) {
          printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + _typeof(error) + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
        }

        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;
          var stack = getStack ? getStack() : '';
          printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
        }
      }
    }
  }
}
/**
 * Resets warning cache when testing.
 *
 * @private
 */


checkPropTypes.resetWarningCache = function () {
  if (true) {
    loggedTypeFailures = {};
  }
};

module.exports = checkPropTypes;

/***/ }),

/***/ "../react-character-map/node_modules/prop-types/factory.js":
/*!*****************************************************************!*\
  !*** ../react-character-map/node_modules/prop-types/factory.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
 // React 15.5 references this module, and assumes PropTypes are still callable in production.
// Therefore we re-export development-only version with all the PropTypes checks here.
// However if one is migrating to the `prop-types` npm library, they will go through the
// `index.js` entry point, and it will branch depending on the environment.

var factory = __webpack_require__(/*! ./factoryWithTypeCheckers */ "../react-character-map/node_modules/prop-types/factoryWithTypeCheckers.js");

module.exports = function (isValidElement) {
  // It is still allowed in 15.5.
  var throwOnDirectAccess = false;
  return factory(isValidElement, throwOnDirectAccess);
};

/***/ }),

/***/ "../react-character-map/node_modules/prop-types/factoryWithTypeCheckers.js":
/*!*********************************************************************************!*\
  !*** ../react-character-map/node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var ReactIs = __webpack_require__(/*! react-is */ "../react-character-map/node_modules/react-is/index.js");

var assign = __webpack_require__(/*! object-assign */ "../react-character-map/node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "../react-character-map/node_modules/prop-types/lib/ReactPropTypesSecret.js");

var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "../react-character-map/node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);

var printWarning = function printWarning() {};

if (true) {
  printWarning = function printWarning(text) {
    var message = 'Warning: ' + text;

    if (typeof console !== 'undefined') {
      console.error(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function (isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */

  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);

    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }
  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */


  var ANONYMOUS = '<<anonymous>>'; // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.

  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),
    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker
  };
  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */

  /*eslint-disable no-self-compare*/

  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */


  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  } // Make `instanceof Error` still work for returned errors.


  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }

    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;

          if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
          manualPropTypeWarningCount < 3) {
            printWarning('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }

      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }

          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }

        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);
    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }

      var propValue = props[propName];

      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }

      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);

        if (error instanceof Error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning('Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' + 'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }

      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);

        if (type === 'symbol') {
          return String(value);
        }

        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }

    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }

      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }

      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);

          if (error instanceof Error) {
            return error;
          }
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];

      if (typeof checker !== 'function') {
        printWarning('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];

        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }

    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }

      for (var key in shapeTypes) {
        var checker = shapeTypes[key];

        if (!checker) {
          continue;
        }

        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);

        if (error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      } // We need to check all keys in case some are required but missing from
      // props.


      var allKeys = assign({}, props[propName], shapeTypes);

      for (var key in allKeys) {
        var checker = shapeTypes[key];

        if (!checker) {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
        }

        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);

        if (error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (_typeof(propValue)) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;

      case 'boolean':
        return !propValue;

      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }

        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);

        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;

          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;

              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;

      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    } // falsy value can't be a Symbol


    if (!propValue) {
      return false;
    } // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'


    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    } // Fallback for non-spec compliant Symbols which are polyfilled.


    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  } // Equivalent of `typeof` but with special handling for array and regexp.


  function getPropType(propValue) {
    var propType = _typeof(propValue);

    if (Array.isArray(propValue)) {
      return 'array';
    }

    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }

    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }

    return propType;
  } // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.


  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }

    var propType = getPropType(propValue);

    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }

    return propType;
  } // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"


  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);

    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;

      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;

      default:
        return type;
    }
  } // Returns class name of the object, if any.


  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }

    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};

/***/ }),

/***/ "../react-character-map/node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!**********************************************************************************!*\
  !*** ../react-character-map/node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
module.exports = ReactPropTypesSecret;

/***/ }),

/***/ "../react-character-map/node_modules/react-is/cjs/react-is.development.js":
/*!********************************************************************************!*\
  !*** ../react-character-map/node_modules/react-is/cjs/react-is.development.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

if (true) {
  (function () {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    }); // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.

    var hasSymbol = typeof Symbol === 'function' && Symbol["for"];
    var REACT_ELEMENT_TYPE = hasSymbol ? Symbol["for"]('react.element') : 0xeac7;
    var REACT_PORTAL_TYPE = hasSymbol ? Symbol["for"]('react.portal') : 0xeaca;
    var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol["for"]('react.fragment') : 0xeacb;
    var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol["for"]('react.strict_mode') : 0xeacc;
    var REACT_PROFILER_TYPE = hasSymbol ? Symbol["for"]('react.profiler') : 0xead2;
    var REACT_PROVIDER_TYPE = hasSymbol ? Symbol["for"]('react.provider') : 0xeacd;
    var REACT_CONTEXT_TYPE = hasSymbol ? Symbol["for"]('react.context') : 0xeace;
    var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol["for"]('react.async_mode') : 0xeacf;
    var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol["for"]('react.concurrent_mode') : 0xeacf;
    var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol["for"]('react.forward_ref') : 0xead0;
    var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol["for"]('react.suspense') : 0xead1;
    var REACT_MEMO_TYPE = hasSymbol ? Symbol["for"]('react.memo') : 0xead3;
    var REACT_LAZY_TYPE = hasSymbol ? Symbol["for"]('react.lazy') : 0xead4;

    function isValidElementType(type) {
      return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || _typeof(type) === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
    }
    /**
     * Forked from fbjs/warning:
     * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
     *
     * Only change is we use console.warn instead of console.error,
     * and do nothing when 'console' is not supported.
     * This really simplifies the code.
     * ---
     * Similar to invariant but only logs a warning if the condition is not met.
     * This can be used to log issues in development environments in critical
     * paths. Removing the logging code for production environments will keep the
     * same logic and follow the same code paths.
     */


    var lowPriorityWarning = function lowPriorityWarning() {};

    {
      var printWarning = function printWarning(format) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        var argIndex = 0;
        var message = 'Warning: ' + format.replace(/%s/g, function () {
          return args[argIndex++];
        });

        if (typeof console !== 'undefined') {
          console.warn(message);
        }

        try {
          // --- Welcome to debugging React ---
          // This error was thrown as a convenience so that you can use this stack
          // to find the callsite that caused this warning to fire.
          throw new Error(message);
        } catch (x) {}
      };

      lowPriorityWarning = function lowPriorityWarning(condition, format) {
        if (format === undefined) {
          throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
        }

        if (!condition) {
          for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
            args[_key2 - 2] = arguments[_key2];
          }

          printWarning.apply(undefined, [format].concat(args));
        }
      };
    }
    var lowPriorityWarning$1 = lowPriorityWarning;

    function typeOf(object) {
      if (_typeof(object) === 'object' && object !== null) {
        var $$typeof = object.$$typeof;

        switch ($$typeof) {
          case REACT_ELEMENT_TYPE:
            var type = object.type;

            switch (type) {
              case REACT_ASYNC_MODE_TYPE:
              case REACT_CONCURRENT_MODE_TYPE:
              case REACT_FRAGMENT_TYPE:
              case REACT_PROFILER_TYPE:
              case REACT_STRICT_MODE_TYPE:
              case REACT_SUSPENSE_TYPE:
                return type;

              default:
                var $$typeofType = type && type.$$typeof;

                switch ($$typeofType) {
                  case REACT_CONTEXT_TYPE:
                  case REACT_FORWARD_REF_TYPE:
                  case REACT_PROVIDER_TYPE:
                    return $$typeofType;

                  default:
                    return $$typeof;
                }

            }

          case REACT_LAZY_TYPE:
          case REACT_MEMO_TYPE:
          case REACT_PORTAL_TYPE:
            return $$typeof;
        }
      }

      return undefined;
    } // AsyncMode is deprecated along with isAsyncMode


    var AsyncMode = REACT_ASYNC_MODE_TYPE;
    var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
    var ContextConsumer = REACT_CONTEXT_TYPE;
    var ContextProvider = REACT_PROVIDER_TYPE;
    var Element = REACT_ELEMENT_TYPE;
    var ForwardRef = REACT_FORWARD_REF_TYPE;
    var Fragment = REACT_FRAGMENT_TYPE;
    var Lazy = REACT_LAZY_TYPE;
    var Memo = REACT_MEMO_TYPE;
    var Portal = REACT_PORTAL_TYPE;
    var Profiler = REACT_PROFILER_TYPE;
    var StrictMode = REACT_STRICT_MODE_TYPE;
    var Suspense = REACT_SUSPENSE_TYPE;
    var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

    function isAsyncMode(object) {
      {
        if (!hasWarnedAboutDeprecatedIsAsyncMode) {
          hasWarnedAboutDeprecatedIsAsyncMode = true;
          lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
        }
      }
      return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
    }

    function isConcurrentMode(object) {
      return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
    }

    function isContextConsumer(object) {
      return typeOf(object) === REACT_CONTEXT_TYPE;
    }

    function isContextProvider(object) {
      return typeOf(object) === REACT_PROVIDER_TYPE;
    }

    function isElement(object) {
      return _typeof(object) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }

    function isForwardRef(object) {
      return typeOf(object) === REACT_FORWARD_REF_TYPE;
    }

    function isFragment(object) {
      return typeOf(object) === REACT_FRAGMENT_TYPE;
    }

    function isLazy(object) {
      return typeOf(object) === REACT_LAZY_TYPE;
    }

    function isMemo(object) {
      return typeOf(object) === REACT_MEMO_TYPE;
    }

    function isPortal(object) {
      return typeOf(object) === REACT_PORTAL_TYPE;
    }

    function isProfiler(object) {
      return typeOf(object) === REACT_PROFILER_TYPE;
    }

    function isStrictMode(object) {
      return typeOf(object) === REACT_STRICT_MODE_TYPE;
    }

    function isSuspense(object) {
      return typeOf(object) === REACT_SUSPENSE_TYPE;
    }

    exports.typeOf = typeOf;
    exports.AsyncMode = AsyncMode;
    exports.ConcurrentMode = ConcurrentMode;
    exports.ContextConsumer = ContextConsumer;
    exports.ContextProvider = ContextProvider;
    exports.Element = Element;
    exports.ForwardRef = ForwardRef;
    exports.Fragment = Fragment;
    exports.Lazy = Lazy;
    exports.Memo = Memo;
    exports.Portal = Portal;
    exports.Profiler = Profiler;
    exports.StrictMode = StrictMode;
    exports.Suspense = Suspense;
    exports.isValidElementType = isValidElementType;
    exports.isAsyncMode = isAsyncMode;
    exports.isConcurrentMode = isConcurrentMode;
    exports.isContextConsumer = isContextConsumer;
    exports.isContextProvider = isContextProvider;
    exports.isElement = isElement;
    exports.isForwardRef = isForwardRef;
    exports.isFragment = isFragment;
    exports.isLazy = isLazy;
    exports.isMemo = isMemo;
    exports.isPortal = isPortal;
    exports.isProfiler = isProfiler;
    exports.isStrictMode = isStrictMode;
    exports.isSuspense = isSuspense;
  })();
}

/***/ }),

/***/ "../react-character-map/node_modules/react-is/index.js":
/*!*************************************************************!*\
  !*** ../react-character-map/node_modules/react-is/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "../react-character-map/node_modules/react-is/cjs/react-is.development.js");
}

/***/ }),

/***/ "../react-character-map/node_modules/react/lib/KeyEscapeUtils.js":
/*!***********************************************************************!*\
  !*** ../react-character-map/node_modules/react/lib/KeyEscapeUtils.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });
  return '$' + escapedString;
}
/**
 * Unescape and unwrap key for human-readable display
 *
 * @param {string} key to unescape.
 * @return {string} the unescaped key.
 */


function unescape(key) {
  var unescapeRegex = /(=0|=2)/g;
  var unescaperLookup = {
    '=0': '=',
    '=2': ':'
  };
  var keySubstring = key[0] === '.' && key[1] === '$' ? key.substring(2) : key.substring(1);
  return ('' + keySubstring).replace(unescapeRegex, function (match) {
    return unescaperLookup[match];
  });
}

var KeyEscapeUtils = {
  escape: escape,
  unescape: unescape
};
module.exports = KeyEscapeUtils;

/***/ }),

/***/ "../react-character-map/node_modules/react/lib/PooledClass.js":
/*!********************************************************************!*\
  !*** ../react-character-map/node_modules/react/lib/PooledClass.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */


var _prodInvariant = __webpack_require__(/*! ./reactProdInvariant */ "../react-character-map/node_modules/react/lib/reactProdInvariant.js");

var invariant = __webpack_require__(/*! fbjs/lib/invariant */ "../react-character-map/node_modules/fbjs/lib/invariant.js");
/**
 * Static poolers. Several custom versions for each potential number of
 * arguments. A completely generic pooler is easy to implement, but would
 * require accessing the `arguments` object. In each of these, `this` refers to
 * the Class itself, not an instance. If any others are needed, simply add them
 * here, or in their own files.
 */


var oneArgumentPooler = function oneArgumentPooler(copyFieldsFrom) {
  var Klass = this;

  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, copyFieldsFrom);
    return instance;
  } else {
    return new Klass(copyFieldsFrom);
  }
};

var twoArgumentPooler = function twoArgumentPooler(a1, a2) {
  var Klass = this;

  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2);
    return instance;
  } else {
    return new Klass(a1, a2);
  }
};

var threeArgumentPooler = function threeArgumentPooler(a1, a2, a3) {
  var Klass = this;

  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2, a3);
    return instance;
  } else {
    return new Klass(a1, a2, a3);
  }
};

var fourArgumentPooler = function fourArgumentPooler(a1, a2, a3, a4) {
  var Klass = this;

  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2, a3, a4);
    return instance;
  } else {
    return new Klass(a1, a2, a3, a4);
  }
};

var standardReleaser = function standardReleaser(instance) {
  var Klass = this;
  !(instance instanceof Klass) ?  true ? invariant(false, 'Trying to release an instance into a pool of a different type.') : undefined : void 0;
  instance.destructor();

  if (Klass.instancePool.length < Klass.poolSize) {
    Klass.instancePool.push(instance);
  }
};

var DEFAULT_POOL_SIZE = 10;
var DEFAULT_POOLER = oneArgumentPooler;
/**
 * Augments `CopyConstructor` to be a poolable class, augmenting only the class
 * itself (statically) not adding any prototypical fields. Any CopyConstructor
 * you give this may have a `poolSize` property, and will look for a
 * prototypical `destructor` on instances.
 *
 * @param {Function} CopyConstructor Constructor that can be used to reset.
 * @param {Function} pooler Customizable pooler.
 */

var addPoolingTo = function addPoolingTo(CopyConstructor, pooler) {
  // Casting as any so that flow ignores the actual implementation and trusts
  // it to match the type we declared
  var NewKlass = CopyConstructor;
  NewKlass.instancePool = [];
  NewKlass.getPooled = pooler || DEFAULT_POOLER;

  if (!NewKlass.poolSize) {
    NewKlass.poolSize = DEFAULT_POOL_SIZE;
  }

  NewKlass.release = standardReleaser;
  return NewKlass;
};

var PooledClass = {
  addPoolingTo: addPoolingTo,
  oneArgumentPooler: oneArgumentPooler,
  twoArgumentPooler: twoArgumentPooler,
  threeArgumentPooler: threeArgumentPooler,
  fourArgumentPooler: fourArgumentPooler
};
module.exports = PooledClass;

/***/ }),

/***/ "../react-character-map/node_modules/react/lib/React.js":
/*!**************************************************************!*\
  !*** ../react-character-map/node_modules/react/lib/React.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */


var _assign = __webpack_require__(/*! object-assign */ "../react-character-map/node_modules/object-assign/index.js");

var ReactBaseClasses = __webpack_require__(/*! ./ReactBaseClasses */ "../react-character-map/node_modules/react/lib/ReactBaseClasses.js");

var ReactChildren = __webpack_require__(/*! ./ReactChildren */ "../react-character-map/node_modules/react/lib/ReactChildren.js");

var ReactDOMFactories = __webpack_require__(/*! ./ReactDOMFactories */ "../react-character-map/node_modules/react/lib/ReactDOMFactories.js");

var ReactElement = __webpack_require__(/*! ./ReactElement */ "../react-character-map/node_modules/react/lib/ReactElement.js");

var ReactPropTypes = __webpack_require__(/*! ./ReactPropTypes */ "../react-character-map/node_modules/react/lib/ReactPropTypes.js");

var ReactVersion = __webpack_require__(/*! ./ReactVersion */ "../react-character-map/node_modules/react/lib/ReactVersion.js");

var createReactClass = __webpack_require__(/*! ./createClass */ "../react-character-map/node_modules/react/lib/createClass.js");

var onlyChild = __webpack_require__(/*! ./onlyChild */ "../react-character-map/node_modules/react/lib/onlyChild.js");

var createElement = ReactElement.createElement;
var createFactory = ReactElement.createFactory;
var cloneElement = ReactElement.cloneElement;

if (true) {
  var lowPriorityWarning = __webpack_require__(/*! ./lowPriorityWarning */ "../react-character-map/node_modules/react/lib/lowPriorityWarning.js");

  var canDefineProperty = __webpack_require__(/*! ./canDefineProperty */ "../react-character-map/node_modules/react/lib/canDefineProperty.js");

  var ReactElementValidator = __webpack_require__(/*! ./ReactElementValidator */ "../react-character-map/node_modules/react/lib/ReactElementValidator.js");

  var didWarnPropTypesDeprecated = false;
  createElement = ReactElementValidator.createElement;
  createFactory = ReactElementValidator.createFactory;
  cloneElement = ReactElementValidator.cloneElement;
}

var __spread = _assign;

var createMixin = function createMixin(mixin) {
  return mixin;
};

if (true) {
  var warnedForSpread = false;
  var warnedForCreateMixin = false;

  __spread = function __spread() {
    lowPriorityWarning(warnedForSpread, 'React.__spread is deprecated and should not be used. Use ' + 'Object.assign directly or another helper function with similar ' + 'semantics. You may be seeing this warning due to your compiler. ' + 'See https://fb.me/react-spread-deprecation for more details.');
    warnedForSpread = true;
    return _assign.apply(null, arguments);
  };

  createMixin = function createMixin(mixin) {
    lowPriorityWarning(warnedForCreateMixin, 'React.createMixin is deprecated and should not be used. ' + 'In React v16.0, it will be removed. ' + 'You can use this mixin directly instead. ' + 'See https://fb.me/createmixin-was-never-implemented for more info.');
    warnedForCreateMixin = true;
    return mixin;
  };
}

var React = {
  // Modern
  Children: {
    map: ReactChildren.map,
    forEach: ReactChildren.forEach,
    count: ReactChildren.count,
    toArray: ReactChildren.toArray,
    only: onlyChild
  },
  Component: ReactBaseClasses.Component,
  PureComponent: ReactBaseClasses.PureComponent,
  createElement: createElement,
  cloneElement: cloneElement,
  isValidElement: ReactElement.isValidElement,
  // Classic
  PropTypes: ReactPropTypes,
  createClass: createReactClass,
  createFactory: createFactory,
  createMixin: createMixin,
  // This looks DOM specific but these are actually isomorphic helpers
  // since they are just generating DOM strings.
  DOM: ReactDOMFactories,
  version: ReactVersion,
  // Deprecated hook for JSX spread, don't use this for anything.
  __spread: __spread
};

if (true) {
  var warnedForCreateClass = false;

  if (canDefineProperty) {
    Object.defineProperty(React, 'PropTypes', {
      get: function get() {
        lowPriorityWarning(didWarnPropTypesDeprecated, 'Accessing PropTypes via the main React package is deprecated,' + ' and will be removed in  React v16.0.' + ' Use the latest available v15.* prop-types package from npm instead.' + ' For info on usage, compatibility, migration and more, see ' + 'https://fb.me/prop-types-docs');
        didWarnPropTypesDeprecated = true;
        return ReactPropTypes;
      }
    });
    Object.defineProperty(React, 'createClass', {
      get: function get() {
        lowPriorityWarning(warnedForCreateClass, 'Accessing createClass via the main React package is deprecated,' + ' and will be removed in React v16.0.' + " Use a plain JavaScript class instead. If you're not yet " + 'ready to migrate, create-react-class v15.* is available ' + 'on npm as a temporary, drop-in replacement. ' + 'For more info see https://fb.me/react-create-class');
        warnedForCreateClass = true;
        return createReactClass;
      }
    });
  } // React.DOM factories are deprecated. Wrap these methods so that
  // invocations of the React.DOM namespace and alert users to switch
  // to the `react-dom-factories` package.


  React.DOM = {};
  var warnedForFactories = false;
  Object.keys(ReactDOMFactories).forEach(function (factory) {
    React.DOM[factory] = function () {
      if (!warnedForFactories) {
        lowPriorityWarning(false, 'Accessing factories like React.DOM.%s has been deprecated ' + 'and will be removed in v16.0+. Use the ' + 'react-dom-factories package instead. ' + ' Version 1.0 provides a drop-in replacement.' + ' For more info, see https://fb.me/react-dom-factories', factory);
        warnedForFactories = true;
      }

      return ReactDOMFactories[factory].apply(ReactDOMFactories, arguments);
    };
  });
}

module.exports = React;

/***/ }),

/***/ "../react-character-map/node_modules/react/lib/ReactBaseClasses.js":
/*!*************************************************************************!*\
  !*** ../react-character-map/node_modules/react/lib/ReactBaseClasses.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _prodInvariant = __webpack_require__(/*! ./reactProdInvariant */ "../react-character-map/node_modules/react/lib/reactProdInvariant.js"),
    _assign = __webpack_require__(/*! object-assign */ "../react-character-map/node_modules/object-assign/index.js");

var ReactNoopUpdateQueue = __webpack_require__(/*! ./ReactNoopUpdateQueue */ "../react-character-map/node_modules/react/lib/ReactNoopUpdateQueue.js");

var canDefineProperty = __webpack_require__(/*! ./canDefineProperty */ "../react-character-map/node_modules/react/lib/canDefineProperty.js");

var emptyObject = __webpack_require__(/*! fbjs/lib/emptyObject */ "../react-character-map/node_modules/fbjs/lib/emptyObject.js");

var invariant = __webpack_require__(/*! fbjs/lib/invariant */ "../react-character-map/node_modules/fbjs/lib/invariant.js");

var lowPriorityWarning = __webpack_require__(/*! ./lowPriorityWarning */ "../react-character-map/node_modules/react/lib/lowPriorityWarning.js");
/**
 * Base class helpers for the updating state of a component.
 */


function ReactComponent(props, context, updater) {
  this.props = props;
  this.context = context;
  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
  // renderer.

  this.updater = updater || ReactNoopUpdateQueue;
}

ReactComponent.prototype.isReactComponent = {};
/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */

ReactComponent.prototype.setState = function (partialState, callback) {
  !(_typeof(partialState) === 'object' || typeof partialState === 'function' || partialState == null) ?  true ? invariant(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : undefined : void 0;
  this.updater.enqueueSetState(this, partialState);

  if (callback) {
    this.updater.enqueueCallback(this, callback, 'setState');
  }
};
/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */


ReactComponent.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this);

  if (callback) {
    this.updater.enqueueCallback(this, callback, 'forceUpdate');
  }
};
/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */


if (true) {
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };

  var defineDeprecationWarning = function defineDeprecationWarning(methodName, info) {
    if (canDefineProperty) {
      Object.defineProperty(ReactComponent.prototype, methodName, {
        get: function get() {
          lowPriorityWarning(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
          return undefined;
        }
      });
    }
  };

  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}
/**
 * Base class helpers for the updating state of a component.
 */


function ReactPureComponent(props, context, updater) {
  // Duplicated from ReactComponent.
  this.props = props;
  this.context = context;
  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
  // renderer.

  this.updater = updater || ReactNoopUpdateQueue;
}

function ComponentDummy() {}

ComponentDummy.prototype = ReactComponent.prototype;
ReactPureComponent.prototype = new ComponentDummy();
ReactPureComponent.prototype.constructor = ReactPureComponent; // Avoid an extra prototype jump for these methods.

_assign(ReactPureComponent.prototype, ReactComponent.prototype);

ReactPureComponent.prototype.isPureReactComponent = true;
module.exports = {
  Component: ReactComponent,
  PureComponent: ReactPureComponent
};

/***/ }),

/***/ "../react-character-map/node_modules/react/lib/ReactChildren.js":
/*!**********************************************************************!*\
  !*** ../react-character-map/node_modules/react/lib/ReactChildren.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */


var PooledClass = __webpack_require__(/*! ./PooledClass */ "../react-character-map/node_modules/react/lib/PooledClass.js");

var ReactElement = __webpack_require__(/*! ./ReactElement */ "../react-character-map/node_modules/react/lib/ReactElement.js");

var emptyFunction = __webpack_require__(/*! fbjs/lib/emptyFunction */ "../react-character-map/node_modules/fbjs/lib/emptyFunction.js");

var traverseAllChildren = __webpack_require__(/*! ./traverseAllChildren */ "../react-character-map/node_modules/react/lib/traverseAllChildren.js");

var twoArgumentPooler = PooledClass.twoArgumentPooler;
var fourArgumentPooler = PooledClass.fourArgumentPooler;
var userProvidedKeyEscapeRegex = /\/+/g;

function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
}
/**
 * PooledClass representing the bookkeeping associated with performing a child
 * traversal. Allows avoiding binding callbacks.
 *
 * @constructor ForEachBookKeeping
 * @param {!function} forEachFunction Function to perform traversal with.
 * @param {?*} forEachContext Context to perform context with.
 */


function ForEachBookKeeping(forEachFunction, forEachContext) {
  this.func = forEachFunction;
  this.context = forEachContext;
  this.count = 0;
}

ForEachBookKeeping.prototype.destructor = function () {
  this.func = null;
  this.context = null;
  this.count = 0;
};

PooledClass.addPoolingTo(ForEachBookKeeping, twoArgumentPooler);

function forEachSingleChild(bookKeeping, child, name) {
  var func = bookKeeping.func,
      context = bookKeeping.context;
  func.call(context, child, bookKeeping.count++);
}
/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.foreach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */


function forEachChildren(children, forEachFunc, forEachContext) {
  if (children == null) {
    return children;
  }

  var traverseContext = ForEachBookKeeping.getPooled(forEachFunc, forEachContext);
  traverseAllChildren(children, forEachSingleChild, traverseContext);
  ForEachBookKeeping.release(traverseContext);
}
/**
 * PooledClass representing the bookkeeping associated with performing a child
 * mapping. Allows avoiding binding callbacks.
 *
 * @constructor MapBookKeeping
 * @param {!*} mapResult Object containing the ordered map of results.
 * @param {!function} mapFunction Function to perform mapping with.
 * @param {?*} mapContext Context to perform mapping with.
 */


function MapBookKeeping(mapResult, keyPrefix, mapFunction, mapContext) {
  this.result = mapResult;
  this.keyPrefix = keyPrefix;
  this.func = mapFunction;
  this.context = mapContext;
  this.count = 0;
}

MapBookKeeping.prototype.destructor = function () {
  this.result = null;
  this.keyPrefix = null;
  this.func = null;
  this.context = null;
  this.count = 0;
};

PooledClass.addPoolingTo(MapBookKeeping, fourArgumentPooler);

function mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result,
      keyPrefix = bookKeeping.keyPrefix,
      func = bookKeeping.func,
      context = bookKeeping.context;
  var mappedChild = func.call(context, child, bookKeeping.count++);

  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, emptyFunction.thatReturnsArgument);
  } else if (mappedChild != null) {
    if (ReactElement.isValidElement(mappedChild)) {
      mappedChild = ReactElement.cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
      // traverseAllChildren used to do for objects as children
      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
    }

    result.push(mappedChild);
  }
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';

  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }

  var traverseContext = MapBookKeeping.getPooled(array, escapedPrefix, func, context);
  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  MapBookKeeping.release(traverseContext);
}
/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.map
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */


function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }

  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
  return result;
}

function forEachSingleChildDummy(traverseContext, child, name) {
  return null;
}
/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.count
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */


function countChildren(children, context) {
  return traverseAllChildren(children, forEachSingleChildDummy, null);
}
/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.toarray
 */


function toArray(children) {
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, emptyFunction.thatReturnsArgument);
  return result;
}

var ReactChildren = {
  forEach: forEachChildren,
  map: mapChildren,
  mapIntoWithKeyPrefixInternal: mapIntoWithKeyPrefixInternal,
  count: countChildren,
  toArray: toArray
};
module.exports = ReactChildren;

/***/ }),

/***/ "../react-character-map/node_modules/react/lib/ReactComponentTreeHook.js":
/*!*******************************************************************************!*\
  !*** ../react-character-map/node_modules/react/lib/ReactComponentTreeHook.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2016-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _prodInvariant = __webpack_require__(/*! ./reactProdInvariant */ "../react-character-map/node_modules/react/lib/reactProdInvariant.js");

var ReactCurrentOwner = __webpack_require__(/*! ./ReactCurrentOwner */ "../react-character-map/node_modules/react/lib/ReactCurrentOwner.js");

var invariant = __webpack_require__(/*! fbjs/lib/invariant */ "../react-character-map/node_modules/fbjs/lib/invariant.js");

var warning = __webpack_require__(/*! fbjs/lib/warning */ "../react-character-map/node_modules/fbjs/lib/warning.js");

function isNative(fn) {
  // Based on isNative() from Lodash
  var funcToString = Function.prototype.toString;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var reIsNative = RegExp('^' + funcToString // Take an example native function source for comparison
  .call(hasOwnProperty // Strip regex characters so we can use it for regex
  ).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&' // Remove hasOwnProperty from the template to make it generic
  ).replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

  try {
    var source = funcToString.call(fn);
    return reIsNative.test(source);
  } catch (err) {
    return false;
  }
}

var canUseCollections = // Array.from
typeof Array.from === 'function' && // Map
typeof Map === 'function' && isNative(Map) && // Map.prototype.keys
Map.prototype != null && typeof Map.prototype.keys === 'function' && isNative(Map.prototype.keys) && // Set
typeof Set === 'function' && isNative(Set) && // Set.prototype.keys
Set.prototype != null && typeof Set.prototype.keys === 'function' && isNative(Set.prototype.keys);
var setItem;
var getItem;
var removeItem;
var getItemIDs;
var addRoot;
var removeRoot;
var getRootIDs;

if (canUseCollections) {
  var itemMap = new Map();
  var rootIDSet = new Set();

  setItem = function setItem(id, item) {
    itemMap.set(id, item);
  };

  getItem = function getItem(id) {
    return itemMap.get(id);
  };

  removeItem = function removeItem(id) {
    itemMap['delete'](id);
  };

  getItemIDs = function getItemIDs() {
    return Array.from(itemMap.keys());
  };

  addRoot = function addRoot(id) {
    rootIDSet.add(id);
  };

  removeRoot = function removeRoot(id) {
    rootIDSet['delete'](id);
  };

  getRootIDs = function getRootIDs() {
    return Array.from(rootIDSet.keys());
  };
} else {
  var itemByKey = {};
  var rootByKey = {}; // Use non-numeric keys to prevent V8 performance issues:
  // https://github.com/facebook/react/pull/7232

  var getKeyFromID = function getKeyFromID(id) {
    return '.' + id;
  };

  var getIDFromKey = function getIDFromKey(key) {
    return parseInt(key.substr(1), 10);
  };

  setItem = function setItem(id, item) {
    var key = getKeyFromID(id);
    itemByKey[key] = item;
  };

  getItem = function getItem(id) {
    var key = getKeyFromID(id);
    return itemByKey[key];
  };

  removeItem = function removeItem(id) {
    var key = getKeyFromID(id);
    delete itemByKey[key];
  };

  getItemIDs = function getItemIDs() {
    return Object.keys(itemByKey).map(getIDFromKey);
  };

  addRoot = function addRoot(id) {
    var key = getKeyFromID(id);
    rootByKey[key] = true;
  };

  removeRoot = function removeRoot(id) {
    var key = getKeyFromID(id);
    delete rootByKey[key];
  };

  getRootIDs = function getRootIDs() {
    return Object.keys(rootByKey).map(getIDFromKey);
  };
}

var unmountedIDs = [];

function purgeDeep(id) {
  var item = getItem(id);

  if (item) {
    var childIDs = item.childIDs;
    removeItem(id);
    childIDs.forEach(purgeDeep);
  }
}

function describeComponentFrame(name, source, ownerName) {
  return '\n    in ' + (name || 'Unknown') + (source ? ' (at ' + source.fileName.replace(/^.*[\\\/]/, '') + ':' + source.lineNumber + ')' : ownerName ? ' (created by ' + ownerName + ')' : '');
}

function _getDisplayName(element) {
  if (element == null) {
    return '#empty';
  } else if (typeof element === 'string' || typeof element === 'number') {
    return '#text';
  } else if (typeof element.type === 'string') {
    return element.type;
  } else {
    return element.type.displayName || element.type.name || 'Unknown';
  }
}

function describeID(id) {
  var name = ReactComponentTreeHook.getDisplayName(id);
  var element = ReactComponentTreeHook.getElement(id);
  var ownerID = ReactComponentTreeHook.getOwnerID(id);
  var ownerName;

  if (ownerID) {
    ownerName = ReactComponentTreeHook.getDisplayName(ownerID);
  }

   true ? warning(element, 'ReactComponentTreeHook: Missing React element for debugID %s when ' + 'building stack', id) : undefined;
  return describeComponentFrame(name, element && element._source, ownerName);
}

var ReactComponentTreeHook = {
  onSetChildren: function onSetChildren(id, nextChildIDs) {
    var item = getItem(id);
    !item ?  true ? invariant(false, 'Item must have been set') : undefined : void 0;
    item.childIDs = nextChildIDs;

    for (var i = 0; i < nextChildIDs.length; i++) {
      var nextChildID = nextChildIDs[i];
      var nextChild = getItem(nextChildID);
      !nextChild ?  true ? invariant(false, 'Expected hook events to fire for the child before its parent includes it in onSetChildren().') : undefined : void 0;
      !(nextChild.childIDs != null || _typeof(nextChild.element) !== 'object' || nextChild.element == null) ?  true ? invariant(false, 'Expected onSetChildren() to fire for a container child before its parent includes it in onSetChildren().') : undefined : void 0;
      !nextChild.isMounted ?  true ? invariant(false, 'Expected onMountComponent() to fire for the child before its parent includes it in onSetChildren().') : undefined : void 0;

      if (nextChild.parentID == null) {
        nextChild.parentID = id; // TODO: This shouldn't be necessary but mounting a new root during in
        // componentWillMount currently causes not-yet-mounted components to
        // be purged from our tree data so their parent id is missing.
      }

      !(nextChild.parentID === id) ?  true ? invariant(false, 'Expected onBeforeMountComponent() parent and onSetChildren() to be consistent (%s has parents %s and %s).', nextChildID, nextChild.parentID, id) : undefined : void 0;
    }
  },
  onBeforeMountComponent: function onBeforeMountComponent(id, element, parentID) {
    var item = {
      element: element,
      parentID: parentID,
      text: null,
      childIDs: [],
      isMounted: false,
      updateCount: 0
    };
    setItem(id, item);
  },
  onBeforeUpdateComponent: function onBeforeUpdateComponent(id, element) {
    var item = getItem(id);

    if (!item || !item.isMounted) {
      // We may end up here as a result of setState() in componentWillUnmount().
      // In this case, ignore the element.
      return;
    }

    item.element = element;
  },
  onMountComponent: function onMountComponent(id) {
    var item = getItem(id);
    !item ?  true ? invariant(false, 'Item must have been set') : undefined : void 0;
    item.isMounted = true;
    var isRoot = item.parentID === 0;

    if (isRoot) {
      addRoot(id);
    }
  },
  onUpdateComponent: function onUpdateComponent(id) {
    var item = getItem(id);

    if (!item || !item.isMounted) {
      // We may end up here as a result of setState() in componentWillUnmount().
      // In this case, ignore the element.
      return;
    }

    item.updateCount++;
  },
  onUnmountComponent: function onUnmountComponent(id) {
    var item = getItem(id);

    if (item) {
      // We need to check if it exists.
      // `item` might not exist if it is inside an error boundary, and a sibling
      // error boundary child threw while mounting. Then this instance never
      // got a chance to mount, but it still gets an unmounting event during
      // the error boundary cleanup.
      item.isMounted = false;
      var isRoot = item.parentID === 0;

      if (isRoot) {
        removeRoot(id);
      }
    }

    unmountedIDs.push(id);
  },
  purgeUnmountedComponents: function purgeUnmountedComponents() {
    if (ReactComponentTreeHook._preventPurging) {
      // Should only be used for testing.
      return;
    }

    for (var i = 0; i < unmountedIDs.length; i++) {
      var id = unmountedIDs[i];
      purgeDeep(id);
    }

    unmountedIDs.length = 0;
  },
  isMounted: function isMounted(id) {
    var item = getItem(id);
    return item ? item.isMounted : false;
  },
  getCurrentStackAddendum: function getCurrentStackAddendum(topElement) {
    var info = '';

    if (topElement) {
      var name = _getDisplayName(topElement);

      var owner = topElement._owner;
      info += describeComponentFrame(name, topElement._source, owner && owner.getName());
    }

    var currentOwner = ReactCurrentOwner.current;
    var id = currentOwner && currentOwner._debugID;
    info += ReactComponentTreeHook.getStackAddendumByID(id);
    return info;
  },
  getStackAddendumByID: function getStackAddendumByID(id) {
    var info = '';

    while (id) {
      info += describeID(id);
      id = ReactComponentTreeHook.getParentID(id);
    }

    return info;
  },
  getChildIDs: function getChildIDs(id) {
    var item = getItem(id);
    return item ? item.childIDs : [];
  },
  getDisplayName: function getDisplayName(id) {
    var element = ReactComponentTreeHook.getElement(id);

    if (!element) {
      return null;
    }

    return _getDisplayName(element);
  },
  getElement: function getElement(id) {
    var item = getItem(id);
    return item ? item.element : null;
  },
  getOwnerID: function getOwnerID(id) {
    var element = ReactComponentTreeHook.getElement(id);

    if (!element || !element._owner) {
      return null;
    }

    return element._owner._debugID;
  },
  getParentID: function getParentID(id) {
    var item = getItem(id);
    return item ? item.parentID : null;
  },
  getSource: function getSource(id) {
    var item = getItem(id);
    var element = item ? item.element : null;
    var source = element != null ? element._source : null;
    return source;
  },
  getText: function getText(id) {
    var element = ReactComponentTreeHook.getElement(id);

    if (typeof element === 'string') {
      return element;
    } else if (typeof element === 'number') {
      return '' + element;
    } else {
      return null;
    }
  },
  getUpdateCount: function getUpdateCount(id) {
    var item = getItem(id);
    return item ? item.updateCount : 0;
  },
  getRootIDs: getRootIDs,
  getRegisteredIDs: getItemIDs,
  pushNonStandardWarningStack: function pushNonStandardWarningStack(isCreatingElement, currentSource) {
    if (typeof console.reactStack !== 'function') {
      return;
    }

    var stack = [];
    var currentOwner = ReactCurrentOwner.current;
    var id = currentOwner && currentOwner._debugID;

    try {
      if (isCreatingElement) {
        stack.push({
          name: id ? ReactComponentTreeHook.getDisplayName(id) : null,
          fileName: currentSource ? currentSource.fileName : null,
          lineNumber: currentSource ? currentSource.lineNumber : null
        });
      }

      while (id) {
        var element = ReactComponentTreeHook.getElement(id);
        var parentID = ReactComponentTreeHook.getParentID(id);
        var ownerID = ReactComponentTreeHook.getOwnerID(id);
        var ownerName = ownerID ? ReactComponentTreeHook.getDisplayName(ownerID) : null;
        var source = element && element._source;
        stack.push({
          name: ownerName,
          fileName: source ? source.fileName : null,
          lineNumber: source ? source.lineNumber : null
        });
        id = parentID;
      }
    } catch (err) {// Internal state is messed up.
      // Stop building the stack (it's just a nice to have).
    }

    console.reactStack(stack);
  },
  popNonStandardWarningStack: function popNonStandardWarningStack() {
    if (typeof console.reactStackEnd !== 'function') {
      return;
    }

    console.reactStackEnd();
  }
};
module.exports = ReactComponentTreeHook;

/***/ }),

/***/ "../react-character-map/node_modules/react/lib/ReactCurrentOwner.js":
/*!**************************************************************************!*\
  !*** ../react-character-map/node_modules/react/lib/ReactCurrentOwner.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */

var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};
module.exports = ReactCurrentOwner;

/***/ }),

/***/ "../react-character-map/node_modules/react/lib/ReactDOMFactories.js":
/*!**************************************************************************!*\
  !*** ../react-character-map/node_modules/react/lib/ReactDOMFactories.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */


var ReactElement = __webpack_require__(/*! ./ReactElement */ "../react-character-map/node_modules/react/lib/ReactElement.js");
/**
 * Create a factory that creates HTML tag elements.
 *
 * @private
 */


var createDOMFactory = ReactElement.createFactory;

if (true) {
  var ReactElementValidator = __webpack_require__(/*! ./ReactElementValidator */ "../react-character-map/node_modules/react/lib/ReactElementValidator.js");

  createDOMFactory = ReactElementValidator.createFactory;
}
/**
 * Creates a mapping from supported HTML tags to `ReactDOMComponent` classes.
 *
 * @public
 */


var ReactDOMFactories = {
  a: createDOMFactory('a'),
  abbr: createDOMFactory('abbr'),
  address: createDOMFactory('address'),
  area: createDOMFactory('area'),
  article: createDOMFactory('article'),
  aside: createDOMFactory('aside'),
  audio: createDOMFactory('audio'),
  b: createDOMFactory('b'),
  base: createDOMFactory('base'),
  bdi: createDOMFactory('bdi'),
  bdo: createDOMFactory('bdo'),
  big: createDOMFactory('big'),
  blockquote: createDOMFactory('blockquote'),
  body: createDOMFactory('body'),
  br: createDOMFactory('br'),
  button: createDOMFactory('button'),
  canvas: createDOMFactory('canvas'),
  caption: createDOMFactory('caption'),
  cite: createDOMFactory('cite'),
  code: createDOMFactory('code'),
  col: createDOMFactory('col'),
  colgroup: createDOMFactory('colgroup'),
  data: createDOMFactory('data'),
  datalist: createDOMFactory('datalist'),
  dd: createDOMFactory('dd'),
  del: createDOMFactory('del'),
  details: createDOMFactory('details'),
  dfn: createDOMFactory('dfn'),
  dialog: createDOMFactory('dialog'),
  div: createDOMFactory('div'),
  dl: createDOMFactory('dl'),
  dt: createDOMFactory('dt'),
  em: createDOMFactory('em'),
  embed: createDOMFactory('embed'),
  fieldset: createDOMFactory('fieldset'),
  figcaption: createDOMFactory('figcaption'),
  figure: createDOMFactory('figure'),
  footer: createDOMFactory('footer'),
  form: createDOMFactory('form'),
  h1: createDOMFactory('h1'),
  h2: createDOMFactory('h2'),
  h3: createDOMFactory('h3'),
  h4: createDOMFactory('h4'),
  h5: createDOMFactory('h5'),
  h6: createDOMFactory('h6'),
  head: createDOMFactory('head'),
  header: createDOMFactory('header'),
  hgroup: createDOMFactory('hgroup'),
  hr: createDOMFactory('hr'),
  html: createDOMFactory('html'),
  i: createDOMFactory('i'),
  iframe: createDOMFactory('iframe'),
  img: createDOMFactory('img'),
  input: createDOMFactory('input'),
  ins: createDOMFactory('ins'),
  kbd: createDOMFactory('kbd'),
  keygen: createDOMFactory('keygen'),
  label: createDOMFactory('label'),
  legend: createDOMFactory('legend'),
  li: createDOMFactory('li'),
  link: createDOMFactory('link'),
  main: createDOMFactory('main'),
  map: createDOMFactory('map'),
  mark: createDOMFactory('mark'),
  menu: createDOMFactory('menu'),
  menuitem: createDOMFactory('menuitem'),
  meta: createDOMFactory('meta'),
  meter: createDOMFactory('meter'),
  nav: createDOMFactory('nav'),
  noscript: createDOMFactory('noscript'),
  object: createDOMFactory('object'),
  ol: createDOMFactory('ol'),
  optgroup: createDOMFactory('optgroup'),
  option: createDOMFactory('option'),
  output: createDOMFactory('output'),
  p: createDOMFactory('p'),
  param: createDOMFactory('param'),
  picture: createDOMFactory('picture'),
  pre: createDOMFactory('pre'),
  progress: createDOMFactory('progress'),
  q: createDOMFactory('q'),
  rp: createDOMFactory('rp'),
  rt: createDOMFactory('rt'),
  ruby: createDOMFactory('ruby'),
  s: createDOMFactory('s'),
  samp: createDOMFactory('samp'),
  script: createDOMFactory('script'),
  section: createDOMFactory('section'),
  select: createDOMFactory('select'),
  small: createDOMFactory('small'),
  source: createDOMFactory('source'),
  span: createDOMFactory('span'),
  strong: createDOMFactory('strong'),
  style: createDOMFactory('style'),
  sub: createDOMFactory('sub'),
  summary: createDOMFactory('summary'),
  sup: createDOMFactory('sup'),
  table: createDOMFactory('table'),
  tbody: createDOMFactory('tbody'),
  td: createDOMFactory('td'),
  textarea: createDOMFactory('textarea'),
  tfoot: createDOMFactory('tfoot'),
  th: createDOMFactory('th'),
  thead: createDOMFactory('thead'),
  time: createDOMFactory('time'),
  title: createDOMFactory('title'),
  tr: createDOMFactory('tr'),
  track: createDOMFactory('track'),
  u: createDOMFactory('u'),
  ul: createDOMFactory('ul'),
  'var': createDOMFactory('var'),
  video: createDOMFactory('video'),
  wbr: createDOMFactory('wbr'),
  // SVG
  circle: createDOMFactory('circle'),
  clipPath: createDOMFactory('clipPath'),
  defs: createDOMFactory('defs'),
  ellipse: createDOMFactory('ellipse'),
  g: createDOMFactory('g'),
  image: createDOMFactory('image'),
  line: createDOMFactory('line'),
  linearGradient: createDOMFactory('linearGradient'),
  mask: createDOMFactory('mask'),
  path: createDOMFactory('path'),
  pattern: createDOMFactory('pattern'),
  polygon: createDOMFactory('polygon'),
  polyline: createDOMFactory('polyline'),
  radialGradient: createDOMFactory('radialGradient'),
  rect: createDOMFactory('rect'),
  stop: createDOMFactory('stop'),
  svg: createDOMFactory('svg'),
  text: createDOMFactory('text'),
  tspan: createDOMFactory('tspan')
};
module.exports = ReactDOMFactories;

/***/ }),

/***/ "../react-character-map/node_modules/react/lib/ReactElement.js":
/*!*********************************************************************!*\
  !*** ../react-character-map/node_modules/react/lib/ReactElement.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _assign = __webpack_require__(/*! object-assign */ "../react-character-map/node_modules/object-assign/index.js");

var ReactCurrentOwner = __webpack_require__(/*! ./ReactCurrentOwner */ "../react-character-map/node_modules/react/lib/ReactCurrentOwner.js");

var warning = __webpack_require__(/*! fbjs/lib/warning */ "../react-character-map/node_modules/fbjs/lib/warning.js");

var canDefineProperty = __webpack_require__(/*! ./canDefineProperty */ "../react-character-map/node_modules/react/lib/canDefineProperty.js");

var hasOwnProperty = Object.prototype.hasOwnProperty;

var REACT_ELEMENT_TYPE = __webpack_require__(/*! ./ReactElementSymbol */ "../react-character-map/node_modules/react/lib/ReactElementSymbol.js");

var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown, specialPropRefWarningShown;

function hasValidRef(config) {
  if (true) {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  if (true) {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function warnAboutAccessingKey() {
    if (!specialPropKeyWarningShown) {
      specialPropKeyWarningShown = true;
       true ? warning(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName) : undefined;
    }
  };

  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function warnAboutAccessingRef() {
    if (!specialPropRefWarningShown) {
      specialPropRefWarningShown = true;
       true ? warning(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName) : undefined;
    }
  };

  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, no instanceof check
 * will work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} key
 * @param {string|object} ref
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @param {*} owner
 * @param {*} props
 * @internal
 */


var ReactElement = function ReactElement(type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allow us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  if (true) {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    if (canDefineProperty) {
      Object.defineProperty(element._store, 'validated', {
        configurable: false,
        enumerable: false,
        writable: true,
        value: false
      }); // self and source are DEV only properties.

      Object.defineProperty(element, '_self', {
        configurable: false,
        enumerable: false,
        writable: false,
        value: self
      }); // Two elements created in two different places should be considered
      // equal for testing purposes and therefore we hide it from enumeration.

      Object.defineProperty(element, '_source', {
        configurable: false,
        enumerable: false,
        writable: false,
        value: source
      });
    } else {
      element._store.validated = false;
      element._self = self;
      element._source = source;
    }

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * Create and return a new ReactElement of the given type.
 * See https://facebook.github.io/react/docs/top-level-api.html#react.createelement
 */


ReactElement.createElement = function (type, config, children) {
  var propName; // Reserved names are extracted

  var props = {};
  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    if (true) {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }

    props.children = childArray;
  } // Resolve default props


  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;

    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  if (true) {
    if (key || ref) {
      if (typeof props.$$typeof === 'undefined' || props.$$typeof !== REACT_ELEMENT_TYPE) {
        var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

        if (key) {
          defineKeyPropWarningGetter(props, displayName);
        }

        if (ref) {
          defineRefPropWarningGetter(props, displayName);
        }
      }
    }
  }

  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
};
/**
 * Return a function that produces ReactElements of a given type.
 * See https://facebook.github.io/react/docs/top-level-api.html#react.createfactory
 */


ReactElement.createFactory = function (type) {
  var factory = ReactElement.createElement.bind(null, type); // Expose the type on the factory and the prototype so that it can be
  // easily accessed on elements. E.g. `<Foo />.type === Foo`.
  // This should not be named `constructor` since this may not be the function
  // that created the element, and it may not even be a constructor.
  // Legacy hook TODO: Warn if this is accessed

  factory.type = type;
  return factory;
};

ReactElement.cloneAndReplaceKey = function (oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
  return newElement;
};
/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://facebook.github.io/react/docs/top-level-api.html#react.cloneelement
 */


ReactElement.cloneElement = function (element, config, children) {
  var propName; // Original props are copied

  var props = _assign({}, element.props); // Reserved names are extracted


  var key = element.key;
  var ref = element.ref; // Self is preserved since the owner is preserved.

  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.

  var source = element._source; // Owner will be preserved, unless ref is overridden

  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    } // Remaining properties override existing props


    var defaultProps;

    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
};
/**
 * Verifies the object is a ReactElement.
 * See https://facebook.github.io/react/docs/top-level-api.html#react.isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a valid component.
 * @final
 */


ReactElement.isValidElement = function (object) {
  return _typeof(object) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
};

module.exports = ReactElement;

/***/ }),

/***/ "../react-character-map/node_modules/react/lib/ReactElementSymbol.js":
/*!***************************************************************************!*\
  !*** ../react-character-map/node_modules/react/lib/ReactElementSymbol.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
 // The Symbol used to tag the ReactElement type. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.

var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 0xeac7;
module.exports = REACT_ELEMENT_TYPE;

/***/ }),

/***/ "../react-character-map/node_modules/react/lib/ReactElementValidator.js":
/*!******************************************************************************!*\
  !*** ../react-character-map/node_modules/react/lib/ReactElementValidator.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/**
 * ReactElementValidator provides a wrapper around a element factory
 * which validates the props passed to the element. This is intended to be
 * used only in DEV and could be replaced by a static type checker for languages
 * that support it.
 */


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var ReactCurrentOwner = __webpack_require__(/*! ./ReactCurrentOwner */ "../react-character-map/node_modules/react/lib/ReactCurrentOwner.js");

var ReactComponentTreeHook = __webpack_require__(/*! ./ReactComponentTreeHook */ "../react-character-map/node_modules/react/lib/ReactComponentTreeHook.js");

var ReactElement = __webpack_require__(/*! ./ReactElement */ "../react-character-map/node_modules/react/lib/ReactElement.js");

var checkReactTypeSpec = __webpack_require__(/*! ./checkReactTypeSpec */ "../react-character-map/node_modules/react/lib/checkReactTypeSpec.js");

var canDefineProperty = __webpack_require__(/*! ./canDefineProperty */ "../react-character-map/node_modules/react/lib/canDefineProperty.js");

var getIteratorFn = __webpack_require__(/*! ./getIteratorFn */ "../react-character-map/node_modules/react/lib/getIteratorFn.js");

var warning = __webpack_require__(/*! fbjs/lib/warning */ "../react-character-map/node_modules/fbjs/lib/warning.js");

var lowPriorityWarning = __webpack_require__(/*! ./lowPriorityWarning */ "../react-character-map/node_modules/react/lib/lowPriorityWarning.js");

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = ReactCurrentOwner.current.getName();

    if (name) {
      return ' Check the render method of `' + name + '`.';
    }
  }

  return '';
}

function getSourceInfoErrorAddendum(elementProps) {
  if (elementProps !== null && elementProps !== undefined && elementProps.__source !== undefined) {
    var source = elementProps.__source;
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return ' Check your code at ' + fileName + ':' + lineNumber + '.';
  }

  return '';
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

    if (parentName) {
      info = ' Check the top-level render call using <' + parentName + '>.';
    }
  }

  return info;
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }

  element._store.validated = true;
  var memoizer = ownerHasKeyUseWarning.uniqueKey || (ownerHasKeyUseWarning.uniqueKey = {});
  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

  if (memoizer[currentComponentErrorInfo]) {
    return;
  }

  memoizer[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.

  var childOwner = '';

  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = ' It was passed a child from ' + element._owner.getName() + '.';
  }

   true ? warning(false, 'Each child in an array or iterator should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.%s', currentComponentErrorInfo, childOwner, ReactComponentTreeHook.getCurrentStackAddendum(element)) : undefined;
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  if (_typeof(node) !== 'object') {
    return;
  }

  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];

      if (ReactElement.isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (ReactElement.isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node); // Entry iterators provide implicit keys.

    if (iteratorFn) {
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;

        while (!(step = iterator.next()).done) {
          if (ReactElement.isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  var componentClass = element.type;

  if (typeof componentClass !== 'function') {
    return;
  }

  var name = componentClass.displayName || componentClass.name;

  if (componentClass.propTypes) {
    checkReactTypeSpec(componentClass.propTypes, element.props, 'prop', name, element, null);
  }

  if (typeof componentClass.getDefaultProps === 'function') {
     true ? warning(componentClass.getDefaultProps.isReactClassApproved, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.') : undefined;
  }
}

var ReactElementValidator = {
  createElement: function createElement(type, props, children) {
    var validType = typeof type === 'string' || typeof type === 'function'; // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.

    if (!validType) {
      if (typeof type !== 'function' && typeof type !== 'string') {
        var info = '';

        if (type === undefined || _typeof(type) === 'object' && type !== null && Object.keys(type).length === 0) {
          info += ' You likely forgot to export your component from the file ' + "it's defined in.";
        }

        var sourceInfo = getSourceInfoErrorAddendum(props);

        if (sourceInfo) {
          info += sourceInfo;
        } else {
          info += getDeclarationErrorAddendum();
        }

        info += ReactComponentTreeHook.getCurrentStackAddendum();
        var currentSource = props !== null && props !== undefined && props.__source !== undefined ? props.__source : null;
        ReactComponentTreeHook.pushNonStandardWarningStack(true, currentSource);
         true ? warning(false, 'React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', type == null ? type : _typeof(type), info) : undefined;
        ReactComponentTreeHook.popNonStandardWarningStack();
      }
    }

    var element = ReactElement.createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.

    if (element == null) {
      return element;
    } // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)


    if (validType) {
      for (var i = 2; i < arguments.length; i++) {
        validateChildKeys(arguments[i], type);
      }
    }

    validatePropTypes(element);
    return element;
  },
  createFactory: function createFactory(type) {
    var validatedFactory = ReactElementValidator.createElement.bind(null, type); // Legacy hook TODO: Warn if this is accessed

    validatedFactory.type = type;

    if (true) {
      if (canDefineProperty) {
        Object.defineProperty(validatedFactory, 'type', {
          enumerable: false,
          get: function get() {
            lowPriorityWarning(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
            Object.defineProperty(this, 'type', {
              value: type
            });
            return type;
          }
        });
      }
    }

    return validatedFactory;
  },
  cloneElement: function cloneElement(element, props, children) {
    var newElement = ReactElement.cloneElement.apply(this, arguments);

    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], newElement.type);
    }

    validatePropTypes(newElement);
    return newElement;
  }
};
module.exports = ReactElementValidator;

/***/ }),

/***/ "../react-character-map/node_modules/react/lib/ReactNoopUpdateQueue.js":
/*!*****************************************************************************!*\
  !*** ../react-character-map/node_modules/react/lib/ReactNoopUpdateQueue.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */


var warning = __webpack_require__(/*! fbjs/lib/warning */ "../react-character-map/node_modules/fbjs/lib/warning.js");

function warnNoop(publicInstance, callerName) {
  if (true) {
    var constructor = publicInstance.constructor;
     true ? warning(false, '%s(...): Can only update a mounted or mounting component. ' + 'This usually means you called %s() on an unmounted component. ' + 'This is a no-op. Please check the code for the %s component.', callerName, callerName, constructor && (constructor.displayName || constructor.name) || 'ReactClass') : undefined;
  }
}
/**
 * This is the abstract API for an update queue.
 */


var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function isMounted(publicInstance) {
    return false;
  },

  /**
   * Enqueue a callback that will be executed after all the pending updates
   * have processed.
   *
   * @param {ReactClass} publicInstance The instance to use as `this` context.
   * @param {?function} callback Called after state is updated.
   * @internal
   */
  enqueueCallback: function enqueueCallback(publicInstance, callback) {},

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @internal
   */
  enqueueForceUpdate: function enqueueForceUpdate(publicInstance) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @internal
   */
  enqueueReplaceState: function enqueueReplaceState(publicInstance, completeState) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @internal
   */
  enqueueSetState: function enqueueSetState(publicInstance, partialState) {
    warnNoop(publicInstance, 'setState');
  }
};
module.exports = ReactNoopUpdateQueue;

/***/ }),

/***/ "../react-character-map/node_modules/react/lib/ReactPropTypeLocationNames.js":
/*!***********************************************************************************!*\
  !*** ../react-character-map/node_modules/react/lib/ReactPropTypeLocationNames.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */


var ReactPropTypeLocationNames = {};

if (true) {
  ReactPropTypeLocationNames = {
    prop: 'prop',
    context: 'context',
    childContext: 'child context'
  };
}

module.exports = ReactPropTypeLocationNames;

/***/ }),

/***/ "../react-character-map/node_modules/react/lib/ReactPropTypes.js":
/*!***********************************************************************!*\
  !*** ../react-character-map/node_modules/react/lib/ReactPropTypes.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */


var _require = __webpack_require__(/*! ./ReactElement */ "../react-character-map/node_modules/react/lib/ReactElement.js"),
    isValidElement = _require.isValidElement;

var factory = __webpack_require__(/*! prop-types/factory */ "../react-character-map/node_modules/prop-types/factory.js");

module.exports = factory(isValidElement);

/***/ }),

/***/ "../react-character-map/node_modules/react/lib/ReactPropTypesSecret.js":
/*!*****************************************************************************!*\
  !*** ../react-character-map/node_modules/react/lib/ReactPropTypesSecret.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */


var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
module.exports = ReactPropTypesSecret;

/***/ }),

/***/ "../react-character-map/node_modules/react/lib/ReactVersion.js":
/*!*********************************************************************!*\
  !*** ../react-character-map/node_modules/react/lib/ReactVersion.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */


module.exports = '15.6.2';

/***/ }),

/***/ "../react-character-map/node_modules/react/lib/canDefineProperty.js":
/*!**************************************************************************!*\
  !*** ../react-character-map/node_modules/react/lib/canDefineProperty.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */


var canDefineProperty = false;

if (true) {
  try {
    // $FlowFixMe https://github.com/facebook/flow/issues/285
    Object.defineProperty({}, 'x', {
      get: function get() {}
    });
    canDefineProperty = true;
  } catch (x) {// IE will fail on defineProperty
  }
}

module.exports = canDefineProperty;

/***/ }),

/***/ "../react-character-map/node_modules/react/lib/checkReactTypeSpec.js":
/*!***************************************************************************!*\
  !*** ../react-character-map/node_modules/react/lib/checkReactTypeSpec.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _prodInvariant = __webpack_require__(/*! ./reactProdInvariant */ "../react-character-map/node_modules/react/lib/reactProdInvariant.js");

var ReactPropTypeLocationNames = __webpack_require__(/*! ./ReactPropTypeLocationNames */ "../react-character-map/node_modules/react/lib/ReactPropTypeLocationNames.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./ReactPropTypesSecret */ "../react-character-map/node_modules/react/lib/ReactPropTypesSecret.js");

var invariant = __webpack_require__(/*! fbjs/lib/invariant */ "../react-character-map/node_modules/fbjs/lib/invariant.js");

var warning = __webpack_require__(/*! fbjs/lib/warning */ "../react-character-map/node_modules/fbjs/lib/warning.js");

var ReactComponentTreeHook;

if (typeof process !== 'undefined' && process.env && "development" === 'test') {
  // Temporary hack.
  // Inline requires don't work well with Jest:
  // https://github.com/facebook/react/issues/7240
  // Remove the inline requires when we don't need them anymore:
  // https://github.com/facebook/react/pull/7178
  ReactComponentTreeHook = __webpack_require__(/*! ./ReactComponentTreeHook */ "../react-character-map/node_modules/react/lib/ReactComponentTreeHook.js");
}

var loggedTypeFailures = {};
/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?object} element The React element that is being type-checked
 * @param {?number} debugID The React component instance that is being type-checked
 * @private
 */

function checkReactTypeSpec(typeSpecs, values, location, componentName, element, debugID) {
  for (var typeSpecName in typeSpecs) {
    if (typeSpecs.hasOwnProperty(typeSpecName)) {
      var error; // Prop type validation may throw. In case they do, we don't want to
      // fail the render phase where it didn't fail before. So we log it.
      // After these have been cleaned up, we'll let them throw.

      try {
        // This is intentionally an invariant that gets caught. It's the same
        // behavior as without this statement except with a better message.
        !(typeof typeSpecs[typeSpecName] === 'function') ?  true ? invariant(false, '%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName) : undefined : void 0;
        error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
      } catch (ex) {
        error = ex;
      }

       true ? warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName, _typeof(error)) : undefined;

      if (error instanceof Error && !(error.message in loggedTypeFailures)) {
        // Only monitor this failure once because there tends to be a lot of the
        // same error.
        loggedTypeFailures[error.message] = true;
        var componentStackInfo = '';

        if (true) {
          if (!ReactComponentTreeHook) {
            ReactComponentTreeHook = __webpack_require__(/*! ./ReactComponentTreeHook */ "../react-character-map/node_modules/react/lib/ReactComponentTreeHook.js");
          }

          if (debugID !== null) {
            componentStackInfo = ReactComponentTreeHook.getStackAddendumByID(debugID);
          } else if (element !== null) {
            componentStackInfo = ReactComponentTreeHook.getCurrentStackAddendum(element);
          }
        }

         true ? warning(false, 'Failed %s type: %s%s', location, error.message, componentStackInfo) : undefined;
      }
    }
  }
}

module.exports = checkReactTypeSpec;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../insert-special-characters/node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "../react-character-map/node_modules/react/lib/createClass.js":
/*!********************************************************************!*\
  !*** ../react-character-map/node_modules/react/lib/createClass.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */


var _require = __webpack_require__(/*! ./ReactBaseClasses */ "../react-character-map/node_modules/react/lib/ReactBaseClasses.js"),
    Component = _require.Component;

var _require2 = __webpack_require__(/*! ./ReactElement */ "../react-character-map/node_modules/react/lib/ReactElement.js"),
    isValidElement = _require2.isValidElement;

var ReactNoopUpdateQueue = __webpack_require__(/*! ./ReactNoopUpdateQueue */ "../react-character-map/node_modules/react/lib/ReactNoopUpdateQueue.js");

var factory = __webpack_require__(/*! create-react-class/factory */ "../react-character-map/node_modules/create-react-class/factory.js");

module.exports = factory(Component, isValidElement, ReactNoopUpdateQueue);

/***/ }),

/***/ "../react-character-map/node_modules/react/lib/getIteratorFn.js":
/*!**********************************************************************!*\
  !*** ../react-character-map/node_modules/react/lib/getIteratorFn.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/* global Symbol */

var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

/**
 * Returns the iterator method function contained on the iterable object.
 *
 * Be sure to invoke the function with the iterable as context:
 *
 *     var iteratorFn = getIteratorFn(myIterable);
 *     if (iteratorFn) {
 *       var iterator = iteratorFn.call(myIterable);
 *       ...
 *     }
 *
 * @param {?object} maybeIterable
 * @return {?function}
 */

function getIteratorFn(maybeIterable) {
  var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);

  if (typeof iteratorFn === 'function') {
    return iteratorFn;
  }
}

module.exports = getIteratorFn;

/***/ }),

/***/ "../react-character-map/node_modules/react/lib/lowPriorityWarning.js":
/*!***************************************************************************!*\
  !*** ../react-character-map/node_modules/react/lib/lowPriorityWarning.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function lowPriorityWarning() {};

if (true) {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });

    if (typeof console !== 'undefined') {
      console.warn(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function lowPriorityWarning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = lowPriorityWarning;

/***/ }),

/***/ "../react-character-map/node_modules/react/lib/onlyChild.js":
/*!******************************************************************!*\
  !*** ../react-character-map/node_modules/react/lib/onlyChild.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */


var _prodInvariant = __webpack_require__(/*! ./reactProdInvariant */ "../react-character-map/node_modules/react/lib/reactProdInvariant.js");

var ReactElement = __webpack_require__(/*! ./ReactElement */ "../react-character-map/node_modules/react/lib/ReactElement.js");

var invariant = __webpack_require__(/*! fbjs/lib/invariant */ "../react-character-map/node_modules/fbjs/lib/invariant.js");
/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.only
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */


function onlyChild(children) {
  !ReactElement.isValidElement(children) ?  true ? invariant(false, 'React.Children.only expected to receive a single React element child.') : undefined : void 0;
  return children;
}

module.exports = onlyChild;

/***/ }),

/***/ "../react-character-map/node_modules/react/lib/reactProdInvariant.js":
/*!***************************************************************************!*\
  !*** ../react-character-map/node_modules/react/lib/reactProdInvariant.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/**
 * WARNING: DO NOT manually require this module.
 * This is a replacement for `invariant(...)` used by the error code system
 * and will _only_ be required by the corresponding babel pass.
 * It always throws.
 */

function reactProdInvariant(code) {
  var argCount = arguments.length - 1;
  var message = 'Minified React error #' + code + '; visit ' + 'http://facebook.github.io/react/docs/error-decoder.html?invariant=' + code;

  for (var argIdx = 0; argIdx < argCount; argIdx++) {
    message += '&args[]=' + encodeURIComponent(arguments[argIdx + 1]);
  }

  message += ' for the full message or use the non-minified dev environment' + ' for full errors and additional helpful warnings.';
  var error = new Error(message);
  error.name = 'Invariant Violation';
  error.framesToPop = 1; // we don't care about reactProdInvariant's own frame

  throw error;
}

module.exports = reactProdInvariant;

/***/ }),

/***/ "../react-character-map/node_modules/react/lib/traverseAllChildren.js":
/*!****************************************************************************!*\
  !*** ../react-character-map/node_modules/react/lib/traverseAllChildren.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _prodInvariant = __webpack_require__(/*! ./reactProdInvariant */ "../react-character-map/node_modules/react/lib/reactProdInvariant.js");

var ReactCurrentOwner = __webpack_require__(/*! ./ReactCurrentOwner */ "../react-character-map/node_modules/react/lib/ReactCurrentOwner.js");

var REACT_ELEMENT_TYPE = __webpack_require__(/*! ./ReactElementSymbol */ "../react-character-map/node_modules/react/lib/ReactElementSymbol.js");

var getIteratorFn = __webpack_require__(/*! ./getIteratorFn */ "../react-character-map/node_modules/react/lib/getIteratorFn.js");

var invariant = __webpack_require__(/*! fbjs/lib/invariant */ "../react-character-map/node_modules/fbjs/lib/invariant.js");

var KeyEscapeUtils = __webpack_require__(/*! ./KeyEscapeUtils */ "../react-character-map/node_modules/react/lib/KeyEscapeUtils.js");

var warning = __webpack_require__(/*! fbjs/lib/warning */ "../react-character-map/node_modules/fbjs/lib/warning.js");

var SEPARATOR = '.';
var SUBSEPARATOR = ':';
/**
 * This is inlined from ReactElement since this file is shared between
 * isomorphic and renderers. We could extract this to a
 *
 */

/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */

var didWarnAboutMaps = false;
/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */

function getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (component && _typeof(component) === 'object' && component.key != null) {
    // Explicit key
    return KeyEscapeUtils.escape(component.key);
  } // Implicit key determined by the index in the set


  return index.toString(36);
}
/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */


function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  var type = _typeof(children);

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  if (children === null || type === 'string' || type === 'number' || // The following is inlined from ReactElement. This means we can optimize
  // some checks. React Fiber also inlines this logic for similar purposes.
  type === 'object' && children.$$typeof === REACT_ELEMENT_TYPE) {
    callback(traverseContext, children, // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows.
    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.

  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
    }
  } else {
    var iteratorFn = getIteratorFn(children);

    if (iteratorFn) {
      var iterator = iteratorFn.call(children);
      var step;

      if (iteratorFn !== children.entries) {
        var ii = 0;

        while (!(step = iterator.next()).done) {
          child = step.value;
          nextName = nextNamePrefix + getComponentKey(child, ii++);
          subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
        }
      } else {
        if (true) {
          var mapsAsChildrenAddendum = '';

          if (ReactCurrentOwner.current) {
            var mapsAsChildrenOwnerName = ReactCurrentOwner.current.getName();

            if (mapsAsChildrenOwnerName) {
              mapsAsChildrenAddendum = ' Check the render method of `' + mapsAsChildrenOwnerName + '`.';
            }
          }

           true ? warning(didWarnAboutMaps, 'Using Maps as children is not yet fully supported. It is an ' + 'experimental feature that might be removed. Convert it to a ' + 'sequence / iterable of keyed ReactElements instead.%s', mapsAsChildrenAddendum) : undefined;
          didWarnAboutMaps = true;
        } // Iterator will provide entry [k,v] tuples rather than values.


        while (!(step = iterator.next()).done) {
          var entry = step.value;

          if (entry) {
            child = entry[1];
            nextName = nextNamePrefix + KeyEscapeUtils.escape(entry[0]) + SUBSEPARATOR + getComponentKey(child, 0);
            subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
          }
        }
      }
    } else if (type === 'object') {
      var addendum = '';

      if (true) {
        addendum = ' If you meant to render a collection of children, use an array ' + 'instead or wrap the object using createFragment(object) from the ' + 'React add-ons.';

        if (children._isReactElement) {
          addendum = " It looks like you're using an element created by a different " + 'version of React. Make sure to use only one copy of React.';
        }

        if (ReactCurrentOwner.current) {
          var name = ReactCurrentOwner.current.getName();

          if (name) {
            addendum += ' Check the render method of `' + name + '`.';
          }
        }
      }

      var childrenString = String(children);
       true ?  true ? invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : undefined : undefined;
    }
  }

  return subtreeCount;
}
/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */


function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}

module.exports = traverseAllChildren;

/***/ }),

/***/ "../react-character-map/node_modules/react/react.js":
/*!**********************************************************!*\
  !*** ../react-character-map/node_modules/react/react.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./lib/React */ "../react-character-map/node_modules/react/lib/React.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!../react-character-map/dist/component/style.css":
/*!*********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!../react-character-map/dist/component/style.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../insert-special-characters/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".charMap--container {\n  font-size: 24px; }\n  .charMap--container ul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0; }\n.charMap--category-menu .charMap--category-menu-item {\n  padding: 3px;\n}\n\n.charMap--category-menu .charMap--category-menu-item.active {\n  text-decoration: underline;\n  color: white;\n  background: #41a6ac; }\n\n.charMap--category-menu li {\n  position: relative;\n  border-bottom: 1px solid #c8c8c8; }\n\n.charMap--category-menu button {\n  display: inline-block;\n  padding: .25em .5em;\n  width: 100%;\n  color: inherit;\n  text-decoration: none;\n  border: none;\n  background: none;\n}\n  .charMap--category-menu button:hover {\n    text-decoration: underline;\n    background: #c8c8c8; }\n\n.charMap--category-menu {\n  background: #EEE;\n}\n\n.charMap--category {\n  display: none;\n  max-width: 100%;\n  width: 100%; }\n  .charMap--category.active {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: flex-start;\n    height: 100%; }\n    .charMap--category li {\n      border: 1px solid #c8c8c8;\n      padding: 2px;\n    }\n    .charMap--category li button {\n    display: inline-block;\n    background-color: #fff;\n    background-blend-mode: color;\n    position: relative;\n    margin: 0;\n    padding: 1px;\n    width: 1.5em;\n    height: 1.5em;\n    text-align: center;\n    box-sizing: border-box;\n    vertical-align: middle;\n    overflow: hidden;\n    cursor: pointer;\n    user-select: none;\n    -ms-user-select: none;\n    border: none;\n    /* Internet Explorer/Edge */\n    line-height: 1.5em; }\n    .charMap--category li button:hover {\n      cursor: pointer;\n      background: #41a6ac;\n      color: white; }\n    .charMap--category li button:active {\n      cursor: pointer;\n      background: #5ebcc2;\n      color: white; }\n\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/insert-special-characters.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/insert-special-characters.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "div.charMap--container {\n\tfont-size: 18px;\n}\n\n.charMap--category.active li {\n\tmargin-bottom: 0;\n}\n\n.charMap--category-menu li {\n\tdisplay: inline-block;\n\tborder-bottom: none;\n\tfont-size: 14px;\n}\n\n.charMap--category-menu .charMap--category-menu-item.active,\n.charMap--category li a:hover {\n\tbackground: #0085ba;\n}\n\n.charMap--container .charMap--category-menu a:hover {\n\tbackground: none;\n\ttext-decoration: underline;\n}\n\n.charMap--category-menu .charMap--category-menu-item.active a {\n\tcolor: #fff;\n}\n\n.charMap--container .charMap--container .charMap--categories {\n\tmargin: 5px;\n}\n\n.charMap--categories li a {\n\tcolor: #111;\n}\n\nbody:not(.mobile) .character-map-popover .components-popover__content:not(.is-mobile) {\n\tmin-width: 550px;\n}", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/insert-special-characters.css":
/*!*******************************************!*\
  !*** ./src/insert-special-characters.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./insert-special-characters.css */ "./node_modules/css-loader/dist/cjs.js!./src/insert-special-characters.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./src/insert-special-characters.js":
/*!******************************************!*\
  !*** ./src/insert-special-characters.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_character_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-character-map */ "../react-character-map/dist/index.js");
/* harmony import */ var react_character_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_character_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _insert_special_characters_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./insert-special-characters.css */ "./src/insert-special-characters.css");
/* harmony import */ var _insert_special_characters_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_insert_special_characters_css__WEBPACK_IMPORTED_MODULE_1__);
var _wp$richText = wp.richText,
    registerFormatType = _wp$richText.registerFormatType,
    toggleFormat = _wp$richText.toggleFormat;
var _wp$element = wp.element,
    createElement = _wp$element.createElement,
    Fragment = _wp$element.Fragment,
    useMemo = _wp$element.useMemo;
var _wp$editor = wp.editor,
    RichTextToolbarButton = _wp$editor.RichTextToolbarButton,
    RichTextShortcut = _wp$editor.RichTextShortcut;
var Popover = wp.components.Popover;
var getRectangleFromRange = wp.dom.getRectangleFromRange;


var InsertSpecialCharactersOptions = {
  name: 'specialcharacters',
  title: 'Special Characters',
  character: 'o',
  value: ''
};
var name = InsertSpecialCharactersOptions.name,
    title = InsertSpecialCharactersOptions.title,
    character = InsertSpecialCharactersOptions.character;
var type = "special-characters/".concat(name);
var originalValue; // Calculate the caret insertion point.

var getCaretRect = function getCaretRect() {
  var range = window.getSelection().getRangeAt(0);

  if (range) {
    return getRectangleFromRange(range);
  }
};
/**
 * Register the "Format Type" to create the character inserter.
 */


registerFormatType(type, {
  title: title,
  tagName: name,
  className: null,
  active: false,

  /**
   * The `edit` function is called when the Character Map is selected.
   */
  edit: function edit(_ref) {
    var isActive = _ref.isActive,
        value = _ref.value,
        onChange = _ref.onChange;

    var onToggle = function onToggle() {
      originalValue = value;
      onChange(toggleFormat(value, {
        type: type
      }));
    }; // Only display the character map when it is active.


    if (isActive) {
      return React.createElement(Popover, {
        className: "character-map-popover",
        position: "bottom center",
        focusOnMount: "firstElement",
        key: "charmap-popover",
        onClick: function onClick() {},
        anchorRect: useMemo(function () {
          return getCaretRect();
        })
      }, React.createElement(react_character_map__WEBPACK_IMPORTED_MODULE_0__["CharacterMap"], {
        onSelect: // Store the selected character and close the popover.
        function onSelect(_char) {
          var slicedNewText = originalValue.text.slice(0, originalValue.start) + _char["char"] + originalValue.text.slice(originalValue.end);
          value.text = slicedNewText;
          onChange(toggleFormat(value, {
            type: type,
            attributes: {
              "char": _char
            }
          }));
          onToggle();
          blur();
        },
        key: "charmap"
      }));
    }

    return createElement(Fragment, null, createElement(RichTextShortcut, {
      type: 'primary',
      character: character,
      onUse: onToggle
    }), createElement(RichTextToolbarButton, {
      title: title,
      onClick: onToggle,
      isActive: isActive,
      shortcutType: 'primary',
      shortcutCharacter: character,
      className: "toolbar-button-with-text toolbar-button__advanced-".concat(name),
      icon: 'editor-customchar'
    }));
  }
});

/***/ }),

/***/ 0:
/*!************************************************!*\
  !*** multi ./src/insert-special-characters.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/insert-special-characters.js */"./src/insert-special-characters.js");


/***/ })

/******/ });
//# sourceMappingURL=insert-special-characters.js.map