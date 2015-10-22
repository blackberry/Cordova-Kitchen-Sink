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
  .controller('AmazonAppStoreCtrl', ['Utils',
    function(Utils) {

      this.title = 'Amazon App Store';

      this.targets = [{
        page: 'Home Page',
        uri: 'amzn://apps/android?'
      }, {
        page: 'Content Details',
        uri: 'amzn://apps/android?asin=<asinValue>'
      }, {
        page: 'Search',
        uri: 'amzn://apps/android?s=<searchTerm>'
      }];


      // invoke
      this.invoke = function(uri) {
        var request = {
          target: 'sys.amzn',
          action: 'bb.action.OPEN',
          uri: uri
        };

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
