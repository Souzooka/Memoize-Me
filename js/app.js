var cache = new Cache();

cache.save(document.getElementById("h1"), "h1");
cache.save(document.getElementById("h6"), "h6");
console.log(cache.lookup("h1"));
console.log(cache.lookup("h6"));