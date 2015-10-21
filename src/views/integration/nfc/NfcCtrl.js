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
  .controller('NfcCtrl', ['Utils',
    function(Utils) {

      this.title = 'NFC';

      var sampleList = [{
        uri: 'local:///assets/sample.png',
        type: 'filelist/image/png',
        data: 'thumbnail'
      }, {
        uri: 'local:///assets/sample.txt',
        type: 'filelist/text/plain',
        data: 'document'
      }];

      this.targets = [{
        text: 'Sharing a single local file or a URI',
        description: 'Invoke an NFC card to share a single local file or a URI',
        request: {
          target: 'sys.NFCViewer',
          action: 'bb.action.SHARE',
          uri: 'local:///assets/sample.png'
        }
      }, {
        text: 'Share Text',
        description: '',
        request: {
          target: 'sys.NFCViewer',
          action: 'bb.action.SHARE',
          type: 'text/plain',
          data: 'Hello friends'
        }
      }, {
        text: 'Sharing URLs',
        description: '',
        request: {
          target: 'sys.NFCViewer',
          action: 'bb.action.SHARE',
          type: 'text/URI-list',
          data: 'http://www.blackberry.com'
        }
      }];


      // invoke
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
