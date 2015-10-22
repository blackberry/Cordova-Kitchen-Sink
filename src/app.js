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


// angular.module is a global place for creating, registering and retrieving Angular modules
// 'tsteas' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'tsteas.controllers' is found in controllers.js
angular.module('tsteas', [
  'ionic'
])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {});
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider, $compileProvider) {

  // enable native scrolling
  if (!ionic.Platform.isIOS()) {
    $ionicConfigProvider.scrolling.jsScrolling(false);
  }

  // URI whitelist setup
  $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|mailto|sms|tel|local|file|geo):/);
  $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|file|local|blob):|data:image\//);

  // ionic overrides
  $ionicConfigProvider.navBar.alignTitle('center'); // center headers

  // routes
  $stateProvider
    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'views/menu/menu.html',
    })

  // in app browser
  .state('app.inAppBrowser', {
    url: '/in-app-browser',
    views: {
      menuContent: {
        templateUrl: 'views/in-app-browser/in-app-browser.html'
      }
    }
  })

  // pull to refresh
  .state('app.pullToRefresh', {
    url: '/pull-to-refresh',
    views: {
      menuContent: {
        templateUrl: 'views/pull-to-refresh/pull-to-refresh.html'
      }
    }
  })

  // notifications
  .state('app.notifications', {
    url: '/notifications',
    views: {
      menuContent: {
        templateUrl: 'views/notifications/notifications.html'
      }
    }
  })

  // share media
  .state('app.shareMedia', {
    url: '/share-media',
    views: {
      menuContent: {
        templateUrl: 'views/share-media/share-media.html'
      }
    }
  })

  // app integration (invoke, etc.)
  .state('app.integration', {
    url: '/integration',
    views: {
      'menuContent': {
        templateUrl: 'views/integration/integration.html'
      }
    }
  })

  .state('app.adobeReader', {
    url: '/adobe-reader',
    views: {
      'menuContent': {
        templateUrl: 'views/integration/adobe-reader/adobe-reader.html'
      }
    }

  }).state('app.amazonAppStore', {
    url: '/amazon-app-store',
    views: {
      'menuContent': {
        templateUrl: 'views/integration/amazon-app-store/amazon-app-store.html'
      }
    }
  })

  .state('app.blackberryAssistant', {
    url: '/blackberry-assistant',
    views: {
      'menuContent': {
        templateUrl: 'views/integration/blackberry-assistant/blackberry-assistant.html'
      }
    }
  }).state('app.blackberryWorld', {
    url: '/blackberry-world',
    views: {
      'menuContent': {
        templateUrl: 'views/integration/blackberry-world/blackberry-world.html'
      }
    }
  }).state('app.bluetooth', {
    url: '/bluetooth',
    views: {
      'menuContent': {
        templateUrl: 'views/integration/bluetooth/bluetooth.html'
      }
    }
  }).state('app.browser', {
    url: '/browser',
    views: {
      'menuContent': {
        templateUrl: 'views/integration/browser/browser.html'
      }
    }
  })

  .state('app.camera', {
      url: '/camera',
      views: {
        'menuContent': {
          templateUrl: 'views/integration/camera/camera.html'
        }
      }
    }).state('app.clock', {
      url: '/clock',
      views: {
        'menuContent': {
          templateUrl: 'views/integration/clock/clock.html'
        }
      }
    }).state('app.deviceMonitor', {
      url: '/device-monitor',
      views: {
        'menuContent': {
          templateUrl: 'views/integration/device-monitor/device-monitor.html'
        }
      }
    }).state('app.docs-to-go', {
      url: '/docs-to-go',
      views: {
        'menuContent': {
          templateUrl: 'views/integration/docs-to-go/docs-to-go.html'
        }
      }
    }).state('app.facebook', {
      url: '/facebook',
      views: {
        'menuContent': {
          templateUrl: 'views/integration/facebook/facebook.html'
        }
      }
    }).state('app.foursquare', {
      url: '/foursquare',
      views: {
        'menuContent': {
          templateUrl: 'views/integration/foursquare/foursquare.html'
        }
      }
    }).state('app.linkedin', {
      url: '/linkedin',
      views: {
        'menuContent': {
          templateUrl: 'views/integration/linkedin/linkedin.html'
        }
      }
    }).state('app.mediaPlayer', {
      url: '/media-player',
      views: {
        'menuContent': {
          templateUrl: 'views/integration/media-player/media-player.html'
        }
      }
    }).state('app.miracast', {
      url: '/miracast',
      views: {
        'menuContent': {
          templateUrl: 'views/integration/miracast/miracast.html'
        }
      }
    }).state('app.nfc', {
      url: '/nfc',
      views: {
        'menuContent': {
          templateUrl: 'views/integration/nfc/nfc.html'
        }
      }
    })
    .state('app.photoEditor', {
      url: '/photo-editor',
      views: {
        'menuContent': {
          templateUrl: 'views/integration/photo-editor/photo-editor.html'
        }
      }
    }).state('app.pictures', {
      url: '/pictures',
      views: {
        'menuContent': {
          templateUrl: 'views/integration/pictures/pictures.html'
        }
      }
    }).state('app.settings', {
      url: '/settings',
      views: {
        'menuContent': {
          templateUrl: 'views/integration/settings/settings.html'
        }
      }
    })

  .state('app.twitter', {
    url: '/twitter',
    views: {
      'menuContent': {
        templateUrl: 'views/integration/twitter/twitter.html'
      }
    }
  }).state('app.voice-notes', {
    url: '/voice-notes',
    views: {
      'menuContent': {
        templateUrl: 'views/integration/voice-notes/voice-notes.html'
      }
    }
  });


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/integration');
});
