const url = require('url');

console.log(url.parse('http://news.baidu.com/'))

/*
Url {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'news.baidu.com',
  port: null,
  hostname: 'news.baidu.com',
  hash: null,
  search: null,
  query: null,
  pathname: '/',
  path: '/',
  href: 'http://news.baidu.com/'
}
*/

console.log(url.parse('http://news.baidu.com:5500/about?name=summy'))
/*
Url {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'news.baidu.com:5500',
  port: '5500',
  hostname: 'news.baidu.com',
  hash: null,
  search: '?name=summy',
  query: 'name=summy',
  pathname: '/about',
  path: '/about?name=summy',
  href: 'http://news.baidu.com:5500/about?name=summy'
}
*/