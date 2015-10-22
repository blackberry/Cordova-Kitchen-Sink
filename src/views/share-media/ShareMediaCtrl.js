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
  .controller('ShareMediaCtrl', function() {

    this.title = 'Sharing Media';

    this.plugins = [
      'cordova-plugin-bb-invoke',
      'cordova-plugin-bb-card'
    ];

    this.targets = [{
      text: 'Document',
      request: {
        type: 'document',
        target_type: ['APPLICATION', 'VIEWER'],
        filter: ['*.pdf', '*.txt'],
        action: 'bb.action.SHARE',
      }
    }, {
      text: 'Image',
      request: {
        type: 'image',
        target_type: ['CARD'],
        filter: ['.jpg', '*.png'],
        action: 'bb.action.SHARE',
      }
    }, {
      text: 'Music',
      request: {
        type: 'music',
        target_type: ['APPLICATION', 'VIEWER', 'CARD'],
        filter: ['*.m4v', '*.mp4'],
        action: 'bb.action.SHARE',
      }
    }, {
      text: 'Video',
      request: {
        type: 'video',
        target_type: ['APPLICATION', 'VIEWER', 'CARD'],
        filter: ['*.wav', '*.mp3'],
        action: 'bb.action.SHARE',
      }
    }];


    // invoke the filepicker card
    this.invokeFilePicker = function(target) {
      target = JSON.parse(target);

      var filePickerRequest = {
        mode: blackberry.invoke.card.FILEPICKER_MODE_PICKER,
        target_type: target.request.type
      };

      var request = target.request;
      console.log(filePickerRequest);

      blackberry.invoke.card.invokeFilePicker(
        filepickerRequest,
        function(path) {
          request.uri = path[0];
          _this.loadShareCard(request);
        },

        // cancelled filepicker
        function(reason) {
          console.log('> invokeFilePicker - cancelled');

          // filepicker error
        },
        function(e) {
          if (e) {
            console.log('> invokeFilePicker - error', e);
          } else {
            console.log('> invokeFilePicker - success');
          }
        });
    };


    // load the share card
    this.loadShareCard = function(request) {
      var title = 'This is a title';

      blackberry.invoke.card.invokeTargetPicker(request, title,

        // success
        function() {
          console.log('> loadShareCard - success');
        },

        // error
        function(e) {
          console.log('> loadShareCard - error', e);
        });
    };

  });
