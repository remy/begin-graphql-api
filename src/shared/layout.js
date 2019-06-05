/**
 * custom layout plugin
 *
 * @param key - String, the originally requested filename
 * @param file - Object
 * @param file.headers - Object, headers for the file
 * @param file.body - String, the file body
 */
module.exports = function layout(key, {headers, body}) {
  return {
    headers,
    body: html(body)
  }
}

function html(body) {
  return `<!doctype html>
<html lang=en>
<head>
<meta charset=utf-8>
<title>Hi!</title>
<link rel="stylesheet" href="https://static.begin.app/starter/default.css">
<link href="data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" rel="icon" type="image/x-icon">
</head>
<body>
<h1 class="center-text">GraphQL API</h1>
${body}
</body>
</html>`
}
