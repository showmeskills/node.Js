System.register([], function (_export, _context) {
  "use strict";

  var Person;
  return {
    setters: [],
    execute: function () {
      Person = class Person {
        constructor() {}

        fn() {
          return console.log('es6 module demo!!!');
        }

      };

      _export("default", Person);
    }
  };
});
