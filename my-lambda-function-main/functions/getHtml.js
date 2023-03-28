const fs = require("fs")

const html = fs.readFileSync('static/index.html', 'utf-8');

exports.handler = async (event) => {
  // TODO implement
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html; charset=UTF-8'
    },
    body: html
  };
};
