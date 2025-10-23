import http from 'http';
import fs from 'fs';
import url from 'url';
import path from 'path';

// خوندن دیتا از فایل JSON
const data = fs.readFileSync('./data/products.json', 'utf-8');
const products = JSON.parse(data);

// تابع برای تشخیص نوع فایل
function getContentType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const types = {
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.gif': 'image/gif',
    '.webp': 'image/webp',
    '.svg': 'image/svg+xml'
  };
  return types[ext] || 'application/octet-stream';
}

const server = http.createServer((req, res) => {
  const requestedUrl = url.parse(req.url, true);

  // سرو کردن فایل‌های استاتیک (عکس‌ها)
  if (requestedUrl.pathname.startsWith('/images/')) {
    const filePath = path.join('./', requestedUrl.pathname);
    
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('File not found');
        return;
      }
      
      res.writeHead(200, {
        'Content-Type': getContentType(filePath),
        'Access-Control-Allow-Origin': '*'
      });
      res.end(data);
    });
    return;
  }

  // همه محصولات
if (requestedUrl.pathname === '/api/products' && req.method === 'GET') {
  res.writeHead(200, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  });
  res.end(JSON.stringify(products));
} 
else if (requestedUrl.pathname === '/api/product' && req.method === 'GET') {
  const id = requestedUrl.query.id;
  const product = products.find(p => p.id == id);

  if (product) {
    res.writeHead(200, {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    res.end(JSON.stringify(product));
  } else {
    res.writeHead(404, {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    res.end(JSON.stringify({ message: 'Product not found' }));
  }
}}
);

server.listen(3000, '127.0.0.1', () => {
  console.log('Server started on http://127.0.0.1:3000');
});
