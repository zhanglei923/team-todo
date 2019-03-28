(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/TodoList/css/TodoList.css":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/TodoList/css/TodoList.css ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "*{\n    padding: 0;\n    margin: 0;\n    font-size: 12px;\n}\nbody{\n    font-size: 12px;\n    border: 0;\n}\nselect{\n    border: 0;\n}\ninput{    \n    border: 0;\n    border-bottom: 1 solid #666;\n}\ntable, tr, td, th{\n    border: 1px solid #eee;\n}\n.thead{\n}\n.icon_done{\n    color:#58a958;\n}\n.icon_inprogress{\n    color: #ef972a;\n}\n.icon_open{\n    color:#aaa;\n}\n.icon_warn{\n    color: #b5711c;\n}\n.icon_danger{\n    color:#f00;\n}\n.react-datepicker__day--today{\n    background-color: #bb5a5a !important;\n    color:white;\n}\n.react-datepicker__day--selected{\n    background-color: blue !important;\n    color:white;\n}\n.react-datepicker__close-icon::after{\n    background-color: #ddd;\n}\n.owner.ongoing, .owner.ongoing *{\n    background-color: yellow;\n}\n.task_title.ongoing, .task_title.ongoing *{\n    background-color: yellow;\n}\n.finished_task  .task_title, .finished_task  .task_title *{\n    background-color: greenyellow\n}\n.finished_task .task_title{\n    font-Size:13px;\n    /* height:1px; */\n    border:0;\n    /* border-bottom: 1px solid #eee; */\n    /* background-color: greenyellow; */\n    color:green;\n}\n.finished_task{\n    height:20px\n}\n.finished_task td{\n    margin-left: 7px;\n    font-size: 12px;\n    color: #999;\n}\n.finished_task td a{\n    /* background-color: greenyellow; */\n    color: #ddd;\n    float: right;\n    margin-right: 2px;\n}\n.finished_task td a:hover{\n    /* background-color: greenyellow; */\n    color: blue;\n}\n.finished_task.hovering{\n    border: 0 !important;\n}\n.finished_task.hovering *{\n    background-color: #1b9e1f !important;\n}\n.finished_task.hovering .task_title, .finished_task.hovering .task_title *{\n    background-color: greenyellow !important;\n}\n.finished_task_minimal{\n    border: 0;\n}\n.finished_task_minimal td{\n    border: 0;\n    height: 1px;\n}\n.finished_task_minimal .title{\n    background-color: greenyellow !important;\n}\n.projectlist{\n    position: fixed;\n    width: 180px;\n    height: 100%;\n    background-color: #d5deff;\n}\n.todo_item_table{\n    /* min-width: 1660px; */\n}\n.saving_to_server td{\n    border:1px solid red !important;\n}\n.todo_main{\n    margin-left: 180px;\n}\n.btn-load{\n    background-color: #4d62c5;\n    color: wheat;\n    width: 99px;\n    margin-right:15px;\n}\n.task_group, .task_group *{\n\n}\n.task_group_title, .task_group_title *{\n    background-color: #bac5ef;\n    color: #666;\n}\n.mileStone.open td{\n    background-color:#ffa5a5;\n}\n.mileStone.open .milestone-tip{\n    border-bottom: 1px solid #ffa5a5;\n}\n.mileStone.open .milestone-tip, .mileStone.open .millestonename, .mileStone.open .milestone-toolbar,.mileStone.open  *{\n    background-color: #eee;\n    color: #000;\n}\n.mileStone.done .milestone-tip, .mileStone.done .millestonename, .mileStone.done .milestone-toolbar,.mileStone.done  *{\n    background-color: #95a795;\n    color: white;\n    filter:alpha(opacity=95); /*支持 IE 浏览器*/\n    -moz-opacity:0.95; /*支持 FireFox 浏览器*/\n    opacity:0.95; /*支持 Chrome, Opera, Safari 等浏览器*/\n}\n.mileStone.focus .milestone-tip, .mileStone.focus .millestonename, .mileStone.focus .milestone-toolbar,.mileStone.focus  *{\n    background-color: #b99090;\n    color: white;\n}\n.mileStone{\n    background-color: #b99090;\n    height:1px;\n}\n.mileStone .millestonename\n{\n    width: 64px;\n    float: left;\n}\n.milestone-tip{\n    padding: 1px 0px 1px 2px;\n    margin-left: 0;\n    float:left;\n    position: absolute;\n    left: -82px;\n    top: -16px;\n    border-radius:3px;\n    -moz-border-radius:8px; /* Old Firefox */\n\n    filter:alpha(opacity=75); /*支持 IE 浏览器*/\n    -moz-opacity:0.75; /*支持 FireFox 浏览器*/\n    opacity:0.75; /*支持 Chrome, Opera, Safari 等浏览器*/\n}\n.milestone-toolbar{\n    padding: 1px 0px 1px 2px;\n    margin-left: 0;\n    float: right;\n    position: absolute;\n    right: -71px;\n    top: -17px;\n    border-radius: 3px;\n    -moz-border-radius: 8px;\n    filter: alpha(opacity=95);\n    -moz-opacity: 0.95;\n    opacity: 0.95;\n    width: 70px;\n}\n.milestone-toolbar select{\n}\n.todo_main thead{\n    font-weight: bold;\n    background-color: #d5deff;\n}\n.todo_item .hovering{\n    /* padding-top:3px;\n    padding-bottom: 3px;\n    border: 2px dotted blue; */\n}\n.todo_item .hovering *{\n    background-color: #ddd;\n}\n.todo_item .hovering input{\n    /* border-bottom: 1px solid blue !important; */\n}\n.todo_item .editing-title{\n    margin-left: 2px;\n    width:372px;\n    font-size: 13px;\n    /* font-weight: bold; */\n}\n.todo_item .subtask .subtasktd{\n    padding-left:24px;\n}\n.todo_item .subtask .subtasktd .editing-title{\n    width:400px;\n}\n.todo_item .editing-textpeople{\n    width:74px;\n    font-size: 14px;\n    font-weight: bold;\n\n}\n.todo_item .readonly-title{\n    color: rgb(36, 36, 71);\n    width: 300px;\n    display: inline-block;\n}\n.todo_item .editing-catagory{\n    width:72px;\n    font-size: 13px;\n    /* font-weight: normal; */\n    text-align: right;\n    margin-right:4px;\n}\n.todo_item .assistant{\n    width: 80px;\n}\n.todo_item .cost{\n    width: 30px;\n}\n.todo_item .planned_end_date-cell{\n    display:inline-block;\n}\n.todo_item .planned_end_date{\n    width:63px;\n}\n.todo_item .cost-cell{\n    display:inline-block;\n    width:50px;\n}\n.todo_item .cost-cell input{\n    width: 100%;\n}\n.todo_item .status_backup *{\n    color: #adadad;\n}\n.task.status_open .editing-title {    \n    /* color: #111; */\n}\n.task.status_ongoing *{\n    /* background-color: #f5f900; */\n}\n.task.status_done *{\n    /* background-color: greenyellow; */\n    color:#989898;\n    font-weight: normal;\n    font-size: 9px;\n}\n.task.status_normal{\n\n}\n.task.risk_warn .editing-title{\n    color:#b5711c;\n}\n.task.risk_danger .editing-title{\n    color: red;    \n}\n.statusSel.dark{\n    color: #ccc;\n}\n.riskSel.dark{\n    color: #ccc;\n}\n.task .row_toolbar *{\n    color: #999;\n    text-decoration: none;\n}\n.task .row_toolbar *:hover{\n    color: #f00;\n    text-decoration: none;\n}\n.task .mandatory {\n    border:1px solid #f1bebe;\n}\n.todo_item .daysLost{\n    float: left;\n    color: #e0b8b8;\n    font-size: 3px;\n    -webkit-text-size-adjust:3px;\n}\n.todo_item .daysLeft{\n    float: left;\n    background-color: #d1f3d1 !important;\n    border: 1px solid #3ba518;\n}\n.todo_item .daysLeft.out-of-time{    \n    background-color: #ffe7e7 !important;\n    border: 1px solid #e64f4f;\n}\n.todo_item .daysRange{\n    float: left;\n    color: #7f7fb7;\n    font-size: 3px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _TodoList_main__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TodoList/main */ "./src/TodoList/main.js");
/* harmony import */ var _mock_colleagues__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mock/colleagues */ "./src/mock/colleagues.js");





var _jsxFileName = "/Users/zhanglei/workspaces/team-todo/project/src/App.js";



document.title = 'Todo list';
var colleagues = _mock_colleagues__WEBPACK_IMPORTED_MODULE_7__["default"];
var tasks = [];
var localPrjName = window.localStorage.getItem('team-todo_projectName');
var projectName = localPrjName ? localPrjName : 'default';

var jsonp = __webpack_require__(/*! jsonp */ "./node_modules/jsonp/index.js"); // jsonp('http://localhost:3001/users',{}, ( err, data) => {
//   console.log( err, data)
// });


var App =
/*#__PURE__*/
function (_Component) {
  Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(App, _Component);

  function App() {
    Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

    return Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(App).apply(this, arguments));
  }

  Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
    key: "render",
    value: function render() {
      //console.log(this.props)
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_TodoList_main__WEBPACK_IMPORTED_MODULE_6__["default"], {
        projects: ['default'],
        projectName: projectName,
        tasks: tasks,
        colleagues: colleagues,
        config: {
          showTaskConfig: true,
          showDoneTasks: true
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      });
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/TodoList/RowFinished.js":
/*!*************************************!*\
  !*** ./src/TodoList/RowFinished.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons-kit */ "./node_modules/react-icons-kit/index.js");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_icons_kit_icomoon_lock__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons-kit/icomoon/lock */ "./node_modules/react-icons-kit/icomoon/lock.js");
/* harmony import */ var react_icons_kit_icomoon_lock__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_icomoon_lock__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_icons_kit_icomoon_checkmark__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons-kit/icomoon/checkmark */ "./node_modules/react-icons-kit/icomoon/checkmark.js");
/* harmony import */ var react_icons_kit_icomoon_checkmark__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_icomoon_checkmark__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_icons_kit_fa_stop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons-kit/fa/stop */ "./node_modules/react-icons-kit/fa/stop.js");
/* harmony import */ var react_icons_kit_fa_stop__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_fa_stop__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _sub_WeekDisplay__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sub/WeekDisplay */ "./src/TodoList/sub/WeekDisplay.js");





var _jsxFileName = "/Users/zhanglei/workspaces/team-todo/project/src/TodoList/RowFinished.js";








