module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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

/***/ "./colors.json":
/*!*********************!*\
  !*** ./colors.json ***!
  \*********************/
/*! exports provided: 1C Enterprise, ABAP, ActionScript, Ada, Agda, AGS Script, Alloy, Alpine Abuild, AMPL, AngelScript, ANTLR, Apex, API Blueprint, APL, Apollo Guidance Computer, AppleScript, Arc, ASP, AspectJ, Assembly, Asymptote, ATS, Augeas, AutoHotkey, AutoIt, Awk, Ballerina, Batchfile, Befunge, Bison, BitBake, BlitzBasic, BlitzMax, Bluespec, Boo, Brainfuck, Brightscript, Bro, C, C#, C++, C2hs Haskell, Cap'n Proto, CartoCSS, Ceylon, Chapel, Charity, ChucK, Cirru, Clarion, Clean, Click, CLIPS, Clojure, CMake, COBOL, CoffeeScript, ColdFusion, ColdFusion CFC, Common Lisp, Common Workflow Language, Component Pascal, Cool, Coq, Crystal, Csound, Csound Document, Csound Score, CSS, Cuda, CWeb, Cycript, Cython, D, Dart, DataWeave, DIGITAL Command Language, DM, Dockerfile, Dogescript, DTrace, Dylan, E, eC, ECL, ECLiPSe, Eiffel, Elixir, Elm, Emacs Lisp, EmberScript, EQ, Erlang, F#, F*, Factor, Fancy, Fantom, Filebench WML, Filterscript, fish, FLUX, Forth, Fortran, FreeMarker, Frege, Game Maker Language, GAMS, GAP, GCC Machine Description, GDB, GDScript, Genie, Genshi, Gentoo Ebuild, Gentoo Eclass, Gherkin, GLSL, Glyph, Gnuplot, Go, Golo, Gosu, Grace, Grammatical Framework, Groovy, Groovy Server Pages, Hack, Harbour, Haskell, Haxe, HCL, HiveQL, HLSL, HTML, Hy, HyPhy, IDL, Idris, IGOR Pro, Inform 7, Inno Setup, Io, Ioke, Isabelle, Isabelle ROOT, J, Jasmin, Java, Java Server Pages, JavaScript, JFlex, Jison, Jison Lex, Jolie, JSONiq, Jsonnet, JSX, Julia, Jupyter Notebook, Kotlin, KRL, LabVIEW, Lasso, Lean, Lex, LFE, LilyPond, Limbo, Literate Agda, Literate CoffeeScript, Literate Haskell, LiveScript, LLVM, Logos, Logtalk, LOLCODE, LookML, LoomScript, LSL, Lua, M, M4, M4Sugar, Makefile, Mako, Mask, Mathematica, MATLAB, Max, MAXScript, mcfunction, Mercury, Meson, Metal, MiniD, Mirah, Modelica, Modula-2, Modula-3, Module Management System, Monkey, Moocode, MoonScript, MQL4, MQL5, MTML, MUF, mupad, Myghty, NCL, Nearley, Nemerle, nesC, NetLinx, NetLinx+ERB, NetLogo, NewLisp, Nextflow, Nim, Nit, Nix, NSIS, Nu, NumPy, Objective-C, Objective-C++, Objective-J, OCaml, Omgrofl, ooc, Opa, Opal, OpenCL, OpenEdge ABL, OpenRC runscript, OpenSCAD, Ox, Oxygene, Oz, P4, Pan, Papyrus, Parrot, Parrot Assembly, Parrot Internal Representation, Pascal, Pawn, Pep8, Perl, Perl 6, PHP, PicoLisp, PigLatin, Pike, PLpgSQL, PLSQL, PogoScript, Pony, PostScript, POV-Ray SDL, PowerBuilder, PowerShell, Processing, Prolog, Propeller Spin, Puppet, PureBasic, PureScript, Python, Python console, q, QMake, QML, Quake, R, Racket, Ragel, RAML, Rascal, REALbasic, Reason, Rebol, Red, Redcode, Ren'Py, RenderScript, REXX, Ring, RobotFramework, Roff, Rouge, RPC, Ruby, RUNOFF, Rust, Sage, SaltStack, SAS, Scala, Scheme, Scilab, sed, Self, ShaderLab, Shell, ShellSession, Shen, Slash, Slice, Smali, Smalltalk, Smarty, SMT, Solidity, SourcePawn, SQF, SQLPL, Squirrel, SRecode Template, Stan, Standard ML, Stata, SuperCollider, Swift, SystemVerilog, Tcl, Tcsh, Terra, TeX, Thrift, TI Program, TLA, Turing, TXL, TypeScript, Unified Parallel C, Unix Assembly, Uno, UnrealScript, UrWeb, Vala, VCL, Verilog, VHDL, Vim script, Visual Basic, Volt, Vue, wdl, WebAssembly, WebIDL, wisp, X10, xBase, XC, Xojo, XProc, XQuery, XS, XSLT, Xtend, Yacc, YARA, YASnippet, ZAP, Zephir, Zig, ZIL, Zimpl, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"1C Enterprise\":{\"color\":\"#814CCC\",\"url\":\"https://github.com/trending?l=1C-Enterprise\"},\"ABAP\":{\"color\":\"#E8274B\",\"url\":\"https://github.com/trending?l=ABAP\"},\"ActionScript\":{\"color\":\"#882B0F\",\"url\":\"https://github.com/trending?l=ActionScript\"},\"Ada\":{\"color\":\"#02f88c\",\"url\":\"https://github.com/trending?l=Ada\"},\"Agda\":{\"color\":\"#315665\",\"url\":\"https://github.com/trending?l=Agda\"},\"AGS Script\":{\"color\":\"#B9D9FF\",\"url\":\"https://github.com/trending?l=AGS-Script\"},\"Alloy\":{\"color\":\"#64C800\",\"url\":\"https://github.com/trending?l=Alloy\"},\"Alpine Abuild\":{\"color\":null,\"url\":\"https://github.com/trending?l=Alpine-Abuild\"},\"AMPL\":{\"color\":\"#E6EFBB\",\"url\":\"https://github.com/trending?l=AMPL\"},\"AngelScript\":{\"color\":\"#C7D7DC\",\"url\":\"https://github.com/trending?l=AngelScript\"},\"ANTLR\":{\"color\":\"#9DC3FF\",\"url\":\"https://github.com/trending?l=ANTLR\"},\"Apex\":{\"color\":null,\"url\":\"https://github.com/trending?l=Apex\"},\"API Blueprint\":{\"color\":\"#2ACCA8\",\"url\":\"https://github.com/trending?l=API-Blueprint\"},\"APL\":{\"color\":\"#5A8164\",\"url\":\"https://github.com/trending?l=APL\"},\"Apollo Guidance Computer\":{\"color\":null,\"url\":\"https://github.com/trending?l=Apollo-Guidance-Computer\"},\"AppleScript\":{\"color\":\"#101F1F\",\"url\":\"https://github.com/trending?l=AppleScript\"},\"Arc\":{\"color\":\"#aa2afe\",\"url\":\"https://github.com/trending?l=Arc\"},\"ASP\":{\"color\":\"#6a40fd\",\"url\":\"https://github.com/trending?l=ASP\"},\"AspectJ\":{\"color\":\"#a957b0\",\"url\":\"https://github.com/trending?l=AspectJ\"},\"Assembly\":{\"color\":\"#6E4C13\",\"url\":\"https://github.com/trending?l=Assembly\"},\"Asymptote\":{\"color\":\"#4a0c0c\",\"url\":\"https://github.com/trending?l=Asymptote\"},\"ATS\":{\"color\":\"#1ac620\",\"url\":\"https://github.com/trending?l=ATS\"},\"Augeas\":{\"color\":null,\"url\":\"https://github.com/trending?l=Augeas\"},\"AutoHotkey\":{\"color\":\"#6594b9\",\"url\":\"https://github.com/trending?l=AutoHotkey\"},\"AutoIt\":{\"color\":\"#1C3552\",\"url\":\"https://github.com/trending?l=AutoIt\"},\"Awk\":{\"color\":null,\"url\":\"https://github.com/trending?l=Awk\"},\"Ballerina\":{\"color\":\"#FF5000\",\"url\":\"https://github.com/trending?l=Ballerina\"},\"Batchfile\":{\"color\":\"#C1F12E\",\"url\":\"https://github.com/trending?l=Batchfile\"},\"Befunge\":{\"color\":null,\"url\":\"https://github.com/trending?l=Befunge\"},\"Bison\":{\"color\":null,\"url\":\"https://github.com/trending?l=Bison\"},\"BitBake\":{\"color\":null,\"url\":\"https://github.com/trending?l=BitBake\"},\"BlitzBasic\":{\"color\":null,\"url\":\"https://github.com/trending?l=BlitzBasic\"},\"BlitzMax\":{\"color\":\"#cd6400\",\"url\":\"https://github.com/trending?l=BlitzMax\"},\"Bluespec\":{\"color\":null,\"url\":\"https://github.com/trending?l=Bluespec\"},\"Boo\":{\"color\":\"#d4bec1\",\"url\":\"https://github.com/trending?l=Boo\"},\"Brainfuck\":{\"color\":\"#2F2530\",\"url\":\"https://github.com/trending?l=Brainfuck\"},\"Brightscript\":{\"color\":null,\"url\":\"https://github.com/trending?l=Brightscript\"},\"Bro\":{\"color\":null,\"url\":\"https://github.com/trending?l=Bro\"},\"C\":{\"color\":\"#555555\",\"url\":\"https://github.com/trending?l=C\"},\"C#\":{\"color\":\"#178600\",\"url\":\"https://github.com/trending?l=Csharp\"},\"C++\":{\"color\":\"#f34b7d\",\"url\":\"https://github.com/trending?l=C++\"},\"C2hs Haskell\":{\"color\":null,\"url\":\"https://github.com/trending?l=C2hs-Haskell\"},\"Cap'n Proto\":{\"color\":null,\"url\":\"https://github.com/trending?l=Cap'n-Proto\"},\"CartoCSS\":{\"color\":null,\"url\":\"https://github.com/trending?l=CartoCSS\"},\"Ceylon\":{\"color\":\"#dfa535\",\"url\":\"https://github.com/trending?l=Ceylon\"},\"Chapel\":{\"color\":\"#8dc63f\",\"url\":\"https://github.com/trending?l=Chapel\"},\"Charity\":{\"color\":null,\"url\":\"https://github.com/trending?l=Charity\"},\"ChucK\":{\"color\":null,\"url\":\"https://github.com/trending?l=ChucK\"},\"Cirru\":{\"color\":\"#ccccff\",\"url\":\"https://github.com/trending?l=Cirru\"},\"Clarion\":{\"color\":\"#db901e\",\"url\":\"https://github.com/trending?l=Clarion\"},\"Clean\":{\"color\":\"#3F85AF\",\"url\":\"https://github.com/trending?l=Clean\"},\"Click\":{\"color\":\"#E4E6F3\",\"url\":\"https://github.com/trending?l=Click\"},\"CLIPS\":{\"color\":null,\"url\":\"https://github.com/trending?l=CLIPS\"},\"Clojure\":{\"color\":\"#db5855\",\"url\":\"https://github.com/trending?l=Clojure\"},\"CMake\":{\"color\":null,\"url\":\"https://github.com/trending?l=CMake\"},\"COBOL\":{\"color\":null,\"url\":\"https://github.com/trending?l=COBOL\"},\"CoffeeScript\":{\"color\":\"#244776\",\"url\":\"https://github.com/trending?l=CoffeeScript\"},\"ColdFusion\":{\"color\":\"#ed2cd6\",\"url\":\"https://github.com/trending?l=ColdFusion\"},\"ColdFusion CFC\":{\"color\":null,\"url\":\"https://github.com/trending?l=ColdFusion-CFC\"},\"Common Lisp\":{\"color\":\"#3fb68b\",\"url\":\"https://github.com/trending?l=Common-Lisp\"},\"Common Workflow Language\":{\"color\":\"#B5314C\",\"url\":\"https://github.com/trending?l=Common-Workflow-Language\"},\"Component Pascal\":{\"color\":\"#B0CE4E\",\"url\":\"https://github.com/trending?l=Component-Pascal\"},\"Cool\":{\"color\":null,\"url\":\"https://github.com/trending?l=Cool\"},\"Coq\":{\"color\":null,\"url\":\"https://github.com/trending?l=Coq\"},\"Crystal\":{\"color\":\"#000100\",\"url\":\"https://github.com/trending?l=Crystal\"},\"Csound\":{\"color\":null,\"url\":\"https://github.com/trending?l=Csound\"},\"Csound Document\":{\"color\":null,\"url\":\"https://github.com/trending?l=Csound-Document\"},\"Csound Score\":{\"color\":null,\"url\":\"https://github.com/trending?l=Csound-Score\"},\"CSS\":{\"color\":\"#563d7c\",\"url\":\"https://github.com/trending?l=CSS\"},\"Cuda\":{\"color\":\"#3A4E3A\",\"url\":\"https://github.com/trending?l=Cuda\"},\"CWeb\":{\"color\":null,\"url\":\"https://github.com/trending?l=CWeb\"},\"Cycript\":{\"color\":null,\"url\":\"https://github.com/trending?l=Cycript\"},\"Cython\":{\"color\":null,\"url\":\"https://github.com/trending?l=Cython\"},\"D\":{\"color\":\"#ba595e\",\"url\":\"https://github.com/trending?l=D\"},\"Dart\":{\"color\":\"#00B4AB\",\"url\":\"https://github.com/trending?l=Dart\"},\"DataWeave\":{\"color\":\"#003a52\",\"url\":\"https://github.com/trending?l=DataWeave\"},\"DIGITAL Command Language\":{\"color\":null,\"url\":\"https://github.com/trending?l=DIGITAL-Command-Language\"},\"DM\":{\"color\":\"#447265\",\"url\":\"https://github.com/trending?l=DM\"},\"Dockerfile\":{\"color\":\"#384d54\",\"url\":\"https://github.com/trending?l=Dockerfile\"},\"Dogescript\":{\"color\":\"#cca760\",\"url\":\"https://github.com/trending?l=Dogescript\"},\"DTrace\":{\"color\":null,\"url\":\"https://github.com/trending?l=DTrace\"},\"Dylan\":{\"color\":\"#6c616e\",\"url\":\"https://github.com/trending?l=Dylan\"},\"E\":{\"color\":\"#ccce35\",\"url\":\"https://github.com/trending?l=E\"},\"eC\":{\"color\":\"#913960\",\"url\":\"https://github.com/trending?l=eC\"},\"ECL\":{\"color\":\"#8a1267\",\"url\":\"https://github.com/trending?l=ECL\"},\"ECLiPSe\":{\"color\":null,\"url\":\"https://github.com/trending?l=ECLiPSe\"},\"Eiffel\":{\"color\":\"#946d57\",\"url\":\"https://github.com/trending?l=Eiffel\"},\"Elixir\":{\"color\":\"#6e4a7e\",\"url\":\"https://github.com/trending?l=Elixir\"},\"Elm\":{\"color\":\"#60B5CC\",\"url\":\"https://github.com/trending?l=Elm\"},\"Emacs Lisp\":{\"color\":\"#c065db\",\"url\":\"https://github.com/trending?l=Emacs-Lisp\"},\"EmberScript\":{\"color\":\"#FFF4F3\",\"url\":\"https://github.com/trending?l=EmberScript\"},\"EQ\":{\"color\":\"#a78649\",\"url\":\"https://github.com/trending?l=EQ\"},\"Erlang\":{\"color\":\"#B83998\",\"url\":\"https://github.com/trending?l=Erlang\"},\"F#\":{\"color\":\"#b845fc\",\"url\":\"https://github.com/trending?l=Fsharp\"},\"F*\":{\"color\":\"#572e30\",\"url\":\"https://github.com/trending?l=F*\"},\"Factor\":{\"color\":\"#636746\",\"url\":\"https://github.com/trending?l=Factor\"},\"Fancy\":{\"color\":\"#7b9db4\",\"url\":\"https://github.com/trending?l=Fancy\"},\"Fantom\":{\"color\":\"#14253c\",\"url\":\"https://github.com/trending?l=Fantom\"},\"Filebench WML\":{\"color\":null,\"url\":\"https://github.com/trending?l=Filebench-WML\"},\"Filterscript\":{\"color\":null,\"url\":\"https://github.com/trending?l=Filterscript\"},\"fish\":{\"color\":null,\"url\":\"https://github.com/trending?l=fish\"},\"FLUX\":{\"color\":\"#88ccff\",\"url\":\"https://github.com/trending?l=FLUX\"},\"Forth\":{\"color\":\"#341708\",\"url\":\"https://github.com/trending?l=Forth\"},\"Fortran\":{\"color\":\"#4d41b1\",\"url\":\"https://github.com/trending?l=Fortran\"},\"FreeMarker\":{\"color\":\"#0050b2\",\"url\":\"https://github.com/trending?l=FreeMarker\"},\"Frege\":{\"color\":\"#00cafe\",\"url\":\"https://github.com/trending?l=Frege\"},\"Game Maker Language\":{\"color\":\"#71b417\",\"url\":\"https://github.com/trending?l=Game-Maker-Language\"},\"GAMS\":{\"color\":null,\"url\":\"https://github.com/trending?l=GAMS\"},\"GAP\":{\"color\":null,\"url\":\"https://github.com/trending?l=GAP\"},\"GCC Machine Description\":{\"color\":null,\"url\":\"https://github.com/trending?l=GCC-Machine-Description\"},\"GDB\":{\"color\":null,\"url\":\"https://github.com/trending?l=GDB\"},\"GDScript\":{\"color\":\"#355570\",\"url\":\"https://github.com/trending?l=GDScript\"},\"Genie\":{\"color\":\"#fb855d\",\"url\":\"https://github.com/trending?l=Genie\"},\"Genshi\":{\"color\":null,\"url\":\"https://github.com/trending?l=Genshi\"},\"Gentoo Ebuild\":{\"color\":null,\"url\":\"https://github.com/trending?l=Gentoo-Ebuild\"},\"Gentoo Eclass\":{\"color\":null,\"url\":\"https://github.com/trending?l=Gentoo-Eclass\"},\"Gherkin\":{\"color\":\"#5B2063\",\"url\":\"https://github.com/trending?l=Gherkin\"},\"GLSL\":{\"color\":null,\"url\":\"https://github.com/trending?l=GLSL\"},\"Glyph\":{\"color\":\"#c1ac7f\",\"url\":\"https://github.com/trending?l=Glyph\"},\"Gnuplot\":{\"color\":\"#f0a9f0\",\"url\":\"https://github.com/trending?l=Gnuplot\"},\"Go\":{\"color\":\"#00ADD8\",\"url\":\"https://github.com/trending?l=Go\"},\"Golo\":{\"color\":\"#88562A\",\"url\":\"https://github.com/trending?l=Golo\"},\"Gosu\":{\"color\":\"#82937f\",\"url\":\"https://github.com/trending?l=Gosu\"},\"Grace\":{\"color\":null,\"url\":\"https://github.com/trending?l=Grace\"},\"Grammatical Framework\":{\"color\":\"#79aa7a\",\"url\":\"https://github.com/trending?l=Grammatical-Framework\"},\"Groovy\":{\"color\":\"#e69f56\",\"url\":\"https://github.com/trending?l=Groovy\"},\"Groovy Server Pages\":{\"color\":null,\"url\":\"https://github.com/trending?l=Groovy-Server-Pages\"},\"Hack\":{\"color\":\"#878787\",\"url\":\"https://github.com/trending?l=Hack\"},\"Harbour\":{\"color\":\"#0e60e3\",\"url\":\"https://github.com/trending?l=Harbour\"},\"Haskell\":{\"color\":\"#5e5086\",\"url\":\"https://github.com/trending?l=Haskell\"},\"Haxe\":{\"color\":\"#df7900\",\"url\":\"https://github.com/trending?l=Haxe\"},\"HCL\":{\"color\":null,\"url\":\"https://github.com/trending?l=HCL\"},\"HiveQL\":{\"color\":\"#dce200\",\"url\":\"https://github.com/trending?l=HiveQL\"},\"HLSL\":{\"color\":null,\"url\":\"https://github.com/trending?l=HLSL\"},\"HTML\":{\"color\":\"#e34c26\",\"url\":\"https://github.com/trending?l=HTML\"},\"Hy\":{\"color\":\"#7790B2\",\"url\":\"https://github.com/trending?l=Hy\"},\"HyPhy\":{\"color\":null,\"url\":\"https://github.com/trending?l=HyPhy\"},\"IDL\":{\"color\":\"#a3522f\",\"url\":\"https://github.com/trending?l=IDL\"},\"Idris\":{\"color\":\"#b30000\",\"url\":\"https://github.com/trending?l=Idris\"},\"IGOR Pro\":{\"color\":null,\"url\":\"https://github.com/trending?l=IGOR-Pro\"},\"Inform 7\":{\"color\":null,\"url\":\"https://github.com/trending?l=Inform-7\"},\"Inno Setup\":{\"color\":null,\"url\":\"https://github.com/trending?l=Inno-Setup\"},\"Io\":{\"color\":\"#a9188d\",\"url\":\"https://github.com/trending?l=Io\"},\"Ioke\":{\"color\":\"#078193\",\"url\":\"https://github.com/trending?l=Ioke\"},\"Isabelle\":{\"color\":\"#FEFE00\",\"url\":\"https://github.com/trending?l=Isabelle\"},\"Isabelle ROOT\":{\"color\":null,\"url\":\"https://github.com/trending?l=Isabelle-ROOT\"},\"J\":{\"color\":\"#9EEDFF\",\"url\":\"https://github.com/trending?l=J\"},\"Jasmin\":{\"color\":null,\"url\":\"https://github.com/trending?l=Jasmin\"},\"Java\":{\"color\":\"#b07219\",\"url\":\"https://github.com/trending?l=Java\"},\"Java Server Pages\":{\"color\":null,\"url\":\"https://github.com/trending?l=Java-Server-Pages\"},\"JavaScript\":{\"color\":\"#f1e05a\",\"url\":\"https://github.com/trending?l=JavaScript\"},\"JFlex\":{\"color\":null,\"url\":\"https://github.com/trending?l=JFlex\"},\"Jison\":{\"color\":null,\"url\":\"https://github.com/trending?l=Jison\"},\"Jison Lex\":{\"color\":null,\"url\":\"https://github.com/trending?l=Jison-Lex\"},\"Jolie\":{\"color\":\"#843179\",\"url\":\"https://github.com/trending?l=Jolie\"},\"JSONiq\":{\"color\":\"#40d47e\",\"url\":\"https://github.com/trending?l=JSONiq\"},\"Jsonnet\":{\"color\":\"#0064bd\",\"url\":\"https://github.com/trending?l=Jsonnet\"},\"JSX\":{\"color\":null,\"url\":\"https://github.com/trending?l=JSX\"},\"Julia\":{\"color\":\"#a270ba\",\"url\":\"https://github.com/trending?l=Julia\"},\"Jupyter Notebook\":{\"color\":\"#DA5B0B\",\"url\":\"https://github.com/trending?l=Jupyter-Notebook\"},\"Kotlin\":{\"color\":\"#F18E33\",\"url\":\"https://github.com/trending?l=Kotlin\"},\"KRL\":{\"color\":\"#28430A\",\"url\":\"https://github.com/trending?l=KRL\"},\"LabVIEW\":{\"color\":null,\"url\":\"https://github.com/trending?l=LabVIEW\"},\"Lasso\":{\"color\":\"#999999\",\"url\":\"https://github.com/trending?l=Lasso\"},\"Lean\":{\"color\":null,\"url\":\"https://github.com/trending?l=Lean\"},\"Lex\":{\"color\":\"#DBCA00\",\"url\":\"https://github.com/trending?l=Lex\"},\"LFE\":{\"color\":\"#4C3023\",\"url\":\"https://github.com/trending?l=LFE\"},\"LilyPond\":{\"color\":null,\"url\":\"https://github.com/trending?l=LilyPond\"},\"Limbo\":{\"color\":null,\"url\":\"https://github.com/trending?l=Limbo\"},\"Literate Agda\":{\"color\":null,\"url\":\"https://github.com/trending?l=Literate-Agda\"},\"Literate CoffeeScript\":{\"color\":null,\"url\":\"https://github.com/trending?l=Literate-CoffeeScript\"},\"Literate Haskell\":{\"color\":null,\"url\":\"https://github.com/trending?l=Literate-Haskell\"},\"LiveScript\":{\"color\":\"#499886\",\"url\":\"https://github.com/trending?l=LiveScript\"},\"LLVM\":{\"color\":\"#185619\",\"url\":\"https://github.com/trending?l=LLVM\"},\"Logos\":{\"color\":null,\"url\":\"https://github.com/trending?l=Logos\"},\"Logtalk\":{\"color\":null,\"url\":\"https://github.com/trending?l=Logtalk\"},\"LOLCODE\":{\"color\":\"#cc9900\",\"url\":\"https://github.com/trending?l=LOLCODE\"},\"LookML\":{\"color\":\"#652B81\",\"url\":\"https://github.com/trending?l=LookML\"},\"LoomScript\":{\"color\":null,\"url\":\"https://github.com/trending?l=LoomScript\"},\"LSL\":{\"color\":\"#3d9970\",\"url\":\"https://github.com/trending?l=LSL\"},\"Lua\":{\"color\":\"#000080\",\"url\":\"https://github.com/trending?l=Lua\"},\"M\":{\"color\":null,\"url\":\"https://github.com/trending?l=M\"},\"M4\":{\"color\":null,\"url\":\"https://github.com/trending?l=M4\"},\"M4Sugar\":{\"color\":null,\"url\":\"https://github.com/trending?l=M4Sugar\"},\"Makefile\":{\"color\":\"#427819\",\"url\":\"https://github.com/trending?l=Makefile\"},\"Mako\":{\"color\":null,\"url\":\"https://github.com/trending?l=Mako\"},\"Mask\":{\"color\":\"#f97732\",\"url\":\"https://github.com/trending?l=Mask\"},\"Mathematica\":{\"color\":null,\"url\":\"https://github.com/trending?l=Mathematica\"},\"MATLAB\":{\"color\":\"#e16737\",\"url\":\"https://github.com/trending?l=MATLAB\"},\"Max\":{\"color\":\"#c4a79c\",\"url\":\"https://github.com/trending?l=Max\"},\"MAXScript\":{\"color\":\"#00a6a6\",\"url\":\"https://github.com/trending?l=MAXScript\"},\"mcfunction\":{\"color\":\"#E22837\",\"url\":\"https://github.com/trending?l=mcfunction\"},\"Mercury\":{\"color\":\"#ff2b2b\",\"url\":\"https://github.com/trending?l=Mercury\"},\"Meson\":{\"color\":\"#007800\",\"url\":\"https://github.com/trending?l=Meson\"},\"Metal\":{\"color\":\"#8f14e9\",\"url\":\"https://github.com/trending?l=Metal\"},\"MiniD\":{\"color\":null,\"url\":\"https://github.com/trending?l=MiniD\"},\"Mirah\":{\"color\":\"#c7a938\",\"url\":\"https://github.com/trending?l=Mirah\"},\"Modelica\":{\"color\":null,\"url\":\"https://github.com/trending?l=Modelica\"},\"Modula-2\":{\"color\":null,\"url\":\"https://github.com/trending?l=Modula-2\"},\"Modula-3\":{\"color\":\"#223388\",\"url\":\"https://github.com/trending?l=Modula-3\"},\"Module Management System\":{\"color\":null,\"url\":\"https://github.com/trending?l=Module-Management-System\"},\"Monkey\":{\"color\":null,\"url\":\"https://github.com/trending?l=Monkey\"},\"Moocode\":{\"color\":null,\"url\":\"https://github.com/trending?l=Moocode\"},\"MoonScript\":{\"color\":null,\"url\":\"https://github.com/trending?l=MoonScript\"},\"MQL4\":{\"color\":\"#62A8D6\",\"url\":\"https://github.com/trending?l=MQL4\"},\"MQL5\":{\"color\":\"#4A76B8\",\"url\":\"https://github.com/trending?l=MQL5\"},\"MTML\":{\"color\":\"#b7e1f4\",\"url\":\"https://github.com/trending?l=MTML\"},\"MUF\":{\"color\":null,\"url\":\"https://github.com/trending?l=MUF\"},\"mupad\":{\"color\":null,\"url\":\"https://github.com/trending?l=mupad\"},\"Myghty\":{\"color\":null,\"url\":\"https://github.com/trending?l=Myghty\"},\"NCL\":{\"color\":\"#28431f\",\"url\":\"https://github.com/trending?l=NCL\"},\"Nearley\":{\"color\":\"#990000\",\"url\":\"https://github.com/trending?l=Nearley\"},\"Nemerle\":{\"color\":\"#3d3c6e\",\"url\":\"https://github.com/trending?l=Nemerle\"},\"nesC\":{\"color\":\"#94B0C7\",\"url\":\"https://github.com/trending?l=nesC\"},\"NetLinx\":{\"color\":\"#0aa0ff\",\"url\":\"https://github.com/trending?l=NetLinx\"},\"NetLinx+ERB\":{\"color\":\"#747faa\",\"url\":\"https://github.com/trending?l=NetLinx+ERB\"},\"NetLogo\":{\"color\":\"#ff6375\",\"url\":\"https://github.com/trending?l=NetLogo\"},\"NewLisp\":{\"color\":\"#87AED7\",\"url\":\"https://github.com/trending?l=NewLisp\"},\"Nextflow\":{\"color\":\"#3ac486\",\"url\":\"https://github.com/trending?l=Nextflow\"},\"Nim\":{\"color\":\"#37775b\",\"url\":\"https://github.com/trending?l=Nim\"},\"Nit\":{\"color\":\"#009917\",\"url\":\"https://github.com/trending?l=Nit\"},\"Nix\":{\"color\":\"#7e7eff\",\"url\":\"https://github.com/trending?l=Nix\"},\"NSIS\":{\"color\":null,\"url\":\"https://github.com/trending?l=NSIS\"},\"Nu\":{\"color\":\"#c9df40\",\"url\":\"https://github.com/trending?l=Nu\"},\"NumPy\":{\"color\":null,\"url\":\"https://github.com/trending?l=NumPy\"},\"Objective-C\":{\"color\":\"#438eff\",\"url\":\"https://github.com/trending?l=Objective-C\"},\"Objective-C++\":{\"color\":\"#6866fb\",\"url\":\"https://github.com/trending?l=Objective-C++\"},\"Objective-J\":{\"color\":\"#ff0c5a\",\"url\":\"https://github.com/trending?l=Objective-J\"},\"OCaml\":{\"color\":\"#3be133\",\"url\":\"https://github.com/trending?l=OCaml\"},\"Omgrofl\":{\"color\":\"#cabbff\",\"url\":\"https://github.com/trending?l=Omgrofl\"},\"ooc\":{\"color\":\"#b0b77e\",\"url\":\"https://github.com/trending?l=ooc\"},\"Opa\":{\"color\":null,\"url\":\"https://github.com/trending?l=Opa\"},\"Opal\":{\"color\":\"#f7ede0\",\"url\":\"https://github.com/trending?l=Opal\"},\"OpenCL\":{\"color\":null,\"url\":\"https://github.com/trending?l=OpenCL\"},\"OpenEdge ABL\":{\"color\":null,\"url\":\"https://github.com/trending?l=OpenEdge-ABL\"},\"OpenRC runscript\":{\"color\":null,\"url\":\"https://github.com/trending?l=OpenRC-runscript\"},\"OpenSCAD\":{\"color\":null,\"url\":\"https://github.com/trending?l=OpenSCAD\"},\"Ox\":{\"color\":null,\"url\":\"https://github.com/trending?l=Ox\"},\"Oxygene\":{\"color\":\"#cdd0e3\",\"url\":\"https://github.com/trending?l=Oxygene\"},\"Oz\":{\"color\":\"#fab738\",\"url\":\"https://github.com/trending?l=Oz\"},\"P4\":{\"color\":\"#7055b5\",\"url\":\"https://github.com/trending?l=P4\"},\"Pan\":{\"color\":\"#cc0000\",\"url\":\"https://github.com/trending?l=Pan\"},\"Papyrus\":{\"color\":\"#6600cc\",\"url\":\"https://github.com/trending?l=Papyrus\"},\"Parrot\":{\"color\":\"#f3ca0a\",\"url\":\"https://github.com/trending?l=Parrot\"},\"Parrot Assembly\":{\"color\":null,\"url\":\"https://github.com/trending?l=Parrot-Assembly\"},\"Parrot Internal Representation\":{\"color\":null,\"url\":\"https://github.com/trending?l=Parrot-Internal-Representation\"},\"Pascal\":{\"color\":\"#E3F171\",\"url\":\"https://github.com/trending?l=Pascal\"},\"Pawn\":{\"color\":\"#dbb284\",\"url\":\"https://github.com/trending?l=Pawn\"},\"Pep8\":{\"color\":\"#C76F5B\",\"url\":\"https://github.com/trending?l=Pep8\"},\"Perl\":{\"color\":\"#0298c3\",\"url\":\"https://github.com/trending?l=Perl\"},\"Perl 6\":{\"color\":\"#0000fb\",\"url\":\"https://github.com/trending?l=Perl-6\"},\"PHP\":{\"color\":\"#4F5D95\",\"url\":\"https://github.com/trending?l=PHP\"},\"PicoLisp\":{\"color\":null,\"url\":\"https://github.com/trending?l=PicoLisp\"},\"PigLatin\":{\"color\":\"#fcd7de\",\"url\":\"https://github.com/trending?l=PigLatin\"},\"Pike\":{\"color\":\"#005390\",\"url\":\"https://github.com/trending?l=Pike\"},\"PLpgSQL\":{\"color\":null,\"url\":\"https://github.com/trending?l=PLpgSQL\"},\"PLSQL\":{\"color\":\"#dad8d8\",\"url\":\"https://github.com/trending?l=PLSQL\"},\"PogoScript\":{\"color\":\"#d80074\",\"url\":\"https://github.com/trending?l=PogoScript\"},\"Pony\":{\"color\":null,\"url\":\"https://github.com/trending?l=Pony\"},\"PostScript\":{\"color\":\"#da291c\",\"url\":\"https://github.com/trending?l=PostScript\"},\"POV-Ray SDL\":{\"color\":null,\"url\":\"https://github.com/trending?l=POV-Ray-SDL\"},\"PowerBuilder\":{\"color\":\"#8f0f8d\",\"url\":\"https://github.com/trending?l=PowerBuilder\"},\"PowerShell\":{\"color\":\"#012456\",\"url\":\"https://github.com/trending?l=PowerShell\"},\"Processing\":{\"color\":\"#0096D8\",\"url\":\"https://github.com/trending?l=Processing\"},\"Prolog\":{\"color\":\"#74283c\",\"url\":\"https://github.com/trending?l=Prolog\"},\"Propeller Spin\":{\"color\":\"#7fa2a7\",\"url\":\"https://github.com/trending?l=Propeller-Spin\"},\"Puppet\":{\"color\":\"#302B6D\",\"url\":\"https://github.com/trending?l=Puppet\"},\"PureBasic\":{\"color\":\"#5a6986\",\"url\":\"https://github.com/trending?l=PureBasic\"},\"PureScript\":{\"color\":\"#1D222D\",\"url\":\"https://github.com/trending?l=PureScript\"},\"Python\":{\"color\":\"#3572A5\",\"url\":\"https://github.com/trending?l=Python\"},\"Python console\":{\"color\":null,\"url\":\"https://github.com/trending?l=Python-console\"},\"q\":{\"color\":\"#0040cd\",\"url\":\"https://github.com/trending?l=q\"},\"QMake\":{\"color\":null,\"url\":\"https://github.com/trending?l=QMake\"},\"QML\":{\"color\":\"#44a51c\",\"url\":\"https://github.com/trending?l=QML\"},\"Quake\":{\"color\":\"#882233\",\"url\":\"https://github.com/trending?l=Quake\"},\"R\":{\"color\":\"#198CE7\",\"url\":\"https://github.com/trending?l=R\"},\"Racket\":{\"color\":\"#3c5caa\",\"url\":\"https://github.com/trending?l=Racket\"},\"Ragel\":{\"color\":\"#9d5200\",\"url\":\"https://github.com/trending?l=Ragel\"},\"RAML\":{\"color\":\"#77d9fb\",\"url\":\"https://github.com/trending?l=RAML\"},\"Rascal\":{\"color\":\"#fffaa0\",\"url\":\"https://github.com/trending?l=Rascal\"},\"REALbasic\":{\"color\":null,\"url\":\"https://github.com/trending?l=REALbasic\"},\"Reason\":{\"color\":null,\"url\":\"https://github.com/trending?l=Reason\"},\"Rebol\":{\"color\":\"#358a5b\",\"url\":\"https://github.com/trending?l=Rebol\"},\"Red\":{\"color\":\"#f50000\",\"url\":\"https://github.com/trending?l=Red\"},\"Redcode\":{\"color\":null,\"url\":\"https://github.com/trending?l=Redcode\"},\"Ren'Py\":{\"color\":\"#ff7f7f\",\"url\":\"https://github.com/trending?l=Ren'Py\"},\"RenderScript\":{\"color\":null,\"url\":\"https://github.com/trending?l=RenderScript\"},\"REXX\":{\"color\":null,\"url\":\"https://github.com/trending?l=REXX\"},\"Ring\":{\"color\":\"#2D54CB\",\"url\":\"https://github.com/trending?l=Ring\"},\"RobotFramework\":{\"color\":null,\"url\":\"https://github.com/trending?l=RobotFramework\"},\"Roff\":{\"color\":\"#ecdebe\",\"url\":\"https://github.com/trending?l=Roff\"},\"Rouge\":{\"color\":\"#cc0088\",\"url\":\"https://github.com/trending?l=Rouge\"},\"RPC\":{\"color\":null,\"url\":\"https://github.com/trending?l=RPC\"},\"Ruby\":{\"color\":\"#701516\",\"url\":\"https://github.com/trending?l=Ruby\"},\"RUNOFF\":{\"color\":\"#665a4e\",\"url\":\"https://github.com/trending?l=RUNOFF\"},\"Rust\":{\"color\":\"#dea584\",\"url\":\"https://github.com/trending?l=Rust\"},\"Sage\":{\"color\":null,\"url\":\"https://github.com/trending?l=Sage\"},\"SaltStack\":{\"color\":\"#646464\",\"url\":\"https://github.com/trending?l=SaltStack\"},\"SAS\":{\"color\":\"#B34936\",\"url\":\"https://github.com/trending?l=SAS\"},\"Scala\":{\"color\":\"#c22d40\",\"url\":\"https://github.com/trending?l=Scala\"},\"Scheme\":{\"color\":\"#1e4aec\",\"url\":\"https://github.com/trending?l=Scheme\"},\"Scilab\":{\"color\":null,\"url\":\"https://github.com/trending?l=Scilab\"},\"sed\":{\"color\":\"#64b970\",\"url\":\"https://github.com/trending?l=sed\"},\"Self\":{\"color\":\"#0579aa\",\"url\":\"https://github.com/trending?l=Self\"},\"ShaderLab\":{\"color\":null,\"url\":\"https://github.com/trending?l=ShaderLab\"},\"Shell\":{\"color\":\"#89e051\",\"url\":\"https://github.com/trending?l=Shell\"},\"ShellSession\":{\"color\":null,\"url\":\"https://github.com/trending?l=ShellSession\"},\"Shen\":{\"color\":\"#120F14\",\"url\":\"https://github.com/trending?l=Shen\"},\"Slash\":{\"color\":\"#007eff\",\"url\":\"https://github.com/trending?l=Slash\"},\"Slice\":{\"color\":\"#003fa2\",\"url\":\"https://github.com/trending?l=Slice\"},\"Smali\":{\"color\":null,\"url\":\"https://github.com/trending?l=Smali\"},\"Smalltalk\":{\"color\":\"#596706\",\"url\":\"https://github.com/trending?l=Smalltalk\"},\"Smarty\":{\"color\":null,\"url\":\"https://github.com/trending?l=Smarty\"},\"SMT\":{\"color\":null,\"url\":\"https://github.com/trending?l=SMT\"},\"Solidity\":{\"color\":\"#AA6746\",\"url\":\"https://github.com/trending?l=Solidity\"},\"SourcePawn\":{\"color\":\"#5c7611\",\"url\":\"https://github.com/trending?l=SourcePawn\"},\"SQF\":{\"color\":\"#3F3F3F\",\"url\":\"https://github.com/trending?l=SQF\"},\"SQLPL\":{\"color\":null,\"url\":\"https://github.com/trending?l=SQLPL\"},\"Squirrel\":{\"color\":\"#800000\",\"url\":\"https://github.com/trending?l=Squirrel\"},\"SRecode Template\":{\"color\":\"#348a34\",\"url\":\"https://github.com/trending?l=SRecode-Template\"},\"Stan\":{\"color\":\"#b2011d\",\"url\":\"https://github.com/trending?l=Stan\"},\"Standard ML\":{\"color\":\"#dc566d\",\"url\":\"https://github.com/trending?l=Standard-ML\"},\"Stata\":{\"color\":null,\"url\":\"https://github.com/trending?l=Stata\"},\"SuperCollider\":{\"color\":\"#46390b\",\"url\":\"https://github.com/trending?l=SuperCollider\"},\"Swift\":{\"color\":\"#ffac45\",\"url\":\"https://github.com/trending?l=Swift\"},\"SystemVerilog\":{\"color\":\"#DAE1C2\",\"url\":\"https://github.com/trending?l=SystemVerilog\"},\"Tcl\":{\"color\":\"#e4cc98\",\"url\":\"https://github.com/trending?l=Tcl\"},\"Tcsh\":{\"color\":null,\"url\":\"https://github.com/trending?l=Tcsh\"},\"Terra\":{\"color\":\"#00004c\",\"url\":\"https://github.com/trending?l=Terra\"},\"TeX\":{\"color\":\"#3D6117\",\"url\":\"https://github.com/trending?l=TeX\"},\"Thrift\":{\"color\":null,\"url\":\"https://github.com/trending?l=Thrift\"},\"TI Program\":{\"color\":\"#A0AA87\",\"url\":\"https://github.com/trending?l=TI-Program\"},\"TLA\":{\"color\":null,\"url\":\"https://github.com/trending?l=TLA\"},\"Turing\":{\"color\":\"#cf142b\",\"url\":\"https://github.com/trending?l=Turing\"},\"TXL\":{\"color\":null,\"url\":\"https://github.com/trending?l=TXL\"},\"TypeScript\":{\"color\":\"#2b7489\",\"url\":\"https://github.com/trending?l=TypeScript\"},\"Unified Parallel C\":{\"color\":null,\"url\":\"https://github.com/trending?l=Unified-Parallel-C\"},\"Unix Assembly\":{\"color\":null,\"url\":\"https://github.com/trending?l=Unix-Assembly\"},\"Uno\":{\"color\":null,\"url\":\"https://github.com/trending?l=Uno\"},\"UnrealScript\":{\"color\":\"#a54c4d\",\"url\":\"https://github.com/trending?l=UnrealScript\"},\"UrWeb\":{\"color\":null,\"url\":\"https://github.com/trending?l=UrWeb\"},\"Vala\":{\"color\":\"#fbe5cd\",\"url\":\"https://github.com/trending?l=Vala\"},\"VCL\":{\"color\":\"#148AA8\",\"url\":\"https://github.com/trending?l=VCL\"},\"Verilog\":{\"color\":\"#b2b7f8\",\"url\":\"https://github.com/trending?l=Verilog\"},\"VHDL\":{\"color\":\"#adb2cb\",\"url\":\"https://github.com/trending?l=VHDL\"},\"Vim script\":{\"color\":\"#199f4b\",\"url\":\"https://github.com/trending?l=Vim-script\"},\"Visual Basic\":{\"color\":\"#945db7\",\"url\":\"https://github.com/trending?l=Visual-Basic\"},\"Volt\":{\"color\":\"#1F1F1F\",\"url\":\"https://github.com/trending?l=Volt\"},\"Vue\":{\"color\":\"#2c3e50\",\"url\":\"https://github.com/trending?l=Vue\"},\"wdl\":{\"color\":\"#42f1f4\",\"url\":\"https://github.com/trending?l=wdl\"},\"WebAssembly\":{\"color\":\"#04133b\",\"url\":\"https://github.com/trending?l=WebAssembly\"},\"WebIDL\":{\"color\":null,\"url\":\"https://github.com/trending?l=WebIDL\"},\"wisp\":{\"color\":\"#7582D1\",\"url\":\"https://github.com/trending?l=wisp\"},\"X10\":{\"color\":\"#4B6BEF\",\"url\":\"https://github.com/trending?l=X10\"},\"xBase\":{\"color\":\"#403a40\",\"url\":\"https://github.com/trending?l=xBase\"},\"XC\":{\"color\":\"#99DA07\",\"url\":\"https://github.com/trending?l=XC\"},\"Xojo\":{\"color\":null,\"url\":\"https://github.com/trending?l=Xojo\"},\"XProc\":{\"color\":null,\"url\":\"https://github.com/trending?l=XProc\"},\"XQuery\":{\"color\":\"#5232e7\",\"url\":\"https://github.com/trending?l=XQuery\"},\"XS\":{\"color\":null,\"url\":\"https://github.com/trending?l=XS\"},\"XSLT\":{\"color\":\"#EB8CEB\",\"url\":\"https://github.com/trending?l=XSLT\"},\"Xtend\":{\"color\":null,\"url\":\"https://github.com/trending?l=Xtend\"},\"Yacc\":{\"color\":\"#4B6C4B\",\"url\":\"https://github.com/trending?l=Yacc\"},\"YARA\":{\"color\":\"#220000\",\"url\":\"https://github.com/trending?l=YARA\"},\"YASnippet\":{\"color\":\"#32AB90\",\"url\":\"https://github.com/trending?l=YASnippet\"},\"ZAP\":{\"color\":\"#0d665e\",\"url\":\"https://github.com/trending?l=ZAP\"},\"Zephir\":{\"color\":\"#118f9e\",\"url\":\"https://github.com/trending?l=Zephir\"},\"Zig\":{\"color\":\"#ec915c\",\"url\":\"https://github.com/trending?l=Zig\"},\"ZIL\":{\"color\":\"#dc75e5\",\"url\":\"https://github.com/trending?l=ZIL\"},\"Zimpl\":{\"color\":null,\"url\":\"https://github.com/trending?l=Zimpl\"}}");

/***/ }),

