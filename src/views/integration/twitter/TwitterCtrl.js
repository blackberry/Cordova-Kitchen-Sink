/* Copyright 2015 BlackBerry Ltd.

 Licensed under the Apache License, Version 2.0 (the 'License');
 you may not use this file except in compliance with the License.

 You may obtain a copy of the License at
 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an 'AS IS' BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 express or implied. See the License for the specific language
 governing permissions and limitations under the License.  */

angular.module('tsteas')
  .controller('TwitterCtrl', ['Utils',
    function(Utils) {

      this.title = 'Twitter';


      // targets
      this.targets = [

        {
          text: 'Share Text',
          request: {
            target: 'Twitter',
            action: 'bb.action.SHARE',
            type: 'text/plain',
            data: 'This is text to share'
          }
        }, {
          text: 'Search',
          request: {
            target: 'com.twitter.urihandler',
            action: 'bb.action.VIEW',
            uri: 'twitter:search:#BB10Believe'
          }
        }, {
          text: 'Share Photo',
          request: {
            target: 'Twitter',
            action: 'bb.action.SHARE',
            type: 'image/jpeg',
            uri: 'local:///assets/sample.png'
          }
        }, {
          text: 'Share URL',
          request: {
            target: 'Twitter',
            action: 'bb.action.SHARE',
            uri: 'http://developer.blackberry.com'
          }
        }, {
          text: 'Open Profile',
          request: {
            target: 'com.twitter.urihandler',
            action: 'bb.action.VIEW',
            uri: 'twitter:connect:blackberry'
          }
        },
      ];


      this.invoke = function(request) {
        // invoke
        Utils.invokeApp(
          request,
          // success
          function(data) {},
          // error
          function(e) {}
        );
      };


    }
  ]);