var RowFinished =
/*#__PURE__*/
function (_Component) {
  Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RowFinished, _Component);

  function RowFinished(props) {
    Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, RowFinished);

    return Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(RowFinished).call(this, props));
  }

  Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(RowFinished, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var task = this.props.task;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
        key: task.id,
        className: "finished_task",
        onMouseOver: function onMouseOver(e) {
          return e.currentTarget.className = e.currentTarget.className + ' hovering';
        },
        onMouseOut: function onMouseOut(e) {
          return e.currentTarget.className = e.currentTarget.className.replace(/hovering/ig, '');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        type: "checkbox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, "[", this.props.i, "]")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_icons_kit__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
        size: 10,
        icon: react_icons_kit_icomoon_lock__WEBPACK_IMPORTED_MODULE_8__["lock"],
        style: {
          color: '#ddd'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_icons_kit__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
        size: 10,
        icon: react_icons_kit_icomoon_lock__WEBPACK_IMPORTED_MODULE_8__["lock"],
        style: {
          color: '#ddd'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        style: {
          float: 'right'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, task.textCatagory)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        className: 'task_title',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        style: {
          marginLeft: task.isSubTaskOf ? 29 : 2
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, task.isSubTaskOf ? '-' : '', task.title)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_icons_kit__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
        size: 10,
        icon: react_icons_kit_icomoon_lock__WEBPACK_IMPORTED_MODULE_8__["lock"],
        style: {
          color: '#ddd'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }), task.textOwner ? task.textOwner : ''), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_icons_kit__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
        size: 10,
        icon: react_icons_kit_icomoon_lock__WEBPACK_IMPORTED_MODULE_8__["lock"],
        style: {
          color: '#ddd'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "javascript:void(0)",
        onClick: function onClick(e) {
          return _this.props.handleTaskChange(task.id, 'status', 'open');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "RE-OPEN")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_icons_kit__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
        size: 10,
        icon: react_icons_kit_icomoon_lock__WEBPACK_IMPORTED_MODULE_8__["lock"],
        style: {
          color: '#ddd'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_icons_kit__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
        size: 10,
        icon: react_icons_kit_icomoon_lock__WEBPACK_IMPORTED_MODULE_8__["lock"],
        style: {
          color: '#ddd'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }), task.planned_end_date ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_sub_WeekDisplay__WEBPACK_IMPORTED_MODULE_11__["default"], {
        date: task.planned_end_date,
        is: 'end',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }) : false, task.planned_end_date ? '' + moment__WEBPACK_IMPORTED_MODULE_6___default()(task.planned_end_date).format('MM-DD') + '' : false, !task.planned_end_date ? '-' : false), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        style: {
          display: 'none'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_icons_kit__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
        size: 10,
        icon: react_icons_kit_icomoon_lock__WEBPACK_IMPORTED_MODULE_8__["lock"],
        style: {
          color: '#ddd'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_icons_kit__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
        size: 10,
        icon: react_icons_kit_icomoon_lock__WEBPACK_IMPORTED_MODULE_8__["lock"],
        style: {
          color: '#ddd'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_icons_kit__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
        size: 10,
        icon: react_icons_kit_icomoon_lock__WEBPACK_IMPORTED_MODULE_8__["lock"],
        style: {
          color: '#ddd'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_icons_kit__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
        size: 10,
        icon: react_icons_kit_icomoon_lock__WEBPACK_IMPORTED_MODULE_8__["lock"],
        style: {
          color: '#ddd'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        colSpan: 100,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }));
    }
  }]);

  return RowFinished;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (RowFinished);

/***/ }),

/***/ "./src/TodoList/RowGroup.js":
/*!**********************************!*\
  !*** ./src/TodoList/RowGroup.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons-kit */ "./node_modules/react-icons-kit/index.js");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_icons_kit_icomoon_arrowUp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons-kit/icomoon/arrowUp */ "./node_modules/react-icons-kit/icomoon/arrowUp.js");
/* harmony import */ var react_icons_kit_icomoon_arrowUp__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_icomoon_arrowUp__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_icons_kit_icomoon_arrowDown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons-kit/icomoon/arrowDown */ "./node_modules/react-icons-kit/icomoon/arrowDown.js");
/* harmony import */ var react_icons_kit_icomoon_arrowDown__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_icomoon_arrowDown__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_icons_kit_icomoon_arrowRight__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons-kit/icomoon/arrowRight */ "./node_modules/react-icons-kit/icomoon/arrowRight.js");
/* harmony import */ var react_icons_kit_icomoon_arrowRight__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_icomoon_arrowRight__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_icons_kit_icomoon_arrowLeft__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons-kit/icomoon/arrowLeft */ "./node_modules/react-icons-kit/icomoon/arrowLeft.js");
/* harmony import */ var react_icons_kit_icomoon_arrowLeft__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_icomoon_arrowLeft__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_icons_kit_icomoon_pencil__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-icons-kit/icomoon/pencil */ "./node_modules/react-icons-kit/icomoon/pencil.js");
/* harmony import */ var react_icons_kit_icomoon_pencil__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_icomoon_pencil__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_icons_kit_fa_close__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-icons-kit/fa/close */ "./node_modules/react-icons-kit/fa/close.js");
/* harmony import */ var react_icons_kit_fa_close__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_fa_close__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_icons_kit_icomoon_folderOpen__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-icons-kit/icomoon/folderOpen */ "./node_modules/react-icons-kit/icomoon/folderOpen.js");
/* harmony import */ var react_icons_kit_icomoon_folderOpen__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_icomoon_folderOpen__WEBPACK_IMPORTED_MODULE_13__);





var _jsxFileName = "/Users/zhanglei/workspaces/team-todo/project/src/TodoList/RowGroup.js";










var RowGroup =
/*#__PURE__*/
function (_Component) {
  Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RowGroup, _Component);

  function RowGroup(props) {
    Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, RowGroup);

    return Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(RowGroup).call(this, props));
  }

  Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(RowGroup, [{
    key: "render",
    value: function render() {
      var _this = this;

      var task = this.props.task;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
        className: "task_group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        colSpan: 3,
        style: {
          backgroundColor: '#eee'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        type: "checkbox",
        style: {
          float: 'left'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }), "*"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        colSpan: 2,
        className: "task_group_title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_icons_kit__WEBPACK_IMPORTED_MODULE_6__["Icon"], {
        style: {
          color: '#ddd',
          float: 'left',
          marginLeft: 3
        },
        size: 13,
        icon: react_icons_kit_icomoon_folderOpen__WEBPACK_IMPORTED_MODULE_13__["folderOpen"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        id: "group-".concat(task.id),
        style: {
          float: 'left',
          padding: '2px 0 0 2px'
        },
        value: task.groupName,
        onChange: function onChange(e) {
          return _this.props.onNameChange(e.target.value);
        },
        onKeyDown: function onKeyDown(e) {
          return _this.props.handleKeyDown(e, task.id);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          marginLeft: '2px',
          float: 'right',
          padding: '2px 0 0 2px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "javascript:void(0)",
        onClick: function onClick(e) {
          return _this.props.handleGroupRemove(task.id);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_icons_kit__WEBPACK_IMPORTED_MODULE_6__["Icon"], {
        style: {
          color: '#ddd'
        },
        size: 9,
        icon: react_icons_kit_fa_close__WEBPACK_IMPORTED_MODULE_12__["close"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        colSpan: 100,
        style: {
          backgroundColor: '#eee'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }));
    }
  }]);

  return RowGroup;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (RowGroup);

/***/ }),

/***/ "./src/TodoList/RowMilestone.js":
/*!**************************************!*\
  !*** ./src/TodoList/RowMilestone.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons-kit */ "./node_modules/react-icons-kit/index.js");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_icons_kit_icomoon_arrowUp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons-kit/icomoon/arrowUp */ "./node_modules/react-icons-kit/icomoon/arrowUp.js");
/* harmony import */ var react_icons_kit_icomoon_arrowUp__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_icomoon_arrowUp__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_icons_kit_icomoon_arrowDown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons-kit/icomoon/arrowDown */ "./node_modules/react-icons-kit/icomoon/arrowDown.js");
/* harmony import */ var react_icons_kit_icomoon_arrowDown__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_icomoon_arrowDown__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_icons_kit_icomoon_arrowRight__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons-kit/icomoon/arrowRight */ "./node_modules/react-icons-kit/icomoon/arrowRight.js");
/* harmony import */ var react_icons_kit_icomoon_arrowRight__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_icomoon_arrowRight__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_icons_kit_icomoon_arrowLeft__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons-kit/icomoon/arrowLeft */ "./node_modules/react-icons-kit/icomoon/arrowLeft.js");
/* harmony import */ var react_icons_kit_icomoon_arrowLeft__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_icomoon_arrowLeft__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_icons_kit_icomoon_pencil__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-icons-kit/icomoon/pencil */ "./node_modules/react-icons-kit/icomoon/pencil.js");
/* harmony import */ var react_icons_kit_icomoon_pencil__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_icomoon_pencil__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_icons_kit_fa_close__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-icons-kit/fa/close */ "./node_modules/react-icons-kit/fa/close.js");
/* harmony import */ var react_icons_kit_fa_close__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_fa_close__WEBPACK_IMPORTED_MODULE_12__);





var _jsxFileName = "/Users/zhanglei/workspaces/team-todo/project/src/TodoList/RowMilestone.js";









var RowMilestone =
/*#__PURE__*/
function (_Component) {
  Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RowMilestone, _Component);

  function RowMilestone(props) {
    Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, RowMilestone);

    return Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(RowMilestone).call(this, props));
  }

  Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(RowMilestone, [{
    key: "render",
    value: function render() {
      var _this = this;

      var task = this.props.task;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("tr", {
        className: "mileStone " + (task.milestoneStatus ? task.milestoneStatus : 'open'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("td", {
        colSpan: 100,
        style: {
          position: 'relative'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "milestone-tip",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        className: 'millestonename',
        id: "milestone-".concat(task.id),
        value: task.milestoneName,
        onChange: function onChange(e) {
          return _this.props.onMilestongNameChange(e.target.value);
        },
        onKeyDown: function onKeyDown(e) {
          return _this.props.handleKeyDown(e, task.id);
        },
        placeholder: "Milestone",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "javascript:void(0)",
        style: {
          marginLeft: '5px'
        },
        onClick: function onClick(e) {
          return _this.props.handleGroupRemove(task.id);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_icons_kit__WEBPACK_IMPORTED_MODULE_6__["Icon"], {
        size: 12,
        icon: react_icons_kit_fa_close__WEBPACK_IMPORTED_MODULE_12__["close"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "milestone-toolbar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("select", {
        defaultValue: "",
        value: task.milestoneStatus,
        onChange: function onChange(e) {
          return _this.props.onMilestongStatusChange(e.target.value);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
        value: "open",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, "OPEN"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
        value: "focus",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "TARGET"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
        value: "done",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, "DONE")))));
    }
  }]);

  return RowMilestone;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (RowMilestone);

/***/ }),

/***/ "./src/TodoList/TodoList.js":
/*!**********************************!*\
  !*** ./src/TodoList/TodoList.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _items_StatusSelector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./items/StatusSelector */ "./src/TodoList/items/StatusSelector.js");
/* harmony import */ var _items_TextCatagory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./items/TextCatagory */ "./src/TodoList/items/TextCatagory.js");
/* harmony import */ var _items_AssistentSelector__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./items/AssistentSelector */ "./src/TodoList/items/AssistentSelector.js");
/* harmony import */ var _items_RiskSelector__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./items/RiskSelector */ "./src/TodoList/items/RiskSelector.js");
/* harmony import */ var _items_TitleInput__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./items/TitleInput */ "./src/TodoList/items/TitleInput.js");
/* harmony import */ var _items_TextOwner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./items/TextOwner */ "./src/TodoList/items/TextOwner.js");
/* harmony import */ var _items_TextAssistent__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./items/TextAssistent */ "./src/TodoList/items/TextAssistent.js");
/* harmony import */ var _sub_WeekDisplay__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./sub/WeekDisplay */ "./src/TodoList/sub/WeekDisplay.js");
/* harmony import */ var _sub_StartEndRange__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./sub/StartEndRange */ "./src/TodoList/sub/StartEndRange.js");
/* harmony import */ var _RowGroup__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./RowGroup */ "./src/TodoList/RowGroup.js");
/* harmony import */ var _RowMilestone__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./RowMilestone */ "./src/TodoList/RowMilestone.js");
/* harmony import */ var _RowFinished__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./RowFinished */ "./src/TodoList/RowFinished.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-datepicker */ "./node_modules/react-datepicker/es/index.js");
/* harmony import */ var react_numeric_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react-numeric-input */ "./node_modules/react-numeric-input/index.js");
/* harmony import */ var react_numeric_input__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(react_numeric_input__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react-icons-kit */ "./node_modules/react-icons-kit/index.js");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var react_icons_kit_icomoon_arrowUp__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! react-icons-kit/icomoon/arrowUp */ "./node_modules/react-icons-kit/icomoon/arrowUp.js");
/* harmony import */ var react_icons_kit_icomoon_arrowUp__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_icomoon_arrowUp__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var react_icons_kit_icomoon_arrowDown__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! react-icons-kit/icomoon/arrowDown */ "./node_modules/react-icons-kit/icomoon/arrowDown.js");
/* harmony import */ var react_icons_kit_icomoon_arrowDown__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_icomoon_arrowDown__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var react_icons_kit_icomoon_arrowRight__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! react-icons-kit/icomoon/arrowRight */ "./node_modules/react-icons-kit/icomoon/arrowRight.js");
/* harmony import */ var react_icons_kit_icomoon_arrowRight__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_icomoon_arrowRight__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var react_icons_kit_icomoon_arrowLeft__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! react-icons-kit/icomoon/arrowLeft */ "./node_modules/react-icons-kit/icomoon/arrowLeft.js");
/* harmony import */ var react_icons_kit_icomoon_arrowLeft__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_icomoon_arrowLeft__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var react_icons_kit_icomoon_pencil__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! react-icons-kit/icomoon/pencil */ "./node_modules/react-icons-kit/icomoon/pencil.js");
/* harmony import */ var react_icons_kit_icomoon_pencil__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_icomoon_pencil__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var react_icons_kit_fa_close__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! react-icons-kit/fa/close */ "./node_modules/react-icons-kit/fa/close.js");
/* harmony import */ var react_icons_kit_fa_close__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_fa_close__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker.css */ "./node_modules/react-datepicker/dist/react-datepicker.css");
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_31__);







