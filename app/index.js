/**
*
*  AVIONIC
*  Propelling World-class Cross-platform Hybrid Applications ✈ ✈
*
*  Copyright 2015 Reedia Limited. All rights reserved.
*
*  Permission is hereby granted, free of charge, to any person obtaining a copy
*  of this software and associated documentation files (the "Software"), to deal
*  in the Software without restriction, including without limitation the rights
*  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
*  copies of the Software, and to permit persons to whom the Software is
*  furnished to do so, subject to the following conditions:
*
*  The above copyright notice and this permission notice shall be included in
*  all copies or substantial portions of the Software.

*  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
*  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
*  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
*  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
*  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
*  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
*  THE SOFTWARE.
*
*/
(function () {
  'use strict';
  /*jslint nomen: true*/
  /*jslint vars: true*/
  /*global require,process,module*/
  var yeoman = require('yeoman-generator');
  var chalk = require('chalk');

  var prompts = require('./prompts.json');

  // Avionic ✈ ASCII Text Logo
  var logo =
  chalk.cyan.bold("\n               ___ _    __________  _   ____________") +
  chalk.cyan.bold("\n              /   | |  / /  _/ __ \\/ | / /  _/ ____/") +
  chalk.cyan.bold("\n             / /| | | / // // / / /  |/ // // /     ") +
  chalk.cyan.bold("\n            / ___ | |/ // // /_/ / /|  // // /___   ") +
  chalk.cyan.bold("\n           /_/  |_|___/___/\\____/_/ |_/___/\\____/ ") +
  "\n"+
  chalk.cyan.bold("\n-- ") + chalk.yellow.bold("Propelling World-class Cross-platform Hybrid Applications") + chalk.cyan.bold(" -- ✈");

  var captain =
  "\n" +
  chalk.red.bold("\n                             .---. ") +
  chalk.red.bold("\n                            /_ ") + chalk.cyan.bold("✈") + chalk.red.bold(" _\\") +
  chalk.white.bold("\n                            ( '_' )") +
  chalk.white.bold("\n                             \\_-_/") +
  chalk.red.bold("\n                       >>>___  ~  ___<<<");

  var crew =
  chalk.yellow.bold("\n                             .-- ") + chalk.cyan.bold("✈") + chalk.yellow.bold("") +
  chalk.yellow.bold("\n                            / /\"\\ \\") +
  chalk.yellow.bold("\n                            )/") + chalk.cyan.bold("• •") + chalk.yellow.bold("\\(") +
  chalk.yellow.bold("\n                           ( ") + chalk.white.bold("( - )") + chalk.yellow.bold(" )") +
  chalk.yellow.bold("\n                            )") + chalk.red.bold("_") + chalk.yellow.bold("") + chalk.white.bold(") (") + chalk.yellow.bold("") + chalk.red.bold("_") + chalk.yellow.bold("(") +
  chalk.white.bold("\n                           /'") + chalk.red.bold("\\") + chalk.red.bold("   /") + chalk.white.bold("'\\") +
  chalk.white.bold("\n                          /,") + chalk.red.bold("(_\\ /_)") + chalk.white.bold(",\\") +
  chalk.white.bold("\n                          \\\\ ") + chalk.red.bold("\\ ") + chalk.cyan.bold("✈") + chalk.red.bold(" /") + chalk.white.bold(" //")
  ;

  var plane =
  chalk.red.bold("\n                         ___________") +
  chalk.red.bold("\n                              |") +
  chalk.red.bold("\n                         _   _|_   _") +
  chalk.red.bold("\n                        (_)-/ ") + chalk.cyan.bold("✈") + chalk.red.bold(" \\-(_)") +
  chalk.red.bold("\n _                         /\\___/\\                         _") +
  chalk.red.bold("\n(_)_______________________( ( ") + chalk.white.bold("•") + chalk.red.bold(" ) )_______________________(_)") +
  chalk.red.bold("\n                           \\_____/\n") +
  "\n";

  // var AvionicGenerator = module.exports = yeoman.generators.Base.extend({
  var AvionicGenerator = yeoman.generators.Base.extend ({
    constructor: function () {
    yeoman.generators.Base.apply(this, arguments);

    this.appYear = (new Date()).getFullYear();
    this.appVersion = require('../package.json').version;

    },

    info: function () {
      if (!this.options['skip-welcome-message']) {
          console.log(logo);
          console.log(captain);
          this.log(chalk.white.bold('\nThis is your Captain John Doe, welcoming you aboard to Avionic. \nAt this time, we request your full attention as your inflight \nteam will guide you through the safety features.\n'));
          console.log(crew);
          this.log(chalk.white.bold('\nLadies and gentlemen, this is Jane Smith and I’m your chief \nflight attendant. I\'d like to direct your attention to the \nterminal in front of you. We will be showing our safety \ndemonstration and would like the next few minutes of your \ncomplete attention.\n'));
      }
    }
  });
  require('./src/prompts')(AvionicGenerator);
  require('./src/plugins')(AvionicGenerator);
  require('./src/write')(AvionicGenerator);
  require('./src/files')(AvionicGenerator);
  require('./src/install')(AvionicGenerator);
  module.exports = AvionicGenerator;
}());
