module.exports.getMime = function(extname){
    switch (extname) {
        case '.html':
            return 'text/html';
        case '.css':
            return 'text/css';
        case '.js':
            return 'text/javascript';
        case '.png':
            return 'images/png'; 
        case '.jpg':
            return 'images/jpg'; 
        default:
            return 'text/html';
       
    }
}