var _jsxFileName = "/Users/zhanglei/workspaces/team-todo/project/src/TodoList/TodoList.js";


























var TodoList =
/*#__PURE__*/
function (_Component) {
  Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(TodoList, _Component);

  function TodoList(props) {
    var _this;

    Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, TodoList);

    _this = Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(TodoList).call(this, props));
    _this.state = _this.props;
    _this.handleTaskChange = _this.handleTaskChange.bind(Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.handleChange = _this.handleChange.bind(Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(TodoList, [{
    key: "handleTaskChange",
    value: function handleTaskChange(taskid, keyName, value) {
      //console.log(taskid, keyName, value)
      this.props.handleTaskUpdate(taskid, Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, keyName, value));
    }
  }, {
    key: "handleChange",
    value: function handleChange(key, value) {
      var state = this.state;
      state = Object.assign(state, Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, key, value));
      this.setState(state);
    }
  }, {
    key: "handleKeyDown",
    value: function handleKeyDown(e, taskid) {
      // "ArrowUp"
      // "ArrowDown"
      var key = e.key; //console.log(key, e, e.ctrlKey)

      if (e.ctrlKey) {
        if (key === "ArrowUp") this.props.handleMoveUp(taskid);
        if (key === "ArrowDown") this.props.handleMoveDown(taskid);
        if (key === "ArrowLeft") this.props.handleBeSubtask(taskid);
        if (key === "ArrowRight") this.props.handleUnSubtask(taskid);
        if (key === "Delete") this.props.handleDelete(taskid);

        if (key.toLowerCase() === "s") {
          window.saveTasks(false);
          e.preventDefault();
        }
      }
    }
  }, {
    key: "onMouseMove",
    value: function onMouseMove(tr, taskid) {
      if (!/hovering/.test(tr.className)) tr.className = tr.className + ' hovering';
    }
  }, {
    key: "onMouseOut",
    value: function onMouseOut(tr) {
      tr.className = tr.className.replace(/hovering/ig, '');
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var props = this.props;
      var tasks = this.props.tasks;
      var colleagues = this.props.colleagues;
      tasks.map(function (task, i) {
        if (!task.groupName) task.groupName = '';
        if (!task.description) task.description = '';
        if (!task.isSubTaskOf) task.isSubTaskOf = '';
      });
      var listItems = tasks.map(function (task, i) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, {
          key: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          },
          __self: this
        }, task.isGroup || task.isMilestong ? task.isGroup ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_RowGroup__WEBPACK_IMPORTED_MODULE_18__["default"], {
          key: "group" + i,
          task: task,
          onNameChange: function onNameChange(value) {
            return _this2.handleTaskChange(task.id, 'groupName', value);
          },
          handleGroupRemove: _this2.props.handleGroupRemove.bind(_this2),
          handleKeyDown: _this2.handleKeyDown.bind(_this2),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          },
          __self: this
        }) : task.isMilestong ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_RowMilestone__WEBPACK_IMPORTED_MODULE_19__["default"], {
          key: "group" + i,
          task: task,
          onMilestongNameChange: function onMilestongNameChange(value) {
            return _this2.handleTaskChange(task.id, 'milestoneName', value);
          },
          onMilestongStatusChange: function onMilestongStatusChange(value) {
            return _this2.handleTaskChange(task.id, 'milestoneStatus', value);
          },
          handleMoveUp: _this2.props.handleMoveUp.bind(_this2),
          handleMoveDown: _this2.props.handleMoveDown.bind(_this2),
          handleGroupRemove: _this2.props.handleGroupRemove.bind(_this2),
          handleKeyDown: _this2.handleKeyDown.bind(_this2),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95
          },
          __self: this
        }) : false : task.status === 'done' ? props.config.showDoneTasks ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_RowFinished__WEBPACK_IMPORTED_MODULE_20__["default"], {
          i: i,
          task: task,
          handleTaskChange: _this2.handleTaskChange.bind(_this2),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109
          },
          __self: this
        }) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr", {
          className: "finished_task_minimal",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
          class: "title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
          colSpan: 100,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 117
          },
          __self: this
        })) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr", {
          key: task.id,
          className: "task risk_" + task.risk + ' status_' + task.status + ' ' + (task.isSubTaskOf ? 'subtask' : ''),
          onMouseMove: function onMouseMove(e) {
            return _this2.onMouseMove.bind(_this2)(e.currentTarget, task.id);
          },
          onClick: function onClick(e) {
            var tagName = e.target.tagName;

            if (!lodash__WEBPACK_IMPORTED_MODULE_8___default.a.includes(["SELECT", "INPUT", "TEXTAREA"], tagName)) {
              var ipt = document.getElementById('title-' + task.id);
              if (ipt) ipt.focus();
            }
          },
          onMouseOut: function onMouseOut(e) {
            return _this2.onMouseOut.bind(_this2)(e.currentTarget, task.id);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 121
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 131
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
          type: "checkbox",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 132
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 134
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 135
          },
          __self: this
        }, "[", i, "]")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
          className: "row_toolbar",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 137
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          style: {
            marginLeft: 1
          },
          href: "javascript:void(0)",
          onClick: function onClick(e) {
            return _this2.props.handleAddBefore(task.id);
          },
          title: "Add a new Task before this one.",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 146
          },
          __self: this
        }, "Bf"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          style: {
            marginLeft: 1
          },
          href: "javascript:void(0)",
          onClick: function onClick(e) {
            return _this2.props.handleAddAfter(task.id);
          },
          title: "Add a new Task after this one.",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 147
          },
          __self: this
        }, "Af"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          style: {
            marginLeft: 1
          },
          href: "javascript:void(0)",
          onClick: function onClick(e) {
            return _this2.props.handleGroupAdd(task.id);
          },
          title: "Add a Group-Title above.",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 148
          },
          __self: this
        }, "Gr"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          style: {
            marginLeft: 1
          },
          href: "javascript:void(0)",
          onClick: function onClick(e) {
            return _this2.props.handleMilestoneAdd(task.id);
          },
          title: "Append a Milestone-Tip below.",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 149
          },
          __self: this
        }, "Ms")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 151
          },
          __self: this
        }, !task.textCatagory ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          style: {
            color: '#bbb'
          },
          onDoubleClick: function onDoubleClick(e) {
            _this2.handleTaskChange(task.id, 'textCatagory', 'New Tip');
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 153
          },
          __self: this
        }, "+tip") : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_items_TextCatagory__WEBPACK_IMPORTED_MODULE_10__["default"], {
          task: task,
          onChange: function onChange(value) {
            return _this2.handleTaskChange(task.id, 'textCatagory', value);
          },
          handleKeyDown: _this2.handleKeyDown.bind(_this2),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 155
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
          className: 'task_title ' + (task.isSubTaskOf ? "subtasktd " : " ") + (task.status === 'ongoing' ? "ongoing " : " "),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 161
          },
          __self: this
        }, task.status === 'backup' ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 162
          },
          __self: this
        }, task.title) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_items_TitleInput__WEBPACK_IMPORTED_MODULE_13__["default"], {
          task: task,
          idx: i,
          onChange: function onChange(value) {
            return _this2.handleTaskChange(task.id, 'title', value);
          },
          onMoveUp: _this2.props.handleMoveUp,
          onMoveDown: _this2.props.handleMoveDown,
          onBeSubtask: _this2.props.handleBeSubtask,
          onUnSubtask: _this2.props.handleUnSubtask,
          onFocusNeighbor: _this2.props.handleFocusNeighbor,
          onDelete: _this2.props.handleDelete,
          onEnterDown: _this2.props.handleEnterDown,
          onTitleKeyUp: _this2.props.handleTitleKeyUp,
          handleKeyDown: _this2.handleKeyDown.bind(_this2),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 162
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
          className: 'owner ' + (task.isSubTaskOf ? "subtasktd " : " ") + (task.status === 'ongoing' ? "ongoing " : " "),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 177
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_items_TextOwner__WEBPACK_IMPORTED_MODULE_14__["default"], {
          task: task,
          idx: i,
          colleagues: colleagues,
          onChange: function onChange(value) {
            return _this2.handleTaskChange(task.id, 'textOwner', value);
          },
          onMoveUp: _this2.props.handleMoveUp,
          onMoveDown: _this2.props.handleMoveDown,
          onDelete: _this2.props.handleDelete,
          onEnterDown: _this2.props.handleEnterDown,
          onTitleKeyUp: _this2.props.handleTitleKeyUp,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 178
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
          className: task.isSubTaskOf ? "subtasktd" : "",
          style: {
            display: _this2.state.config.showTaskConfig ? '' : 'none'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 190
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_items_StatusSelector__WEBPACK_IMPORTED_MODULE_9__["default"], {
          task: task,
          onChange: function onChange(value) {
            return _this2.handleTaskChange(task.id, 'status', value);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 191
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
          style: {
            display: 'none'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 193
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_items_TextAssistent__WEBPACK_IMPORTED_MODULE_15__["default"], {
          task: task,
          idx: i,
          colleagues: colleagues,
          onChange: function onChange(value) {
            return _this2.handleTaskChange(task.id, 'textAssistent', value);
          },
          onMoveUp: _this2.props.handleMoveUp,
          onMoveDown: _this2.props.handleMoveDown,
          onDelete: _this2.props.handleDelete,
          onEnterDown: _this2.props.handleEnterDown,
          onTitleKeyUp: _this2.props.handleTitleKeyUp,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 194
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
          style: {
            display: 'none'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 213
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "cost-cell",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 214
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_numeric_input__WEBPACK_IMPORTED_MODULE_23__, {
          idx: i,
          className: "form-control",
          min: 0.5,
          max: 100,
          value: task.cost,
          step: 0.5,
          snap: true,
          onChange: function onChange(val) {
            return _this2.handleTaskChange(task.id, 'cost', val);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 215
          },
          __self: this
        }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 225
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_sub_WeekDisplay__WEBPACK_IMPORTED_MODULE_16__["default"], {
          date: task.planned_begin_date,
          is: 'begin',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 226
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          style: {
            float: 'left',
            display: 'inline'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 227
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_datepicker__WEBPACK_IMPORTED_MODULE_22__["default"], {
          idx: i,
          className: "planned_end_date",
          dateFormat: "MM-DD",
          selected: task.planned_begin_date ? moment__WEBPACK_IMPORTED_MODULE_21___default()(task.planned_begin_date) : null,
          onChange: function onChange(mom) {
            return _this2.handleTaskChange(task.id, 'planned_begin_date', !mom ? '' : mom.format('YYYY-MM-DD'));
          } //onChange={this.handleChange}
          ,
          isClearable: true,
          placeholderText: "st",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 228
          },
          __self: this
        }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 240
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_sub_WeekDisplay__WEBPACK_IMPORTED_MODULE_16__["default"], {
          date: task.planned_end_date,
          is: 'end',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 241
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          style: {
            float: 'left',
            display: 'inline'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 242
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_datepicker__WEBPACK_IMPORTED_MODULE_22__["default"], {
          idx: i,
          className: "planned_end_date",
          dateFormat: "MM-DD",
          selected: task.planned_end_date ? moment__WEBPACK_IMPORTED_MODULE_21___default()(task.planned_end_date) : null,
          onChange: function onChange(mom) {
            return _this2.handleTaskChange(task.id, 'planned_end_date', !mom ? '' : mom.format('YYYY-MM-DD'));
          } //onChange={this.handleChange}
          ,
          isClearable: true,
          placeholderText: "ed",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 243
          },
          __self: this
        }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 255
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_sub_StartEndRange__WEBPACK_IMPORTED_MODULE_17__["default"], {
          task: task,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 256
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
          className: task.isSubTaskOf ? "subtasktd" : "",
          style: {
            display: _this2.state.config.showTaskConfig ? '' : 'none'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 258
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_items_RiskSelector__WEBPACK_IMPORTED_MODULE_12__["default"], {
          task: task,
          onChange: function onChange(value) {
            return _this2.handleTaskChange(task.id, 'risk', value);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 259
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 261
          },
          __self: this
        }, !task.description ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          style: {
            color: '#bbb'
          },
          onDoubleClick: function onDoubleClick(e) {
            _this2.handleTaskChange(task.id, 'description', 'New Desc');
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 263
          },
          __self: this
        }, "+desc") : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
          className: 'description',
          placeholder: "...",
          task: task,
          value: task.description,
          onChange: function onChange(e) {
            return _this2.handleTaskChange(task.id, 'description', e.target.value);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 265
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 267
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          href: "javascript:void(0)",
          onClick: function onClick(e) {
            return _this2.props.handleDeleteTask(task.id);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 268
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_icons_kit__WEBPACK_IMPORTED_MODULE_24__["Icon"], {
          size: 14,
          icon: react_icons_kit_fa_close__WEBPACK_IMPORTED_MODULE_30__["close"],
          style: {
            color: '#aaa'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 269
          },
          __self: this
        })))));
      });
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "todo_item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("table", {
        id: "todo_item_table",
        className: "todo_item_table",
        border: "0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("thead", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr", {
        className: "thead",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("th", {
        align: "left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("th", {
        align: "left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("th", {
        align: "left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("th", {
        align: "left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284
        },
        __self: this
      }, "Tip"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("th", {
        align: "left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 285
        },
        __self: this
      }, "Subject"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("th", {
        align: "left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286
        },
        __self: this
      }, "Owner"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("th", {
        align: "left",
        style: {
          display: this.state.config.showTaskConfig ? '' : 'none'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287
        },
        __self: this
      }, "Status"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("th", {
        align: "left",
        style: {
          display: 'none'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288
        },
        __self: this
      }, "Assistant"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("th", {
        align: "left",
        style: {
          display: 'none'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289
        },
        __self: this
      }, "Cost"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("th", {
        align: "left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290
        },
        __self: this
      }, "Start"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("th", {
        align: "left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291
        },
        __self: this
      }, "End"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("th", {
        align: "left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292
        },
        __self: this
      }, "Day(s)"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("th", {
        align: "left",
        style: {
          display: this.state.config.showTaskConfig ? '' : 'none'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293
        },
        __self: this
      }, "Risk"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("th", {
        align: "left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 294
        },
        __self: this
      }, "Desc"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("th", {
        align: "left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 295
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tbody", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298
        },
        __self: this
      }, listItems)));
    }
  }]);

  return TodoList;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (TodoList);

/***/ }),

/***/ "./src/TodoList/css/TodoList.css":
/*!***************************************!*\
  !*** ./src/TodoList/css/TodoList.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./TodoList.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/TodoList/css/TodoList.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./TodoList.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/TodoList/css/TodoList.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./TodoList.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/TodoList/css/TodoList.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/TodoList/items/AssistentSelector.js":
/*!*************************************************!*\
  !*** ./src/TodoList/items/AssistentSelector.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");






var _jsxFileName = "/Users/zhanglei/workspaces/team-todo/project/src/TodoList/items/AssistentSelector.js";


var customStyles = {
  option: function option(base, state) {
    return Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_5__["default"])({}, base, {
      borderBottom: '0',
      color: 'blue',
      padding: 0,
      margin: 0,
      height: 30
    });
  } // control: () => ({
  //   // none of react-selects styles are passed to <View />
  //   width: 200,
  //   height:30
  // }),
  // singleValue: (base, state) => {
  //   const opacity = state.isDisabled ? 0.5 : 1;
  //   const transition = 'opacity 300ms';
  //   return { ...base, opacity, transition };
  // }

};

var AssistentSelector =
/*#__PURE__*/
function (_Component) {
  Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(AssistentSelector, _Component);

  function AssistentSelector(props) {
    var _this;

    Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AssistentSelector);

    _this = Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(AssistentSelector).call(this, props));
    _this.state = {
      selectedOption: []
    };

    _this.handleChange = function (selectedOption) {
      _this.setState({
        selectedOption: selectedOption
      });

      _this.props.onChange(selectedOption); //console.log(`Option selected:`, selectedOption);

    };

    return _this;
  }

  Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AssistentSelector, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var props = this.props;
      this.setState({
        selectedOption: props.value ? props.value : []
      });
    }
  }, {
    key: "render",
    value: function render() {
      var selectedOption = this.props.value;
      var colleagues = this.props.colleagues;
      var options = [];

      for (var mail in colleagues) {
        options.push({
          value: mail,
          label: colleagues[mail].name
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_7__["default"], {
        classNamePrefix: 'assistent-select' //styles={customStyles}
        ,
        isMulti: true,
        value: selectedOption,
        onChange: this.handleChange,
        options: options,
        isSearchable: true,
        placeholder: "Assistent(s)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      });
    }
  }]);

  return AssistentSelector;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AssistentSelector);

/***/ }),

