var cache = new Cache();

cache.lookup("#h1", "h1");
cache.lookup("#h6", "h6");
cache.lookupAll(".p", "p");
console.log(cache.lookup("h1"));
console.log(cache.lookup("h6"));
cache.remove("h6");
console.log(cache.lookupAll("p"));
cache.lookup("h6").innerHTML = "hello";


for (let i = 0; i < cache.lookupAll("p").length; i++) {
  cache.lookupAll("p")[i].innerHTML = "Hello";
}