#!/usr/bin/node

const request = require('request');

const apiUrl = process.argv[2];

request(apiUrl, (error, response, body) => {
  if (error) throw error;

  const tasks = JSON.parse(body);
  const result = {};

  tasks.forEach((task) => {
    if (task.completed) {
      if (result[task.userId]) {
        result[task.userId]++;
      } else {
        result[task.userId] = 1;
      }
    }
  });

  console.log(result);
});