/***/ "./src/TodoList/items/RiskSelector.js":
/*!********************************************!*\
  !*** ./src/TodoList/items/RiskSelector.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mock_status__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../mock/status */ "./src/mock/status.js");





var _jsxFileName = "/Users/zhanglei/workspaces/team-todo/project/src/TodoList/items/RiskSelector.js";



var RiskSelector =
/*#__PURE__*/
function (_Component) {
  Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(RiskSelector, _Component);

  function RiskSelector(props) {
    Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, RiskSelector);

    return Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(RiskSelector).call(this, props));
  }

  Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(RiskSelector, [{
    key: "render",
    value: function render() {
      var _this = this;

      var task = this.props.task;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, task.isSubTaskOf && task.risk !== 'normal' ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, "-") : false, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("select", {
        className: "riskSel " + (task.risk === 'normal' ? 'dark' : ''),
        value: task.risk,
        onChange: function onChange(e) {
          return _this.props.onChange(e.target.value);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, _mock_status__WEBPACK_IMPORTED_MODULE_6__["riskStatus"].map(function (item, i) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
          key: i,
          value: item.value,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          },
          __self: this
        }, item.text);
      })));
    }
  }]);

  return RiskSelector;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (RiskSelector);

/***/ }),

/***/ "./src/TodoList/items/StatusSelector.js":
/*!**********************************************!*\
  !*** ./src/TodoList/items/StatusSelector.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mock_status__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../mock/status */ "./src/mock/status.js");





var _jsxFileName = "/Users/zhanglei/workspaces/team-todo/project/src/TodoList/items/StatusSelector.js";



var StatusSelector =
/*#__PURE__*/
function (_Component) {
  Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(StatusSelector, _Component);

  function StatusSelector(props) {
    Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, StatusSelector);

    return Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(StatusSelector).call(this, props));
  }

  Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(StatusSelector, [{
    key: "render",
    value: function render() {
      var _this = this;

      var task = this.props.task;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, task.isSubTaskOf && task.status !== 'open' ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, "-") : false, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("select", {
        className: "statusSel " + (task.status === 'open' ? 'dark' : ''),
        value: task.status,
        onChange: function onChange(e) {
          return _this.props.onChange(e.target.value);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, _mock_status__WEBPACK_IMPORTED_MODULE_6__["implementStatus"].map(function (item, i) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
          key: i,
          value: item.value,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          },
          __self: this
        }, item.text);
      })));
    }
  }]);

  return StatusSelector;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (StatusSelector);

/***/ }),

/***/ "./src/TodoList/items/TextAssistent.js":
/*!*********************************************!*\
  !*** ./src/TodoList/items/TextAssistent.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_taskUtil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/taskUtil */ "./src/TodoList/utils/taskUtil.js");






var _jsxFileName = "/Users/zhanglei/workspaces/team-todo/project/src/TodoList/items/TextAssistent.js";



var TextAssistent =
/*#__PURE__*/
function (_Component) {
  Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(TextAssistent, _Component);

  function TextAssistent(props) {
    var _this;

    Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TextAssistent);

    _this = Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(TextAssistent).call(this, props));
    _this.focusid = 1;
    _this.onFocus = _this.onFocus.bind(Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.onKeyDown = _this.onKeyDown.bind(Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.onKeyUp = _this.onKeyUp.bind(Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TextAssistent, [{
    key: "onFocus",
    value: function onFocus() {
      var task = this.props.task;
      this.focusid = task.id;
    }
  }, {
    key: "onKeyUp",
    value: function onKeyUp(e) {
      this.props.onTitleKeyUp();
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(e) {
      // "ArrowUp"
      // "ArrowDown"
      var key = e.key;
      var focusid = this.focusid; // if(!focusid) return;
      // console.log(key, e)
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var task = this.props.task;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        id: "assistent-input".concat(this.props.idx),
        className: "editing-textpeople ",
        placeholder: "...",
        value: task.textAssistent,
        onChange: function onChange(e) {
          return _this2.props.onChange(e.target.value);
        },
        onKeyDown: this.onKeyDown,
        onKeyUp: this.onKeyUp,
        onFocus: this.onFocus,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      });
    }
  }]);

  return TextAssistent;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (TextAssistent);

/***/ }),

/***/ "./src/TodoList/items/TextCatagory.js":
/*!********************************************!*\
  !*** ./src/TodoList/items/TextCatagory.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_taskUtil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/taskUtil */ "./src/TodoList/utils/taskUtil.js");





var _jsxFileName = "/Users/zhanglei/workspaces/team-todo/project/src/TodoList/items/TextCatagory.js";



