class Cache {
  constructor() {
    this._cache = {};
  }

  clear() {
    this._cache = {};
  }

  remove(query) {
    if (this._cache.hasOwnProperty(query)) {
      delete this._cache[query];
    } else {
      return false;
    }
  }

  lookup(query) {
    if (!this._cache.hasOwnProperty(query)) {
      this._cache[query] = document.querySelector(query);
    }
    return this._cache[query];
  }

  lookupAll(query) {
    if (!this._cache.hasOwnProperty(query)) {
      this._cache[query] = document.querySelectorAll(query);
    }
    return this._cache[query];
  }
}