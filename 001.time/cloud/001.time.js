(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // ../../node_modules/.pnpm/reflect-metadata@0.1.13/node_modules/reflect-metadata/Reflect.js
  var require_Reflect = __commonJS({
    "../../node_modules/.pnpm/reflect-metadata@0.1.13/node_modules/reflect-metadata/Reflect.js"() {
      var Reflect2;
      (function(Reflect3) {
        (function(factory) {
          var root = typeof globalThis === "object" ? globalThis : typeof self === "object" ? self : typeof this === "object" ? this : Function("return this;")();
          var exporter = makeExporter(Reflect3);
          if (typeof root.Reflect === "undefined") {
            root.Reflect = Reflect3;
          } else {
            exporter = makeExporter(root.Reflect, exporter);
          }
          factory(exporter);
          function makeExporter(target, previous) {
            return function(key, value) {
              if (typeof target[key] !== "function") {
                Object.defineProperty(target, key, { configurable: true, writable: true, value });
              }
              if (previous)
                previous(key, value);
            };
          }
        })(function(exporter) {
          var hasOwn = Object.prototype.hasOwnProperty;
          var supportsSymbol = typeof Symbol === "function";
          var toPrimitiveSymbol = supportsSymbol && typeof Symbol.toPrimitive !== "undefined" ? Symbol.toPrimitive : "@@toPrimitive";
          var iteratorSymbol = supportsSymbol && typeof Symbol.iterator !== "undefined" ? Symbol.iterator : "@@iterator";
          var supportsCreate = typeof Object.create === "function";
          var supportsProto = { __proto__: [] } instanceof Array;
          var downLevel = !supportsCreate && !supportsProto;
          var HashMap = {
            create: supportsCreate ? function() {
              return MakeDictionary(/* @__PURE__ */ Object.create(null));
            } : supportsProto ? function() {
              return MakeDictionary({ __proto__: null });
            } : function() {
              return MakeDictionary({});
            },
            has: downLevel ? function(map, key) {
              return hasOwn.call(map, key);
            } : function(map, key) {
              return key in map;
            },
            get: downLevel ? function(map, key) {
              return hasOwn.call(map, key) ? map[key] : void 0;
            } : function(map, key) {
              return map[key];
            }
          };
          var functionPrototype = Object.getPrototypeOf(Function);
          var usePolyfill = typeof process === "object" && process.env && process.env["REFLECT_METADATA_USE_MAP_POLYFILL"] === "true";
          var _Map = !usePolyfill && typeof Map === "function" && typeof Map.prototype.entries === "function" ? Map : CreateMapPolyfill();
          var _Set = !usePolyfill && typeof Set === "function" && typeof Set.prototype.entries === "function" ? Set : CreateSetPolyfill();
          var _WeakMap = !usePolyfill && typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
          var Metadata = new _WeakMap();
          function decorate(decorators, target, propertyKey, attributes) {
            if (!IsUndefined(propertyKey)) {
              if (!IsArray(decorators))
                throw new TypeError();
              if (!IsObject(target))
                throw new TypeError();
              if (!IsObject(attributes) && !IsUndefined(attributes) && !IsNull(attributes))
                throw new TypeError();
              if (IsNull(attributes))
                attributes = void 0;
              propertyKey = ToPropertyKey(propertyKey);
              return DecorateProperty(decorators, target, propertyKey, attributes);
            } else {
              if (!IsArray(decorators))
                throw new TypeError();
              if (!IsConstructor(target))
                throw new TypeError();
              return DecorateConstructor(decorators, target);
            }
          }
          exporter("decorate", decorate);
          function metadata(metadataKey, metadataValue) {
            function decorator(target, propertyKey) {
              if (!IsObject(target))
                throw new TypeError();
              if (!IsUndefined(propertyKey) && !IsPropertyKey(propertyKey))
                throw new TypeError();
              OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
            }
            return decorator;
          }
          exporter("metadata", metadata);
          function defineMetadata(metadataKey, metadataValue, target, propertyKey) {
            if (!IsObject(target))
              throw new TypeError();
            if (!IsUndefined(propertyKey))
              propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
          }
          exporter("defineMetadata", defineMetadata);
          function hasMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
              throw new TypeError();
            if (!IsUndefined(propertyKey))
              propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryHasMetadata(metadataKey, target, propertyKey);
          }
          exporter("hasMetadata", hasMetadata);
          function hasOwnMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
              throw new TypeError();
            if (!IsUndefined(propertyKey))
              propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryHasOwnMetadata(metadataKey, target, propertyKey);
          }
          exporter("hasOwnMetadata", hasOwnMetadata);
          function getMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
              throw new TypeError();
            if (!IsUndefined(propertyKey))
              propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryGetMetadata(metadataKey, target, propertyKey);
          }
          exporter("getMetadata", getMetadata);
          function getOwnMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
              throw new TypeError();
            if (!IsUndefined(propertyKey))
              propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryGetOwnMetadata(metadataKey, target, propertyKey);
          }
          exporter("getOwnMetadata", getOwnMetadata);
          function getMetadataKeys(target, propertyKey) {
            if (!IsObject(target))
              throw new TypeError();
            if (!IsUndefined(propertyKey))
              propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryMetadataKeys(target, propertyKey);
          }
          exporter("getMetadataKeys", getMetadataKeys);
          function getOwnMetadataKeys(target, propertyKey) {
            if (!IsObject(target))
              throw new TypeError();
            if (!IsUndefined(propertyKey))
              propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryOwnMetadataKeys(target, propertyKey);
          }
          exporter("getOwnMetadataKeys", getOwnMetadataKeys);
          function deleteMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
              throw new TypeError();
            if (!IsUndefined(propertyKey))
              propertyKey = ToPropertyKey(propertyKey);
            var metadataMap = GetOrCreateMetadataMap(target, propertyKey, false);
            if (IsUndefined(metadataMap))
              return false;
            if (!metadataMap.delete(metadataKey))
              return false;
            if (metadataMap.size > 0)
              return true;
            var targetMetadata = Metadata.get(target);
            targetMetadata.delete(propertyKey);
            if (targetMetadata.size > 0)
              return true;
            Metadata.delete(target);
            return true;
          }
          exporter("deleteMetadata", deleteMetadata);
          function DecorateConstructor(decorators, target) {
            for (var i = decorators.length - 1; i >= 0; --i) {
              var decorator = decorators[i];
              var decorated = decorator(target);
              if (!IsUndefined(decorated) && !IsNull(decorated)) {
                if (!IsConstructor(decorated))
                  throw new TypeError();
                target = decorated;
              }
            }
            return target;
          }
          function DecorateProperty(decorators, target, propertyKey, descriptor) {
            for (var i = decorators.length - 1; i >= 0; --i) {
              var decorator = decorators[i];
              var decorated = decorator(target, propertyKey, descriptor);
              if (!IsUndefined(decorated) && !IsNull(decorated)) {
                if (!IsObject(decorated))
                  throw new TypeError();
                descriptor = decorated;
              }
            }
            return descriptor;
          }
          function GetOrCreateMetadataMap(O, P, Create) {
            var targetMetadata = Metadata.get(O);
            if (IsUndefined(targetMetadata)) {
              if (!Create)
                return void 0;
              targetMetadata = new _Map();
              Metadata.set(O, targetMetadata);
            }
            var metadataMap = targetMetadata.get(P);
            if (IsUndefined(metadataMap)) {
              if (!Create)
                return void 0;
              metadataMap = new _Map();
              targetMetadata.set(P, metadataMap);
            }
            return metadataMap;
          }
          function OrdinaryHasMetadata(MetadataKey, O, P) {
            var hasOwn2 = OrdinaryHasOwnMetadata(MetadataKey, O, P);
            if (hasOwn2)
              return true;
            var parent = OrdinaryGetPrototypeOf(O);
            if (!IsNull(parent))
              return OrdinaryHasMetadata(MetadataKey, parent, P);
            return false;
          }
          function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, false);
            if (IsUndefined(metadataMap))
              return false;
            return ToBoolean(metadataMap.has(MetadataKey));
          }
          function OrdinaryGetMetadata(MetadataKey, O, P) {
            var hasOwn2 = OrdinaryHasOwnMetadata(MetadataKey, O, P);
            if (hasOwn2)
              return OrdinaryGetOwnMetadata(MetadataKey, O, P);
            var parent = OrdinaryGetPrototypeOf(O);
            if (!IsNull(parent))
              return OrdinaryGetMetadata(MetadataKey, parent, P);
            return void 0;
          }
          function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, false);
            if (IsUndefined(metadataMap))
              return void 0;
            return metadataMap.get(MetadataKey);
          }
          function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, true);
            metadataMap.set(MetadataKey, MetadataValue);
          }
          function OrdinaryMetadataKeys(O, P) {
            var ownKeys = OrdinaryOwnMetadataKeys(O, P);
            var parent = OrdinaryGetPrototypeOf(O);
            if (parent === null)
              return ownKeys;
            var parentKeys = OrdinaryMetadataKeys(parent, P);
            if (parentKeys.length <= 0)
              return ownKeys;
            if (ownKeys.length <= 0)
              return parentKeys;
            var set = new _Set();
            var keys = [];
            for (var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
              var key = ownKeys_1[_i];
              var hasKey = set.has(key);
              if (!hasKey) {
                set.add(key);
                keys.push(key);
              }
            }
            for (var _a = 0, parentKeys_1 = parentKeys; _a < parentKeys_1.length; _a++) {
              var key = parentKeys_1[_a];
              var hasKey = set.has(key);
              if (!hasKey) {
                set.add(key);
                keys.push(key);
              }
            }
            return keys;
          }
          function OrdinaryOwnMetadataKeys(O, P) {
            var keys = [];
            var metadataMap = GetOrCreateMetadataMap(O, P, false);
            if (IsUndefined(metadataMap))
              return keys;
            var keysObj = metadataMap.keys();
            var iterator = GetIterator(keysObj);
            var k = 0;
            while (true) {
              var next = IteratorStep(iterator);
              if (!next) {
                keys.length = k;
                return keys;
              }
              var nextValue = IteratorValue(next);
              try {
                keys[k] = nextValue;
              } catch (e) {
                try {
                  IteratorClose(iterator);
                } finally {
                  throw e;
                }
              }
              k++;
            }
          }
          function Type(x) {
            if (x === null)
              return 1;
            switch (typeof x) {
              case "undefined":
                return 0;
              case "boolean":
                return 2;
              case "string":
                return 3;
              case "symbol":
                return 4;
              case "number":
                return 5;
              case "object":
                return x === null ? 1 : 6;
              default:
                return 6;
            }
          }
          function IsUndefined(x) {
            return x === void 0;
          }
          function IsNull(x) {
            return x === null;
          }
          function IsSymbol(x) {
            return typeof x === "symbol";
          }
          function IsObject(x) {
            return typeof x === "object" ? x !== null : typeof x === "function";
          }
          function ToPrimitive(input, PreferredType) {
            switch (Type(input)) {
              case 0:
                return input;
              case 1:
                return input;
              case 2:
                return input;
              case 3:
                return input;
              case 4:
                return input;
              case 5:
                return input;
            }
            var hint = PreferredType === 3 ? "string" : PreferredType === 5 ? "number" : "default";
            var exoticToPrim = GetMethod(input, toPrimitiveSymbol);
            if (exoticToPrim !== void 0) {
              var result = exoticToPrim.call(input, hint);
              if (IsObject(result))
                throw new TypeError();
              return result;
            }
            return OrdinaryToPrimitive(input, hint === "default" ? "number" : hint);
          }
          function OrdinaryToPrimitive(O, hint) {
            if (hint === "string") {
              var toString_1 = O.toString;
              if (IsCallable(toString_1)) {
                var result = toString_1.call(O);
                if (!IsObject(result))
                  return result;
              }
              var valueOf = O.valueOf;
              if (IsCallable(valueOf)) {
                var result = valueOf.call(O);
                if (!IsObject(result))
                  return result;
              }
            } else {
              var valueOf = O.valueOf;
              if (IsCallable(valueOf)) {
                var result = valueOf.call(O);
                if (!IsObject(result))
                  return result;
              }
              var toString_2 = O.toString;
              if (IsCallable(toString_2)) {
                var result = toString_2.call(O);
                if (!IsObject(result))
                  return result;
              }
            }
            throw new TypeError();
          }
          function ToBoolean(argument) {
            return !!argument;
          }
          function ToString(argument) {
            return "" + argument;
          }
          function ToPropertyKey(argument) {
            var key = ToPrimitive(argument, 3);
            if (IsSymbol(key))
              return key;
            return ToString(key);
          }
          function IsArray(argument) {
            return Array.isArray ? Array.isArray(argument) : argument instanceof Object ? argument instanceof Array : Object.prototype.toString.call(argument) === "[object Array]";
          }
          function IsCallable(argument) {
            return typeof argument === "function";
          }
          function IsConstructor(argument) {
            return typeof argument === "function";
          }
          function IsPropertyKey(argument) {
            switch (Type(argument)) {
              case 3:
                return true;
              case 4:
                return true;
              default:
                return false;
            }
          }
          function GetMethod(V, P) {
            var func = V[P];
            if (func === void 0 || func === null)
              return void 0;
            if (!IsCallable(func))
              throw new TypeError();
            return func;
          }
          function GetIterator(obj) {
            var method = GetMethod(obj, iteratorSymbol);
            if (!IsCallable(method))
              throw new TypeError();
            var iterator = method.call(obj);
            if (!IsObject(iterator))
              throw new TypeError();
            return iterator;
          }
          function IteratorValue(iterResult) {
            return iterResult.value;
          }
          function IteratorStep(iterator) {
            var result = iterator.next();
            return result.done ? false : result;
          }
          function IteratorClose(iterator) {
            var f = iterator["return"];
            if (f)
              f.call(iterator);
          }
          function OrdinaryGetPrototypeOf(O) {
            var proto = Object.getPrototypeOf(O);
            if (typeof O !== "function" || O === functionPrototype)
              return proto;
            if (proto !== functionPrototype)
              return proto;
            var prototype = O.prototype;
            var prototypeProto = prototype && Object.getPrototypeOf(prototype);
            if (prototypeProto == null || prototypeProto === Object.prototype)
              return proto;
            var constructor = prototypeProto.constructor;
            if (typeof constructor !== "function")
              return proto;
            if (constructor === O)
              return proto;
            return constructor;
          }
          function CreateMapPolyfill() {
            var cacheSentinel = {};
            var arraySentinel = [];
            var MapIterator = function() {
              function MapIterator2(keys, values, selector) {
                this._index = 0;
                this._keys = keys;
                this._values = values;
                this._selector = selector;
              }
              MapIterator2.prototype["@@iterator"] = function() {
                return this;
              };
              MapIterator2.prototype[iteratorSymbol] = function() {
                return this;
              };
              MapIterator2.prototype.next = function() {
                var index = this._index;
                if (index >= 0 && index < this._keys.length) {
                  var result = this._selector(this._keys[index], this._values[index]);
                  if (index + 1 >= this._keys.length) {
                    this._index = -1;
                    this._keys = arraySentinel;
                    this._values = arraySentinel;
                  } else {
                    this._index++;
                  }
                  return { value: result, done: false };
                }
                return { value: void 0, done: true };
              };
              MapIterator2.prototype.throw = function(error) {
                if (this._index >= 0) {
                  this._index = -1;
                  this._keys = arraySentinel;
                  this._values = arraySentinel;
                }
                throw error;
              };
              MapIterator2.prototype.return = function(value) {
                if (this._index >= 0) {
                  this._index = -1;
                  this._keys = arraySentinel;
                  this._values = arraySentinel;
                }
                return { value, done: true };
              };
              return MapIterator2;
            }();
            return function() {
              function Map2() {
                this._keys = [];
                this._values = [];
                this._cacheKey = cacheSentinel;
                this._cacheIndex = -2;
              }
              Object.defineProperty(Map2.prototype, "size", {
                get: function() {
                  return this._keys.length;
                },
                enumerable: true,
                configurable: true
              });
              Map2.prototype.has = function(key) {
                return this._find(key, false) >= 0;
              };
              Map2.prototype.get = function(key) {
                var index = this._find(key, false);
                return index >= 0 ? this._values[index] : void 0;
              };
              Map2.prototype.set = function(key, value) {
                var index = this._find(key, true);
                this._values[index] = value;
                return this;
              };
              Map2.prototype.delete = function(key) {
                var index = this._find(key, false);
                if (index >= 0) {
                  var size = this._keys.length;
                  for (var i = index + 1; i < size; i++) {
                    this._keys[i - 1] = this._keys[i];
                    this._values[i - 1] = this._values[i];
                  }
                  this._keys.length--;
                  this._values.length--;
                  if (key === this._cacheKey) {
                    this._cacheKey = cacheSentinel;
                    this._cacheIndex = -2;
                  }
                  return true;
                }
                return false;
              };
              Map2.prototype.clear = function() {
                this._keys.length = 0;
                this._values.length = 0;
                this._cacheKey = cacheSentinel;
                this._cacheIndex = -2;
              };
              Map2.prototype.keys = function() {
                return new MapIterator(this._keys, this._values, getKey);
              };
              Map2.prototype.values = function() {
                return new MapIterator(this._keys, this._values, getValue);
              };
              Map2.prototype.entries = function() {
                return new MapIterator(this._keys, this._values, getEntry);
              };
              Map2.prototype["@@iterator"] = function() {
                return this.entries();
              };
              Map2.prototype[iteratorSymbol] = function() {
                return this.entries();
              };
              Map2.prototype._find = function(key, insert) {
                if (this._cacheKey !== key) {
                  this._cacheIndex = this._keys.indexOf(this._cacheKey = key);
                }
                if (this._cacheIndex < 0 && insert) {
                  this._cacheIndex = this._keys.length;
                  this._keys.push(key);
                  this._values.push(void 0);
                }
                return this._cacheIndex;
              };
              return Map2;
            }();
            function getKey(key, _) {
              return key;
            }
            function getValue(_, value) {
              return value;
            }
            function getEntry(key, value) {
              return [key, value];
            }
          }
          function CreateSetPolyfill() {
            return function() {
              function Set2() {
                this._map = new _Map();
              }
              Object.defineProperty(Set2.prototype, "size", {
                get: function() {
                  return this._map.size;
                },
                enumerable: true,
                configurable: true
              });
              Set2.prototype.has = function(value) {
                return this._map.has(value);
              };
              Set2.prototype.add = function(value) {
                return this._map.set(value, value), this;
              };
              Set2.prototype.delete = function(value) {
                return this._map.delete(value);
              };
              Set2.prototype.clear = function() {
                this._map.clear();
              };
              Set2.prototype.keys = function() {
                return this._map.keys();
              };
              Set2.prototype.values = function() {
                return this._map.values();
              };
              Set2.prototype.entries = function() {
                return this._map.entries();
              };
              Set2.prototype["@@iterator"] = function() {
                return this.keys();
              };
              Set2.prototype[iteratorSymbol] = function() {
                return this.keys();
              };
              return Set2;
            }();
          }
          function CreateWeakMapPolyfill() {
            var UUID_SIZE = 16;
            var keys = HashMap.create();
            var rootKey = CreateUniqueKey();
            return function() {
              function WeakMap2() {
                this._key = CreateUniqueKey();
              }
              WeakMap2.prototype.has = function(target) {
                var table = GetOrCreateWeakMapTable(target, false);
                return table !== void 0 ? HashMap.has(table, this._key) : false;
              };
              WeakMap2.prototype.get = function(target) {
                var table = GetOrCreateWeakMapTable(target, false);
                return table !== void 0 ? HashMap.get(table, this._key) : void 0;
              };
              WeakMap2.prototype.set = function(target, value) {
                var table = GetOrCreateWeakMapTable(target, true);
                table[this._key] = value;
                return this;
              };
              WeakMap2.prototype.delete = function(target) {
                var table = GetOrCreateWeakMapTable(target, false);
                return table !== void 0 ? delete table[this._key] : false;
              };
              WeakMap2.prototype.clear = function() {
                this._key = CreateUniqueKey();
              };
              return WeakMap2;
            }();
            function CreateUniqueKey() {
              var key;
              do
                key = "@@WeakMap@@" + CreateUUID();
              while (HashMap.has(keys, key));
              keys[key] = true;
              return key;
            }
            function GetOrCreateWeakMapTable(target, create) {
              if (!hasOwn.call(target, rootKey)) {
                if (!create)
                  return void 0;
                Object.defineProperty(target, rootKey, { value: HashMap.create() });
              }
              return target[rootKey];
            }
            function FillRandomBytes(buffer, size) {
              for (var i = 0; i < size; ++i)
                buffer[i] = Math.random() * 255 | 0;
              return buffer;
            }
            function GenRandomBytes(size) {
              if (typeof Uint8Array === "function") {
                if (typeof crypto !== "undefined")
                  return crypto.getRandomValues(new Uint8Array(size));
                if (typeof msCrypto !== "undefined")
                  return msCrypto.getRandomValues(new Uint8Array(size));
                return FillRandomBytes(new Uint8Array(size), size);
              }
              return FillRandomBytes(new Array(size), size);
            }
            function CreateUUID() {
              var data = GenRandomBytes(UUID_SIZE);
              data[6] = data[6] & 79 | 64;
              data[8] = data[8] & 191 | 128;
              var result = "";
              for (var offset = 0; offset < UUID_SIZE; ++offset) {
                var byte = data[offset];
                if (offset === 4 || offset === 6 || offset === 8)
                  result += "-";
                if (byte < 16)
                  result += "0";
                result += byte.toString(16).toLowerCase();
              }
              return result;
            }
          }
          function MakeDictionary(obj) {
            obj.__ = void 0;
            delete obj.__;
            return obj;
          }
        });
      })(Reflect2 || (Reflect2 = {}));
    }
  });

  // ../../node_modules/.pnpm/typescript-ioc@3.2.2/node_modules/typescript-ioc/dist/model.js
  var require_model = __commonJS({
    "../../node_modules/.pnpm/typescript-ioc@3.2.2/node_modules/typescript-ioc/dist/model.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var Scope = class {
        reset(_source) {
        }
        init(_source) {
        }
        finish(_source) {
        }
      };
      exports.Scope = Scope;
      var BuildContext = class {
      };
      exports.BuildContext = BuildContext;
    }
  });

  // ../../node_modules/.pnpm/typescript-ioc@3.2.2/node_modules/typescript-ioc/dist/container/injection-handler.js
  var require_injection_handler = __commonJS({
    "../../node_modules/.pnpm/typescript-ioc@3.2.2/node_modules/typescript-ioc/dist/container/injection-handler.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var BUILD_CONTEXT_KEY = "__BuildContext";
      var IOC_WRAPPER_CLASS = "ioc_wrapper";
      var InjectorHandler = class {
        static instrumentConstructor(source) {
          let newConstructor;
          newConstructor = class ioc_wrapper extends source {
            constructor(...args) {
              super(...args);
              InjectorHandler.assertInstantiable();
            }
          };
          newConstructor["__parent"] = source;
          return newConstructor;
        }
        static blockInstantiation(blocked) {
          InjectorHandler.instantiationsBlocked = blocked;
        }
        static unblockInstantiation() {
          const blocked = InjectorHandler.instantiationsBlocked;
          InjectorHandler.instantiationsBlocked = false;
          return blocked;
        }
        static getConstructorFromType(target) {
          let typeConstructor = target;
          if (this.hasNamedConstructor(typeConstructor)) {
            return typeConstructor;
          }
          typeConstructor = typeConstructor["__parent"];
          while (typeConstructor) {
            if (this.hasNamedConstructor(typeConstructor)) {
              return typeConstructor;
            }
            typeConstructor = typeConstructor["__parent"];
          }
          throw TypeError("Can not identify the base Type for requested target " + target.toString());
        }
        static checkType(source) {
          if (!source) {
            throw new TypeError("Invalid type requested to IoC container. Type is not defined.");
          }
        }
        static checkName(source) {
          if (!source) {
            throw new TypeError("Invalid name requested to IoC container. Name is not defined.");
          }
        }
        static injectContext(target, context) {
          target[BUILD_CONTEXT_KEY] = context;
        }
        static removeContext(target) {
          delete target[BUILD_CONTEXT_KEY];
        }
        static injectProperty(target, key, propertyType, instanceFactory) {
          const propKey = `__${key}`;
          Object.defineProperty(target.prototype, key, {
            enumerable: true,
            get: function() {
              const context = this[BUILD_CONTEXT_KEY] || target[BUILD_CONTEXT_KEY];
              return this[propKey] ? this[propKey] : this[propKey] = instanceFactory(propertyType, context);
            },
            set: function(newValue) {
              this[propKey] = newValue;
            }
          });
        }
        static injectValueProperty(target, key, name, valueFactory) {
          const propKey = `__${key}`;
          Object.defineProperty(target.prototype, key, {
            enumerable: true,
            get: function() {
              return this[propKey] ? this[propKey] : this[propKey] = valueFactory(name);
            },
            set: function(newValue) {
              this[propKey] = newValue;
            }
          });
        }
        static hasNamedConstructor(source) {
          if (source["name"]) {
            return source["name"] !== "ioc_wrapper";
          } else {
            try {
              const constructorName = source.prototype.constructor.toString().match(this.constructorNameRegEx)[1];
              return constructorName && constructorName !== IOC_WRAPPER_CLASS;
            } catch (_a) {
            }
            return false;
          }
        }
        static assertInstantiable() {
          if (InjectorHandler.instantiationsBlocked) {
            throw new TypeError("Can not instantiate it. The instantiation is blocked for this class. Ask Container for it, using Container.get");
          }
        }
      };
      exports.InjectorHandler = InjectorHandler;
      InjectorHandler.constructorNameRegEx = /function (\w*)/;
      InjectorHandler.instantiationsBlocked = true;
    }
  });

  // ../../node_modules/.pnpm/lodash.get@4.4.2/node_modules/lodash.get/index.js
  var require_lodash = __commonJS({
    "../../node_modules/.pnpm/lodash.get@4.4.2/node_modules/lodash.get/index.js"(exports, module) {
      var FUNC_ERROR_TEXT = "Expected a function";
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      var INFINITY = 1 / 0;
      var funcTag = "[object Function]";
      var genTag = "[object GeneratorFunction]";
      var symbolTag = "[object Symbol]";
      var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
      var reIsPlainProp = /^\w*$/;
      var reLeadingDot = /^\./;
      var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
      var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
      var reEscapeChar = /\\(\\)?/g;
      var reIsHostCtor = /^\[object .+?Constructor\]$/;
      var freeGlobal = typeof globalThis == "object" && globalThis && globalThis.Object === Object && globalThis;
      var freeSelf = typeof self == "object" && self && self.Object === Object && self;
      var root = freeGlobal || freeSelf || Function("return this")();
      function getValue(object, key) {
        return object == null ? void 0 : object[key];
      }
      function isHostObject(value) {
        var result = false;
        if (value != null && typeof value.toString != "function") {
          try {
            result = !!(value + "");
          } catch (e) {
          }
        }
        return result;
      }
      var arrayProto = Array.prototype;
      var funcProto = Function.prototype;
      var objectProto = Object.prototype;
      var coreJsData = root["__core-js_shared__"];
      var maskSrcKey = function() {
        var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
        return uid ? "Symbol(src)_1." + uid : "";
      }();
      var funcToString = funcProto.toString;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var objectToString = objectProto.toString;
      var reIsNative = RegExp(
        "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      );
      var Symbol2 = root.Symbol;
      var splice = arrayProto.splice;
      var Map2 = getNative(root, "Map");
      var nativeCreate = getNative(Object, "create");
      var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
      var symbolToString = symbolProto ? symbolProto.toString : void 0;
      function Hash(entries) {
        var index = -1, length = entries ? entries.length : 0;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      function hashClear() {
        this.__data__ = nativeCreate ? nativeCreate(null) : {};
      }
      function hashDelete(key) {
        return this.has(key) && delete this.__data__[key];
      }
      function hashGet(key) {
        var data = this.__data__;
        if (nativeCreate) {
          var result = data[key];
          return result === HASH_UNDEFINED ? void 0 : result;
        }
        return hasOwnProperty.call(data, key) ? data[key] : void 0;
      }
      function hashHas(key) {
        var data = this.__data__;
        return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
      }
      function hashSet(key, value) {
        var data = this.__data__;
        data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
        return this;
      }
      Hash.prototype.clear = hashClear;
      Hash.prototype["delete"] = hashDelete;
      Hash.prototype.get = hashGet;
      Hash.prototype.has = hashHas;
      Hash.prototype.set = hashSet;
      function ListCache(entries) {
        var index = -1, length = entries ? entries.length : 0;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      function listCacheClear() {
        this.__data__ = [];
      }
      function listCacheDelete(key) {
        var data = this.__data__, index = assocIndexOf(data, key);
        if (index < 0) {
          return false;
        }
        var lastIndex = data.length - 1;
        if (index == lastIndex) {
          data.pop();
        } else {
          splice.call(data, index, 1);
        }
        return true;
      }
      function listCacheGet(key) {
        var data = this.__data__, index = assocIndexOf(data, key);
        return index < 0 ? void 0 : data[index][1];
      }
      function listCacheHas(key) {
        return assocIndexOf(this.__data__, key) > -1;
      }
      function listCacheSet(key, value) {
        var data = this.__data__, index = assocIndexOf(data, key);
        if (index < 0) {
          data.push([key, value]);
        } else {
          data[index][1] = value;
        }
        return this;
      }
      ListCache.prototype.clear = listCacheClear;
      ListCache.prototype["delete"] = listCacheDelete;
      ListCache.prototype.get = listCacheGet;
      ListCache.prototype.has = listCacheHas;
      ListCache.prototype.set = listCacheSet;
      function MapCache(entries) {
        var index = -1, length = entries ? entries.length : 0;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      function mapCacheClear() {
        this.__data__ = {
          "hash": new Hash(),
          "map": new (Map2 || ListCache)(),
          "string": new Hash()
        };
      }
      function mapCacheDelete(key) {
        return getMapData(this, key)["delete"](key);
      }
      function mapCacheGet(key) {
        return getMapData(this, key).get(key);
      }
      function mapCacheHas(key) {
        return getMapData(this, key).has(key);
      }
      function mapCacheSet(key, value) {
        getMapData(this, key).set(key, value);
        return this;
      }
      MapCache.prototype.clear = mapCacheClear;
      MapCache.prototype["delete"] = mapCacheDelete;
      MapCache.prototype.get = mapCacheGet;
      MapCache.prototype.has = mapCacheHas;
      MapCache.prototype.set = mapCacheSet;
      function assocIndexOf(array, key) {
        var length = array.length;
        while (length--) {
          if (eq(array[length][0], key)) {
            return length;
          }
        }
        return -1;
      }
      function baseGet(object, path) {
        path = isKey(path, object) ? [path] : castPath(path);
        var index = 0, length = path.length;
        while (object != null && index < length) {
          object = object[toKey(path[index++])];
        }
        return index && index == length ? object : void 0;
      }
      function baseIsNative(value) {
        if (!isObject(value) || isMasked(value)) {
          return false;
        }
        var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
        return pattern.test(toSource(value));
      }
      function baseToString(value) {
        if (typeof value == "string") {
          return value;
        }
        if (isSymbol(value)) {
          return symbolToString ? symbolToString.call(value) : "";
        }
        var result = value + "";
        return result == "0" && 1 / value == -INFINITY ? "-0" : result;
      }
      function castPath(value) {
        return isArray(value) ? value : stringToPath(value);
      }
      function getMapData(map, key) {
        var data = map.__data__;
        return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
      }
      function getNative(object, key) {
        var value = getValue(object, key);
        return baseIsNative(value) ? value : void 0;
      }
      function isKey(value, object) {
        if (isArray(value)) {
          return false;
        }
        var type = typeof value;
        if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
          return true;
        }
        return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
      }
      function isKeyable(value) {
        var type = typeof value;
        return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
      }
      function isMasked(func) {
        return !!maskSrcKey && maskSrcKey in func;
      }
      var stringToPath = memoize(function(string) {
        string = toString2(string);
        var result = [];
        if (reLeadingDot.test(string)) {
          result.push("");
        }
        string.replace(rePropName, function(match, number, quote, string2) {
          result.push(quote ? string2.replace(reEscapeChar, "$1") : number || match);
        });
        return result;
      });
      function toKey(value) {
        if (typeof value == "string" || isSymbol(value)) {
          return value;
        }
        var result = value + "";
        return result == "0" && 1 / value == -INFINITY ? "-0" : result;
      }
      function toSource(func) {
        if (func != null) {
          try {
            return funcToString.call(func);
          } catch (e) {
          }
          try {
            return func + "";
          } catch (e) {
          }
        }
        return "";
      }
      function memoize(func, resolver) {
        if (typeof func != "function" || resolver && typeof resolver != "function") {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        var memoized = function() {
          var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
          if (cache.has(key)) {
            return cache.get(key);
          }
          var result = func.apply(this, args);
          memoized.cache = cache.set(key, result);
          return result;
        };
        memoized.cache = new (memoize.Cache || MapCache)();
        return memoized;
      }
      memoize.Cache = MapCache;
      function eq(value, other) {
        return value === other || value !== value && other !== other;
      }
      var isArray = Array.isArray;
      function isFunction(value) {
        var tag = isObject(value) ? objectToString.call(value) : "";
        return tag == funcTag || tag == genTag;
      }
      function isObject(value) {
        var type = typeof value;
        return !!value && (type == "object" || type == "function");
      }
      function isObjectLike(value) {
        return !!value && typeof value == "object";
      }
      function isSymbol(value) {
        return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
      }
      function toString2(value) {
        return value == null ? "" : baseToString(value);
      }
      function get(object, path, defaultValue) {
        var result = object == null ? void 0 : baseGet(object, path);
        return result === void 0 ? defaultValue : result;
      }
      module.exports = get;
    }
  });

  // ../../node_modules/.pnpm/lodash.set@4.3.2/node_modules/lodash.set/index.js
  var require_lodash2 = __commonJS({
    "../../node_modules/.pnpm/lodash.set@4.3.2/node_modules/lodash.set/index.js"(exports, module) {
      var FUNC_ERROR_TEXT = "Expected a function";
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      var INFINITY = 1 / 0;
      var MAX_SAFE_INTEGER = 9007199254740991;
      var funcTag = "[object Function]";
      var genTag = "[object GeneratorFunction]";
      var symbolTag = "[object Symbol]";
      var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
      var reIsPlainProp = /^\w*$/;
      var reLeadingDot = /^\./;
      var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
      var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
      var reEscapeChar = /\\(\\)?/g;
      var reIsHostCtor = /^\[object .+?Constructor\]$/;
      var reIsUint = /^(?:0|[1-9]\d*)$/;
      var freeGlobal = typeof globalThis == "object" && globalThis && globalThis.Object === Object && globalThis;
      var freeSelf = typeof self == "object" && self && self.Object === Object && self;
      var root = freeGlobal || freeSelf || Function("return this")();
      function getValue(object, key) {
        return object == null ? void 0 : object[key];
      }
      function isHostObject(value) {
        var result = false;
        if (value != null && typeof value.toString != "function") {
          try {
            result = !!(value + "");
          } catch (e) {
          }
        }
        return result;
      }
      var arrayProto = Array.prototype;
      var funcProto = Function.prototype;
      var objectProto = Object.prototype;
      var coreJsData = root["__core-js_shared__"];
      var maskSrcKey = function() {
        var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
        return uid ? "Symbol(src)_1." + uid : "";
      }();
      var funcToString = funcProto.toString;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var objectToString = objectProto.toString;
      var reIsNative = RegExp(
        "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      );
      var Symbol2 = root.Symbol;
      var splice = arrayProto.splice;
      var Map2 = getNative(root, "Map");
      var nativeCreate = getNative(Object, "create");
      var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
      var symbolToString = symbolProto ? symbolProto.toString : void 0;
      function Hash(entries) {
        var index = -1, length = entries ? entries.length : 0;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      function hashClear() {
        this.__data__ = nativeCreate ? nativeCreate(null) : {};
      }
      function hashDelete(key) {
        return this.has(key) && delete this.__data__[key];
      }
      function hashGet(key) {
        var data = this.__data__;
        if (nativeCreate) {
          var result = data[key];
          return result === HASH_UNDEFINED ? void 0 : result;
        }
        return hasOwnProperty.call(data, key) ? data[key] : void 0;
      }
      function hashHas(key) {
        var data = this.__data__;
        return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
      }
      function hashSet(key, value) {
        var data = this.__data__;
        data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
        return this;
      }
      Hash.prototype.clear = hashClear;
      Hash.prototype["delete"] = hashDelete;
      Hash.prototype.get = hashGet;
      Hash.prototype.has = hashHas;
      Hash.prototype.set = hashSet;
      function ListCache(entries) {
        var index = -1, length = entries ? entries.length : 0;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      function listCacheClear() {
        this.__data__ = [];
      }
      function listCacheDelete(key) {
        var data = this.__data__, index = assocIndexOf(data, key);
        if (index < 0) {
          return false;
        }
        var lastIndex = data.length - 1;
        if (index == lastIndex) {
          data.pop();
        } else {
          splice.call(data, index, 1);
        }
        return true;
      }
      function listCacheGet(key) {
        var data = this.__data__, index = assocIndexOf(data, key);
        return index < 0 ? void 0 : data[index][1];
      }
      function listCacheHas(key) {
        return assocIndexOf(this.__data__, key) > -1;
      }
      function listCacheSet(key, value) {
        var data = this.__data__, index = assocIndexOf(data, key);
        if (index < 0) {
          data.push([key, value]);
        } else {
          data[index][1] = value;
        }
        return this;
      }
      ListCache.prototype.clear = listCacheClear;
      ListCache.prototype["delete"] = listCacheDelete;
      ListCache.prototype.get = listCacheGet;
      ListCache.prototype.has = listCacheHas;
      ListCache.prototype.set = listCacheSet;
      function MapCache(entries) {
        var index = -1, length = entries ? entries.length : 0;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      function mapCacheClear() {
        this.__data__ = {
          "hash": new Hash(),
          "map": new (Map2 || ListCache)(),
          "string": new Hash()
        };
      }
      function mapCacheDelete(key) {
        return getMapData(this, key)["delete"](key);
      }
      function mapCacheGet(key) {
        return getMapData(this, key).get(key);
      }
      function mapCacheHas(key) {
        return getMapData(this, key).has(key);
      }
      function mapCacheSet(key, value) {
        getMapData(this, key).set(key, value);
        return this;
      }
      MapCache.prototype.clear = mapCacheClear;
      MapCache.prototype["delete"] = mapCacheDelete;
      MapCache.prototype.get = mapCacheGet;
      MapCache.prototype.has = mapCacheHas;
      MapCache.prototype.set = mapCacheSet;
      function assignValue(object, key, value) {
        var objValue = object[key];
        if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
          object[key] = value;
        }
      }
      function assocIndexOf(array, key) {
        var length = array.length;
        while (length--) {
          if (eq(array[length][0], key)) {
            return length;
          }
        }
        return -1;
      }
      function baseIsNative(value) {
        if (!isObject(value) || isMasked(value)) {
          return false;
        }
        var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
        return pattern.test(toSource(value));
      }
      function baseSet(object, path, value, customizer) {
        if (!isObject(object)) {
          return object;
        }
        path = isKey(path, object) ? [path] : castPath(path);
        var index = -1, length = path.length, lastIndex = length - 1, nested = object;
        while (nested != null && ++index < length) {
          var key = toKey(path[index]), newValue = value;
          if (index != lastIndex) {
            var objValue = nested[key];
            newValue = customizer ? customizer(objValue, key, nested) : void 0;
            if (newValue === void 0) {
              newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
            }
          }
          assignValue(nested, key, newValue);
          nested = nested[key];
        }
        return object;
      }
      function baseToString(value) {
        if (typeof value == "string") {
          return value;
        }
        if (isSymbol(value)) {
          return symbolToString ? symbolToString.call(value) : "";
        }
        var result = value + "";
        return result == "0" && 1 / value == -INFINITY ? "-0" : result;
      }
      function castPath(value) {
        return isArray(value) ? value : stringToPath(value);
      }
      function getMapData(map, key) {
        var data = map.__data__;
        return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
      }
      function getNative(object, key) {
        var value = getValue(object, key);
        return baseIsNative(value) ? value : void 0;
      }
      function isIndex(value, length) {
        length = length == null ? MAX_SAFE_INTEGER : length;
        return !!length && (typeof value == "number" || reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
      }
      function isKey(value, object) {
        if (isArray(value)) {
          return false;
        }
        var type = typeof value;
        if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
          return true;
        }
        return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
      }
      function isKeyable(value) {
        var type = typeof value;
        return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
      }
      function isMasked(func) {
        return !!maskSrcKey && maskSrcKey in func;
      }
      var stringToPath = memoize(function(string) {
        string = toString2(string);
        var result = [];
        if (reLeadingDot.test(string)) {
          result.push("");
        }
        string.replace(rePropName, function(match, number, quote, string2) {
          result.push(quote ? string2.replace(reEscapeChar, "$1") : number || match);
        });
        return result;
      });
      function toKey(value) {
        if (typeof value == "string" || isSymbol(value)) {
          return value;
        }
        var result = value + "";
        return result == "0" && 1 / value == -INFINITY ? "-0" : result;
      }
      function toSource(func) {
        if (func != null) {
          try {
            return funcToString.call(func);
          } catch (e) {
          }
          try {
            return func + "";
          } catch (e) {
          }
        }
        return "";
      }
      function memoize(func, resolver) {
        if (typeof func != "function" || resolver && typeof resolver != "function") {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        var memoized = function() {
          var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
          if (cache.has(key)) {
            return cache.get(key);
          }
          var result = func.apply(this, args);
          memoized.cache = cache.set(key, result);
          return result;
        };
        memoized.cache = new (memoize.Cache || MapCache)();
        return memoized;
      }
      memoize.Cache = MapCache;
      function eq(value, other) {
        return value === other || value !== value && other !== other;
      }
      var isArray = Array.isArray;
      function isFunction(value) {
        var tag = isObject(value) ? objectToString.call(value) : "";
        return tag == funcTag || tag == genTag;
      }
      function isObject(value) {
        var type = typeof value;
        return !!value && (type == "object" || type == "function");
      }
      function isObjectLike(value) {
        return !!value && typeof value == "object";
      }
      function isSymbol(value) {
        return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
      }
      function toString2(value) {
        return value == null ? "" : baseToString(value);
      }
      function set(object, path, value) {
        return object == null ? object : baseSet(object, path, value);
      }
      module.exports = set;
    }
  });

  // ../../node_modules/.pnpm/typescript-ioc@3.2.2/node_modules/typescript-ioc/dist/container/container-binding-config.js
  var require_container_binding_config = __commonJS({
    "../../node_modules/.pnpm/typescript-ioc@3.2.2/node_modules/typescript-ioc/dist/container/container-binding-config.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var injection_handler_1 = require_injection_handler();
      var model_1 = require_model();
      var get = require_lodash();
      var set = require_lodash2();
      var IoCBindConfig = class {
        constructor(source, instanceFactory, valueFactory) {
          this.source = source;
          this.instanceFactory = instanceFactory;
          this.valueFactory = valueFactory;
        }
        to(target) {
          injection_handler_1.InjectorHandler.checkType(target);
          const targetSource = injection_handler_1.InjectorHandler.getConstructorFromType(target);
          this.targetSource = targetSource;
          if (this.source === targetSource) {
            this.factory((context) => {
              const params = this.getParameters(context);
              const constructor = this.decoratedConstructor || target;
              return params ? new constructor(...params) : new constructor();
            });
          } else {
            this.factory((context) => {
              return this.instanceFactory(target, context);
            });
          }
          return this;
        }
        factory(factory) {
          this.iocFactory = (context) => {
            const blocked = injection_handler_1.InjectorHandler.unblockInstantiation();
            const constructor = this.decoratedConstructor || this.targetSource || this.source;
            injection_handler_1.InjectorHandler.injectContext(constructor, context);
            const instance = factory(context);
            injection_handler_1.InjectorHandler.removeContext(constructor);
            injection_handler_1.InjectorHandler.injectContext(instance, context);
            injection_handler_1.InjectorHandler.blockInstantiation(blocked);
            return instance;
          };
          if (this.iocScope) {
            this.iocScope.reset(this.source);
          }
          return this;
        }
        scope(scope) {
          if (this.iocScope && this.iocScope !== scope) {
            this.iocScope.finish(this.source);
          }
          this.iocScope = scope;
          if (this.iocScope) {
            this.iocScope.init(this.source);
          }
          return this;
        }
        withParams(...paramTypes) {
          this.paramTypes = paramTypes;
          return this;
        }
        instrumentConstructor() {
          const newConstructor = injection_handler_1.InjectorHandler.instrumentConstructor(this.source);
          this.decoratedConstructor = newConstructor;
          this.source.constructor = newConstructor;
          return this;
        }
        getInstance(context) {
          if (!this.iocScope) {
            this.scope(model_1.Scope.Local);
          }
          return this.iocScope.resolve(this.iocFactory, this.source, context);
        }
        clone() {
          const result = new IoCBindConfig(this.source, this.instanceFactory, this.valueFactory);
          result.iocFactory = this.iocFactory;
          result.iocScope = this.iocScope;
          result.targetSource = this.targetSource;
          result.paramTypes = this.paramTypes;
          result.decoratedConstructor = this.decoratedConstructor;
          return result;
        }
        getParameters(context) {
          if (this.paramTypes) {
            return this.paramTypes.map((paramType) => {
              if (typeof paramType === "string" || paramType instanceof String) {
                return this.valueFactory(paramType);
              }
              return this.instanceFactory(paramType, context);
            });
          }
          return null;
        }
      };
      exports.IoCBindConfig = IoCBindConfig;
      var IoCBindValueConfig = class {
        constructor(name) {
          this.name = name;
        }
        to(value) {
          if (this.path) {
            this.value = this.value || {};
            set(this.value, this.path, value);
          } else {
            this.value = value;
          }
          return this;
        }
        getValue() {
          if (this.path) {
            return get(this.value, this.path);
          }
          return this.value;
        }
        clone() {
          const result = new IoCBindValueConfig(this.name);
          result.path = this.path;
          result.value = this.value;
          return result;
        }
      };
      exports.IoCBindValueConfig = IoCBindValueConfig;
      var PropertyPath = class {
        constructor(name, path) {
          this.name = name;
          this.path = path;
        }
        static parse(value) {
          const index = value.indexOf(".");
          if (index < 0) {
            return new PropertyPath(value);
          } else if (index === 0) {
            throw new TypeError(`Invalid value [${value}] passed to Container.bindName`);
          } else if (index + 1 < value.length) {
            return new PropertyPath(value.substring(0, index), value.substring(index + 1));
          }
          return new PropertyPath(value.substring(0, index));
        }
      };
      exports.PropertyPath = PropertyPath;
    }
  });

  // ../../node_modules/.pnpm/typescript-ioc@3.2.2/node_modules/typescript-ioc/dist/container/container-namespaces.js
  var require_container_namespaces = __commonJS({
    "../../node_modules/.pnpm/typescript-ioc@3.2.2/node_modules/typescript-ioc/dist/container/container-namespaces.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var ContainerNamespaces = class {
        constructor() {
          this.defaultNamespace = new NamespaceBindings(null);
          this.namespaces = /* @__PURE__ */ new Map();
        }
        get(type) {
          let result;
          if (this.currentNamespace) {
            result = this.currentNamespace.get(type);
            if (result) {
              return result;
            }
          }
          return this.defaultNamespace.get(type);
        }
        set(type, bindConfig) {
          (this.currentNamespace || this.defaultNamespace).set(type, bindConfig);
        }
        getValue(name) {
          let result;
          if (this.currentNamespace) {
            result = this.currentNamespace.getValue(name);
            if (result) {
              return result;
            }
          }
          return this.defaultNamespace.getValue(name);
        }
        setValue(name, bindConfig) {
          (this.currentNamespace || this.defaultNamespace).setValue(name, bindConfig);
        }
        selectNamespace(name) {
          if (name) {
            let namespace = this.namespaces.get(name);
            if (!namespace) {
              namespace = new NamespaceBindings(name);
              this.namespaces.set(name, namespace);
            }
            this.currentNamespace = namespace;
          } else {
            this.currentNamespace = null;
          }
        }
        removeNamespace(name) {
          const namespace = this.namespaces.get(name);
          if (namespace) {
            if (this.currentNamespace && namespace.name === this.currentNamespace.name) {
              this.currentNamespace = null;
            }
            namespace.clear();
            this.namespaces.delete(name);
          }
        }
        selectedNamespace() {
          return this.currentNamespace ? this.currentNamespace.name : null;
        }
      };
      exports.ContainerNamespaces = ContainerNamespaces;
      var NamespaceBindings = class {
        constructor(name) {
          this.bindings = /* @__PURE__ */ new Map();
          this.values = /* @__PURE__ */ new Map();
          this.name = name;
        }
        get(type) {
          return this.bindings.get(type);
        }
        set(type, bindConfig) {
          bindConfig.namespace = this.name;
          this.bindings.set(type, bindConfig);
        }
        getValue(name) {
          return this.values.get(name);
        }
        setValue(name, bindConfig) {
          bindConfig.namespace = this.name;
          this.values.set(name, bindConfig);
        }
        clear() {
          this.bindings.clear();
          this.values.clear();
        }
      };
    }
  });

  // ../../node_modules/.pnpm/typescript-ioc@3.2.2/node_modules/typescript-ioc/dist/container/container.js
  var require_container = __commonJS({
    "../../node_modules/.pnpm/typescript-ioc@3.2.2/node_modules/typescript-ioc/dist/container/container.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var injection_handler_1 = require_injection_handler();
      var container_binding_config_1 = require_container_binding_config();
      var container_namespaces_1 = require_container_namespaces();
      var IoCContainer = class {
        static bind(source, readOnly = false) {
          injection_handler_1.InjectorHandler.checkType(source);
          const baseSource = injection_handler_1.InjectorHandler.getConstructorFromType(source);
          let config = IoCContainer.namespaces.get(baseSource);
          if (!config) {
            config = new container_binding_config_1.IoCBindConfig(baseSource, IoCContainer.get, IoCContainer.getValue);
            config.to(source);
            IoCContainer.namespaces.set(baseSource, config);
          } else if (!readOnly && config.namespace !== IoCContainer.namespaces.selectedNamespace()) {
            config = config.clone();
            IoCContainer.namespaces.set(baseSource, config);
          }
          return config;
        }
        static bindName(name, readOnly = false) {
          injection_handler_1.InjectorHandler.checkName(name);
          const property = container_binding_config_1.PropertyPath.parse(name);
          let config = IoCContainer.namespaces.getValue(property.name);
          if (!config) {
            config = new container_binding_config_1.IoCBindValueConfig(property.name);
            IoCContainer.namespaces.setValue(property.name, config);
          } else if (!readOnly && config.namespace !== IoCContainer.namespaces.selectedNamespace()) {
            config = config.clone();
            IoCContainer.namespaces.setValue(property.name, config);
          }
          config.path = property.path;
          return config;
        }
        static get(source, context) {
          const config = IoCContainer.bind(source, true);
          if (!config.iocFactory) {
            config.to(config.source);
          }
          return config.getInstance(context);
        }
        static getValue(name) {
          const config = IoCContainer.bindName(name, true);
          return config.getValue();
        }
        static getType(source) {
          injection_handler_1.InjectorHandler.checkType(source);
          const baseSource = injection_handler_1.InjectorHandler.getConstructorFromType(source);
          const config = IoCContainer.namespaces.get(baseSource);
          if (!config) {
            throw new TypeError(`The type ${source.name} hasn't been registered with the IOC Container`);
          }
          return config.targetSource || config.source;
        }
        static namespace(name) {
          IoCContainer.namespaces.selectNamespace(name);
          return {
            remove: () => {
              if (name) {
                IoCContainer.namespaces.removeNamespace(name);
              }
            }
          };
        }
        static selectedNamespace() {
          return IoCContainer.namespaces.selectedNamespace();
        }
        static injectProperty(target, key, propertyType) {
          injection_handler_1.InjectorHandler.injectProperty(target, key, propertyType, IoCContainer.get);
        }
        static injectValueProperty(target, key, name) {
          injection_handler_1.InjectorHandler.injectValueProperty(target, key, name, IoCContainer.getValue);
        }
        static snapshot() {
          const name = `_snapshot-${IoCContainer.snapshotsCount++}`;
          const namespace = IoCContainer.namespace(name);
          return {
            restore: () => namespace.remove(),
            select: () => IoCContainer.namespace(name)
          };
        }
      };
      exports.IoCContainer = IoCContainer;
      IoCContainer.namespaces = new container_namespaces_1.ContainerNamespaces();
      IoCContainer.snapshotsCount = 0;
    }
  });

  // ../../node_modules/.pnpm/typescript-ioc@3.2.2/node_modules/typescript-ioc/dist/scopes.js
  var require_scopes = __commonJS({
    "../../node_modules/.pnpm/typescript-ioc@3.2.2/node_modules/typescript-ioc/dist/scopes.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var injection_handler_1 = require_injection_handler();
      var model_1 = require_model();
      var LocalScope = class extends model_1.Scope {
        resolve(factory, _source, context) {
          return factory(context);
        }
      };
      exports.LocalScope = LocalScope;
      var SingletonScope = class extends model_1.Scope {
        resolve(factory, source, context) {
          let instance = SingletonScope.instances.get(source);
          if (!instance) {
            instance = factory(context);
            SingletonScope.instances.set(source, instance);
          }
          return instance;
        }
        reset(source) {
          SingletonScope.instances.delete(injection_handler_1.InjectorHandler.getConstructorFromType(source));
        }
        init(source) {
          this.reset(source);
        }
        finish(source) {
          this.reset(source);
        }
      };
      exports.SingletonScope = SingletonScope;
      SingletonScope.instances = /* @__PURE__ */ new Map();
      var RequestScope = class extends model_1.Scope {
        resolve(factory, source, context) {
          this.ensureContext(context);
          return context.build(source, factory);
        }
        ensureContext(context) {
          if (!context) {
            throw new TypeError("IoC Container can not handle this request. When using @InRequestScope in any dependent type, you should be askking to Container to create the instances through Container.get and not calling the type constructor directly.");
          }
        }
      };
      exports.RequestScope = RequestScope;
    }
  });

  // ../../node_modules/.pnpm/typescript-ioc@3.2.2/node_modules/typescript-ioc/dist/decorators.js
  var require_decorators = __commonJS({
    "../../node_modules/.pnpm/typescript-ioc@3.2.2/node_modules/typescript-ioc/dist/decorators.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      require_Reflect();
      var container_1 = require_container();
      var model_1 = require_model();
      function InRequestScope(target) {
        container_1.IoCContainer.bind(target).scope(model_1.Scope.Request);
      }
      exports.InRequestScope = InRequestScope;
      function Singleton(target) {
        container_1.IoCContainer.bind(target).scope(model_1.Scope.Singleton);
      }
      exports.Singleton = Singleton;
      function OnlyInstantiableByContainer(target) {
        return container_1.IoCContainer.bind(target).instrumentConstructor().decoratedConstructor;
      }
      exports.OnlyInstantiableByContainer = OnlyInstantiableByContainer;
      function Scoped(scope) {
        return (target) => {
          container_1.IoCContainer.bind(target).scope(scope);
        };
      }
      exports.Scoped = Scoped;
      function Factory(factory) {
        return (target) => {
          container_1.IoCContainer.bind(target).factory(factory);
        };
      }
      exports.Factory = Factory;
      function Inject(...args) {
        if (args.length === 2 || args.length === 3 && typeof args[2] === "undefined") {
          return InjectPropertyDecorator.apply(this, args);
        } else if (args.length === 3 && typeof args[2] === "number") {
          return InjectParamDecorator.apply(this, args);
        }
        throw new TypeError("Invalid @Inject Decorator declaration.");
      }
      exports.Inject = Inject;
      function InjectValue(value) {
        return (...args) => {
          if (args.length === 2 || args.length === 3 && typeof args[2] === "undefined") {
            const params = [...args, value].filter((v) => v ? true : false);
            return InjectValuePropertyDecorator.apply(this, params);
          } else if (args.length === 3 && typeof args[2] === "number") {
            return InjectValueParamDecorator.apply(this, [...args, value]);
          }
          throw new TypeError("Invalid @InjectValue Decorator declaration.");
        };
      }
      exports.InjectValue = InjectValue;
      function InjectPropertyDecorator(target, key) {
        let t = Reflect.getMetadata("design:type", target, key);
        if (!t) {
          t = Reflect.getMetadata("design:type", target.constructor, key);
        }
        container_1.IoCContainer.injectProperty(target.constructor, key, t);
      }
      function InjectParamDecorator(target, propertyKey, parameterIndex) {
        if (!propertyKey) {
          const config = container_1.IoCContainer.bind(target);
          config.paramTypes = config.paramTypes || [];
          const paramTypes = Reflect.getMetadata("design:paramtypes", target);
          config.paramTypes.unshift(paramTypes[parameterIndex]);
        }
      }
      function InjectValuePropertyDecorator(target, key, value) {
        container_1.IoCContainer.injectValueProperty(target.constructor, key, value);
      }
      function InjectValueParamDecorator(target, propertyKey, _parameterIndex, value) {
        if (!propertyKey) {
          const config = container_1.IoCContainer.bind(target);
          config.paramTypes = config.paramTypes || [];
          config.paramTypes.unshift(value);
        }
      }
    }
  });

  // ../../node_modules/.pnpm/typescript-ioc@3.2.2/node_modules/typescript-ioc/dist/typescript-ioc.js
  var require_typescript_ioc = __commonJS({
    "../../node_modules/.pnpm/typescript-ioc@3.2.2/node_modules/typescript-ioc/dist/typescript-ioc.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      require_Reflect();
      var model_1 = require_model();
      exports.Scope = model_1.Scope;
      exports.BuildContext = model_1.BuildContext;
      var container_1 = require_container();
      var scopes_1 = require_scopes();
      var decorators_1 = require_decorators();
      exports.Inject = decorators_1.Inject;
      exports.Factory = decorators_1.Factory;
      exports.Singleton = decorators_1.Singleton;
      exports.Scoped = decorators_1.Scoped;
      exports.OnlyInstantiableByContainer = decorators_1.OnlyInstantiableByContainer;
      exports.InRequestScope = decorators_1.InRequestScope;
      exports.InjectValue = decorators_1.InjectValue;
      model_1.Scope.Local = new scopes_1.LocalScope();
      model_1.Scope.Singleton = new scopes_1.SingletonScope();
      model_1.Scope.Request = new scopes_1.RequestScope();
      var Container = class {
        static bind(source) {
          return container_1.IoCContainer.bind(source);
        }
        static get(source) {
          return container_1.IoCContainer.get(source, new ContainerBuildContext());
        }
        static getType(source) {
          return container_1.IoCContainer.getType(source);
        }
        static bindName(name) {
          return container_1.IoCContainer.bindName(name);
        }
        static getValue(name) {
          return container_1.IoCContainer.getValue(name);
        }
        static namespace(name) {
          return container_1.IoCContainer.namespace(name);
        }
        static environment(name) {
          return Container.namespace(name);
        }
        static snapshot(_args) {
          return container_1.IoCContainer.snapshot();
        }
        static configure(...configurations) {
          configurations.forEach((config) => {
            if (config.bind) {
              Container.configureType(config);
            } else if (config.bindName) {
              Container.configureConstant(config);
            } else if (config.env || config.namespace) {
              Container.configureNamespace(config);
            }
          });
        }
        static configureNamespace(config) {
          const selectedNamespace = container_1.IoCContainer.selectedNamespace();
          const env = config.env || config.namespace;
          Object.keys(env).forEach((namespace) => {
            Container.namespace(namespace);
            const namespaceConfig = env[namespace];
            Container.configure(...namespaceConfig);
          });
          Container.namespace(selectedNamespace);
        }
        static configureConstant(config) {
          const bind = container_1.IoCContainer.bindName(config.bindName);
          if (bind) {
            if (config.to) {
              bind.to(config.to);
            }
          }
        }
        static configureType(config) {
          const bind = container_1.IoCContainer.bind(config.bind);
          if (bind) {
            if (config.to) {
              bind.to(config.to);
            } else if (config.factory) {
              bind.factory(config.factory);
            }
            if (config.scope) {
              bind.scope(config.scope);
            }
            if (config.withParams) {
              bind.withParams(config.withParams);
            }
          }
        }
      };
      exports.Container = Container;
      var ContainerBuildContext = class extends model_1.BuildContext {
        constructor() {
          super(...arguments);
          this.context = /* @__PURE__ */ new Map();
        }
        build(source, factory) {
          let instance = this.context.get(source);
          if (!instance) {
            instance = factory(this);
            this.context.set(source, instance);
          }
          return instance;
        }
        resolve(source) {
          return container_1.IoCContainer.get(source, this);
        }
      };
    }
  });

  // ../../node_modules/.pnpm/rx-lite@4.0.8/node_modules/rx-lite/rx.lite.js
  var require_rx_lite = __commonJS({
    "../../node_modules/.pnpm/rx-lite@4.0.8/node_modules/rx-lite/rx.lite.js"(exports, module) {
      (function(undefined2) {
        var objectTypes = {
          "function": true,
          "object": true
        };
        function checkGlobal(value) {
          return value && value.Object === Object ? value : null;
        }
        var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType ? exports : null;
        var freeModule = objectTypes[typeof module] && module && !module.nodeType ? module : null;
        var freeGlobal = checkGlobal(freeExports && freeModule && typeof globalThis === "object" && globalThis);
        var freeSelf = checkGlobal(objectTypes[typeof self] && self);
        var freeWindow = checkGlobal(objectTypes[typeof window] && window);
        var moduleExports = freeModule && freeModule.exports === freeExports ? freeExports : null;
        var thisGlobal = checkGlobal(objectTypes[typeof this] && this);
        var root = freeGlobal || freeWindow !== (thisGlobal && thisGlobal.window) && freeWindow || freeSelf || thisGlobal || Function("return this")();
        var Rx = {
          internals: {},
          config: {
            Promise: root.Promise
          },
          helpers: {}
        };
        var noop = Rx.helpers.noop = function() {
        }, identity = Rx.helpers.identity = function(x) {
          return x;
        }, defaultNow = Rx.helpers.defaultNow = Date.now, defaultComparer = Rx.helpers.defaultComparer = function(x, y) {
          return isEqual(x, y);
        }, defaultSubComparer = Rx.helpers.defaultSubComparer = function(x, y) {
          return x > y ? 1 : x < y ? -1 : 0;
        }, defaultKeySerializer = Rx.helpers.defaultKeySerializer = function(x) {
          return x.toString();
        }, defaultError = Rx.helpers.defaultError = function(err) {
          throw err;
        }, isPromise = Rx.helpers.isPromise = function(p) {
          return !!p && typeof p.subscribe !== "function" && typeof p.then === "function";
        }, isFunction = Rx.helpers.isFunction = function() {
          var isFn = function(value) {
            return typeof value == "function" || false;
          };
          if (isFn(/x/)) {
            isFn = function(value) {
              return typeof value == "function" && toString.call(value) == "[object Function]";
            };
          }
          return isFn;
        }();
        function cloneArray(arr) {
          var len = arr.length, a = new Array(len);
          for (var i = 0; i < len; i++) {
            a[i] = arr[i];
          }
          return a;
        }
        var errorObj = { e: {} };
        function tryCatcherGen(tryCatchTarget) {
          return function tryCatcher() {
            try {
              return tryCatchTarget.apply(this, arguments);
            } catch (e) {
              errorObj.e = e;
              return errorObj;
            }
          };
        }
        var tryCatch = Rx.internals.tryCatch = function tryCatch2(fn) {
          if (!isFunction(fn)) {
            throw new TypeError("fn must be a function");
          }
          return tryCatcherGen(fn);
        };
        function thrower(e) {
          throw e;
        }
        Rx.config.longStackSupport = false;
        var hasStacks = false, stacks = tryCatch(function() {
          throw new Error();
        })();
        hasStacks = !!stacks.e && !!stacks.e.stack;
        var rStartingLine = captureLine(), rFileName;
        var STACK_JUMP_SEPARATOR = "From previous event:";
        function makeStackTraceLong(error, observable) {
          if (hasStacks && observable.stack && typeof error === "object" && error !== null && error.stack && error.stack.indexOf(STACK_JUMP_SEPARATOR) === -1) {
            var stacks2 = [];
            for (var o = observable; !!o; o = o.source) {
              if (o.stack) {
                stacks2.unshift(o.stack);
              }
            }
            stacks2.unshift(error.stack);
            var concatedStacks = stacks2.join("\n" + STACK_JUMP_SEPARATOR + "\n");
            error.stack = filterStackString(concatedStacks);
          }
        }
        function filterStackString(stackString) {
          var lines = stackString.split("\n"), desiredLines = [];
          for (var i = 0, len = lines.length; i < len; i++) {
            var line = lines[i];
            if (!isInternalFrame(line) && !isNodeFrame(line) && line) {
              desiredLines.push(line);
            }
          }
          return desiredLines.join("\n");
        }
        function isInternalFrame(stackLine) {
          var fileNameAndLineNumber = getFileNameAndLineNumber(stackLine);
          if (!fileNameAndLineNumber) {
            return false;
          }
          var fileName = fileNameAndLineNumber[0], lineNumber = fileNameAndLineNumber[1];
          return fileName === rFileName && lineNumber >= rStartingLine && lineNumber <= rEndingLine;
        }
        function isNodeFrame(stackLine) {
          return stackLine.indexOf("(module.js:") !== -1 || stackLine.indexOf("(node.js:") !== -1;
        }
        function captureLine() {
          if (!hasStacks) {
            return;
          }
          try {
            throw new Error();
          } catch (e) {
            var lines = e.stack.split("\n");
            var firstLine = lines[0].indexOf("@") > 0 ? lines[1] : lines[2];
            var fileNameAndLineNumber = getFileNameAndLineNumber(firstLine);
            if (!fileNameAndLineNumber) {
              return;
            }
            rFileName = fileNameAndLineNumber[0];
            return fileNameAndLineNumber[1];
          }
        }
        function getFileNameAndLineNumber(stackLine) {
          var attempt1 = /at .+ \((.+):(\d+):(?:\d+)\)$/.exec(stackLine);
          if (attempt1) {
            return [attempt1[1], Number(attempt1[2])];
          }
          var attempt2 = /at ([^ ]+):(\d+):(?:\d+)$/.exec(stackLine);
          if (attempt2) {
            return [attempt2[1], Number(attempt2[2])];
          }
          var attempt3 = /.*@(.+):(\d+)$/.exec(stackLine);
          if (attempt3) {
            return [attempt3[1], Number(attempt3[2])];
          }
        }
        var EmptyError = Rx.EmptyError = function() {
          this.message = "Sequence contains no elements.";
          Error.call(this);
        };
        EmptyError.prototype = Object.create(Error.prototype);
        EmptyError.prototype.name = "EmptyError";
        var ObjectDisposedError = Rx.ObjectDisposedError = function() {
          this.message = "Object has been disposed";
          Error.call(this);
        };
        ObjectDisposedError.prototype = Object.create(Error.prototype);
        ObjectDisposedError.prototype.name = "ObjectDisposedError";
        var ArgumentOutOfRangeError = Rx.ArgumentOutOfRangeError = function() {
          this.message = "Argument out of range";
          Error.call(this);
        };
        ArgumentOutOfRangeError.prototype = Object.create(Error.prototype);
        ArgumentOutOfRangeError.prototype.name = "ArgumentOutOfRangeError";
        var NotSupportedError = Rx.NotSupportedError = function(message) {
          this.message = message || "This operation is not supported";
          Error.call(this);
        };
        NotSupportedError.prototype = Object.create(Error.prototype);
        NotSupportedError.prototype.name = "NotSupportedError";
        var NotImplementedError = Rx.NotImplementedError = function(message) {
          this.message = message || "This operation is not implemented";
          Error.call(this);
        };
        NotImplementedError.prototype = Object.create(Error.prototype);
        NotImplementedError.prototype.name = "NotImplementedError";
        var notImplemented = Rx.helpers.notImplemented = function() {
          throw new NotImplementedError();
        };
        var notSupported = Rx.helpers.notSupported = function() {
          throw new NotSupportedError();
        };
        var $iterator$ = typeof Symbol === "function" && Symbol.iterator || "_es6shim_iterator_";
        if (root.Set && typeof new root.Set()["@@iterator"] === "function") {
          $iterator$ = "@@iterator";
        }
        var doneEnumerator = Rx.doneEnumerator = { done: true, value: undefined2 };
        var isIterable = Rx.helpers.isIterable = function(o) {
          return o && o[$iterator$] !== undefined2;
        };
        var isArrayLike = Rx.helpers.isArrayLike = function(o) {
          return o && o.length !== undefined2;
        };
        Rx.helpers.iterator = $iterator$;
        var bindCallback = Rx.internals.bindCallback = function(func, thisArg, argCount) {
          if (typeof thisArg === "undefined") {
            return func;
          }
          switch (argCount) {
            case 0:
              return function() {
                return func.call(thisArg);
              };
            case 1:
              return function(arg) {
                return func.call(thisArg, arg);
              };
            case 2:
              return function(value, index) {
                return func.call(thisArg, value, index);
              };
            case 3:
              return function(value, index, collection) {
                return func.call(thisArg, value, index, collection);
              };
          }
          return function() {
            return func.apply(thisArg, arguments);
          };
        };
        var dontEnums = [
          "toString",
          "toLocaleString",
          "valueOf",
          "hasOwnProperty",
          "isPrototypeOf",
          "propertyIsEnumerable",
          "constructor"
        ], dontEnumsLength = dontEnums.length;
        var argsTag = "[object Arguments]", arrayTag = "[object Array]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", mapTag = "[object Map]", numberTag = "[object Number]", objectTag = "[object Object]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", weakMapTag = "[object WeakMap]";
        var arrayBufferTag = "[object ArrayBuffer]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
        var typedArrayTags = {};
        typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
        typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
        var objectProto = Object.prototype, hasOwnProperty = objectProto.hasOwnProperty, objToString = objectProto.toString, MAX_SAFE_INTEGER = Math.pow(2, 53) - 1;
        var keys = Object.keys || function() {
          var hasOwnProperty2 = Object.prototype.hasOwnProperty, hasDontEnumBug = !{ toString: null }.propertyIsEnumerable("toString"), dontEnums2 = [
            "toString",
            "toLocaleString",
            "valueOf",
            "hasOwnProperty",
            "isPrototypeOf",
            "propertyIsEnumerable",
            "constructor"
          ], dontEnumsLength2 = dontEnums2.length;
          return function(obj) {
            if (typeof obj !== "object" && (typeof obj !== "function" || obj === null)) {
              throw new TypeError("Object.keys called on non-object");
            }
            var result = [], prop, i;
            for (prop in obj) {
              if (hasOwnProperty2.call(obj, prop)) {
                result.push(prop);
              }
            }
            if (hasDontEnumBug) {
              for (i = 0; i < dontEnumsLength2; i++) {
                if (hasOwnProperty2.call(obj, dontEnums2[i])) {
                  result.push(dontEnums2[i]);
                }
              }
            }
            return result;
          };
        }();
        function equalObjects(object, other, equalFunc, isLoose, stackA, stackB) {
          var objProps = keys(object), objLength = objProps.length, othProps = keys(other), othLength = othProps.length;
          if (objLength !== othLength && !isLoose) {
            return false;
          }
          var index = objLength, key;
          while (index--) {
            key = objProps[index];
            if (!(isLoose ? key in other : hasOwnProperty.call(other, key))) {
              return false;
            }
          }
          var skipCtor = isLoose;
          while (++index < objLength) {
            key = objProps[index];
            var objValue = object[key], othValue = other[key], result;
            if (!(result === undefined2 ? equalFunc(objValue, othValue, isLoose, stackA, stackB) : result)) {
              return false;
            }
            skipCtor || (skipCtor = key === "constructor");
          }
          if (!skipCtor) {
            var objCtor = object.constructor, othCtor = other.constructor;
            if (objCtor !== othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor === "function" && objCtor instanceof objCtor && typeof othCtor === "function" && othCtor instanceof othCtor)) {
              return false;
            }
          }
          return true;
        }
        function equalByTag(object, other, tag) {
          switch (tag) {
            case boolTag:
            case dateTag:
              return +object === +other;
            case errorTag:
              return object.name === other.name && object.message === other.message;
            case numberTag:
              return object !== +object ? other !== +other : object === +other;
            case regexpTag:
            case stringTag:
              return object === other + "";
          }
          return false;
        }
        var isObject = Rx.internals.isObject = function(value) {
          var type = typeof value;
          return !!value && (type === "object" || type === "function");
        };
        function isObjectLike(value) {
          return !!value && typeof value === "object";
        }
        function isLength(value) {
          return typeof value === "number" && value > -1 && value % 1 === 0 && value <= MAX_SAFE_INTEGER;
        }
        var isHostObject = function() {
          try {
            Object({ "toString": 0 } + "");
          } catch (e) {
            return function() {
              return false;
            };
          }
          return function(value) {
            return typeof value.toString !== "function" && typeof (value + "") === "string";
          };
        }();
        function isTypedArray(value) {
          return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[objToString.call(value)];
        }
        var isArray = Array.isArray || function(value) {
          return isObjectLike(value) && isLength(value.length) && objToString.call(value) === arrayTag;
        };
        function arraySome(array, predicate) {
          var index = -1, length = array.length;
          while (++index < length) {
            if (predicate(array[index], index, array)) {
              return true;
            }
          }
          return false;
        }
        function equalArrays(array, other, equalFunc, isLoose, stackA, stackB) {
          var index = -1, arrLength = array.length, othLength = other.length;
          if (arrLength !== othLength && !(isLoose && othLength > arrLength)) {
            return false;
          }
          while (++index < arrLength) {
            var arrValue = array[index], othValue = other[index], result;
            if (result !== undefined2) {
              if (result) {
                continue;
              }
              return false;
            }
            if (isLoose) {
              if (!arraySome(other, function(othValue2) {
                return arrValue === othValue2 || equalFunc(arrValue, othValue2, isLoose, stackA, stackB);
              })) {
                return false;
              }
            } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, isLoose, stackA, stackB))) {
              return false;
            }
          }
          return true;
        }
        function baseIsEqualDeep(object, other, equalFunc, isLoose, stackA, stackB) {
          var objIsArr = isArray(object), othIsArr = isArray(other), objTag = arrayTag, othTag = arrayTag;
          if (!objIsArr) {
            objTag = objToString.call(object);
            if (objTag === argsTag) {
              objTag = objectTag;
            } else if (objTag !== objectTag) {
              objIsArr = isTypedArray(object);
            }
          }
          if (!othIsArr) {
            othTag = objToString.call(other);
            if (othTag === argsTag) {
              othTag = objectTag;
            }
          }
          var objIsObj = objTag === objectTag && !isHostObject(object), othIsObj = othTag === objectTag && !isHostObject(other), isSameTag = objTag === othTag;
          if (isSameTag && !(objIsArr || objIsObj)) {
            return equalByTag(object, other, objTag);
          }
          if (!isLoose) {
            var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
            if (objIsWrapped || othIsWrapped) {
              return equalFunc(objIsWrapped ? object.value() : object, othIsWrapped ? other.value() : other, isLoose, stackA, stackB);
            }
          }
          if (!isSameTag) {
            return false;
          }
          stackA || (stackA = []);
          stackB || (stackB = []);
          var length = stackA.length;
          while (length--) {
            if (stackA[length] === object) {
              return stackB[length] === other;
            }
          }
          stackA.push(object);
          stackB.push(other);
          var result = (objIsArr ? equalArrays : equalObjects)(object, other, equalFunc, isLoose, stackA, stackB);
          stackA.pop();
          stackB.pop();
          return result;
        }
        function baseIsEqual(value, other, isLoose, stackA, stackB) {
          if (value === other) {
            return true;
          }
          if (value == null || other == null || !isObject(value) && !isObjectLike(other)) {
            return value !== value && other !== other;
          }
          return baseIsEqualDeep(value, other, baseIsEqual, isLoose, stackA, stackB);
        }
        var isEqual = Rx.internals.isEqual = function(value, other) {
          return baseIsEqual(value, other);
        };
        var hasProp = {}.hasOwnProperty, slice = Array.prototype.slice;
        var inherits = Rx.internals.inherits = function(child, parent) {
          function __() {
            this.constructor = child;
          }
          __.prototype = parent.prototype;
          child.prototype = new __();
        };
        var addProperties = Rx.internals.addProperties = function(obj) {
          for (var sources = [], i = 1, len = arguments.length; i < len; i++) {
            sources.push(arguments[i]);
          }
          for (var idx = 0, ln = sources.length; idx < ln; idx++) {
            var source = sources[idx];
            for (var prop in source) {
              obj[prop] = source[prop];
            }
          }
        };
        var addRef = Rx.internals.addRef = function(xs, r) {
          return new AnonymousObservable(function(observer) {
            return new BinaryDisposable(r.getDisposable(), xs.subscribe(observer));
          });
        };
        function arrayInitialize(count, factory) {
          var a = new Array(count);
          for (var i = 0; i < count; i++) {
            a[i] = factory();
          }
          return a;
        }
        var CompositeDisposable = Rx.CompositeDisposable = function() {
          var args = [], i, len;
          if (Array.isArray(arguments[0])) {
            args = arguments[0];
          } else {
            len = arguments.length;
            args = new Array(len);
            for (i = 0; i < len; i++) {
              args[i] = arguments[i];
            }
          }
          this.disposables = args;
          this.isDisposed = false;
          this.length = args.length;
        };
        var CompositeDisposablePrototype = CompositeDisposable.prototype;
        CompositeDisposablePrototype.add = function(item) {
          if (this.isDisposed) {
            item.dispose();
          } else {
            this.disposables.push(item);
            this.length++;
          }
        };
        CompositeDisposablePrototype.remove = function(item) {
          var shouldDispose = false;
          if (!this.isDisposed) {
            var idx = this.disposables.indexOf(item);
            if (idx !== -1) {
              shouldDispose = true;
              this.disposables.splice(idx, 1);
              this.length--;
              item.dispose();
            }
          }
          return shouldDispose;
        };
        CompositeDisposablePrototype.dispose = function() {
          if (!this.isDisposed) {
            this.isDisposed = true;
            var len = this.disposables.length, currentDisposables = new Array(len);
            for (var i = 0; i < len; i++) {
              currentDisposables[i] = this.disposables[i];
            }
            this.disposables = [];
            this.length = 0;
            for (i = 0; i < len; i++) {
              currentDisposables[i].dispose();
            }
          }
        };
        var Disposable = Rx.Disposable = function(action) {
          this.isDisposed = false;
          this.action = action || noop;
        };
        Disposable.prototype.dispose = function() {
          if (!this.isDisposed) {
            this.action();
            this.isDisposed = true;
          }
        };
        var disposableCreate = Disposable.create = function(action) {
          return new Disposable(action);
        };
        var disposableEmpty = Disposable.empty = { dispose: noop };
        var isDisposable = Disposable.isDisposable = function(d) {
          return d && isFunction(d.dispose);
        };
        var checkDisposed = Disposable.checkDisposed = function(disposable) {
          if (disposable.isDisposed) {
            throw new ObjectDisposedError();
          }
        };
        var disposableFixup = Disposable._fixup = function(result) {
          return isDisposable(result) ? result : disposableEmpty;
        };
        var SingleAssignmentDisposable = Rx.SingleAssignmentDisposable = function() {
          this.isDisposed = false;
          this.current = null;
        };
        SingleAssignmentDisposable.prototype.getDisposable = function() {
          return this.current;
        };
        SingleAssignmentDisposable.prototype.setDisposable = function(value) {
          if (this.current) {
            throw new Error("Disposable has already been assigned");
          }
          var shouldDispose = this.isDisposed;
          !shouldDispose && (this.current = value);
          shouldDispose && value && value.dispose();
        };
        SingleAssignmentDisposable.prototype.dispose = function() {
          if (!this.isDisposed) {
            this.isDisposed = true;
            var old = this.current;
            this.current = null;
            old && old.dispose();
          }
        };
        var SerialDisposable = Rx.SerialDisposable = function() {
          this.isDisposed = false;
          this.current = null;
        };
        SerialDisposable.prototype.getDisposable = function() {
          return this.current;
        };
        SerialDisposable.prototype.setDisposable = function(value) {
          var shouldDispose = this.isDisposed;
          if (!shouldDispose) {
            var old = this.current;
            this.current = value;
          }
          old && old.dispose();
          shouldDispose && value && value.dispose();
        };
        SerialDisposable.prototype.dispose = function() {
          if (!this.isDisposed) {
            this.isDisposed = true;
            var old = this.current;
            this.current = null;
          }
          old && old.dispose();
        };
        var BinaryDisposable = Rx.BinaryDisposable = function(first, second) {
          this._first = first;
          this._second = second;
          this.isDisposed = false;
        };
        BinaryDisposable.prototype.dispose = function() {
          if (!this.isDisposed) {
            this.isDisposed = true;
            var old1 = this._first;
            this._first = null;
            old1 && old1.dispose();
            var old2 = this._second;
            this._second = null;
            old2 && old2.dispose();
          }
        };
        var NAryDisposable = Rx.NAryDisposable = function(disposables) {
          this._disposables = disposables;
          this.isDisposed = false;
        };
        NAryDisposable.prototype.dispose = function() {
          if (!this.isDisposed) {
            this.isDisposed = true;
            for (var i = 0, len = this._disposables.length; i < len; i++) {
              this._disposables[i].dispose();
            }
            this._disposables.length = 0;
          }
        };
        var RefCountDisposable = Rx.RefCountDisposable = function() {
          function InnerDisposable(disposable) {
            this.disposable = disposable;
            this.disposable.count++;
            this.isInnerDisposed = false;
          }
          InnerDisposable.prototype.dispose = function() {
            if (!this.disposable.isDisposed && !this.isInnerDisposed) {
              this.isInnerDisposed = true;
              this.disposable.count--;
              if (this.disposable.count === 0 && this.disposable.isPrimaryDisposed) {
                this.disposable.isDisposed = true;
                this.disposable.underlyingDisposable.dispose();
              }
            }
          };
          function RefCountDisposable2(disposable) {
            this.underlyingDisposable = disposable;
            this.isDisposed = false;
            this.isPrimaryDisposed = false;
            this.count = 0;
          }
          RefCountDisposable2.prototype.dispose = function() {
            if (!this.isDisposed && !this.isPrimaryDisposed) {
              this.isPrimaryDisposed = true;
              if (this.count === 0) {
                this.isDisposed = true;
                this.underlyingDisposable.dispose();
              }
            }
          };
          RefCountDisposable2.prototype.getDisposable = function() {
            return this.isDisposed ? disposableEmpty : new InnerDisposable(this);
          };
          return RefCountDisposable2;
        }();
        var ScheduledItem = Rx.internals.ScheduledItem = function(scheduler, state, action, dueTime, comparer) {
          this.scheduler = scheduler;
          this.state = state;
          this.action = action;
          this.dueTime = dueTime;
          this.comparer = comparer || defaultSubComparer;
          this.disposable = new SingleAssignmentDisposable();
        };
        ScheduledItem.prototype.invoke = function() {
          this.disposable.setDisposable(this.invokeCore());
        };
        ScheduledItem.prototype.compareTo = function(other) {
          return this.comparer(this.dueTime, other.dueTime);
        };
        ScheduledItem.prototype.isCancelled = function() {
          return this.disposable.isDisposed;
        };
        ScheduledItem.prototype.invokeCore = function() {
          return disposableFixup(this.action(this.scheduler, this.state));
        };
        var Scheduler = Rx.Scheduler = function() {
          function Scheduler2() {
          }
          Scheduler2.isScheduler = function(s) {
            return s instanceof Scheduler2;
          };
          var schedulerProto = Scheduler2.prototype;
          schedulerProto.schedule = function(state, action) {
            throw new NotImplementedError();
          };
          schedulerProto.scheduleFuture = function(state, dueTime, action) {
            var dt = dueTime;
            dt instanceof Date && (dt = dt - this.now());
            dt = Scheduler2.normalize(dt);
            if (dt === 0) {
              return this.schedule(state, action);
            }
            return this._scheduleFuture(state, dt, action);
          };
          schedulerProto._scheduleFuture = function(state, dueTime, action) {
            throw new NotImplementedError();
          };
          Scheduler2.now = defaultNow;
          Scheduler2.prototype.now = defaultNow;
          Scheduler2.normalize = function(timeSpan) {
            timeSpan < 0 && (timeSpan = 0);
            return timeSpan;
          };
          return Scheduler2;
        }();
        var normalizeTime = Scheduler.normalize, isScheduler = Scheduler.isScheduler;
        (function(schedulerProto) {
          function invokeRecImmediate(scheduler, pair) {
            var state = pair[0], action = pair[1], group = new CompositeDisposable();
            action(state, innerAction);
            return group;
            function innerAction(state2) {
              var isAdded = false, isDone = false;
              var d = scheduler.schedule(state2, scheduleWork);
              if (!isDone) {
                group.add(d);
                isAdded = true;
              }
              function scheduleWork(_, state3) {
                if (isAdded) {
                  group.remove(d);
                } else {
                  isDone = true;
                }
                action(state3, innerAction);
                return disposableEmpty;
              }
            }
          }
          function invokeRecDate(scheduler, pair) {
            var state = pair[0], action = pair[1], group = new CompositeDisposable();
            action(state, innerAction);
            return group;
            function innerAction(state2, dueTime1) {
              var isAdded = false, isDone = false;
              var d = scheduler.scheduleFuture(state2, dueTime1, scheduleWork);
              if (!isDone) {
                group.add(d);
                isAdded = true;
              }
              function scheduleWork(_, state3) {
                if (isAdded) {
                  group.remove(d);
                } else {
                  isDone = true;
                }
                action(state3, innerAction);
                return disposableEmpty;
              }
            }
          }
          schedulerProto.scheduleRecursive = function(state, action) {
            return this.schedule([state, action], invokeRecImmediate);
          };
          schedulerProto.scheduleRecursiveFuture = function(state, dueTime, action) {
            return this.scheduleFuture([state, action], dueTime, invokeRecDate);
          };
        })(Scheduler.prototype);
        (function(schedulerProto) {
          schedulerProto.schedulePeriodic = function(state, period, action) {
            if (typeof root.setInterval === "undefined") {
              throw new NotSupportedError();
            }
            period = normalizeTime(period);
            var s = state, id = root.setInterval(function() {
              s = action(s);
            }, period);
            return disposableCreate(function() {
              root.clearInterval(id);
            });
          };
        })(Scheduler.prototype);
        var ImmediateScheduler = function(__super__) {
          inherits(ImmediateScheduler2, __super__);
          function ImmediateScheduler2() {
            __super__.call(this);
          }
          ImmediateScheduler2.prototype.schedule = function(state, action) {
            return disposableFixup(action(this, state));
          };
          return ImmediateScheduler2;
        }(Scheduler);
        var immediateScheduler = Scheduler.immediate = new ImmediateScheduler();
        var CurrentThreadScheduler = function(__super__) {
          var queue;
          function runTrampoline() {
            while (queue.length > 0) {
              var item = queue.dequeue();
              !item.isCancelled() && item.invoke();
            }
          }
          inherits(CurrentThreadScheduler2, __super__);
          function CurrentThreadScheduler2() {
            __super__.call(this);
          }
          CurrentThreadScheduler2.prototype.schedule = function(state, action) {
            var si = new ScheduledItem(this, state, action, this.now());
            if (!queue) {
              queue = new PriorityQueue(4);
              queue.enqueue(si);
              var result = tryCatch(runTrampoline)();
              queue = null;
              if (result === errorObj) {
                thrower(result.e);
              }
            } else {
              queue.enqueue(si);
            }
            return si.disposable;
          };
          CurrentThreadScheduler2.prototype.scheduleRequired = function() {
            return !queue;
          };
          return CurrentThreadScheduler2;
        }(Scheduler);
        var currentThreadScheduler = Scheduler.currentThread = new CurrentThreadScheduler();
        var SchedulePeriodicRecursive = Rx.internals.SchedulePeriodicRecursive = function() {
          function createTick(self2) {
            return function tick(command, recurse) {
              recurse(0, self2._period);
              var state = tryCatch(self2._action)(self2._state);
              if (state === errorObj) {
                self2._cancel.dispose();
                thrower(state.e);
              }
              self2._state = state;
            };
          }
          function SchedulePeriodicRecursive2(scheduler, state, period, action) {
            this._scheduler = scheduler;
            this._state = state;
            this._period = period;
            this._action = action;
          }
          SchedulePeriodicRecursive2.prototype.start = function() {
            var d = new SingleAssignmentDisposable();
            this._cancel = d;
            d.setDisposable(this._scheduler.scheduleRecursiveFuture(0, this._period, createTick(this)));
            return d;
          };
          return SchedulePeriodicRecursive2;
        }();
        var scheduleMethod, clearMethod;
        var localTimer = function() {
          var localSetTimeout2, localClearTimeout2 = noop;
          if (!!root.setTimeout) {
            localSetTimeout2 = root.setTimeout;
            localClearTimeout2 = root.clearTimeout;
          } else if (!!root.WScript) {
            localSetTimeout2 = function(fn, time) {
              root.WScript.Sleep(time);
              fn();
            };
          } else {
            throw new NotSupportedError();
          }
          return {
            setTimeout: localSetTimeout2,
            clearTimeout: localClearTimeout2
          };
        }();
        var localSetTimeout = localTimer.setTimeout, localClearTimeout = localTimer.clearTimeout;
        (function() {
          var nextHandle = 1, tasksByHandle = {}, currentlyRunning = false;
          clearMethod = function(handle) {
            delete tasksByHandle[handle];
          };
          function runTask(handle) {
            if (currentlyRunning) {
              localSetTimeout(function() {
                runTask(handle);
              }, 0);
            } else {
              var task = tasksByHandle[handle];
              if (task) {
                currentlyRunning = true;
                var result = tryCatch(task)();
                clearMethod(handle);
                currentlyRunning = false;
                if (result === errorObj) {
                  thrower(result.e);
                }
              }
            }
          }
          var reNative = new RegExp(
            "^" + String(toString).replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/toString| for [^\]]+/g, ".*?") + "$"
          );
          var setImmediate = typeof (setImmediate = freeGlobal && moduleExports && freeGlobal.setImmediate) == "function" && !reNative.test(setImmediate) && setImmediate;
          function postMessageSupported() {
            if (!root.postMessage || root.importScripts) {
              return false;
            }
            var isAsync = false, oldHandler = root.onmessage;
            root.onmessage = function() {
              isAsync = true;
            };
            root.postMessage("", "*");
            root.onmessage = oldHandler;
            return isAsync;
          }
          if (isFunction(setImmediate)) {
            scheduleMethod = function(action) {
              var id = nextHandle++;
              tasksByHandle[id] = action;
              setImmediate(function() {
                runTask(id);
              });
              return id;
            };
          } else if (typeof process !== "undefined" && {}.toString.call(process) === "[object process]") {
            scheduleMethod = function(action) {
              var id = nextHandle++;
              tasksByHandle[id] = action;
              process.nextTick(function() {
                runTask(id);
              });
              return id;
            };
          } else if (postMessageSupported()) {
            var MSG_PREFIX = "ms.rx.schedule" + Math.random();
            var onGlobalPostMessage = function(event) {
              if (typeof event.data === "string" && event.data.substring(0, MSG_PREFIX.length) === MSG_PREFIX) {
                runTask(event.data.substring(MSG_PREFIX.length));
              }
            };
            root.addEventListener("message", onGlobalPostMessage, false);
            scheduleMethod = function(action) {
              var id = nextHandle++;
              tasksByHandle[id] = action;
              root.postMessage(MSG_PREFIX + id, "*");
              return id;
            };
          } else if (!!root.MessageChannel) {
            var channel = new root.MessageChannel();
            channel.port1.onmessage = function(e) {
              runTask(e.data);
            };
            scheduleMethod = function(action) {
              var id = nextHandle++;
              tasksByHandle[id] = action;
              channel.port2.postMessage(id);
              return id;
            };
          } else if ("document" in root && "onreadystatechange" in root.document.createElement("script")) {
            scheduleMethod = function(action) {
              var scriptElement = root.document.createElement("script");
              var id = nextHandle++;
              tasksByHandle[id] = action;
              scriptElement.onreadystatechange = function() {
                runTask(id);
                scriptElement.onreadystatechange = null;
                scriptElement.parentNode.removeChild(scriptElement);
                scriptElement = null;
              };
              root.document.documentElement.appendChild(scriptElement);
              return id;
            };
          } else {
            scheduleMethod = function(action) {
              var id = nextHandle++;
              tasksByHandle[id] = action;
              localSetTimeout(function() {
                runTask(id);
              }, 0);
              return id;
            };
          }
        })();
        var DefaultScheduler = function(__super__) {
          inherits(DefaultScheduler2, __super__);
          function DefaultScheduler2() {
            __super__.call(this);
          }
          function scheduleAction(disposable, action, scheduler, state) {
            return function schedule() {
              disposable.setDisposable(Disposable._fixup(action(scheduler, state)));
            };
          }
          function ClearDisposable(id) {
            this._id = id;
            this.isDisposed = false;
          }
          ClearDisposable.prototype.dispose = function() {
            if (!this.isDisposed) {
              this.isDisposed = true;
              clearMethod(this._id);
            }
          };
          function LocalClearDisposable(id) {
            this._id = id;
            this.isDisposed = false;
          }
          LocalClearDisposable.prototype.dispose = function() {
            if (!this.isDisposed) {
              this.isDisposed = true;
              localClearTimeout(this._id);
            }
          };
          DefaultScheduler2.prototype.schedule = function(state, action) {
            var disposable = new SingleAssignmentDisposable(), id = scheduleMethod(scheduleAction(disposable, action, this, state));
            return new BinaryDisposable(disposable, new ClearDisposable(id));
          };
          DefaultScheduler2.prototype._scheduleFuture = function(state, dueTime, action) {
            if (dueTime === 0) {
              return this.schedule(state, action);
            }
            var disposable = new SingleAssignmentDisposable(), id = localSetTimeout(scheduleAction(disposable, action, this, state), dueTime);
            return new BinaryDisposable(disposable, new LocalClearDisposable(id));
          };
          return DefaultScheduler2;
        }(Scheduler);
        var defaultScheduler = Scheduler["default"] = Scheduler.async = new DefaultScheduler();
        function IndexedItem(id, value) {
          this.id = id;
          this.value = value;
        }
        IndexedItem.prototype.compareTo = function(other) {
          var c = this.value.compareTo(other.value);
          c === 0 && (c = this.id - other.id);
          return c;
        };
        var PriorityQueue = Rx.internals.PriorityQueue = function(capacity) {
          this.items = new Array(capacity);
          this.length = 0;
        };
        var priorityProto = PriorityQueue.prototype;
        priorityProto.isHigherPriority = function(left, right) {
          return this.items[left].compareTo(this.items[right]) < 0;
        };
        priorityProto.percolate = function(index) {
          if (index >= this.length || index < 0) {
            return;
          }
          var parent = index - 1 >> 1;
          if (parent < 0 || parent === index) {
            return;
          }
          if (this.isHigherPriority(index, parent)) {
            var temp = this.items[index];
            this.items[index] = this.items[parent];
            this.items[parent] = temp;
            this.percolate(parent);
          }
        };
        priorityProto.heapify = function(index) {
          +index || (index = 0);
          if (index >= this.length || index < 0) {
            return;
          }
          var left = 2 * index + 1, right = 2 * index + 2, first = index;
          if (left < this.length && this.isHigherPriority(left, first)) {
            first = left;
          }
          if (right < this.length && this.isHigherPriority(right, first)) {
            first = right;
          }
          if (first !== index) {
            var temp = this.items[index];
            this.items[index] = this.items[first];
            this.items[first] = temp;
            this.heapify(first);
          }
        };
        priorityProto.peek = function() {
          return this.items[0].value;
        };
        priorityProto.removeAt = function(index) {
          this.items[index] = this.items[--this.length];
          this.items[this.length] = undefined2;
          this.heapify();
        };
        priorityProto.dequeue = function() {
          var result = this.peek();
          this.removeAt(0);
          return result;
        };
        priorityProto.enqueue = function(item) {
          var index = this.length++;
          this.items[index] = new IndexedItem(PriorityQueue.count++, item);
          this.percolate(index);
        };
        priorityProto.remove = function(item) {
          for (var i = 0; i < this.length; i++) {
            if (this.items[i].value === item) {
              this.removeAt(i);
              return true;
            }
          }
          return false;
        };
        PriorityQueue.count = 0;
        var Notification = Rx.Notification = function() {
          function Notification2() {
          }
          Notification2.prototype._accept = function(onNext, onError, onCompleted) {
            throw new NotImplementedError();
          };
          Notification2.prototype._acceptObserver = function(onNext, onError, onCompleted) {
            throw new NotImplementedError();
          };
          Notification2.prototype.accept = function(observerOrOnNext, onError, onCompleted) {
            return observerOrOnNext && typeof observerOrOnNext === "object" ? this._acceptObserver(observerOrOnNext) : this._accept(observerOrOnNext, onError, onCompleted);
          };
          Notification2.prototype.toObservable = function(scheduler) {
            var self2 = this;
            isScheduler(scheduler) || (scheduler = immediateScheduler);
            return new AnonymousObservable(function(o) {
              return scheduler.schedule(self2, function(_, notification) {
                notification._acceptObserver(o);
                notification.kind === "N" && o.onCompleted();
              });
            });
          };
          return Notification2;
        }();
        var OnNextNotification = function(__super__) {
          inherits(OnNextNotification2, __super__);
          function OnNextNotification2(value) {
            this.value = value;
            this.kind = "N";
          }
          OnNextNotification2.prototype._accept = function(onNext) {
            return onNext(this.value);
          };
          OnNextNotification2.prototype._acceptObserver = function(o) {
            return o.onNext(this.value);
          };
          OnNextNotification2.prototype.toString = function() {
            return "OnNext(" + this.value + ")";
          };
          return OnNextNotification2;
        }(Notification);
        var OnErrorNotification = function(__super__) {
          inherits(OnErrorNotification2, __super__);
          function OnErrorNotification2(error) {
            this.error = error;
            this.kind = "E";
          }
          OnErrorNotification2.prototype._accept = function(onNext, onError) {
            return onError(this.error);
          };
          OnErrorNotification2.prototype._acceptObserver = function(o) {
            return o.onError(this.error);
          };
          OnErrorNotification2.prototype.toString = function() {
            return "OnError(" + this.error + ")";
          };
          return OnErrorNotification2;
        }(Notification);
        var OnCompletedNotification = function(__super__) {
          inherits(OnCompletedNotification2, __super__);
          function OnCompletedNotification2() {
            this.kind = "C";
          }
          OnCompletedNotification2.prototype._accept = function(onNext, onError, onCompleted) {
            return onCompleted();
          };
          OnCompletedNotification2.prototype._acceptObserver = function(o) {
            return o.onCompleted();
          };
          OnCompletedNotification2.prototype.toString = function() {
            return "OnCompleted()";
          };
          return OnCompletedNotification2;
        }(Notification);
        var notificationCreateOnNext = Notification.createOnNext = function(value) {
          return new OnNextNotification(value);
        };
        var notificationCreateOnError = Notification.createOnError = function(error) {
          return new OnErrorNotification(error);
        };
        var notificationCreateOnCompleted = Notification.createOnCompleted = function() {
          return new OnCompletedNotification();
        };
        var Observer = Rx.Observer = function() {
        };
        var observerCreate = Observer.create = function(onNext, onError, onCompleted) {
          onNext || (onNext = noop);
          onError || (onError = defaultError);
          onCompleted || (onCompleted = noop);
          return new AnonymousObserver(onNext, onError, onCompleted);
        };
        var AbstractObserver = Rx.internals.AbstractObserver = function(__super__) {
          inherits(AbstractObserver2, __super__);
          function AbstractObserver2() {
            this.isStopped = false;
          }
          AbstractObserver2.prototype.next = notImplemented;
          AbstractObserver2.prototype.error = notImplemented;
          AbstractObserver2.prototype.completed = notImplemented;
          AbstractObserver2.prototype.onNext = function(value) {
            !this.isStopped && this.next(value);
          };
          AbstractObserver2.prototype.onError = function(error) {
            if (!this.isStopped) {
              this.isStopped = true;
              this.error(error);
            }
          };
          AbstractObserver2.prototype.onCompleted = function() {
            if (!this.isStopped) {
              this.isStopped = true;
              this.completed();
            }
          };
          AbstractObserver2.prototype.dispose = function() {
            this.isStopped = true;
          };
          AbstractObserver2.prototype.fail = function(e) {
            if (!this.isStopped) {
              this.isStopped = true;
              this.error(e);
              return true;
            }
            return false;
          };
          return AbstractObserver2;
        }(Observer);
        var AnonymousObserver = Rx.AnonymousObserver = function(__super__) {
          inherits(AnonymousObserver2, __super__);
          function AnonymousObserver2(onNext, onError, onCompleted) {
            __super__.call(this);
            this._onNext = onNext;
            this._onError = onError;
            this._onCompleted = onCompleted;
          }
          AnonymousObserver2.prototype.next = function(value) {
            this._onNext(value);
          };
          AnonymousObserver2.prototype.error = function(error) {
            this._onError(error);
          };
          AnonymousObserver2.prototype.completed = function() {
            this._onCompleted();
          };
          return AnonymousObserver2;
        }(AbstractObserver);
        var observableProto;
        var Observable = Rx.Observable = function() {
          function makeSubscribe(self2, subscribe) {
            return function(o) {
              var oldOnError = o.onError;
              o.onError = function(e) {
                makeStackTraceLong(e, self2);
                oldOnError.call(o, e);
              };
              return subscribe.call(self2, o);
            };
          }
          function Observable2() {
            if (Rx.config.longStackSupport && hasStacks) {
              var oldSubscribe = this._subscribe;
              var e = tryCatch(thrower)(new Error()).e;
              this.stack = e.stack.substring(e.stack.indexOf("\n") + 1);
              this._subscribe = makeSubscribe(this, oldSubscribe);
            }
          }
          observableProto = Observable2.prototype;
          Observable2.isObservable = function(o) {
            return o && isFunction(o.subscribe);
          };
          observableProto.subscribe = observableProto.forEach = function(oOrOnNext, onError, onCompleted) {
            return this._subscribe(typeof oOrOnNext === "object" ? oOrOnNext : observerCreate(oOrOnNext, onError, onCompleted));
          };
          observableProto.subscribeOnNext = function(onNext, thisArg) {
            return this._subscribe(observerCreate(typeof thisArg !== "undefined" ? function(x) {
              onNext.call(thisArg, x);
            } : onNext));
          };
          observableProto.subscribeOnError = function(onError, thisArg) {
            return this._subscribe(observerCreate(null, typeof thisArg !== "undefined" ? function(e) {
              onError.call(thisArg, e);
            } : onError));
          };
          observableProto.subscribeOnCompleted = function(onCompleted, thisArg) {
            return this._subscribe(observerCreate(null, null, typeof thisArg !== "undefined" ? function() {
              onCompleted.call(thisArg);
            } : onCompleted));
          };
          return Observable2;
        }();
        var ScheduledObserver = Rx.internals.ScheduledObserver = function(__super__) {
          inherits(ScheduledObserver2, __super__);
          function ScheduledObserver2(scheduler, observer) {
            __super__.call(this);
            this.scheduler = scheduler;
            this.observer = observer;
            this.isAcquired = false;
            this.hasFaulted = false;
            this.queue = [];
            this.disposable = new SerialDisposable();
          }
          function enqueueNext(observer, x) {
            return function() {
              observer.onNext(x);
            };
          }
          function enqueueError(observer, e) {
            return function() {
              observer.onError(e);
            };
          }
          function enqueueCompleted(observer) {
            return function() {
              observer.onCompleted();
            };
          }
          ScheduledObserver2.prototype.next = function(x) {
            this.queue.push(enqueueNext(this.observer, x));
          };
          ScheduledObserver2.prototype.error = function(e) {
            this.queue.push(enqueueError(this.observer, e));
          };
          ScheduledObserver2.prototype.completed = function() {
            this.queue.push(enqueueCompleted(this.observer));
          };
          function scheduleMethod2(state, recurse) {
            var work;
            if (state.queue.length > 0) {
              work = state.queue.shift();
            } else {
              state.isAcquired = false;
              return;
            }
            var res = tryCatch(work)();
            if (res === errorObj) {
              state.queue = [];
              state.hasFaulted = true;
              return thrower(res.e);
            }
            recurse(state);
          }
          ScheduledObserver2.prototype.ensureActive = function() {
            var isOwner = false;
            if (!this.hasFaulted && this.queue.length > 0) {
              isOwner = !this.isAcquired;
              this.isAcquired = true;
            }
            isOwner && this.disposable.setDisposable(this.scheduler.scheduleRecursive(this, scheduleMethod2));
          };
          ScheduledObserver2.prototype.dispose = function() {
            __super__.prototype.dispose.call(this);
            this.disposable.dispose();
          };
          return ScheduledObserver2;
        }(AbstractObserver);
        var ObservableBase = Rx.ObservableBase = function(__super__) {
          inherits(ObservableBase2, __super__);
          function fixSubscriber(subscriber) {
            return subscriber && isFunction(subscriber.dispose) ? subscriber : isFunction(subscriber) ? disposableCreate(subscriber) : disposableEmpty;
          }
          function setDisposable(s, state) {
            var ado = state[0], self2 = state[1];
            var sub = tryCatch(self2.subscribeCore).call(self2, ado);
            if (sub === errorObj && !ado.fail(errorObj.e)) {
              thrower(errorObj.e);
            }
            ado.setDisposable(fixSubscriber(sub));
          }
          function ObservableBase2() {
            __super__.call(this);
          }
          ObservableBase2.prototype._subscribe = function(o) {
            var ado = new AutoDetachObserver(o), state = [ado, this];
            if (currentThreadScheduler.scheduleRequired()) {
              currentThreadScheduler.schedule(state, setDisposable);
            } else {
              setDisposable(null, state);
            }
            return ado;
          };
          ObservableBase2.prototype.subscribeCore = notImplemented;
          return ObservableBase2;
        }(Observable);
        var FlatMapObservable = Rx.FlatMapObservable = function(__super__) {
          inherits(FlatMapObservable2, __super__);
          function FlatMapObservable2(source, selector, resultSelector, thisArg) {
            this.resultSelector = isFunction(resultSelector) ? resultSelector : null;
            this.selector = bindCallback(isFunction(selector) ? selector : function() {
              return selector;
            }, thisArg, 3);
            this.source = source;
            __super__.call(this);
          }
          FlatMapObservable2.prototype.subscribeCore = function(o) {
            return this.source.subscribe(new InnerObserver(o, this.selector, this.resultSelector, this));
          };
          inherits(InnerObserver, AbstractObserver);
          function InnerObserver(observer, selector, resultSelector, source) {
            this.i = 0;
            this.selector = selector;
            this.resultSelector = resultSelector;
            this.source = source;
            this.o = observer;
            AbstractObserver.call(this);
          }
          InnerObserver.prototype._wrapResult = function(result, x, i) {
            return this.resultSelector ? result.map(function(y, i2) {
              return this.resultSelector(x, y, i, i2);
            }, this) : result;
          };
          InnerObserver.prototype.next = function(x) {
            var i = this.i++;
            var result = tryCatch(this.selector)(x, i, this.source);
            if (result === errorObj) {
              return this.o.onError(result.e);
            }
            isPromise(result) && (result = observableFromPromise(result));
            (isArrayLike(result) || isIterable(result)) && (result = Observable.from(result));
            this.o.onNext(this._wrapResult(result, x, i));
          };
          InnerObserver.prototype.error = function(e) {
            this.o.onError(e);
          };
          InnerObserver.prototype.completed = function() {
            this.o.onCompleted();
          };
          return FlatMapObservable2;
        }(ObservableBase);
        var Enumerable = Rx.internals.Enumerable = function() {
        };
        function IsDisposedDisposable(state) {
          this._s = state;
          this.isDisposed = false;
        }
        IsDisposedDisposable.prototype.dispose = function() {
          if (!this.isDisposed) {
            this.isDisposed = true;
            this._s.isDisposed = true;
          }
        };
        var ConcatEnumerableObservable = function(__super__) {
          inherits(ConcatEnumerableObservable2, __super__);
          function ConcatEnumerableObservable2(sources) {
            this.sources = sources;
            __super__.call(this);
          }
          function scheduleMethod2(state, recurse) {
            if (state.isDisposed) {
              return;
            }
            var currentItem = tryCatch(state.e.next).call(state.e);
            if (currentItem === errorObj) {
              return state.o.onError(currentItem.e);
            }
            if (currentItem.done) {
              return state.o.onCompleted();
            }
            var currentValue = currentItem.value;
            isPromise(currentValue) && (currentValue = observableFromPromise(currentValue));
            var d = new SingleAssignmentDisposable();
            state.subscription.setDisposable(d);
            d.setDisposable(currentValue.subscribe(new InnerObserver(state, recurse)));
          }
          ConcatEnumerableObservable2.prototype.subscribeCore = function(o) {
            var subscription = new SerialDisposable();
            var state = {
              isDisposed: false,
              o,
              subscription,
              e: this.sources[$iterator$]()
            };
            var cancelable = currentThreadScheduler.scheduleRecursive(state, scheduleMethod2);
            return new NAryDisposable([subscription, cancelable, new IsDisposedDisposable(state)]);
          };
          function InnerObserver(state, recurse) {
            this._state = state;
            this._recurse = recurse;
            AbstractObserver.call(this);
          }
          inherits(InnerObserver, AbstractObserver);
          InnerObserver.prototype.next = function(x) {
            this._state.o.onNext(x);
          };
          InnerObserver.prototype.error = function(e) {
            this._state.o.onError(e);
          };
          InnerObserver.prototype.completed = function() {
            this._recurse(this._state);
          };
          return ConcatEnumerableObservable2;
        }(ObservableBase);
        Enumerable.prototype.concat = function() {
          return new ConcatEnumerableObservable(this);
        };
        var CatchErrorObservable = function(__super__) {
          function CatchErrorObservable2(sources) {
            this.sources = sources;
            __super__.call(this);
          }
          inherits(CatchErrorObservable2, __super__);
          function scheduleMethod2(state, recurse) {
            if (state.isDisposed) {
              return;
            }
            var currentItem = tryCatch(state.e.next).call(state.e);
            if (currentItem === errorObj) {
              return state.o.onError(currentItem.e);
            }
            if (currentItem.done) {
              return state.lastError !== null ? state.o.onError(state.lastError) : state.o.onCompleted();
            }
            var currentValue = currentItem.value;
            isPromise(currentValue) && (currentValue = observableFromPromise(currentValue));
            var d = new SingleAssignmentDisposable();
            state.subscription.setDisposable(d);
            d.setDisposable(currentValue.subscribe(new InnerObserver(state, recurse)));
          }
          CatchErrorObservable2.prototype.subscribeCore = function(o) {
            var subscription = new SerialDisposable();
            var state = {
              isDisposed: false,
              e: this.sources[$iterator$](),
              subscription,
              lastError: null,
              o
            };
            var cancelable = currentThreadScheduler.scheduleRecursive(state, scheduleMethod2);
            return new NAryDisposable([subscription, cancelable, new IsDisposedDisposable(state)]);
          };
          function InnerObserver(state, recurse) {
            this._state = state;
            this._recurse = recurse;
            AbstractObserver.call(this);
          }
          inherits(InnerObserver, AbstractObserver);
          InnerObserver.prototype.next = function(x) {
            this._state.o.onNext(x);
          };
          InnerObserver.prototype.error = function(e) {
            this._state.lastError = e;
            this._recurse(this._state);
          };
          InnerObserver.prototype.completed = function() {
            this._state.o.onCompleted();
          };
          return CatchErrorObservable2;
        }(ObservableBase);
        Enumerable.prototype.catchError = function() {
          return new CatchErrorObservable(this);
        };
        var RepeatEnumerable = function(__super__) {
          inherits(RepeatEnumerable2, __super__);
          function RepeatEnumerable2(v, c) {
            this.v = v;
            this.c = c == null ? -1 : c;
          }
          RepeatEnumerable2.prototype[$iterator$] = function() {
            return new RepeatEnumerator(this);
          };
          function RepeatEnumerator(p) {
            this.v = p.v;
            this.l = p.c;
          }
          RepeatEnumerator.prototype.next = function() {
            if (this.l === 0) {
              return doneEnumerator;
            }
            if (this.l > 0) {
              this.l--;
            }
            return { done: false, value: this.v };
          };
          return RepeatEnumerable2;
        }(Enumerable);
        var enumerableRepeat = Enumerable.repeat = function(value, repeatCount) {
          return new RepeatEnumerable(value, repeatCount);
        };
        var OfEnumerable = function(__super__) {
          inherits(OfEnumerable2, __super__);
          function OfEnumerable2(s, fn, thisArg) {
            this.s = s;
            this.fn = fn ? bindCallback(fn, thisArg, 3) : null;
          }
          OfEnumerable2.prototype[$iterator$] = function() {
            return new OfEnumerator(this);
          };
          function OfEnumerator(p) {
            this.i = -1;
            this.s = p.s;
            this.l = this.s.length;
            this.fn = p.fn;
          }
          OfEnumerator.prototype.next = function() {
            return ++this.i < this.l ? { done: false, value: !this.fn ? this.s[this.i] : this.fn(this.s[this.i], this.i, this.s) } : doneEnumerator;
          };
          return OfEnumerable2;
        }(Enumerable);
        var enumerableOf = Enumerable.of = function(source, selector, thisArg) {
          return new OfEnumerable(source, selector, thisArg);
        };
        var ToArrayObservable = function(__super__) {
          inherits(ToArrayObservable2, __super__);
          function ToArrayObservable2(source) {
            this.source = source;
            __super__.call(this);
          }
          ToArrayObservable2.prototype.subscribeCore = function(o) {
            return this.source.subscribe(new InnerObserver(o));
          };
          inherits(InnerObserver, AbstractObserver);
          function InnerObserver(o) {
            this.o = o;
            this.a = [];
            AbstractObserver.call(this);
          }
          InnerObserver.prototype.next = function(x) {
            this.a.push(x);
          };
          InnerObserver.prototype.error = function(e) {
            this.o.onError(e);
          };
          InnerObserver.prototype.completed = function() {
            this.o.onNext(this.a);
            this.o.onCompleted();
          };
          return ToArrayObservable2;
        }(ObservableBase);
        observableProto.toArray = function() {
          return new ToArrayObservable(this);
        };
        Observable.create = function(subscribe, parent) {
          return new AnonymousObservable(subscribe, parent);
        };
        var Defer = function(__super__) {
          inherits(Defer2, __super__);
          function Defer2(factory) {
            this._f = factory;
            __super__.call(this);
          }
          Defer2.prototype.subscribeCore = function(o) {
            var result = tryCatch(this._f)();
            if (result === errorObj) {
              return observableThrow(result.e).subscribe(o);
            }
            isPromise(result) && (result = observableFromPromise(result));
            return result.subscribe(o);
          };
          return Defer2;
        }(ObservableBase);
        var observableDefer = Observable.defer = function(observableFactory) {
          return new Defer(observableFactory);
        };
        var EmptyObservable = function(__super__) {
          inherits(EmptyObservable2, __super__);
          function EmptyObservable2(scheduler) {
            this.scheduler = scheduler;
            __super__.call(this);
          }
          EmptyObservable2.prototype.subscribeCore = function(observer) {
            var sink = new EmptySink(observer, this.scheduler);
            return sink.run();
          };
          function EmptySink(observer, scheduler) {
            this.observer = observer;
            this.scheduler = scheduler;
          }
          function scheduleItem(s, state) {
            state.onCompleted();
            return disposableEmpty;
          }
          EmptySink.prototype.run = function() {
            var state = this.observer;
            return this.scheduler === immediateScheduler ? scheduleItem(null, state) : this.scheduler.schedule(state, scheduleItem);
          };
          return EmptyObservable2;
        }(ObservableBase);
        var EMPTY_OBSERVABLE = new EmptyObservable(immediateScheduler);
        var observableEmpty = Observable.empty = function(scheduler) {
          isScheduler(scheduler) || (scheduler = immediateScheduler);
          return scheduler === immediateScheduler ? EMPTY_OBSERVABLE : new EmptyObservable(scheduler);
        };
        var FromObservable = function(__super__) {
          inherits(FromObservable2, __super__);
          function FromObservable2(iterable, fn, scheduler) {
            this._iterable = iterable;
            this._fn = fn;
            this._scheduler = scheduler;
            __super__.call(this);
          }
          function createScheduleMethod(o, it, fn) {
            return function loopRecursive(i, recurse) {
              var next = tryCatch(it.next).call(it);
              if (next === errorObj) {
                return o.onError(next.e);
              }
              if (next.done) {
                return o.onCompleted();
              }
              var result = next.value;
              if (isFunction(fn)) {
                result = tryCatch(fn)(result, i);
                if (result === errorObj) {
                  return o.onError(result.e);
                }
              }
              o.onNext(result);
              recurse(i + 1);
            };
          }
          FromObservable2.prototype.subscribeCore = function(o) {
            var list = Object(this._iterable), it = getIterable(list);
            return this._scheduler.scheduleRecursive(0, createScheduleMethod(o, it, this._fn));
          };
          return FromObservable2;
        }(ObservableBase);
        var maxSafeInteger = Math.pow(2, 53) - 1;
        function StringIterable(s) {
          this._s = s;
        }
        StringIterable.prototype[$iterator$] = function() {
          return new StringIterator(this._s);
        };
        function StringIterator(s) {
          this._s = s;
          this._l = s.length;
          this._i = 0;
        }
        StringIterator.prototype[$iterator$] = function() {
          return this;
        };
        StringIterator.prototype.next = function() {
          return this._i < this._l ? { done: false, value: this._s.charAt(this._i++) } : doneEnumerator;
        };
        function ArrayIterable(a) {
          this._a = a;
        }
        ArrayIterable.prototype[$iterator$] = function() {
          return new ArrayIterator(this._a);
        };
        function ArrayIterator(a) {
          this._a = a;
          this._l = toLength(a);
          this._i = 0;
        }
        ArrayIterator.prototype[$iterator$] = function() {
          return this;
        };
        ArrayIterator.prototype.next = function() {
          return this._i < this._l ? { done: false, value: this._a[this._i++] } : doneEnumerator;
        };
        function numberIsFinite(value) {
          return typeof value === "number" && root.isFinite(value);
        }
        function isNan(n) {
          return n !== n;
        }
        function getIterable(o) {
          var i = o[$iterator$], it;
          if (!i && typeof o === "string") {
            it = new StringIterable(o);
            return it[$iterator$]();
          }
          if (!i && o.length !== undefined2) {
            it = new ArrayIterable(o);
            return it[$iterator$]();
          }
          if (!i) {
            throw new TypeError("Object is not iterable");
          }
          return o[$iterator$]();
        }
        function sign(value) {
          var number = +value;
          if (number === 0) {
            return number;
          }
          if (isNaN(number)) {
            return number;
          }
          return number < 0 ? -1 : 1;
        }
        function toLength(o) {
          var len = +o.length;
          if (isNaN(len)) {
            return 0;
          }
          if (len === 0 || !numberIsFinite(len)) {
            return len;
          }
          len = sign(len) * Math.floor(Math.abs(len));
          if (len <= 0) {
            return 0;
          }
          if (len > maxSafeInteger) {
            return maxSafeInteger;
          }
          return len;
        }
        var observableFrom = Observable.from = function(iterable, mapFn, thisArg, scheduler) {
          if (iterable == null) {
            throw new Error("iterable cannot be null.");
          }
          if (mapFn && !isFunction(mapFn)) {
            throw new Error("mapFn when provided must be a function");
          }
          if (mapFn) {
            var mapper = bindCallback(mapFn, thisArg, 2);
          }
          isScheduler(scheduler) || (scheduler = currentThreadScheduler);
          return new FromObservable(iterable, mapper, scheduler);
        };
        var FromArrayObservable = function(__super__) {
          inherits(FromArrayObservable2, __super__);
          function FromArrayObservable2(args, scheduler) {
            this._args = args;
            this._scheduler = scheduler;
            __super__.call(this);
          }
          function scheduleMethod2(o, args) {
            var len = args.length;
            return function loopRecursive(i, recurse) {
              if (i < len) {
                o.onNext(args[i]);
                recurse(i + 1);
              } else {
                o.onCompleted();
              }
            };
          }
          FromArrayObservable2.prototype.subscribeCore = function(o) {
            return this._scheduler.scheduleRecursive(0, scheduleMethod2(o, this._args));
          };
          return FromArrayObservable2;
        }(ObservableBase);
        var observableFromArray = Observable.fromArray = function(array, scheduler) {
          isScheduler(scheduler) || (scheduler = currentThreadScheduler);
          return new FromArrayObservable(array, scheduler);
        };
        var NeverObservable = function(__super__) {
          inherits(NeverObservable2, __super__);
          function NeverObservable2() {
            __super__.call(this);
          }
          NeverObservable2.prototype.subscribeCore = function(observer) {
            return disposableEmpty;
          };
          return NeverObservable2;
        }(ObservableBase);
        var NEVER_OBSERVABLE = new NeverObservable();
        var observableNever = Observable.never = function() {
          return NEVER_OBSERVABLE;
        };
        function observableOf(scheduler, array) {
          isScheduler(scheduler) || (scheduler = currentThreadScheduler);
          return new FromArrayObservable(array, scheduler);
        }
        Observable.of = function() {
          var len = arguments.length, args = new Array(len);
          for (var i = 0; i < len; i++) {
            args[i] = arguments[i];
          }
          return new FromArrayObservable(args, currentThreadScheduler);
        };
        Observable.ofWithScheduler = function(scheduler) {
          var len = arguments.length, args = new Array(len - 1);
          for (var i = 1; i < len; i++) {
            args[i - 1] = arguments[i];
          }
          return new FromArrayObservable(args, scheduler);
        };
        var PairsObservable = function(__super__) {
          inherits(PairsObservable2, __super__);
          function PairsObservable2(o, scheduler) {
            this._o = o;
            this._keys = Object.keys(o);
            this._scheduler = scheduler;
            __super__.call(this);
          }
          function scheduleMethod2(o, obj, keys2) {
            return function loopRecursive(i, recurse) {
              if (i < keys2.length) {
                var key = keys2[i];
                o.onNext([key, obj[key]]);
                recurse(i + 1);
              } else {
                o.onCompleted();
              }
            };
          }
          PairsObservable2.prototype.subscribeCore = function(o) {
            return this._scheduler.scheduleRecursive(0, scheduleMethod2(o, this._o, this._keys));
          };
          return PairsObservable2;
        }(ObservableBase);
        Observable.pairs = function(obj, scheduler) {
          scheduler || (scheduler = currentThreadScheduler);
          return new PairsObservable(obj, scheduler);
        };
        var RangeObservable = function(__super__) {
          inherits(RangeObservable2, __super__);
          function RangeObservable2(start, count, scheduler) {
            this.start = start;
            this.rangeCount = count;
            this.scheduler = scheduler;
            __super__.call(this);
          }
          function loopRecursive(start, count, o) {
            return function loop(i, recurse) {
              if (i < count) {
                o.onNext(start + i);
                recurse(i + 1);
              } else {
                o.onCompleted();
              }
            };
          }
          RangeObservable2.prototype.subscribeCore = function(o) {
            return this.scheduler.scheduleRecursive(
              0,
              loopRecursive(this.start, this.rangeCount, o)
            );
          };
          return RangeObservable2;
        }(ObservableBase);
        Observable.range = function(start, count, scheduler) {
          isScheduler(scheduler) || (scheduler = currentThreadScheduler);
          return new RangeObservable(start, count, scheduler);
        };
        var RepeatObservable = function(__super__) {
          inherits(RepeatObservable2, __super__);
          function RepeatObservable2(value, repeatCount, scheduler) {
            this.value = value;
            this.repeatCount = repeatCount == null ? -1 : repeatCount;
            this.scheduler = scheduler;
            __super__.call(this);
          }
          RepeatObservable2.prototype.subscribeCore = function(observer) {
            var sink = new RepeatSink(observer, this);
            return sink.run();
          };
          return RepeatObservable2;
        }(ObservableBase);
        function RepeatSink(observer, parent) {
          this.observer = observer;
          this.parent = parent;
        }
        RepeatSink.prototype.run = function() {
          var observer = this.observer, value = this.parent.value;
          function loopRecursive(i, recurse) {
            if (i === -1 || i > 0) {
              observer.onNext(value);
              i > 0 && i--;
            }
            if (i === 0) {
              return observer.onCompleted();
            }
            recurse(i);
          }
          return this.parent.scheduler.scheduleRecursive(this.parent.repeatCount, loopRecursive);
        };
        Observable.repeat = function(value, repeatCount, scheduler) {
          isScheduler(scheduler) || (scheduler = currentThreadScheduler);
          return new RepeatObservable(value, repeatCount, scheduler);
        };
        var JustObservable = function(__super__) {
          inherits(JustObservable2, __super__);
          function JustObservable2(value, scheduler) {
            this._value = value;
            this._scheduler = scheduler;
            __super__.call(this);
          }
          JustObservable2.prototype.subscribeCore = function(o) {
            var state = [this._value, o];
            return this._scheduler === immediateScheduler ? scheduleItem(null, state) : this._scheduler.schedule(state, scheduleItem);
          };
          function scheduleItem(s, state) {
            var value = state[0], observer = state[1];
            observer.onNext(value);
            observer.onCompleted();
            return disposableEmpty;
          }
          return JustObservable2;
        }(ObservableBase);
        var observableReturn = Observable["return"] = Observable.just = function(value, scheduler) {
          isScheduler(scheduler) || (scheduler = immediateScheduler);
          return new JustObservable(value, scheduler);
        };
        var ThrowObservable = function(__super__) {
          inherits(ThrowObservable2, __super__);
          function ThrowObservable2(error, scheduler) {
            this._error = error;
            this._scheduler = scheduler;
            __super__.call(this);
          }
          ThrowObservable2.prototype.subscribeCore = function(o) {
            var state = [this._error, o];
            return this._scheduler === immediateScheduler ? scheduleItem(null, state) : this._scheduler.schedule(state, scheduleItem);
          };
          function scheduleItem(s, state) {
            var e = state[0], o = state[1];
            o.onError(e);
            return disposableEmpty;
          }
          return ThrowObservable2;
        }(ObservableBase);
        var observableThrow = Observable["throw"] = function(error, scheduler) {
          isScheduler(scheduler) || (scheduler = immediateScheduler);
          return new ThrowObservable(error, scheduler);
        };
        var CatchObservable = function(__super__) {
          inherits(CatchObservable2, __super__);
          function CatchObservable2(source, fn) {
            this.source = source;
            this._fn = fn;
            __super__.call(this);
          }
          CatchObservable2.prototype.subscribeCore = function(o) {
            var d1 = new SingleAssignmentDisposable(), subscription = new SerialDisposable();
            subscription.setDisposable(d1);
            d1.setDisposable(this.source.subscribe(new CatchObserver(o, subscription, this._fn)));
            return subscription;
          };
          return CatchObservable2;
        }(ObservableBase);
        var CatchObserver = function(__super__) {
          inherits(CatchObserver2, __super__);
          function CatchObserver2(o, s, fn) {
            this._o = o;
            this._s = s;
            this._fn = fn;
            __super__.call(this);
          }
          CatchObserver2.prototype.next = function(x) {
            this._o.onNext(x);
          };
          CatchObserver2.prototype.completed = function() {
            return this._o.onCompleted();
          };
          CatchObserver2.prototype.error = function(e) {
            var result = tryCatch(this._fn)(e);
            if (result === errorObj) {
              return this._o.onError(result.e);
            }
            isPromise(result) && (result = observableFromPromise(result));
            var d = new SingleAssignmentDisposable();
            this._s.setDisposable(d);
            d.setDisposable(result.subscribe(this._o));
          };
          return CatchObserver2;
        }(AbstractObserver);
        observableProto["catch"] = function(handlerOrSecond) {
          return isFunction(handlerOrSecond) ? new CatchObservable(this, handlerOrSecond) : observableCatch([this, handlerOrSecond]);
        };
        var observableCatch = Observable["catch"] = function() {
          var items;
          if (Array.isArray(arguments[0])) {
            items = arguments[0];
          } else {
            var len = arguments.length;
            items = new Array(len);
            for (var i = 0; i < len; i++) {
              items[i] = arguments[i];
            }
          }
          return enumerableOf(items).catchError();
        };
        observableProto.combineLatest = function() {
          var len = arguments.length, args = new Array(len);
          for (var i = 0; i < len; i++) {
            args[i] = arguments[i];
          }
          if (Array.isArray(args[0])) {
            args[0].unshift(this);
          } else {
            args.unshift(this);
          }
          return combineLatest.apply(this, args);
        };
        function falseFactory() {
          return false;
        }
        function argumentsToArray() {
          var len = arguments.length, args = new Array(len);
          for (var i = 0; i < len; i++) {
            args[i] = arguments[i];
          }
          return args;
        }
        var CombineLatestObservable = function(__super__) {
          inherits(CombineLatestObservable2, __super__);
          function CombineLatestObservable2(params, cb) {
            this._params = params;
            this._cb = cb;
            __super__.call(this);
          }
          CombineLatestObservable2.prototype.subscribeCore = function(observer) {
            var len = this._params.length, subscriptions = new Array(len);
            var state = {
              hasValue: arrayInitialize(len, falseFactory),
              hasValueAll: false,
              isDone: arrayInitialize(len, falseFactory),
              values: new Array(len)
            };
            for (var i = 0; i < len; i++) {
              var source = this._params[i], sad = new SingleAssignmentDisposable();
              subscriptions[i] = sad;
              isPromise(source) && (source = observableFromPromise(source));
              sad.setDisposable(source.subscribe(new CombineLatestObserver(observer, i, this._cb, state)));
            }
            return new NAryDisposable(subscriptions);
          };
          return CombineLatestObservable2;
        }(ObservableBase);
        var CombineLatestObserver = function(__super__) {
          inherits(CombineLatestObserver2, __super__);
          function CombineLatestObserver2(o, i, cb, state) {
            this._o = o;
            this._i = i;
            this._cb = cb;
            this._state = state;
            __super__.call(this);
          }
          function notTheSame(i) {
            return function(x, j) {
              return j !== i;
            };
          }
          CombineLatestObserver2.prototype.next = function(x) {
            this._state.values[this._i] = x;
            this._state.hasValue[this._i] = true;
            if (this._state.hasValueAll || (this._state.hasValueAll = this._state.hasValue.every(identity))) {
              var res = tryCatch(this._cb).apply(null, this._state.values);
              if (res === errorObj) {
                return this._o.onError(res.e);
              }
              this._o.onNext(res);
            } else if (this._state.isDone.filter(notTheSame(this._i)).every(identity)) {
              this._o.onCompleted();
            }
          };
          CombineLatestObserver2.prototype.error = function(e) {
            this._o.onError(e);
          };
          CombineLatestObserver2.prototype.completed = function() {
            this._state.isDone[this._i] = true;
            this._state.isDone.every(identity) && this._o.onCompleted();
          };
          return CombineLatestObserver2;
        }(AbstractObserver);
        var combineLatest = Observable.combineLatest = function() {
          var len = arguments.length, args = new Array(len);
          for (var i = 0; i < len; i++) {
            args[i] = arguments[i];
          }
          var resultSelector = isFunction(args[len - 1]) ? args.pop() : argumentsToArray;
          Array.isArray(args[0]) && (args = args[0]);
          return new CombineLatestObservable(args, resultSelector);
        };
        observableProto.concat = function() {
          for (var args = [], i = 0, len = arguments.length; i < len; i++) {
            args.push(arguments[i]);
          }
          args.unshift(this);
          return observableConcat.apply(null, args);
        };
        var ConcatObserver = function(__super__) {
          inherits(ConcatObserver2, __super__);
          function ConcatObserver2(s, fn) {
            this._s = s;
            this._fn = fn;
            __super__.call(this);
          }
          ConcatObserver2.prototype.next = function(x) {
            this._s.o.onNext(x);
          };
          ConcatObserver2.prototype.error = function(e) {
            this._s.o.onError(e);
          };
          ConcatObserver2.prototype.completed = function() {
            this._s.i++;
            this._fn(this._s);
          };
          return ConcatObserver2;
        }(AbstractObserver);
        var ConcatObservable = function(__super__) {
          inherits(ConcatObservable2, __super__);
          function ConcatObservable2(sources) {
            this._sources = sources;
            __super__.call(this);
          }
          function scheduleRecursive(state, recurse) {
            if (state.disposable.isDisposed) {
              return;
            }
            if (state.i === state.sources.length) {
              return state.o.onCompleted();
            }
            var currentValue = state.sources[state.i];
            isPromise(currentValue) && (currentValue = observableFromPromise(currentValue));
            var d = new SingleAssignmentDisposable();
            state.subscription.setDisposable(d);
            d.setDisposable(currentValue.subscribe(new ConcatObserver(state, recurse)));
          }
          ConcatObservable2.prototype.subscribeCore = function(o) {
            var subscription = new SerialDisposable();
            var disposable = disposableCreate(noop);
            var state = {
              o,
              i: 0,
              subscription,
              disposable,
              sources: this._sources
            };
            var cancelable = immediateScheduler.scheduleRecursive(state, scheduleRecursive);
            return new NAryDisposable([subscription, disposable, cancelable]);
          };
          return ConcatObservable2;
        }(ObservableBase);
        var observableConcat = Observable.concat = function() {
          var args;
          if (Array.isArray(arguments[0])) {
            args = arguments[0];
          } else {
            args = new Array(arguments.length);
            for (var i = 0, len = arguments.length; i < len; i++) {
              args[i] = arguments[i];
            }
          }
          return new ConcatObservable(args);
        };
        observableProto.concatAll = function() {
          return this.merge(1);
        };
        var MergeObservable = function(__super__) {
          inherits(MergeObservable2, __super__);
          function MergeObservable2(source, maxConcurrent) {
            this.source = source;
            this.maxConcurrent = maxConcurrent;
            __super__.call(this);
          }
          MergeObservable2.prototype.subscribeCore = function(observer) {
            var g = new CompositeDisposable();
            g.add(this.source.subscribe(new MergeObserver(observer, this.maxConcurrent, g)));
            return g;
          };
          return MergeObservable2;
        }(ObservableBase);
        var MergeObserver = function(__super__) {
          function MergeObserver2(o, max, g) {
            this.o = o;
            this.max = max;
            this.g = g;
            this.done = false;
            this.q = [];
            this.activeCount = 0;
            __super__.call(this);
          }
          inherits(MergeObserver2, __super__);
          MergeObserver2.prototype.handleSubscribe = function(xs) {
            var sad = new SingleAssignmentDisposable();
            this.g.add(sad);
            isPromise(xs) && (xs = observableFromPromise(xs));
            sad.setDisposable(xs.subscribe(new InnerObserver(this, sad)));
          };
          MergeObserver2.prototype.next = function(innerSource) {
            if (this.activeCount < this.max) {
              this.activeCount++;
              this.handleSubscribe(innerSource);
            } else {
              this.q.push(innerSource);
            }
          };
          MergeObserver2.prototype.error = function(e) {
            this.o.onError(e);
          };
          MergeObserver2.prototype.completed = function() {
            this.done = true;
            this.activeCount === 0 && this.o.onCompleted();
          };
          function InnerObserver(parent, sad) {
            this.parent = parent;
            this.sad = sad;
            __super__.call(this);
          }
          inherits(InnerObserver, __super__);
          InnerObserver.prototype.next = function(x) {
            this.parent.o.onNext(x);
          };
          InnerObserver.prototype.error = function(e) {
            this.parent.o.onError(e);
          };
          InnerObserver.prototype.completed = function() {
            this.parent.g.remove(this.sad);
            if (this.parent.q.length > 0) {
              this.parent.handleSubscribe(this.parent.q.shift());
            } else {
              this.parent.activeCount--;
              this.parent.done && this.parent.activeCount === 0 && this.parent.o.onCompleted();
            }
          };
          return MergeObserver2;
        }(AbstractObserver);
        observableProto.merge = function(maxConcurrentOrOther) {
          return typeof maxConcurrentOrOther !== "number" ? observableMerge(this, maxConcurrentOrOther) : new MergeObservable(this, maxConcurrentOrOther);
        };
        var observableMerge = Observable.merge = function() {
          var scheduler, sources = [], i, len = arguments.length;
          if (!arguments[0]) {
            scheduler = immediateScheduler;
            for (i = 1; i < len; i++) {
              sources.push(arguments[i]);
            }
          } else if (isScheduler(arguments[0])) {
            scheduler = arguments[0];
            for (i = 1; i < len; i++) {
              sources.push(arguments[i]);
            }
          } else {
            scheduler = immediateScheduler;
            for (i = 0; i < len; i++) {
              sources.push(arguments[i]);
            }
          }
          if (Array.isArray(sources[0])) {
            sources = sources[0];
          }
          return observableOf(scheduler, sources).mergeAll();
        };
        var CompositeError = Rx.CompositeError = function(errors) {
          this.innerErrors = errors;
          this.message = "This contains multiple errors. Check the innerErrors";
          Error.call(this);
        };
        CompositeError.prototype = Object.create(Error.prototype);
        CompositeError.prototype.name = "CompositeError";
        var MergeDelayErrorObservable = function(__super__) {
          inherits(MergeDelayErrorObservable2, __super__);
          function MergeDelayErrorObservable2(source) {
            this.source = source;
            __super__.call(this);
          }
          MergeDelayErrorObservable2.prototype.subscribeCore = function(o) {
            var group = new CompositeDisposable(), m = new SingleAssignmentDisposable(), state = { isStopped: false, errors: [], o };
            group.add(m);
            m.setDisposable(this.source.subscribe(new MergeDelayErrorObserver(group, state)));
            return group;
          };
          return MergeDelayErrorObservable2;
        }(ObservableBase);
        var MergeDelayErrorObserver = function(__super__) {
          inherits(MergeDelayErrorObserver2, __super__);
          function MergeDelayErrorObserver2(group, state) {
            this._group = group;
            this._state = state;
            __super__.call(this);
          }
          function setCompletion(o, errors) {
            if (errors.length === 0) {
              o.onCompleted();
            } else if (errors.length === 1) {
              o.onError(errors[0]);
            } else {
              o.onError(new CompositeError(errors));
            }
          }
          MergeDelayErrorObserver2.prototype.next = function(x) {
            var inner = new SingleAssignmentDisposable();
            this._group.add(inner);
            isPromise(x) && (x = observableFromPromise(x));
            inner.setDisposable(x.subscribe(new InnerObserver(inner, this._group, this._state)));
          };
          MergeDelayErrorObserver2.prototype.error = function(e) {
            this._state.errors.push(e);
            this._state.isStopped = true;
            this._group.length === 1 && setCompletion(this._state.o, this._state.errors);
          };
          MergeDelayErrorObserver2.prototype.completed = function() {
            this._state.isStopped = true;
            this._group.length === 1 && setCompletion(this._state.o, this._state.errors);
          };
          inherits(InnerObserver, __super__);
          function InnerObserver(inner, group, state) {
            this._inner = inner;
            this._group = group;
            this._state = state;
            __super__.call(this);
          }
          InnerObserver.prototype.next = function(x) {
            this._state.o.onNext(x);
          };
          InnerObserver.prototype.error = function(e) {
            this._state.errors.push(e);
            this._group.remove(this._inner);
            this._state.isStopped && this._group.length === 1 && setCompletion(this._state.o, this._state.errors);
          };
          InnerObserver.prototype.completed = function() {
            this._group.remove(this._inner);
            this._state.isStopped && this._group.length === 1 && setCompletion(this._state.o, this._state.errors);
          };
          return MergeDelayErrorObserver2;
        }(AbstractObserver);
        Observable.mergeDelayError = function() {
          var args;
          if (Array.isArray(arguments[0])) {
            args = arguments[0];
          } else {
            var len = arguments.length;
            args = new Array(len);
            for (var i = 0; i < len; i++) {
              args[i] = arguments[i];
            }
          }
          var source = observableOf(null, args);
          return new MergeDelayErrorObservable(source);
        };
        var MergeAllObservable = function(__super__) {
          inherits(MergeAllObservable2, __super__);
          function MergeAllObservable2(source) {
            this.source = source;
            __super__.call(this);
          }
          MergeAllObservable2.prototype.subscribeCore = function(o) {
            var g = new CompositeDisposable(), m = new SingleAssignmentDisposable();
            g.add(m);
            m.setDisposable(this.source.subscribe(new MergeAllObserver(o, g)));
            return g;
          };
          return MergeAllObservable2;
        }(ObservableBase);
        var MergeAllObserver = function(__super__) {
          function MergeAllObserver2(o, g) {
            this.o = o;
            this.g = g;
            this.done = false;
            __super__.call(this);
          }
          inherits(MergeAllObserver2, __super__);
          MergeAllObserver2.prototype.next = function(innerSource) {
            var sad = new SingleAssignmentDisposable();
            this.g.add(sad);
            isPromise(innerSource) && (innerSource = observableFromPromise(innerSource));
            sad.setDisposable(innerSource.subscribe(new InnerObserver(this, sad)));
          };
          MergeAllObserver2.prototype.error = function(e) {
            this.o.onError(e);
          };
          MergeAllObserver2.prototype.completed = function() {
            this.done = true;
            this.g.length === 1 && this.o.onCompleted();
          };
          function InnerObserver(parent, sad) {
            this.parent = parent;
            this.sad = sad;
            __super__.call(this);
          }
          inherits(InnerObserver, __super__);
          InnerObserver.prototype.next = function(x) {
            this.parent.o.onNext(x);
          };
          InnerObserver.prototype.error = function(e) {
            this.parent.o.onError(e);
          };
          InnerObserver.prototype.completed = function() {
            this.parent.g.remove(this.sad);
            this.parent.done && this.parent.g.length === 1 && this.parent.o.onCompleted();
          };
          return MergeAllObserver2;
        }(AbstractObserver);
        observableProto.mergeAll = function() {
          return new MergeAllObservable(this);
        };
        var SkipUntilObservable = function(__super__) {
          inherits(SkipUntilObservable2, __super__);
          function SkipUntilObservable2(source, other) {
            this._s = source;
            this._o = isPromise(other) ? observableFromPromise(other) : other;
            this._open = false;
            __super__.call(this);
          }
          SkipUntilObservable2.prototype.subscribeCore = function(o) {
            var leftSubscription = new SingleAssignmentDisposable();
            leftSubscription.setDisposable(this._s.subscribe(new SkipUntilSourceObserver(o, this)));
            isPromise(this._o) && (this._o = observableFromPromise(this._o));
            var rightSubscription = new SingleAssignmentDisposable();
            rightSubscription.setDisposable(this._o.subscribe(new SkipUntilOtherObserver(o, this, rightSubscription)));
            return new BinaryDisposable(leftSubscription, rightSubscription);
          };
          return SkipUntilObservable2;
        }(ObservableBase);
        var SkipUntilSourceObserver = function(__super__) {
          inherits(SkipUntilSourceObserver2, __super__);
          function SkipUntilSourceObserver2(o, p) {
            this._o = o;
            this._p = p;
            __super__.call(this);
          }
          SkipUntilSourceObserver2.prototype.next = function(x) {
            this._p._open && this._o.onNext(x);
          };
          SkipUntilSourceObserver2.prototype.error = function(err) {
            this._o.onError(err);
          };
          SkipUntilSourceObserver2.prototype.onCompleted = function() {
            this._p._open && this._o.onCompleted();
          };
          return SkipUntilSourceObserver2;
        }(AbstractObserver);
        var SkipUntilOtherObserver = function(__super__) {
          inherits(SkipUntilOtherObserver2, __super__);
          function SkipUntilOtherObserver2(o, p, r) {
            this._o = o;
            this._p = p;
            this._r = r;
            __super__.call(this);
          }
          SkipUntilOtherObserver2.prototype.next = function() {
            this._p._open = true;
            this._r.dispose();
          };
          SkipUntilOtherObserver2.prototype.error = function(err) {
            this._o.onError(err);
          };
          SkipUntilOtherObserver2.prototype.onCompleted = function() {
            this._r.dispose();
          };
          return SkipUntilOtherObserver2;
        }(AbstractObserver);
        observableProto.skipUntil = function(other) {
          return new SkipUntilObservable(this, other);
        };
        var SwitchObservable = function(__super__) {
          inherits(SwitchObservable2, __super__);
          function SwitchObservable2(source) {
            this.source = source;
            __super__.call(this);
          }
          SwitchObservable2.prototype.subscribeCore = function(o) {
            var inner = new SerialDisposable(), s = this.source.subscribe(new SwitchObserver(o, inner));
            return new BinaryDisposable(s, inner);
          };
          inherits(SwitchObserver, AbstractObserver);
          function SwitchObserver(o, inner) {
            this.o = o;
            this.inner = inner;
            this.stopped = false;
            this.latest = 0;
            this.hasLatest = false;
            AbstractObserver.call(this);
          }
          SwitchObserver.prototype.next = function(innerSource) {
            var d = new SingleAssignmentDisposable(), id = ++this.latest;
            this.hasLatest = true;
            this.inner.setDisposable(d);
            isPromise(innerSource) && (innerSource = observableFromPromise(innerSource));
            d.setDisposable(innerSource.subscribe(new InnerObserver(this, id)));
          };
          SwitchObserver.prototype.error = function(e) {
            this.o.onError(e);
          };
          SwitchObserver.prototype.completed = function() {
            this.stopped = true;
            !this.hasLatest && this.o.onCompleted();
          };
          inherits(InnerObserver, AbstractObserver);
          function InnerObserver(parent, id) {
            this.parent = parent;
            this.id = id;
            AbstractObserver.call(this);
          }
          InnerObserver.prototype.next = function(x) {
            this.parent.latest === this.id && this.parent.o.onNext(x);
          };
          InnerObserver.prototype.error = function(e) {
            this.parent.latest === this.id && this.parent.o.onError(e);
          };
          InnerObserver.prototype.completed = function() {
            if (this.parent.latest === this.id) {
              this.parent.hasLatest = false;
              this.parent.stopped && this.parent.o.onCompleted();
            }
          };
          return SwitchObservable2;
        }(ObservableBase);
        observableProto["switch"] = observableProto.switchLatest = function() {
          return new SwitchObservable(this);
        };
        var TakeUntilObservable = function(__super__) {
          inherits(TakeUntilObservable2, __super__);
          function TakeUntilObservable2(source, other) {
            this.source = source;
            this.other = isPromise(other) ? observableFromPromise(other) : other;
            __super__.call(this);
          }
          TakeUntilObservable2.prototype.subscribeCore = function(o) {
            return new BinaryDisposable(
              this.source.subscribe(o),
              this.other.subscribe(new TakeUntilObserver(o))
            );
          };
          return TakeUntilObservable2;
        }(ObservableBase);
        var TakeUntilObserver = function(__super__) {
          inherits(TakeUntilObserver2, __super__);
          function TakeUntilObserver2(o) {
            this._o = o;
            __super__.call(this);
          }
          TakeUntilObserver2.prototype.next = function() {
            this._o.onCompleted();
          };
          TakeUntilObserver2.prototype.error = function(err) {
            this._o.onError(err);
          };
          TakeUntilObserver2.prototype.onCompleted = noop;
          return TakeUntilObserver2;
        }(AbstractObserver);
        observableProto.takeUntil = function(other) {
          return new TakeUntilObservable(this, other);
        };
        function falseFactory() {
          return false;
        }
        function argumentsToArray() {
          var len = arguments.length, args = new Array(len);
          for (var i = 0; i < len; i++) {
            args[i] = arguments[i];
          }
          return args;
        }
        var WithLatestFromObservable = function(__super__) {
          inherits(WithLatestFromObservable2, __super__);
          function WithLatestFromObservable2(source, sources, resultSelector) {
            this._s = source;
            this._ss = sources;
            this._cb = resultSelector;
            __super__.call(this);
          }
          WithLatestFromObservable2.prototype.subscribeCore = function(o) {
            var len = this._ss.length;
            var state = {
              hasValue: arrayInitialize(len, falseFactory),
              hasValueAll: false,
              values: new Array(len)
            };
            var n = this._ss.length, subscriptions = new Array(n + 1);
            for (var i = 0; i < n; i++) {
              var other = this._ss[i], sad = new SingleAssignmentDisposable();
              isPromise(other) && (other = observableFromPromise(other));
              sad.setDisposable(other.subscribe(new WithLatestFromOtherObserver(o, i, state)));
              subscriptions[i] = sad;
            }
            var outerSad = new SingleAssignmentDisposable();
            outerSad.setDisposable(this._s.subscribe(new WithLatestFromSourceObserver(o, this._cb, state)));
            subscriptions[n] = outerSad;
            return new NAryDisposable(subscriptions);
          };
          return WithLatestFromObservable2;
        }(ObservableBase);
        var WithLatestFromOtherObserver = function(__super__) {
          inherits(WithLatestFromOtherObserver2, __super__);
          function WithLatestFromOtherObserver2(o, i, state) {
            this._o = o;
            this._i = i;
            this._state = state;
            __super__.call(this);
          }
          WithLatestFromOtherObserver2.prototype.next = function(x) {
            this._state.values[this._i] = x;
            this._state.hasValue[this._i] = true;
            this._state.hasValueAll = this._state.hasValue.every(identity);
          };
          WithLatestFromOtherObserver2.prototype.error = function(e) {
            this._o.onError(e);
          };
          WithLatestFromOtherObserver2.prototype.completed = noop;
          return WithLatestFromOtherObserver2;
        }(AbstractObserver);
        var WithLatestFromSourceObserver = function(__super__) {
          inherits(WithLatestFromSourceObserver2, __super__);
          function WithLatestFromSourceObserver2(o, cb, state) {
            this._o = o;
            this._cb = cb;
            this._state = state;
            __super__.call(this);
          }
          WithLatestFromSourceObserver2.prototype.next = function(x) {
            var allValues = [x].concat(this._state.values);
            if (!this._state.hasValueAll) {
              return;
            }
            var res = tryCatch(this._cb).apply(null, allValues);
            if (res === errorObj) {
              return this._o.onError(res.e);
            }
            this._o.onNext(res);
          };
          WithLatestFromSourceObserver2.prototype.error = function(e) {
            this._o.onError(e);
          };
          WithLatestFromSourceObserver2.prototype.completed = function() {
            this._o.onCompleted();
          };
          return WithLatestFromSourceObserver2;
        }(AbstractObserver);
        observableProto.withLatestFrom = function() {
          if (arguments.length === 0) {
            throw new Error("invalid arguments");
          }
          var len = arguments.length, args = new Array(len);
          for (var i = 0; i < len; i++) {
            args[i] = arguments[i];
          }
          var resultSelector = isFunction(args[len - 1]) ? args.pop() : argumentsToArray;
          Array.isArray(args[0]) && (args = args[0]);
          return new WithLatestFromObservable(this, args, resultSelector);
        };
        function falseFactory() {
          return false;
        }
        function emptyArrayFactory() {
          return [];
        }
        var ZipObservable = function(__super__) {
          inherits(ZipObservable2, __super__);
          function ZipObservable2(sources, resultSelector) {
            this._s = sources;
            this._cb = resultSelector;
            __super__.call(this);
          }
          ZipObservable2.prototype.subscribeCore = function(observer) {
            var n = this._s.length, subscriptions = new Array(n), done = arrayInitialize(n, falseFactory), q = arrayInitialize(n, emptyArrayFactory);
            for (var i = 0; i < n; i++) {
              var source = this._s[i], sad = new SingleAssignmentDisposable();
              subscriptions[i] = sad;
              isPromise(source) && (source = observableFromPromise(source));
              sad.setDisposable(source.subscribe(new ZipObserver(observer, i, this, q, done)));
            }
            return new NAryDisposable(subscriptions);
          };
          return ZipObservable2;
        }(ObservableBase);
        var ZipObserver = function(__super__) {
          inherits(ZipObserver2, __super__);
          function ZipObserver2(o, i, p, q, d) {
            this._o = o;
            this._i = i;
            this._p = p;
            this._q = q;
            this._d = d;
            __super__.call(this);
          }
          function notEmpty(x) {
            return x.length > 0;
          }
          function shiftEach(x) {
            return x.shift();
          }
          function notTheSame(i) {
            return function(x, j) {
              return j !== i;
            };
          }
          ZipObserver2.prototype.next = function(x) {
            this._q[this._i].push(x);
            if (this._q.every(notEmpty)) {
              var queuedValues = this._q.map(shiftEach);
              var res = tryCatch(this._p._cb).apply(null, queuedValues);
              if (res === errorObj) {
                return this._o.onError(res.e);
              }
              this._o.onNext(res);
            } else if (this._d.filter(notTheSame(this._i)).every(identity)) {
              this._o.onCompleted();
            }
          };
          ZipObserver2.prototype.error = function(e) {
            this._o.onError(e);
          };
          ZipObserver2.prototype.completed = function() {
            this._d[this._i] = true;
            this._d.every(identity) && this._o.onCompleted();
          };
          return ZipObserver2;
        }(AbstractObserver);
        observableProto.zip = function() {
          if (arguments.length === 0) {
            throw new Error("invalid arguments");
          }
          var len = arguments.length, args = new Array(len);
          for (var i = 0; i < len; i++) {
            args[i] = arguments[i];
          }
          var resultSelector = isFunction(args[len - 1]) ? args.pop() : argumentsToArray;
          Array.isArray(args[0]) && (args = args[0]);
          var parent = this;
          args.unshift(parent);
          return new ZipObservable(args, resultSelector);
        };
        Observable.zip = function() {
          var len = arguments.length, args = new Array(len);
          for (var i = 0; i < len; i++) {
            args[i] = arguments[i];
          }
          if (Array.isArray(args[0])) {
            args = isFunction(args[1]) ? args[0].concat(args[1]) : args[0];
          }
          var first = args.shift();
          return first.zip.apply(first, args);
        };
        function falseFactory() {
          return false;
        }
        function emptyArrayFactory() {
          return [];
        }
        function argumentsToArray() {
          var len = arguments.length, args = new Array(len);
          for (var i = 0; i < len; i++) {
            args[i] = arguments[i];
          }
          return args;
        }
        var ZipIterableObservable = function(__super__) {
          inherits(ZipIterableObservable2, __super__);
          function ZipIterableObservable2(sources, cb) {
            this.sources = sources;
            this._cb = cb;
            __super__.call(this);
          }
          ZipIterableObservable2.prototype.subscribeCore = function(o) {
            var sources = this.sources, len = sources.length, subscriptions = new Array(len);
            var state = {
              q: arrayInitialize(len, emptyArrayFactory),
              done: arrayInitialize(len, falseFactory),
              cb: this._cb,
              o
            };
            for (var i = 0; i < len; i++) {
              (function(i2) {
                var source = sources[i2], sad = new SingleAssignmentDisposable();
                (isArrayLike(source) || isIterable(source)) && (source = observableFrom(source));
                subscriptions[i2] = sad;
                sad.setDisposable(source.subscribe(new ZipIterableObserver(state, i2)));
              })(i);
            }
            return new NAryDisposable(subscriptions);
          };
          return ZipIterableObservable2;
        }(ObservableBase);
        var ZipIterableObserver = function(__super__) {
          inherits(ZipIterableObserver2, __super__);
          function ZipIterableObserver2(s, i) {
            this._s = s;
            this._i = i;
            __super__.call(this);
          }
          function notEmpty(x) {
            return x.length > 0;
          }
          function shiftEach(x) {
            return x.shift();
          }
          function notTheSame(i) {
            return function(x, j) {
              return j !== i;
            };
          }
          ZipIterableObserver2.prototype.next = function(x) {
            this._s.q[this._i].push(x);
            if (this._s.q.every(notEmpty)) {
              var queuedValues = this._s.q.map(shiftEach), res = tryCatch(this._s.cb).apply(null, queuedValues);
              if (res === errorObj) {
                return this._s.o.onError(res.e);
              }
              this._s.o.onNext(res);
            } else if (this._s.done.filter(notTheSame(this._i)).every(identity)) {
              this._s.o.onCompleted();
            }
          };
          ZipIterableObserver2.prototype.error = function(e) {
            this._s.o.onError(e);
          };
          ZipIterableObserver2.prototype.completed = function() {
            this._s.done[this._i] = true;
            this._s.done.every(identity) && this._s.o.onCompleted();
          };
          return ZipIterableObserver2;
        }(AbstractObserver);
        observableProto.zipIterable = function() {
          if (arguments.length === 0) {
            throw new Error("invalid arguments");
          }
          var len = arguments.length, args = new Array(len);
          for (var i = 0; i < len; i++) {
            args[i] = arguments[i];
          }
          var resultSelector = isFunction(args[len - 1]) ? args.pop() : argumentsToArray;
          var parent = this;
          args.unshift(parent);
          return new ZipIterableObservable(args, resultSelector);
        };
        function asObservable(source) {
          return function subscribe(o) {
            return source.subscribe(o);
          };
        }
        observableProto.asObservable = function() {
          return new AnonymousObservable(asObservable(this), this);
        };
        var DematerializeObservable = function(__super__) {
          inherits(DematerializeObservable2, __super__);
          function DematerializeObservable2(source) {
            this.source = source;
            __super__.call(this);
          }
          DematerializeObservable2.prototype.subscribeCore = function(o) {
            return this.source.subscribe(new DematerializeObserver(o));
          };
          return DematerializeObservable2;
        }(ObservableBase);
        var DematerializeObserver = function(__super__) {
          inherits(DematerializeObserver2, __super__);
          function DematerializeObserver2(o) {
            this._o = o;
            __super__.call(this);
          }
          DematerializeObserver2.prototype.next = function(x) {
            x.accept(this._o);
          };
          DematerializeObserver2.prototype.error = function(e) {
            this._o.onError(e);
          };
          DematerializeObserver2.prototype.completed = function() {
            this._o.onCompleted();
          };
          return DematerializeObserver2;
        }(AbstractObserver);
        observableProto.dematerialize = function() {
          return new DematerializeObservable(this);
        };
        var DistinctUntilChangedObservable = function(__super__) {
          inherits(DistinctUntilChangedObservable2, __super__);
          function DistinctUntilChangedObservable2(source, keyFn, comparer) {
            this.source = source;
            this.keyFn = keyFn;
            this.comparer = comparer;
            __super__.call(this);
          }
          DistinctUntilChangedObservable2.prototype.subscribeCore = function(o) {
            return this.source.subscribe(new DistinctUntilChangedObserver(o, this.keyFn, this.comparer));
          };
          return DistinctUntilChangedObservable2;
        }(ObservableBase);
        var DistinctUntilChangedObserver = function(__super__) {
          inherits(DistinctUntilChangedObserver2, __super__);
          function DistinctUntilChangedObserver2(o, keyFn, comparer) {
            this.o = o;
            this.keyFn = keyFn;
            this.comparer = comparer;
            this.hasCurrentKey = false;
            this.currentKey = null;
            __super__.call(this);
          }
          DistinctUntilChangedObserver2.prototype.next = function(x) {
            var key = x, comparerEquals;
            if (isFunction(this.keyFn)) {
              key = tryCatch(this.keyFn)(x);
              if (key === errorObj) {
                return this.o.onError(key.e);
              }
            }
            if (this.hasCurrentKey) {
              comparerEquals = tryCatch(this.comparer)(this.currentKey, key);
              if (comparerEquals === errorObj) {
                return this.o.onError(comparerEquals.e);
              }
            }
            if (!this.hasCurrentKey || !comparerEquals) {
              this.hasCurrentKey = true;
              this.currentKey = key;
              this.o.onNext(x);
            }
          };
          DistinctUntilChangedObserver2.prototype.error = function(e) {
            this.o.onError(e);
          };
          DistinctUntilChangedObserver2.prototype.completed = function() {
            this.o.onCompleted();
          };
          return DistinctUntilChangedObserver2;
        }(AbstractObserver);
        observableProto.distinctUntilChanged = function(keyFn, comparer) {
          comparer || (comparer = defaultComparer);
          return new DistinctUntilChangedObservable(this, keyFn, comparer);
        };
        var TapObservable = function(__super__) {
          inherits(TapObservable2, __super__);
          function TapObservable2(source, observerOrOnNext, onError, onCompleted) {
            this.source = source;
            this._oN = observerOrOnNext;
            this._oE = onError;
            this._oC = onCompleted;
            __super__.call(this);
          }
          TapObservable2.prototype.subscribeCore = function(o) {
            return this.source.subscribe(new InnerObserver(o, this));
          };
          inherits(InnerObserver, AbstractObserver);
          function InnerObserver(o, p) {
            this.o = o;
            this.t = !p._oN || isFunction(p._oN) ? observerCreate(p._oN || noop, p._oE || noop, p._oC || noop) : p._oN;
            this.isStopped = false;
            AbstractObserver.call(this);
          }
          InnerObserver.prototype.next = function(x) {
            var res = tryCatch(this.t.onNext).call(this.t, x);
            if (res === errorObj) {
              this.o.onError(res.e);
            }
            this.o.onNext(x);
          };
          InnerObserver.prototype.error = function(err) {
            var res = tryCatch(this.t.onError).call(this.t, err);
            if (res === errorObj) {
              return this.o.onError(res.e);
            }
            this.o.onError(err);
          };
          InnerObserver.prototype.completed = function() {
            var res = tryCatch(this.t.onCompleted).call(this.t);
            if (res === errorObj) {
              return this.o.onError(res.e);
            }
            this.o.onCompleted();
          };
          return TapObservable2;
        }(ObservableBase);
        observableProto["do"] = observableProto.tap = observableProto.doAction = function(observerOrOnNext, onError, onCompleted) {
          return new TapObservable(this, observerOrOnNext, onError, onCompleted);
        };
        observableProto.doOnNext = observableProto.tapOnNext = function(onNext, thisArg) {
          return this.tap(typeof thisArg !== "undefined" ? function(x) {
            onNext.call(thisArg, x);
          } : onNext);
        };
        observableProto.doOnError = observableProto.tapOnError = function(onError, thisArg) {
          return this.tap(noop, typeof thisArg !== "undefined" ? function(e) {
            onError.call(thisArg, e);
          } : onError);
        };
        observableProto.doOnCompleted = observableProto.tapOnCompleted = function(onCompleted, thisArg) {
          return this.tap(noop, null, typeof thisArg !== "undefined" ? function() {
            onCompleted.call(thisArg);
          } : onCompleted);
        };
        var FinallyObservable = function(__super__) {
          inherits(FinallyObservable2, __super__);
          function FinallyObservable2(source, fn, thisArg) {
            this.source = source;
            this._fn = bindCallback(fn, thisArg, 0);
            __super__.call(this);
          }
          FinallyObservable2.prototype.subscribeCore = function(o) {
            var d = tryCatch(this.source.subscribe).call(this.source, o);
            if (d === errorObj) {
              this._fn();
              thrower(d.e);
            }
            return new FinallyDisposable(d, this._fn);
          };
          function FinallyDisposable(s, fn) {
            this.isDisposed = false;
            this._s = s;
            this._fn = fn;
          }
          FinallyDisposable.prototype.dispose = function() {
            if (!this.isDisposed) {
              var res = tryCatch(this._s.dispose).call(this._s);
              this._fn();
              res === errorObj && thrower(res.e);
            }
          };
          return FinallyObservable2;
        }(ObservableBase);
        observableProto["finally"] = function(action, thisArg) {
          return new FinallyObservable(this, action, thisArg);
        };
        var IgnoreElementsObservable = function(__super__) {
          inherits(IgnoreElementsObservable2, __super__);
          function IgnoreElementsObservable2(source) {
            this.source = source;
            __super__.call(this);
          }
          IgnoreElementsObservable2.prototype.subscribeCore = function(o) {
            return this.source.subscribe(new InnerObserver(o));
          };
          function InnerObserver(o) {
            this.o = o;
            this.isStopped = false;
          }
          InnerObserver.prototype.onNext = noop;
          InnerObserver.prototype.onError = function(err) {
            if (!this.isStopped) {
              this.isStopped = true;
              this.o.onError(err);
            }
          };
          InnerObserver.prototype.onCompleted = function() {
            if (!this.isStopped) {
              this.isStopped = true;
              this.o.onCompleted();
            }
          };
          InnerObserver.prototype.dispose = function() {
            this.isStopped = true;
          };
          InnerObserver.prototype.fail = function(e) {
            if (!this.isStopped) {
              this.isStopped = true;
              this.observer.onError(e);
              return true;
            }
            return false;
          };
          return IgnoreElementsObservable2;
        }(ObservableBase);
        observableProto.ignoreElements = function() {
          return new IgnoreElementsObservable(this);
        };
        var MaterializeObservable = function(__super__) {
          inherits(MaterializeObservable2, __super__);
          function MaterializeObservable2(source, fn) {
            this.source = source;
            __super__.call(this);
          }
          MaterializeObservable2.prototype.subscribeCore = function(o) {
            return this.source.subscribe(new MaterializeObserver(o));
          };
          return MaterializeObservable2;
        }(ObservableBase);
        var MaterializeObserver = function(__super__) {
          inherits(MaterializeObserver2, __super__);
          function MaterializeObserver2(o) {
            this._o = o;
            __super__.call(this);
          }
          MaterializeObserver2.prototype.next = function(x) {
            this._o.onNext(notificationCreateOnNext(x));
          };
          MaterializeObserver2.prototype.error = function(e) {
            this._o.onNext(notificationCreateOnError(e));
            this._o.onCompleted();
          };
          MaterializeObserver2.prototype.completed = function() {
            this._o.onNext(notificationCreateOnCompleted());
            this._o.onCompleted();
          };
          return MaterializeObserver2;
        }(AbstractObserver);
        observableProto.materialize = function() {
          return new MaterializeObservable(this);
        };
        observableProto.repeat = function(repeatCount) {
          return enumerableRepeat(this, repeatCount).concat();
        };
        observableProto.retry = function(retryCount) {
          return enumerableRepeat(this, retryCount).catchError();
        };
        function repeat(value) {
          return {
            "@@iterator": function() {
              return {
                next: function() {
                  return { done: false, value };
                }
              };
            }
          };
        }
        var RetryWhenObservable = function(__super__) {
          function createDisposable(state) {
            return {
              isDisposed: false,
              dispose: function() {
                if (!this.isDisposed) {
                  this.isDisposed = true;
                  state.isDisposed = true;
                }
              }
            };
          }
          function RetryWhenObservable2(source, notifier) {
            this.source = source;
            this._notifier = notifier;
            __super__.call(this);
          }
          inherits(RetryWhenObservable2, __super__);
          RetryWhenObservable2.prototype.subscribeCore = function(o) {
            var exceptions = new Subject(), notifier = new Subject(), handled = this._notifier(exceptions), notificationDisposable = handled.subscribe(notifier);
            var e = this.source["@@iterator"]();
            var state = { isDisposed: false }, lastError, subscription = new SerialDisposable();
            var cancelable = currentThreadScheduler.scheduleRecursive(null, function(_, recurse) {
              if (state.isDisposed) {
                return;
              }
              var currentItem = e.next();
              if (currentItem.done) {
                if (lastError) {
                  o.onError(lastError);
                } else {
                  o.onCompleted();
                }
                return;
              }
              var currentValue = currentItem.value;
              isPromise(currentValue) && (currentValue = observableFromPromise(currentValue));
              var outer = new SingleAssignmentDisposable();
              var inner = new SingleAssignmentDisposable();
              subscription.setDisposable(new BinaryDisposable(inner, outer));
              outer.setDisposable(currentValue.subscribe(
                function(x) {
                  o.onNext(x);
                },
                function(exn) {
                  inner.setDisposable(notifier.subscribe(recurse, function(ex) {
                    o.onError(ex);
                  }, function() {
                    o.onCompleted();
                  }));
                  exceptions.onNext(exn);
                  outer.dispose();
                },
                function() {
                  o.onCompleted();
                }
              ));
            });
            return new NAryDisposable([notificationDisposable, subscription, cancelable, createDisposable(state)]);
          };
          return RetryWhenObservable2;
        }(ObservableBase);
        observableProto.retryWhen = function(notifier) {
          return new RetryWhenObservable(repeat(this), notifier);
        };
        function repeat(value) {
          return {
            "@@iterator": function() {
              return {
                next: function() {
                  return { done: false, value };
                }
              };
            }
          };
        }
        var RepeatWhenObservable = function(__super__) {
          function createDisposable(state) {
            return {
              isDisposed: false,
              dispose: function() {
                if (!this.isDisposed) {
                  this.isDisposed = true;
                  state.isDisposed = true;
                }
              }
            };
          }
          function RepeatWhenObservable2(source, notifier) {
            this.source = source;
            this._notifier = notifier;
            __super__.call(this);
          }
          inherits(RepeatWhenObservable2, __super__);
          RepeatWhenObservable2.prototype.subscribeCore = function(o) {
            var completions = new Subject(), notifier = new Subject(), handled = this._notifier(completions), notificationDisposable = handled.subscribe(notifier);
            var e = this.source["@@iterator"]();
            var state = { isDisposed: false }, lastError, subscription = new SerialDisposable();
            var cancelable = currentThreadScheduler.scheduleRecursive(null, function(_, recurse) {
              if (state.isDisposed) {
                return;
              }
              var currentItem = e.next();
              if (currentItem.done) {
                if (lastError) {
                  o.onError(lastError);
                } else {
                  o.onCompleted();
                }
                return;
              }
              var currentValue = currentItem.value;
              isPromise(currentValue) && (currentValue = observableFromPromise(currentValue));
              var outer = new SingleAssignmentDisposable();
              var inner = new SingleAssignmentDisposable();
              subscription.setDisposable(new BinaryDisposable(inner, outer));
              outer.setDisposable(currentValue.subscribe(
                function(x) {
                  o.onNext(x);
                },
                function(exn) {
                  o.onError(exn);
                },
                function() {
                  inner.setDisposable(notifier.subscribe(recurse, function(ex) {
                    o.onError(ex);
                  }, function() {
                    o.onCompleted();
                  }));
                  completions.onNext(null);
                  outer.dispose();
                }
              ));
            });
            return new NAryDisposable([notificationDisposable, subscription, cancelable, createDisposable(state)]);
          };
          return RepeatWhenObservable2;
        }(ObservableBase);
        observableProto.repeatWhen = function(notifier) {
          return new RepeatWhenObservable(repeat(this), notifier);
        };
        var ScanObservable = function(__super__) {
          inherits(ScanObservable2, __super__);
          function ScanObservable2(source, accumulator, hasSeed, seed) {
            this.source = source;
            this.accumulator = accumulator;
            this.hasSeed = hasSeed;
            this.seed = seed;
            __super__.call(this);
          }
          ScanObservable2.prototype.subscribeCore = function(o) {
            return this.source.subscribe(new ScanObserver(o, this));
          };
          return ScanObservable2;
        }(ObservableBase);
        var ScanObserver = function(__super__) {
          inherits(ScanObserver2, __super__);
          function ScanObserver2(o, parent) {
            this._o = o;
            this._p = parent;
            this._fn = parent.accumulator;
            this._hs = parent.hasSeed;
            this._s = parent.seed;
            this._ha = false;
            this._a = null;
            this._hv = false;
            this._i = 0;
            __super__.call(this);
          }
          ScanObserver2.prototype.next = function(x) {
            !this._hv && (this._hv = true);
            if (this._ha) {
              this._a = tryCatch(this._fn)(this._a, x, this._i, this._p);
            } else {
              this._a = this._hs ? tryCatch(this._fn)(this._s, x, this._i, this._p) : x;
              this._ha = true;
            }
            if (this._a === errorObj) {
              return this._o.onError(this._a.e);
            }
            this._o.onNext(this._a);
            this._i++;
          };
          ScanObserver2.prototype.error = function(e) {
            this._o.onError(e);
          };
          ScanObserver2.prototype.completed = function() {
            !this._hv && this._hs && this._o.onNext(this._s);
            this._o.onCompleted();
          };
          return ScanObserver2;
        }(AbstractObserver);
        observableProto.scan = function() {
          var hasSeed = false, seed, accumulator = arguments[0];
          if (arguments.length === 2) {
            hasSeed = true;
            seed = arguments[1];
          }
          return new ScanObservable(this, accumulator, hasSeed, seed);
        };
        var SkipLastObservable = function(__super__) {
          inherits(SkipLastObservable2, __super__);
          function SkipLastObservable2(source, c) {
            this.source = source;
            this._c = c;
            __super__.call(this);
          }
          SkipLastObservable2.prototype.subscribeCore = function(o) {
            return this.source.subscribe(new SkipLastObserver(o, this._c));
          };
          return SkipLastObservable2;
        }(ObservableBase);
        var SkipLastObserver = function(__super__) {
          inherits(SkipLastObserver2, __super__);
          function SkipLastObserver2(o, c) {
            this._o = o;
            this._c = c;
            this._q = [];
            __super__.call(this);
          }
          SkipLastObserver2.prototype.next = function(x) {
            this._q.push(x);
            this._q.length > this._c && this._o.onNext(this._q.shift());
          };
          SkipLastObserver2.prototype.error = function(e) {
            this._o.onError(e);
          };
          SkipLastObserver2.prototype.completed = function() {
            this._o.onCompleted();
          };
          return SkipLastObserver2;
        }(AbstractObserver);
        observableProto.skipLast = function(count) {
          if (count < 0) {
            throw new ArgumentOutOfRangeError();
          }
          return new SkipLastObservable(this, count);
        };
        observableProto.startWith = function() {
          var values, scheduler, start = 0;
          if (!!arguments.length && isScheduler(arguments[0])) {
            scheduler = arguments[0];
            start = 1;
          } else {
            scheduler = immediateScheduler;
          }
          for (var args = [], i = start, len = arguments.length; i < len; i++) {
            args.push(arguments[i]);
          }
          return enumerableOf([observableFromArray(args, scheduler), this]).concat();
        };
        var TakeLastObserver = function(__super__) {
          inherits(TakeLastObserver2, __super__);
          function TakeLastObserver2(o, c) {
            this._o = o;
            this._c = c;
            this._q = [];
            __super__.call(this);
          }
          TakeLastObserver2.prototype.next = function(x) {
            this._q.push(x);
            this._q.length > this._c && this._q.shift();
          };
          TakeLastObserver2.prototype.error = function(e) {
            this._o.onError(e);
          };
          TakeLastObserver2.prototype.completed = function() {
            while (this._q.length > 0) {
              this._o.onNext(this._q.shift());
            }
            this._o.onCompleted();
          };
          return TakeLastObserver2;
        }(AbstractObserver);
        observableProto.takeLast = function(count) {
          if (count < 0) {
            throw new ArgumentOutOfRangeError();
          }
          var source = this;
          return new AnonymousObservable(function(o) {
            return source.subscribe(new TakeLastObserver(o, count));
          }, source);
        };
        observableProto.flatMapConcat = observableProto.concatMap = function(selector, resultSelector, thisArg) {
          return new FlatMapObservable(this, selector, resultSelector, thisArg).merge(1);
        };
        var MapObservable = function(__super__) {
          inherits(MapObservable2, __super__);
          function MapObservable2(source, selector, thisArg) {
            this.source = source;
            this.selector = bindCallback(selector, thisArg, 3);
            __super__.call(this);
          }
          function innerMap(selector, self2) {
            return function(x, i, o) {
              return selector.call(this, self2.selector(x, i, o), i, o);
            };
          }
          MapObservable2.prototype.internalMap = function(selector, thisArg) {
            return new MapObservable2(this.source, innerMap(selector, this), thisArg);
          };
          MapObservable2.prototype.subscribeCore = function(o) {
            return this.source.subscribe(new InnerObserver(o, this.selector, this));
          };
          inherits(InnerObserver, AbstractObserver);
          function InnerObserver(o, selector, source) {
            this.o = o;
            this.selector = selector;
            this.source = source;
            this.i = 0;
            AbstractObserver.call(this);
          }
          InnerObserver.prototype.next = function(x) {
            var result = tryCatch(this.selector)(x, this.i++, this.source);
            if (result === errorObj) {
              return this.o.onError(result.e);
            }
            this.o.onNext(result);
          };
          InnerObserver.prototype.error = function(e) {
            this.o.onError(e);
          };
          InnerObserver.prototype.completed = function() {
            this.o.onCompleted();
          };
          return MapObservable2;
        }(ObservableBase);
        observableProto.map = observableProto.select = function(selector, thisArg) {
          var selectorFn = typeof selector === "function" ? selector : function() {
            return selector;
          };
          return this instanceof MapObservable ? this.internalMap(selectorFn, thisArg) : new MapObservable(this, selectorFn, thisArg);
        };
        function plucker(args, len) {
          return function mapper(x) {
            var currentProp = x;
            for (var i = 0; i < len; i++) {
              var p = currentProp[args[i]];
              if (typeof p !== "undefined") {
                currentProp = p;
              } else {
                return undefined2;
              }
            }
            return currentProp;
          };
        }
        observableProto.pluck = function() {
          var len = arguments.length, args = new Array(len);
          if (len === 0) {
            throw new Error("List of properties cannot be empty.");
          }
          for (var i = 0; i < len; i++) {
            args[i] = arguments[i];
          }
          return this.map(plucker(args, len));
        };
        observableProto.flatMap = observableProto.selectMany = function(selector, resultSelector, thisArg) {
          return new FlatMapObservable(this, selector, resultSelector, thisArg).mergeAll();
        };
        Rx.Observable.prototype.flatMapLatest = function(selector, resultSelector, thisArg) {
          return new FlatMapObservable(this, selector, resultSelector, thisArg).switchLatest();
        };
        var SkipObservable = function(__super__) {
          inherits(SkipObservable2, __super__);
          function SkipObservable2(source, count) {
            this.source = source;
            this._count = count;
            __super__.call(this);
          }
          SkipObservable2.prototype.subscribeCore = function(o) {
            return this.source.subscribe(new SkipObserver(o, this._count));
          };
          function SkipObserver(o, c) {
            this._o = o;
            this._r = c;
            AbstractObserver.call(this);
          }
          inherits(SkipObserver, AbstractObserver);
          SkipObserver.prototype.next = function(x) {
            if (this._r <= 0) {
              this._o.onNext(x);
            } else {
              this._r--;
            }
          };
          SkipObserver.prototype.error = function(e) {
            this._o.onError(e);
          };
          SkipObserver.prototype.completed = function() {
            this._o.onCompleted();
          };
          return SkipObservable2;
        }(ObservableBase);
        observableProto.skip = function(count) {
          if (count < 0) {
            throw new ArgumentOutOfRangeError();
          }
          return new SkipObservable(this, count);
        };
        var SkipWhileObservable = function(__super__) {
          inherits(SkipWhileObservable2, __super__);
          function SkipWhileObservable2(source, fn) {
            this.source = source;
            this._fn = fn;
            __super__.call(this);
          }
          SkipWhileObservable2.prototype.subscribeCore = function(o) {
            return this.source.subscribe(new SkipWhileObserver(o, this));
          };
          return SkipWhileObservable2;
        }(ObservableBase);
        var SkipWhileObserver = function(__super__) {
          inherits(SkipWhileObserver2, __super__);
          function SkipWhileObserver2(o, p) {
            this._o = o;
            this._p = p;
            this._i = 0;
            this._r = false;
            __super__.call(this);
          }
          SkipWhileObserver2.prototype.next = function(x) {
            if (!this._r) {
              var res = tryCatch(this._p._fn)(x, this._i++, this._p);
              if (res === errorObj) {
                return this._o.onError(res.e);
              }
              this._r = !res;
            }
            this._r && this._o.onNext(x);
          };
          SkipWhileObserver2.prototype.error = function(e) {
            this._o.onError(e);
          };
          SkipWhileObserver2.prototype.completed = function() {
            this._o.onCompleted();
          };
          return SkipWhileObserver2;
        }(AbstractObserver);
        observableProto.skipWhile = function(predicate, thisArg) {
          var fn = bindCallback(predicate, thisArg, 3);
          return new SkipWhileObservable(this, fn);
        };
        var TakeObservable = function(__super__) {
          inherits(TakeObservable2, __super__);
          function TakeObservable2(source, count) {
            this.source = source;
            this._count = count;
            __super__.call(this);
          }
          TakeObservable2.prototype.subscribeCore = function(o) {
            return this.source.subscribe(new TakeObserver(o, this._count));
          };
          function TakeObserver(o, c) {
            this._o = o;
            this._c = c;
            this._r = c;
            AbstractObserver.call(this);
          }
          inherits(TakeObserver, AbstractObserver);
          TakeObserver.prototype.next = function(x) {
            if (this._r-- > 0) {
              this._o.onNext(x);
              this._r <= 0 && this._o.onCompleted();
            }
          };
          TakeObserver.prototype.error = function(e) {
            this._o.onError(e);
          };
          TakeObserver.prototype.completed = function() {
            this._o.onCompleted();
          };
          return TakeObservable2;
        }(ObservableBase);
        observableProto.take = function(count, scheduler) {
          if (count < 0) {
            throw new ArgumentOutOfRangeError();
          }
          if (count === 0) {
            return observableEmpty(scheduler);
          }
          return new TakeObservable(this, count);
        };
        var TakeWhileObservable = function(__super__) {
          inherits(TakeWhileObservable2, __super__);
          function TakeWhileObservable2(source, fn) {
            this.source = source;
            this._fn = fn;
            __super__.call(this);
          }
          TakeWhileObservable2.prototype.subscribeCore = function(o) {
            return this.source.subscribe(new TakeWhileObserver(o, this));
          };
          return TakeWhileObservable2;
        }(ObservableBase);
        var TakeWhileObserver = function(__super__) {
          inherits(TakeWhileObserver2, __super__);
          function TakeWhileObserver2(o, p) {
            this._o = o;
            this._p = p;
            this._i = 0;
            this._r = true;
            __super__.call(this);
          }
          TakeWhileObserver2.prototype.next = function(x) {
            if (this._r) {
              this._r = tryCatch(this._p._fn)(x, this._i++, this._p);
              if (this._r === errorObj) {
                return this._o.onError(this._r.e);
              }
            }
            if (this._r) {
              this._o.onNext(x);
            } else {
              this._o.onCompleted();
            }
          };
          TakeWhileObserver2.prototype.error = function(e) {
            this._o.onError(e);
          };
          TakeWhileObserver2.prototype.completed = function() {
            this._o.onCompleted();
          };
          return TakeWhileObserver2;
        }(AbstractObserver);
        observableProto.takeWhile = function(predicate, thisArg) {
          var fn = bindCallback(predicate, thisArg, 3);
          return new TakeWhileObservable(this, fn);
        };
        var FilterObservable = function(__super__) {
          inherits(FilterObservable2, __super__);
          function FilterObservable2(source, predicate, thisArg) {
            this.source = source;
            this.predicate = bindCallback(predicate, thisArg, 3);
            __super__.call(this);
          }
          FilterObservable2.prototype.subscribeCore = function(o) {
            return this.source.subscribe(new InnerObserver(o, this.predicate, this));
          };
          function innerPredicate(predicate, self2) {
            return function(x, i, o) {
              return self2.predicate(x, i, o) && predicate.call(this, x, i, o);
            };
          }
          FilterObservable2.prototype.internalFilter = function(predicate, thisArg) {
            return new FilterObservable2(this.source, innerPredicate(predicate, this), thisArg);
          };
          inherits(InnerObserver, AbstractObserver);
          function InnerObserver(o, predicate, source) {
            this.o = o;
            this.predicate = predicate;
            this.source = source;
            this.i = 0;
            AbstractObserver.call(this);
          }
          InnerObserver.prototype.next = function(x) {
            var shouldYield = tryCatch(this.predicate)(x, this.i++, this.source);
            if (shouldYield === errorObj) {
              return this.o.onError(shouldYield.e);
            }
            shouldYield && this.o.onNext(x);
          };
          InnerObserver.prototype.error = function(e) {
            this.o.onError(e);
          };
          InnerObserver.prototype.completed = function() {
            this.o.onCompleted();
          };
          return FilterObservable2;
        }(ObservableBase);
        observableProto.filter = observableProto.where = function(predicate, thisArg) {
          return this instanceof FilterObservable ? this.internalFilter(predicate, thisArg) : new FilterObservable(this, predicate, thisArg);
        };
        function createCbObservable(fn, ctx, selector, args) {
          var o = new AsyncSubject();
          args.push(createCbHandler(o, ctx, selector));
          fn.apply(ctx, args);
          return o.asObservable();
        }
        function createCbHandler(o, ctx, selector) {
          return function handler() {
            var len = arguments.length, results = new Array(len);
            for (var i = 0; i < len; i++) {
              results[i] = arguments[i];
            }
            if (isFunction(selector)) {
              results = tryCatch(selector).apply(ctx, results);
              if (results === errorObj) {
                return o.onError(results.e);
              }
              o.onNext(results);
            } else {
              if (results.length <= 1) {
                o.onNext(results[0]);
              } else {
                o.onNext(results);
              }
            }
            o.onCompleted();
          };
        }
        Observable.fromCallback = function(fn, ctx, selector) {
          return function() {
            typeof ctx === "undefined" && (ctx = this);
            var len = arguments.length, args = new Array(len);
            for (var i = 0; i < len; i++) {
              args[i] = arguments[i];
            }
            return createCbObservable(fn, ctx, selector, args);
          };
        };
        function createNodeObservable(fn, ctx, selector, args) {
          var o = new AsyncSubject();
          args.push(createNodeHandler(o, ctx, selector));
          fn.apply(ctx, args);
          return o.asObservable();
        }
        function createNodeHandler(o, ctx, selector) {
          return function handler() {
            var err = arguments[0];
            if (err) {
              return o.onError(err);
            }
            var len = arguments.length, results = [];
            for (var i = 1; i < len; i++) {
              results[i - 1] = arguments[i];
            }
            if (isFunction(selector)) {
              var results = tryCatch(selector).apply(ctx, results);
              if (results === errorObj) {
                return o.onError(results.e);
              }
              o.onNext(results);
            } else {
              if (results.length <= 1) {
                o.onNext(results[0]);
              } else {
                o.onNext(results);
              }
            }
            o.onCompleted();
          };
        }
        Observable.fromNodeCallback = function(fn, ctx, selector) {
          return function() {
            typeof ctx === "undefined" && (ctx = this);
            var len = arguments.length, args = new Array(len);
            for (var i = 0; i < len; i++) {
              args[i] = arguments[i];
            }
            return createNodeObservable(fn, ctx, selector, args);
          };
        };
        function isNodeList(el) {
          if (root.StaticNodeList) {
            return el instanceof root.StaticNodeList || el instanceof root.NodeList;
          } else {
            return Object.prototype.toString.call(el) === "[object NodeList]";
          }
        }
        function ListenDisposable(e, n, fn) {
          this._e = e;
          this._n = n;
          this._fn = fn;
          this._e.addEventListener(this._n, this._fn, false);
          this.isDisposed = false;
        }
        ListenDisposable.prototype.dispose = function() {
          if (!this.isDisposed) {
            this._e.removeEventListener(this._n, this._fn, false);
            this.isDisposed = true;
          }
        };
        function createEventListener(el, eventName, handler) {
          var disposables = new CompositeDisposable();
          var elemToString = Object.prototype.toString.call(el);
          if (isNodeList(el) || elemToString === "[object HTMLCollection]") {
            for (var i = 0, len = el.length; i < len; i++) {
              disposables.add(createEventListener(el.item(i), eventName, handler));
            }
          } else if (el) {
            disposables.add(new ListenDisposable(el, eventName, handler));
          }
          return disposables;
        }
        Rx.config.useNativeEvents = false;
        var EventObservable = function(__super__) {
          inherits(EventObservable2, __super__);
          function EventObservable2(el, name, fn) {
            this._el = el;
            this._n = name;
            this._fn = fn;
            __super__.call(this);
          }
          function createHandler(o, fn) {
            return function handler() {
              var results = arguments[0];
              if (isFunction(fn)) {
                results = tryCatch(fn).apply(null, arguments);
                if (results === errorObj) {
                  return o.onError(results.e);
                }
              }
              o.onNext(results);
            };
          }
          EventObservable2.prototype.subscribeCore = function(o) {
            return createEventListener(
              this._el,
              this._n,
              createHandler(o, this._fn)
            );
          };
          return EventObservable2;
        }(ObservableBase);
        Observable.fromEvent = function(element, eventName, selector) {
          if (element.addListener) {
            return fromEventPattern(
              function(h) {
                element.addListener(eventName, h);
              },
              function(h) {
                element.removeListener(eventName, h);
              },
              selector
            );
          }
          if (!Rx.config.useNativeEvents) {
            if (typeof element.on === "function" && typeof element.off === "function") {
              return fromEventPattern(
                function(h) {
                  element.on(eventName, h);
                },
                function(h) {
                  element.off(eventName, h);
                },
                selector
              );
            }
          }
          return new EventObservable(element, eventName, selector).publish().refCount();
        };
        var EventPatternObservable = function(__super__) {
          inherits(EventPatternObservable2, __super__);
          function EventPatternObservable2(add, del, fn) {
            this._add = add;
            this._del = del;
            this._fn = fn;
            __super__.call(this);
          }
          function createHandler(o, fn) {
            return function handler() {
              var results = arguments[0];
              if (isFunction(fn)) {
                results = tryCatch(fn).apply(null, arguments);
                if (results === errorObj) {
                  return o.onError(results.e);
                }
              }
              o.onNext(results);
            };
          }
          EventPatternObservable2.prototype.subscribeCore = function(o) {
            var fn = createHandler(o, this._fn);
            var returnValue = this._add(fn);
            return new EventPatternDisposable(this._del, fn, returnValue);
          };
          function EventPatternDisposable(del, fn, ret) {
            this._del = del;
            this._fn = fn;
            this._ret = ret;
            this.isDisposed = false;
          }
          EventPatternDisposable.prototype.dispose = function() {
            if (!this.isDisposed) {
              isFunction(this._del) && this._del(this._fn, this._ret);
              this.isDisposed = true;
            }
          };
          return EventPatternObservable2;
        }(ObservableBase);
        var fromEventPattern = Observable.fromEventPattern = function(addHandler, removeHandler, selector) {
          return new EventPatternObservable(addHandler, removeHandler, selector).publish().refCount();
        };
        var FromPromiseObservable = function(__super__) {
          inherits(FromPromiseObservable2, __super__);
          function FromPromiseObservable2(p, s) {
            this._p = p;
            this._s = s;
            __super__.call(this);
          }
          function scheduleNext(s, state) {
            var o = state[0], data = state[1];
            o.onNext(data);
            o.onCompleted();
          }
          function scheduleError(s, state) {
            var o = state[0], err = state[1];
            o.onError(err);
          }
          FromPromiseObservable2.prototype.subscribeCore = function(o) {
            var sad = new SingleAssignmentDisposable(), self2 = this;
            this._p.then(function(data) {
              sad.setDisposable(self2._s.schedule([o, data], scheduleNext));
            }, function(err) {
              sad.setDisposable(self2._s.schedule([o, err], scheduleError));
            });
            return sad;
          };
          return FromPromiseObservable2;
        }(ObservableBase);
        var observableFromPromise = Observable.fromPromise = function(promise, scheduler) {
          scheduler || (scheduler = defaultScheduler);
          return new FromPromiseObservable(promise, scheduler);
        };
        observableProto.toPromise = function(promiseCtor) {
          promiseCtor || (promiseCtor = Rx.config.Promise);
          if (!promiseCtor) {
            throw new NotSupportedError("Promise type not provided nor in Rx.config.Promise");
          }
          var source = this;
          return new promiseCtor(function(resolve, reject) {
            var value;
            source.subscribe(function(v) {
              value = v;
            }, reject, function() {
              resolve(value);
            });
          });
        };
        Observable.startAsync = function(functionAsync) {
          var promise = tryCatch(functionAsync)();
          if (promise === errorObj) {
            return observableThrow(promise.e);
          }
          return observableFromPromise(promise);
        };
        var MulticastObservable = function(__super__) {
          inherits(MulticastObservable2, __super__);
          function MulticastObservable2(source, fn1, fn2) {
            this.source = source;
            this._fn1 = fn1;
            this._fn2 = fn2;
            __super__.call(this);
          }
          MulticastObservable2.prototype.subscribeCore = function(o) {
            var connectable = this.source.multicast(this._fn1());
            return new BinaryDisposable(this._fn2(connectable).subscribe(o), connectable.connect());
          };
          return MulticastObservable2;
        }(ObservableBase);
        observableProto.multicast = function(subjectOrSubjectSelector, selector) {
          return isFunction(subjectOrSubjectSelector) ? new MulticastObservable(this, subjectOrSubjectSelector, selector) : new ConnectableObservable(this, subjectOrSubjectSelector);
        };
        observableProto.publish = function(selector) {
          return selector && isFunction(selector) ? this.multicast(function() {
            return new Subject();
          }, selector) : this.multicast(new Subject());
        };
        observableProto.share = function() {
          return this.publish().refCount();
        };
        observableProto.publishLast = function(selector) {
          return selector && isFunction(selector) ? this.multicast(function() {
            return new AsyncSubject();
          }, selector) : this.multicast(new AsyncSubject());
        };
        observableProto.publishValue = function(initialValueOrSelector, initialValue) {
          return arguments.length === 2 ? this.multicast(function() {
            return new BehaviorSubject(initialValue);
          }, initialValueOrSelector) : this.multicast(new BehaviorSubject(initialValueOrSelector));
        };
        observableProto.shareValue = function(initialValue) {
          return this.publishValue(initialValue).refCount();
        };
        observableProto.replay = function(selector, bufferSize, windowSize, scheduler) {
          return selector && isFunction(selector) ? this.multicast(function() {
            return new ReplaySubject(bufferSize, windowSize, scheduler);
          }, selector) : this.multicast(new ReplaySubject(bufferSize, windowSize, scheduler));
        };
        observableProto.shareReplay = function(bufferSize, windowSize, scheduler) {
          return this.replay(null, bufferSize, windowSize, scheduler).refCount();
        };
        var RefCountObservable = function(__super__) {
          inherits(RefCountObservable2, __super__);
          function RefCountObservable2(source) {
            this.source = source;
            this._count = 0;
            this._connectableSubscription = null;
            __super__.call(this);
          }
          RefCountObservable2.prototype.subscribeCore = function(o) {
            var subscription = this.source.subscribe(o);
            ++this._count === 1 && (this._connectableSubscription = this.source.connect());
            return new RefCountDisposable2(this, subscription);
          };
          function RefCountDisposable2(p, s) {
            this._p = p;
            this._s = s;
            this.isDisposed = false;
          }
          RefCountDisposable2.prototype.dispose = function() {
            if (!this.isDisposed) {
              this.isDisposed = true;
              this._s.dispose();
              --this._p._count === 0 && this._p._connectableSubscription.dispose();
            }
          };
          return RefCountObservable2;
        }(ObservableBase);
        var ConnectableObservable = Rx.ConnectableObservable = function(__super__) {
          inherits(ConnectableObservable2, __super__);
          function ConnectableObservable2(source, subject) {
            this.source = source;
            this._connection = null;
            this._source = source.asObservable();
            this._subject = subject;
            __super__.call(this);
          }
          function ConnectDisposable(parent, subscription) {
            this._p = parent;
            this._s = subscription;
          }
          ConnectDisposable.prototype.dispose = function() {
            if (this._s) {
              this._s.dispose();
              this._s = null;
              this._p._connection = null;
            }
          };
          ConnectableObservable2.prototype.connect = function() {
            if (!this._connection) {
              var subscription = this._source.subscribe(this._subject);
              this._connection = new ConnectDisposable(this, subscription);
            }
            return this._connection;
          };
          ConnectableObservable2.prototype._subscribe = function(o) {
            return this._subject.subscribe(o);
          };
          ConnectableObservable2.prototype.refCount = function() {
            return new RefCountObservable(this);
          };
          return ConnectableObservable2;
        }(Observable);
        var TimerObservable = function(__super__) {
          inherits(TimerObservable2, __super__);
          function TimerObservable2(dt, s) {
            this._dt = dt;
            this._s = s;
            __super__.call(this);
          }
          TimerObservable2.prototype.subscribeCore = function(o) {
            return this._s.scheduleFuture(o, this._dt, scheduleMethod2);
          };
          function scheduleMethod2(s, o) {
            o.onNext(0);
            o.onCompleted();
          }
          return TimerObservable2;
        }(ObservableBase);
        function _observableTimer(dueTime, scheduler) {
          return new TimerObservable(dueTime, scheduler);
        }
        function observableTimerDateAndPeriod(dueTime, period, scheduler) {
          return new AnonymousObservable(function(observer) {
            var d = dueTime, p = normalizeTime(period);
            return scheduler.scheduleRecursiveFuture(0, d, function(count, self2) {
              if (p > 0) {
                var now = scheduler.now();
                d = new Date(d.getTime() + p);
                d.getTime() <= now && (d = new Date(now + p));
              }
              observer.onNext(count);
              self2(count + 1, new Date(d));
            });
          });
        }
        function observableTimerTimeSpanAndPeriod(dueTime, period, scheduler) {
          return dueTime === period ? new AnonymousObservable(function(observer) {
            return scheduler.schedulePeriodic(0, period, function(count) {
              observer.onNext(count);
              return count + 1;
            });
          }) : observableDefer(function() {
            return observableTimerDateAndPeriod(new Date(scheduler.now() + dueTime), period, scheduler);
          });
        }
        var observableinterval = Observable.interval = function(period, scheduler) {
          return observableTimerTimeSpanAndPeriod(period, period, isScheduler(scheduler) ? scheduler : defaultScheduler);
        };
        var observableTimer = Observable.timer = function(dueTime, periodOrScheduler, scheduler) {
          var period;
          isScheduler(scheduler) || (scheduler = defaultScheduler);
          if (periodOrScheduler != null && typeof periodOrScheduler === "number") {
            period = periodOrScheduler;
          } else if (isScheduler(periodOrScheduler)) {
            scheduler = periodOrScheduler;
          }
          if ((dueTime instanceof Date || typeof dueTime === "number") && period === undefined2) {
            return _observableTimer(dueTime, scheduler);
          }
          if (dueTime instanceof Date && period !== undefined2) {
            return observableTimerDateAndPeriod(dueTime, periodOrScheduler, scheduler);
          }
          return observableTimerTimeSpanAndPeriod(dueTime, period, scheduler);
        };
        function observableDelayRelative(source, dueTime, scheduler) {
          return new AnonymousObservable(function(o) {
            var active = false, cancelable = new SerialDisposable(), exception = null, q = [], running = false, subscription;
            subscription = source.materialize().timestamp(scheduler).subscribe(function(notification) {
              var d, shouldRun;
              if (notification.value.kind === "E") {
                q = [];
                q.push(notification);
                exception = notification.value.error;
                shouldRun = !running;
              } else {
                q.push({ value: notification.value, timestamp: notification.timestamp + dueTime });
                shouldRun = !active;
                active = true;
              }
              if (shouldRun) {
                if (exception !== null) {
                  o.onError(exception);
                } else {
                  d = new SingleAssignmentDisposable();
                  cancelable.setDisposable(d);
                  d.setDisposable(scheduler.scheduleRecursiveFuture(null, dueTime, function(_, self2) {
                    var e, recurseDueTime, result, shouldRecurse;
                    if (exception !== null) {
                      return;
                    }
                    running = true;
                    do {
                      result = null;
                      if (q.length > 0 && q[0].timestamp - scheduler.now() <= 0) {
                        result = q.shift().value;
                      }
                      if (result !== null) {
                        result.accept(o);
                      }
                    } while (result !== null);
                    shouldRecurse = false;
                    recurseDueTime = 0;
                    if (q.length > 0) {
                      shouldRecurse = true;
                      recurseDueTime = Math.max(0, q[0].timestamp - scheduler.now());
                    } else {
                      active = false;
                    }
                    e = exception;
                    running = false;
                    if (e !== null) {
                      o.onError(e);
                    } else if (shouldRecurse) {
                      self2(null, recurseDueTime);
                    }
                  }));
                }
              }
            });
            return new BinaryDisposable(subscription, cancelable);
          }, source);
        }
        function observableDelayAbsolute(source, dueTime, scheduler) {
          return observableDefer(function() {
            return observableDelayRelative(source, dueTime - scheduler.now(), scheduler);
          });
        }
        function delayWithSelector(source, subscriptionDelay, delayDurationSelector) {
          var subDelay, selector;
          if (isFunction(subscriptionDelay)) {
            selector = subscriptionDelay;
          } else {
            subDelay = subscriptionDelay;
            selector = delayDurationSelector;
          }
          return new AnonymousObservable(function(o) {
            var delays = new CompositeDisposable(), atEnd = false, subscription = new SerialDisposable();
            function start() {
              subscription.setDisposable(source.subscribe(
                function(x) {
                  var delay = tryCatch(selector)(x);
                  if (delay === errorObj) {
                    return o.onError(delay.e);
                  }
                  var d = new SingleAssignmentDisposable();
                  delays.add(d);
                  d.setDisposable(delay.subscribe(
                    function() {
                      o.onNext(x);
                      delays.remove(d);
                      done();
                    },
                    function(e) {
                      o.onError(e);
                    },
                    function() {
                      o.onNext(x);
                      delays.remove(d);
                      done();
                    }
                  ));
                },
                function(e) {
                  o.onError(e);
                },
                function() {
                  atEnd = true;
                  subscription.dispose();
                  done();
                }
              ));
            }
            function done() {
              atEnd && delays.length === 0 && o.onCompleted();
            }
            if (!subDelay) {
              start();
            } else {
              subscription.setDisposable(subDelay.subscribe(start, function(e) {
                o.onError(e);
              }, start));
            }
            return new BinaryDisposable(subscription, delays);
          }, source);
        }
        observableProto.delay = function() {
          var firstArg = arguments[0];
          if (typeof firstArg === "number" || firstArg instanceof Date) {
            var dueTime = firstArg, scheduler = arguments[1];
            isScheduler(scheduler) || (scheduler = defaultScheduler);
            return dueTime instanceof Date ? observableDelayAbsolute(this, dueTime, scheduler) : observableDelayRelative(this, dueTime, scheduler);
          } else if (Observable.isObservable(firstArg) || isFunction(firstArg)) {
            return delayWithSelector(this, firstArg, arguments[1]);
          } else {
            throw new Error("Invalid arguments");
          }
        };
        var DebounceObservable = function(__super__) {
          inherits(DebounceObservable2, __super__);
          function DebounceObservable2(source, dt, s) {
            isScheduler(s) || (s = defaultScheduler);
            this.source = source;
            this._dt = dt;
            this._s = s;
            __super__.call(this);
          }
          DebounceObservable2.prototype.subscribeCore = function(o) {
            var cancelable = new SerialDisposable();
            return new BinaryDisposable(
              this.source.subscribe(new DebounceObserver(o, this._dt, this._s, cancelable)),
              cancelable
            );
          };
          return DebounceObservable2;
        }(ObservableBase);
        var DebounceObserver = function(__super__) {
          inherits(DebounceObserver2, __super__);
          function DebounceObserver2(observer, dueTime, scheduler, cancelable) {
            this._o = observer;
            this._d = dueTime;
            this._scheduler = scheduler;
            this._c = cancelable;
            this._v = null;
            this._hv = false;
            this._id = 0;
            __super__.call(this);
          }
          function scheduleFuture(s, state) {
            state.self._hv && state.self._id === state.currentId && state.self._o.onNext(state.x);
            state.self._hv = false;
          }
          DebounceObserver2.prototype.next = function(x) {
            this._hv = true;
            this._v = x;
            var currentId = ++this._id, d = new SingleAssignmentDisposable();
            this._c.setDisposable(d);
            d.setDisposable(this._scheduler.scheduleFuture(this, this._d, function(_, self2) {
              self2._hv && self2._id === currentId && self2._o.onNext(x);
              self2._hv = false;
            }));
          };
          DebounceObserver2.prototype.error = function(e) {
            this._c.dispose();
            this._o.onError(e);
            this._hv = false;
            this._id++;
          };
          DebounceObserver2.prototype.completed = function() {
            this._c.dispose();
            this._hv && this._o.onNext(this._v);
            this._o.onCompleted();
            this._hv = false;
            this._id++;
          };
          return DebounceObserver2;
        }(AbstractObserver);
        function debounceWithSelector(source, durationSelector) {
          return new AnonymousObservable(function(o) {
            var value, hasValue = false, cancelable = new SerialDisposable(), id = 0;
            var subscription = source.subscribe(
              function(x) {
                var throttle = tryCatch(durationSelector)(x);
                if (throttle === errorObj) {
                  return o.onError(throttle.e);
                }
                isPromise(throttle) && (throttle = observableFromPromise(throttle));
                hasValue = true;
                value = x;
                id++;
                var currentid = id, d = new SingleAssignmentDisposable();
                cancelable.setDisposable(d);
                d.setDisposable(throttle.subscribe(
                  function() {
                    hasValue && id === currentid && o.onNext(value);
                    hasValue = false;
                    d.dispose();
                  },
                  function(e) {
                    o.onError(e);
                  },
                  function() {
                    hasValue && id === currentid && o.onNext(value);
                    hasValue = false;
                    d.dispose();
                  }
                ));
              },
              function(e) {
                cancelable.dispose();
                o.onError(e);
                hasValue = false;
                id++;
              },
              function() {
                cancelable.dispose();
                hasValue && o.onNext(value);
                o.onCompleted();
                hasValue = false;
                id++;
              }
            );
            return new BinaryDisposable(subscription, cancelable);
          }, source);
        }
        observableProto.debounce = function() {
          if (isFunction(arguments[0])) {
            return debounceWithSelector(this, arguments[0]);
          } else if (typeof arguments[0] === "number") {
            return new DebounceObservable(this, arguments[0], arguments[1]);
          } else {
            throw new Error("Invalid arguments");
          }
        };
        var TimestampObservable = function(__super__) {
          inherits(TimestampObservable2, __super__);
          function TimestampObservable2(source, s) {
            this.source = source;
            this._s = s;
            __super__.call(this);
          }
          TimestampObservable2.prototype.subscribeCore = function(o) {
            return this.source.subscribe(new TimestampObserver(o, this._s));
          };
          return TimestampObservable2;
        }(ObservableBase);
        var TimestampObserver = function(__super__) {
          inherits(TimestampObserver2, __super__);
          function TimestampObserver2(o, s) {
            this._o = o;
            this._s = s;
            __super__.call(this);
          }
          TimestampObserver2.prototype.next = function(x) {
            this._o.onNext({ value: x, timestamp: this._s.now() });
          };
          TimestampObserver2.prototype.error = function(e) {
            this._o.onError(e);
          };
          TimestampObserver2.prototype.completed = function() {
            this._o.onCompleted();
          };
          return TimestampObserver2;
        }(AbstractObserver);
        observableProto.timestamp = function(scheduler) {
          isScheduler(scheduler) || (scheduler = defaultScheduler);
          return new TimestampObservable(this, scheduler);
        };
        var SampleObservable = function(__super__) {
          inherits(SampleObservable2, __super__);
          function SampleObservable2(source, sampler) {
            this.source = source;
            this._sampler = sampler;
            __super__.call(this);
          }
          SampleObservable2.prototype.subscribeCore = function(o) {
            var state = {
              o,
              atEnd: false,
              value: null,
              hasValue: false,
              sourceSubscription: new SingleAssignmentDisposable()
            };
            state.sourceSubscription.setDisposable(this.source.subscribe(new SampleSourceObserver(state)));
            return new BinaryDisposable(
              state.sourceSubscription,
              this._sampler.subscribe(new SamplerObserver(state))
            );
          };
          return SampleObservable2;
        }(ObservableBase);
        var SamplerObserver = function(__super__) {
          inherits(SamplerObserver2, __super__);
          function SamplerObserver2(s) {
            this._s = s;
            __super__.call(this);
          }
          SamplerObserver2.prototype._handleMessage = function() {
            if (this._s.hasValue) {
              this._s.hasValue = false;
              this._s.o.onNext(this._s.value);
            }
            this._s.atEnd && this._s.o.onCompleted();
          };
          SamplerObserver2.prototype.next = function() {
            this._handleMessage();
          };
          SamplerObserver2.prototype.error = function(e) {
            this._s.onError(e);
          };
          SamplerObserver2.prototype.completed = function() {
            this._handleMessage();
          };
          return SamplerObserver2;
        }(AbstractObserver);
        var SampleSourceObserver = function(__super__) {
          inherits(SampleSourceObserver2, __super__);
          function SampleSourceObserver2(s) {
            this._s = s;
            __super__.call(this);
          }
          SampleSourceObserver2.prototype.next = function(x) {
            this._s.hasValue = true;
            this._s.value = x;
          };
          SampleSourceObserver2.prototype.error = function(e) {
            this._s.o.onError(e);
          };
          SampleSourceObserver2.prototype.completed = function() {
            this._s.atEnd = true;
            this._s.sourceSubscription.dispose();
          };
          return SampleSourceObserver2;
        }(AbstractObserver);
        observableProto.sample = function(intervalOrSampler, scheduler) {
          isScheduler(scheduler) || (scheduler = defaultScheduler);
          return typeof intervalOrSampler === "number" ? new SampleObservable(this, observableinterval(intervalOrSampler, scheduler)) : new SampleObservable(this, intervalOrSampler);
        };
        var TimeoutError = Rx.TimeoutError = function(message) {
          this.message = message || "Timeout has occurred";
          this.name = "TimeoutError";
          Error.call(this);
        };
        TimeoutError.prototype = Object.create(Error.prototype);
        function timeoutWithSelector(source, firstTimeout, timeoutDurationSelector, other) {
          if (isFunction(firstTimeout)) {
            other = timeoutDurationSelector;
            timeoutDurationSelector = firstTimeout;
            firstTimeout = observableNever();
          }
          Observable.isObservable(other) || (other = observableThrow(new TimeoutError()));
          return new AnonymousObservable(function(o) {
            var subscription = new SerialDisposable(), timer = new SerialDisposable(), original = new SingleAssignmentDisposable();
            subscription.setDisposable(original);
            var id = 0, switched = false;
            function setTimer(timeout2) {
              var myId = id, d = new SingleAssignmentDisposable();
              function timerWins() {
                switched = myId === id;
                return switched;
              }
              timer.setDisposable(d);
              d.setDisposable(timeout2.subscribe(function() {
                timerWins() && subscription.setDisposable(other.subscribe(o));
                d.dispose();
              }, function(e) {
                timerWins() && o.onError(e);
              }, function() {
                timerWins() && subscription.setDisposable(other.subscribe(o));
              }));
            }
            ;
            setTimer(firstTimeout);
            function oWins() {
              var res = !switched;
              if (res) {
                id++;
              }
              return res;
            }
            original.setDisposable(source.subscribe(function(x) {
              if (oWins()) {
                o.onNext(x);
                var timeout2 = tryCatch(timeoutDurationSelector)(x);
                if (timeout2 === errorObj) {
                  return o.onError(timeout2.e);
                }
                setTimer(isPromise(timeout2) ? observableFromPromise(timeout2) : timeout2);
              }
            }, function(e) {
              oWins() && o.onError(e);
            }, function() {
              oWins() && o.onCompleted();
            }));
            return new BinaryDisposable(subscription, timer);
          }, source);
        }
        function timeout(source, dueTime, other, scheduler) {
          if (isScheduler(other)) {
            scheduler = other;
            other = observableThrow(new TimeoutError());
          }
          if (other instanceof Error) {
            other = observableThrow(other);
          }
          isScheduler(scheduler) || (scheduler = defaultScheduler);
          Observable.isObservable(other) || (other = observableThrow(new TimeoutError()));
          return new AnonymousObservable(function(o) {
            var id = 0, original = new SingleAssignmentDisposable(), subscription = new SerialDisposable(), switched = false, timer = new SerialDisposable();
            subscription.setDisposable(original);
            function createTimer() {
              var myId = id;
              timer.setDisposable(scheduler.scheduleFuture(null, dueTime, function() {
                switched = id === myId;
                if (switched) {
                  isPromise(other) && (other = observableFromPromise(other));
                  subscription.setDisposable(other.subscribe(o));
                }
              }));
            }
            createTimer();
            original.setDisposable(source.subscribe(function(x) {
              if (!switched) {
                id++;
                o.onNext(x);
                createTimer();
              }
            }, function(e) {
              if (!switched) {
                id++;
                o.onError(e);
              }
            }, function() {
              if (!switched) {
                id++;
                o.onCompleted();
              }
            }));
            return new BinaryDisposable(subscription, timer);
          }, source);
        }
        observableProto.timeout = function() {
          var firstArg = arguments[0];
          if (firstArg instanceof Date || typeof firstArg === "number") {
            return timeout(this, firstArg, arguments[1], arguments[2]);
          } else if (Observable.isObservable(firstArg) || isFunction(firstArg)) {
            return timeoutWithSelector(this, firstArg, arguments[1], arguments[2]);
          } else {
            throw new Error("Invalid arguments");
          }
        };
        observableProto.throttle = function(windowDuration, scheduler) {
          isScheduler(scheduler) || (scheduler = defaultScheduler);
          var duration = +windowDuration || 0;
          if (duration <= 0) {
            throw new RangeError("windowDuration cannot be less or equal zero.");
          }
          var source = this;
          return new AnonymousObservable(function(o) {
            var lastOnNext = 0;
            return source.subscribe(
              function(x) {
                var now = scheduler.now();
                if (lastOnNext === 0 || now - lastOnNext >= duration) {
                  lastOnNext = now;
                  o.onNext(x);
                }
              },
              function(e) {
                o.onError(e);
              },
              function() {
                o.onCompleted();
              }
            );
          }, source);
        };
        var PausableObservable = function(__super__) {
          inherits(PausableObservable2, __super__);
          function PausableObservable2(source, pauser) {
            this.source = source;
            this.controller = new Subject();
            if (pauser && pauser.subscribe) {
              this.pauser = this.controller.merge(pauser);
            } else {
              this.pauser = this.controller;
            }
            __super__.call(this);
          }
          PausableObservable2.prototype._subscribe = function(o) {
            var conn = this.source.publish(), subscription = conn.subscribe(o), connection = disposableEmpty;
            var pausable = this.pauser.distinctUntilChanged().subscribe(function(b) {
              if (b) {
                connection = conn.connect();
              } else {
                connection.dispose();
                connection = disposableEmpty;
              }
            });
            return new NAryDisposable([subscription, connection, pausable]);
          };
          PausableObservable2.prototype.pause = function() {
            this.controller.onNext(false);
          };
          PausableObservable2.prototype.resume = function() {
            this.controller.onNext(true);
          };
          return PausableObservable2;
        }(Observable);
        observableProto.pausable = function(pauser) {
          return new PausableObservable(this, pauser);
        };
        function combineLatestSource(source, subject, resultSelector) {
          return new AnonymousObservable(function(o) {
            var hasValue = [false, false], hasValueAll = false, isDone = false, values = new Array(2), err;
            function next(x, i) {
              values[i] = x;
              hasValue[i] = true;
              if (hasValueAll || (hasValueAll = hasValue.every(identity))) {
                if (err) {
                  return o.onError(err);
                }
                var res = tryCatch(resultSelector).apply(null, values);
                if (res === errorObj) {
                  return o.onError(res.e);
                }
                o.onNext(res);
              }
              isDone && values[1] && o.onCompleted();
            }
            return new BinaryDisposable(
              source.subscribe(
                function(x) {
                  next(x, 0);
                },
                function(e) {
                  if (values[1]) {
                    o.onError(e);
                  } else {
                    err = e;
                  }
                },
                function() {
                  isDone = true;
                  values[1] && o.onCompleted();
                }
              ),
              subject.subscribe(
                function(x) {
                  next(x, 1);
                },
                function(e) {
                  o.onError(e);
                },
                function() {
                  isDone = true;
                  next(true, 1);
                }
              )
            );
          }, source);
        }
        var PausableBufferedObservable = function(__super__) {
          inherits(PausableBufferedObservable2, __super__);
          function PausableBufferedObservable2(source, pauser) {
            this.source = source;
            this.controller = new Subject();
            if (pauser && pauser.subscribe) {
              this.pauser = this.controller.merge(pauser);
            } else {
              this.pauser = this.controller;
            }
            __super__.call(this);
          }
          PausableBufferedObservable2.prototype._subscribe = function(o) {
            var q = [], previousShouldFire;
            function drainQueue() {
              while (q.length > 0) {
                o.onNext(q.shift());
              }
            }
            var subscription = combineLatestSource(
              this.source,
              this.pauser.startWith(false).distinctUntilChanged(),
              function(data, shouldFire) {
                return { data, shouldFire };
              }
            ).subscribe(
              function(results) {
                if (previousShouldFire !== undefined2 && results.shouldFire !== previousShouldFire) {
                  previousShouldFire = results.shouldFire;
                  if (results.shouldFire) {
                    drainQueue();
                  }
                } else {
                  previousShouldFire = results.shouldFire;
                  if (results.shouldFire) {
                    o.onNext(results.data);
                  } else {
                    q.push(results.data);
                  }
                }
              },
              function(err) {
                drainQueue();
                o.onError(err);
              },
              function() {
                drainQueue();
                o.onCompleted();
              }
            );
            return subscription;
          };
          PausableBufferedObservable2.prototype.pause = function() {
            this.controller.onNext(false);
          };
          PausableBufferedObservable2.prototype.resume = function() {
            this.controller.onNext(true);
          };
          return PausableBufferedObservable2;
        }(Observable);
        observableProto.pausableBuffered = function(pauser) {
          return new PausableBufferedObservable(this, pauser);
        };
        var ControlledObservable = function(__super__) {
          inherits(ControlledObservable2, __super__);
          function ControlledObservable2(source, enableQueue, scheduler) {
            __super__.call(this);
            this.subject = new ControlledSubject(enableQueue, scheduler);
            this.source = source.multicast(this.subject).refCount();
          }
          ControlledObservable2.prototype._subscribe = function(o) {
            return this.source.subscribe(o);
          };
          ControlledObservable2.prototype.request = function(numberOfItems) {
            return this.subject.request(numberOfItems == null ? -1 : numberOfItems);
          };
          return ControlledObservable2;
        }(Observable);
        var ControlledSubject = function(__super__) {
          inherits(ControlledSubject2, __super__);
          function ControlledSubject2(enableQueue, scheduler) {
            enableQueue == null && (enableQueue = true);
            __super__.call(this);
            this.subject = new Subject();
            this.enableQueue = enableQueue;
            this.queue = enableQueue ? [] : null;
            this.requestedCount = 0;
            this.requestedDisposable = null;
            this.error = null;
            this.hasFailed = false;
            this.hasCompleted = false;
            this.scheduler = scheduler || currentThreadScheduler;
          }
          addProperties(ControlledSubject2.prototype, Observer, {
            _subscribe: function(o) {
              return this.subject.subscribe(o);
            },
            onCompleted: function() {
              this.hasCompleted = true;
              if (!this.enableQueue || this.queue.length === 0) {
                this.subject.onCompleted();
                this.disposeCurrentRequest();
              } else {
                this.queue.push(Notification.createOnCompleted());
              }
            },
            onError: function(error) {
              this.hasFailed = true;
              this.error = error;
              if (!this.enableQueue || this.queue.length === 0) {
                this.subject.onError(error);
                this.disposeCurrentRequest();
              } else {
                this.queue.push(Notification.createOnError(error));
              }
            },
            onNext: function(value) {
              if (this.requestedCount <= 0) {
                this.enableQueue && this.queue.push(Notification.createOnNext(value));
              } else {
                this.requestedCount-- === 0 && this.disposeCurrentRequest();
                this.subject.onNext(value);
              }
            },
            _processRequest: function(numberOfItems) {
              if (this.enableQueue) {
                while (this.queue.length > 0 && (numberOfItems > 0 || this.queue[0].kind !== "N")) {
                  var first = this.queue.shift();
                  first.accept(this.subject);
                  if (first.kind === "N") {
                    numberOfItems--;
                  } else {
                    this.disposeCurrentRequest();
                    this.queue = [];
                  }
                }
              }
              return numberOfItems;
            },
            request: function(number) {
              this.disposeCurrentRequest();
              var self2 = this;
              this.requestedDisposable = this.scheduler.schedule(
                number,
                function(s, i) {
                  var remaining = self2._processRequest(i);
                  var stopped = self2.hasCompleted || self2.hasFailed;
                  if (!stopped && remaining > 0) {
                    self2.requestedCount = remaining;
                    return disposableCreate(function() {
                      self2.requestedCount = 0;
                    });
                  }
                }
              );
              return this.requestedDisposable;
            },
            disposeCurrentRequest: function() {
              if (this.requestedDisposable) {
                this.requestedDisposable.dispose();
                this.requestedDisposable = null;
              }
            }
          });
          return ControlledSubject2;
        }(Observable);
        observableProto.controlled = function(enableQueue, scheduler) {
          if (enableQueue && isScheduler(enableQueue)) {
            scheduler = enableQueue;
            enableQueue = true;
          }
          if (enableQueue == null) {
            enableQueue = true;
          }
          return new ControlledObservable(this, enableQueue, scheduler);
        };
        observableProto.pipe = function(dest) {
          var source = this.pausableBuffered();
          function onDrain() {
            source.resume();
          }
          dest.addListener("drain", onDrain);
          source.subscribe(
            function(x) {
              !dest.write(String(x)) && source.pause();
            },
            function(err) {
              dest.emit("error", err);
            },
            function() {
              !dest._isStdio && dest.end();
              dest.removeListener("drain", onDrain);
            }
          );
          source.resume();
          return dest;
        };
        var TransduceObserver = function(__super__) {
          inherits(TransduceObserver2, __super__);
          function TransduceObserver2(o, xform) {
            this._o = o;
            this._xform = xform;
            __super__.call(this);
          }
          TransduceObserver2.prototype.next = function(x) {
            var res = tryCatch(this._xform["@@transducer/step"]).call(this._xform, this._o, x);
            if (res === errorObj) {
              this._o.onError(res.e);
            }
          };
          TransduceObserver2.prototype.error = function(e) {
            this._o.onError(e);
          };
          TransduceObserver2.prototype.completed = function() {
            this._xform["@@transducer/result"](this._o);
          };
          return TransduceObserver2;
        }(AbstractObserver);
        function transformForObserver(o) {
          return {
            "@@transducer/init": function() {
              return o;
            },
            "@@transducer/step": function(obs, input) {
              return obs.onNext(input);
            },
            "@@transducer/result": function(obs) {
              return obs.onCompleted();
            }
          };
        }
        observableProto.transduce = function(transducer) {
          var source = this;
          return new AnonymousObservable(function(o) {
            var xform = transducer(transformForObserver(o));
            return source.subscribe(new TransduceObserver(o, xform));
          }, source);
        };
        var AnonymousObservable = Rx.AnonymousObservable = function(__super__) {
          inherits(AnonymousObservable2, __super__);
          function fixSubscriber(subscriber) {
            return subscriber && isFunction(subscriber.dispose) ? subscriber : isFunction(subscriber) ? disposableCreate(subscriber) : disposableEmpty;
          }
          function setDisposable(s, state) {
            var ado = state[0], self2 = state[1];
            var sub = tryCatch(self2.__subscribe).call(self2, ado);
            if (sub === errorObj && !ado.fail(errorObj.e)) {
              thrower(errorObj.e);
            }
            ado.setDisposable(fixSubscriber(sub));
          }
          function AnonymousObservable2(subscribe, parent) {
            this.source = parent;
            this.__subscribe = subscribe;
            __super__.call(this);
          }
          AnonymousObservable2.prototype._subscribe = function(o) {
            var ado = new AutoDetachObserver(o), state = [ado, this];
            if (currentThreadScheduler.scheduleRequired()) {
              currentThreadScheduler.schedule(state, setDisposable);
            } else {
              setDisposable(null, state);
            }
            return ado;
          };
          return AnonymousObservable2;
        }(Observable);
        var AutoDetachObserver = function(__super__) {
          inherits(AutoDetachObserver2, __super__);
          function AutoDetachObserver2(observer) {
            __super__.call(this);
            this.observer = observer;
            this.m = new SingleAssignmentDisposable();
          }
          var AutoDetachObserverPrototype = AutoDetachObserver2.prototype;
          AutoDetachObserverPrototype.next = function(value) {
            var result = tryCatch(this.observer.onNext).call(this.observer, value);
            if (result === errorObj) {
              this.dispose();
              thrower(result.e);
            }
          };
          AutoDetachObserverPrototype.error = function(err) {
            var result = tryCatch(this.observer.onError).call(this.observer, err);
            this.dispose();
            result === errorObj && thrower(result.e);
          };
          AutoDetachObserverPrototype.completed = function() {
            var result = tryCatch(this.observer.onCompleted).call(this.observer);
            this.dispose();
            result === errorObj && thrower(result.e);
          };
          AutoDetachObserverPrototype.setDisposable = function(value) {
            this.m.setDisposable(value);
          };
          AutoDetachObserverPrototype.getDisposable = function() {
            return this.m.getDisposable();
          };
          AutoDetachObserverPrototype.dispose = function() {
            __super__.prototype.dispose.call(this);
            this.m.dispose();
          };
          return AutoDetachObserver2;
        }(AbstractObserver);
        var InnerSubscription = function(s, o) {
          this._s = s;
          this._o = o;
        };
        InnerSubscription.prototype.dispose = function() {
          if (!this._s.isDisposed && this._o !== null) {
            var idx = this._s.observers.indexOf(this._o);
            this._s.observers.splice(idx, 1);
            this._o = null;
          }
        };
        var Subject = Rx.Subject = function(__super__) {
          inherits(Subject2, __super__);
          function Subject2() {
            __super__.call(this);
            this.isDisposed = false;
            this.isStopped = false;
            this.observers = [];
            this.hasError = false;
          }
          addProperties(Subject2.prototype, Observer.prototype, {
            _subscribe: function(o) {
              checkDisposed(this);
              if (!this.isStopped) {
                this.observers.push(o);
                return new InnerSubscription(this, o);
              }
              if (this.hasError) {
                o.onError(this.error);
                return disposableEmpty;
              }
              o.onCompleted();
              return disposableEmpty;
            },
            hasObservers: function() {
              checkDisposed(this);
              return this.observers.length > 0;
            },
            onCompleted: function() {
              checkDisposed(this);
              if (!this.isStopped) {
                this.isStopped = true;
                for (var i = 0, os = cloneArray(this.observers), len = os.length; i < len; i++) {
                  os[i].onCompleted();
                }
                this.observers.length = 0;
              }
            },
            onError: function(error) {
              checkDisposed(this);
              if (!this.isStopped) {
                this.isStopped = true;
                this.error = error;
                this.hasError = true;
                for (var i = 0, os = cloneArray(this.observers), len = os.length; i < len; i++) {
                  os[i].onError(error);
                }
                this.observers.length = 0;
              }
            },
            onNext: function(value) {
              checkDisposed(this);
              if (!this.isStopped) {
                for (var i = 0, os = cloneArray(this.observers), len = os.length; i < len; i++) {
                  os[i].onNext(value);
                }
              }
            },
            dispose: function() {
              this.isDisposed = true;
              this.observers = null;
            }
          });
          Subject2.create = function(observer, observable) {
            return new AnonymousSubject(observer, observable);
          };
          return Subject2;
        }(Observable);
        var AsyncSubject = Rx.AsyncSubject = function(__super__) {
          inherits(AsyncSubject2, __super__);
          function AsyncSubject2() {
            __super__.call(this);
            this.isDisposed = false;
            this.isStopped = false;
            this.hasValue = false;
            this.observers = [];
            this.hasError = false;
          }
          addProperties(AsyncSubject2.prototype, Observer.prototype, {
            _subscribe: function(o) {
              checkDisposed(this);
              if (!this.isStopped) {
                this.observers.push(o);
                return new InnerSubscription(this, o);
              }
              if (this.hasError) {
                o.onError(this.error);
              } else if (this.hasValue) {
                o.onNext(this.value);
                o.onCompleted();
              } else {
                o.onCompleted();
              }
              return disposableEmpty;
            },
            hasObservers: function() {
              checkDisposed(this);
              return this.observers.length > 0;
            },
            onCompleted: function() {
              var i, len;
              checkDisposed(this);
              if (!this.isStopped) {
                this.isStopped = true;
                var os = cloneArray(this.observers), len = os.length;
                if (this.hasValue) {
                  for (i = 0; i < len; i++) {
                    var o = os[i];
                    o.onNext(this.value);
                    o.onCompleted();
                  }
                } else {
                  for (i = 0; i < len; i++) {
                    os[i].onCompleted();
                  }
                }
                this.observers.length = 0;
              }
            },
            onError: function(error) {
              checkDisposed(this);
              if (!this.isStopped) {
                this.isStopped = true;
                this.hasError = true;
                this.error = error;
                for (var i = 0, os = cloneArray(this.observers), len = os.length; i < len; i++) {
                  os[i].onError(error);
                }
                this.observers.length = 0;
              }
            },
            onNext: function(value) {
              checkDisposed(this);
              if (this.isStopped) {
                return;
              }
              this.value = value;
              this.hasValue = true;
            },
            dispose: function() {
              this.isDisposed = true;
              this.observers = null;
              this.error = null;
              this.value = null;
            }
          });
          return AsyncSubject2;
        }(Observable);
        var AnonymousSubject = Rx.AnonymousSubject = function(__super__) {
          inherits(AnonymousSubject2, __super__);
          function AnonymousSubject2(observer, observable) {
            this.observer = observer;
            this.observable = observable;
            __super__.call(this);
          }
          addProperties(AnonymousSubject2.prototype, Observer.prototype, {
            _subscribe: function(o) {
              return this.observable.subscribe(o);
            },
            onCompleted: function() {
              this.observer.onCompleted();
            },
            onError: function(error) {
              this.observer.onError(error);
            },
            onNext: function(value) {
              this.observer.onNext(value);
            }
          });
          return AnonymousSubject2;
        }(Observable);
        var BehaviorSubject = Rx.BehaviorSubject = function(__super__) {
          inherits(BehaviorSubject2, __super__);
          function BehaviorSubject2(value) {
            __super__.call(this);
            this.value = value;
            this.observers = [];
            this.isDisposed = false;
            this.isStopped = false;
            this.hasError = false;
          }
          addProperties(BehaviorSubject2.prototype, Observer.prototype, {
            _subscribe: function(o) {
              checkDisposed(this);
              if (!this.isStopped) {
                this.observers.push(o);
                o.onNext(this.value);
                return new InnerSubscription(this, o);
              }
              if (this.hasError) {
                o.onError(this.error);
              } else {
                o.onCompleted();
              }
              return disposableEmpty;
            },
            getValue: function() {
              checkDisposed(this);
              if (this.hasError) {
                thrower(this.error);
              }
              return this.value;
            },
            hasObservers: function() {
              checkDisposed(this);
              return this.observers.length > 0;
            },
            onCompleted: function() {
              checkDisposed(this);
              if (this.isStopped) {
                return;
              }
              this.isStopped = true;
              for (var i = 0, os = cloneArray(this.observers), len = os.length; i < len; i++) {
                os[i].onCompleted();
              }
              this.observers.length = 0;
            },
            onError: function(error) {
              checkDisposed(this);
              if (this.isStopped) {
                return;
              }
              this.isStopped = true;
              this.hasError = true;
              this.error = error;
              for (var i = 0, os = cloneArray(this.observers), len = os.length; i < len; i++) {
                os[i].onError(error);
              }
              this.observers.length = 0;
            },
            onNext: function(value) {
              checkDisposed(this);
              if (this.isStopped) {
                return;
              }
              this.value = value;
              for (var i = 0, os = cloneArray(this.observers), len = os.length; i < len; i++) {
                os[i].onNext(value);
              }
            },
            dispose: function() {
              this.isDisposed = true;
              this.observers = null;
              this.value = null;
              this.error = null;
            }
          });
          return BehaviorSubject2;
        }(Observable);
        var ReplaySubject = Rx.ReplaySubject = function(__super__) {
          var maxSafeInteger2 = Math.pow(2, 53) - 1;
          function createRemovableDisposable(subject, observer) {
            return disposableCreate(function() {
              observer.dispose();
              !subject.isDisposed && subject.observers.splice(subject.observers.indexOf(observer), 1);
            });
          }
          inherits(ReplaySubject2, __super__);
          function ReplaySubject2(bufferSize, windowSize, scheduler) {
            this.bufferSize = bufferSize == null ? maxSafeInteger2 : bufferSize;
            this.windowSize = windowSize == null ? maxSafeInteger2 : windowSize;
            this.scheduler = scheduler || currentThreadScheduler;
            this.q = [];
            this.observers = [];
            this.isStopped = false;
            this.isDisposed = false;
            this.hasError = false;
            this.error = null;
            __super__.call(this);
          }
          addProperties(ReplaySubject2.prototype, Observer.prototype, {
            _subscribe: function(o) {
              checkDisposed(this);
              var so = new ScheduledObserver(this.scheduler, o), subscription = createRemovableDisposable(this, so);
              this._trim(this.scheduler.now());
              this.observers.push(so);
              for (var i = 0, len = this.q.length; i < len; i++) {
                so.onNext(this.q[i].value);
              }
              if (this.hasError) {
                so.onError(this.error);
              } else if (this.isStopped) {
                so.onCompleted();
              }
              so.ensureActive();
              return subscription;
            },
            hasObservers: function() {
              checkDisposed(this);
              return this.observers.length > 0;
            },
            _trim: function(now) {
              while (this.q.length > this.bufferSize) {
                this.q.shift();
              }
              while (this.q.length > 0 && now - this.q[0].interval > this.windowSize) {
                this.q.shift();
              }
            },
            onNext: function(value) {
              checkDisposed(this);
              if (this.isStopped) {
                return;
              }
              var now = this.scheduler.now();
              this.q.push({ interval: now, value });
              this._trim(now);
              for (var i = 0, os = cloneArray(this.observers), len = os.length; i < len; i++) {
                var observer = os[i];
                observer.onNext(value);
                observer.ensureActive();
              }
            },
            onError: function(error) {
              checkDisposed(this);
              if (this.isStopped) {
                return;
              }
              this.isStopped = true;
              this.error = error;
              this.hasError = true;
              var now = this.scheduler.now();
              this._trim(now);
              for (var i = 0, os = cloneArray(this.observers), len = os.length; i < len; i++) {
                var observer = os[i];
                observer.onError(error);
                observer.ensureActive();
              }
              this.observers.length = 0;
            },
            onCompleted: function() {
              checkDisposed(this);
              if (this.isStopped) {
                return;
              }
              this.isStopped = true;
              var now = this.scheduler.now();
              this._trim(now);
              for (var i = 0, os = cloneArray(this.observers), len = os.length; i < len; i++) {
                var observer = os[i];
                observer.onCompleted();
                observer.ensureActive();
              }
              this.observers.length = 0;
            },
            dispose: function() {
              this.isDisposed = true;
              this.observers = null;
            }
          });
          return ReplaySubject2;
        }(Observable);
        Rx.Pauser = function(__super__) {
          inherits(Pauser, __super__);
          function Pauser() {
            __super__.call(this);
          }
          Pauser.prototype.pause = function() {
            this.onNext(false);
          };
          Pauser.prototype.resume = function() {
            this.onNext(true);
          };
          return Pauser;
        }(Subject);
        if (typeof define == "function" && typeof define.amd == "object" && define.amd) {
          root.Rx = Rx;
          define(function() {
            return Rx;
          });
        } else if (freeExports && freeModule) {
          if (moduleExports) {
            (freeModule.exports = Rx).Rx = Rx;
          } else {
            freeExports.Rx = Rx;
          }
        } else {
          root.Rx = Rx;
        }
        var rEndingLine = captureLine();
      }).call(exports);
    }
  });

  // ../001.time/dist/001.time/99.core/state.js
  var require_state = __commonJS({
    "../001.time/dist/001.time/99.core/state.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var rx_lite_1 = require_rx_lite();
      var rx_lite_2 = require_rx_lite();
      var BEE_1 = require_BEE();
      var Effect = require_BEE();
      var State = class extends rx_lite_1.BehaviorSubject {
        constructor(init = new BEE_1.default()) {
          super(init);
          this.dispatcher = new rx_lite_2.Subject();
          this.dispatcher.scan((state, action) => this.reducedApp(state, action), init).subscribe((state) => {
            super.onNext(state);
          });
        }
        reducedApp(nextState, key) {
          for (var k in Effect.reducer)
            Effect.reducer[k](nextState[k], key, this);
          return nextState;
        }
        dispatch(value) {
          var result = this.dispatcher.onNext(value);
          return result;
        }
        pat(value) {
          this.dispatch(value);
        }
        next(value) {
          this.dispatcher.onNext(value);
        }
      };
      exports.default = State;
    }
  });

  // ../001.time/dist/001.time/00.time.unit/time.unit.js
  var require_time_unit = __commonJS({
    "../001.time/dist/001.time/00.time.unit/time.unit.js"(exports) {
      "use strict";
      var __decorate = exports && exports.__decorate || function(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
              r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      var __metadata = exports && exports.__metadata || function(k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
          return Reflect.metadata(k, v);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var typescript_ioc_1 = require_typescript_ioc();
      var state_1 = require_state();
      var TimeUnit = class TimeUnit {
        constructor(state) {
        }
      };
      TimeUnit = __decorate([
        typescript_ioc_1.Singleton,
        __metadata("design:paramtypes", [state_1.default])
      ], TimeUnit);
      exports.default = TimeUnit;
    }
  });

  // ../001.time/dist/001.time/97.collect.unit/collect.unit.js
  var require_collect_unit = __commonJS({
    "../001.time/dist/001.time/97.collect.unit/collect.unit.js"(exports) {
      "use strict";
      var __decorate = exports && exports.__decorate || function(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
              r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      var __metadata = exports && exports.__metadata || function(k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
          return Reflect.metadata(k, v);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var typescript_ioc_1 = require_typescript_ioc();
      var state_1 = require_state();
      var CollectUnit = class CollectUnit {
        constructor(state) {
        }
      };
      CollectUnit = __decorate([
        typescript_ioc_1.Singleton,
        __metadata("design:paramtypes", [state_1.default])
      ], CollectUnit);
      exports.default = CollectUnit;
    }
  });

  // ../001.time/dist/001.time/98.menu.unit/menu.unit.js
  var require_menu_unit = __commonJS({
    "../001.time/dist/001.time/98.menu.unit/menu.unit.js"(exports) {
      "use strict";
      var __decorate = exports && exports.__decorate || function(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
              r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      var __metadata = exports && exports.__metadata || function(k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
          return Reflect.metadata(k, v);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var typescript_ioc_1 = require_typescript_ioc();
      var state_1 = require_state();
      var MenuUnit = class MenuUnit {
        constructor(state) {
        }
      };
      MenuUnit = __decorate([
        typescript_ioc_1.Singleton,
        __metadata("design:paramtypes", [state_1.default])
      ], MenuUnit);
      exports.default = MenuUnit;
    }
  });

  // ../001.time/dist/001.time/99.bus.unit/bus.unit.js
  var require_bus_unit = __commonJS({
    "../001.time/dist/001.time/99.bus.unit/bus.unit.js"(exports) {
      "use strict";
      var __decorate = exports && exports.__decorate || function(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
              r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      var __metadata = exports && exports.__metadata || function(k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
          return Reflect.metadata(k, v);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var typescript_ioc_1 = require_typescript_ioc();
      var state_1 = require_state();
      var BusUnit = class BusUnit {
        constructor(state) {
        }
      };
      BusUnit = __decorate([
        typescript_ioc_1.Singleton,
        __metadata("design:paramtypes", [state_1.default])
      ], BusUnit);
      exports.default = BusUnit;
    }
  });

  // ../001.time/dist/001.time/00.time.unit/time.model.js
  var require_time_model = __commonJS({
    "../001.time/dist/001.time/00.time.unit/time.model.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.TimeModel = void 0;
      var TimeModel = class {
        constructor() {
          this.idx = "001.time";
        }
      };
      exports.TimeModel = TimeModel;
    }
  });

  // ../001.time/dist/001.time/97.collect.unit/collect.model.js
  var require_collect_model = __commonJS({
    "../001.time/dist/001.time/97.collect.unit/collect.model.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.CollectModel = void 0;
      var CollectModel = class {
        constructor() {
          this.caboodleBitList = [];
          this.caboodleBits = {};
        }
      };
      exports.CollectModel = CollectModel;
    }
  });

  // ../001.time/dist/001.time/98.menu.unit/menu.model.js
  var require_menu_model = __commonJS({
    "../001.time/dist/001.time/98.menu.unit/menu.model.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.MenuModel = void 0;
      var MenuModel = class {
        constructor() {
          this.lst = [];
        }
      };
      exports.MenuModel = MenuModel;
    }
  });

  // ../001.time/dist/001.time/99.bus.unit/bus.model.js
  var require_bus_model = __commonJS({
    "../001.time/dist/001.time/99.bus.unit/bus.model.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.BusModel = void 0;
      var BusModel = class {
        constructor() {
          this.host = "mqtt://localhost:1883";
          this.responseSuffix = "-response";
          this.promises = {};
        }
      };
      exports.BusModel = BusModel;
    }
  });

  // ../../node_modules/.pnpm/kind-of@6.0.3/node_modules/kind-of/index.js
  var require_kind_of = __commonJS({
    "../../node_modules/.pnpm/kind-of@6.0.3/node_modules/kind-of/index.js"(exports, module) {
      var toString2 = Object.prototype.toString;
      module.exports = function kindOf(val) {
        if (val === void 0)
          return "undefined";
        if (val === null)
          return "null";
        var type = typeof val;
        if (type === "boolean")
          return "boolean";
        if (type === "string")
          return "string";
        if (type === "number")
          return "number";
        if (type === "symbol")
          return "symbol";
        if (type === "function") {
          return isGeneratorFn(val) ? "generatorfunction" : "function";
        }
        if (isArray(val))
          return "array";
        if (isBuffer(val))
          return "buffer";
        if (isArguments(val))
          return "arguments";
        if (isDate(val))
          return "date";
        if (isError(val))
          return "error";
        if (isRegexp(val))
          return "regexp";
        switch (ctorName(val)) {
          case "Symbol":
            return "symbol";
          case "Promise":
            return "promise";
          case "WeakMap":
            return "weakmap";
          case "WeakSet":
            return "weakset";
          case "Map":
            return "map";
          case "Set":
            return "set";
          case "Int8Array":
            return "int8array";
          case "Uint8Array":
            return "uint8array";
          case "Uint8ClampedArray":
            return "uint8clampedarray";
          case "Int16Array":
            return "int16array";
          case "Uint16Array":
            return "uint16array";
          case "Int32Array":
            return "int32array";
          case "Uint32Array":
            return "uint32array";
          case "Float32Array":
            return "float32array";
          case "Float64Array":
            return "float64array";
        }
        if (isGeneratorObj(val)) {
          return "generator";
        }
        type = toString2.call(val);
        switch (type) {
          case "[object Object]":
            return "object";
          case "[object Map Iterator]":
            return "mapiterator";
          case "[object Set Iterator]":
            return "setiterator";
          case "[object String Iterator]":
            return "stringiterator";
          case "[object Array Iterator]":
            return "arrayiterator";
        }
        return type.slice(8, -1).toLowerCase().replace(/\s/g, "");
      };
      function ctorName(val) {
        return typeof val.constructor === "function" ? val.constructor.name : null;
      }
      function isArray(val) {
        if (Array.isArray)
          return Array.isArray(val);
        return val instanceof Array;
      }
      function isError(val) {
        return val instanceof Error || typeof val.message === "string" && val.constructor && typeof val.constructor.stackTraceLimit === "number";
      }
      function isDate(val) {
        if (val instanceof Date)
          return true;
        return typeof val.toDateString === "function" && typeof val.getDate === "function" && typeof val.setDate === "function";
      }
      function isRegexp(val) {
        if (val instanceof RegExp)
          return true;
        return typeof val.flags === "string" && typeof val.ignoreCase === "boolean" && typeof val.multiline === "boolean" && typeof val.global === "boolean";
      }
      function isGeneratorFn(name, val) {
        return ctorName(name) === "GeneratorFunction";
      }
      function isGeneratorObj(val) {
        return typeof val.throw === "function" && typeof val.return === "function" && typeof val.next === "function";
      }
      function isArguments(val) {
        try {
          if (typeof val.length === "number" && typeof val.callee === "function") {
            return true;
          }
        } catch (err) {
          if (err.message.indexOf("callee") !== -1) {
            return true;
          }
        }
        return false;
      }
      function isBuffer(val) {
        if (val.constructor && typeof val.constructor.isBuffer === "function") {
          return val.constructor.isBuffer(val);
        }
        return false;
      }
    }
  });

  // ../../node_modules/.pnpm/shallow-clone@3.0.1/node_modules/shallow-clone/index.js
  var require_shallow_clone = __commonJS({
    "../../node_modules/.pnpm/shallow-clone@3.0.1/node_modules/shallow-clone/index.js"(exports, module) {
      "use strict";
      var valueOf = Symbol.prototype.valueOf;
      var typeOf = require_kind_of();
      function clone(val, deep) {
        switch (typeOf(val)) {
          case "array":
            return val.slice();
          case "object":
            return Object.assign({}, val);
          case "date":
            return new val.constructor(Number(val));
          case "map":
            return new Map(val);
          case "set":
            return new Set(val);
          case "buffer":
            return cloneBuffer(val);
          case "symbol":
            return cloneSymbol(val);
          case "arraybuffer":
            return cloneArrayBuffer(val);
          case "float32array":
          case "float64array":
          case "int16array":
          case "int32array":
          case "int8array":
          case "uint16array":
          case "uint32array":
          case "uint8clampedarray":
          case "uint8array":
            return cloneTypedArray(val);
          case "regexp":
            return cloneRegExp(val);
          case "error":
            return Object.create(val);
          default: {
            return val;
          }
        }
      }
      function cloneRegExp(val) {
        const flags = val.flags !== void 0 ? val.flags : /\w+$/.exec(val) || void 0;
        const re = new val.constructor(val.source, flags);
        re.lastIndex = val.lastIndex;
        return re;
      }
      function cloneArrayBuffer(val) {
        const res = new val.constructor(val.byteLength);
        new Uint8Array(res).set(new Uint8Array(val));
        return res;
      }
      function cloneTypedArray(val, deep) {
        return new val.constructor(val.buffer, val.byteOffset, val.length);
      }
      function cloneBuffer(val) {
        const len = val.length;
        const buf = Buffer.allocUnsafe ? Buffer.allocUnsafe(len) : Buffer.from(len);
        val.copy(buf);
        return buf;
      }
      function cloneSymbol(val) {
        return valueOf ? Object(valueOf.call(val)) : {};
      }
      module.exports = clone;
    }
  });

  // ../../node_modules/.pnpm/isobject@3.0.1/node_modules/isobject/index.js
  var require_isobject = __commonJS({
    "../../node_modules/.pnpm/isobject@3.0.1/node_modules/isobject/index.js"(exports, module) {
      "use strict";
      module.exports = function isObject(val) {
        return val != null && typeof val === "object" && Array.isArray(val) === false;
      };
    }
  });

  // ../../node_modules/.pnpm/is-plain-object@2.0.4/node_modules/is-plain-object/index.js
  var require_is_plain_object = __commonJS({
    "../../node_modules/.pnpm/is-plain-object@2.0.4/node_modules/is-plain-object/index.js"(exports, module) {
      "use strict";
      var isObject = require_isobject();
      function isObjectObject(o) {
        return isObject(o) === true && Object.prototype.toString.call(o) === "[object Object]";
      }
      module.exports = function isPlainObject(o) {
        var ctor, prot;
        if (isObjectObject(o) === false)
          return false;
        ctor = o.constructor;
        if (typeof ctor !== "function")
          return false;
        prot = ctor.prototype;
        if (isObjectObject(prot) === false)
          return false;
        if (prot.hasOwnProperty("isPrototypeOf") === false) {
          return false;
        }
        return true;
      };
    }
  });

  // ../../node_modules/.pnpm/clone-deep@4.0.1/node_modules/clone-deep/index.js
  var require_clone_deep = __commonJS({
    "../../node_modules/.pnpm/clone-deep@4.0.1/node_modules/clone-deep/index.js"(exports, module) {
      "use strict";
      var clone = require_shallow_clone();
      var typeOf = require_kind_of();
      var isPlainObject = require_is_plain_object();
      function cloneDeep(val, instanceClone) {
        switch (typeOf(val)) {
          case "object":
            return cloneObjectDeep(val, instanceClone);
          case "array":
            return cloneArrayDeep(val, instanceClone);
          default: {
            return clone(val);
          }
        }
      }
      function cloneObjectDeep(val, instanceClone) {
        if (typeof instanceClone === "function") {
          return instanceClone(val);
        }
        if (instanceClone || isPlainObject(val)) {
          const res = new val.constructor();
          for (let key in val) {
            res[key] = cloneDeep(val[key], instanceClone);
          }
          return res;
        }
        return val;
      }
      function cloneArrayDeep(val, instanceClone) {
        const res = new val.constructor(val.length);
        for (let i = 0; i < val.length; i++) {
          res[i] = cloneDeep(val[i], instanceClone);
        }
        return res;
      }
      module.exports = cloneDeep;
    }
  });

  // ../001.time/dist/001.time/00.time.unit/time.action.js
  var require_time_action = __commonJS({
    "../001.time/dist/001.time/00.time.unit/time.action.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.PushTime = exports.PUSH_TIME = exports.ReduceTime = exports.REDUCE_TIME = exports.CompareTime = exports.COMPARE_TIME = exports.CreateTime = exports.CREATE_TIME = exports.ReadTime = exports.READ_TIME = exports.WriteTime = exports.WRITE_TIME = exports.NowTime = exports.NOW_TIME = exports.FormatTime = exports.FORMAT_TIME = exports.UpdateTime = exports.UPDATE_TIME = exports.InitTime = exports.INIT_TIME = void 0;
      exports.INIT_TIME = "[Time action] Init Time";
      var InitTime = class {
        constructor(bale) {
          this.bale = bale;
          this.type = exports.INIT_TIME;
        }
      };
      exports.InitTime = InitTime;
      exports.UPDATE_TIME = "[Time action] Update Time";
      var UpdateTime = class {
        constructor(bale) {
          this.bale = bale;
          this.type = exports.UPDATE_TIME;
        }
      };
      exports.UpdateTime = UpdateTime;
      exports.FORMAT_TIME = "[Format action] Format Time";
      var FormatTime = class {
        constructor(bale) {
          this.bale = bale;
          this.type = exports.FORMAT_TIME;
        }
      };
      exports.FormatTime = FormatTime;
      exports.NOW_TIME = "[Now action] Now Time";
      var NowTime = class {
        constructor(bale) {
          this.bale = bale;
          this.type = exports.NOW_TIME;
        }
      };
      exports.NowTime = NowTime;
      exports.WRITE_TIME = "[Write action] Write Time";
      var WriteTime = class {
        constructor(bale) {
          this.bale = bale;
          this.type = exports.WRITE_TIME;
        }
      };
      exports.WriteTime = WriteTime;
      exports.READ_TIME = "[Read action] Read Time";
      var ReadTime = class {
        constructor(bale) {
          this.bale = bale;
          this.type = exports.READ_TIME;
        }
      };
      exports.ReadTime = ReadTime;
      exports.CREATE_TIME = "[Create action] Create Time";
      var CreateTime = class {
        constructor(bale) {
          this.bale = bale;
          this.type = exports.CREATE_TIME;
        }
      };
      exports.CreateTime = CreateTime;
      exports.COMPARE_TIME = "[Compare action] Compare Time";
      var CompareTime = class {
        constructor(bale) {
          this.bale = bale;
          this.type = exports.COMPARE_TIME;
        }
      };
      exports.CompareTime = CompareTime;
      exports.REDUCE_TIME = "[Reduce action] Reduce Time";
      var ReduceTime = class {
        constructor(bale) {
          this.bale = bale;
          this.type = exports.REDUCE_TIME;
        }
      };
      exports.ReduceTime = ReduceTime;
      exports.PUSH_TIME = "[Progress action] Push Time";
      var PushTime = class {
        constructor(bale) {
          this.bale = bale;
          this.type = exports.PUSH_TIME;
        }
      };
      exports.PushTime = PushTime;
    }
  });

  // ../001.time/dist/001.time/98.menu.unit/menu.action.js
  var require_menu_action = __commonJS({
    "../001.time/dist/001.time/98.menu.unit/menu.action.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.TimeMenu = exports.TIME_MENU = exports.CloseMenu = exports.CLOSE_MENU = exports.TestMenu = exports.TEST_MENU = exports.UpdateMenu = exports.UPDATE_MENU = exports.InitMenu = exports.INIT_MENU = void 0;
      exports.INIT_MENU = "[Menu action] Init Menu";
      var InitMenu = class {
        constructor(bale) {
          this.bale = bale;
          this.type = exports.INIT_MENU;
        }
      };
      exports.InitMenu = InitMenu;
      exports.UPDATE_MENU = "[Menu action] Update Menu";
      var UpdateMenu = class {
        constructor(bale) {
          this.bale = bale;
          this.type = exports.UPDATE_MENU;
        }
      };
      exports.UpdateMenu = UpdateMenu;
      exports.TEST_MENU = "[Menu action] Test Menu";
      var TestMenu = class {
        constructor(bale) {
          this.bale = bale;
          this.type = exports.TEST_MENU;
        }
      };
      exports.TestMenu = TestMenu;
      exports.CLOSE_MENU = "[Menu action] Close Menu";
      var CloseMenu = class {
        constructor(bale) {
          this.bale = bale;
          this.type = exports.CLOSE_MENU;
        }
      };
      exports.CloseMenu = CloseMenu;
      exports.TIME_MENU = "[Time action] Time Menu";
      var TimeMenu = class {
        constructor(bale) {
          this.bale = bale;
          this.type = exports.TIME_MENU;
        }
      };
      exports.TimeMenu = TimeMenu;
    }
  });

  // ../001.time/dist/001.time/97.collect.unit/collect.action.js
  var require_collect_action = __commonJS({
    "../001.time/dist/001.time/97.collect.unit/collect.action.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.EmptyCollect = exports.EMPTY_COLLECT = exports.DeleteCollect = exports.DELETE_COLLECT = exports.RemoveCollect = exports.REMOVE_COLLECT = exports.CreateCollect = exports.CREATE_COLLECT = exports.WriteCollect = exports.WRITE_COLLECT = exports.ReadCollect = exports.READ_COLLECT = exports.FetchCollect = exports.FETCH_COLLECT = exports.UpdateCollect = exports.UPDATE_COLLECT = exports.InitCollect = exports.INIT_COLLECT = void 0;
      exports.INIT_COLLECT = "[Collect action] Init Collect";
      var InitCollect = class {
        constructor(bale) {
          this.bale = bale;
          this.type = exports.INIT_COLLECT;
        }
      };
      exports.InitCollect = InitCollect;
      exports.UPDATE_COLLECT = "[Collect action] Update Collect";
      var UpdateCollect = class {
        constructor(bale) {
          this.bale = bale;
          this.type = exports.UPDATE_COLLECT;
        }
      };
      exports.UpdateCollect = UpdateCollect;
      exports.FETCH_COLLECT = "[Collect action] Fetch Collect";
      var FetchCollect = class {
        constructor(bale) {
          this.bale = bale;
          this.type = exports.FETCH_COLLECT;
        }
      };
      exports.FetchCollect = FetchCollect;
      exports.READ_COLLECT = "[Read action] Read Collect";
      var ReadCollect = class {
        constructor(bale) {
          this.bale = bale;
          this.type = exports.READ_COLLECT;
        }
      };
      exports.ReadCollect = ReadCollect;
      exports.WRITE_COLLECT = "[Write action] Write Collect";
      var WriteCollect = class {
        constructor(bale) {
          this.bale = bale;
          this.type = exports.WRITE_COLLECT;
        }
      };
      exports.WriteCollect = WriteCollect;
      exports.CREATE_COLLECT = "[Create action] Create Collect";
      var CreateCollect = class {
        constructor(bale) {
          this.bale = bale;
          this.type = exports.CREATE_COLLECT;
        }
      };
      exports.CreateCollect = CreateCollect;
      exports.REMOVE_COLLECT = "[Create action] Remove Collect";
      var RemoveCollect = class {
        constructor(bale) {
          this.bale = bale;
          this.type = exports.REMOVE_COLLECT;
        }
      };
      exports.RemoveCollect = RemoveCollect;
      exports.DELETE_COLLECT = "[Create action] Delete Collect";
      var DeleteCollect = class {
        constructor(bale) {
          this.bale = bale;
          this.type = exports.DELETE_COLLECT;
        }
      };
      exports.DeleteCollect = DeleteCollect;
      exports.EMPTY_COLLECT = "[Empty action] Empty Collect";
      var EmptyCollect = class {
        constructor(bale) {
          this.bale = bale;
          this.type = exports.EMPTY_COLLECT;
        }
      };
      exports.EmptyCollect = EmptyCollect;
    }
  });

  // ../001.time/dist/001.time/99.bus.unit/bus.action.js
  var require_bus_action = __commonJS({
    "../001.time/dist/001.time/99.bus.unit/bus.action.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.CreateBus = exports.CREATE_BUS = exports.UpdateBus = exports.UPDATE_BUS = exports.MessageBus = exports.MESSAGE_BUS = exports.ConnectBus = exports.CONNECT_BUS = exports.OpenBus = exports.OPEN_BUS = exports.InitBus = exports.INIT_BUS = void 0;
      exports.INIT_BUS = "[Bus action] Init Bus";
      var InitBus = class {
        constructor(bale) {
          this.bale = bale;
          this.type = exports.INIT_BUS;
        }
      };
      exports.InitBus = InitBus;
      exports.OPEN_BUS = "[Bus action] Open Bus";
      var OpenBus = class {
        constructor(bale) {
          this.bale = bale;
          this.type = exports.OPEN_BUS;
        }
      };
      exports.OpenBus = OpenBus;
      exports.CONNECT_BUS = "[Bus action] Connect Bus";
      var ConnectBus = class {
        constructor(bale) {
          this.bale = bale;
          this.type = exports.CONNECT_BUS;
        }
      };
      exports.ConnectBus = ConnectBus;
      exports.MESSAGE_BUS = "[Bus action] Message Bus";
      var MessageBus = class {
        constructor(bale) {
          this.bale = bale;
          this.type = exports.MESSAGE_BUS;
        }
      };
      exports.MessageBus = MessageBus;
      exports.UPDATE_BUS = "[Bus action] Update Bus";
      var UpdateBus = class {
        constructor(bale) {
          this.bale = bale;
          this.type = exports.UPDATE_BUS;
        }
      };
      exports.UpdateBus = UpdateBus;
      exports.CREATE_BUS = "[Bus action] Create Bus";
      var CreateBus = class {
        constructor(bale) {
          this.bale = bale;
          this.type = exports.CREATE_BUS;
        }
      };
      exports.CreateBus = CreateBus;
    }
  });

  // ../001.time/dist/001.time/act/vurt.action.js
  var require_vurt_action = __commonJS({
    "../001.time/dist/001.time/act/vurt.action.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.BUNDLE_VURT = exports.CONTAINS_VURT = exports.LIST_UNIT_VURT = exports.LIST_PIVOT_VURT = exports.COUNT_VURT = exports.UNIT_VURT = exports.REPLACE_VURT = exports.UPDATE_VURT = exports.FETCH_VURT = exports.TEST_CLOUD_VURT = exports.DELAY_VURT = exports.INIT_VURT = void 0;
      exports.INIT_VURT = "[Vurt action] Init Vurt";
      exports.DELAY_VURT = "[Vurt action] Delay Vurt";
      exports.TEST_CLOUD_VURT = "[Vurt action] Test Cloud Vurt";
      exports.FETCH_VURT = "[Vurt action] Fetch Vurt";
      exports.UPDATE_VURT = "[Vurt action] Update Vurt";
      exports.REPLACE_VURT = "[Vurt action] Replace Vurt";
      exports.UNIT_VURT = "[Vurt action] Unit Vurt";
      exports.COUNT_VURT = "[Vurt action] Count Vurt";
      exports.LIST_PIVOT_VURT = "[Vurt action] List Pivot Vurt";
      exports.LIST_UNIT_VURT = "[Vurt action] List Unit Vurt";
      exports.CONTAINS_VURT = "[Contains action] Contains Vurt";
      exports.BUNDLE_VURT = "[Bundle action] Bundle Vurt";
    }
  });

  // ../001.time/dist/001.time/act/disk.action.js
  var require_disk_action = __commonJS({
    "../001.time/dist/001.time/act/disk.action.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.ENSURE_DISK = exports.TRASH_DISK = exports.BATCH_DISK = exports.FRAME_DISK = exports.COPY_DISK = exports.LOAD_LIST_DISK = exports.LIST_DISK = exports.WRITE_DISK = exports.READ_DISK = exports.UPDATE_DISK = exports.INIT_DISK = void 0;
      exports.INIT_DISK = "[Disk action] Init Disk";
      exports.UPDATE_DISK = "[Disk action] Update Disk";
      exports.READ_DISK = "[Disk action] Read Disk";
      exports.WRITE_DISK = "[Disk action] Write Disk";
      exports.LIST_DISK = "[List action] List Disk";
      exports.LOAD_LIST_DISK = "[Load_list action] Load_list Disk";
      exports.COPY_DISK = "[Copy action] Copy Disk";
      exports.FRAME_DISK = "[Frame action] Frame Disk";
      exports.BATCH_DISK = "[Batch action] Batch Disk";
      exports.TRASH_DISK = "[Trash action] Trash Disk";
      exports.ENSURE_DISK = "[Ensure action] Ensure Disk";
    }
  });

  // ../../node_modules/.pnpm/luxon@3.2.1/node_modules/luxon/build/node/luxon.js
  var require_luxon = __commonJS({
    "../../node_modules/.pnpm/luxon@3.2.1/node_modules/luxon/build/node/luxon.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var LuxonError = class extends Error {
      };
      var InvalidDateTimeError = class extends LuxonError {
        constructor(reason) {
          super(`Invalid DateTime: ${reason.toMessage()}`);
        }
      };
      var InvalidIntervalError = class extends LuxonError {
        constructor(reason) {
          super(`Invalid Interval: ${reason.toMessage()}`);
        }
      };
      var InvalidDurationError = class extends LuxonError {
        constructor(reason) {
          super(`Invalid Duration: ${reason.toMessage()}`);
        }
      };
      var ConflictingSpecificationError = class extends LuxonError {
      };
      var InvalidUnitError = class extends LuxonError {
        constructor(unit) {
          super(`Invalid unit ${unit}`);
        }
      };
      var InvalidArgumentError = class extends LuxonError {
      };
      var ZoneIsAbstractError = class extends LuxonError {
        constructor() {
          super("Zone is an abstract class");
        }
      };
      var n = "numeric";
      var s = "short";
      var l = "long";
      var DATE_SHORT = {
        year: n,
        month: n,
        day: n
      };
      var DATE_MED = {
        year: n,
        month: s,
        day: n
      };
      var DATE_MED_WITH_WEEKDAY = {
        year: n,
        month: s,
        day: n,
        weekday: s
      };
      var DATE_FULL = {
        year: n,
        month: l,
        day: n
      };
      var DATE_HUGE = {
        year: n,
        month: l,
        day: n,
        weekday: l
      };
      var TIME_SIMPLE = {
        hour: n,
        minute: n
      };
      var TIME_WITH_SECONDS = {
        hour: n,
        minute: n,
        second: n
      };
      var TIME_WITH_SHORT_OFFSET = {
        hour: n,
        minute: n,
        second: n,
        timeZoneName: s
      };
      var TIME_WITH_LONG_OFFSET = {
        hour: n,
        minute: n,
        second: n,
        timeZoneName: l
      };
      var TIME_24_SIMPLE = {
        hour: n,
        minute: n,
        hourCycle: "h23"
      };
      var TIME_24_WITH_SECONDS = {
        hour: n,
        minute: n,
        second: n,
        hourCycle: "h23"
      };
      var TIME_24_WITH_SHORT_OFFSET = {
        hour: n,
        minute: n,
        second: n,
        hourCycle: "h23",
        timeZoneName: s
      };
      var TIME_24_WITH_LONG_OFFSET = {
        hour: n,
        minute: n,
        second: n,
        hourCycle: "h23",
        timeZoneName: l
      };
      var DATETIME_SHORT = {
        year: n,
        month: n,
        day: n,
        hour: n,
        minute: n
      };
      var DATETIME_SHORT_WITH_SECONDS = {
        year: n,
        month: n,
        day: n,
        hour: n,
        minute: n,
        second: n
      };
      var DATETIME_MED = {
        year: n,
        month: s,
        day: n,
        hour: n,
        minute: n
      };
      var DATETIME_MED_WITH_SECONDS = {
        year: n,
        month: s,
        day: n,
        hour: n,
        minute: n,
        second: n
      };
      var DATETIME_MED_WITH_WEEKDAY = {
        year: n,
        month: s,
        day: n,
        weekday: s,
        hour: n,
        minute: n
      };
      var DATETIME_FULL = {
        year: n,
        month: l,
        day: n,
        hour: n,
        minute: n,
        timeZoneName: s
      };
      var DATETIME_FULL_WITH_SECONDS = {
        year: n,
        month: l,
        day: n,
        hour: n,
        minute: n,
        second: n,
        timeZoneName: s
      };
      var DATETIME_HUGE = {
        year: n,
        month: l,
        day: n,
        weekday: l,
        hour: n,
        minute: n,
        timeZoneName: l
      };
      var DATETIME_HUGE_WITH_SECONDS = {
        year: n,
        month: l,
        day: n,
        weekday: l,
        hour: n,
        minute: n,
        second: n,
        timeZoneName: l
      };
      var Zone = class {
        get type() {
          throw new ZoneIsAbstractError();
        }
        get name() {
          throw new ZoneIsAbstractError();
        }
        get ianaName() {
          return this.name;
        }
        get isUniversal() {
          throw new ZoneIsAbstractError();
        }
        offsetName(ts, opts) {
          throw new ZoneIsAbstractError();
        }
        formatOffset(ts, format) {
          throw new ZoneIsAbstractError();
        }
        offset(ts) {
          throw new ZoneIsAbstractError();
        }
        equals(otherZone) {
          throw new ZoneIsAbstractError();
        }
        get isValid() {
          throw new ZoneIsAbstractError();
        }
      };
      var singleton$1 = null;
      var SystemZone = class extends Zone {
        static get instance() {
          if (singleton$1 === null) {
            singleton$1 = new SystemZone();
          }
          return singleton$1;
        }
        get type() {
          return "system";
        }
        get name() {
          return new Intl.DateTimeFormat().resolvedOptions().timeZone;
        }
        get isUniversal() {
          return false;
        }
        offsetName(ts, {
          format,
          locale
        }) {
          return parseZoneInfo(ts, format, locale);
        }
        formatOffset(ts, format) {
          return formatOffset(this.offset(ts), format);
        }
        offset(ts) {
          return -new Date(ts).getTimezoneOffset();
        }
        equals(otherZone) {
          return otherZone.type === "system";
        }
        get isValid() {
          return true;
        }
      };
      var dtfCache = {};
      function makeDTF(zone) {
        if (!dtfCache[zone]) {
          dtfCache[zone] = new Intl.DateTimeFormat("en-US", {
            hour12: false,
            timeZone: zone,
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            era: "short"
          });
        }
        return dtfCache[zone];
      }
      var typeToPos = {
        year: 0,
        month: 1,
        day: 2,
        era: 3,
        hour: 4,
        minute: 5,
        second: 6
      };
      function hackyOffset(dtf, date) {
        const formatted = dtf.format(date).replace(/\u200E/g, ""), parsed = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(formatted), [, fMonth, fDay, fYear, fadOrBc, fHour, fMinute, fSecond] = parsed;
        return [fYear, fMonth, fDay, fadOrBc, fHour, fMinute, fSecond];
      }
      function partsOffset(dtf, date) {
        const formatted = dtf.formatToParts(date);
        const filled = [];
        for (let i = 0; i < formatted.length; i++) {
          const {
            type,
            value
          } = formatted[i];
          const pos = typeToPos[type];
          if (type === "era") {
            filled[pos] = value;
          } else if (!isUndefined(pos)) {
            filled[pos] = parseInt(value, 10);
          }
        }
        return filled;
      }
      var ianaZoneCache = {};
      var IANAZone = class extends Zone {
        static create(name) {
          if (!ianaZoneCache[name]) {
            ianaZoneCache[name] = new IANAZone(name);
          }
          return ianaZoneCache[name];
        }
        static resetCache() {
          ianaZoneCache = {};
          dtfCache = {};
        }
        static isValidSpecifier(s2) {
          return this.isValidZone(s2);
        }
        static isValidZone(zone) {
          if (!zone) {
            return false;
          }
          try {
            new Intl.DateTimeFormat("en-US", {
              timeZone: zone
            }).format();
            return true;
          } catch (e) {
            return false;
          }
        }
        constructor(name) {
          super();
          this.zoneName = name;
          this.valid = IANAZone.isValidZone(name);
        }
        get type() {
          return "iana";
        }
        get name() {
          return this.zoneName;
        }
        get isUniversal() {
          return false;
        }
        offsetName(ts, {
          format,
          locale
        }) {
          return parseZoneInfo(ts, format, locale, this.name);
        }
        formatOffset(ts, format) {
          return formatOffset(this.offset(ts), format);
        }
        offset(ts) {
          const date = new Date(ts);
          if (isNaN(date))
            return NaN;
          const dtf = makeDTF(this.name);
          let [year, month, day, adOrBc, hour, minute, second] = dtf.formatToParts ? partsOffset(dtf, date) : hackyOffset(dtf, date);
          if (adOrBc === "BC") {
            year = -Math.abs(year) + 1;
          }
          const adjustedHour = hour === 24 ? 0 : hour;
          const asUTC = objToLocalTS({
            year,
            month,
            day,
            hour: adjustedHour,
            minute,
            second,
            millisecond: 0
          });
          let asTS = +date;
          const over = asTS % 1e3;
          asTS -= over >= 0 ? over : 1e3 + over;
          return (asUTC - asTS) / (60 * 1e3);
        }
        equals(otherZone) {
          return otherZone.type === "iana" && otherZone.name === this.name;
        }
        get isValid() {
          return this.valid;
        }
      };
      var intlLFCache = {};
      function getCachedLF(locString, opts = {}) {
        const key = JSON.stringify([locString, opts]);
        let dtf = intlLFCache[key];
        if (!dtf) {
          dtf = new Intl.ListFormat(locString, opts);
          intlLFCache[key] = dtf;
        }
        return dtf;
      }
      var intlDTCache = {};
      function getCachedDTF(locString, opts = {}) {
        const key = JSON.stringify([locString, opts]);
        let dtf = intlDTCache[key];
        if (!dtf) {
          dtf = new Intl.DateTimeFormat(locString, opts);
          intlDTCache[key] = dtf;
        }
        return dtf;
      }
      var intlNumCache = {};
      function getCachedINF(locString, opts = {}) {
        const key = JSON.stringify([locString, opts]);
        let inf = intlNumCache[key];
        if (!inf) {
          inf = new Intl.NumberFormat(locString, opts);
          intlNumCache[key] = inf;
        }
        return inf;
      }
      var intlRelCache = {};
      function getCachedRTF(locString, opts = {}) {
        const {
          base,
          ...cacheKeyOpts
        } = opts;
        const key = JSON.stringify([locString, cacheKeyOpts]);
        let inf = intlRelCache[key];
        if (!inf) {
          inf = new Intl.RelativeTimeFormat(locString, opts);
          intlRelCache[key] = inf;
        }
        return inf;
      }
      var sysLocaleCache = null;
      function systemLocale() {
        if (sysLocaleCache) {
          return sysLocaleCache;
        } else {
          sysLocaleCache = new Intl.DateTimeFormat().resolvedOptions().locale;
          return sysLocaleCache;
        }
      }
      function parseLocaleString(localeStr) {
        const xIndex = localeStr.indexOf("-x-");
        if (xIndex !== -1) {
          localeStr = localeStr.substring(0, xIndex);
        }
        const uIndex = localeStr.indexOf("-u-");
        if (uIndex === -1) {
          return [localeStr];
        } else {
          let options;
          let selectedStr;
          try {
            options = getCachedDTF(localeStr).resolvedOptions();
            selectedStr = localeStr;
          } catch (e) {
            const smaller = localeStr.substring(0, uIndex);
            options = getCachedDTF(smaller).resolvedOptions();
            selectedStr = smaller;
          }
          const {
            numberingSystem,
            calendar
          } = options;
          return [selectedStr, numberingSystem, calendar];
        }
      }
      function intlConfigString(localeStr, numberingSystem, outputCalendar) {
        if (outputCalendar || numberingSystem) {
          if (!localeStr.includes("-u-")) {
            localeStr += "-u";
          }
          if (outputCalendar) {
            localeStr += `-ca-${outputCalendar}`;
          }
          if (numberingSystem) {
            localeStr += `-nu-${numberingSystem}`;
          }
          return localeStr;
        } else {
          return localeStr;
        }
      }
      function mapMonths(f) {
        const ms = [];
        for (let i = 1; i <= 12; i++) {
          const dt = DateTime.utc(2016, i, 1);
          ms.push(f(dt));
        }
        return ms;
      }
      function mapWeekdays(f) {
        const ms = [];
        for (let i = 1; i <= 7; i++) {
          const dt = DateTime.utc(2016, 11, 13 + i);
          ms.push(f(dt));
        }
        return ms;
      }
      function listStuff(loc, length, defaultOK, englishFn, intlFn) {
        const mode = loc.listingMode(defaultOK);
        if (mode === "error") {
          return null;
        } else if (mode === "en") {
          return englishFn(length);
        } else {
          return intlFn(length);
        }
      }
      function supportsFastNumbers(loc) {
        if (loc.numberingSystem && loc.numberingSystem !== "latn") {
          return false;
        } else {
          return loc.numberingSystem === "latn" || !loc.locale || loc.locale.startsWith("en") || new Intl.DateTimeFormat(loc.intl).resolvedOptions().numberingSystem === "latn";
        }
      }
      var PolyNumberFormatter = class {
        constructor(intl, forceSimple, opts) {
          this.padTo = opts.padTo || 0;
          this.floor = opts.floor || false;
          const {
            padTo,
            floor,
            ...otherOpts
          } = opts;
          if (!forceSimple || Object.keys(otherOpts).length > 0) {
            const intlOpts = {
              useGrouping: false,
              ...opts
            };
            if (opts.padTo > 0)
              intlOpts.minimumIntegerDigits = opts.padTo;
            this.inf = getCachedINF(intl, intlOpts);
          }
        }
        format(i) {
          if (this.inf) {
            const fixed = this.floor ? Math.floor(i) : i;
            return this.inf.format(fixed);
          } else {
            const fixed = this.floor ? Math.floor(i) : roundTo(i, 3);
            return padStart(fixed, this.padTo);
          }
        }
      };
      var PolyDateFormatter = class {
        constructor(dt, intl, opts) {
          this.opts = opts;
          let z = void 0;
          if (dt.zone.isUniversal) {
            const gmtOffset = -1 * (dt.offset / 60);
            const offsetZ = gmtOffset >= 0 ? `Etc/GMT+${gmtOffset}` : `Etc/GMT${gmtOffset}`;
            if (dt.offset !== 0 && IANAZone.create(offsetZ).valid) {
              z = offsetZ;
              this.dt = dt;
            } else {
              z = "UTC";
              if (opts.timeZoneName) {
                this.dt = dt;
              } else {
                this.dt = dt.offset === 0 ? dt : DateTime.fromMillis(dt.ts + dt.offset * 60 * 1e3);
              }
            }
          } else if (dt.zone.type === "system") {
            this.dt = dt;
          } else {
            this.dt = dt;
            z = dt.zone.name;
          }
          const intlOpts = {
            ...this.opts
          };
          intlOpts.timeZone = intlOpts.timeZone || z;
          this.dtf = getCachedDTF(intl, intlOpts);
        }
        format() {
          return this.dtf.format(this.dt.toJSDate());
        }
        formatToParts() {
          return this.dtf.formatToParts(this.dt.toJSDate());
        }
        resolvedOptions() {
          return this.dtf.resolvedOptions();
        }
      };
      var PolyRelFormatter = class {
        constructor(intl, isEnglish, opts) {
          this.opts = {
            style: "long",
            ...opts
          };
          if (!isEnglish && hasRelative()) {
            this.rtf = getCachedRTF(intl, opts);
          }
        }
        format(count, unit) {
          if (this.rtf) {
            return this.rtf.format(count, unit);
          } else {
            return formatRelativeTime(unit, count, this.opts.numeric, this.opts.style !== "long");
          }
        }
        formatToParts(count, unit) {
          if (this.rtf) {
            return this.rtf.formatToParts(count, unit);
          } else {
            return [];
          }
        }
      };
      var Locale = class {
        static fromOpts(opts) {
          return Locale.create(opts.locale, opts.numberingSystem, opts.outputCalendar, opts.defaultToEN);
        }
        static create(locale, numberingSystem, outputCalendar, defaultToEN = false) {
          const specifiedLocale = locale || Settings.defaultLocale;
          const localeR = specifiedLocale || (defaultToEN ? "en-US" : systemLocale());
          const numberingSystemR = numberingSystem || Settings.defaultNumberingSystem;
          const outputCalendarR = outputCalendar || Settings.defaultOutputCalendar;
          return new Locale(localeR, numberingSystemR, outputCalendarR, specifiedLocale);
        }
        static resetCache() {
          sysLocaleCache = null;
          intlDTCache = {};
          intlNumCache = {};
          intlRelCache = {};
        }
        static fromObject({
          locale,
          numberingSystem,
          outputCalendar
        } = {}) {
          return Locale.create(locale, numberingSystem, outputCalendar);
        }
        constructor(locale, numbering, outputCalendar, specifiedLocale) {
          const [parsedLocale, parsedNumberingSystem, parsedOutputCalendar] = parseLocaleString(locale);
          this.locale = parsedLocale;
          this.numberingSystem = numbering || parsedNumberingSystem || null;
          this.outputCalendar = outputCalendar || parsedOutputCalendar || null;
          this.intl = intlConfigString(this.locale, this.numberingSystem, this.outputCalendar);
          this.weekdaysCache = {
            format: {},
            standalone: {}
          };
          this.monthsCache = {
            format: {},
            standalone: {}
          };
          this.meridiemCache = null;
          this.eraCache = {};
          this.specifiedLocale = specifiedLocale;
          this.fastNumbersCached = null;
        }
        get fastNumbers() {
          if (this.fastNumbersCached == null) {
            this.fastNumbersCached = supportsFastNumbers(this);
          }
          return this.fastNumbersCached;
        }
        listingMode() {
          const isActuallyEn = this.isEnglish();
          const hasNoWeirdness = (this.numberingSystem === null || this.numberingSystem === "latn") && (this.outputCalendar === null || this.outputCalendar === "gregory");
          return isActuallyEn && hasNoWeirdness ? "en" : "intl";
        }
        clone(alts) {
          if (!alts || Object.getOwnPropertyNames(alts).length === 0) {
            return this;
          } else {
            return Locale.create(alts.locale || this.specifiedLocale, alts.numberingSystem || this.numberingSystem, alts.outputCalendar || this.outputCalendar, alts.defaultToEN || false);
          }
        }
        redefaultToEN(alts = {}) {
          return this.clone({
            ...alts,
            defaultToEN: true
          });
        }
        redefaultToSystem(alts = {}) {
          return this.clone({
            ...alts,
            defaultToEN: false
          });
        }
        months(length, format = false, defaultOK = true) {
          return listStuff(this, length, defaultOK, months, () => {
            const intl = format ? {
              month: length,
              day: "numeric"
            } : {
              month: length
            }, formatStr = format ? "format" : "standalone";
            if (!this.monthsCache[formatStr][length]) {
              this.monthsCache[formatStr][length] = mapMonths((dt) => this.extract(dt, intl, "month"));
            }
            return this.monthsCache[formatStr][length];
          });
        }
        weekdays(length, format = false, defaultOK = true) {
          return listStuff(this, length, defaultOK, weekdays, () => {
            const intl = format ? {
              weekday: length,
              year: "numeric",
              month: "long",
              day: "numeric"
            } : {
              weekday: length
            }, formatStr = format ? "format" : "standalone";
            if (!this.weekdaysCache[formatStr][length]) {
              this.weekdaysCache[formatStr][length] = mapWeekdays((dt) => this.extract(dt, intl, "weekday"));
            }
            return this.weekdaysCache[formatStr][length];
          });
        }
        meridiems(defaultOK = true) {
          return listStuff(this, void 0, defaultOK, () => meridiems, () => {
            if (!this.meridiemCache) {
              const intl = {
                hour: "numeric",
                hourCycle: "h12"
              };
              this.meridiemCache = [DateTime.utc(2016, 11, 13, 9), DateTime.utc(2016, 11, 13, 19)].map((dt) => this.extract(dt, intl, "dayperiod"));
            }
            return this.meridiemCache;
          });
        }
        eras(length, defaultOK = true) {
          return listStuff(this, length, defaultOK, eras, () => {
            const intl = {
              era: length
            };
            if (!this.eraCache[length]) {
              this.eraCache[length] = [DateTime.utc(-40, 1, 1), DateTime.utc(2017, 1, 1)].map((dt) => this.extract(dt, intl, "era"));
            }
            return this.eraCache[length];
          });
        }
        extract(dt, intlOpts, field) {
          const df = this.dtFormatter(dt, intlOpts), results = df.formatToParts(), matching = results.find((m) => m.type.toLowerCase() === field);
          return matching ? matching.value : null;
        }
        numberFormatter(opts = {}) {
          return new PolyNumberFormatter(this.intl, opts.forceSimple || this.fastNumbers, opts);
        }
        dtFormatter(dt, intlOpts = {}) {
          return new PolyDateFormatter(dt, this.intl, intlOpts);
        }
        relFormatter(opts = {}) {
          return new PolyRelFormatter(this.intl, this.isEnglish(), opts);
        }
        listFormatter(opts = {}) {
          return getCachedLF(this.intl, opts);
        }
        isEnglish() {
          return this.locale === "en" || this.locale.toLowerCase() === "en-us" || new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us");
        }
        equals(other) {
          return this.locale === other.locale && this.numberingSystem === other.numberingSystem && this.outputCalendar === other.outputCalendar;
        }
      };
      var singleton = null;
      var FixedOffsetZone = class extends Zone {
        static get utcInstance() {
          if (singleton === null) {
            singleton = new FixedOffsetZone(0);
          }
          return singleton;
        }
        static instance(offset2) {
          return offset2 === 0 ? FixedOffsetZone.utcInstance : new FixedOffsetZone(offset2);
        }
        static parseSpecifier(s2) {
          if (s2) {
            const r = s2.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
            if (r) {
              return new FixedOffsetZone(signedOffset(r[1], r[2]));
            }
          }
          return null;
        }
        constructor(offset2) {
          super();
          this.fixed = offset2;
        }
        get type() {
          return "fixed";
        }
        get name() {
          return this.fixed === 0 ? "UTC" : `UTC${formatOffset(this.fixed, "narrow")}`;
        }
        get ianaName() {
          if (this.fixed === 0) {
            return "Etc/UTC";
          } else {
            return `Etc/GMT${formatOffset(-this.fixed, "narrow")}`;
          }
        }
        offsetName() {
          return this.name;
        }
        formatOffset(ts, format) {
          return formatOffset(this.fixed, format);
        }
        get isUniversal() {
          return true;
        }
        offset() {
          return this.fixed;
        }
        equals(otherZone) {
          return otherZone.type === "fixed" && otherZone.fixed === this.fixed;
        }
        get isValid() {
          return true;
        }
      };
      var InvalidZone = class extends Zone {
        constructor(zoneName) {
          super();
          this.zoneName = zoneName;
        }
        get type() {
          return "invalid";
        }
        get name() {
          return this.zoneName;
        }
        get isUniversal() {
          return false;
        }
        offsetName() {
          return null;
        }
        formatOffset() {
          return "";
        }
        offset() {
          return NaN;
        }
        equals() {
          return false;
        }
        get isValid() {
          return false;
        }
      };
      function normalizeZone(input, defaultZone2) {
        if (isUndefined(input) || input === null) {
          return defaultZone2;
        } else if (input instanceof Zone) {
          return input;
        } else if (isString(input)) {
          const lowered = input.toLowerCase();
          if (lowered === "default")
            return defaultZone2;
          else if (lowered === "local" || lowered === "system")
            return SystemZone.instance;
          else if (lowered === "utc" || lowered === "gmt")
            return FixedOffsetZone.utcInstance;
          else
            return FixedOffsetZone.parseSpecifier(lowered) || IANAZone.create(input);
        } else if (isNumber(input)) {
          return FixedOffsetZone.instance(input);
        } else if (typeof input === "object" && input.offset && typeof input.offset === "number") {
          return input;
        } else {
          return new InvalidZone(input);
        }
      }
      var now = () => Date.now();
      var defaultZone = "system";
      var defaultLocale = null;
      var defaultNumberingSystem = null;
      var defaultOutputCalendar = null;
      var twoDigitCutoffYear = 60;
      var throwOnInvalid;
      var Settings = class {
        static get now() {
          return now;
        }
        static set now(n2) {
          now = n2;
        }
        static set defaultZone(zone) {
          defaultZone = zone;
        }
        static get defaultZone() {
          return normalizeZone(defaultZone, SystemZone.instance);
        }
        static get defaultLocale() {
          return defaultLocale;
        }
        static set defaultLocale(locale) {
          defaultLocale = locale;
        }
        static get defaultNumberingSystem() {
          return defaultNumberingSystem;
        }
        static set defaultNumberingSystem(numberingSystem) {
          defaultNumberingSystem = numberingSystem;
        }
        static get defaultOutputCalendar() {
          return defaultOutputCalendar;
        }
        static set defaultOutputCalendar(outputCalendar) {
          defaultOutputCalendar = outputCalendar;
        }
        static get twoDigitCutoffYear() {
          return twoDigitCutoffYear;
        }
        static set twoDigitCutoffYear(cutoffYear) {
          twoDigitCutoffYear = cutoffYear % 100;
        }
        static get throwOnInvalid() {
          return throwOnInvalid;
        }
        static set throwOnInvalid(t) {
          throwOnInvalid = t;
        }
        static resetCaches() {
          Locale.resetCache();
          IANAZone.resetCache();
        }
      };
      function isUndefined(o) {
        return typeof o === "undefined";
      }
      function isNumber(o) {
        return typeof o === "number";
      }
      function isInteger(o) {
        return typeof o === "number" && o % 1 === 0;
      }
      function isString(o) {
        return typeof o === "string";
      }
      function isDate(o) {
        return Object.prototype.toString.call(o) === "[object Date]";
      }
      function hasRelative() {
        try {
          return typeof Intl !== "undefined" && !!Intl.RelativeTimeFormat;
        } catch (e) {
          return false;
        }
      }
      function maybeArray(thing) {
        return Array.isArray(thing) ? thing : [thing];
      }
      function bestBy(arr, by, compare) {
        if (arr.length === 0) {
          return void 0;
        }
        return arr.reduce((best, next) => {
          const pair = [by(next), next];
          if (!best) {
            return pair;
          } else if (compare(best[0], pair[0]) === best[0]) {
            return best;
          } else {
            return pair;
          }
        }, null)[1];
      }
      function pick(obj, keys) {
        return keys.reduce((a, k) => {
          a[k] = obj[k];
          return a;
        }, {});
      }
      function hasOwnProperty(obj, prop) {
        return Object.prototype.hasOwnProperty.call(obj, prop);
      }
      function integerBetween(thing, bottom, top) {
        return isInteger(thing) && thing >= bottom && thing <= top;
      }
      function floorMod(x, n2) {
        return x - n2 * Math.floor(x / n2);
      }
      function padStart(input, n2 = 2) {
        const isNeg = input < 0;
        let padded;
        if (isNeg) {
          padded = "-" + ("" + -input).padStart(n2, "0");
        } else {
          padded = ("" + input).padStart(n2, "0");
        }
        return padded;
      }
      function parseInteger(string) {
        if (isUndefined(string) || string === null || string === "") {
          return void 0;
        } else {
          return parseInt(string, 10);
        }
      }
      function parseFloating(string) {
        if (isUndefined(string) || string === null || string === "") {
          return void 0;
        } else {
          return parseFloat(string);
        }
      }
      function parseMillis(fraction) {
        if (isUndefined(fraction) || fraction === null || fraction === "") {
          return void 0;
        } else {
          const f = parseFloat("0." + fraction) * 1e3;
          return Math.floor(f);
        }
      }
      function roundTo(number, digits, towardZero = false) {
        const factor = 10 ** digits, rounder = towardZero ? Math.trunc : Math.round;
        return rounder(number * factor) / factor;
      }
      function isLeapYear(year) {
        return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
      }
      function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
      }
      function daysInMonth(year, month) {
        const modMonth = floorMod(month - 1, 12) + 1, modYear = year + (month - modMonth) / 12;
        if (modMonth === 2) {
          return isLeapYear(modYear) ? 29 : 28;
        } else {
          return [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][modMonth - 1];
        }
      }
      function objToLocalTS(obj) {
        let d = Date.UTC(obj.year, obj.month - 1, obj.day, obj.hour, obj.minute, obj.second, obj.millisecond);
        if (obj.year < 100 && obj.year >= 0) {
          d = new Date(d);
          d.setUTCFullYear(d.getUTCFullYear() - 1900);
        }
        return +d;
      }
      function weeksInWeekYear(weekYear) {
        const p1 = (weekYear + Math.floor(weekYear / 4) - Math.floor(weekYear / 100) + Math.floor(weekYear / 400)) % 7, last = weekYear - 1, p2 = (last + Math.floor(last / 4) - Math.floor(last / 100) + Math.floor(last / 400)) % 7;
        return p1 === 4 || p2 === 3 ? 53 : 52;
      }
      function untruncateYear(year) {
        if (year > 99) {
          return year;
        } else
          return year > Settings.twoDigitCutoffYear ? 1900 + year : 2e3 + year;
      }
      function parseZoneInfo(ts, offsetFormat, locale, timeZone = null) {
        const date = new Date(ts), intlOpts = {
          hourCycle: "h23",
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit"
        };
        if (timeZone) {
          intlOpts.timeZone = timeZone;
        }
        const modified = {
          timeZoneName: offsetFormat,
          ...intlOpts
        };
        const parsed = new Intl.DateTimeFormat(locale, modified).formatToParts(date).find((m) => m.type.toLowerCase() === "timezonename");
        return parsed ? parsed.value : null;
      }
      function signedOffset(offHourStr, offMinuteStr) {
        let offHour = parseInt(offHourStr, 10);
        if (Number.isNaN(offHour)) {
          offHour = 0;
        }
        const offMin = parseInt(offMinuteStr, 10) || 0, offMinSigned = offHour < 0 || Object.is(offHour, -0) ? -offMin : offMin;
        return offHour * 60 + offMinSigned;
      }
      function asNumber(value) {
        const numericValue = Number(value);
        if (typeof value === "boolean" || value === "" || Number.isNaN(numericValue))
          throw new InvalidArgumentError(`Invalid unit value ${value}`);
        return numericValue;
      }
      function normalizeObject(obj, normalizer) {
        const normalized = {};
        for (const u in obj) {
          if (hasOwnProperty(obj, u)) {
            const v = obj[u];
            if (v === void 0 || v === null)
              continue;
            normalized[normalizer(u)] = asNumber(v);
          }
        }
        return normalized;
      }
      function formatOffset(offset2, format) {
        const hours = Math.trunc(Math.abs(offset2 / 60)), minutes = Math.trunc(Math.abs(offset2 % 60)), sign = offset2 >= 0 ? "+" : "-";
        switch (format) {
          case "short":
            return `${sign}${padStart(hours, 2)}:${padStart(minutes, 2)}`;
          case "narrow":
            return `${sign}${hours}${minutes > 0 ? `:${minutes}` : ""}`;
          case "techie":
            return `${sign}${padStart(hours, 2)}${padStart(minutes, 2)}`;
          default:
            throw new RangeError(`Value format ${format} is out of range for property format`);
        }
      }
      function timeObject(obj) {
        return pick(obj, ["hour", "minute", "second", "millisecond"]);
      }
      var monthsLong = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      var monthsShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      var monthsNarrow = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
      function months(length) {
        switch (length) {
          case "narrow":
            return [...monthsNarrow];
          case "short":
            return [...monthsShort];
          case "long":
            return [...monthsLong];
          case "numeric":
            return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
          case "2-digit":
            return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
          default:
            return null;
        }
      }
      var weekdaysLong = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
      var weekdaysShort = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
      var weekdaysNarrow = ["M", "T", "W", "T", "F", "S", "S"];
      function weekdays(length) {
        switch (length) {
          case "narrow":
            return [...weekdaysNarrow];
          case "short":
            return [...weekdaysShort];
          case "long":
            return [...weekdaysLong];
          case "numeric":
            return ["1", "2", "3", "4", "5", "6", "7"];
          default:
            return null;
        }
      }
      var meridiems = ["AM", "PM"];
      var erasLong = ["Before Christ", "Anno Domini"];
      var erasShort = ["BC", "AD"];
      var erasNarrow = ["B", "A"];
      function eras(length) {
        switch (length) {
          case "narrow":
            return [...erasNarrow];
          case "short":
            return [...erasShort];
          case "long":
            return [...erasLong];
          default:
            return null;
        }
      }
      function meridiemForDateTime(dt) {
        return meridiems[dt.hour < 12 ? 0 : 1];
      }
      function weekdayForDateTime(dt, length) {
        return weekdays(length)[dt.weekday - 1];
      }
      function monthForDateTime(dt, length) {
        return months(length)[dt.month - 1];
      }
      function eraForDateTime(dt, length) {
        return eras(length)[dt.year < 0 ? 0 : 1];
      }
      function formatRelativeTime(unit, count, numeric = "always", narrow = false) {
        const units = {
          years: ["year", "yr."],
          quarters: ["quarter", "qtr."],
          months: ["month", "mo."],
          weeks: ["week", "wk."],
          days: ["day", "day", "days"],
          hours: ["hour", "hr."],
          minutes: ["minute", "min."],
          seconds: ["second", "sec."]
        };
        const lastable = ["hours", "minutes", "seconds"].indexOf(unit) === -1;
        if (numeric === "auto" && lastable) {
          const isDay = unit === "days";
          switch (count) {
            case 1:
              return isDay ? "tomorrow" : `next ${units[unit][0]}`;
            case -1:
              return isDay ? "yesterday" : `last ${units[unit][0]}`;
            case 0:
              return isDay ? "today" : `this ${units[unit][0]}`;
          }
        }
        const isInPast = Object.is(count, -0) || count < 0, fmtValue = Math.abs(count), singular = fmtValue === 1, lilUnits = units[unit], fmtUnit = narrow ? singular ? lilUnits[1] : lilUnits[2] || lilUnits[1] : singular ? units[unit][0] : unit;
        return isInPast ? `${fmtValue} ${fmtUnit} ago` : `in ${fmtValue} ${fmtUnit}`;
      }
      function stringifyTokens(splits, tokenToString) {
        let s2 = "";
        for (const token of splits) {
          if (token.literal) {
            s2 += token.val;
          } else {
            s2 += tokenToString(token.val);
          }
        }
        return s2;
      }
      var macroTokenToFormatOpts = {
        D: DATE_SHORT,
        DD: DATE_MED,
        DDD: DATE_FULL,
        DDDD: DATE_HUGE,
        t: TIME_SIMPLE,
        tt: TIME_WITH_SECONDS,
        ttt: TIME_WITH_SHORT_OFFSET,
        tttt: TIME_WITH_LONG_OFFSET,
        T: TIME_24_SIMPLE,
        TT: TIME_24_WITH_SECONDS,
        TTT: TIME_24_WITH_SHORT_OFFSET,
        TTTT: TIME_24_WITH_LONG_OFFSET,
        f: DATETIME_SHORT,
        ff: DATETIME_MED,
        fff: DATETIME_FULL,
        ffff: DATETIME_HUGE,
        F: DATETIME_SHORT_WITH_SECONDS,
        FF: DATETIME_MED_WITH_SECONDS,
        FFF: DATETIME_FULL_WITH_SECONDS,
        FFFF: DATETIME_HUGE_WITH_SECONDS
      };
      var Formatter = class {
        static create(locale, opts = {}) {
          return new Formatter(locale, opts);
        }
        static parseFormat(fmt) {
          let current = null, currentFull = "", bracketed = false;
          const splits = [];
          for (let i = 0; i < fmt.length; i++) {
            const c = fmt.charAt(i);
            if (c === "'") {
              if (currentFull.length > 0) {
                splits.push({
                  literal: bracketed,
                  val: currentFull
                });
              }
              current = null;
              currentFull = "";
              bracketed = !bracketed;
            } else if (bracketed) {
              currentFull += c;
            } else if (c === current) {
              currentFull += c;
            } else {
              if (currentFull.length > 0) {
                splits.push({
                  literal: false,
                  val: currentFull
                });
              }
              currentFull = c;
              current = c;
            }
          }
          if (currentFull.length > 0) {
            splits.push({
              literal: bracketed,
              val: currentFull
            });
          }
          return splits;
        }
        static macroTokenToFormatOpts(token) {
          return macroTokenToFormatOpts[token];
        }
        constructor(locale, formatOpts) {
          this.opts = formatOpts;
          this.loc = locale;
          this.systemLoc = null;
        }
        formatWithSystemDefault(dt, opts) {
          if (this.systemLoc === null) {
            this.systemLoc = this.loc.redefaultToSystem();
          }
          const df = this.systemLoc.dtFormatter(dt, {
            ...this.opts,
            ...opts
          });
          return df.format();
        }
        formatDateTime(dt, opts = {}) {
          const df = this.loc.dtFormatter(dt, {
            ...this.opts,
            ...opts
          });
          return df.format();
        }
        formatDateTimeParts(dt, opts = {}) {
          const df = this.loc.dtFormatter(dt, {
            ...this.opts,
            ...opts
          });
          return df.formatToParts();
        }
        formatInterval(interval, opts = {}) {
          const df = this.loc.dtFormatter(interval.start, {
            ...this.opts,
            ...opts
          });
          return df.dtf.formatRange(interval.start.toJSDate(), interval.end.toJSDate());
        }
        resolvedOptions(dt, opts = {}) {
          const df = this.loc.dtFormatter(dt, {
            ...this.opts,
            ...opts
          });
          return df.resolvedOptions();
        }
        num(n2, p = 0) {
          if (this.opts.forceSimple) {
            return padStart(n2, p);
          }
          const opts = {
            ...this.opts
          };
          if (p > 0) {
            opts.padTo = p;
          }
          return this.loc.numberFormatter(opts).format(n2);
        }
        formatDateTimeFromString(dt, fmt) {
          const knownEnglish = this.loc.listingMode() === "en", useDateTimeFormatter = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory", string = (opts, extract) => this.loc.extract(dt, opts, extract), formatOffset2 = (opts) => {
            if (dt.isOffsetFixed && dt.offset === 0 && opts.allowZ) {
              return "Z";
            }
            return dt.isValid ? dt.zone.formatOffset(dt.ts, opts.format) : "";
          }, meridiem = () => knownEnglish ? meridiemForDateTime(dt) : string({
            hour: "numeric",
            hourCycle: "h12"
          }, "dayperiod"), month = (length, standalone) => knownEnglish ? monthForDateTime(dt, length) : string(standalone ? {
            month: length
          } : {
            month: length,
            day: "numeric"
          }, "month"), weekday = (length, standalone) => knownEnglish ? weekdayForDateTime(dt, length) : string(standalone ? {
            weekday: length
          } : {
            weekday: length,
            month: "long",
            day: "numeric"
          }, "weekday"), maybeMacro = (token) => {
            const formatOpts = Formatter.macroTokenToFormatOpts(token);
            if (formatOpts) {
              return this.formatWithSystemDefault(dt, formatOpts);
            } else {
              return token;
            }
          }, era = (length) => knownEnglish ? eraForDateTime(dt, length) : string({
            era: length
          }, "era"), tokenToString = (token) => {
            switch (token) {
              case "S":
                return this.num(dt.millisecond);
              case "u":
              case "SSS":
                return this.num(dt.millisecond, 3);
              case "s":
                return this.num(dt.second);
              case "ss":
                return this.num(dt.second, 2);
              case "uu":
                return this.num(Math.floor(dt.millisecond / 10), 2);
              case "uuu":
                return this.num(Math.floor(dt.millisecond / 100));
              case "m":
                return this.num(dt.minute);
              case "mm":
                return this.num(dt.minute, 2);
              case "h":
                return this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12);
              case "hh":
                return this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12, 2);
              case "H":
                return this.num(dt.hour);
              case "HH":
                return this.num(dt.hour, 2);
              case "Z":
                return formatOffset2({
                  format: "narrow",
                  allowZ: this.opts.allowZ
                });
              case "ZZ":
                return formatOffset2({
                  format: "short",
                  allowZ: this.opts.allowZ
                });
              case "ZZZ":
                return formatOffset2({
                  format: "techie",
                  allowZ: this.opts.allowZ
                });
              case "ZZZZ":
                return dt.zone.offsetName(dt.ts, {
                  format: "short",
                  locale: this.loc.locale
                });
              case "ZZZZZ":
                return dt.zone.offsetName(dt.ts, {
                  format: "long",
                  locale: this.loc.locale
                });
              case "z":
                return dt.zoneName;
              case "a":
                return meridiem();
              case "d":
                return useDateTimeFormatter ? string({
                  day: "numeric"
                }, "day") : this.num(dt.day);
              case "dd":
                return useDateTimeFormatter ? string({
                  day: "2-digit"
                }, "day") : this.num(dt.day, 2);
              case "c":
                return this.num(dt.weekday);
              case "ccc":
                return weekday("short", true);
              case "cccc":
                return weekday("long", true);
              case "ccccc":
                return weekday("narrow", true);
              case "E":
                return this.num(dt.weekday);
              case "EEE":
                return weekday("short", false);
              case "EEEE":
                return weekday("long", false);
              case "EEEEE":
                return weekday("narrow", false);
              case "L":
                return useDateTimeFormatter ? string({
                  month: "numeric",
                  day: "numeric"
                }, "month") : this.num(dt.month);
              case "LL":
                return useDateTimeFormatter ? string({
                  month: "2-digit",
                  day: "numeric"
                }, "month") : this.num(dt.month, 2);
              case "LLL":
                return month("short", true);
              case "LLLL":
                return month("long", true);
              case "LLLLL":
                return month("narrow", true);
              case "M":
                return useDateTimeFormatter ? string({
                  month: "numeric"
                }, "month") : this.num(dt.month);
              case "MM":
                return useDateTimeFormatter ? string({
                  month: "2-digit"
                }, "month") : this.num(dt.month, 2);
              case "MMM":
                return month("short", false);
              case "MMMM":
                return month("long", false);
              case "MMMMM":
                return month("narrow", false);
              case "y":
                return useDateTimeFormatter ? string({
                  year: "numeric"
                }, "year") : this.num(dt.year);
              case "yy":
                return useDateTimeFormatter ? string({
                  year: "2-digit"
                }, "year") : this.num(dt.year.toString().slice(-2), 2);
              case "yyyy":
                return useDateTimeFormatter ? string({
                  year: "numeric"
                }, "year") : this.num(dt.year, 4);
              case "yyyyyy":
                return useDateTimeFormatter ? string({
                  year: "numeric"
                }, "year") : this.num(dt.year, 6);
              case "G":
                return era("short");
              case "GG":
                return era("long");
              case "GGGGG":
                return era("narrow");
              case "kk":
                return this.num(dt.weekYear.toString().slice(-2), 2);
              case "kkkk":
                return this.num(dt.weekYear, 4);
              case "W":
                return this.num(dt.weekNumber);
              case "WW":
                return this.num(dt.weekNumber, 2);
              case "o":
                return this.num(dt.ordinal);
              case "ooo":
                return this.num(dt.ordinal, 3);
              case "q":
                return this.num(dt.quarter);
              case "qq":
                return this.num(dt.quarter, 2);
              case "X":
                return this.num(Math.floor(dt.ts / 1e3));
              case "x":
                return this.num(dt.ts);
              default:
                return maybeMacro(token);
            }
          };
          return stringifyTokens(Formatter.parseFormat(fmt), tokenToString);
        }
        formatDurationFromString(dur, fmt) {
          const tokenToField = (token) => {
            switch (token[0]) {
              case "S":
                return "millisecond";
              case "s":
                return "second";
              case "m":
                return "minute";
              case "h":
                return "hour";
              case "d":
                return "day";
              case "w":
                return "week";
              case "M":
                return "month";
              case "y":
                return "year";
              default:
                return null;
            }
          }, tokenToString = (lildur) => (token) => {
            const mapped = tokenToField(token);
            if (mapped) {
              return this.num(lildur.get(mapped), token.length);
            } else {
              return token;
            }
          }, tokens = Formatter.parseFormat(fmt), realTokens = tokens.reduce((found, {
            literal,
            val
          }) => literal ? found : found.concat(val), []), collapsed = dur.shiftTo(...realTokens.map(tokenToField).filter((t) => t));
          return stringifyTokens(tokens, tokenToString(collapsed));
        }
      };
      var Invalid = class {
        constructor(reason, explanation) {
          this.reason = reason;
          this.explanation = explanation;
        }
        toMessage() {
          if (this.explanation) {
            return `${this.reason}: ${this.explanation}`;
          } else {
            return this.reason;
          }
        }
      };
      var ianaRegex = /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;
      function combineRegexes(...regexes) {
        const full = regexes.reduce((f, r) => f + r.source, "");
        return RegExp(`^${full}$`);
      }
      function combineExtractors(...extractors) {
        return (m) => extractors.reduce(([mergedVals, mergedZone, cursor], ex) => {
          const [val, zone, next] = ex(m, cursor);
          return [{
            ...mergedVals,
            ...val
          }, zone || mergedZone, next];
        }, [{}, null, 1]).slice(0, 2);
      }
      function parse(s2, ...patterns) {
        if (s2 == null) {
          return [null, null];
        }
        for (const [regex, extractor] of patterns) {
          const m = regex.exec(s2);
          if (m) {
            return extractor(m);
          }
        }
        return [null, null];
      }
      function simpleParse(...keys) {
        return (match2, cursor) => {
          const ret = {};
          let i;
          for (i = 0; i < keys.length; i++) {
            ret[keys[i]] = parseInteger(match2[cursor + i]);
          }
          return [ret, null, cursor + i];
        };
      }
      var offsetRegex = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/;
      var isoExtendedZone = `(?:${offsetRegex.source}?(?:\\[(${ianaRegex.source})\\])?)?`;
      var isoTimeBaseRegex = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/;
      var isoTimeRegex = RegExp(`${isoTimeBaseRegex.source}${isoExtendedZone}`);
      var isoTimeExtensionRegex = RegExp(`(?:T${isoTimeRegex.source})?`);
      var isoYmdRegex = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/;
      var isoWeekRegex = /(\d{4})-?W(\d\d)(?:-?(\d))?/;
      var isoOrdinalRegex = /(\d{4})-?(\d{3})/;
      var extractISOWeekData = simpleParse("weekYear", "weekNumber", "weekDay");
      var extractISOOrdinalData = simpleParse("year", "ordinal");
      var sqlYmdRegex = /(\d{4})-(\d\d)-(\d\d)/;
      var sqlTimeRegex = RegExp(`${isoTimeBaseRegex.source} ?(?:${offsetRegex.source}|(${ianaRegex.source}))?`);
      var sqlTimeExtensionRegex = RegExp(`(?: ${sqlTimeRegex.source})?`);
      function int(match2, pos, fallback) {
        const m = match2[pos];
        return isUndefined(m) ? fallback : parseInteger(m);
      }
      function extractISOYmd(match2, cursor) {
        const item = {
          year: int(match2, cursor),
          month: int(match2, cursor + 1, 1),
          day: int(match2, cursor + 2, 1)
        };
        return [item, null, cursor + 3];
      }
      function extractISOTime(match2, cursor) {
        const item = {
          hours: int(match2, cursor, 0),
          minutes: int(match2, cursor + 1, 0),
          seconds: int(match2, cursor + 2, 0),
          milliseconds: parseMillis(match2[cursor + 3])
        };
        return [item, null, cursor + 4];
      }
      function extractISOOffset(match2, cursor) {
        const local = !match2[cursor] && !match2[cursor + 1], fullOffset = signedOffset(match2[cursor + 1], match2[cursor + 2]), zone = local ? null : FixedOffsetZone.instance(fullOffset);
        return [{}, zone, cursor + 3];
      }
      function extractIANAZone(match2, cursor) {
        const zone = match2[cursor] ? IANAZone.create(match2[cursor]) : null;
        return [{}, zone, cursor + 1];
      }
      var isoTimeOnly = RegExp(`^T?${isoTimeBaseRegex.source}$`);
      var isoDuration = /^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;
      function extractISODuration(match2) {
        const [s2, yearStr, monthStr, weekStr, dayStr, hourStr, minuteStr, secondStr, millisecondsStr] = match2;
        const hasNegativePrefix = s2[0] === "-";
        const negativeSeconds = secondStr && secondStr[0] === "-";
        const maybeNegate = (num, force = false) => num !== void 0 && (force || num && hasNegativePrefix) ? -num : num;
        return [{
          years: maybeNegate(parseFloating(yearStr)),
          months: maybeNegate(parseFloating(monthStr)),
          weeks: maybeNegate(parseFloating(weekStr)),
          days: maybeNegate(parseFloating(dayStr)),
          hours: maybeNegate(parseFloating(hourStr)),
          minutes: maybeNegate(parseFloating(minuteStr)),
          seconds: maybeNegate(parseFloating(secondStr), secondStr === "-0"),
          milliseconds: maybeNegate(parseMillis(millisecondsStr), negativeSeconds)
        }];
      }
      var obsOffsets = {
        GMT: 0,
        EDT: -4 * 60,
        EST: -5 * 60,
        CDT: -5 * 60,
        CST: -6 * 60,
        MDT: -6 * 60,
        MST: -7 * 60,
        PDT: -7 * 60,
        PST: -8 * 60
      };
      function fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
        const result = {
          year: yearStr.length === 2 ? untruncateYear(parseInteger(yearStr)) : parseInteger(yearStr),
          month: monthsShort.indexOf(monthStr) + 1,
          day: parseInteger(dayStr),
          hour: parseInteger(hourStr),
          minute: parseInteger(minuteStr)
        };
        if (secondStr)
          result.second = parseInteger(secondStr);
        if (weekdayStr) {
          result.weekday = weekdayStr.length > 3 ? weekdaysLong.indexOf(weekdayStr) + 1 : weekdaysShort.indexOf(weekdayStr) + 1;
        }
        return result;
      }
      var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
      function extractRFC2822(match2) {
        const [, weekdayStr, dayStr, monthStr, yearStr, hourStr, minuteStr, secondStr, obsOffset, milOffset, offHourStr, offMinuteStr] = match2, result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
        let offset2;
        if (obsOffset) {
          offset2 = obsOffsets[obsOffset];
        } else if (milOffset) {
          offset2 = 0;
        } else {
          offset2 = signedOffset(offHourStr, offMinuteStr);
        }
        return [result, new FixedOffsetZone(offset2)];
      }
      function preprocessRFC2822(s2) {
        return s2.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
      }
      var rfc1123 = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/;
      var rfc850 = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/;
      var ascii = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
      function extractRFC1123Or850(match2) {
        const [, weekdayStr, dayStr, monthStr, yearStr, hourStr, minuteStr, secondStr] = match2, result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
        return [result, FixedOffsetZone.utcInstance];
      }
      function extractASCII(match2) {
        const [, weekdayStr, monthStr, dayStr, hourStr, minuteStr, secondStr, yearStr] = match2, result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
        return [result, FixedOffsetZone.utcInstance];
      }
      var isoYmdWithTimeExtensionRegex = combineRegexes(isoYmdRegex, isoTimeExtensionRegex);
      var isoWeekWithTimeExtensionRegex = combineRegexes(isoWeekRegex, isoTimeExtensionRegex);
      var isoOrdinalWithTimeExtensionRegex = combineRegexes(isoOrdinalRegex, isoTimeExtensionRegex);
      var isoTimeCombinedRegex = combineRegexes(isoTimeRegex);
      var extractISOYmdTimeAndOffset = combineExtractors(extractISOYmd, extractISOTime, extractISOOffset, extractIANAZone);
      var extractISOWeekTimeAndOffset = combineExtractors(extractISOWeekData, extractISOTime, extractISOOffset, extractIANAZone);
      var extractISOOrdinalDateAndTime = combineExtractors(extractISOOrdinalData, extractISOTime, extractISOOffset, extractIANAZone);
      var extractISOTimeAndOffset = combineExtractors(extractISOTime, extractISOOffset, extractIANAZone);
      function parseISODate(s2) {
        return parse(s2, [isoYmdWithTimeExtensionRegex, extractISOYmdTimeAndOffset], [isoWeekWithTimeExtensionRegex, extractISOWeekTimeAndOffset], [isoOrdinalWithTimeExtensionRegex, extractISOOrdinalDateAndTime], [isoTimeCombinedRegex, extractISOTimeAndOffset]);
      }
      function parseRFC2822Date(s2) {
        return parse(preprocessRFC2822(s2), [rfc2822, extractRFC2822]);
      }
      function parseHTTPDate(s2) {
        return parse(s2, [rfc1123, extractRFC1123Or850], [rfc850, extractRFC1123Or850], [ascii, extractASCII]);
      }
      function parseISODuration(s2) {
        return parse(s2, [isoDuration, extractISODuration]);
      }
      var extractISOTimeOnly = combineExtractors(extractISOTime);
      function parseISOTimeOnly(s2) {
        return parse(s2, [isoTimeOnly, extractISOTimeOnly]);
      }
      var sqlYmdWithTimeExtensionRegex = combineRegexes(sqlYmdRegex, sqlTimeExtensionRegex);
      var sqlTimeCombinedRegex = combineRegexes(sqlTimeRegex);
      var extractISOTimeOffsetAndIANAZone = combineExtractors(extractISOTime, extractISOOffset, extractIANAZone);
      function parseSQL(s2) {
        return parse(s2, [sqlYmdWithTimeExtensionRegex, extractISOYmdTimeAndOffset], [sqlTimeCombinedRegex, extractISOTimeOffsetAndIANAZone]);
      }
      var INVALID$2 = "Invalid Duration";
      var lowOrderMatrix = {
        weeks: {
          days: 7,
          hours: 7 * 24,
          minutes: 7 * 24 * 60,
          seconds: 7 * 24 * 60 * 60,
          milliseconds: 7 * 24 * 60 * 60 * 1e3
        },
        days: {
          hours: 24,
          minutes: 24 * 60,
          seconds: 24 * 60 * 60,
          milliseconds: 24 * 60 * 60 * 1e3
        },
        hours: {
          minutes: 60,
          seconds: 60 * 60,
          milliseconds: 60 * 60 * 1e3
        },
        minutes: {
          seconds: 60,
          milliseconds: 60 * 1e3
        },
        seconds: {
          milliseconds: 1e3
        }
      };
      var casualMatrix = {
        years: {
          quarters: 4,
          months: 12,
          weeks: 52,
          days: 365,
          hours: 365 * 24,
          minutes: 365 * 24 * 60,
          seconds: 365 * 24 * 60 * 60,
          milliseconds: 365 * 24 * 60 * 60 * 1e3
        },
        quarters: {
          months: 3,
          weeks: 13,
          days: 91,
          hours: 91 * 24,
          minutes: 91 * 24 * 60,
          seconds: 91 * 24 * 60 * 60,
          milliseconds: 91 * 24 * 60 * 60 * 1e3
        },
        months: {
          weeks: 4,
          days: 30,
          hours: 30 * 24,
          minutes: 30 * 24 * 60,
          seconds: 30 * 24 * 60 * 60,
          milliseconds: 30 * 24 * 60 * 60 * 1e3
        },
        ...lowOrderMatrix
      };
      var daysInYearAccurate = 146097 / 400;
      var daysInMonthAccurate = 146097 / 4800;
      var accurateMatrix = {
        years: {
          quarters: 4,
          months: 12,
          weeks: daysInYearAccurate / 7,
          days: daysInYearAccurate,
          hours: daysInYearAccurate * 24,
          minutes: daysInYearAccurate * 24 * 60,
          seconds: daysInYearAccurate * 24 * 60 * 60,
          milliseconds: daysInYearAccurate * 24 * 60 * 60 * 1e3
        },
        quarters: {
          months: 3,
          weeks: daysInYearAccurate / 28,
          days: daysInYearAccurate / 4,
          hours: daysInYearAccurate * 24 / 4,
          minutes: daysInYearAccurate * 24 * 60 / 4,
          seconds: daysInYearAccurate * 24 * 60 * 60 / 4,
          milliseconds: daysInYearAccurate * 24 * 60 * 60 * 1e3 / 4
        },
        months: {
          weeks: daysInMonthAccurate / 7,
          days: daysInMonthAccurate,
          hours: daysInMonthAccurate * 24,
          minutes: daysInMonthAccurate * 24 * 60,
          seconds: daysInMonthAccurate * 24 * 60 * 60,
          milliseconds: daysInMonthAccurate * 24 * 60 * 60 * 1e3
        },
        ...lowOrderMatrix
      };
      var orderedUnits$1 = ["years", "quarters", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds"];
      var reverseUnits = orderedUnits$1.slice(0).reverse();
      function clone$1(dur, alts, clear = false) {
        const conf = {
          values: clear ? alts.values : {
            ...dur.values,
            ...alts.values || {}
          },
          loc: dur.loc.clone(alts.loc),
          conversionAccuracy: alts.conversionAccuracy || dur.conversionAccuracy,
          matrix: alts.matrix || dur.matrix
        };
        return new Duration(conf);
      }
      function antiTrunc(n2) {
        return n2 < 0 ? Math.floor(n2) : Math.ceil(n2);
      }
      function convert(matrix, fromMap, fromUnit, toMap, toUnit) {
        const conv = matrix[toUnit][fromUnit], raw = fromMap[fromUnit] / conv, sameSign = Math.sign(raw) === Math.sign(toMap[toUnit]), added = !sameSign && toMap[toUnit] !== 0 && Math.abs(raw) <= 1 ? antiTrunc(raw) : Math.trunc(raw);
        toMap[toUnit] += added;
        fromMap[fromUnit] -= added * conv;
      }
      function normalizeValues(matrix, vals) {
        reverseUnits.reduce((previous, current) => {
          if (!isUndefined(vals[current])) {
            if (previous) {
              convert(matrix, vals, previous, vals, current);
            }
            return current;
          } else {
            return previous;
          }
        }, null);
      }
      function removeZeroes(vals) {
        const newVals = {};
        for (const [key, value] of Object.entries(vals)) {
          if (value !== 0) {
            newVals[key] = value;
          }
        }
        return newVals;
      }
      var Duration = class {
        constructor(config) {
          const accurate = config.conversionAccuracy === "longterm" || false;
          let matrix = accurate ? accurateMatrix : casualMatrix;
          if (config.matrix) {
            matrix = config.matrix;
          }
          this.values = config.values;
          this.loc = config.loc || Locale.create();
          this.conversionAccuracy = accurate ? "longterm" : "casual";
          this.invalid = config.invalid || null;
          this.matrix = matrix;
          this.isLuxonDuration = true;
        }
        static fromMillis(count, opts) {
          return Duration.fromObject({
            milliseconds: count
          }, opts);
        }
        static fromObject(obj, opts = {}) {
          if (obj == null || typeof obj !== "object") {
            throw new InvalidArgumentError(`Duration.fromObject: argument expected to be an object, got ${obj === null ? "null" : typeof obj}`);
          }
          return new Duration({
            values: normalizeObject(obj, Duration.normalizeUnit),
            loc: Locale.fromObject(opts),
            conversionAccuracy: opts.conversionAccuracy,
            matrix: opts.matrix
          });
        }
        static fromDurationLike(durationLike) {
          if (isNumber(durationLike)) {
            return Duration.fromMillis(durationLike);
          } else if (Duration.isDuration(durationLike)) {
            return durationLike;
          } else if (typeof durationLike === "object") {
            return Duration.fromObject(durationLike);
          } else {
            throw new InvalidArgumentError(`Unknown duration argument ${durationLike} of type ${typeof durationLike}`);
          }
        }
        static fromISO(text, opts) {
          const [parsed] = parseISODuration(text);
          if (parsed) {
            return Duration.fromObject(parsed, opts);
          } else {
            return Duration.invalid("unparsable", `the input "${text}" can't be parsed as ISO 8601`);
          }
        }
        static fromISOTime(text, opts) {
          const [parsed] = parseISOTimeOnly(text);
          if (parsed) {
            return Duration.fromObject(parsed, opts);
          } else {
            return Duration.invalid("unparsable", `the input "${text}" can't be parsed as ISO 8601`);
          }
        }
        static invalid(reason, explanation = null) {
          if (!reason) {
            throw new InvalidArgumentError("need to specify a reason the Duration is invalid");
          }
          const invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);
          if (Settings.throwOnInvalid) {
            throw new InvalidDurationError(invalid);
          } else {
            return new Duration({
              invalid
            });
          }
        }
        static normalizeUnit(unit) {
          const normalized = {
            year: "years",
            years: "years",
            quarter: "quarters",
            quarters: "quarters",
            month: "months",
            months: "months",
            week: "weeks",
            weeks: "weeks",
            day: "days",
            days: "days",
            hour: "hours",
            hours: "hours",
            minute: "minutes",
            minutes: "minutes",
            second: "seconds",
            seconds: "seconds",
            millisecond: "milliseconds",
            milliseconds: "milliseconds"
          }[unit ? unit.toLowerCase() : unit];
          if (!normalized)
            throw new InvalidUnitError(unit);
          return normalized;
        }
        static isDuration(o) {
          return o && o.isLuxonDuration || false;
        }
        get locale() {
          return this.isValid ? this.loc.locale : null;
        }
        get numberingSystem() {
          return this.isValid ? this.loc.numberingSystem : null;
        }
        toFormat(fmt, opts = {}) {
          const fmtOpts = {
            ...opts,
            floor: opts.round !== false && opts.floor !== false
          };
          return this.isValid ? Formatter.create(this.loc, fmtOpts).formatDurationFromString(this, fmt) : INVALID$2;
        }
        toHuman(opts = {}) {
          const l2 = orderedUnits$1.map((unit) => {
            const val = this.values[unit];
            if (isUndefined(val)) {
              return null;
            }
            return this.loc.numberFormatter({
              style: "unit",
              unitDisplay: "long",
              ...opts,
              unit: unit.slice(0, -1)
            }).format(val);
          }).filter((n2) => n2);
          return this.loc.listFormatter({
            type: "conjunction",
            style: opts.listStyle || "narrow",
            ...opts
          }).format(l2);
        }
        toObject() {
          if (!this.isValid)
            return {};
          return {
            ...this.values
          };
        }
        toISO() {
          if (!this.isValid)
            return null;
          let s2 = "P";
          if (this.years !== 0)
            s2 += this.years + "Y";
          if (this.months !== 0 || this.quarters !== 0)
            s2 += this.months + this.quarters * 3 + "M";
          if (this.weeks !== 0)
            s2 += this.weeks + "W";
          if (this.days !== 0)
            s2 += this.days + "D";
          if (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0)
            s2 += "T";
          if (this.hours !== 0)
            s2 += this.hours + "H";
          if (this.minutes !== 0)
            s2 += this.minutes + "M";
          if (this.seconds !== 0 || this.milliseconds !== 0)
            s2 += roundTo(this.seconds + this.milliseconds / 1e3, 3) + "S";
          if (s2 === "P")
            s2 += "T0S";
          return s2;
        }
        toISOTime(opts = {}) {
          if (!this.isValid)
            return null;
          const millis = this.toMillis();
          if (millis < 0 || millis >= 864e5)
            return null;
          opts = {
            suppressMilliseconds: false,
            suppressSeconds: false,
            includePrefix: false,
            format: "extended",
            ...opts
          };
          const value = this.shiftTo("hours", "minutes", "seconds", "milliseconds");
          let fmt = opts.format === "basic" ? "hhmm" : "hh:mm";
          if (!opts.suppressSeconds || value.seconds !== 0 || value.milliseconds !== 0) {
            fmt += opts.format === "basic" ? "ss" : ":ss";
            if (!opts.suppressMilliseconds || value.milliseconds !== 0) {
              fmt += ".SSS";
            }
          }
          let str = value.toFormat(fmt);
          if (opts.includePrefix) {
            str = "T" + str;
          }
          return str;
        }
        toJSON() {
          return this.toISO();
        }
        toString() {
          return this.toISO();
        }
        toMillis() {
          return this.as("milliseconds");
        }
        valueOf() {
          return this.toMillis();
        }
        plus(duration) {
          if (!this.isValid)
            return this;
          const dur = Duration.fromDurationLike(duration), result = {};
          for (const k of orderedUnits$1) {
            if (hasOwnProperty(dur.values, k) || hasOwnProperty(this.values, k)) {
              result[k] = dur.get(k) + this.get(k);
            }
          }
          return clone$1(this, {
            values: result
          }, true);
        }
        minus(duration) {
          if (!this.isValid)
            return this;
          const dur = Duration.fromDurationLike(duration);
          return this.plus(dur.negate());
        }
        mapUnits(fn) {
          if (!this.isValid)
            return this;
          const result = {};
          for (const k of Object.keys(this.values)) {
            result[k] = asNumber(fn(this.values[k], k));
          }
          return clone$1(this, {
            values: result
          }, true);
        }
        get(unit) {
          return this[Duration.normalizeUnit(unit)];
        }
        set(values) {
          if (!this.isValid)
            return this;
          const mixed = {
            ...this.values,
            ...normalizeObject(values, Duration.normalizeUnit)
          };
          return clone$1(this, {
            values: mixed
          });
        }
        reconfigure({
          locale,
          numberingSystem,
          conversionAccuracy,
          matrix
        } = {}) {
          const loc = this.loc.clone({
            locale,
            numberingSystem
          });
          const opts = {
            loc,
            matrix,
            conversionAccuracy
          };
          return clone$1(this, opts);
        }
        as(unit) {
          return this.isValid ? this.shiftTo(unit).get(unit) : NaN;
        }
        normalize() {
          if (!this.isValid)
            return this;
          const vals = this.toObject();
          normalizeValues(this.matrix, vals);
          return clone$1(this, {
            values: vals
          }, true);
        }
        rescale() {
          if (!this.isValid)
            return this;
          const vals = removeZeroes(this.normalize().shiftToAll().toObject());
          return clone$1(this, {
            values: vals
          }, true);
        }
        shiftTo(...units) {
          if (!this.isValid)
            return this;
          if (units.length === 0) {
            return this;
          }
          units = units.map((u) => Duration.normalizeUnit(u));
          const built = {}, accumulated = {}, vals = this.toObject();
          let lastUnit;
          for (const k of orderedUnits$1) {
            if (units.indexOf(k) >= 0) {
              lastUnit = k;
              let own = 0;
              for (const ak in accumulated) {
                own += this.matrix[ak][k] * accumulated[ak];
                accumulated[ak] = 0;
              }
              if (isNumber(vals[k])) {
                own += vals[k];
              }
              const i = Math.trunc(own);
              built[k] = i;
              accumulated[k] = (own * 1e3 - i * 1e3) / 1e3;
              for (const down in vals) {
                if (orderedUnits$1.indexOf(down) > orderedUnits$1.indexOf(k)) {
                  convert(this.matrix, vals, down, built, k);
                }
              }
            } else if (isNumber(vals[k])) {
              accumulated[k] = vals[k];
            }
          }
          for (const key in accumulated) {
            if (accumulated[key] !== 0) {
              built[lastUnit] += key === lastUnit ? accumulated[key] : accumulated[key] / this.matrix[lastUnit][key];
            }
          }
          return clone$1(this, {
            values: built
          }, true).normalize();
        }
        shiftToAll() {
          if (!this.isValid)
            return this;
          return this.shiftTo("years", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds");
        }
        negate() {
          if (!this.isValid)
            return this;
          const negated = {};
          for (const k of Object.keys(this.values)) {
            negated[k] = this.values[k] === 0 ? 0 : -this.values[k];
          }
          return clone$1(this, {
            values: negated
          }, true);
        }
        get years() {
          return this.isValid ? this.values.years || 0 : NaN;
        }
        get quarters() {
          return this.isValid ? this.values.quarters || 0 : NaN;
        }
        get months() {
          return this.isValid ? this.values.months || 0 : NaN;
        }
        get weeks() {
          return this.isValid ? this.values.weeks || 0 : NaN;
        }
        get days() {
          return this.isValid ? this.values.days || 0 : NaN;
        }
        get hours() {
          return this.isValid ? this.values.hours || 0 : NaN;
        }
        get minutes() {
          return this.isValid ? this.values.minutes || 0 : NaN;
        }
        get seconds() {
          return this.isValid ? this.values.seconds || 0 : NaN;
        }
        get milliseconds() {
          return this.isValid ? this.values.milliseconds || 0 : NaN;
        }
        get isValid() {
          return this.invalid === null;
        }
        get invalidReason() {
          return this.invalid ? this.invalid.reason : null;
        }
        get invalidExplanation() {
          return this.invalid ? this.invalid.explanation : null;
        }
        equals(other) {
          if (!this.isValid || !other.isValid) {
            return false;
          }
          if (!this.loc.equals(other.loc)) {
            return false;
          }
          function eq(v1, v2) {
            if (v1 === void 0 || v1 === 0)
              return v2 === void 0 || v2 === 0;
            return v1 === v2;
          }
          for (const u of orderedUnits$1) {
            if (!eq(this.values[u], other.values[u])) {
              return false;
            }
          }
          return true;
        }
      };
      var INVALID$1 = "Invalid Interval";
      function validateStartEnd(start, end) {
        if (!start || !start.isValid) {
          return Interval.invalid("missing or invalid start");
        } else if (!end || !end.isValid) {
          return Interval.invalid("missing or invalid end");
        } else if (end < start) {
          return Interval.invalid("end before start", `The end of an interval must be after its start, but you had start=${start.toISO()} and end=${end.toISO()}`);
        } else {
          return null;
        }
      }
      var Interval = class {
        constructor(config) {
          this.s = config.start;
          this.e = config.end;
          this.invalid = config.invalid || null;
          this.isLuxonInterval = true;
        }
        static invalid(reason, explanation = null) {
          if (!reason) {
            throw new InvalidArgumentError("need to specify a reason the Interval is invalid");
          }
          const invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);
          if (Settings.throwOnInvalid) {
            throw new InvalidIntervalError(invalid);
          } else {
            return new Interval({
              invalid
            });
          }
        }
        static fromDateTimes(start, end) {
          const builtStart = friendlyDateTime(start), builtEnd = friendlyDateTime(end);
          const validateError = validateStartEnd(builtStart, builtEnd);
          if (validateError == null) {
            return new Interval({
              start: builtStart,
              end: builtEnd
            });
          } else {
            return validateError;
          }
        }
        static after(start, duration) {
          const dur = Duration.fromDurationLike(duration), dt = friendlyDateTime(start);
          return Interval.fromDateTimes(dt, dt.plus(dur));
        }
        static before(end, duration) {
          const dur = Duration.fromDurationLike(duration), dt = friendlyDateTime(end);
          return Interval.fromDateTimes(dt.minus(dur), dt);
        }
        static fromISO(text, opts) {
          const [s2, e] = (text || "").split("/", 2);
          if (s2 && e) {
            let start, startIsValid;
            try {
              start = DateTime.fromISO(s2, opts);
              startIsValid = start.isValid;
            } catch (e2) {
              startIsValid = false;
            }
            let end, endIsValid;
            try {
              end = DateTime.fromISO(e, opts);
              endIsValid = end.isValid;
            } catch (e2) {
              endIsValid = false;
            }
            if (startIsValid && endIsValid) {
              return Interval.fromDateTimes(start, end);
            }
            if (startIsValid) {
              const dur = Duration.fromISO(e, opts);
              if (dur.isValid) {
                return Interval.after(start, dur);
              }
            } else if (endIsValid) {
              const dur = Duration.fromISO(s2, opts);
              if (dur.isValid) {
                return Interval.before(end, dur);
              }
            }
          }
          return Interval.invalid("unparsable", `the input "${text}" can't be parsed as ISO 8601`);
        }
        static isInterval(o) {
          return o && o.isLuxonInterval || false;
        }
        get start() {
          return this.isValid ? this.s : null;
        }
        get end() {
          return this.isValid ? this.e : null;
        }
        get isValid() {
          return this.invalidReason === null;
        }
        get invalidReason() {
          return this.invalid ? this.invalid.reason : null;
        }
        get invalidExplanation() {
          return this.invalid ? this.invalid.explanation : null;
        }
        length(unit = "milliseconds") {
          return this.isValid ? this.toDuration(...[unit]).get(unit) : NaN;
        }
        count(unit = "milliseconds") {
          if (!this.isValid)
            return NaN;
          const start = this.start.startOf(unit), end = this.end.startOf(unit);
          return Math.floor(end.diff(start, unit).get(unit)) + 1;
        }
        hasSame(unit) {
          return this.isValid ? this.isEmpty() || this.e.minus(1).hasSame(this.s, unit) : false;
        }
        isEmpty() {
          return this.s.valueOf() === this.e.valueOf();
        }
        isAfter(dateTime) {
          if (!this.isValid)
            return false;
          return this.s > dateTime;
        }
        isBefore(dateTime) {
          if (!this.isValid)
            return false;
          return this.e <= dateTime;
        }
        contains(dateTime) {
          if (!this.isValid)
            return false;
          return this.s <= dateTime && this.e > dateTime;
        }
        set({
          start,
          end
        } = {}) {
          if (!this.isValid)
            return this;
          return Interval.fromDateTimes(start || this.s, end || this.e);
        }
        splitAt(...dateTimes) {
          if (!this.isValid)
            return [];
          const sorted = dateTimes.map(friendlyDateTime).filter((d) => this.contains(d)).sort(), results = [];
          let {
            s: s2
          } = this, i = 0;
          while (s2 < this.e) {
            const added = sorted[i] || this.e, next = +added > +this.e ? this.e : added;
            results.push(Interval.fromDateTimes(s2, next));
            s2 = next;
            i += 1;
          }
          return results;
        }
        splitBy(duration) {
          const dur = Duration.fromDurationLike(duration);
          if (!this.isValid || !dur.isValid || dur.as("milliseconds") === 0) {
            return [];
          }
          let {
            s: s2
          } = this, idx = 1, next;
          const results = [];
          while (s2 < this.e) {
            const added = this.start.plus(dur.mapUnits((x) => x * idx));
            next = +added > +this.e ? this.e : added;
            results.push(Interval.fromDateTimes(s2, next));
            s2 = next;
            idx += 1;
          }
          return results;
        }
        divideEqually(numberOfParts) {
          if (!this.isValid)
            return [];
          return this.splitBy(this.length() / numberOfParts).slice(0, numberOfParts);
        }
        overlaps(other) {
          return this.e > other.s && this.s < other.e;
        }
        abutsStart(other) {
          if (!this.isValid)
            return false;
          return +this.e === +other.s;
        }
        abutsEnd(other) {
          if (!this.isValid)
            return false;
          return +other.e === +this.s;
        }
        engulfs(other) {
          if (!this.isValid)
            return false;
          return this.s <= other.s && this.e >= other.e;
        }
        equals(other) {
          if (!this.isValid || !other.isValid) {
            return false;
          }
          return this.s.equals(other.s) && this.e.equals(other.e);
        }
        intersection(other) {
          if (!this.isValid)
            return this;
          const s2 = this.s > other.s ? this.s : other.s, e = this.e < other.e ? this.e : other.e;
          if (s2 >= e) {
            return null;
          } else {
            return Interval.fromDateTimes(s2, e);
          }
        }
        union(other) {
          if (!this.isValid)
            return this;
          const s2 = this.s < other.s ? this.s : other.s, e = this.e > other.e ? this.e : other.e;
          return Interval.fromDateTimes(s2, e);
        }
        static merge(intervals) {
          const [found, final] = intervals.sort((a, b) => a.s - b.s).reduce(([sofar, current], item) => {
            if (!current) {
              return [sofar, item];
            } else if (current.overlaps(item) || current.abutsStart(item)) {
              return [sofar, current.union(item)];
            } else {
              return [sofar.concat([current]), item];
            }
          }, [[], null]);
          if (final) {
            found.push(final);
          }
          return found;
        }
        static xor(intervals) {
          let start = null, currentCount = 0;
          const results = [], ends = intervals.map((i) => [{
            time: i.s,
            type: "s"
          }, {
            time: i.e,
            type: "e"
          }]), flattened = Array.prototype.concat(...ends), arr = flattened.sort((a, b) => a.time - b.time);
          for (const i of arr) {
            currentCount += i.type === "s" ? 1 : -1;
            if (currentCount === 1) {
              start = i.time;
            } else {
              if (start && +start !== +i.time) {
                results.push(Interval.fromDateTimes(start, i.time));
              }
              start = null;
            }
          }
          return Interval.merge(results);
        }
        difference(...intervals) {
          return Interval.xor([this].concat(intervals)).map((i) => this.intersection(i)).filter((i) => i && !i.isEmpty());
        }
        toString() {
          if (!this.isValid)
            return INVALID$1;
          return `[${this.s.toISO()} \u2013 ${this.e.toISO()})`;
        }
        toLocaleString(formatOpts = DATE_SHORT, opts = {}) {
          return this.isValid ? Formatter.create(this.s.loc.clone(opts), formatOpts).formatInterval(this) : INVALID$1;
        }
        toISO(opts) {
          if (!this.isValid)
            return INVALID$1;
          return `${this.s.toISO(opts)}/${this.e.toISO(opts)}`;
        }
        toISODate() {
          if (!this.isValid)
            return INVALID$1;
          return `${this.s.toISODate()}/${this.e.toISODate()}`;
        }
        toISOTime(opts) {
          if (!this.isValid)
            return INVALID$1;
          return `${this.s.toISOTime(opts)}/${this.e.toISOTime(opts)}`;
        }
        toFormat(dateFormat, {
          separator = " \u2013 "
        } = {}) {
          if (!this.isValid)
            return INVALID$1;
          return `${this.s.toFormat(dateFormat)}${separator}${this.e.toFormat(dateFormat)}`;
        }
        toDuration(unit, opts) {
          if (!this.isValid) {
            return Duration.invalid(this.invalidReason);
          }
          return this.e.diff(this.s, unit, opts);
        }
        mapEndpoints(mapFn) {
          return Interval.fromDateTimes(mapFn(this.s), mapFn(this.e));
        }
      };
      var Info = class {
        static hasDST(zone = Settings.defaultZone) {
          const proto = DateTime.now().setZone(zone).set({
            month: 12
          });
          return !zone.isUniversal && proto.offset !== proto.set({
            month: 6
          }).offset;
        }
        static isValidIANAZone(zone) {
          return IANAZone.isValidZone(zone);
        }
        static normalizeZone(input) {
          return normalizeZone(input, Settings.defaultZone);
        }
        static months(length = "long", {
          locale = null,
          numberingSystem = null,
          locObj = null,
          outputCalendar = "gregory"
        } = {}) {
          return (locObj || Locale.create(locale, numberingSystem, outputCalendar)).months(length);
        }
        static monthsFormat(length = "long", {
          locale = null,
          numberingSystem = null,
          locObj = null,
          outputCalendar = "gregory"
        } = {}) {
          return (locObj || Locale.create(locale, numberingSystem, outputCalendar)).months(length, true);
        }
        static weekdays(length = "long", {
          locale = null,
          numberingSystem = null,
          locObj = null
        } = {}) {
          return (locObj || Locale.create(locale, numberingSystem, null)).weekdays(length);
        }
        static weekdaysFormat(length = "long", {
          locale = null,
          numberingSystem = null,
          locObj = null
        } = {}) {
          return (locObj || Locale.create(locale, numberingSystem, null)).weekdays(length, true);
        }
        static meridiems({
          locale = null
        } = {}) {
          return Locale.create(locale).meridiems();
        }
        static eras(length = "short", {
          locale = null
        } = {}) {
          return Locale.create(locale, null, "gregory").eras(length);
        }
        static features() {
          return {
            relative: hasRelative()
          };
        }
      };
      function dayDiff(earlier, later) {
        const utcDayStart = (dt) => dt.toUTC(0, {
          keepLocalTime: true
        }).startOf("day").valueOf(), ms = utcDayStart(later) - utcDayStart(earlier);
        return Math.floor(Duration.fromMillis(ms).as("days"));
      }
      function highOrderDiffs(cursor, later, units) {
        const differs = [["years", (a, b) => b.year - a.year], ["quarters", (a, b) => b.quarter - a.quarter + (b.year - a.year) * 4], ["months", (a, b) => b.month - a.month + (b.year - a.year) * 12], ["weeks", (a, b) => {
          const days = dayDiff(a, b);
          return (days - days % 7) / 7;
        }], ["days", dayDiff]];
        const results = {};
        const earlier = cursor;
        let lowestOrder, highWater;
        for (const [unit, differ] of differs) {
          if (units.indexOf(unit) >= 0) {
            lowestOrder = unit;
            results[unit] = differ(cursor, later);
            highWater = earlier.plus(results);
            if (highWater > later) {
              results[unit]--;
              cursor = earlier.plus(results);
            } else {
              cursor = highWater;
            }
          }
        }
        return [cursor, results, highWater, lowestOrder];
      }
      function diff(earlier, later, units, opts) {
        let [cursor, results, highWater, lowestOrder] = highOrderDiffs(earlier, later, units);
        const remainingMillis = later - cursor;
        const lowerOrderUnits = units.filter((u) => ["hours", "minutes", "seconds", "milliseconds"].indexOf(u) >= 0);
        if (lowerOrderUnits.length === 0) {
          if (highWater < later) {
            highWater = cursor.plus({
              [lowestOrder]: 1
            });
          }
          if (highWater !== cursor) {
            results[lowestOrder] = (results[lowestOrder] || 0) + remainingMillis / (highWater - cursor);
          }
        }
        const duration = Duration.fromObject(results, opts);
        if (lowerOrderUnits.length > 0) {
          return Duration.fromMillis(remainingMillis, opts).shiftTo(...lowerOrderUnits).plus(duration);
        } else {
          return duration;
        }
      }
      var numberingSystems = {
        arab: "[\u0660-\u0669]",
        arabext: "[\u06F0-\u06F9]",
        bali: "[\u1B50-\u1B59]",
        beng: "[\u09E6-\u09EF]",
        deva: "[\u0966-\u096F]",
        fullwide: "[\uFF10-\uFF19]",
        gujr: "[\u0AE6-\u0AEF]",
        hanidec: "[\u3007|\u4E00|\u4E8C|\u4E09|\u56DB|\u4E94|\u516D|\u4E03|\u516B|\u4E5D]",
        khmr: "[\u17E0-\u17E9]",
        knda: "[\u0CE6-\u0CEF]",
        laoo: "[\u0ED0-\u0ED9]",
        limb: "[\u1946-\u194F]",
        mlym: "[\u0D66-\u0D6F]",
        mong: "[\u1810-\u1819]",
        mymr: "[\u1040-\u1049]",
        orya: "[\u0B66-\u0B6F]",
        tamldec: "[\u0BE6-\u0BEF]",
        telu: "[\u0C66-\u0C6F]",
        thai: "[\u0E50-\u0E59]",
        tibt: "[\u0F20-\u0F29]",
        latn: "\\d"
      };
      var numberingSystemsUTF16 = {
        arab: [1632, 1641],
        arabext: [1776, 1785],
        bali: [6992, 7001],
        beng: [2534, 2543],
        deva: [2406, 2415],
        fullwide: [65296, 65303],
        gujr: [2790, 2799],
        khmr: [6112, 6121],
        knda: [3302, 3311],
        laoo: [3792, 3801],
        limb: [6470, 6479],
        mlym: [3430, 3439],
        mong: [6160, 6169],
        mymr: [4160, 4169],
        orya: [2918, 2927],
        tamldec: [3046, 3055],
        telu: [3174, 3183],
        thai: [3664, 3673],
        tibt: [3872, 3881]
      };
      var hanidecChars = numberingSystems.hanidec.replace(/[\[|\]]/g, "").split("");
      function parseDigits(str) {
        let value = parseInt(str, 10);
        if (isNaN(value)) {
          value = "";
          for (let i = 0; i < str.length; i++) {
            const code = str.charCodeAt(i);
            if (str[i].search(numberingSystems.hanidec) !== -1) {
              value += hanidecChars.indexOf(str[i]);
            } else {
              for (const key in numberingSystemsUTF16) {
                const [min, max] = numberingSystemsUTF16[key];
                if (code >= min && code <= max) {
                  value += code - min;
                }
              }
            }
          }
          return parseInt(value, 10);
        } else {
          return value;
        }
      }
      function digitRegex({
        numberingSystem
      }, append = "") {
        return new RegExp(`${numberingSystems[numberingSystem || "latn"]}${append}`);
      }
      var MISSING_FTP = "missing Intl.DateTimeFormat.formatToParts support";
      function intUnit(regex, post = (i) => i) {
        return {
          regex,
          deser: ([s2]) => post(parseDigits(s2))
        };
      }
      var NBSP = String.fromCharCode(160);
      var spaceOrNBSP = `[ ${NBSP}]`;
      var spaceOrNBSPRegExp = new RegExp(spaceOrNBSP, "g");
      function fixListRegex(s2) {
        return s2.replace(/\./g, "\\.?").replace(spaceOrNBSPRegExp, spaceOrNBSP);
      }
      function stripInsensitivities(s2) {
        return s2.replace(/\./g, "").replace(spaceOrNBSPRegExp, " ").toLowerCase();
      }
      function oneOf(strings, startIndex) {
        if (strings === null) {
          return null;
        } else {
          return {
            regex: RegExp(strings.map(fixListRegex).join("|")),
            deser: ([s2]) => strings.findIndex((i) => stripInsensitivities(s2) === stripInsensitivities(i)) + startIndex
          };
        }
      }
      function offset(regex, groups) {
        return {
          regex,
          deser: ([, h, m]) => signedOffset(h, m),
          groups
        };
      }
      function simple(regex) {
        return {
          regex,
          deser: ([s2]) => s2
        };
      }
      function escapeToken(value) {
        return value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
      }
      function unitForToken(token, loc) {
        const one = digitRegex(loc), two = digitRegex(loc, "{2}"), three = digitRegex(loc, "{3}"), four = digitRegex(loc, "{4}"), six = digitRegex(loc, "{6}"), oneOrTwo = digitRegex(loc, "{1,2}"), oneToThree = digitRegex(loc, "{1,3}"), oneToSix = digitRegex(loc, "{1,6}"), oneToNine = digitRegex(loc, "{1,9}"), twoToFour = digitRegex(loc, "{2,4}"), fourToSix = digitRegex(loc, "{4,6}"), literal = (t) => ({
          regex: RegExp(escapeToken(t.val)),
          deser: ([s2]) => s2,
          literal: true
        }), unitate = (t) => {
          if (token.literal) {
            return literal(t);
          }
          switch (t.val) {
            case "G":
              return oneOf(loc.eras("short", false), 0);
            case "GG":
              return oneOf(loc.eras("long", false), 0);
            case "y":
              return intUnit(oneToSix);
            case "yy":
              return intUnit(twoToFour, untruncateYear);
            case "yyyy":
              return intUnit(four);
            case "yyyyy":
              return intUnit(fourToSix);
            case "yyyyyy":
              return intUnit(six);
            case "M":
              return intUnit(oneOrTwo);
            case "MM":
              return intUnit(two);
            case "MMM":
              return oneOf(loc.months("short", true, false), 1);
            case "MMMM":
              return oneOf(loc.months("long", true, false), 1);
            case "L":
              return intUnit(oneOrTwo);
            case "LL":
              return intUnit(two);
            case "LLL":
              return oneOf(loc.months("short", false, false), 1);
            case "LLLL":
              return oneOf(loc.months("long", false, false), 1);
            case "d":
              return intUnit(oneOrTwo);
            case "dd":
              return intUnit(two);
            case "o":
              return intUnit(oneToThree);
            case "ooo":
              return intUnit(three);
            case "HH":
              return intUnit(two);
            case "H":
              return intUnit(oneOrTwo);
            case "hh":
              return intUnit(two);
            case "h":
              return intUnit(oneOrTwo);
            case "mm":
              return intUnit(two);
            case "m":
              return intUnit(oneOrTwo);
            case "q":
              return intUnit(oneOrTwo);
            case "qq":
              return intUnit(two);
            case "s":
              return intUnit(oneOrTwo);
            case "ss":
              return intUnit(two);
            case "S":
              return intUnit(oneToThree);
            case "SSS":
              return intUnit(three);
            case "u":
              return simple(oneToNine);
            case "uu":
              return simple(oneOrTwo);
            case "uuu":
              return intUnit(one);
            case "a":
              return oneOf(loc.meridiems(), 0);
            case "kkkk":
              return intUnit(four);
            case "kk":
              return intUnit(twoToFour, untruncateYear);
            case "W":
              return intUnit(oneOrTwo);
            case "WW":
              return intUnit(two);
            case "E":
            case "c":
              return intUnit(one);
            case "EEE":
              return oneOf(loc.weekdays("short", false, false), 1);
            case "EEEE":
              return oneOf(loc.weekdays("long", false, false), 1);
            case "ccc":
              return oneOf(loc.weekdays("short", true, false), 1);
            case "cccc":
              return oneOf(loc.weekdays("long", true, false), 1);
            case "Z":
            case "ZZ":
              return offset(new RegExp(`([+-]${oneOrTwo.source})(?::(${two.source}))?`), 2);
            case "ZZZ":
              return offset(new RegExp(`([+-]${oneOrTwo.source})(${two.source})?`), 2);
            case "z":
              return simple(/[a-z_+-/]{1,256}?/i);
            default:
              return literal(t);
          }
        };
        const unit = unitate(token) || {
          invalidReason: MISSING_FTP
        };
        unit.token = token;
        return unit;
      }
      var partTypeStyleToTokenVal = {
        year: {
          "2-digit": "yy",
          numeric: "yyyyy"
        },
        month: {
          numeric: "M",
          "2-digit": "MM",
          short: "MMM",
          long: "MMMM"
        },
        day: {
          numeric: "d",
          "2-digit": "dd"
        },
        weekday: {
          short: "EEE",
          long: "EEEE"
        },
        dayperiod: "a",
        dayPeriod: "a",
        hour: {
          numeric: "h",
          "2-digit": "hh"
        },
        minute: {
          numeric: "m",
          "2-digit": "mm"
        },
        second: {
          numeric: "s",
          "2-digit": "ss"
        },
        timeZoneName: {
          long: "ZZZZZ",
          short: "ZZZ"
        }
      };
      function tokenForPart(part, formatOpts) {
        const {
          type,
          value
        } = part;
        if (type === "literal") {
          return {
            literal: true,
            val: value
          };
        }
        const style = formatOpts[type];
        let val = partTypeStyleToTokenVal[type];
        if (typeof val === "object") {
          val = val[style];
        }
        if (val) {
          return {
            literal: false,
            val
          };
        }
        return void 0;
      }
      function buildRegex(units) {
        const re = units.map((u) => u.regex).reduce((f, r) => `${f}(${r.source})`, "");
        return [`^${re}$`, units];
      }
      function match(input, regex, handlers) {
        const matches = input.match(regex);
        if (matches) {
          const all = {};
          let matchIndex = 1;
          for (const i in handlers) {
            if (hasOwnProperty(handlers, i)) {
              const h = handlers[i], groups = h.groups ? h.groups + 1 : 1;
              if (!h.literal && h.token) {
                all[h.token.val[0]] = h.deser(matches.slice(matchIndex, matchIndex + groups));
              }
              matchIndex += groups;
            }
          }
          return [matches, all];
        } else {
          return [matches, {}];
        }
      }
      function dateTimeFromMatches(matches) {
        const toField = (token) => {
          switch (token) {
            case "S":
              return "millisecond";
            case "s":
              return "second";
            case "m":
              return "minute";
            case "h":
            case "H":
              return "hour";
            case "d":
              return "day";
            case "o":
              return "ordinal";
            case "L":
            case "M":
              return "month";
            case "y":
              return "year";
            case "E":
            case "c":
              return "weekday";
            case "W":
              return "weekNumber";
            case "k":
              return "weekYear";
            case "q":
              return "quarter";
            default:
              return null;
          }
        };
        let zone = null;
        let specificOffset;
        if (!isUndefined(matches.z)) {
          zone = IANAZone.create(matches.z);
        }
        if (!isUndefined(matches.Z)) {
          if (!zone) {
            zone = new FixedOffsetZone(matches.Z);
          }
          specificOffset = matches.Z;
        }
        if (!isUndefined(matches.q)) {
          matches.M = (matches.q - 1) * 3 + 1;
        }
        if (!isUndefined(matches.h)) {
          if (matches.h < 12 && matches.a === 1) {
            matches.h += 12;
          } else if (matches.h === 12 && matches.a === 0) {
            matches.h = 0;
          }
        }
        if (matches.G === 0 && matches.y) {
          matches.y = -matches.y;
        }
        if (!isUndefined(matches.u)) {
          matches.S = parseMillis(matches.u);
        }
        const vals = Object.keys(matches).reduce((r, k) => {
          const f = toField(k);
          if (f) {
            r[f] = matches[k];
          }
          return r;
        }, {});
        return [vals, zone, specificOffset];
      }
      var dummyDateTimeCache = null;
      function getDummyDateTime() {
        if (!dummyDateTimeCache) {
          dummyDateTimeCache = DateTime.fromMillis(1555555555555);
        }
        return dummyDateTimeCache;
      }
      function maybeExpandMacroToken(token, locale) {
        if (token.literal) {
          return token;
        }
        const formatOpts = Formatter.macroTokenToFormatOpts(token.val);
        const tokens = formatOptsToTokens(formatOpts, locale);
        if (tokens == null || tokens.includes(void 0)) {
          return token;
        }
        return tokens;
      }
      function expandMacroTokens(tokens, locale) {
        return Array.prototype.concat(...tokens.map((t) => maybeExpandMacroToken(t, locale)));
      }
      function explainFromTokens(locale, input, format) {
        const tokens = expandMacroTokens(Formatter.parseFormat(format), locale), units = tokens.map((t) => unitForToken(t, locale)), disqualifyingUnit = units.find((t) => t.invalidReason);
        if (disqualifyingUnit) {
          return {
            input,
            tokens,
            invalidReason: disqualifyingUnit.invalidReason
          };
        } else {
          const [regexString, handlers] = buildRegex(units), regex = RegExp(regexString, "i"), [rawMatches, matches] = match(input, regex, handlers), [result, zone, specificOffset] = matches ? dateTimeFromMatches(matches) : [null, null, void 0];
          if (hasOwnProperty(matches, "a") && hasOwnProperty(matches, "H")) {
            throw new ConflictingSpecificationError("Can't include meridiem when specifying 24-hour format");
          }
          return {
            input,
            tokens,
            regex,
            rawMatches,
            matches,
            result,
            zone,
            specificOffset
          };
        }
      }
      function parseFromTokens(locale, input, format) {
        const {
          result,
          zone,
          specificOffset,
          invalidReason
        } = explainFromTokens(locale, input, format);
        return [result, zone, specificOffset, invalidReason];
      }
      function formatOptsToTokens(formatOpts, locale) {
        if (!formatOpts) {
          return null;
        }
        const formatter = Formatter.create(locale, formatOpts);
        const parts = formatter.formatDateTimeParts(getDummyDateTime());
        return parts.map((p) => tokenForPart(p, formatOpts));
      }
      var nonLeapLadder = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
      var leapLadder = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
      function unitOutOfRange(unit, value) {
        return new Invalid("unit out of range", `you specified ${value} (of type ${typeof value}) as a ${unit}, which is invalid`);
      }
      function dayOfWeek(year, month, day) {
        const d = new Date(Date.UTC(year, month - 1, day));
        if (year < 100 && year >= 0) {
          d.setUTCFullYear(d.getUTCFullYear() - 1900);
        }
        const js = d.getUTCDay();
        return js === 0 ? 7 : js;
      }
      function computeOrdinal(year, month, day) {
        return day + (isLeapYear(year) ? leapLadder : nonLeapLadder)[month - 1];
      }
      function uncomputeOrdinal(year, ordinal) {
        const table = isLeapYear(year) ? leapLadder : nonLeapLadder, month0 = table.findIndex((i) => i < ordinal), day = ordinal - table[month0];
        return {
          month: month0 + 1,
          day
        };
      }
      function gregorianToWeek(gregObj) {
        const {
          year,
          month,
          day
        } = gregObj, ordinal = computeOrdinal(year, month, day), weekday = dayOfWeek(year, month, day);
        let weekNumber = Math.floor((ordinal - weekday + 10) / 7), weekYear;
        if (weekNumber < 1) {
          weekYear = year - 1;
          weekNumber = weeksInWeekYear(weekYear);
        } else if (weekNumber > weeksInWeekYear(year)) {
          weekYear = year + 1;
          weekNumber = 1;
        } else {
          weekYear = year;
        }
        return {
          weekYear,
          weekNumber,
          weekday,
          ...timeObject(gregObj)
        };
      }
      function weekToGregorian(weekData) {
        const {
          weekYear,
          weekNumber,
          weekday
        } = weekData, weekdayOfJan4 = dayOfWeek(weekYear, 1, 4), yearInDays = daysInYear(weekYear);
        let ordinal = weekNumber * 7 + weekday - weekdayOfJan4 - 3, year;
        if (ordinal < 1) {
          year = weekYear - 1;
          ordinal += daysInYear(year);
        } else if (ordinal > yearInDays) {
          year = weekYear + 1;
          ordinal -= daysInYear(weekYear);
        } else {
          year = weekYear;
        }
        const {
          month,
          day
        } = uncomputeOrdinal(year, ordinal);
        return {
          year,
          month,
          day,
          ...timeObject(weekData)
        };
      }
      function gregorianToOrdinal(gregData) {
        const {
          year,
          month,
          day
        } = gregData;
        const ordinal = computeOrdinal(year, month, day);
        return {
          year,
          ordinal,
          ...timeObject(gregData)
        };
      }
      function ordinalToGregorian(ordinalData) {
        const {
          year,
          ordinal
        } = ordinalData;
        const {
          month,
          day
        } = uncomputeOrdinal(year, ordinal);
        return {
          year,
          month,
          day,
          ...timeObject(ordinalData)
        };
      }
      function hasInvalidWeekData(obj) {
        const validYear = isInteger(obj.weekYear), validWeek = integerBetween(obj.weekNumber, 1, weeksInWeekYear(obj.weekYear)), validWeekday = integerBetween(obj.weekday, 1, 7);
        if (!validYear) {
          return unitOutOfRange("weekYear", obj.weekYear);
        } else if (!validWeek) {
          return unitOutOfRange("week", obj.week);
        } else if (!validWeekday) {
          return unitOutOfRange("weekday", obj.weekday);
        } else
          return false;
      }
      function hasInvalidOrdinalData(obj) {
        const validYear = isInteger(obj.year), validOrdinal = integerBetween(obj.ordinal, 1, daysInYear(obj.year));
        if (!validYear) {
          return unitOutOfRange("year", obj.year);
        } else if (!validOrdinal) {
          return unitOutOfRange("ordinal", obj.ordinal);
        } else
          return false;
      }
      function hasInvalidGregorianData(obj) {
        const validYear = isInteger(obj.year), validMonth = integerBetween(obj.month, 1, 12), validDay = integerBetween(obj.day, 1, daysInMonth(obj.year, obj.month));
        if (!validYear) {
          return unitOutOfRange("year", obj.year);
        } else if (!validMonth) {
          return unitOutOfRange("month", obj.month);
        } else if (!validDay) {
          return unitOutOfRange("day", obj.day);
        } else
          return false;
      }
      function hasInvalidTimeData(obj) {
        const {
          hour,
          minute,
          second,
          millisecond
        } = obj;
        const validHour = integerBetween(hour, 0, 23) || hour === 24 && minute === 0 && second === 0 && millisecond === 0, validMinute = integerBetween(minute, 0, 59), validSecond = integerBetween(second, 0, 59), validMillisecond = integerBetween(millisecond, 0, 999);
        if (!validHour) {
          return unitOutOfRange("hour", hour);
        } else if (!validMinute) {
          return unitOutOfRange("minute", minute);
        } else if (!validSecond) {
          return unitOutOfRange("second", second);
        } else if (!validMillisecond) {
          return unitOutOfRange("millisecond", millisecond);
        } else
          return false;
      }
      var INVALID = "Invalid DateTime";
      var MAX_DATE = 864e13;
      function unsupportedZone(zone) {
        return new Invalid("unsupported zone", `the zone "${zone.name}" is not supported`);
      }
      function possiblyCachedWeekData(dt) {
        if (dt.weekData === null) {
          dt.weekData = gregorianToWeek(dt.c);
        }
        return dt.weekData;
      }
      function clone(inst, alts) {
        const current = {
          ts: inst.ts,
          zone: inst.zone,
          c: inst.c,
          o: inst.o,
          loc: inst.loc,
          invalid: inst.invalid
        };
        return new DateTime({
          ...current,
          ...alts,
          old: current
        });
      }
      function fixOffset(localTS, o, tz) {
        let utcGuess = localTS - o * 60 * 1e3;
        const o2 = tz.offset(utcGuess);
        if (o === o2) {
          return [utcGuess, o];
        }
        utcGuess -= (o2 - o) * 60 * 1e3;
        const o3 = tz.offset(utcGuess);
        if (o2 === o3) {
          return [utcGuess, o2];
        }
        return [localTS - Math.min(o2, o3) * 60 * 1e3, Math.max(o2, o3)];
      }
      function tsToObj(ts, offset2) {
        ts += offset2 * 60 * 1e3;
        const d = new Date(ts);
        return {
          year: d.getUTCFullYear(),
          month: d.getUTCMonth() + 1,
          day: d.getUTCDate(),
          hour: d.getUTCHours(),
          minute: d.getUTCMinutes(),
          second: d.getUTCSeconds(),
          millisecond: d.getUTCMilliseconds()
        };
      }
      function objToTS(obj, offset2, zone) {
        return fixOffset(objToLocalTS(obj), offset2, zone);
      }
      function adjustTime(inst, dur) {
        const oPre = inst.o, year = inst.c.year + Math.trunc(dur.years), month = inst.c.month + Math.trunc(dur.months) + Math.trunc(dur.quarters) * 3, c = {
          ...inst.c,
          year,
          month,
          day: Math.min(inst.c.day, daysInMonth(year, month)) + Math.trunc(dur.days) + Math.trunc(dur.weeks) * 7
        }, millisToAdd = Duration.fromObject({
          years: dur.years - Math.trunc(dur.years),
          quarters: dur.quarters - Math.trunc(dur.quarters),
          months: dur.months - Math.trunc(dur.months),
          weeks: dur.weeks - Math.trunc(dur.weeks),
          days: dur.days - Math.trunc(dur.days),
          hours: dur.hours,
          minutes: dur.minutes,
          seconds: dur.seconds,
          milliseconds: dur.milliseconds
        }).as("milliseconds"), localTS = objToLocalTS(c);
        let [ts, o] = fixOffset(localTS, oPre, inst.zone);
        if (millisToAdd !== 0) {
          ts += millisToAdd;
          o = inst.zone.offset(ts);
        }
        return {
          ts,
          o
        };
      }
      function parseDataToDateTime(parsed, parsedZone, opts, format, text, specificOffset) {
        const {
          setZone,
          zone
        } = opts;
        if (parsed && Object.keys(parsed).length !== 0) {
          const interpretationZone = parsedZone || zone, inst = DateTime.fromObject(parsed, {
            ...opts,
            zone: interpretationZone,
            specificOffset
          });
          return setZone ? inst : inst.setZone(zone);
        } else {
          return DateTime.invalid(new Invalid("unparsable", `the input "${text}" can't be parsed as ${format}`));
        }
      }
      function toTechFormat(dt, format, allowZ = true) {
        return dt.isValid ? Formatter.create(Locale.create("en-US"), {
          allowZ,
          forceSimple: true
        }).formatDateTimeFromString(dt, format) : null;
      }
      function toISODate(o, extended) {
        const longFormat = o.c.year > 9999 || o.c.year < 0;
        let c = "";
        if (longFormat && o.c.year >= 0)
          c += "+";
        c += padStart(o.c.year, longFormat ? 6 : 4);
        if (extended) {
          c += "-";
          c += padStart(o.c.month);
          c += "-";
          c += padStart(o.c.day);
        } else {
          c += padStart(o.c.month);
          c += padStart(o.c.day);
        }
        return c;
      }
      function toISOTime(o, extended, suppressSeconds, suppressMilliseconds, includeOffset, extendedZone) {
        let c = padStart(o.c.hour);
        if (extended) {
          c += ":";
          c += padStart(o.c.minute);
          if (o.c.second !== 0 || !suppressSeconds) {
            c += ":";
          }
        } else {
          c += padStart(o.c.minute);
        }
        if (o.c.second !== 0 || !suppressSeconds) {
          c += padStart(o.c.second);
          if (o.c.millisecond !== 0 || !suppressMilliseconds) {
            c += ".";
            c += padStart(o.c.millisecond, 3);
          }
        }
        if (includeOffset) {
          if (o.isOffsetFixed && o.offset === 0 && !extendedZone) {
            c += "Z";
          } else if (o.o < 0) {
            c += "-";
            c += padStart(Math.trunc(-o.o / 60));
            c += ":";
            c += padStart(Math.trunc(-o.o % 60));
          } else {
            c += "+";
            c += padStart(Math.trunc(o.o / 60));
            c += ":";
            c += padStart(Math.trunc(o.o % 60));
          }
        }
        if (extendedZone) {
          c += "[" + o.zone.ianaName + "]";
        }
        return c;
      }
      var defaultUnitValues = {
        month: 1,
        day: 1,
        hour: 0,
        minute: 0,
        second: 0,
        millisecond: 0
      };
      var defaultWeekUnitValues = {
        weekNumber: 1,
        weekday: 1,
        hour: 0,
        minute: 0,
        second: 0,
        millisecond: 0
      };
      var defaultOrdinalUnitValues = {
        ordinal: 1,
        hour: 0,
        minute: 0,
        second: 0,
        millisecond: 0
      };
      var orderedUnits = ["year", "month", "day", "hour", "minute", "second", "millisecond"];
      var orderedWeekUnits = ["weekYear", "weekNumber", "weekday", "hour", "minute", "second", "millisecond"];
      var orderedOrdinalUnits = ["year", "ordinal", "hour", "minute", "second", "millisecond"];
      function normalizeUnit(unit) {
        const normalized = {
          year: "year",
          years: "year",
          month: "month",
          months: "month",
          day: "day",
          days: "day",
          hour: "hour",
          hours: "hour",
          minute: "minute",
          minutes: "minute",
          quarter: "quarter",
          quarters: "quarter",
          second: "second",
          seconds: "second",
          millisecond: "millisecond",
          milliseconds: "millisecond",
          weekday: "weekday",
          weekdays: "weekday",
          weeknumber: "weekNumber",
          weeksnumber: "weekNumber",
          weeknumbers: "weekNumber",
          weekyear: "weekYear",
          weekyears: "weekYear",
          ordinal: "ordinal"
        }[unit.toLowerCase()];
        if (!normalized)
          throw new InvalidUnitError(unit);
        return normalized;
      }
      function quickDT(obj, opts) {
        const zone = normalizeZone(opts.zone, Settings.defaultZone), loc = Locale.fromObject(opts), tsNow = Settings.now();
        let ts, o;
        if (!isUndefined(obj.year)) {
          for (const u of orderedUnits) {
            if (isUndefined(obj[u])) {
              obj[u] = defaultUnitValues[u];
            }
          }
          const invalid = hasInvalidGregorianData(obj) || hasInvalidTimeData(obj);
          if (invalid) {
            return DateTime.invalid(invalid);
          }
          const offsetProvis = zone.offset(tsNow);
          [ts, o] = objToTS(obj, offsetProvis, zone);
        } else {
          ts = tsNow;
        }
        return new DateTime({
          ts,
          zone,
          loc,
          o
        });
      }
      function diffRelative(start, end, opts) {
        const round = isUndefined(opts.round) ? true : opts.round, format = (c, unit) => {
          c = roundTo(c, round || opts.calendary ? 0 : 2, true);
          const formatter = end.loc.clone(opts).relFormatter(opts);
          return formatter.format(c, unit);
        }, differ = (unit) => {
          if (opts.calendary) {
            if (!end.hasSame(start, unit)) {
              return end.startOf(unit).diff(start.startOf(unit), unit).get(unit);
            } else
              return 0;
          } else {
            return end.diff(start, unit).get(unit);
          }
        };
        if (opts.unit) {
          return format(differ(opts.unit), opts.unit);
        }
        for (const unit of opts.units) {
          const count = differ(unit);
          if (Math.abs(count) >= 1) {
            return format(count, unit);
          }
        }
        return format(start > end ? -0 : 0, opts.units[opts.units.length - 1]);
      }
      function lastOpts(argList) {
        let opts = {}, args;
        if (argList.length > 0 && typeof argList[argList.length - 1] === "object") {
          opts = argList[argList.length - 1];
          args = Array.from(argList).slice(0, argList.length - 1);
        } else {
          args = Array.from(argList);
        }
        return [opts, args];
      }
      var DateTime = class {
        constructor(config) {
          const zone = config.zone || Settings.defaultZone;
          let invalid = config.invalid || (Number.isNaN(config.ts) ? new Invalid("invalid input") : null) || (!zone.isValid ? unsupportedZone(zone) : null);
          this.ts = isUndefined(config.ts) ? Settings.now() : config.ts;
          let c = null, o = null;
          if (!invalid) {
            const unchanged = config.old && config.old.ts === this.ts && config.old.zone.equals(zone);
            if (unchanged) {
              [c, o] = [config.old.c, config.old.o];
            } else {
              const ot = zone.offset(this.ts);
              c = tsToObj(this.ts, ot);
              invalid = Number.isNaN(c.year) ? new Invalid("invalid input") : null;
              c = invalid ? null : c;
              o = invalid ? null : ot;
            }
          }
          this._zone = zone;
          this.loc = config.loc || Locale.create();
          this.invalid = invalid;
          this.weekData = null;
          this.c = c;
          this.o = o;
          this.isLuxonDateTime = true;
        }
        static now() {
          return new DateTime({});
        }
        static local() {
          const [opts, args] = lastOpts(arguments), [year, month, day, hour, minute, second, millisecond] = args;
          return quickDT({
            year,
            month,
            day,
            hour,
            minute,
            second,
            millisecond
          }, opts);
        }
        static utc() {
          const [opts, args] = lastOpts(arguments), [year, month, day, hour, minute, second, millisecond] = args;
          opts.zone = FixedOffsetZone.utcInstance;
          return quickDT({
            year,
            month,
            day,
            hour,
            minute,
            second,
            millisecond
          }, opts);
        }
        static fromJSDate(date, options = {}) {
          const ts = isDate(date) ? date.valueOf() : NaN;
          if (Number.isNaN(ts)) {
            return DateTime.invalid("invalid input");
          }
          const zoneToUse = normalizeZone(options.zone, Settings.defaultZone);
          if (!zoneToUse.isValid) {
            return DateTime.invalid(unsupportedZone(zoneToUse));
          }
          return new DateTime({
            ts,
            zone: zoneToUse,
            loc: Locale.fromObject(options)
          });
        }
        static fromMillis(milliseconds, options = {}) {
          if (!isNumber(milliseconds)) {
            throw new InvalidArgumentError(`fromMillis requires a numerical input, but received a ${typeof milliseconds} with value ${milliseconds}`);
          } else if (milliseconds < -MAX_DATE || milliseconds > MAX_DATE) {
            return DateTime.invalid("Timestamp out of range");
          } else {
            return new DateTime({
              ts: milliseconds,
              zone: normalizeZone(options.zone, Settings.defaultZone),
              loc: Locale.fromObject(options)
            });
          }
        }
        static fromSeconds(seconds, options = {}) {
          if (!isNumber(seconds)) {
            throw new InvalidArgumentError("fromSeconds requires a numerical input");
          } else {
            return new DateTime({
              ts: seconds * 1e3,
              zone: normalizeZone(options.zone, Settings.defaultZone),
              loc: Locale.fromObject(options)
            });
          }
        }
        static fromObject(obj, opts = {}) {
          obj = obj || {};
          const zoneToUse = normalizeZone(opts.zone, Settings.defaultZone);
          if (!zoneToUse.isValid) {
            return DateTime.invalid(unsupportedZone(zoneToUse));
          }
          const tsNow = Settings.now(), offsetProvis = !isUndefined(opts.specificOffset) ? opts.specificOffset : zoneToUse.offset(tsNow), normalized = normalizeObject(obj, normalizeUnit), containsOrdinal = !isUndefined(normalized.ordinal), containsGregorYear = !isUndefined(normalized.year), containsGregorMD = !isUndefined(normalized.month) || !isUndefined(normalized.day), containsGregor = containsGregorYear || containsGregorMD, definiteWeekDef = normalized.weekYear || normalized.weekNumber, loc = Locale.fromObject(opts);
          if ((containsGregor || containsOrdinal) && definiteWeekDef) {
            throw new ConflictingSpecificationError("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
          }
          if (containsGregorMD && containsOrdinal) {
            throw new ConflictingSpecificationError("Can't mix ordinal dates with month/day");
          }
          const useWeekData = definiteWeekDef || normalized.weekday && !containsGregor;
          let units, defaultValues, objNow = tsToObj(tsNow, offsetProvis);
          if (useWeekData) {
            units = orderedWeekUnits;
            defaultValues = defaultWeekUnitValues;
            objNow = gregorianToWeek(objNow);
          } else if (containsOrdinal) {
            units = orderedOrdinalUnits;
            defaultValues = defaultOrdinalUnitValues;
            objNow = gregorianToOrdinal(objNow);
          } else {
            units = orderedUnits;
            defaultValues = defaultUnitValues;
          }
          let foundFirst = false;
          for (const u of units) {
            const v = normalized[u];
            if (!isUndefined(v)) {
              foundFirst = true;
            } else if (foundFirst) {
              normalized[u] = defaultValues[u];
            } else {
              normalized[u] = objNow[u];
            }
          }
          const higherOrderInvalid = useWeekData ? hasInvalidWeekData(normalized) : containsOrdinal ? hasInvalidOrdinalData(normalized) : hasInvalidGregorianData(normalized), invalid = higherOrderInvalid || hasInvalidTimeData(normalized);
          if (invalid) {
            return DateTime.invalid(invalid);
          }
          const gregorian = useWeekData ? weekToGregorian(normalized) : containsOrdinal ? ordinalToGregorian(normalized) : normalized, [tsFinal, offsetFinal] = objToTS(gregorian, offsetProvis, zoneToUse), inst = new DateTime({
            ts: tsFinal,
            zone: zoneToUse,
            o: offsetFinal,
            loc
          });
          if (normalized.weekday && containsGregor && obj.weekday !== inst.weekday) {
            return DateTime.invalid("mismatched weekday", `you can't specify both a weekday of ${normalized.weekday} and a date of ${inst.toISO()}`);
          }
          return inst;
        }
        static fromISO(text, opts = {}) {
          const [vals, parsedZone] = parseISODate(text);
          return parseDataToDateTime(vals, parsedZone, opts, "ISO 8601", text);
        }
        static fromRFC2822(text, opts = {}) {
          const [vals, parsedZone] = parseRFC2822Date(text);
          return parseDataToDateTime(vals, parsedZone, opts, "RFC 2822", text);
        }
        static fromHTTP(text, opts = {}) {
          const [vals, parsedZone] = parseHTTPDate(text);
          return parseDataToDateTime(vals, parsedZone, opts, "HTTP", opts);
        }
        static fromFormat(text, fmt, opts = {}) {
          if (isUndefined(text) || isUndefined(fmt)) {
            throw new InvalidArgumentError("fromFormat requires an input string and a format");
          }
          const {
            locale = null,
            numberingSystem = null
          } = opts, localeToUse = Locale.fromOpts({
            locale,
            numberingSystem,
            defaultToEN: true
          }), [vals, parsedZone, specificOffset, invalid] = parseFromTokens(localeToUse, text, fmt);
          if (invalid) {
            return DateTime.invalid(invalid);
          } else {
            return parseDataToDateTime(vals, parsedZone, opts, `format ${fmt}`, text, specificOffset);
          }
        }
        static fromString(text, fmt, opts = {}) {
          return DateTime.fromFormat(text, fmt, opts);
        }
        static fromSQL(text, opts = {}) {
          const [vals, parsedZone] = parseSQL(text);
          return parseDataToDateTime(vals, parsedZone, opts, "SQL", text);
        }
        static invalid(reason, explanation = null) {
          if (!reason) {
            throw new InvalidArgumentError("need to specify a reason the DateTime is invalid");
          }
          const invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);
          if (Settings.throwOnInvalid) {
            throw new InvalidDateTimeError(invalid);
          } else {
            return new DateTime({
              invalid
            });
          }
        }
        static isDateTime(o) {
          return o && o.isLuxonDateTime || false;
        }
        static parseFormatForOpts(formatOpts, localeOpts = {}) {
          const tokenList = formatOptsToTokens(formatOpts, Locale.fromObject(localeOpts));
          return !tokenList ? null : tokenList.map((t) => t ? t.val : null).join("");
        }
        static expandFormat(fmt, localeOpts = {}) {
          const expanded = expandMacroTokens(Formatter.parseFormat(fmt), Locale.fromObject(localeOpts));
          return expanded.map((t) => t.val).join("");
        }
        get(unit) {
          return this[unit];
        }
        get isValid() {
          return this.invalid === null;
        }
        get invalidReason() {
          return this.invalid ? this.invalid.reason : null;
        }
        get invalidExplanation() {
          return this.invalid ? this.invalid.explanation : null;
        }
        get locale() {
          return this.isValid ? this.loc.locale : null;
        }
        get numberingSystem() {
          return this.isValid ? this.loc.numberingSystem : null;
        }
        get outputCalendar() {
          return this.isValid ? this.loc.outputCalendar : null;
        }
        get zone() {
          return this._zone;
        }
        get zoneName() {
          return this.isValid ? this.zone.name : null;
        }
        get year() {
          return this.isValid ? this.c.year : NaN;
        }
        get quarter() {
          return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
        }
        get month() {
          return this.isValid ? this.c.month : NaN;
        }
        get day() {
          return this.isValid ? this.c.day : NaN;
        }
        get hour() {
          return this.isValid ? this.c.hour : NaN;
        }
        get minute() {
          return this.isValid ? this.c.minute : NaN;
        }
        get second() {
          return this.isValid ? this.c.second : NaN;
        }
        get millisecond() {
          return this.isValid ? this.c.millisecond : NaN;
        }
        get weekYear() {
          return this.isValid ? possiblyCachedWeekData(this).weekYear : NaN;
        }
        get weekNumber() {
          return this.isValid ? possiblyCachedWeekData(this).weekNumber : NaN;
        }
        get weekday() {
          return this.isValid ? possiblyCachedWeekData(this).weekday : NaN;
        }
        get ordinal() {
          return this.isValid ? gregorianToOrdinal(this.c).ordinal : NaN;
        }
        get monthShort() {
          return this.isValid ? Info.months("short", {
            locObj: this.loc
          })[this.month - 1] : null;
        }
        get monthLong() {
          return this.isValid ? Info.months("long", {
            locObj: this.loc
          })[this.month - 1] : null;
        }
        get weekdayShort() {
          return this.isValid ? Info.weekdays("short", {
            locObj: this.loc
          })[this.weekday - 1] : null;
        }
        get weekdayLong() {
          return this.isValid ? Info.weekdays("long", {
            locObj: this.loc
          })[this.weekday - 1] : null;
        }
        get offset() {
          return this.isValid ? +this.o : NaN;
        }
        get offsetNameShort() {
          if (this.isValid) {
            return this.zone.offsetName(this.ts, {
              format: "short",
              locale: this.locale
            });
          } else {
            return null;
          }
        }
        get offsetNameLong() {
          if (this.isValid) {
            return this.zone.offsetName(this.ts, {
              format: "long",
              locale: this.locale
            });
          } else {
            return null;
          }
        }
        get isOffsetFixed() {
          return this.isValid ? this.zone.isUniversal : null;
        }
        get isInDST() {
          if (this.isOffsetFixed) {
            return false;
          } else {
            return this.offset > this.set({
              month: 1,
              day: 1
            }).offset || this.offset > this.set({
              month: 5
            }).offset;
          }
        }
        get isInLeapYear() {
          return isLeapYear(this.year);
        }
        get daysInMonth() {
          return daysInMonth(this.year, this.month);
        }
        get daysInYear() {
          return this.isValid ? daysInYear(this.year) : NaN;
        }
        get weeksInWeekYear() {
          return this.isValid ? weeksInWeekYear(this.weekYear) : NaN;
        }
        resolvedLocaleOptions(opts = {}) {
          const {
            locale,
            numberingSystem,
            calendar
          } = Formatter.create(this.loc.clone(opts), opts).resolvedOptions(this);
          return {
            locale,
            numberingSystem,
            outputCalendar: calendar
          };
        }
        toUTC(offset2 = 0, opts = {}) {
          return this.setZone(FixedOffsetZone.instance(offset2), opts);
        }
        toLocal() {
          return this.setZone(Settings.defaultZone);
        }
        setZone(zone, {
          keepLocalTime = false,
          keepCalendarTime = false
        } = {}) {
          zone = normalizeZone(zone, Settings.defaultZone);
          if (zone.equals(this.zone)) {
            return this;
          } else if (!zone.isValid) {
            return DateTime.invalid(unsupportedZone(zone));
          } else {
            let newTS = this.ts;
            if (keepLocalTime || keepCalendarTime) {
              const offsetGuess = zone.offset(this.ts);
              const asObj = this.toObject();
              [newTS] = objToTS(asObj, offsetGuess, zone);
            }
            return clone(this, {
              ts: newTS,
              zone
            });
          }
        }
        reconfigure({
          locale,
          numberingSystem,
          outputCalendar
        } = {}) {
          const loc = this.loc.clone({
            locale,
            numberingSystem,
            outputCalendar
          });
          return clone(this, {
            loc
          });
        }
        setLocale(locale) {
          return this.reconfigure({
            locale
          });
        }
        set(values) {
          if (!this.isValid)
            return this;
          const normalized = normalizeObject(values, normalizeUnit), settingWeekStuff = !isUndefined(normalized.weekYear) || !isUndefined(normalized.weekNumber) || !isUndefined(normalized.weekday), containsOrdinal = !isUndefined(normalized.ordinal), containsGregorYear = !isUndefined(normalized.year), containsGregorMD = !isUndefined(normalized.month) || !isUndefined(normalized.day), containsGregor = containsGregorYear || containsGregorMD, definiteWeekDef = normalized.weekYear || normalized.weekNumber;
          if ((containsGregor || containsOrdinal) && definiteWeekDef) {
            throw new ConflictingSpecificationError("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
          }
          if (containsGregorMD && containsOrdinal) {
            throw new ConflictingSpecificationError("Can't mix ordinal dates with month/day");
          }
          let mixed;
          if (settingWeekStuff) {
            mixed = weekToGregorian({
              ...gregorianToWeek(this.c),
              ...normalized
            });
          } else if (!isUndefined(normalized.ordinal)) {
            mixed = ordinalToGregorian({
              ...gregorianToOrdinal(this.c),
              ...normalized
            });
          } else {
            mixed = {
              ...this.toObject(),
              ...normalized
            };
            if (isUndefined(normalized.day)) {
              mixed.day = Math.min(daysInMonth(mixed.year, mixed.month), mixed.day);
            }
          }
          const [ts, o] = objToTS(mixed, this.o, this.zone);
          return clone(this, {
            ts,
            o
          });
        }
        plus(duration) {
          if (!this.isValid)
            return this;
          const dur = Duration.fromDurationLike(duration);
          return clone(this, adjustTime(this, dur));
        }
        minus(duration) {
          if (!this.isValid)
            return this;
          const dur = Duration.fromDurationLike(duration).negate();
          return clone(this, adjustTime(this, dur));
        }
        startOf(unit) {
          if (!this.isValid)
            return this;
          const o = {}, normalizedUnit = Duration.normalizeUnit(unit);
          switch (normalizedUnit) {
            case "years":
              o.month = 1;
            case "quarters":
            case "months":
              o.day = 1;
            case "weeks":
            case "days":
              o.hour = 0;
            case "hours":
              o.minute = 0;
            case "minutes":
              o.second = 0;
            case "seconds":
              o.millisecond = 0;
              break;
          }
          if (normalizedUnit === "weeks") {
            o.weekday = 1;
          }
          if (normalizedUnit === "quarters") {
            const q = Math.ceil(this.month / 3);
            o.month = (q - 1) * 3 + 1;
          }
          return this.set(o);
        }
        endOf(unit) {
          return this.isValid ? this.plus({
            [unit]: 1
          }).startOf(unit).minus(1) : this;
        }
        toFormat(fmt, opts = {}) {
          return this.isValid ? Formatter.create(this.loc.redefaultToEN(opts)).formatDateTimeFromString(this, fmt) : INVALID;
        }
        toLocaleString(formatOpts = DATE_SHORT, opts = {}) {
          return this.isValid ? Formatter.create(this.loc.clone(opts), formatOpts).formatDateTime(this) : INVALID;
        }
        toLocaleParts(opts = {}) {
          return this.isValid ? Formatter.create(this.loc.clone(opts), opts).formatDateTimeParts(this) : [];
        }
        toISO({
          format = "extended",
          suppressSeconds = false,
          suppressMilliseconds = false,
          includeOffset = true,
          extendedZone = false
        } = {}) {
          if (!this.isValid) {
            return null;
          }
          const ext = format === "extended";
          let c = toISODate(this, ext);
          c += "T";
          c += toISOTime(this, ext, suppressSeconds, suppressMilliseconds, includeOffset, extendedZone);
          return c;
        }
        toISODate({
          format = "extended"
        } = {}) {
          if (!this.isValid) {
            return null;
          }
          return toISODate(this, format === "extended");
        }
        toISOWeekDate() {
          return toTechFormat(this, "kkkk-'W'WW-c");
        }
        toISOTime({
          suppressMilliseconds = false,
          suppressSeconds = false,
          includeOffset = true,
          includePrefix = false,
          extendedZone = false,
          format = "extended"
        } = {}) {
          if (!this.isValid) {
            return null;
          }
          let c = includePrefix ? "T" : "";
          return c + toISOTime(this, format === "extended", suppressSeconds, suppressMilliseconds, includeOffset, extendedZone);
        }
        toRFC2822() {
          return toTechFormat(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", false);
        }
        toHTTP() {
          return toTechFormat(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
        }
        toSQLDate() {
          if (!this.isValid) {
            return null;
          }
          return toISODate(this, true);
        }
        toSQLTime({
          includeOffset = true,
          includeZone = false,
          includeOffsetSpace = true
        } = {}) {
          let fmt = "HH:mm:ss.SSS";
          if (includeZone || includeOffset) {
            if (includeOffsetSpace) {
              fmt += " ";
            }
            if (includeZone) {
              fmt += "z";
            } else if (includeOffset) {
              fmt += "ZZ";
            }
          }
          return toTechFormat(this, fmt, true);
        }
        toSQL(opts = {}) {
          if (!this.isValid) {
            return null;
          }
          return `${this.toSQLDate()} ${this.toSQLTime(opts)}`;
        }
        toString() {
          return this.isValid ? this.toISO() : INVALID;
        }
        valueOf() {
          return this.toMillis();
        }
        toMillis() {
          return this.isValid ? this.ts : NaN;
        }
        toSeconds() {
          return this.isValid ? this.ts / 1e3 : NaN;
        }
        toUnixInteger() {
          return this.isValid ? Math.floor(this.ts / 1e3) : NaN;
        }
        toJSON() {
          return this.toISO();
        }
        toBSON() {
          return this.toJSDate();
        }
        toObject(opts = {}) {
          if (!this.isValid)
            return {};
          const base = {
            ...this.c
          };
          if (opts.includeConfig) {
            base.outputCalendar = this.outputCalendar;
            base.numberingSystem = this.loc.numberingSystem;
            base.locale = this.loc.locale;
          }
          return base;
        }
        toJSDate() {
          return new Date(this.isValid ? this.ts : NaN);
        }
        diff(otherDateTime, unit = "milliseconds", opts = {}) {
          if (!this.isValid || !otherDateTime.isValid) {
            return Duration.invalid("created by diffing an invalid DateTime");
          }
          const durOpts = {
            locale: this.locale,
            numberingSystem: this.numberingSystem,
            ...opts
          };
          const units = maybeArray(unit).map(Duration.normalizeUnit), otherIsLater = otherDateTime.valueOf() > this.valueOf(), earlier = otherIsLater ? this : otherDateTime, later = otherIsLater ? otherDateTime : this, diffed = diff(earlier, later, units, durOpts);
          return otherIsLater ? diffed.negate() : diffed;
        }
        diffNow(unit = "milliseconds", opts = {}) {
          return this.diff(DateTime.now(), unit, opts);
        }
        until(otherDateTime) {
          return this.isValid ? Interval.fromDateTimes(this, otherDateTime) : this;
        }
        hasSame(otherDateTime, unit) {
          if (!this.isValid)
            return false;
          const inputMs = otherDateTime.valueOf();
          const adjustedToZone = this.setZone(otherDateTime.zone, {
            keepLocalTime: true
          });
          return adjustedToZone.startOf(unit) <= inputMs && inputMs <= adjustedToZone.endOf(unit);
        }
        equals(other) {
          return this.isValid && other.isValid && this.valueOf() === other.valueOf() && this.zone.equals(other.zone) && this.loc.equals(other.loc);
        }
        toRelative(options = {}) {
          if (!this.isValid)
            return null;
          const base = options.base || DateTime.fromObject({}, {
            zone: this.zone
          }), padding = options.padding ? this < base ? -options.padding : options.padding : 0;
          let units = ["years", "months", "days", "hours", "minutes", "seconds"];
          let unit = options.unit;
          if (Array.isArray(options.unit)) {
            units = options.unit;
            unit = void 0;
          }
          return diffRelative(base, this.plus(padding), {
            ...options,
            numeric: "always",
            units,
            unit
          });
        }
        toRelativeCalendar(options = {}) {
          if (!this.isValid)
            return null;
          return diffRelative(options.base || DateTime.fromObject({}, {
            zone: this.zone
          }), this, {
            ...options,
            numeric: "auto",
            units: ["years", "months", "days"],
            calendary: true
          });
        }
        static min(...dateTimes) {
          if (!dateTimes.every(DateTime.isDateTime)) {
            throw new InvalidArgumentError("min requires all arguments be DateTimes");
          }
          return bestBy(dateTimes, (i) => i.valueOf(), Math.min);
        }
        static max(...dateTimes) {
          if (!dateTimes.every(DateTime.isDateTime)) {
            throw new InvalidArgumentError("max requires all arguments be DateTimes");
          }
          return bestBy(dateTimes, (i) => i.valueOf(), Math.max);
        }
        static fromFormatExplain(text, fmt, options = {}) {
          const {
            locale = null,
            numberingSystem = null
          } = options, localeToUse = Locale.fromOpts({
            locale,
            numberingSystem,
            defaultToEN: true
          });
          return explainFromTokens(localeToUse, text, fmt);
        }
        static fromStringExplain(text, fmt, options = {}) {
          return DateTime.fromFormatExplain(text, fmt, options);
        }
        static get DATE_SHORT() {
          return DATE_SHORT;
        }
        static get DATE_MED() {
          return DATE_MED;
        }
        static get DATE_MED_WITH_WEEKDAY() {
          return DATE_MED_WITH_WEEKDAY;
        }
        static get DATE_FULL() {
          return DATE_FULL;
        }
        static get DATE_HUGE() {
          return DATE_HUGE;
        }
        static get TIME_SIMPLE() {
          return TIME_SIMPLE;
        }
        static get TIME_WITH_SECONDS() {
          return TIME_WITH_SECONDS;
        }
        static get TIME_WITH_SHORT_OFFSET() {
          return TIME_WITH_SHORT_OFFSET;
        }
        static get TIME_WITH_LONG_OFFSET() {
          return TIME_WITH_LONG_OFFSET;
        }
        static get TIME_24_SIMPLE() {
          return TIME_24_SIMPLE;
        }
        static get TIME_24_WITH_SECONDS() {
          return TIME_24_WITH_SECONDS;
        }
        static get TIME_24_WITH_SHORT_OFFSET() {
          return TIME_24_WITH_SHORT_OFFSET;
        }
        static get TIME_24_WITH_LONG_OFFSET() {
          return TIME_24_WITH_LONG_OFFSET;
        }
        static get DATETIME_SHORT() {
          return DATETIME_SHORT;
        }
        static get DATETIME_SHORT_WITH_SECONDS() {
          return DATETIME_SHORT_WITH_SECONDS;
        }
        static get DATETIME_MED() {
          return DATETIME_MED;
        }
        static get DATETIME_MED_WITH_SECONDS() {
          return DATETIME_MED_WITH_SECONDS;
        }
        static get DATETIME_MED_WITH_WEEKDAY() {
          return DATETIME_MED_WITH_WEEKDAY;
        }
        static get DATETIME_FULL() {
          return DATETIME_FULL;
        }
        static get DATETIME_FULL_WITH_SECONDS() {
          return DATETIME_FULL_WITH_SECONDS;
        }
        static get DATETIME_HUGE() {
          return DATETIME_HUGE;
        }
        static get DATETIME_HUGE_WITH_SECONDS() {
          return DATETIME_HUGE_WITH_SECONDS;
        }
      };
      function friendlyDateTime(dateTimeish) {
        if (DateTime.isDateTime(dateTimeish)) {
          return dateTimeish;
        } else if (dateTimeish && dateTimeish.valueOf && isNumber(dateTimeish.valueOf())) {
          return DateTime.fromJSDate(dateTimeish);
        } else if (dateTimeish && typeof dateTimeish === "object") {
          return DateTime.fromObject(dateTimeish);
        } else {
          throw new InvalidArgumentError(`Unknown datetime argument: ${dateTimeish}, of type ${typeof dateTimeish}`);
        }
      }
      var VERSION = "3.2.1";
      exports.DateTime = DateTime;
      exports.Duration = Duration;
      exports.FixedOffsetZone = FixedOffsetZone;
      exports.IANAZone = IANAZone;
      exports.Info = Info;
      exports.Interval = Interval;
      exports.InvalidZone = InvalidZone;
      exports.Settings = Settings;
      exports.SystemZone = SystemZone;
      exports.VERSION = VERSION;
      exports.Zone = Zone;
    }
  });

  // ../001.time/dist/001.time/val/time.js
  var require_time = __commonJS({
    "../001.time/dist/001.time/val/time.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.CLOCK = void 0;
      exports.CLOCK = "clock";
    }
  });

  // ../001.time/dist/001.time/00.time.unit/buz/time.buzz.js
  var require_time_buzz = __commonJS({
    "../001.time/dist/001.time/00.time.unit/buz/time.buzz.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.pushTime = exports.reduceTime = exports.compareTime = exports.createTime = exports.readTime = exports.writeTime = exports.nowTime = exports.formatTime = exports.updateTime = exports.initTime = void 0;
      var ActMnu = require_menu_action();
      var ActTme = require_time_action();
      var ActCol = require_collect_action();
      var ActBus = require_bus_action();
      var ActVrt = require_vurt_action();
      var ActDsk = require_disk_action();
      var bit;
      var src;
      var initTime = async (cpy, bal, ste) => {
        bit = await ste.hunt(ActBus.INIT_BUS, { idx: cpy.idx, lst: [ActTme], dat: bal.dat, src: bal.src });
        if (bal.val == 1)
          patch(ste, ActMnu.INIT_MENU, bal);
        if (bal.slv != null)
          bal.slv({ intBit: { idx: "init-time" } });
        return cpy;
      };
      exports.initTime = initTime;
      var updateTime = async (cpy, bal, ste) => {
        process.chdir("../999.vurt");
        bit = await ste.bus(ActVrt.BUNDLE_VURT, { src: "001.time" });
        process.chdir("../001.time");
        bit = await ste.bus(ActDsk.READ_DISK, { src: "./work/001.time.js" });
        var time = bit.dskBit.dat;
        bit = await ste.bus(ActDsk.WRITE_DISK, { src: "../gillisse/public/jsx/001.time.js", dat: time });
        if (bal.slv != null)
          bal.slv({ tmeBit: { idx: "update-time", src: "001.time" } });
        return cpy;
      };
      exports.updateTime = updateTime;
      var formatTime = async (cpy, bal, ste) => {
        if (bal.src == null)
          bal.src = luxon_1.DateTime.now();
        src = luxon_1.DateTime.fromISO(bal.src).toLocaleString(luxon_1.DateTime.DATETIME_FULL);
        if (bal.slv != null)
          bal.slv({ tmeBit: { idx: "format-time", src } });
        return cpy;
      };
      exports.formatTime = formatTime;
      var nowTime = async (cpy, bal, ste) => {
        if (bal.slv != null)
          bal.slv({ tmeBit: { idx: "now-time", val: luxon_1.DateTime.now().toUnixInteger() } });
        return cpy;
      };
      exports.nowTime = nowTime;
      var writeTime = async (cpy, bal, ste) => {
        bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, dat: bal.dat, bit: ActTme.CREATE_TIME });
        if (bal.slv != null)
          bal.slv({ tmeBit: { idx: "write-time", dat: bit.clcBit.dat } });
        return cpy;
      };
      exports.writeTime = writeTime;
      var readTime = async (cpy, bal, ste) => {
        if (bal.idx == null)
          bal.idx = "tme00";
        bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, bit: ActTme.CREATE_TIME });
        if (bal.slv != null)
          bal.slv({ tmeBit: { idx: "read-time", dat: bit.clcBit.dat } });
        return cpy;
      };
      exports.readTime = readTime;
      var createTime = async (cpy, bal, ste) => {
        if (bal.idx == null)
          bal.idx = "tme00";
        if (bal.src == null)
          bal.src = TIME.CLOCK;
        switch (bal.src) {
          case TIME.CLOCK:
            var clk = bal.dat;
            if (clk == null)
              clk = { idx: bal.idx };
            if (clk.idx == null)
              clk.idx = bal.idx;
            if (clk.src == null)
              clk.src = "clk-bit";
            if (clk.val == null)
              clk.val = 0;
            if (clk.pst == null)
              clk.pst = 0;
            if (clk.qtr == null)
              clk.qtr = 0;
            if (clk.yrs == null)
              clk.yrs = 3210;
            if (clk.mth == null)
              clk.mth = 3;
            if (clk.wek == null)
              clk.wek = 3;
            if (clk.day == null)
              clk.day = 3;
            if (clk.hrs == null)
              clk.hrs = 3;
            if (clk.min == null)
              clk.min = 3;
            if (clk.sec == null)
              clk.sec = 3;
            var date = luxon_1.DateTime.local(clk.yrs, clk.mth, clk.day, clk.hrs, clk.min, clk.sec);
            clk.yrs = date.year;
            clk.mth = date.month;
            clk.day = date.day;
            clk.hrs = date.hour;
            clk.min = date.minute;
            clk.sec = date.second;
            clk.cnt = Math.floor(date.diff(luxon_1.DateTime.local(clk.yrs, 1, 1), "days").days);
            clk.wek = date.weekNumber;
            clk.qtr = date.quarter;
            clk.src = date.toFormat("MM-dd-yyyy, hh:mm:ss a");
            clk.now = date.valueOf();
            if (bal.slv != null)
              bal.slv({ tmeBit: { idx: "create-time", dat: clk } });
            break;
        }
        return cpy;
      };
      exports.createTime = createTime;
      var compareTime = async (cpy, bal, ste) => {
        if (bal.val == null)
          bal.val = 0;
        bit = await ste.hunt(ActTme.READ_TIME, { idx: bal.idx });
        var idxBit = bit.tmeBit.dat;
        bit = await ste.hunt(ActTme.READ_TIME, { idx: bal.src });
        var srcBit = bit.tmeBit.dat;
        var objIdx = { year: idxBit.yrs, month: idxBit.mth, day: idxBit.day, hour: idxBit.hrs, second: idxBit.sec };
        var idxNow = luxon_1.DateTime.fromObject(objIdx);
        var objSrc = { year: srcBit.yrs, month: srcBit.mth, day: srcBit.day, hour: srcBit.hrs, second: srcBit.sec };
        var srcNow = luxon_1.DateTime.fromObject(objSrc);
        var comp;
        if (bal.val == 1)
          comp = idxNow.diff(srcNow, ["days", "hours", "years", "weeks", "seconds", "months", "minutes"]);
        else if (bal.val == 0)
          comp = srcNow.diff(idxNow, ["days", "hours", "years", "weeks", "seconds", "months", "minutes"]);
        var value = comp.values;
        var clkBit = { idx: "compare-clock", yrs: value.years, mth: value.months, wek: value.weeks, day: value.days, hrs: value.hours, min: value.minutes, sec: value.seconds };
        if (bal.slv != null)
          bal.slv({ tmeBit: { idx: "compare-clock", dat: clkBit } });
        return cpy;
      };
      exports.compareTime = compareTime;
      var reduceTime = async (cpy, bal, ste) => {
        var bit2;
        if (bal.idx = null)
          bal.idx = "tme00";
        bit2 = await ste.hunt(ActTme.READ_TIME, { idx: bal.idx });
        var idxBit = bit2.tmeBit.dat;
        var date = luxon_1.DateTime.local(idxBit.yrs, idxBit.mth, idxBit.day, idxBit.hrs, idxBit.min, idxBit.sec);
        var mod = { years: 0, quarters: 0, months: 0, weeks: 0, hours: 0, minutes: 0, seconds: 0 };
        var clk = bal.bit;
        if (clk == null)
          clk = { idx: bal.idx };
        if (clk.idx == null)
          clk.idx = bal.idx;
        if (clk.yrs != null)
          mod.years = clk.yrs;
        if (clk.qtr != null)
          mod.quarters = clk.qtr;
        if (clk.mth != null)
          mod.months = clk.mth;
        if (clk.wek != null)
          mod.weeks = clk.wek;
        if (clk.hrs != null)
          mod.hours = clk.hrs;
        if (clk.min != null)
          mod.minutes = clk.min;
        if (clk.sec != null)
          mod.seconds = clk.sec;
        var now = date.minus(mod);
        clk.yrs = now.year;
        clk.mth = now.month;
        clk.day = now.day;
        clk.hrs = now.hour;
        clk.min = now.minute;
        clk.sec = now.second;
        clk.cnt = Math.floor(now.diff(luxon_1.DateTime.local(clk.yrs, 1, 1), "days").days);
        clk.wek = now.weekNumber;
        clk.qtr = now.quarter;
        clk.src = now.toFormat("MM-dd-yyyy, hh:mm:ss a");
        clk.now = now.valueOf();
        bit2 = await ste.hunt(ActTme.WRITE_TIME, { idx: bal.idx, dat: clk });
        if (bal.slv != null)
          bal.slv({ tmeBit: { idx: "reduce-time", dat: bit2.tmeBit.dat } });
        return cpy;
      };
      exports.reduceTime = reduceTime;
      var pushTime = async (cpy, bal, ste) => {
        bit = await ste.hunt(ActTme.READ_TIME, { idx: bal.idx, bit: ActTme.CREATE_TIME });
        var tmeBit = bit.tmeBit.dat;
        var dat2 = bal.dat;
        if (dat2 == null)
          dat2 = [];
        var date = luxon_1.DateTime.local(tmeBit.yrs, tmeBit.mth, tmeBit.day, tmeBit.hrs, tmeBit.min, tmeBit.sec);
        if (dat2.yrs == null)
          dat2.yrs = 0;
        if (dat2.mth == null)
          dat2.mth = 0;
        if (dat2.day == null)
          dat2.day = 0;
        if (dat2.hrs == null)
          dat2.hrs = 0;
        if (dat2.min == null)
          dat2.min = 0;
        if (dat2.sec == null)
          dat2.sec = 0;
        date = date.plus({ years: dat2.yrs, months: dat2.mth, days: dat2.day, hours: dat2.hrs, minutes: dat2.min, seconds: dat2.sec });
        tmeBit.yrs = date.year;
        tmeBit.mth = date.month;
        tmeBit.day = date.day;
        tmeBit.hrs = date.hour;
        tmeBit.min = date.minute;
        tmeBit.sec = date.second;
        tmeBit.wek = date.weekNumber;
        tmeBit.qtr = date.quarter;
        tmeBit.cnt = Math.floor(date.diff(luxon_1.DateTime.local(tmeBit.yrs, 1, 1), "days").days);
        tmeBit.src = date.toFormat("MM-dd-yyyy, hh:mm:ss a");
        tmeBit.now = date.valueOf();
        bit = await ste.hunt(ActTme.WRITE_TIME, { idx: tmeBit.idx, dat: tmeBit, bit: ActTme.CREATE_TIME });
        if (bal.slv != null)
          bal.slv({ tmeBit: { idx: "update-time", dat: bit.tmeBit.dat } });
        return cpy;
      };
      exports.pushTime = pushTime;
      var patch = (ste, type, bale) => ste.dispatch({ type, bale });
      var luxon_1 = require_luxon();
      var TIME = require_time();
    }
  });

  // ../001.time/dist/001.time/00.time.unit/time.buzzer.js
  var require_time_buzzer = __commonJS({
    "../001.time/dist/001.time/00.time.unit/time.buzzer.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.pushTime = exports.reduceTime = exports.compareTime = exports.createTime = exports.readTime = exports.writeTime = exports.nowTime = exports.formatTime = exports.updateTime = exports.initTime = void 0;
      var time_buzz_1 = require_time_buzz();
      Object.defineProperty(exports, "initTime", { enumerable: true, get: function() {
        return time_buzz_1.initTime;
      } });
      var time_buzz_2 = require_time_buzz();
      Object.defineProperty(exports, "updateTime", { enumerable: true, get: function() {
        return time_buzz_2.updateTime;
      } });
      var time_buzz_3 = require_time_buzz();
      Object.defineProperty(exports, "formatTime", { enumerable: true, get: function() {
        return time_buzz_3.formatTime;
      } });
      var time_buzz_4 = require_time_buzz();
      Object.defineProperty(exports, "nowTime", { enumerable: true, get: function() {
        return time_buzz_4.nowTime;
      } });
      var time_buzz_5 = require_time_buzz();
      Object.defineProperty(exports, "writeTime", { enumerable: true, get: function() {
        return time_buzz_5.writeTime;
      } });
      var time_buzz_6 = require_time_buzz();
      Object.defineProperty(exports, "readTime", { enumerable: true, get: function() {
        return time_buzz_6.readTime;
      } });
      var time_buzz_7 = require_time_buzz();
      Object.defineProperty(exports, "createTime", { enumerable: true, get: function() {
        return time_buzz_7.createTime;
      } });
      var time_buzz_8 = require_time_buzz();
      Object.defineProperty(exports, "compareTime", { enumerable: true, get: function() {
        return time_buzz_8.compareTime;
      } });
      var time_buzz_9 = require_time_buzz();
      Object.defineProperty(exports, "reduceTime", { enumerable: true, get: function() {
        return time_buzz_9.reduceTime;
      } });
      var time_buzz_10 = require_time_buzz();
      Object.defineProperty(exports, "pushTime", { enumerable: true, get: function() {
        return time_buzz_10.pushTime;
      } });
    }
  });

  // ../001.time/dist/001.time/00.time.unit/time.reduce.js
  var require_time_reduce = __commonJS({
    "../001.time/dist/001.time/00.time.unit/time.reduce.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.reducer = void 0;
      var clone = require_clone_deep();
      var Act = require_time_action();
      var time_model_1 = require_time_model();
      var Buzz = require_time_buzzer();
      function reducer(model = new time_model_1.TimeModel(), act, state) {
        switch (act.type) {
          case Act.UPDATE_TIME:
            return Buzz.updateTime(clone(model), act.bale, state);
          case Act.INIT_TIME:
            return Buzz.initTime(clone(model), act.bale, state);
          case Act.FORMAT_TIME:
            return Buzz.formatTime(clone(model), act.bale, state);
          case Act.NOW_TIME:
            return Buzz.nowTime(clone(model), act.bale, state);
          case Act.WRITE_TIME:
            return Buzz.writeTime(clone(model), act.bale, state);
          case Act.READ_TIME:
            return Buzz.readTime(clone(model), act.bale, state);
          case Act.CREATE_TIME:
            return Buzz.createTime(clone(model), act.bale, state);
          case Act.COMPARE_TIME:
            return Buzz.compareTime(clone(model), act.bale, state);
          case Act.REDUCE_TIME:
            return Buzz.reduceTime(clone(model), act.bale, state);
          case Act.PUSH_TIME:
            return Buzz.pushTime(clone(model), act.bale, state);
          default:
            return model;
        }
      }
      exports.reducer = reducer;
    }
  });

  // ../001.time/dist/001.time/97.collect.unit/buz/collect.buzz.js
  var require_collect_buzz = __commonJS({
    "../001.time/dist/001.time/97.collect.unit/buz/collect.buzz.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.emptyCollect = exports.deleteCollect = exports.removeCollect = exports.createCollect = exports.writeCollect = exports.readCollect = exports.fetchCollect = exports.updateCollect = exports.initCollect = void 0;
      var ActCol = require_collect_action();
      var bit;
      var dat;
      var dex;
      var initCollect = (cpy, bal, ste) => {
        return cpy;
      };
      exports.initCollect = initCollect;
      var updateCollect = (cpy, bal, ste) => {
        return cpy;
      };
      exports.updateCollect = updateCollect;
      var fetchCollect = (cpy, bal, ste) => {
        if (bal.val == null)
          bal.val = 1;
        if (bal.bit == null)
          bal.slv({ clcBit: { idx: "fetch-collect-err", src: "no-bit" } });
        var type = bal.bit.split(" ").slice(-1).pop().toLowerCase();
        var cabBit = cpy.caboodleBitList[cpy.caboodleBits[type]];
        if (bal.val == 1)
          bit = cabBit.bitList[0];
        else
          bit = cabBit;
        if (bal.slv != null)
          bal.slv({ clcBit: { idx: "fetch-collect", dat: bit } });
        return cpy;
      };
      exports.fetchCollect = fetchCollect;
      var readCollect = async (cpy, bal, ste) => {
        if (bal.bit == null)
          bal.slv({ clcBit: { idx: "read-collect-err", src: "no-bit" } });
        var type = bal.bit.split(" ").slice(-1).pop().toLowerCase();
        if (cpy.caboodleBits[type] == null)
          (0, exports.createCollect)(cpy, { idx: type }, ste);
        var cabBit = cpy.caboodleBitList[cpy.caboodleBits[type]];
        if (cabBit.bits[bal.idx] == null) {
          bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, bit: bal.bit });
        } else {
          dat = cabBit.bitList[cabBit.bits[bal.idx]];
        }
        if (bal.slv != null)
          bal.slv({ clcBit: { idx: "read-collect", dat } });
        return cpy;
      };
      exports.readCollect = readCollect;
      var writeCollect = async (cpy, bal, ste) => {
        var type = bal.bit.split(" ").slice(-1).pop().toLowerCase();
        if (cpy.caboodleBits[type] == null)
          (0, exports.createCollect)(cpy, { idx: type }, ste);
        if (bal.bit == null)
          bal.slv({ rskBit: { idx: "write-collect-err", src: "no-bit" } });
        var cabBit = cpy.caboodleBitList[cpy.caboodleBits[type]];
        if (cabBit.bits[bal.idx] == null) {
          bit = await ste.hunt(bal.bit, { idx: bal.idx, src: bal.src, dat: bal.dat });
          var objDat = bit[Object.keys(bit)[0]];
          dat = objDat.dat;
          dat.dex = cabBit.bitList.length;
          cabBit.bitList.push(dat);
          var idx2 = bal.idx;
          if (idx2 == null)
            idx2 = dat.idx;
          if (idx2 == null)
            throw new Error("write collect has no idx");
          cabBit.bits[idx2] = dat.dex;
        } else {
          var cabDat = cabBit.bitList[cabBit.bits[bal.idx]];
          bal.dat;
          for (var key in bal.dat) {
            if (cabDat == null)
              cabDat = {};
            cabDat[key] = bal.dat[key];
          }
          cabBit.bitList[cabBit.bits[bal.idx]] = cabDat;
        }
        if (dat == null && bal.slv != null)
          bal.slv({ rskBit: { idx: "write-collect-err", src: "no-dat" } });
        if (bal.slv != null)
          bal.slv({ clcBit: { idx: "write-collect", dat } });
        return cpy;
      };
      exports.writeCollect = writeCollect;
      var createCollect = (cpy, bal, ste) => {
        var cabBit = { idx: bal.idx, dex: 0, bits: {}, bitList: [] };
        cabBit.dex = cpy.caboodleBitList.length;
        cpy.caboodleBitList.push(cabBit);
        cpy.caboodleBits[cabBit.idx] = cabBit.dex;
        if (bal.slv != null)
          bal.slv({ rskBit: { idx: "create-collect", dat: cabBit } });
        return cpy;
      };
      exports.createCollect = createCollect;
      var removeCollect = async (cpy, bal, ste) => {
        var type = bal.bit.split(" ").slice(-1).pop().toLowerCase();
        if (cpy.caboodleBits[type] == null)
          return bal.slv({ rskBit: { idx: "remove-collect-not-present" } });
        var cabBit = cpy.caboodleBitList[cpy.caboodleBits[type]];
        if (cabBit.bits[bal.idx] == null)
          return bal.slv({ rskBit: { idx: "remove-collect-idx-not-present" } });
        bit = await ste.hunt(bal.bit, { idx: bal.idx, src: bal.src, dat: bal.dat });
        var objDat = bit[Object.keys(bit)[0]];
        dat = objDat.dat;
        dex = dat.dex;
        for (var i = dex; i < cabBit.bitList.length - 1; i++) {
          var update = cabBit.bitList[i];
          update.dex -= 1;
        }
        for (var key in dat) {
          dat[key] = null;
        }
        delete cabBit.bits[bal.idx];
        var itm = cabBit.bitList.splice(dex, 1);
        cabBit.dex -= 1;
        if (bal.slv != null)
          bal.slv({ rskBit: { idx: "remove-collect", dat: cabBit } });
        return cpy;
      };
      exports.removeCollect = removeCollect;
      var deleteCollect = (cpy, bal, ste) => {
        return cpy;
      };
      exports.deleteCollect = deleteCollect;
      var emptyCollect = (cpy, bal, ste) => {
        return cpy;
      };
      exports.emptyCollect = emptyCollect;
    }
  });

  // ../001.time/dist/001.time/97.collect.unit/collect.buzzer.js
  var require_collect_buzzer = __commonJS({
    "../001.time/dist/001.time/97.collect.unit/collect.buzzer.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.removeCollect = exports.deleteCollect = exports.fetchCollect = exports.emptyCollect = exports.createCollect = exports.writeCollect = exports.readCollect = exports.updateCollect = exports.initCollect = void 0;
      var collect_buzz_1 = require_collect_buzz();
      Object.defineProperty(exports, "initCollect", { enumerable: true, get: function() {
        return collect_buzz_1.initCollect;
      } });
      var collect_buzz_2 = require_collect_buzz();
      Object.defineProperty(exports, "updateCollect", { enumerable: true, get: function() {
        return collect_buzz_2.updateCollect;
      } });
      var collect_buzz_3 = require_collect_buzz();
      Object.defineProperty(exports, "readCollect", { enumerable: true, get: function() {
        return collect_buzz_3.readCollect;
      } });
      var collect_buzz_4 = require_collect_buzz();
      Object.defineProperty(exports, "writeCollect", { enumerable: true, get: function() {
        return collect_buzz_4.writeCollect;
      } });
      var collect_buzz_5 = require_collect_buzz();
      Object.defineProperty(exports, "createCollect", { enumerable: true, get: function() {
        return collect_buzz_5.createCollect;
      } });
      var collect_buzz_6 = require_collect_buzz();
      Object.defineProperty(exports, "emptyCollect", { enumerable: true, get: function() {
        return collect_buzz_6.emptyCollect;
      } });
      var collect_buzz_7 = require_collect_buzz();
      Object.defineProperty(exports, "fetchCollect", { enumerable: true, get: function() {
        return collect_buzz_7.fetchCollect;
      } });
      var collect_buzz_8 = require_collect_buzz();
      Object.defineProperty(exports, "deleteCollect", { enumerable: true, get: function() {
        return collect_buzz_8.deleteCollect;
      } });
      var collect_buzz_9 = require_collect_buzz();
      Object.defineProperty(exports, "removeCollect", { enumerable: true, get: function() {
        return collect_buzz_9.removeCollect;
      } });
    }
  });

  // ../001.time/dist/001.time/97.collect.unit/collect.reduce.js
  var require_collect_reduce = __commonJS({
    "../001.time/dist/001.time/97.collect.unit/collect.reduce.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.reducer = void 0;
      var clone = require_clone_deep();
      var Act = require_collect_action();
      var collect_model_1 = require_collect_model();
      var Buzz = require_collect_buzzer();
      function reducer(model = new collect_model_1.CollectModel(), act, state) {
        switch (act.type) {
          case Act.UPDATE_COLLECT:
            return Buzz.updateCollect(clone(model), act.bale, state);
          case Act.INIT_COLLECT:
            return Buzz.initCollect(clone(model), act.bale, state);
          case Act.READ_COLLECT:
            return Buzz.readCollect(clone(model), act.bale, state);
          case Act.WRITE_COLLECT:
            return Buzz.writeCollect(clone(model), act.bale, state);
          case Act.CREATE_COLLECT:
            return Buzz.createCollect(clone(model), act.bale, state);
          case Act.DELETE_COLLECT:
            return Buzz.deleteCollect(clone(model), act.bale, state);
          case Act.REMOVE_COLLECT:
            return Buzz.removeCollect(clone(model), act.bale, state);
          case Act.EMPTY_COLLECT:
            return Buzz.emptyCollect(clone(model), act.bale, state);
          case Act.FETCH_COLLECT:
            return Buzz.fetchCollect(clone(model), act.bale, state);
          default:
            return model;
        }
      }
      exports.reducer = reducer;
    }
  });

  // ../001.time/dist/001.time/act/terminal.action.js
  var require_terminal_action = __commonJS({
    "../001.time/dist/001.time/act/terminal.action.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.ADD_PORT = exports.CONTENT_TERMINAL = exports.ROOT_TERMINAL = exports.CLOSE_TERMINAL = exports.TABLE_TERMINAL = exports.INPUT_TERMINAL = exports.CLEAR_TERMINAL = exports.UPDATE_TERMINAL = exports.WRITE_TERMINAL = exports.FOCUS_TERMINAL = exports.OPEN_TERMINAL = exports.INIT_TERMINAL = void 0;
      exports.INIT_TERMINAL = "[Terminal action] Init Terminal";
      exports.OPEN_TERMINAL = "[Terminal action] Open Terminal";
      exports.FOCUS_TERMINAL = "[Terminal action] Focus Terminal";
      exports.WRITE_TERMINAL = "[Terminal action] Write Terminal";
      exports.UPDATE_TERMINAL = "[Terminal action] Update Terminal";
      exports.CLEAR_TERMINAL = "[Terminal action] Clear Terminal";
      exports.INPUT_TERMINAL = "[Terminal action] Input Terminal";
      exports.TABLE_TERMINAL = "[Terminal action] Table Terminal";
      exports.CLOSE_TERMINAL = "[Terminal action] Close Terminal";
      exports.ROOT_TERMINAL = "[Terminal action] Root Terminal";
      exports.CONTENT_TERMINAL = "[Terminal action] Content Terminal";
      exports.ADD_PORT = "[Terminal action] Add Port";
    }
  });

  // ../001.time/dist/001.time/98.menu.unit/buz/menu.buzz.js
  var require_menu_buzz = __commonJS({
    "../001.time/dist/001.time/98.menu.unit/buz/menu.buzz.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.timeMenu = exports.closeMenu = exports.testMenu = exports.updateMenu = exports.initMenu = void 0;
      var ActMnu = require_menu_action();
      var ActTme = require_time_action();
      var ActTrm = require_terminal_action();
      var bit;
      var lst;
      var idx;
      var dat;
      var initMenu = async (cpy, bal, ste) => {
        if (bal == null)
          bal = { idx: null };
        bit = await ste.bus(ActTrm.INIT_TERMINAL, {});
        (0, exports.updateMenu)(cpy, bal, ste);
        return cpy;
      };
      exports.initMenu = initMenu;
      var updateMenu = async (cpy, bal, ste) => {
        var bit2;
        bit2 = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "-----------" });
        bit2 = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "Time PIVOT V0" });
        bit2 = await ste.bus(ActTrm.WRITE_TERMINAL, { src: "-----------" });
        var lst2 = [ActMnu.TIME_MENU, ActTme.UPDATE_TIME];
        bit2 = await ste.bus(ActTrm.UPDATE_TERMINAL, { lst: lst2 });
        bit2 = bit2.trmBit;
        var idx2 = lst2[bit2.val];
        switch (idx2) {
          case ActMnu.TIME_MENU:
            bit2 = await ste.hunt(ActMnu.TIME_MENU, {});
            break;
          case ActTme.UPDATE_TIME:
            bit2 = await ste.hunt(ActTme.UPDATE_TIME, {});
            break;
          default:
            bit2 = await ste.bus(ActTrm.CLOSE_TERMINAL, {});
            break;
        }
        (0, exports.updateMenu)(cpy, bal, ste);
        return cpy;
      };
      exports.updateMenu = updateMenu;
      var testMenu = async (cpy, bal, ste) => {
        return cpy;
      };
      exports.testMenu = testMenu;
      var closeMenu = async (cpy, bal, ste) => {
        await ste.bus(ActTrm.CLOSE_TERMINAL, {});
        return cpy;
      };
      exports.closeMenu = closeMenu;
      var timeMenu = async (cpy, bal, ste) => {
        lst = [ActTme.PUSH_TIME, ActTme.COMPARE_TIME, ActTme.REDUCE_TIME, ActTme.WRITE_TIME, ActTme.READ_TIME];
        bit = await ste.bus(ActTrm.UPDATE_TERMINAL, { lst });
        bit = bit.trmBit;
        idx = lst[bit.val];
        switch (idx) {
          case ActTme.COMPARE_TIME:
            bit = await ste.hunt(ActTme.WRITE_TIME, { idx: "tme00", dat: { yrs: 1996 } });
            bit = await ste.hunt(ActTme.WRITE_TIME, { idx: "tme01", dat: { yrs: 2996 } });
            bit = await ste.hunt(ActTme.COMPARE_TIME, { idx: "tme00", src: "tme01" });
            dat = bit.tmeBit.dat;
            break;
          case ActTme.REDUCE_TIME:
            bit = await ste.hunt(ActTme.WRITE_TIME, { idx: "tme00", dat: { yrs: 1996 } });
            bit = await ste.hunt(ActTme.REDUCE_TIME, { idx: "tme00", dat: { yrs: 6 } });
            dat = bit.tmeBit.dat;
            break;
          case ActTme.PUSH_TIME:
            bit = await ste.hunt(ActTme.PUSH_TIME, { dat: { sec: 3 } });
            dat = bit.tmeBit.dat;
            console.log(JSON.stringify(bit));
            break;
          case ActTme.READ_TIME:
            bit = await ste.hunt(ActTme.READ_TIME, { idx: "tme01" });
            dat = bit.tmeBit.dat;
            console.log(JSON.stringify(bit));
            break;
          case ActTme.WRITE_TIME:
            bit = await ste.hunt(ActTme.WRITE_TIME, { idx: "tme01", dat: { yrs: 1996 } });
            dat = bit.tmeBit.dat;
            console.log(JSON.stringify(bit));
            break;
        }
        if (bal.slv != null)
          bal.slv({ mnuBit: { idx: "time-menu", dat } });
        return cpy;
      };
      exports.timeMenu = timeMenu;
    }
  });

  // ../001.time/dist/001.time/98.menu.unit/menu.buzzer.js
  var require_menu_buzzer = __commonJS({
    "../001.time/dist/001.time/98.menu.unit/menu.buzzer.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.timeMenu = exports.closeMenu = exports.testMenu = exports.updateMenu = exports.initMenu = void 0;
      var menu_buzz_1 = require_menu_buzz();
      Object.defineProperty(exports, "initMenu", { enumerable: true, get: function() {
        return menu_buzz_1.initMenu;
      } });
      var menu_buzz_2 = require_menu_buzz();
      Object.defineProperty(exports, "updateMenu", { enumerable: true, get: function() {
        return menu_buzz_2.updateMenu;
      } });
      var menu_buzz_3 = require_menu_buzz();
      Object.defineProperty(exports, "testMenu", { enumerable: true, get: function() {
        return menu_buzz_3.testMenu;
      } });
      var menu_buzz_4 = require_menu_buzz();
      Object.defineProperty(exports, "closeMenu", { enumerable: true, get: function() {
        return menu_buzz_4.closeMenu;
      } });
      var menu_buzz_5 = require_menu_buzz();
      Object.defineProperty(exports, "timeMenu", { enumerable: true, get: function() {
        return menu_buzz_5.timeMenu;
      } });
    }
  });

  // ../001.time/dist/001.time/98.menu.unit/menu.reduce.js
  var require_menu_reduce = __commonJS({
    "../001.time/dist/001.time/98.menu.unit/menu.reduce.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.reducer = void 0;
      var clone = require_clone_deep();
      var Act = require_menu_action();
      var menu_model_1 = require_menu_model();
      var Buzz = require_menu_buzzer();
      function reducer(model = new menu_model_1.MenuModel(), act, state) {
        switch (act.type) {
          case Act.UPDATE_MENU:
            return Buzz.updateMenu(clone(model), act.bale, state);
          case Act.INIT_MENU:
            return Buzz.initMenu(clone(model), act.bale, state);
          case Act.TEST_MENU:
            return Buzz.testMenu(clone(model), act.bale, state);
          case Act.CLOSE_MENU:
            return Buzz.closeMenu(clone(model), act.bale, state);
          case Act.TIME_MENU:
            return Buzz.timeMenu(clone(model), act.bale, state);
          default:
            return model;
        }
      }
      exports.reducer = reducer;
    }
  });

  // ../001.time/dist/001.time/99.bus.unit/buz/bus.buzz.js
  var require_bus_buzz = __commonJS({
    "../001.time/dist/001.time/99.bus.unit/buz/bus.buzz.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.updateBus = exports.messageBus = exports.connectBus = exports.openBus = exports.createBus = exports.initBus = void 0;
      var ActMnu = require_menu_action();
      var ActBus = require_bus_action();
      var ActCol = require_collect_action();
      var lst;
      var idx;
      var bit;
      var dat;
      var initBus = (cpy, bal, ste) => {
        cpy.actList = [];
        if (bal == null)
          bal = { idx: null };
        if (bal.lst == null)
          bal.lst = [];
        if (bal.src != null && bal.src.constructor == Array)
          lst = bal.src;
        bal.lst.forEach((a) => {
          for (var key in a) {
            cpy.actList.push(a[key]);
          }
        });
        ste.bus = (idx2, dat2, bit2) => (0, exports.updateBus)(cpy, { idx: idx2, dat: dat2, bit: bit2 }, ste);
        if (bal.dat != null) {
          cpy.MQTT = bal.dat;
        } else {
          console.log("return promise");
        }
        if (lst == null) {
          if (bal.src != null)
            cpy.host = bal.src;
          cpy.client = cpy.MQTT.connect(cpy.host);
          cpy.client.on("message", (tpc, msg) => {
            (0, exports.messageBus)(cpy, { idx: tpc, src: msg }, ste);
          });
          cpy.client.on("connect", () => {
            console.log(bal.idx + " connected " + cpy.host);
            (0, exports.openBus)(cpy, { idx: "init-bus", lst: cpy.actList }, ste);
            if (bal.slv != null)
              bal.slv({ intBit: { idx: "init-bus" } });
          });
        } else {
          var complete = (lst2) => {
            lst2.shift();
            if (lst2.length != 0)
              return;
            if (bal.slv != null)
              bal.slv({ intBit: { idx: "init-bus" } });
          };
          lst.forEach(async (a) => {
            bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: a.idx, src: a.src, bit: ActBus.CREATE_BUS });
            var client = bit.clcBit.dat;
            client.on("message", (tpc, msg) => {
              (0, exports.messageBus)(cpy, { idx: tpc, src: msg, bit: a.idx }, ste);
            });
            client.on("connect", () => {
              console.log(a.idx + " connected " + a.src);
              (0, exports.openBus)(cpy, { idx: "init-bus", lst: cpy.actList, bit: a.idx }, ste);
              complete(lst);
            });
          });
        }
        return cpy;
      };
      exports.initBus = initBus;
      var createBus = (cpy, bal, ste) => {
        var client = cpy.MQTT.connect(bal.src);
        if (bal.slv != null)
          bal.slv({ busBit: { idx: "create-bus", dat: client } });
        return cpy;
      };
      exports.createBus = createBus;
      var openBus = async (cpy, bal, ste) => {
        var out = [];
        bal.lst.forEach((a) => {
          if (a == null)
            return;
          if (a.includes == null)
            return;
          if (a.includes("[") && a.includes("]") == false)
            return;
          out.push(a);
        });
        var client = cpy.client;
        if (bal.bit != null) {
          bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.bit, bit: ActBus.CREATE_BUS });
          client = bit.clcBit.dat;
        }
        out.forEach((a) => {
          client.subscribe(a, (err) => {
            if (!err) {
              console.log("subscribing " + a);
            }
          });
        });
        return cpy;
      };
      exports.openBus = openBus;
      var connectBus = (cpy, bal, ste) => {
        var lst2 = [];
        if (bal.val == 1)
          patch(ste, ActMnu.INIT_MENU, { lst: lst2 });
      };
      exports.connectBus = connectBus;
      var messageBus = async (cpy, bal, ste) => {
        if (bal.src != null)
          dat = bal.src.toString();
        idx = bal.idx;
        dat = JSON.parse(dat);
        var client = cpy.client;
        if (bal.bit != null) {
          bit2 = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.bit, bit: ActBus.CREATE_BUS });
          client = bit2.clcBit.dat;
        }
        if (idx.includes(cpy.responseSuffix) == true) {
          var responseIDX = bal.idx;
          var obj = cpy.promises[responseIDX];
          if (obj.slv != null)
            obj.slv(dat);
          client.unsubscribe(responseIDX, (err) => {
            if (!err) {
            }
          });
        } else {
          var bit2 = await ste.hunt(idx, dat);
          var cloneBit = clone(bit2);
          for (var key in cloneBit) {
            var itm = cloneBit[key];
            if (itm.dat != null) {
              if (itm.dat.bit != null)
                itm.dat.bit = null;
            }
          }
          cloneBit;
          client.publish(bal.idx + cpy.responseSuffix, JSON.stringify(cloneBit));
        }
        return cpy;
      };
      exports.messageBus = messageBus;
      var updateBus = async (cpy, bal, ste) => {
        var client = cpy.client;
        if (bal.bit != null) {
          bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.bit, bit: ActBus.CREATE_BUS });
          client = bit.clcBit.dat;
        }
        if (client == null && bal.bit == null) {
          bit = await ste.hunt(ActCol.FETCH_COLLECT, { bit: ActBus.CREATE_BUS });
          client = bit.clcBit.dat;
        }
        var responseIDX = bal.idx + cpy.responseSuffix;
        var slv;
        const promo = new Promise((rslv, rjct) => slv = rslv);
        var obj = { slv: (val0) => slv(val0) };
        cpy.promises[responseIDX] = obj;
        client.subscribe(responseIDX, (err) => {
          if (!err) {
          }
        });
        client.publish(bal.idx, JSON.stringify(bal.dat));
        return promo;
      };
      exports.updateBus = updateBus;
      var patch = (ste, type, bale) => ste.dispatch({ type, bale });
      var clone = require_clone_deep();
    }
  });

  // ../001.time/dist/001.time/99.bus.unit/bus.buzzer.js
  var require_bus_buzzer = __commonJS({
    "../001.time/dist/001.time/99.bus.unit/bus.buzzer.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.createBus = exports.messageBus = exports.connectBus = exports.updateBus = exports.openBus = exports.initBus = void 0;
      var bus_buzz_1 = require_bus_buzz();
      Object.defineProperty(exports, "initBus", { enumerable: true, get: function() {
        return bus_buzz_1.initBus;
      } });
      var bus_buzz_2 = require_bus_buzz();
      Object.defineProperty(exports, "openBus", { enumerable: true, get: function() {
        return bus_buzz_2.openBus;
      } });
      var bus_buzz_3 = require_bus_buzz();
      Object.defineProperty(exports, "updateBus", { enumerable: true, get: function() {
        return bus_buzz_3.updateBus;
      } });
      var bus_buzz_4 = require_bus_buzz();
      Object.defineProperty(exports, "connectBus", { enumerable: true, get: function() {
        return bus_buzz_4.connectBus;
      } });
      var bus_buzz_5 = require_bus_buzz();
      Object.defineProperty(exports, "messageBus", { enumerable: true, get: function() {
        return bus_buzz_5.messageBus;
      } });
      var bus_buzz_6 = require_bus_buzz();
      Object.defineProperty(exports, "createBus", { enumerable: true, get: function() {
        return bus_buzz_6.createBus;
      } });
    }
  });

  // ../001.time/dist/001.time/99.bus.unit/bus.reduce.js
  var require_bus_reduce = __commonJS({
    "../001.time/dist/001.time/99.bus.unit/bus.reduce.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.reducer = void 0;
      var clone = require_clone_deep();
      var Act = require_bus_action();
      var bus_model_1 = require_bus_model();
      var Buzz = require_bus_buzzer();
      function reducer(model = new bus_model_1.BusModel(), act, state) {
        switch (act.type) {
          case Act.UPDATE_BUS:
            return Buzz.updateBus(clone(model), act.bale, state);
          case Act.OPEN_BUS:
            return Buzz.openBus(clone(model), act.bale, state);
          case Act.CONNECT_BUS:
            return Buzz.connectBus(clone(model), act.bale, state);
          case Act.CREATE_BUS:
            return Buzz.createBus(clone(model), act.bale, state);
          case Act.MESSAGE_BUS:
            return Buzz.connectBus(clone(model), act.bale, state);
          case Act.INIT_BUS:
            return Buzz.initBus(clone(model), act.bale, state);
          default:
            return model;
        }
      }
      exports.reducer = reducer;
    }
  });

  // ../001.time/dist/001.time/BEE.js
  var require_BEE = __commonJS({
    "../001.time/dist/001.time/BEE.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.reducer = exports.list = void 0;
      var time_unit_1 = require_time_unit();
      var collect_unit_1 = require_collect_unit();
      var menu_unit_1 = require_menu_unit();
      var bus_unit_1 = require_bus_unit();
      var time_model_1 = require_time_model();
      var collect_model_1 = require_collect_model();
      var menu_model_1 = require_menu_model();
      var bus_model_1 = require_bus_model();
      exports.list = [time_unit_1.default, collect_unit_1.default, menu_unit_1.default, bus_unit_1.default];
      var reduceFromTime = require_time_reduce();
      var reduceFromCollect = require_collect_reduce();
      var reduceFromMenu = require_menu_reduce();
      var reduceFromBus = require_bus_reduce();
      exports.reducer = {
        time: reduceFromTime.reducer,
        collect: reduceFromCollect.reducer,
        menu: reduceFromMenu.reducer,
        bus: reduceFromBus.reducer
      };
      var UnitData = class {
        constructor() {
          this.time = new time_model_1.TimeModel();
          this.collect = new collect_model_1.CollectModel();
          this.menu = new menu_model_1.MenuModel();
          this.bus = new bus_model_1.BusModel();
        }
      };
      exports.default = UnitData;
    }
  });

  // ../001.time/dist/001.time/hunt.js
  var require_hunt = __commonJS({
    "../001.time/dist/001.time/hunt.js"(exports, module) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var sim = {
        hunt: null,
        state: null
      };
      sim.hunt = (typ, obj) => {
        return host(obj, typ);
      };
      var host = (obj, typ) => {
        init();
        var slv;
        const promo = new Promise((rslv, rjct) => slv = rslv);
        if (obj == null)
          obj = {};
        if (obj.slv == null)
          obj.slv = (val0) => slv(val0);
        sim.state.dispatch({ type: typ, bale: obj });
        return promo;
      };
      var init = () => {
        if (sim.state != null)
          return;
        sim.state = new state_1.default();
        sim.state.pivot = sim;
        sim.state.hunt = sim.hunt;
        for (var k in Import.list)
          new Import.list[k](sim.state);
      };
      var Import = require_BEE();
      var state_1 = require_state();
      module.exports = sim;
    }
  });

  // ../001.time/001.time/000.quest.time.js
  globalThis.TIME = require_hunt();
  globalThis.TIME.ActTme = require_time_action();
})();
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
/*!
 * shallow-clone <https://github.com/jonschlinkert/shallow-clone>
 *
 * Copyright (c) 2015-present, Jon Schlinkert.
 * Released under the MIT License.
 */
/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
