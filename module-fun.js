// Anonymous Closures

(function () {
  // ... all vars and functions are in this scope only
  // still maintains access to all globals
}());




// Module Import

// Variables pretending
var jQuery = "Jquery lib",
    YAHOO = "YUI lib";

(function ($, YAHOO) {
  // now have access to globals jQuery (as $) and YAHOO in this code
    console.log("Module Import");
    console.log($);
    console.log(YAHOO);
}(jQuery, YAHOO));


// Module Export

var a = 1;

var MODULE = (function () {
    console.log("Module Export");
    var my = {},
    privateVariable = 1;

  function privateMethod() {
    // ...
  }

  my.moduleProperty = 1;
  my.moduleMethod = function () {
    // ...        
  };

  return my;
}());

console.log(MODULE);
console.log('MODULE.moduleProperty: ' + MODULE.moduleProperty);


// Augmentation

MODULE = (function (my) {
    console.log("Module Augmentation");
  my.anotherMethod = function () {
    // added method...
  };

  return my;
}(MODULE));

console.log(MODULE);


// Loose Augmentation

var MODULE = (function (my) {
    console.log('Loose Augmentation');
  // add capabilities...
    my.moduleNewProperty = 2;

  return my;
}(MODULE || {}));

console.log(MODULE);