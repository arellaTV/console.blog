const bodyParser = require('body-parser');
const compression = require('compression');
const express = require('express');
const LRU = require('lru-cache');
const next = require('next');
require('dotenv').config();
require('isomorphic-fetch');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;
const graphQLHOST = process.env.GRAPHQL_HOST;
const app = next({ dev })
const handle = app.getRequestHandler();

const lruOptions = {
  length: function(n, key) { return n.length },
  max: 500,
  maxAge: 1000 * 60,
}
const cache = LRU(lruOptions);

app.prepare().then(() => {
  const server = express();

  server.use(compression({ level: 9 }));

  server.post('/graphql', bodyParser.json(), async (req, res) => {
    const graphQlOperation = `${req.body.operationName}/${req.body.variables.slug}`;
    let fetchResponse = cache.get(graphQlOperation);

    if (!fetchResponse) {
      const options = {
        body: JSON.stringify(req.body),
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      }
      fetchResponse = await fetch(graphQLHOST, options)
        .then(response => response.json())
        .catch(err => console.log(err));
      cache.set(graphQlOperation, fetchResponse);
    }
    res.json(fetchResponse);
  });

  server.get('/:categorySlug', async (req, res) => {
    const params = {
      categorySlug: req.params.categorySlug,
    }

    return app.render(req, res, '/category', params);
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
