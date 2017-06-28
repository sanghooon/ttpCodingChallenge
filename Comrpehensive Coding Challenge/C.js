/*
Question C -- Web Crawler: I wrote a crawler that visits web pages, stores a few keywords in a database, and follows links to other web pages. I noticed that my crawler was wasting a lot of time visiting the same pages over and over, so I made a set, visited, where I'm storing URLs I've already visited. Now the crawler only visits a URL if it hasn't already been visited. Let’s see if we can make this crawler use less memory. See if you can come up with a data structure better than a hash that just stores the entire URL. How can we trim down the amount of space taken up by visited? Explain in words and implement your solution.

Answer -- Trim out the 'www.' at the start of every URLs since it isn't necessary. Hash is useful for finding the exact same match that we are finding but tries lets us find URLS that have prefixes or character differences. Each node will have key of characters and the value of URL at the end.
*/

var node = {
  key: null,
  value: null,
  children: []
}

function Trie() {
  this.root =  {
    key: '',
    children: {}
  }
}

Trie.prototype.add = function(key) {
  var currentNode = this.root;
  var newNode = null;
  var currentChar = key.slice(0,1);
  key = key.slice(1);
  //looks for an appropriate place to insert
  while(typeof currentNode.children[currentChar] !== "undefined" && currentChar.length > 0) {
    currentNode = currentNode.children[currentChar];
    currentChar = key.slice(0,1);
    key = key.slice(1);
  }
  //iterates through remaining charsand fills out trie
  while(currentChar.length > 0) {
    newNode = {
      key: currentChar,
      value: key.length === 0 ? null : undefined,
      children: {}
    };
    currentNode.children[currentChar] = newNode;
    currentNode = newNode;
    currentChar = key.slice(0,1);
    key = key.slice(1);
  }

}
