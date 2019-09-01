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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/controllers/RequisicaoController.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ConfigClass.js":
/*!****************************!*\
  !*** ./src/ConfigClass.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar ConfigClass = function () {\n    function ConfigClass() {\n        _classCallCheck(this, ConfigClass);\n    }\n\n    _createClass(ConfigClass, null, [{\n        key: \"getUrlApi\",\n        value: function getUrlApi() {\n            this.urlApi = \"http://localhost:3000\";\n            return this.urlApi;\n        }\n    }]);\n\n    return ConfigClass;\n}();\n\nexports.default = ConfigClass;\n\n//# sourceURL=webpack:///./src/ConfigClass.js?");

/***/ }),

/***/ "./src/controllers/RequisicaoController.js":
/*!*************************************************!*\
  !*** ./src/controllers/RequisicaoController.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _RequisicaoModel = __webpack_require__(/*! ../models/requisicao/RequisicaoModel */ \"./src/models/requisicao/RequisicaoModel.js\");\n\nvar _RequisicaoModel2 = _interopRequireDefault(_RequisicaoModel);\n\nvar _RequisicaoClass = __webpack_require__(/*! ../models/requisicao/RequisicaoClass */ \"./src/models/requisicao/RequisicaoClass.js\");\n\nvar _RequisicaoClass2 = _interopRequireDefault(_RequisicaoClass);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar divMsg = window.document.getElementById(\"msg\");\nvar divRequisicoes = window.document.getElementById(\"requisicoes\");\nvar formulario = window.document.getElementById(\"form\");\n\nvar objRequisicaoController = void 0;\n\nvar RequisicaoController = function () {\n    function RequisicaoController() {\n        _classCallCheck(this, RequisicaoController);\n    }\n\n    _createClass(RequisicaoController, [{\n        key: \"getTodosTable\",\n        value: function getTodosTable(divRequisicoes) {\n            var _this = this;\n\n            var promise = new Promise(function (resolve, reject) {\n                var promiseFetch = _RequisicaoModel2.default.getTodos();\n                promiseFetch.then(function (response) {\n                    resolve(response);\n                });\n            });\n            promise.then(function (response) {\n                var dados = \"\";\n\n                if (response.erro) {\n                    _this.exibirMsgAlert(response.msg, 'erro');\n                } else {\n                    dados += \"<div class=\\\"table-responsive\\\"> \\n                <table class=\\\"table table-striped table-bordered table-hover table-sm\\\">\\n                    <thead class=\\\"table-dark\\\">\\n                        <tr>\\n                            <th>C\\xF3digo</th>\\n                            <th>Descri\\xE7\\xE3o</th>\\n                            <th></th>\\n                            <th></th>\\n                        </th>\\n                    </thead>\\n                    <tbody>\";\n\n                    var _iteratorNormalCompletion = true;\n                    var _didIteratorError = false;\n                    var _iteratorError = undefined;\n\n                    try {\n                        for (var _iterator = response.dados[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n                            var servico = _step.value;\n\n                            dados += \"<tr>\\n                    <td>\" + servico.id_requisicao + \"</td>\\n                    <td>\" + servico.descricao + \"</td>\\n                    <td><button type=\\\"button\\\" class=\\\"btn btn-primary btn-editar\\\" data-id=\\\"\" + servico.id_requisicao + \"\\\">Editar</button></td>\\n                    <td><button type=\\\"button\\\" class=\\\"btn btn-primary btn-excluir\\\" data-id=\\\"\" + servico.id_requisicao + \"\\\">Excluir</button></td>\\n                </tr>\";\n                        }\n                    } catch (err) {\n                        _didIteratorError = true;\n                        _iteratorError = err;\n                    } finally {\n                        try {\n                            if (!_iteratorNormalCompletion && _iterator.return) {\n                                _iterator.return();\n                            }\n                        } finally {\n                            if (_didIteratorError) {\n                                throw _iteratorError;\n                            }\n                        }\n                    }\n\n                    dados += \"</tbody></table></div>\";\n                    divRequisicoes.innerHTML = dados;\n\n                    var btnsEditar = document.querySelectorAll(\".btn-editar\");\n                    var btnsExcluir = document.querySelectorAll(\".btn-excluir\");\n                    btnsEditar.forEach(function (item) {\n                        item.addEventListener(\"click\", function (event) {\n                            objRequisicaoController.limparMsgAlert();\n                            var id = event.target.getAttribute('data-id');\n                            objRequisicaoController.prepararEditar(id);\n                        });\n                    });\n\n                    btnsExcluir.forEach(function (item) {\n                        item.addEventListener(\"click\", function (event) {\n                            objRequisicaoController.limparMsgAlert();\n                            var id = event.target.getAttribute('data-id');\n                            objRequisicaoController.deletar(id);\n                        });\n                    });\n                }\n            }).catch(function (response) {\n                return console.log(\"erro catch:\", response);\n            });\n        }\n    }, {\n        key: \"prepararEditar\",\n        value: function prepararEditar(id) {\n            var _this2 = this;\n\n            var promise = new Promise(function (resolve, reject) {\n                var promiseFetch = _RequisicaoModel2.default.getId(id);\n                promiseFetch.then(function (response) {\n                    resolve(response);\n                });\n            });\n            promise.then(function (response) {\n                if (response.erro) {\n                    _this2.exibirMsgAlert(response.msg, \"erro\");\n                } else {\n\n                    var objRequisicaoClass = new _RequisicaoClass2.default(response.dados[0].id_requisicao, response.dados[0].descricao, response.dados[0].detalhes);\n\n                    formulario.id.value = objRequisicaoClass.id_requisicao;\n                    formulario.descricao.value = objRequisicaoClass.id_requisicao;\n                    formulario.detalhes.value = objRequisicaoClass.id_requisicao;\n\n                    objRequisicaoController.ocultarElemento(\"listagem\");\n                    objRequisicaoController.exibirElemento(\"formulario\");\n                }\n            }).catch(function (response) {\n                console.log(\"erro catch:\", response);\n            });\n        }\n    }, {\n        key: \"editar\",\n        value: function editar(formulario) {\n            var _this3 = this;\n\n            var id = void 0,\n                descricao = void 0,\n                detalhes = void 0;\n            id = formulario.id.value;\n            descricao = formulario.descricao.value;\n            detalhes = formulario.detalhes.value;\n\n            if (id && descricao && detalhes) {\n                var objRequisicaoClass = new _RequisicaoClass2.default(id, descricao, detalhes);\n\n                var promise = new Promise(function (resolve, reject) {\n                    var promiseFetch = _RequisicaoModel2.default.editar(objRequisicaoClass);\n                    promiseFetch.then(function (response) {\n                        resolve(response);\n                    });\n                });\n                promise.then(function (response) {\n                    if (response.erro) {\n                        _this3.exibirMsgAlert(response.msg, \"erro\");\n                    } else {\n                        objRequisicaoController.getTodosTable(divRequisicoes);\n                        objRequisicaoController.exibirMsgAlert(response.msg, \"sucesso\");\n                        objRequisicaoController.ocultarElemento(\"formulario\");\n                        objRequisicaoController.exibirElemento(\"listagem\");\n                        objRequisicaoController.limparCamposForm(formulario);\n                    }\n                }).catch(function (response) {\n                    console.log(\"erro catch:\", response);\n                });\n            } else {\n                this.exibirMsgAlert(\"Por favor preencher todos os campos.\", \"erro\");\n            }\n        }\n        // adiciona os campos !!!!aqui\n\n    }, {\n        key: \"adicionar\",\n        value: function adicionar(formulario) {\n            var _this4 = this;\n\n            var descricao = void 0,\n                detalhes = void 0;\n            descricao = formulario.descricao.value;\n            detalhes = formulario.detalhes.value;\n\n            if (descricao && detalhes) {\n                var objRequisicaoClass = new _RequisicaoClass2.default(null, descricao, detalhes);\n\n                var promise = new Promise(function (resolve, reject) {\n                    var promiseFetch = _RequisicaoModel2.default.adicionar(objRequisicaoClass);\n                    promiseFetch.then(function (response) {\n                        resolve(response);\n                    });\n                });\n                promise.then(function (response) {\n                    if (response.erro) {\n                        _this4.exibirMsgAlert(response.msg, \"erro\");\n                    } else {\n                        objRequisicaoController.getTodosTable(divRequisicoes);\n                        objRequisicaoController.exibirMsgAlert(response.msg, \"sucesso\");\n                        objRequisicaoController.ocultarElemento(\"formulario\");\n                        objRequisicaoController.exibirElemento(\"listagem\");\n                        objRequisicaoController.limparCamposForm(formulario);\n                    }\n                }).catch(function (response) {\n                    console.log(\"erro catch:\", response);\n                });\n            } else {\n                this.exibirMsgAlert(\"Por favor preencher todos os campos.\", \"erro\");\n            }\n        }\n    }, {\n        key: \"deletar\",\n        value: function deletar(id) {\n            var _this5 = this;\n\n            var promise = new Promise(function (resolve, reject) {\n                var promiseFetch = _RequisicaoModel2.default.deletar(id);\n                promiseFetch.then(function (response) {\n                    resolve(response);\n                });\n            });\n            promise.then(function (response) {\n                if (response.erro) {\n                    _this5.exibirMsgAlert(response.msg, \"erro\");\n                } else {\n                    objRequisicaoController.getTodosTable(divRequisicoes);\n                    objRequisicaoController.exibirMsgAlert(response.msg, \"sucesso\");\n                }\n            }).catch(function (response) {\n                console.log(\"erro catch:\", response);\n            });\n        }\n    }, {\n        key: \"ocultarElemento\",\n        value: function ocultarElemento(elemento) {\n            document.getElementById(elemento).style.display = \"none\";\n        }\n    }, {\n        key: \"exibirElemento\",\n        value: function exibirElemento(elemento) {\n            document.getElementById(elemento).style.display = \"block\";\n        }\n    }, {\n        key: \"limparCamposForm\",\n        value: function limparCamposForm(form) {\n            form.id.value = \"\";\n            form.descricao.value = \"\";\n            form.detalhes.value = \"\";\n        }\n    }, {\n        key: \"exibirMsgAlert\",\n        value: function exibirMsgAlert(msg, tipo) {\n            var dados = \"\";\n            if (tipo == \"sucesso\") {\n                dados = \"<div class=\\\"alert alert-success alert-dismissible fade show\\\" role=\\\"alert\\\">\\n            <strong>\" + msg + \"</strong> Olha esse alerta animado, como \\xE9 chique!\\n            <button type=\\\"button\\\" class=\\\"close\\\" data-dismiss=\\\"alert\\\" aria-label=\\\"Close\\\">\\n              <span aria-hidden=\\\"true\\\">&times;</span>\\n            </button>\\n          </div>\";\n            } else if (tipo == \"erro\") {\n                \"<div class=\\\"alert alert-danger alert-dismissible fade show\\\" role=\\\"alert\\\">\\n            <strong>\" + msg + \"</strong> Olha esse alerta animado, como \\xE9 chique!\\n            <button type=\\\"button\\\" class=\\\"close\\\" data-dismiss=\\\"alert\\\" aria-label=\\\"Close\\\">\\n              <span aria-hidden=\\\"true\\\">&times;</span>\\n            </button>\\n          </div>\";\n            }\n\n            divMsg.innerHTML = dados;\n        }\n    }, {\n        key: \"limparMsgAlert\",\n        value: function limparMsgAlert() {\n            divMsg.innerHTML = \"\";\n        }\n    }, {\n        key: \"registrarEvents\",\n        value: function registrarEvents() {\n            document.getElementById('btn-exibir-formulario').addEventListener(\"click\", function () {\n                objRequisicaoController.limparMsgAlert();\n                objRequisicaoController.ocultarElemento(\"listagem\");\n                objRequisicaoController.exibirElemento(\"formulario\");\n            });\n\n            document.getElementById('btn-cadastrar-requisicao').addEventListener(\"click\", function () {\n                event.preventDefault();\n                objRequisicaoController.limparMsgAlert();\n                if (formulario.id.value) {\n                    objRequisicaoController.editar(formulario);\n                } else {\n                    objRequisicaoController.adicionar(formulario);\n                }\n            });\n\n            document.getElementById('btn-cancelar-operacao').addEventListener(\"click\", function () {\n                objRequisicaoController.limparMsgAlert();\n                objRequisicaoController.limparCamposForm(formulario);\n                objRequisicaoController.ocultarElemento(\"formulario\");\n                objRequisicaoController.exibirElemento(\"listagem\");\n            });\n        }\n    }]);\n\n    return RequisicaoController;\n}();\n\nfunction main() {\n    objRequisicaoController = new RequisicaoController();\n    objRequisicaoController.ocultarElemento(\"formulario\");\n    objRequisicaoController.getTodosTable(divRequisicoes);\n    objRequisicaoController.registrarEvents();\n}\n\nwindow.onload = main;\n\n//# sourceURL=webpack:///./src/controllers/RequisicaoController.js?");

