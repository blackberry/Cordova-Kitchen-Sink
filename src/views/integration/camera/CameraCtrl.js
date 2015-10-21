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
  .controller('CameraCtrl', ['Utils',
    function(Utils) {

      _this = this;
      this.title = 'Camera';
      this.selectedCameraMode = 'full';

      this.cameraModes = [{
        text: 'Full',
        value: 'full'
      }, {
        text: 'Photo',
        value: 'photo'
      }];

      this.targets = [{
        text: 'Open App',
        request: {
          target: 'sys.camera.app',
          action: 'bb.action.CAPTURE',
          type: 'image/jpeg',
          data: ''
        }
      }, {
        text: 'Open Card', // if your goal is to take a photo and have access to that photo's path, use Card
        request: {
          'target': 'sys.camera.card'
        }
      }];


      this.invoke = function(request) {
        // use current selected mode
        request.data = _this.selectedCameraMode;

        // camera card with image callback
        if (request.target === 'sys.camera.card') {

          var mode = blackberry.invoke.card.CAMERA_MODE_PHOTO;
          blackberry.invoke.card.invokeCamera(
            mode,

            // success
            function(path) {
              console.log('path: file://' + path);
            },

            // closed
            function(reason) {
              console.log('error: ' + reason);
            },

            // fail
            function(error) {
              if (error) {
                failure(error);
              }
            }
          );

          // open standard app
        } else {
          // invoke
          Utils.invokeApp(
            request,
            // success
            function(data) {},
            // error
            function(e) {}
          );
        }
      };

    }
  ]);