/***/ "./components/Container.jsx":
/*!**********************************!*\
  !*** ./components/Container.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\\u7F16\u7A0B\\\u9879\u76EE\\next\u9879\u76EE\\next-github\\components\\Container.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const style = {
  width: '100%',
  maxWidth: 1200,
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: 20,
  paddingRight: 20
}; // export default ({ children, comp: Comp = "div" }) => {
//     return <Comp style={style}>{children}</Comp>
// }

/* harmony default export */ __webpack_exports__["default"] = (({
  children,
  renderer = __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  })
}) => {
  //在使用时改变renderer节点类型，以及对props进行扩展
  const newElement = Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(renderer, {
    style: _objectSpread({}, style, {}, renderer.props.style),
    children
  });
  return newElement;
});

/***/ }),

/***/ "./components/Layout.jsx":
/*!*******************************!*\
  !*** ./components/Layout.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/tooltip */ "antd/lib/tooltip");
/* harmony import */ var antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/dropdown */ "antd/lib/dropdown");
/* harmony import */ var antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/avatar */ "antd/lib/avatar");
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/input */ "antd/lib/input");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/menu */ "antd/lib/menu");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/layout */ "antd/lib/layout");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Container */ "./components/Container.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../store/store */ "./store/store.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);









var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;






const {
  Header,
  Content,
  Footer
} = antd_lib_layout__WEBPACK_IMPORTED_MODULE_6___default.a;
const footerStyle = {
  textAlign: 'center'
};
const githubIconStyle = {
  color: '#fff',
  fontSize: 40,
  display: 'block',
  paddingTop: 10,
  marginRight: 20
};

