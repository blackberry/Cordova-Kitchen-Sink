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
  .controller('MediaPlayerCtrl', ['Utils',
    function(Utils) {

      this.title = 'Media Player';

      // targets
      this.targets = [

        {
          text: 'Open Card',
          request: {
            target: 'sys.mediaplayer.previewer',
            action: 'bb.action.VIEW',
            uri: 'https://archive.org/download/Windows7WildlifeSampleVideo/Wildlife_512kb.mp4'
          }
        }, {
          text: 'Open App',
          request: {
            target: 'sys.mediaplayer.previewer.app',
            action: 'bb.action.VIEW',
            uri: 'https://archive.org/download/Windows7WildlifeSampleVideo/Wildlife_512kb.mp4'
          }
        }

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
