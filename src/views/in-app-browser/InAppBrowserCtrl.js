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
  .controller('InAppBrowserCtrl', function() {

    this.title = 'In App Browser';

    this.targets = [{
      text: 'Open In-App-Browser'
    }];

    var url = 'http://developer.blackberry.com';
    var target = '_blank';

    // open an in-app-browser
    this.invoke = function() {
      var ref = window.open(url, target); // 'ref' gives you a handle on the window object
      console.log('Reference to Child Window object -->', ref);
    };
  });
