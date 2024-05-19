#!/usr/bin/node

const request = require('request');

const apiUrl = process.argv[2];

request(apiUrl, (error, response, body) => {
  if (error) throw error;
  let count = 0;
  const films = JSON.parse(body).results;
  films.forEach(film => {
    film.characters.forEach(character => {
      if (character.includes('/18/')) {
        count++;
      }
    });
  });
  console.log(count);
});
