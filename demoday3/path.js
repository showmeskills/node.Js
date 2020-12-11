const path = require('path');
let root = path.join(__dirname,'foo/bar/baz/asdf/quux.html')
console.log(path.dirname(__filename));
console.log(path.dirname(__dirname));
console.log(path.join(__dirname,'foo/bar/baz/asdf/quux.html'));
console.log(path.extname(root));
console.log(path.basename(root));
console.log(path.parse(root));
let pp = {
    root: '/',
    dir: 'foo/bar/baz/asdf',
    base: 'quux.html',
    ext: '.html',
    name: 'quux'
}
console.log(path.format(pp));
console.log(path.resolve(__dirname,path.format(pp)));