var TextCatagory =
/*#__PURE__*/
function (_Component) {
  Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(TextCatagory, _Component);

  function TextCatagory(props) {
    var _this;

    Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TextCatagory);

    _this = Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(TextCatagory).call(this, props));
    _this.focusid = 1;
    return _this;
  }

  Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TextCatagory, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var task = this.props.task;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        className: "editing-catagory ",
        placeholder: "...",
        value: task.textCatagory,
        onChange: function onChange(e) {
          return _this2.props.onChange(e.target.value);
        },
        onKeyDown: function onKeyDown(e) {
          return _this2.props.handleKeyDown(e, task.id);
        },
        onFocus: this.onFocus,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      });
    }
  }]);

  return TextCatagory;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (TextCatagory);

/***/ }),

/***/ "./src/TodoList/items/TextOwner.js":
/*!*****************************************!*\
  !*** ./src/TodoList/items/TextOwner.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons-kit */ "./node_modules/react-icons-kit/index.js");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_icons_kit_icomoon_clock__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons-kit/icomoon/clock */ "./node_modules/react-icons-kit/icomoon/clock.js");
/* harmony import */ var react_icons_kit_icomoon_clock__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_icomoon_clock__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_icons_kit_icomoon_bubble2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons-kit/icomoon/bubble2 */ "./node_modules/react-icons-kit/icomoon/bubble2.js");
/* harmony import */ var react_icons_kit_icomoon_bubble2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_icomoon_bubble2__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_icons_kit_icomoon_notification__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons-kit/icomoon/notification */ "./node_modules/react-icons-kit/icomoon/notification.js");
/* harmony import */ var react_icons_kit_icomoon_notification__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_icomoon_notification__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_icons_kit_icomoon_warning__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-icons-kit/icomoon/warning */ "./node_modules/react-icons-kit/icomoon/warning.js");
/* harmony import */ var react_icons_kit_icomoon_warning__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_icomoon_warning__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_icons_kit_md_ic_warning__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-icons-kit/md/ic_warning */ "./node_modules/react-icons-kit/md/ic_warning.js");
/* harmony import */ var react_icons_kit_md_ic_warning__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_md_ic_warning__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_icons_kit_md_ic_error__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-icons-kit/md/ic_error */ "./node_modules/react-icons-kit/md/ic_error.js");
/* harmony import */ var react_icons_kit_md_ic_error__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_md_ic_error__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_icons_kit_fa_pause__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-icons-kit/fa/pause */ "./node_modules/react-icons-kit/fa/pause.js");
/* harmony import */ var react_icons_kit_fa_pause__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_fa_pause__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_icons_kit_fa_play__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-icons-kit/fa/play */ "./node_modules/react-icons-kit/fa/play.js");
/* harmony import */ var react_icons_kit_fa_play__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_fa_play__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _utils_taskUtil__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../utils/taskUtil */ "./src/TodoList/utils/taskUtil.js");






var _jsxFileName = "/Users/zhanglei/workspaces/team-todo/project/src/TodoList/items/TextOwner.js";












var TextOwner =
/*#__PURE__*/
function (_Component) {
  Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(TextOwner, _Component);

  function TextOwner(props) {
    var _this;

    Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TextOwner);

    _this = Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(TextOwner).call(this, props));
    _this.focusid = 1;
    _this.onFocus = _this.onFocus.bind(Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.onKeyDown = _this.onKeyDown.bind(Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.onKeyUp = _this.onKeyUp.bind(Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TextOwner, [{
    key: "onFocus",
    value: function onFocus() {
      var task = this.props.task;
      this.focusid = task.id;
    }
  }, {
    key: "onKeyUp",
    value: function onKeyUp(e) {
      this.props.onTitleKeyUp();
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(e) {
      // "ArrowUp"
      // "ArrowDown"
      var key = e.key;
      var focusid = this.focusid; // if(!focusid) return;
      // console.log(key, e)

      if (e.ctrlKey) {
        if (key === "s") {
          window.saveTasks(false);
          e.preventDefault();
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var task = this.props.task;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, task.isSubTaskOf ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "-") : false, task.status === 'ongoing' ? false // <Icon size={12} icon={pause} className="icon_inprogress"/>
      : false // <Icon size={14} icon={play} className="icon_open"/>
      , react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        id: "owner-input".concat(this.props.idx),
        className: "editing-textpeople " + (task.title ? '' : 'mandatory'),
        placeholder: "...",
        value: task.textOwner,
        onChange: function onChange(e) {
          return _this2.props.onChange(e.target.value);
        },
        onKeyDown: this.onKeyDown,
        onKeyUp: this.onKeyUp,
        onFocus: this.onFocus,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }));
    }
  }]);

  return TextOwner;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (TextOwner);

/***/ }),

/***/ "./src/TodoList/items/TitleInput.js":
/*!******************************************!*\
  !*** ./src/TodoList/items/TitleInput.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons-kit */ "./node_modules/react-icons-kit/index.js");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_icons_kit_icomoon_clock__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons-kit/icomoon/clock */ "./node_modules/react-icons-kit/icomoon/clock.js");
/* harmony import */ var react_icons_kit_icomoon_clock__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_icomoon_clock__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_icons_kit_icomoon_bubble2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons-kit/icomoon/bubble2 */ "./node_modules/react-icons-kit/icomoon/bubble2.js");
/* harmony import */ var react_icons_kit_icomoon_bubble2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_icomoon_bubble2__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_icons_kit_icomoon_notification__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons-kit/icomoon/notification */ "./node_modules/react-icons-kit/icomoon/notification.js");
/* harmony import */ var react_icons_kit_icomoon_notification__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_icomoon_notification__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_icons_kit_icomoon_warning__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-icons-kit/icomoon/warning */ "./node_modules/react-icons-kit/icomoon/warning.js");
/* harmony import */ var react_icons_kit_icomoon_warning__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_icomoon_warning__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_icons_kit_md_ic_warning__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-icons-kit/md/ic_warning */ "./node_modules/react-icons-kit/md/ic_warning.js");
/* harmony import */ var react_icons_kit_md_ic_warning__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_md_ic_warning__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_icons_kit_md_ic_error__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-icons-kit/md/ic_error */ "./node_modules/react-icons-kit/md/ic_error.js");
/* harmony import */ var react_icons_kit_md_ic_error__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_md_ic_error__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_icons_kit_fa_pause__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-icons-kit/fa/pause */ "./node_modules/react-icons-kit/fa/pause.js");
/* harmony import */ var react_icons_kit_fa_pause__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_fa_pause__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_icons_kit_fa_play__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-icons-kit/fa/play */ "./node_modules/react-icons-kit/fa/play.js");
/* harmony import */ var react_icons_kit_fa_play__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_fa_play__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _utils_taskUtil__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../utils/taskUtil */ "./src/TodoList/utils/taskUtil.js");






var _jsxFileName = "/Users/zhanglei/workspaces/team-todo/project/src/TodoList/items/TitleInput.js";












var StatusSelector =
/*#__PURE__*/
function (_Component) {
  Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(StatusSelector, _Component);

  function StatusSelector(props) {
    var _this;

    Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, StatusSelector);

    _this = Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(StatusSelector).call(this, props));
    _this.focusid = 1;
    _this.onFocus = _this.onFocus.bind(Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.onKeyDown = _this.onKeyDown.bind(Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.onKeyUp = _this.onKeyUp.bind(Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(StatusSelector, [{
    key: "onFocus",
    value: function onFocus() {
      var task = this.props.task;
      this.focusid = task.id;
    }
  }, {
    key: "onKeyUp",
    value: function onKeyUp(e) {
      this.props.onTitleKeyUp();
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(e) {
      // "ArrowUp"
      // "ArrowDown"
      var key = e.key;
      var focusid = this.focusid;
      if (!focusid) return; //console.log(key, e, e.ctrlKey)

      if (e.ctrlKey) {
        this.props.handleKeyDown(e, focusid);
      } else {
        if (key === "Enter") this.props.onEnterDown(focusid);
        if (key === "ArrowUp") this.props.onFocusNeighbor(focusid, 0);
        if (key === "ArrowDown") this.props.onFocusNeighbor(focusid, 1);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var task = this.props.task;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, task.isSubTaskOf ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "subtask",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, "-") : false, task.status === 'ongoing' ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_icons_kit__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
        size: 12,
        icon: react_icons_kit_fa_pause__WEBPACK_IMPORTED_MODULE_14__["pause"],
        className: "icon_inprogress",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }) : false, task.status === 'open' ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }) : false, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        id: "title-".concat(task.id),
        className: "editing-title " + (task.title ? '' : 'mandatory'),
        placeholder: "Title...",
        value: task.title,
        onChange: function onChange(e) {
          return _this2.props.onChange(e.target.value);
        },
        onKeyDown: this.onKeyDown,
        onKeyUp: this.onKeyUp,
        onFocus: this.onFocus,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      })), task.status !== 'done' ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, task.risk === 'danger' ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_icons_kit__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
        size: 18,
        icon: react_icons_kit_md_ic_error__WEBPACK_IMPORTED_MODULE_13__["ic_error"],
        className: "icon_danger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }) : false, task.risk === 'warn' ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_icons_kit__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
        size: 18,
        icon: react_icons_kit_md_ic_warning__WEBPACK_IMPORTED_MODULE_12__["ic_warning"],
        className: "icon_warn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }) : false) : false);
    }
  }]);

  return StatusSelector;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (StatusSelector);

/***/ }),

/***/ "./src/TodoList/main.js":
/*!******************************!*\
  !*** ./src/TodoList/main.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios2 */ "./node_modules/axios2/index.js");
/* harmony import */ var axios2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios2__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _TodoList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./TodoList */ "./src/TodoList/TodoList.js");
/* harmony import */ var _utils_taskUtil__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/taskUtil */ "./src/TodoList/utils/taskUtil.js");
/* harmony import */ var _sub_ProjectList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sub/ProjectList */ "./src/TodoList/sub/ProjectList.js");
/* harmony import */ var reset_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! reset-css */ "./node_modules/reset-css/reset.css");
/* harmony import */ var reset_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(reset_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _css_TodoList_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./css/TodoList.css */ "./src/TodoList/css/TodoList.css");
/* harmony import */ var _css_TodoList_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_css_TodoList_css__WEBPACK_IMPORTED_MODULE_13__);






var _jsxFileName = "/Users/zhanglei/workspaces/team-todo/project/src/TodoList/main.js";









var needConfirmSave = true;

window.saveTasks = function (needConfirm) {
  if (typeof needConfirm === 'undefined') needConfirm = true;
  needConfirmSave = needConfirm;
  var btn = document.getElementById('saveBtn');
  btn.click();
}; //