function AppLayout({
  children
}) {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_13__["useRouter"])();
  const urlQuery = router.query && router.query.q;
  const {
    0: search,
    1: setSearch
  } = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(urlQuery || '');
  const user = Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["useSelector"])(state => state.user);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["useDispatch"])();
  const handleSearchChange = Object(react__WEBPACK_IMPORTED_MODULE_8__["useCallback"])(e => {
    setSearch(e.target.value);
  }, []);
  const handleOnSearch = Object(react__WEBPACK_IMPORTED_MODULE_8__["useCallback"])(() => {
    router.push(`/search?q=${search}`);
  }, [search]);
  const handleLogout = Object(react__WEBPACK_IMPORTED_MODULE_8__["useCallback"])(() => {
    dispatch(Object(_store_store__WEBPACK_IMPORTED_MODULE_12__["logout"])());
  }, []);

  const userDropdown = __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5___default.a, {
    onClick: handleLogout
  }, __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5___default.a.Item, null, "log out"));

  return __jsx(antd_lib_layout__WEBPACK_IMPORTED_MODULE_6___default.a, null, __jsx(Header, null, __jsx(_Container__WEBPACK_IMPORTED_MODULE_10__["default"], {
    renderer: __jsx("div", {
      className: "jsx-1516834124" + " " + "header-inner"
    })
  }, __jsx("div", {
    className: "jsx-1516834124" + " " + "header-left"
  }, __jsx("div", {
    className: "jsx-1516834124" + " " + "logo"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
    href: "/"
  }, __jsx("a", {
    className: "jsx-1516834124"
  }, __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_4___default.a, {
    type: "github",
    style: githubIconStyle
  })))), __jsx("div", {
    className: "jsx-1516834124"
  }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default.a.Search, {
    placeholder: "Search or jump to...",
    value: search,
    onChange: handleSearchChange,
    onSearch: handleOnSearch
  }))), __jsx("div", {
    className: "jsx-1516834124" + " " + "header-right"
  }, __jsx("div", {
    className: "jsx-1516834124" + " " + "user"
  }, user && user.id ? __jsx(antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_1___default.a, {
    overlay: userDropdown
  }, __jsx(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_2___default.a, {
    size: 40,
    src: user.avatar_url
  })) : __jsx(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_0___default.a, {
    title: "Click to log in"
  }, __jsx("a", {
    href: `/prepare-auth?url=${router.asPath}`,
    className: "jsx-1516834124"
  }, __jsx(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_2___default.a, {
    size: 40,
    icon: "user"
  }))))))), __jsx(Content, null, __jsx(_Container__WEBPACK_IMPORTED_MODULE_10__["default"], null, children)), __jsx(Footer, {
    style: footerStyle
  }, "Hello Tara@", __jsx("a", {
    href: "mailto:taralovecats@163.com",
    className: "jsx-1516834124"
  }, "taralovecats@163.com")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
    id: "4172506159"
  }, ".header-inner.jsx-1516834124{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.header-left.jsx-1516834124{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;display:flex-start;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFznvJbnqItcXOmhueebrlxcbmV4dOmhueebrlxcbmV4dC1naXRodWJcXGNvbXBvbmVudHNcXExheW91dC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkZ3QixBQUdrQyxBQUlBLDBFQUhpQixBQUlYLG1CQUN2QixnR0FKQSIsImZpbGUiOiJEOlxc57yW56iLXFzpobnnm65cXG5leHTpobnnm65cXG5leHQtZ2l0aHViXFxjb21wb25lbnRzXFxMYXlvdXQuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyBMYXlvdXQsIElucHV0LCBJY29uLCBBdmF0YXIsIFRvb2x0aXAsIERyb3Bkb3duLCBNZW51IH0gZnJvbSAnYW50ZCdcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi9Db250YWluZXInXHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBsb2dvdXQgfSBmcm9tICcuLi9zdG9yZS9zdG9yZSdcclxuaW1wb3J0IHsgdXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmNvbnN0IHsgSGVhZGVyLCBDb250ZW50LCBGb290ZXIgfSA9IExheW91dFxyXG5jb25zdCBmb290ZXJTdHlsZSA9IHtcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcidcclxufVxyXG5jb25zdCBnaXRodWJJY29uU3R5bGUgPSB7XHJcbiAgICBjb2xvcjogJyNmZmYnLFxyXG4gICAgZm9udFNpemU6IDQwLFxyXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgIHBhZGRpbmdUb3A6IDEwLFxyXG4gICAgbWFyZ2luUmlnaHQ6IDIwLFxyXG59XHJcblxyXG5mdW5jdGlvbiBBcHBMYXlvdXQoeyBjaGlsZHJlbiB9KSB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHVybFF1ZXJ5ID0gcm91dGVyLnF1ZXJ5ICYmIHJvdXRlci5xdWVyeS5xO1xyXG4gICAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKHVybFF1ZXJ5IHx8ICcnKTtcclxuICAgIGNvbnN0IHVzZXIgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS51c2VyKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTZWFyY2hDaGFuZ2UgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgICAgIHNldFNlYXJjaChlLnRhcmdldC52YWx1ZSlcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVPblNlYXJjaCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICByb3V0ZXIucHVzaChgL3NlYXJjaD9xPSR7c2VhcmNofWApXHJcbiAgICB9LCBbc2VhcmNoXSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlTG9nb3V0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKGxvZ291dCgpKVxyXG4gICAgfSxbXSk7XHJcblxyXG4gICAgY29uc3QgdXNlckRyb3Bkb3duID0gKFxyXG4gICAgICAgIDxNZW51IG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0+IFxyXG4gICAgICAgICAgICA8TWVudS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgbG9nIG91dFxyXG4gICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICA8L01lbnU+XHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPEhlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxDb250YWluZXIgcmVuZGVyZXI9ezxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWlubmVyXCIvPn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIHR5cGU9XCJnaXRodWJcIiBzdHlsZT17Z2l0aHViSWNvblN0eWxlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQuU2VhcmNoIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIG9yIGp1bXAgdG8uLi5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2h9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNlYXJjaENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblNlYXJjaD17aGFuZGxlT25TZWFyY2h9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyICYmIHVzZXIuaWQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duIG92ZXJsYXk9e3VzZXJEcm9wZG93bn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXIgc2l6ZT17NDB9IHNyYz17dXNlci5hdmF0YXJfdXJsfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPVwiQ2xpY2sgdG8gbG9nIGluXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2AvcHJlcGFyZS1hdXRoP3VybD0ke3JvdXRlci5hc1BhdGh9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXZhdGFyIHNpemU9ezQwfSBpY29uPVwidXNlclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L0hlYWRlcj5cclxuICAgICAgICAgICAgPENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICB7Lyog5pS55Y+Y57uE5Lu255qE5riy5p+T57G75Z6L77yM5LiN6IO95oyH5a6acHJvcHMgKi99XHJcbiAgICAgICAgICAgICAgICB7LyogPENvbnRhaW5lciBjb21wPVwiZGl2XCI+e2NoaWxkcmVufTwvQ29udGFpbmVyPiAqL31cclxuICAgICAgICAgICAgICAgIDxDb250YWluZXIgPntjaGlsZHJlbn08L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9Db250ZW50PlxyXG4gICAgICAgICAgICA8Rm9vdGVyIHN0eWxlPXtmb290ZXJTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICBIZWxsbyBUYXJhQDxhIGhyZWY9XCJtYWlsdG86dGFyYWxvdmVjYXRzQDE2My5jb21cIj50YXJhbG92ZWNhdHNAMTYzLmNvbTwvYT5cclxuICAgICAgICAgICAgPC9Gb290ZXI+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC5oZWFkZXItaW5uZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmhlYWRlci1sZWZ0IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT4gIFxyXG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgICAgICAgI19fbmV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmFudC1sYXlvdXQge1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYW50LWxheW91dC1oZWFkZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMCxcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYW50LWxheW91dC1jb250ZW50IHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwTGF5b3V0XHJcblxyXG4iXX0= */\n/*@ sourceURL=D:\\\\\u7F16\u7A0B\\\\\u9879\u76EE\\\\next\u9879\u76EE\\\\next-github\\\\components\\\\Layout.jsx */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
    id: "1596354954"
  }, "#__next{height:100%;}.ant-layout{min-height:100%;}.ant-layout-header{padding-left:0, padding-right:0;}.ant-layout-content{background:#fff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFznvJbnqItcXOmhueebrlxcbmV4dOmhueebrlxcbmV4dC1naXRodWJcXGNvbXBvbmVudHNcXExheW91dC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUcrQixBQUdpQyxBQUdJLEFBS3JCLEFBR0EsWUFWQyxJQUdBLEFBT0EsZ0JBSEEiLCJmaWxlIjoiRDpcXOe8lueoi1xc6aG555uuXFxuZXh06aG555uuXFxuZXh0LWdpdGh1YlxcY29tcG9uZW50c1xcTGF5b3V0LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgTGF5b3V0LCBJbnB1dCwgSWNvbiwgQXZhdGFyLCBUb29sdGlwLCBEcm9wZG93biwgTWVudSB9IGZyb20gJ2FudGQnXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4vQ29udGFpbmVyJ1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgbG9nb3V0IH0gZnJvbSAnLi4vc3RvcmUvc3RvcmUnXHJcbmltcG9ydCB7IHVzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5jb25zdCB7IEhlYWRlciwgQ29udGVudCwgRm9vdGVyIH0gPSBMYXlvdXRcclxuY29uc3QgZm9vdGVyU3R5bGUgPSB7XHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInXHJcbn1cclxuY29uc3QgZ2l0aHViSWNvblN0eWxlID0ge1xyXG4gICAgY29sb3I6ICcjZmZmJyxcclxuICAgIGZvbnRTaXplOiA0MCxcclxuICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICBwYWRkaW5nVG9wOiAxMCxcclxuICAgIG1hcmdpblJpZ2h0OiAyMCxcclxufVxyXG5cclxuZnVuY3Rpb24gQXBwTGF5b3V0KHsgY2hpbGRyZW4gfSkge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCB1cmxRdWVyeSA9IHJvdXRlci5xdWVyeSAmJiByb3V0ZXIucXVlcnkucTtcclxuICAgIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZSh1cmxRdWVyeSB8fCAnJyk7XHJcbiAgICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUudXNlcik7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2VhcmNoQ2hhbmdlID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgICAgICBzZXRTZWFyY2goZS50YXJnZXQudmFsdWUpXHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlT25TZWFyY2ggPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgcm91dGVyLnB1c2goYC9zZWFyY2g/cT0ke3NlYXJjaH1gKVxyXG4gICAgfSwgW3NlYXJjaF0pO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUxvZ291dCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChsb2dvdXQoKSlcclxuICAgIH0sW10pO1xyXG5cclxuICAgIGNvbnN0IHVzZXJEcm9wZG93biA9IChcclxuICAgICAgICA8TWVudSBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9PiBcclxuICAgICAgICAgICAgPE1lbnUuSXRlbT5cclxuICAgICAgICAgICAgICAgIGxvZyBvdXRcclxuICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgPC9NZW51PlxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyIHJlbmRlcmVyPXs8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1pbm5lclwiLz59PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwiZ2l0aHViXCIgc3R5bGU9e2dpdGh1Ykljb25TdHlsZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0LlNlYXJjaCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBvciBqdW1wIHRvLi4uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTZWFyY2hDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TZWFyY2g9e2hhbmRsZU9uU2VhcmNofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXNlciAmJiB1c2VyLmlkID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93biBvdmVybGF5PXt1c2VyRHJvcGRvd259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXZhdGFyIHNpemU9ezQwfSBzcmM9e3VzZXIuYXZhdGFyX3VybH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT1cIkNsaWNrIHRvIGxvZyBpblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtgL3ByZXBhcmUtYXV0aD91cmw9JHtyb3V0ZXIuYXNQYXRofWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEF2YXRhciBzaXplPXs0MH0gaWNvbj1cInVzZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9IZWFkZXI+XHJcbiAgICAgICAgICAgIDxDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgey8qIOaUueWPmOe7hOS7tueahOa4suafk+exu+Wei++8jOS4jeiDveaMh+WumnByb3BzICovfVxyXG4gICAgICAgICAgICAgICAgey8qIDxDb250YWluZXIgY29tcD1cImRpdlwiPntjaGlsZHJlbn08L0NvbnRhaW5lcj4gKi99XHJcbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyID57Y2hpbGRyZW59PC9Db250YWluZXI+XHJcbiAgICAgICAgICAgIDwvQ29udGVudD5cclxuICAgICAgICAgICAgPEZvb3RlciBzdHlsZT17Zm9vdGVyU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgSGVsbG8gVGFyYUA8YSBocmVmPVwibWFpbHRvOnRhcmFsb3ZlY2F0c0AxNjMuY29tXCI+dGFyYWxvdmVjYXRzQDE2My5jb208L2E+XHJcbiAgICAgICAgICAgIDwvRm9vdGVyPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyLWlubmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5oZWFkZXItbGVmdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+ICBcclxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAgICAgICAgICNfX25leHQge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5hbnQtbGF5b3V0IHtcclxuICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmFudC1sYXlvdXQtaGVhZGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmFudC1sYXlvdXQtY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcExheW91dFxyXG5cclxuIl19 */\n/*@ sourceURL=D:\\\\\u7F16\u7A0B\\\\\u9879\u76EE\\\\next\u9879\u76EE\\\\next-github\\\\components\\\\Layout.jsx */"));
}

