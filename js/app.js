var cache = new Cache();

cache.save("#h1", "h1");
cache.save("#h6", "h6");
cache.saveAll(".p", "p");
console.log(cache.lookup("h1"));
console.log(cache.lookup("h6"));
cache.remove("h6");
console.log(cache.lookup("p"));
cache.lookup("h6").innerHTML = "hello";


for (let i = 0; i < cache.lookup("p").length; i++) {
  cache.lookup("p")[i].innerHTML = "Hello";
}