var TeamTodo =
/*#__PURE__*/
function (_Component) {
  Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(TeamTodo, _Component);

  function TeamTodo(props) {
    var _this;

    Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TeamTodo);

    _this = Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(TeamTodo).call(this, props));
    _this.deleteTask = _this.deleteTask.bind(Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.createTask = _this.createTask.bind(Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.loadTask = _this.loadTask.bind(Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.loadServerTask = _this.loadServerTask.bind(Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.showStatusConfigBar = _this.showStatusConfigBar.bind(Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.handleTaskUpdate = _this.handleTaskUpdate.bind(Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.moveTaskUp = _this.moveTaskUp.bind(Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.moveTaskDown = _this.moveTaskDown.bind(Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.handleTitleKeyUp = _this.handleTitleKeyUp.bind(Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.state = Object.assign({}, _this.props);
    _this.state.finishedCount = 0;
    console.log('init.state', _this.state);
    return _this;
  }

  Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TeamTodo, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      //this.loadServerTask()
      this.createTask();
      setTimeout(function () {
        document.getElementById('btn-load').click();
      }, 10);
    }
  }, {
    key: "doSetState",
    value: function doSetState(state, cb) {
      var tasks = state.tasks;
      state.finishedCount = _utils_taskUtil__WEBPACK_IMPORTED_MODULE_10__["default"].getAllFinishedTasks(tasks).length;
      this.setState(state, cb);
    }
  }, {
    key: "handleBeSubTask",
    value: function handleBeSubTask(id, bool) {
      this.state = _utils_taskUtil__WEBPACK_IMPORTED_MODULE_10__["default"].beSubTask(this.state, id, bool);
      this.doSetState(this.state);
    }
  }, {
    key: "moveTaskDown",
    value: function moveTaskDown(id) {
      this.state = _utils_taskUtil__WEBPACK_IMPORTED_MODULE_10__["default"].moveDown(this.state, [id]);
      this.doSetState(this.state, function () {
        var ipt = document.getElementById("title-".concat(id));
        if (!ipt) ipt = document.getElementById("group-".concat(id));
        if (!ipt) ipt = document.getElementById("milestone-".concat(id));
        if (ipt) ipt.focus();
      });
    }
  }, {
    key: "moveTaskUp",
    value: function moveTaskUp(id) {
      //console.log('this.state', this.state)
      this.state = _utils_taskUtil__WEBPACK_IMPORTED_MODULE_10__["default"].moveUp(this.state, [id]);
      this.doSetState(this.state, function () {
        var ipt = document.getElementById("title-".concat(id));
        if (!ipt) ipt = document.getElementById("group-".concat(id));
        if (!ipt) ipt = document.getElementById("milestone-".concat(id));
        if (ipt) ipt.focus();
      });
    }
  }, {
    key: "handleBeSubtask",
    value: function handleBeSubtask(id) {
      this.handleBeSubTask(id, false);
    }
  }, {
    key: "handleUnSubtask",
    value: function handleUnSubtask(id) {
      this.handleBeSubTask(id, true);
    }
  }, {
    key: "handleEnterDown",
    value: function handleEnterDown(id) {
      this.handleAddAfter(id);
    }
  }, {
    key: "handleFocusNeighbor",
    value: function handleFocusNeighbor(id, dir) {
      _utils_taskUtil__WEBPACK_IMPORTED_MODULE_10__["default"].focusNeighbor(this.state, id, dir);
    }
  }, {
    key: "loadTask",
    value: function loadTask() {
      var _this2 = this;

      _utils_taskUtil__WEBPACK_IMPORTED_MODULE_10__["default"].loadTestTasks().then(function (testdata) {
        _this2.doSetState({
          tasks: testdata
        }, function () {
          _utils_taskUtil__WEBPACK_IMPORTED_MODULE_10__["default"]._cache(_this2.state);
        });
      });
    }
  }, {
    key: "loadServerTask",
    value: function loadServerTask() {
      //if(!window.confirm(`Load tasks of "${this.state.projectName}"`)) return;
      var me = this;
      var tasks = _utils_taskUtil__WEBPACK_IMPORTED_MODULE_10__["default"].getAllTasks();
      axios2__WEBPACK_IMPORTED_MODULE_8___default.a.get('/action/todos', {
        params: {
          reponsitoryName: 'team-todo-data',
          projectName: this.state.projectName
        }
      }).then(function (response) {
        //console.log(response)
        if (!response.data.items && typeof response.data.shift === 'undefined') response.data.items = []; //old data, if not an array

        var todos = response.data.items ? response.data.items : response.data; //console.log(todos)

        if (todos.length === 0) {
          todos = [_utils_taskUtil__WEBPACK_IMPORTED_MODULE_10__["default"].createBlank()];
        } // for(var i=0;i<300;i++){
        //     var blank = taskUtil.createBlank()
        //     blank.title='asdfasdfasdfasd'
        //     todos.push(blank)
        // }


        me.doSetState({
          tasks: todos
        }, function () {
          _utils_taskUtil__WEBPACK_IMPORTED_MODULE_10__["default"]._cache(me.state);
        });
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: "saveServerTask",
    value: function saveServerTask() {
      var tasks = _utils_taskUtil__WEBPACK_IMPORTED_MODULE_10__["default"].getAllTasks();
      var projectName = this.state.projectName;
      if (needConfirmSave && !window.confirm('Save?')) return;
      _utils_taskUtil__WEBPACK_IMPORTED_MODULE_10__["default"].saveToServer(projectName, tasks);
    }
  }, {
    key: "showDoneTasks",
    value: function showDoneTasks() {
      this.state.config.showDoneTasks = !this.state.config.showDoneTasks;
      this.doSetState(this.state);
    }
  }, {
    key: "createProject",
    value: function createProject() {
      var projectName = prompt('New Project Name?');

      if (!projectName) {
        alert('Name Can Not Be Null.');
        return;
      }

      var me = this;
      axios2__WEBPACK_IMPORTED_MODULE_8___default.a.post('/action/create/project', {
        reponsitoryName: 'team-todo-data',
        projectName: projectName
      }).then(function (response) {
        me.handleProjectNameChange(projectName);
        alert(response.data);
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: "handleProjectNameChange",
    value: function handleProjectNameChange(value) {
      this.state.projectName = value;
      this.doSetState(this.state, function () {
        document.getElementById('btn-load').click();
      });
    }
  }, {
    key: "deleteTask",
    value: function deleteTask(id, needConfirm) {
      this.state = _utils_taskUtil__WEBPACK_IMPORTED_MODULE_10__["default"].deleteTask(this.state, id, needConfirm);
      this.doSetState(this.state);
    }
  }, {
    key: "createTask",
    value: function createTask() {
      this.state = _utils_taskUtil__WEBPACK_IMPORTED_MODULE_10__["default"].addTask(this.state);
      this.doSetState(this.state);
    }
  }, {
    key: "showStatusConfigBar",
    value: function showStatusConfigBar() {
      var state = this.state;
      state.config.showTaskConfig = !state.config.showTaskConfig;
      this.doSetState(state);
    }
  }, {
    key: "handleTaskUpdate",
    value: function handleTaskUpdate(id, newtask) {
      this.state = _utils_taskUtil__WEBPACK_IMPORTED_MODULE_10__["default"].updateTask(this.state, id, newtask);
      this.doSetState(this.state);
    }
  }, {
    key: "handleTitleKeyUp",
    value: function handleTitleKeyUp() {
      var tasks = _utils_taskUtil__WEBPACK_IMPORTED_MODULE_10__["default"].getAllTasks();
      if (tasks.length <= 0) return;
      var lastOne = tasks[tasks.length - 1]; //console.log('handleTitleKeyUp', lastOne.title)

      if (lastOne.title) {
        this.state = _utils_taskUtil__WEBPACK_IMPORTED_MODULE_10__["default"].addTask(this.state);
        this.doSetState(this.state);
      } else {//-----------
      }
    }
  }, {
    key: "handleAddBefore",
    value: function handleAddBefore(id) {
      this.state = _utils_taskUtil__WEBPACK_IMPORTED_MODULE_10__["default"].addTask(this.state, 'before', id);
      this.doSetState(this.state, function () {
        var ipt = document.getElementById("title-".concat(id));
        if (ipt) ipt.focus();
      });
    }
  }, {
    key: "handleAddAfter",
    value: function handleAddAfter(id) {
      var task = _utils_taskUtil__WEBPACK_IMPORTED_MODULE_10__["default"].getTask(this.state.tasks, id);
      this.state = _utils_taskUtil__WEBPACK_IMPORTED_MODULE_10__["default"].addTask(this.state, 'after', id, null, {
        isSubTaskOf: task.isSubTaskOf
      });
      var me = this;
      this.doSetState(this.state, function () {
        var state = me.state;
        var nexttask = _utils_taskUtil__WEBPACK_IMPORTED_MODULE_10__["default"].getNextTask(state, id);
        var ipt = document.getElementById("title-".concat(nexttask.id));
        if (ipt) ipt.focus();
      });
    }
  }, {
    key: "handleGroupAdd",
    value: function handleGroupAdd(id) {
      var groupName = window.prompt('Task Title Pls?');

      if (!groupName) {
        alert('Can not be null');
        return;
      }

      this.state = _utils_taskUtil__WEBPACK_IMPORTED_MODULE_10__["default"].addTask(this.state, 'before', id, {
        "id": ('G' + Math.random()).replace(/\./ig, ''),
        "isGroup": true,
        groupName: groupName
      });
      this.doSetState(this.state);
    }
  }, {
    key: "handleMilestoneAdd",
    value: function handleMilestoneAdd(id) {
      var name = window.prompt('Milestone Name Pls?');

      if (!name) {
        alert('Can not be null');
        return;
      }

      this.state = _utils_taskUtil__WEBPACK_IMPORTED_MODULE_10__["default"].addTask(this.state, 'after', id, {
        "id": ('G' + Math.random()).replace(/\./ig, ''),
        "isMilestong": true,
        "milestoneName": name,
        "milestoneStatus": '',
        name: name
      });
      this.doSetState(this.state);
    }
  }, {
    key: "handleGroupRemove",
    value: function handleGroupRemove(id) {
      var task = _utils_taskUtil__WEBPACK_IMPORTED_MODULE_10__["default"].getTask(this.state.tasks, id);

      if (window.confirm("Sure to remove \"".concat(task.groupName, "\"?"))) {
        this.deleteTask(id, false);
      }
    }
  }, {
    key: "handleGroupRename",
    value: function handleGroupRename(id) {
      var task = _utils_taskUtil__WEBPACK_IMPORTED_MODULE_10__["default"].getTask(this.state.tasks, id);
      var newName = window.prompt("Change title \"".concat(task.groupName, "\" to:"));

      if (!newName) {
        alert('Can not be null');
        return;
      }

      this.state = _utils_taskUtil__WEBPACK_IMPORTED_MODULE_10__["default"].updateTask(this.state, id, {
        groupName: newName
      });
      this.doSetState(this.state);
    }
  }, {
    key: "moveGroupUp",
    value: function moveGroupUp(id) {
      this.state = _utils_taskUtil__WEBPACK_IMPORTED_MODULE_10__["default"].moveGroupUp(this.state, id);
      this.doSetState(this.state);
    }
  }, {
    key: "moveGroupDown",
    value: function moveGroupDown(id) {
      this.state = _utils_taskUtil__WEBPACK_IMPORTED_MODULE_10__["default"].moveGroupDown(this.state, id);
      this.doSetState(this.state);
    }
  }, {
    key: "printAllTasks",
    value: function printAllTasks() {
      console.log(this.state);
      console.log(JSON.stringify(this.state));
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_sub_ProjectList__WEBPACK_IMPORTED_MODULE_11__["default"], {
        projects: this.state.projects,
        projectName: this.state.projectName,
        onChange: this.handleProjectNameChange.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "todo_main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        style: {
          display: 'none',
          width: '80px'
        },
        value: this.state.projectName,
        onChange: function onChange(e) {
          return _this3.handleProjectNameChange.bind(_this3)(e.target.value);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        id: 'btn-load',
        style: {
          display: 'none'
        },
        className: 'btn btn-load',
        onClick: this.loadServerTask.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272
        },
        __self: this
      }, "Load"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        id: "saveBtn",
        className: 'btn btn-save',
        style: {
          display: 'none'
        },
        onClick: this.saveServerTask.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273
        },
        __self: this
      }, "Save"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274
        },
        __self: this
      }, this.state.tasks.length === 0 ? 'No-data' : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_TodoList__WEBPACK_IMPORTED_MODULE_9__["default"], {
        tasks: this.state.tasks,
        colleagues: this.state.colleagues,
        handleDeleteTask: this.deleteTask,
        handleBeSubTask: this.handleBeSubTask.bind(this),
        handleMoveDown: this.moveTaskDown,
        handleMoveUp: this.moveTaskUp,
        handleBeSubtask: this.handleBeSubtask.bind(this),
        handleUnSubtask: this.handleUnSubtask.bind(this),
        handleEnterDown: this.handleEnterDown.bind(this),
        handleFocusNeighbor: this.handleFocusNeighbor.bind(this),
        handleDelete: this.deleteTask,
        handleCreate: this.createTask,
        handleTaskUpdate: this.handleTaskUpdate,
        handleTitleKeyUp: this.handleTitleKeyUp,
        handleAddBefore: this.handleAddBefore.bind(this),
        handleAddAfter: this.handleAddAfter.bind(this),
        handleGroupAdd: this.handleGroupAdd.bind(this),
        handleMilestoneAdd: this.handleMilestoneAdd.bind(this),
        handleGroupRemove: this.handleGroupRemove.bind(this),
        handleGroupRename: this.handleGroupRename.bind(this),
        handleGroupMoveDown: this.moveGroupDown.bind(this),
        handleGroupMoveUp: this.moveGroupUp.bind(this),
        config: this.state.config,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          position: 'fixed',
          right: 0,
          bottom: 0
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        onClick: this.showDoneTasks.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304
        },
        __self: this
      }, this.state.config.showDoneTasks ? "HideFinished" : "ShowFinised(".concat(this.state.finishedCount, ")")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        onClick: this.createProject.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305
        },
        __self: this
      }, "CreateProject"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        onClick: this.printAllTasks.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306
        },
        __self: this
      }, "Print: ", this.state.tasks.length, " items"), "\u2003", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        onClick: this.loadTask,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 308
        },
        __self: this
      }, "loadTestTask"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        onClick: this.showStatusConfigBar,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 309
        },
        __self: this
      }, "showStatusConfigBar"))));
    }
  }]);

  return TeamTodo;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (TeamTodo);