/* harmony default export */ __webpack_exports__["default"] = (AppLayout);

/***/ }),

/***/ "./lib/json.js":
/*!*********************!*\
  !*** ./lib/json.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const axios = __webpack_require__(/*! axios */ "axios");

const isServer = true;

const colorsJson = __webpack_require__(/*! ../colors.json */ "./colors.json");

async function request({
  method = 'GET',
  url
}) {
  if (!url) {
    throw Error('url must be provided');
  }

  if (isServer) {
    const colors = JSON.parse(JSON.stringify(colorsJson));
    return {
      data: colors
    };
  } else {
    //`http://localhost:3000/${url}`
    return await axios({
      method,
      url
    });
  }
}

module.exports = {
  request
};

/***/ }),

/***/ "./lib/with-redux.js":
/*!***************************!*\
  !*** ./lib/with-redux.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/store */ "./store/store.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const isServer = true;
const __NEXT_REUDX_STORE__ = '__NEXT_REUDX_STORE__';

function getOrCreateStore(initialState) {
  //服务端每次都要创建一个新的store
  if (isServer) {
    return Object(_store_store__WEBPACK_IMPORTED_MODULE_1__["default"])(initialState);
  } //客户端是唯一的store


  if (!window[__NEXT_REUDX_STORE__]) {
    window[__NEXT_REUDX_STORE__] = Object(_store_store__WEBPACK_IMPORTED_MODULE_1__["default"])(initialState);
  }

  return window[__NEXT_REUDX_STORE__];
}

