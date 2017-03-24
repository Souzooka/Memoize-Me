class Cache {
  constructor() {
    this._cache = {};
  }

  save(element, identifier) {
    if (this._cache.hasOwnProperty(identifier)) {
      // Reference already exists
      return false;
    } else {
      this._cache[identifier] = element;
    }
  }

  lookup(identifier) {
    if (!this._cache.hasOwnProperty(identifier)) {
      return false;
    } else {
      return this._cache[identifier];
    }
  }
}