/***/ }),

/***/ "./src/TodoList/sub/ProjectList.js":
/*!*****************************************!*\
  !*** ./src/TodoList/sub/ProjectList.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios2 */ "./node_modules/axios2/index.js");
/* harmony import */ var axios2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_dateUtil__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/dateUtil */ "./src/TodoList/utils/dateUtil.js");





var _jsxFileName = "/Users/zhanglei/workspaces/team-todo/project/src/TodoList/sub/ProjectList.js";





var ProjectList =
/*#__PURE__*/
function (_Component) {
  Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ProjectList, _Component);

  function ProjectList(props) {
    var _this;

    Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ProjectList);

    _this = Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ProjectList).call(this, props));
    _this.state = _this.props;
    return _this;
  }

  Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ProjectList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var me = this;
      axios2__WEBPACK_IMPORTED_MODULE_6___default.a.get('/action/projects', {
        params: {
          reponsitoryName: 'team-todo-data'
        }
      }).then(function (response) {
        var projects = response.data; //console.log(projects)

        me.setState({
          projects: projects
        });
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: "onCheckboxChange",
    value: function onCheckboxChange(checkbox) {}
  }, {
    key: "onChange",
    value: function onChange(a) {
      var projectName = a.getAttribute('val');
      this.props.onChange(projectName);
      this.setState({
        projectName: projectName
      }, function () {
        window.localStorage.setItem('team-todo_projectName', projectName);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var listItems = [];
      var projectName = this.state.projectName;
      this.state.projects.map(function (prj, i) {
        return listItems.push(react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
          key: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
          type: "checkbox",
          checked: prj === _this2.state.projectName ? true : false,
          onChange: function onChange(e) {
            return _this2.onCheckboxChange.bind(_this2)(e.target);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
          href: "javascript:void(0)",
          val: prj,
          onClick: function onClick(e) {
            return _this2.onChange.bind(_this2)(e.target);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        }, prj)));
      });
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "projectlist",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        style: {
          margin: '2px 10px 10px 0',
          fontWeight: "bolder"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "Projects:"), " ", '(' + _utils_dateUtil__WEBPACK_IMPORTED_MODULE_8__["default"].getWeekDameName(new Date()) + ')' + moment__WEBPACK_IMPORTED_MODULE_7___default()().format('YYYY-MM-DD'), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        style: {
          marginLeft: '10px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, listItems));
    }
  }]);

  return ProjectList;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ProjectList);

/***/ }),

/***/ "./src/TodoList/sub/StartEndRange.js":
/*!*******************************************!*\
  !*** ./src/TodoList/sub/StartEndRange.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_dateUtil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/dateUtil */ "./src/TodoList/utils/dateUtil.js");





var _jsxFileName = "/Users/zhanglei/workspaces/team-todo/project/src/TodoList/sub/StartEndRange.js";




var StartEndRange =
/*#__PURE__*/
function (_Component) {
  Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(StartEndRange, _Component);

  function StartEndRange(props) {
    Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, StartEndRange);

    return Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(StartEndRange).call(this, props));
  }

  Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(StartEndRange, [{
    key: "render",
    value: function render() {
      var task = this.props.task;
      var beginDate = task.planned_begin_date;
      var endDate = task.planned_end_date;
      var dm1, dm2, daysRange;

      if (beginDate && endDate) {
        dm1 = moment__WEBPACK_IMPORTED_MODULE_6___default()(beginDate);
        dm2 = moment__WEBPACK_IMPORTED_MODULE_6___default()(endDate);
        daysRange = _utils_dateUtil__WEBPACK_IMPORTED_MODULE_7__["default"].getTimeSpan(dm2, dm1, 'end');
      }

      var daysLost;

      if (beginDate) {
        dm1 = moment__WEBPACK_IMPORTED_MODULE_6___default()(beginDate);
        dm2 = moment__WEBPACK_IMPORTED_MODULE_6___default()();
        daysLost = _utils_dateUtil__WEBPACK_IMPORTED_MODULE_7__["default"].getTimeSpan(dm1, dm2, 'begin');
      }

      var daysLeft;

      if (endDate) {
        dm1 = moment__WEBPACK_IMPORTED_MODULE_6___default()(endDate);
        dm2 = moment__WEBPACK_IMPORTED_MODULE_6___default()();
        daysLeft = _utils_dateUtil__WEBPACK_IMPORTED_MODULE_7__["default"].getTimeSpan(dm1, dm2, 'end');
      }

      var daysLeftNum = daysLeft ? parseInt(daysLeft) : 0;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, daysLost ? task.status === 'done' ? false : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "daysLost",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, daysLost) : false, daysLeft ? task.status === 'done' ? false : daysLeftNum < 0 ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "daysLeft out-of-time",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, daysLeft) : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "daysLeft",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, daysLeft) : false, daysRange ? task.status === 'done' ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "daysRange",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, daysRange, "d Cost") : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "daysRange",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, daysRange) : false, !daysLost && !daysLeft && !daysRange ? "-" : false);
    }
  }]);

  return StartEndRange;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (StartEndRange);

/***/ }),

/***/ "./src/TodoList/sub/WeekDisplay.js":
/*!*****************************************!*\
  !*** ./src/TodoList/sub/WeekDisplay.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_dateUtil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/dateUtil */ "./src/TodoList/utils/dateUtil.js");





var _jsxFileName = "/Users/zhanglei/workspaces/team-todo/project/src/TodoList/sub/WeekDisplay.js";



var m = new Map(); // 空Map

m.set('1', '一');
m.set('2', '二');
m.set('3', '三');
m.set('4', '四');
m.set('5', '五');
m.set('6', '六');
m.set('0', '日');

var WeekDisplay =
/*#__PURE__*/
function (_Component) {
  Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(WeekDisplay, _Component);

  function WeekDisplay(props) {
    Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, WeekDisplay);

    return Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(WeekDisplay).call(this, props));
  }

  Object(_Users_zhanglei_workspaces_team_todo_project_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(WeekDisplay, [{
    key: "render",
    value: function render() {
      var date = this.props.date;
      var dayText;

      if (date) {
        var dateMom = moment__WEBPACK_IMPORTED_MODULE_6___default()(date);
        var todayMom = moment__WEBPACK_IMPORTED_MODULE_6___default()();
        dayText = dayText = _utils_dateUtil__WEBPACK_IMPORTED_MODULE_7__["default"].getTimeSpan(dateMom, todayMom, this.props.is); //console.log(date, dayText)
      } //console.log('date', date)


      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, date ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          float: 'left',
          display: 'inline'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, "(", _utils_dateUtil__WEBPACK_IMPORTED_MODULE_7__["default"].getWeekDameName(date), ")") : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }));
    }
  }]);

  return WeekDisplay;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (WeekDisplay);

/***/ }),

/***/ "./src/TodoList/utils/dateUtil.js":
/*!****************************************!*\
  !*** ./src/TodoList/utils/dateUtil.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

var m = new Map(); // 空Map

m.set('1', '一');
m.set('2', '二');
m.set('3', '三');
m.set('4', '四');
m.set('5', '五');
m.set('6', '六');
m.set('0', '日');
var dateUtil = {
  getTimeSpan: function getTimeSpan(dateMom, todayMom, is) {
    if (is === 'begin') dateMom.hours(9 - 1) && dateMom.minutes(0);
    if (is === 'end') dateMom.hours(19 - 1) && dateMom.minutes(0);
    var dateDate = dateMom.toDate(); //todayMom.hours(19-1)

    var todayDate = todayMom.toDate(); //console.log('?', dateDate*1 , todayDate*1)

    var offsetMs = dateDate - todayDate;
    var day = offsetMs / (24 * 60 * 60 * 1000);
    day = Math.round(day * 10);
    day = day / 10;
    var dayText = (day > 0 ? '+' : '') + day + '';
    return dayText;
  },
  getWeekDameName: function getWeekDameName(date) {
    return m.get(moment__WEBPACK_IMPORTED_MODULE_0___default()(date).day() + '');
  }
};
/* harmony default export */ __webpack_exports__["default"] = (dateUtil);

/***/ }),

/***/ "./src/TodoList/utils/taskUtil.js":
/*!****************************************!*\
  !*** ./src/TodoList/utils/taskUtil.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios2 */ "./node_modules/axios2/index.js");
/* harmony import */ var axios2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios2__WEBPACK_IMPORTED_MODULE_1__);



var mockJson = __webpack_require__(/*! ../../mock/data.json */ "./src/mock/data.json"); //console.log(mockJson)


var DOWN = 1,
    UP = 0;
