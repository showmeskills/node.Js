import fs from 'fs';
import zlib from 'zlib';
import path from 'path';
const gzip = zlib.createGzip();

const readStream = fs.createReadStream(path.join(__dirname,"log.txt"));
const writeStream = fs.createWriteStream(path.join(__dirname,"logs.gzip"));

readStream
    .pipe(gzip)
    .pipe(writeStream)
