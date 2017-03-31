// jshint esversion:6

/**
 * Create a Class Trie
 * that can work with a trie data structure
 *
 * Instance Methods
 *
 * add( word )
 * @param word  string
 * @returns void
 *
 * exists( word )
 * @param word  string
 * @returns boolean
 *          true if the word exists in the trie, else false
 */

  module.exports = class Trie {
  constructor(word){
    this.word = word;

  }

  add(word){
    if(typeof word === 'string'){

    }else{

    throw new TypeError('');

    }
  }

  exists(word){
    if(word !== null){
      return true;
    }
  }
};

var trie = {
    c: {
        a: {
            t: {
                end: true,
                s: {
                    end: true
                }
            }
        }
    },
    d: {
        o: {
            g: {
                end: true
            }
        }
    },
};