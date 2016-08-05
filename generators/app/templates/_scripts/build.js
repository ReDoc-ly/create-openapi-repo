#!/usr/bin/env node
'use strict';

require('shelljs/global');
set('-e');

mkdir('-p', 'web_deploy')

cp('-R', 'web/*', 'web_deploy/');

exec('npm run swagger bundle --        -o web_deploy/swagger.json');
exec('npm run swagger bundle -- --yaml -o web_deploy/swagger.yaml');

<% if (installSwaggerUI) { %>
var Path = require('path');
var SWAGGER_UI_DIST = Path.dirname(require.resolve('swagger-ui'));
SWAGGER_UI_DIST = '/Users/ivang/dev/generator-test/node_modules/swagger-ui/dist/'
rm('-rf', 'web_deploy/swagger-ui/')
cp('-R', SWAGGER_UI_DIST, 'web_deploy/swagger-ui/')
sed('-i', 'http://petstore.swagger.io/v2/swagger.json', '/swagger.json', 'web_deploy/swagger-ui/index.html')
<% } %>
