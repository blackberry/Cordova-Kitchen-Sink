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
  .controller('BlackBerryWorldCtrl', ['Utils',
    function(Utils) {

      var _this = this;
      this.title = 'BlackBerry World';

      // personal perimeter targets
      this.targets = [{
        page: 'Home Page',
        uri: 'appworld://'
      }, {
        page: 'Content Details',
        uri: 'appworld://content/22531423'
      }, {
        page: 'EMU',
        uri: 'appworld://emu/22531423'
      }, {
        page: 'Search',
        uri: 'appworld://search/bbm'
      }, {
        page: 'Vendor Page',
        uri: 'appworld://vendor/4'
      }, {
        page: 'My World',
        uri: 'appworld://myworld'
      }, {
        page: 'Subscriptions',
        uri: 'appworld://myworld/subscriptions'
      }, {
        page: 'Parental Control',
        uri: 'appworld://parentalcontrol'
      }, {
        page: 'Games',
        uri: 'appworld://games'
      }, {
        page: 'Apps',
        uri: 'appworld://apps'
      }, {
        page: 'Video',
        uri: 'appworld://video'
      }];


      // enterprise targets
      this.workTargets = [{
        page: 'Home Page',
        uri: 'entappworld://'
      }, {
        page: 'My World',
        uri: 'entappworld://myworld'
      }, {
        page: 'App Details',
        uri: 'entappworld://package/<packageid>' // enter package id
      }];


      // invoke - personal
      this.invokePersonal = function(uri) {
        var request = {
          target: 'sys.appworld',
          action: 'bb.action.OPEN',
          uri: uri
        };

        _this.invoke(request);
      };


      // invoke - work
      this.invokeWork = function(uri) {
        var request = {
          target: 'sys.enterpriseappworld',
          action: 'bb.action.OPEN',
          uri: uri
        };

        _this.invoke(request);
      };


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
