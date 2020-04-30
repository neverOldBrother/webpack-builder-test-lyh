if(typeof window === 'undefined') {
  global.window = {};
}


const express = require('express')
const fs = require('fs');
const path = require('path');
const { renderToString } = require('react-dom/server');
const SSR = require('../dist/search-server');
const template = fs.readFileSync(path.join(__dirname, '../dist/search.html'), 'utf-8')
const data = require('./data.json');

const server = (port) => {
  const app = express();

  app.use(express.static('dist'));
  app.get('/search', (req, res) => {
    const html = renderMarkup(renderToString(SSR));
    res.status(200).send(html)
  })

  app.listen(port, ()=>{
    console.log('Server is runing on port' + port)
  })
}

const renderMarkup = (str) =>{
  const daraStr = JSON.stringify(data);
  return template.replace('<!--HTML_PLACEHOLDER-->', str)
  .replace('<!--INITIAL_DATA_PLACEHOLDER-->', `<script>window._initial_data=${daraStr}</script>`)
}

server(process.env.PORT || 4002);