// Copyright 2016, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

// [START all]
var http = require('http');
var os = require('os');

var handleRequest = function (req, res) {
  console.log('Handling request from ' + req.connection.remoteAddress);
  res.writeHead(200);
  res.end('Hello Friends Summit, I am running on ' + os.hostname());
};

var www = http.createServer(handleRequest);
www.listen(process.env.PORT || 8080);
console.log('Running on ' + os.hostname());
// [END all]