/* harmony default export */ __webpack_exports__["default"] = (Comp => {
  class WithReduxApp extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    constructor(props) {
      super(props);
      this.reduxStore = getOrCreateStore(props.initialReduxState);
    }

    render() {
      const _this$props = this.props,
            {
        Component,
        pageProps
      } = _this$props,
            rest = _objectWithoutProperties(_this$props, ["Component", "pageProps"]);

      return __jsx(Comp, _extends({
        Component: Component,
        pageProps: pageProps
      }, rest, {
        reduxStore: this.reduxStore
      }));
    }

  }

  WithReduxApp.getInitialProps = async context => {
    const {
      ctx
    } = context;
    let reduxStore;

    if (isServer) {
      //服务端环境下才有req对象
      const session = ctx.req.session;

      if (session && session.userInfo) {
        reduxStore = getOrCreateStore({
          user: session.userInfo
        });
      } else {
        reduxStore = getOrCreateStore();
      }
    } else {
      reduxStore = getOrCreateStore();
    }

    ctx.reduxStore = reduxStore;
    let appProps = {};

    if (typeof Comp.getInitialProps === 'function') {
      appProps = await Comp.getInitialProps(context);
    }

    return _objectSpread({}, appProps, {
      initialReduxState: reduxStore.getState()
    });
  };

  return WithReduxApp;
});

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    var isPrefetched = prefetched[this.getPaths()[0]];

    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var [href, asPath] = this.getPaths();

    _router.default.prefetch(href, asPath, options);

    prefetched[href] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    })).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => Component.__N_SSG ? this._getStaticData(as) : Component.__N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(err => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname)).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps(_ref) {
  var {
    Component,
    ctx
  } = _ref;
  var pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps
    } = this.props;
    var url = createUrl(router);
    return _react.default.createElement(Component, Object.assign({}, pageProps, {
      url: url
    }));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn("Warning: the `Container` in `_app` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated");
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
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





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
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

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
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

  lowPriorityWarning = function (condition, format) {
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
  if (typeof object === 'object' && object !== null) {
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
}

// AsyncMode is deprecated along with isAsyncMode
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

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
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
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
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

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/spin */ "antd/lib/spin");
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_with_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/with-redux */ "./lib/with-redux.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/json */ "./lib/json.js");
/* harmony import */ var _lib_json__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_lib_json__WEBPACK_IMPORTED_MODULE_8__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


 //add global css







