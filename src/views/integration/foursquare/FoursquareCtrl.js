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
  .controller('FoursquareCtrl', ['Utils',
    function(Utils) {

      var _this = this;
      this.title = 'Foursquare';

      this.foursquareClientID = 'enter your client id'; // client-id is from your foursquare developer account
      this.foursquareAccessToken = 'enter your access token'; // this token is returned after a successful sign-on


      // personal perimeter targets
      this.targets = [{
        text: 'Single Sign On (SSO)',
        request: {
          target: 'com.foursquare.blackberry.sso.card',
          action: 'bb.action.VIEW',
          type: 'sso/foursquare',
          data: '<use your own client-id here>' // clientID from foursquare developer account
        }
      }, {
        text: 'Searching for a venue',
        request: {
          target: 'com.foursquare.blackberry.venuesearch.card',
          action: 'bb.action.VIEW',
          type: 'venuesearch/foursquare',
          uri: 'foursquare://venues/search?oauth_token=' + _this.foursquareAccessToken
        }
      }, {
        text: 'Exploring venues',
        request: {
          target: 'com.foursquare.blackberry.uri',
          action: 'bb.action.OPEN',
          uri: 'foursquare://venues/explore'
        }
      }, {
        text: 'Opening a venue card',
        request: {
          target: 'com.foursquare.blackberry.uri',
          action: 'bb.action.OPEN',
          uri: 'foursquare://venues/4ef0e7cf7beb5932d5bdeb4e' // add venueid to the end of foursquare://venues/<id>
        }
      }, {
        text: 'Opening a check-in card',
        request: {
          target: 'com.foursquare.blackberry.uri',
          action: 'bb.action.OPEN',
          uri: 'foursquare://checkins/50a08609e4b04c46ea54446d' // add venueid to the end of foursquare://venues/<id>
        }
      }, {
        text: 'View user profile',
        request: {
          target: 'com.foursquare.blackberry.uri',
          action: 'bb.action.OPEN',
          uri: 'foursquare://users/self/update'
        }
      }, {
        text: 'View friend requests',
        request: {
          target: 'com.foursquare.blackberry.uri',
          action: 'bb.action.OPEN',
          uri: 'foursquare://users/requests'
        }
      }, {
        text: 'Friend Suggestions',
        request: {
          target: 'com.foursquare.blackberry.uri',
          action: 'bb.action.OPEN',
          uri: 'foursquare://users/suggest?type=friend'
        }
      }, {
        text: 'Page Suggestions',
        request: {
          target: 'com.foursquare.blackberry.uri',
          action: 'bb.action.OPEN',
          uri: 'foursquare://users/suggest?type=page'
        }
      }, {
        text: 'Adding Friends',
        request: {
          target: 'com.foursquare.blackberry.uri',
          action: 'bb.action.OPEN',
          uri: 'foursquare://users/addfriends?from=phonebook'
        }
      }];

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
