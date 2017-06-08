## LeanCloud CORS Headers

```javascript
const leancloudHeaders = require('leancloud-cors-headers');

app.options('/*', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Max-Age', '86400');
  res.header('Access-Control-Allow-Methods', 'HEAD, GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', leancloudHeaders);
  res.end();
});
```
