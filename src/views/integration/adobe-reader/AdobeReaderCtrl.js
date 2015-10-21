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
  .controller('AdobeReaderCtrl', ['Utils',
    function(Utils) {

      this.title = 'Adobe Reader';
      this.selectedMode = 'card';

      this.modes = [{
        text: 'Card',
        value: 'card'
      }, {
        text: 'App',
        value: 'app'
      }];

      this.targets = [{
        text: 'Open Adobe Reader',
      }];


      // invoke
      this.invoke = function() {
        // open app
        if (this.selectedMode === 'app') {
          request = {
            target: 'com.rim.bb.app.adobeReader',
            action: 'bb.action.OPEN',
            type: 'application/pdf',
            uri: 'local:///assets/sample.pdf'
          };

          // open card
        } else if (this.selectedMode === 'card') {
          request = {
            target: 'com.rim.bb.app.adobeReader.viewer',
            action: 'bb.action.VIEW',
            type: 'application/pdf',
            uri: 'local:///assets/sample.pdf'
          };
        }

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