let cached_colors = null;
const isServer = true;

function MyApp({
  Component,
  pageProps,
  reduxStore,
  colors
}) {
  //Keeping state when navigating pages
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const startLoading = () => {
    setLoading(true);
  };

  const stopLoading = () => {
    setLoading(false);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    next_router__WEBPACK_IMPORTED_MODULE_7___default.a.events.on('routeChangeStart', startLoading);
    next_router__WEBPACK_IMPORTED_MODULE_7___default.a.events.on('routeChangeComplete', stopLoading);
    next_router__WEBPACK_IMPORTED_MODULE_7___default.a.events.on('routeChangeError', stopLoading);
    return () => {
      next_router__WEBPACK_IMPORTED_MODULE_7___default.a.events.off('routeChangeStart', startLoading);
      next_router__WEBPACK_IMPORTED_MODULE_7___default.a.events.off('routeChangeComplete', stopLoading);
      next_router__WEBPACK_IMPORTED_MODULE_7___default.a.events.off('routeChangeError', stopLoading);
    };
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (!isServer) {
      cached_colors = colors;
    }
  }, [colors]);
  return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_5__["Provider"], {
    store: reduxStore
  }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], null, __jsx(antd_lib_spin__WEBPACK_IMPORTED_MODULE_0___default.a, {
    tip: "loading...",
    spinning: loading
  }, __jsx(Component, _extends({}, pageProps, {
    colors: colors
  })))));
} //define this method because blocking data requirements are needed
//for every single page in this application


