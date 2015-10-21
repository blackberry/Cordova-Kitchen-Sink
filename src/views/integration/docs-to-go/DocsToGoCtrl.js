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
  .controller('Docs2GoCtrl', ['Utils',
    function(Utils) {

      this.title = 'Docs To Go';

      // cards
      this.targetsCards = [{
        text: 'Shreadsheet',
        request: {
          target: 'sys.sheettogo.previewer',
          action: 'bb.action.VIEW',
          type: 'application/vnd.ms-excel',
          uri: 'local:///assets/sample.xls'
        }
      }, {
        text: 'Document',
        request: {
          target: 'sys.wordtogo.previewer',
          action: 'bb.action.VIEW',
          type: 'application/msword',
          uri: 'local:///assets/sample.doc'
        }
      }, {
        text: 'Presentation',
        request: {
          target: 'sys.slideshowtogo.previewer',
          action: 'bb.action.VIEW',
          type: 'application/vnd.ms-powerpoint',
          uri: 'local:///assets/sample.ppt'
        }
      }];


      // apps
      this.targetsApps = [{
        text: 'Shreadsheet',
        request: {
          target: 'sys.dxtg.stg',
          action: 'bb.action.OPEN',
          type: 'application/vnd.ms-excel',
          uri: 'local:///assets/sample.xls'
        }
      }, {
        text: 'Document',
        request: {
          target: 'sys.dxtg.stg',
          action: 'bb.action.OPEN',
          type: 'application/msword',
          uri: 'local:///assets/sample.doc'
        }
      }, {
        text: 'Presentation',
        request: {
          target: 'sys.dxtg.stg',
          action: 'bb.action.OPEN',
          type: 'application/vnd.ms-powerpoint',
          uri: 'local:///assets/sample.ppt'
        }

      }];


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
