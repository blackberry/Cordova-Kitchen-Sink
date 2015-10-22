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
  .controller('NotificationsCtrl', function() {

    this.title = 'Notifications';

    this.plugins = [
      'cordova-plugin-bb-invoke',
      'cordova-plugin-bb-invoked',
      'cordova-plugin-bb-notification',
    ];

    this.targets = [{
      text: 'Simple Notification',
      type: 'simple'
    }, {
      text: 'Title, Body and Tag',
      type: 'tbt'
    }, {
      text: 'onShow Callback',
      type: 'onshow'
    }, {
      text: 'Notify with invoke params',
      type: 'params'
    }, {
      text: 'Custom',
      type: 'custom'
    }, {
      text: 'Notify then close',
      type: 'close'
    }, {
      text: 'Notify with Tag then remove',
      type: 'remove'
    }];

    this.sendNotification = function(type) {
      var n;

      switch (type) {
        case 'simple':
          n = new Notification('simple notification');
          console.log(n);
          break;

        case 'tbt':
          n = new Notification('onShow', {
            'onshow': function() {
              alert('onShow');
            },
            'onerror': function() {
              alert('onError');
            }
          });
          console.log(n);
          break;

        case 'onshow':
          n = new Notification("onShow", {
            'onshow': function() {
              alert("onShow");
            },
            'onerror': function() {
              alert("onError");
            }
          });
          console.log(n);
          break;

        case 'params':
          n = new Notification("button4", {
            'target': "sys.browser",
            'targetAction': "bb.action.OPEN",
            'payloadURI': "http://www.blackberry.com",
            'payloadType': "text/html"
          });
          console.log(n);
          break;

        case 'custom':
          n = new Notification("button5", {
            'targetAction': "bb.action.NEWACTION",
          });
          console.log(n);
          break;

        case 'close':
          n = new Notification("button6");
          console.log(n);
          setTimeout(n.close(), 5000);
          break;

        case 'remove':
          n = new Notification("button7", {
            'tag': "Tag"
          });
          console.log(n);
          Notification.remove("Tag");
          break;
      }
    };

  });