MyApp.getInitialProps = async appContext => {
  //calls page's `getInitialProps` and fills `appProps.pageProps` 
  const appProps = await next_app__WEBPACK_IMPORTED_MODULE_2___default.a.getInitialProps(appContext);

  if (cached_colors) {
    return _objectSpread({}, appProps, {
      colors: cached_colors
    });
  }

  const colorsResp = await _lib_json__WEBPACK_IMPORTED_MODULE_8___default.a.request({
    url: '/colors'
  });
  return _objectSpread({}, appProps, {
    colors: colorsResp.data
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_with_redux__WEBPACK_IMPORTED_MODULE_6__["default"])(MyApp));

/***/ }),

/***/ "./store/store.js":
/*!************************!*\
  !*** ./store/store.js ***!
  \************************/
/*! exports provided: logout, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return initializeStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const userInitialState = {};
const LOGOUT = 'LOGOUT'; //thunk

function logout() {
  return dispatch => {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('/logout').then(resp => {
      if (resp.status === 200) {
        dispatch({
          type: LOGOUT
        });
      } else {
        console.log('logout failed', resp);
      }
    }).catch(err => {
      console.log('logout failed', err);
    });
  };
}

function userReducer(state = userInitialState, action) {
  switch (action.type) {
    case LOGOUT:
      return {};

    default:
      return state;
  }
}

const allReducers = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  user: userReducer
}); //export一个创建store的函数，每次生成的store都是新的

function initializeStore(state) {
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(allReducers, _objectSpread({
    user: userInitialState
  }, state), Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a)));
  return store;
}

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "antd/lib/avatar":
/*!**********************************!*\
  !*** external "antd/lib/avatar" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/avatar");

/***/ }),

/***/ "antd/lib/dropdown":
/*!************************************!*\
  !*** external "antd/lib/dropdown" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/dropdown");

/***/ }),

/***/ "antd/lib/icon":
/*!********************************!*\
  !*** external "antd/lib/icon" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon");

/***/ }),

/***/ "antd/lib/input":
/*!*********************************!*\
  !*** external "antd/lib/input" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/input");

/***/ }),

/***/ "antd/lib/layout":
/*!**********************************!*\
  !*** external "antd/lib/layout" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/layout");

/***/ }),

/***/ "antd/lib/menu":
/*!********************************!*\
  !*** external "antd/lib/menu" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/menu");

/***/ }),

/***/ "antd/lib/spin":
/*!********************************!*\
  !*** external "antd/lib/spin" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/spin");

/***/ }),

/***/ "antd/lib/tooltip":
/*!***********************************!*\
  !*** external "antd/lib/tooltip" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/tooltip");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map