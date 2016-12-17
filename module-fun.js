console.log('%cModule Fun', 'background:grey; color: orange; padding: 1rem; line-height: 3rem;');
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
    console.log("%cModule Import", 'background:grey; color: orange; padding: 1rem; line-height: 3rem;');
    console.log($);
    console.log(YAHOO);
}(jQuery, YAHOO));


// Module Export

var a = 1;

var MODULE = (function () {
    console.log("%cModule Export", 'background:grey; color: orange; padding: 1rem; line-height: 3rem;');
    var my = {},
    privateVariable = 1;

  function privateMethod() {
    // ...
  }

  my.moduleProperty = 1;
  my.moduleMethod = function () {
    // ...     
        console.log("%cOriginal my.moduleMethod", 'background:grey; color: orange; padding: 1rem; line-height: 3rem;');
  };

  return my;
}());

console.log(MODULE);
console.log('MODULE.moduleProperty: ' + MODULE.moduleProperty);


// Augmentation

MODULE = (function (my) {
    console.log("%cModule Augmentation", 'background:grey; color: orange; padding: 1rem; line-height: 3rem;');
  my.anotherMethod = function () {
    // added method...
  };

  return my;
}(MODULE));

console.log(MODULE);


// Loose Augmentation

var MODULE = (function (my) {
    console.log('%cLoose Augmentation', 'background:grey; color: orange; padding: 1rem; line-height: 3rem;');
  // add capabilities...
    my.moduleNewProperty = 2;

  return my;
}(MODULE || {}));

console.log(MODULE);


// Tight Augmentation

var MODULE = (function (my) {
    console.log("%cTight Augmentation", 'background:grey; color: orange; padding: 1rem; line-height: 3rem;');
  var old_moduleMethod = my.moduleMethod;

    my.old =  old_moduleMethod;
  my.moduleMethod = function () {
    // method override, has access to old through old_moduleMethod...
        console.log("%cNew my.moduleMethod", 'background:grey; color: orange; padding: 1rem; line-height: 3rem;');
  };

  return my;
}(MODULE));

console.log(MODULE);

// Cloning and Inheritance

var MODULE_TWO_AKA_THE_CLONE = (function (old) {
    console.log("%cCloning and Inheritance", 'background:grey; color: orange; padding: 1rem; line-height: 3rem;');
  var my = {},
    key;

  for (key in old) {
    if (old.hasOwnProperty(key)) {
      my[key] = old[key];
    }
  }

  var super_moduleMethod = old.moduleMethod;
  my.moduleMethod = function () {
    // override method on the clone, access to super through super_moduleMethod
  };

  return my;
}(MODULE));

console.log("MODULE", MODULE);
console.log("MODULE_TWO_AKA_THE_CLONE", MODULE_TWO_AKA_THE_CLONE);



// Cross-File Private State

var MODULE = (function (my) {
    console.log("%cCross-File Private State", 'background:grey; color: orange; padding: 1rem; line-height: 3rem;');
  var _private = my._private = my._private || {},
    _seal = my._seal = my._seal || function () {
      delete my._private;
      delete my._seal;
      delete my._unseal;
    },
    _unseal = my._unseal = my._unseal || function () {
      my._private = _private;
      my._seal = _seal;
      my._unseal = _unseal;
    };

  // permanent access to _private, _seal, and _unseal

  return my;
}(MODULE || {}));

console.log(MODULE);


// Sub-modules

MODULE.sub = (function () {
    console.log("%cSub-modules", 'background:grey; color: orange; padding: 1rem; line-height: 3rem;');
  var my = {};
  // ...

  return my;
}());

console.log('MODULE', MODULE);
console.log('MODULE.sub', MODULE.sub);