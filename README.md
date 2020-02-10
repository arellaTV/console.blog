![alt text](https://i.imgur.com/ZYrIVAD.png "Console.blog")

# Console.blog
A web application that powers console.blog. Built with Next.js, Node.js, and Express

## Prerequisites
- Node v12
- Wordpress
- WPGraphQL

## Installation
```bash
npm install
```

## Usage

### Configuration
Configure your app to connect to your graphql api via .env on the root directory of this project:

```
NODE_ENV=development
PORT=3000
GRAPHQL_HOST=https://yourblog.com/grpahql
```

To start your application in development, simply run:

```
npm run dev
```

To test your application in production mode:

```
npm run build
npm start
```

## Tests

#### To run the tests:
```bash
npm test
```

## Contributing

Pull Requests are encouraged! Suggested practice:
- Fork and make changes
- Submit a PR from fork to this master