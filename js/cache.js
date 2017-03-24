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

  clear() {
    this._cache = {};
  }

  remove(identifier) {
    if (this._cache.hasOwnProperty(identifier)) {
      delete this._cache[identifier];
    } else {
      return false;
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