/***/ }),

/***/ "./src/models/requisicao/RequisicaoClass.js":
/*!**************************************************!*\
  !*** ./src/models/requisicao/RequisicaoClass.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar RequisicaoClass = function RequisicaoClass(id, descricao, detalhes) {\n    _classCallCheck(this, RequisicaoClass);\n\n    if (id != null) this.id_requisicao = id;\n    this.descricao = descricao;\n    this.detalhes = detalhes;\n};\n\nexports.default = RequisicaoClass;\n\n//# sourceURL=webpack:///./src/models/requisicao/RequisicaoClass.js?");

/***/ }),

/***/ "./src/models/requisicao/RequisicaoModel.js":
/*!**************************************************!*\
  !*** ./src/models/requisicao/RequisicaoModel.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _ConfigClass = __webpack_require__(/*! ../../ConfigClass */ \"./src/ConfigClass.js\");\n\nvar _ConfigClass2 = _interopRequireDefault(_ConfigClass);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar caminho = _ConfigClass2.default.getUrlApi().toString() + '/requisicao';\n\nvar RequisicaoModel = function () {\n    function RequisicaoModel() {\n        _classCallCheck(this, RequisicaoModel);\n    }\n\n    _createClass(RequisicaoModel, null, [{\n        key: 'getTodos',\n        value: function getTodos() {\n            return fetch(caminho).then(function (response) {\n                if (response.status >= 400) {\n                    throw new Error('erro server');\n                }\n                return response.json();\n            });\n        }\n    }, {\n        key: 'getId',\n        value: function getId(id) {\n            return fetch(caminho + '/' + id).then(function (response) {\n                if (response.status >= 400) {\n                    throw new Error('erro server');\n                }\n                return response.json();\n            });\n        }\n\n        //adiciona as requisiçoes \n\n    }, {\n        key: 'adicionar',\n        value: function adicionar(objRequisicaoClass) {\n            return fetch(caminho, {\n                headers: {\n                    'Accept': 'application/json',\n                    'Content-Type': 'application/json'\n                },\n                method: \"POST\",\n                body: JSON.stringify(objRequisicaoClass)\n            }).then(function (response) {\n                if (response.status >= 400) {\n                    throw new Error('erro server');\n                }\n                return response.json();\n            });\n        }\n    }, {\n        key: 'editar',\n        value: function editar(objRequisicaoClass) {\n            return fetch(caminho, {\n                headers: {\n                    'Accept': 'application/json',\n                    'Content-Type': 'application/json'\n                },\n                method: \"PUT\",\n                body: JSON.stringify(objRequisicaoClass)\n            }).then(function (response) {\n                if (response.status >= 400) {\n                    throw new Error('erro server');\n                }\n                return response.json();\n            });\n        }\n    }, {\n        key: 'deletar',\n        value: function deletar(id) {\n            return fetch(caminho + '/' + id, {\n                headers: {\n                    'Accept': 'application/json',\n                    'Content-Type': 'application/json'\n                },\n                method: \"DELETE\"\n            }).then(function (response) {\n                if (response.status >= 400) {\n                    throw new Error('erro server');\n                }\n                return response.json();\n            });\n        }\n    }]);\n\n    return RequisicaoModel;\n}();\n\nexports.default = RequisicaoModel;\n\n//# sourceURL=webpack:///./src/models/requisicao/RequisicaoModel.js?");

/***/ })

/******/ });