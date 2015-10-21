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
  .controller('DeviceMonitorCtrl', ['Utils',
    function(Utils) {

      _this = this;
      this.title = 'Device Monitor';

      this.deviceMonitorModes = [{
        text: 'CPU',
        value: 'devicemonitor://cpu'
      }, {
        text: 'Battery',
        value: 'devicemonitor://battery'
      }, {
        text: 'Storage',
        value: 'devicemonitor://storage'
      }, {
        text: 'Memory',
        value: 'devicemonitor://memory'
      }];

      this.selectedMode = this.deviceMonitorModes[1].value;

      this.targets = [{
        text: 'Open App',
        request: {
          target: 'sys.SysMon.app',
          action: 'bb.action.OPEN',
          type: '*',
          uri: ''
        }
      }, {
        text: 'Open Card',
        request: {
          target: 'sys.SysMon.card',
          action: 'bb.action.VIEW',
          type: '*',
          uri: ''
        }
      }];


      this.invoke = function(request) {
        request.uri = this.selectedMode;
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
