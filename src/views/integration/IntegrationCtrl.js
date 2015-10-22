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
  .controller('InvokeAppsCtrl', function() {

    this.title = 'Integrating with apps';

    this.plugins = [
      'cordova-plugin-bb-invoke',
      'cordova-plugin-bb-card'
    ];

    this.apps = [{
      name: 'Adobe Reader',
      icon: 'ion-document-text',
      view: 'adobe-reader'
    }, {
      name: 'Facebook',
      icon: 'ion-social-facebook',
      view: 'facebook'
    }, {
      name: 'Amazon App Store',
      icon: 'ion-bag',
      view: 'amazon-app-store'
    }, {
      name: 'Media Player',
      icon: 'ion-videocamera',
      view: 'media-player'
    }, {
      name: 'Miracast',
      icon: 'ion-wifi',
      view: 'miracast'
    }, {
      name: 'BlackBerry Browser',
      icon: 'ion-android-globe',
      view: 'browser'
    }, {
      name: 'NFC',
      icon: 'ion-briefcase',
      view: 'nfc'
    }, {
      name: 'BlackBerry World',
      icon: 'ion-android-globe',
      view: 'blackberry-world'
    }, {
      name: 'Bluetooth',
      icon: 'ion-bluetooth',
      view: 'bluetooth'
    }, {
      name: 'Pictures',
      icon: 'ion-images',
      view: 'pictures'
    }, {
      name: 'Photo Editor',
      icon: 'ion-image',
      view: 'photo-editor'
    }, {
      name: 'Camera',
      icon: 'ion-camera',
      view: 'camera'
    }, {
      name: 'Clock',
      icon: 'ion-clock',
      view: 'clock'
    }, {
      name: 'BlackBerry Assistant',
      icon: 'ion-ios-search-strong',
      view: 'blackberry-assistant'
    }, {
      name: 'Settings',
      icon: 'ion-gear-b',
      view: 'settings'
    }, {
      name: 'Device Monitor',
      icon: 'ion-android-phone-portrait',
      view: 'device-monitor'
    }, {
      name: 'Docs To Go',
      icon: 'ion-document-text',
      view: 'docs-to-go'
    }, {
      name: 'Twitter',
      icon: 'ion-social-twitter',
      view: 'twitter',
    }, {
      name: 'Voice Notes',
      icon: 'ion-android-microphone',
      view: 'voice-notes'
    }, {
      name: 'Foursquare',
      icon: 'ion-social-foursquare',
      view: 'foursquare'
    }, {
      name: 'LinkedIn',
      icon: 'ion-social-linkedin',
      view: 'linkedin'
    }];
  });