var taskUtil = {
  tasks: [],
  _cache: function _cache(state) {
    //console.log(state)
    taskUtil.tasks = state.tasks;
    return state;
  },
  loadTestTasks: function loadTestTasks() {
    var p = new Promise(function (resolve) {
      var testdata = [];
      setTimeout(function () {
        testdata = mockJson.tasks;
        resolve(testdata);
      }, 800);
    });
    return p;
  },
  getGroupTasks: function getGroupTasks(groupId, filterFn) {
    if (typeof filterFn === 'undefined') filterFn = function filterFn(task) {
      return true;
    };
    var tasks = taskUtil.getAllTasks();
    var group = taskUtil.getTask(tasks, groupId);
    var results = [];
    console.log(groupId, group, tasks);
    if (!group) return;

    for (var i = group._index; i < tasks.length; i++) {
      var task = tasks[i];
      if (task.id !== groupId && task.isGroup) break;
      if (filterFn(task)) results.push(task);
    }

    return results;
  },
  getAllFinishedTasks: function getAllFinishedTasks(tasks) {
    var finished = [];
    if (typeof tasks === 'undefined') tasks = taskUtil.getAllTasks();
    tasks.forEach(function (task) {
      if (task.status === 'done') finished.push(task);
    });
    return finished;
  },
  getAllTasks: function getAllTasks() {
    return taskUtil.tasks ? taskUtil.tasks : [];
  },
  getTask: function getTask(tasks, id) {
    if (typeof id === 'undefined') {
      id = tasks;
      tasks = taskUtil.getAllTasks();
    }

    for (var i = 0, len = tasks.length; i < len; i++) {
      tasks[i]._index = i;

      if (tasks[i].id === id) {
        return tasks[i];
      }
    }
  },
  createBlank: function createBlank(updateData) {
    var newid = ('item' + Math.random() + '').replace(/\d{0,}\./g, '');
    var newTask = {
      id: newid,
      textCatagory: '',
      title: '',
      status: 'open',
      risk: 'normal',
      owner: [],
      //'li4@company.com',
      assistant: '',
      textOwner: '',
      textAssistent: '',
      cost: 1,
      //md
      planned_begin_date: null,
      planned_end_date: null,
      description: '',
      isSubTaskOf: undefined
    };
    if (typeof updateData !== 'undefined' && updateData) for (var key in updateData) {
      newTask[key] = updateData[key];
    }
    return newTask;
  },
  addTask: function addTask(state, dir, id, data, updateData) {
    if (typeof data === 'undefined') data = null;
    if (typeof updateData === 'undefined' || !updateData) updateData = {};
    var newTask = taskUtil.createBlank(updateData);

    if (typeof dir === 'undefined') {
      state.tasks.push(newTask);
    } else {
      var task = taskUtil.getTask(state.tasks, id);
      var idx = task._index;

      var _newTask = typeof data !== 'undefined' && data ? data : taskUtil.createBlank(updateData);

      if (dir === 'before') {
        state.tasks.splice(idx, 0, _newTask);
      }

      if (dir === 'after') {
        state.tasks.splice(idx + 1, 0, _newTask);
      }
    }

    return taskUtil._cache(state);
  },
  deleteTask: function deleteTask(state, id, needConfirm) {
    if (typeof needConfirm === 'undefined') needConfirm = true;
    var task = taskUtil.getTask(state.tasks, id);
    var ok = needConfirm ? window.confirm("Sure to remove task \"".concat(task.title, "\"?")) : true;
    if (!ok) return taskUtil._cache(state);
    var newtasks = [];
    state.tasks.forEach(function (task) {
      if (task.id !== id) newtasks.push(task);
    });
    state.tasks = newtasks;
    return taskUtil._cache(state);
  },
  updateTask: function updateTask(state, id, newtask) {
    state.tasks.forEach(function (task) {
      if (task.id === id) {
        task = Object.assign(task, newtask);
      }
    });
    return taskUtil._cache(state);
  },
  beSubTask: function beSubTask(state, id, bool) {
    var me = taskUtil;
    var task = me.getTask(state.tasks, id);

    if (task._index > 0) {
      var prevTask = state.tasks[task._index - 1];
      task.isSubTaskOf = bool ? prevTask.id : undefined;
    }

    return taskUtil._cache(state);
  },
  moveUp: function moveUp(state, idlist) {
    var me = taskUtil;
    var task = me.getTask(state.tasks, idlist[0]);

    if (task._index > 0) {
      var task0 = state.tasks[task._index - 1];

      if (task0.status !== 'done') {
        state.tasks[task._index - 1] = task;
        state.tasks[task._index] = task0;
      } else {
        console.warn('here');
        var thisIdx = task._index;
        var prevIdx = thisIdx - 1;
        var go = true;

        while (go) {
          var _task = state.tasks[prevIdx];

          if (_task.status !== 'done') {
            go = false;
          } else {
            state.tasks[prevIdx] = task;
            state.tasks[thisIdx] = _task;
            thisIdx = prevIdx;
            prevIdx = thisIdx - 1;
          }
        }
      }
    }

    return taskUtil._cache(state);
  },
  moveDown: function moveDown(state, idlist) {
    var me = taskUtil;
    var task = me.getTask(state.tasks, idlist[0]);

    if (task._index < state.tasks.length - 1) {
      var task0 = state.tasks[task._index + 1];

      if (task0.status !== 'done') {
        state.tasks[task._index + 1] = task;
        state.tasks[task._index] = task0;
      } else {
        console.warn('here');
        var thisIdx = task._index;
        var nextIdx = thisIdx + 1;
        var go = true;

        while (go) {
          var _task2 = state.tasks[nextIdx];

          if (_task2.status !== 'done') {
            go = false;
          } else {
            state.tasks[nextIdx] = task;
            state.tasks[thisIdx] = _task2;
            thisIdx = nextIdx;
            nextIdx = thisIdx + 1;
          }
        }
      }
    }

    return taskUtil._cache(state);
  },
  getNextTask: function getNextTask(state, id) {
    var me = taskUtil;
    return me.getNeighborTask(state, id, DOWN);
  },
  getPrevTask: function getPrevTask(state, id) {
    var me = taskUtil;
    return me.getNeighborTask(state, id, UP);
  },
  getNeighborTask: function getNeighborTask(state, id, dir) {
    var me = taskUtil;
    var task = me.getTask(state.tasks, id);
    var idx = task._index;
    var nexttask;
    if (dir === DOWN) for (var i = idx + 1; i < state.tasks.length; i++) {
      nexttask = state.tasks[i];
      if (!nexttask) break;

      if (!nexttask.groupName && !nexttask.isMilestong) {
        break;
      }
    }
    if (dir === UP) for (var _i = idx - 1; _i >= 0; _i--) {
      nexttask = state.tasks[_i];
      if (!nexttask) break;

      if (!nexttask.groupName && !nexttask.isMilestong) {
        break;
      }
    }
    return nexttask;
  },
  focusNeighbor: function focusNeighbor(state, id, dir) {
    var me = taskUtil;
    var targetTask = me.getNeighborTask(state, id, dir); //console.log(targetTask)

    if (targetTask) {
      var ipt = me.getTitleInput(targetTask.id);
      if (ipt) ipt.focus();
    }
  },
  getTitleInput: function getTitleInput(id) {
    return document.getElementById("title-".concat(id));
  },
  saveToServer: function saveToServer(projectName, tasks, succFn, failFn) {
    document.getElementById('todo_item_table').setAttribute('class', 'saving_to_server');
    axios2__WEBPACK_IMPORTED_MODULE_1___default.a.post('/action/save/todos', {
      reponsitoryName: 'team-todo-data',
      projectName: projectName,
      tasks: {
        items: tasks
      }
    }).then(function (response) {
      console.log(response);
      setTimeout(function () {
        var oldclasses = document.getElementById('todo_item_table').getAttribute('class');
        var newclass = oldclasses.replace(/saving_to_server/ig, '');
        document.getElementById('todo_item_table').setAttribute('class', newclass);
      }, 0);
    }).catch(function (error) {
      console.log(error);
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = (taskUtil);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _registerServiceWorker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registerServiceWorker */ "./src/registerServiceWorker.js");
/* harmony import */ var longbow_messenger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! longbow-messenger.js */ "./node_modules/longbow-messenger.js/index.js");
var _jsxFileName = "/Users/zhanglei/workspaces/team-todo/project/src/index.js";





longbow_messenger_js__WEBPACK_IMPORTED_MODULE_4__["default"].listen('ask_for_sum', function (num1, num2) {
  return num1 + num2;
});
longbow_messenger_js__WEBPACK_IMPORTED_MODULE_4__["default"].emit('ask_for_sum', 1, 2).onResponse(function (result, msgInfo) {
  console.log('sum:', result);
});
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}), document.getElementById('root'));
Object(_registerServiceWorker__WEBPACK_IMPORTED_MODULE_3__["default"])();

/***/ }),

/***/ "./src/mock/colleagues.js":
/*!********************************!*\
  !*** ./src/mock/colleagues.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  "zhang3@company.com": {
    "name": "ZhangSan"
  },
  "li4@company.com": {
    "name": "LiSi"
  },
  "wang5@company.com": {
    "name": "WangWu"
  },
  "zhao6@company.com": {
    "name": "ZhaoLiu"
  }
});

/***/ }),

/***/ "./src/mock/data.json":
/*!****************************!*\
  !*** ./src/mock/data.json ***!
  \****************************/
/*! exports provided: tasks, colleagues, default */
/***/ (function(module) {

module.exports = {"tasks":[{"id":"234123","isGroup":true,"groupName":"Group1"},{"id":"item6426232742034896","groupName":"Group1","textCatagory":"","title":"1111","status":"ongoing","risk":"warn","owner":[],"assistant":[],"textOwner":"","textAssistant":"","cost":1.5,"planned_begin_date":"2018-07-13","planned_end_date":"2018-07-13"},{"id":"item5403666890885193","textCatagory":"","title":"222","status":"done","risk":"normal","owner":["li4@company.com"],"assistant":[],"textOwner":"","textAssistant":"","cost":2.5,"planned_begin_date":"2018-07-13","planned_end_date":"2018-07-13"},{"id":"32342342311","isGroup":true,"groupName":"Group2"},{"id":"item9282666481815387","textCatagory":"","groupName":"Group2","title":"333","status":"open","risk":"danger","owner":["wang5@company.com"],"assistant":[],"textOwner":"","textAssistant":"","cost":1.5,"planned_begin_date":"2018-07-13","planned_end_date":"2018-07-24"},{"id":"item9282643531815387","textCatagory":"","title":"333","status":"open","risk":"danger","owner":["wang5@company.com"],"assistant":[],"textOwner":"","textAssistant":"","cost":1.5,"planned_begin_date":"2018-07-13","planned_end_date":"2018-07-24"}],"colleagues":{"zhang3@company.com":{"name":"ZHANG-SAN"},"li4@company.com":{"name":"LI-SI"},"wang5@company.com":{"name":"WANG-WU"}}};

/***/ }),

/***/ "./src/mock/status.js":
/*!****************************!*\
  !*** ./src/mock/status.js ***!
  \****************************/
/*! exports provided: implementStatus, riskStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "implementStatus", function() { return implementStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "riskStatus", function() { return riskStatus; });
var implementStatus = [{
  value: 'open',
  text: 'TODO'
}, {
  value: 'ongoing',
  text: 'DOING'
}, {
  value: 'done',
  text: 'DONE'
}, // {value:'delay',text:'DELAYED!'},
{
  value: 'backup',
  text: 'BACKUP'
}];
var riskStatus = [{
  value: 'normal',
  text: 'NO'
}, {
  value: 'warn',
  text: 'WARN'
}, {
  value: 'danger',
  text: 'DANGER'
}];


/***/ }),

/***/ "./src/registerServiceWorker.js":
/*!**************************************!*\
  !*** ./src/registerServiceWorker.js ***!
  \**************************************/
/*! exports provided: default, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// In production, we register a service worker to serve assets from local cache.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on the "N+1" visit to a page, since previously
// cached resources are updated in the background.
// To learn more about the benefits of this model, read https://goo.gl/KwvDNy.
// This link also includes instructions on opting out of this behavior.
var isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register() {
  if (false) { var publicUrl; }
}

function registerValidSW(swUrl) {
  navigator.serviceWorker.register(swUrl).then(function (registration) {
    registration.onupdatefound = function () {
      var installingWorker = registration.installing;

      installingWorker.onstatechange = function () {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the old content will have been purged and
            // the fresh content will have been added to the cache.
            // It's the perfect time to display a "New content is
            // available; please refresh." message in your web app.
            console.log('New content is available; please refresh.');
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.');
          }
        }
      };
    };
  }).catch(function (error) {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(function (response) {
    // Ensure service worker exists, and that we really are getting a JS file.
    if (response.status === 404 || response.headers.get('content-type').indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(function (registration) {
        registration.unregister().then(function () {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl);
    }
  }).catch(function () {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(function (registration) {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/zhanglei/workspaces/team-todo/project/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/zhanglei/workspaces/team-todo/project/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",0]]]);
//# sourceMappingURL=main.chunk.js.map