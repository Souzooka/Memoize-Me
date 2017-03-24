class Cache {
  constructor() {
    this._cache = {};
  }

  save(query, identifier) {
    if (this._cache.hasOwnProperty(identifier)) {
      // Reference already exists
      return false;
    } else {
      this._cache[identifier] = document.querySelector(query);
    }
  }

  saveAll(query, identifier) {
    if (this._cache.hasOwnProperty(identifier)) {
      // Reference already exists
      return false;
    } else {
      this._cache[identifier] = document.querySelectorAll(query);
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