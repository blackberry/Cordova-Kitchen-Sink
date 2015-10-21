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
  .controller('SettingsCtrl', ['Utils',
    function(Utils) {
      _this = this;
      this.title = 'Settings';
      this.selectedSettingsMode = 'card';

      this.settingModes = [{
        text: 'Open App',
        value: 'app'
      }, {
        text: 'Open Card',
        value: 'card'
      }];


      // personal perimeter targets
      this.targets = [{
          page: 'About',
          uri: 'settings://about'
        }, {
          page: 'About - General',
          uri: 'settings://about/general'
        }, {
          page: 'About - Hardware',
          uri: 'settings://about/hardware'
        }, {
          page: 'About - Operating System',
          uri: 'settings://about/os'
        }, {
          page: 'About - Network',
          uri: 'settings://about/network'
        }, {
          page: 'About - Legal',
          uri: 'settings://about/legal'
        }, {
          page: 'About - Work Space',
          uri: 'settings://about/workspace'
        }, {
          page: 'Accesiability',
          uri: 'settings://about/accessibility'
        }, {
          page: 'Accounts',
          uri: 'settings://pim'
        }, {
          page: 'Default Accounts',
          uri: 'settings://pim/defaultAccounts'
        }, {
          page: 'Create Account',
          uri: 'settings://pim/createAccount'
        }, {
          page: 'List Accounts',
          uri: 'settings://pim/listAccounts'
        }, {
          page: 'Application Manager',
          uri: 'settings://appmgr'
        },

        {
          page: 'Application Permissions',
          uri: 'settings://permissions'
        }, {
          page: 'BlackBerry Balance',
          uri: 'settings://balance'
        }, {
          page: 'BlackBerry ID',
          uri: 'settings://bbid'
        }, {
          page: 'BlackBerry Link',
          uri: 'settings://link'
        }, {
          page: 'BlackBerry Protect',
          uri: 'settings://protect'
        }, {
          page: 'Bluetooth',
          uri: 'settings://bluetooth'
        }, {
          page: 'Certificates',
          uri: 'settings://certificates'
        }, {
          page: 'Child Protection',
          uri: 'settings://childprotection'
        }, {
          page: 'Date and Time',
          uri: 'settings://datetime'
        }, {
          page: 'Default Applications',
          uri: 'settings://defaultapps'
        }, {
          page: 'Development Mode',
          uri: 'settings://devmode'
        }, {
          page: 'System Monitor',
          uri: 'settings://sysmon'
        }, {
          page: 'Diagnostics',
          uri: 'settings://about/diagnostics'
        }, {
          page: 'Display',
          uri: 'settings://display'
        }, {
          page: 'Display (Advanced)',
          uri: 'settings://display/advanced'
        }, {
          page: 'Language',
          uri: 'settings://language'
        }, {
          page: 'Input',
          uri: 'settings://language/input'
        }, {
          page: 'Keyboard',
          uri: 'settings://language/keyboard'
        }, {
          page: 'Spellcheck',
          uri: 'settings://language/spellcheck'
        }, {
          page: 'Assistance',
          uri: 'settings://language/assistance'
        }, {
          page: 'Location',
          uri: 'settings://location'
        }, {
          page: 'Mobile Hotspot',
          uri: 'settings://mhs'
        }, {
          page: 'Mobile Network',
          uri: 'settings://radio'
        }, {
          page: 'Network Connections',
          uri: 'settings://networkconnections'
        }, {
          page: 'NFC',
          uri: 'settings://nfc'
        }, {
          page: 'Notification',
          uri: 'settings://notification'
        }, {
          page: 'Password',
          uri: 'settings://password'
        }, {
          page: 'Payment Options',
          uri: 'settings://payment'
        }, {
          page: 'Screen Reader',
          uri: 'settings://about/screenreader'
        }, {
          page: 'Search',
          uri: 'settings://search'
        }, {
          page: 'Security',
          uri: 'settings://security'
        }, {
          page: 'Sharing',
          uri: 'settings://sharing'
        }, {
          page: 'SIM Card',
          uri: 'settings://sim'
        }, {
          page: 'Sound',
          uri: 'settings://sound'
        }, {
          page: 'Storage and Access',
          uri: 'settings://storage'
        }, {
          page: 'Tethering',
          uri: 'settings://tethering'
        }, {
          page: 'USB',
          uri: 'settings://usb'
        }, {
          page: 'Video Chat',
          uri: 'settings://videochat'
        }, {
          page: 'Voice Control',
          uri: 'settings://voice'
        }, {
          page: 'VPN',
          uri: 'settings://vpn'
        }, {
          page: 'Wi-Fi',
          uri: 'settings://wifi'
        }, {
          page: 'Security Wipe',
          uri: 'settings://wipe'
        }
      ];



      this.invoke = function(uri) {
        var request = {
          target: '',
          action: 'bb.action.OPEN',
          type: 'settings/view',
          uri: uri
        };

        // if video, change mime-type
        if (this.selectedSettingsMode === 'app') {
          request.target = 'sys.settings.target';
        } else {
          request.target = 'sys.settings.card';
        }

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
