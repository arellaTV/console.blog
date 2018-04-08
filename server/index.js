const bodyParser = require('body-parser');
const express = require('express');
const next = require('next');
require('dotenv').config();
require('isomorphic-fetch');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;
const graphQLHOST = process.env.GRAPHQL_HOST;
const app = next({ dev })
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get('/graphql', async (req, res) => {
    const fetchResponse = await fetch(graphQLHOST).then(response => response.json());
    res.json(fetchResponse);
  });

  server.post('/graphql', bodyParser.json(), async (req, res) => {
    const options = {
      body: JSON.stringify(req.body),
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }
    const fetchResponse = await fetch(graphQLHOST, options)
      .then(response => response.json())
      .catch(err => console.log(err));
    res.json(fetchResponse);
  });

  server.get('/:categorySlug/:postSlug', async (req, res) => {
    const params = {
      categorySlug: req.params.categorySlug,
      postSlug: req.params.postSlug,
    }

    return app.render(req, res, '/post', params);
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) {
      throw err;
    }

    console.log(`> Ready on http://localhost:${port}`)
  });
});
