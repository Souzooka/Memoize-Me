class Cache {
  constructor() {
    this._cache = {};
  }

  save(element) {
    if (this._cache.hasOwnProperty(element)) {
      // Reference already exists
      return 0;
    } else {
      this._cache[element] = element;
    }
  }

  lookup(element) {
    if (!this._cache.hasOwnProperty(element)) {
      return false;
    } else {
      return this._cache[element];
    }
  }
}