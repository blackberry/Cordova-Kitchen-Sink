# The sample to end all samples

This "Kitchen Sink" sample will show you how to do just about everything using BlackBerry 10, Cordova, and the Ionic Framework.

## A work in progress

Check-back often. The sample will be updated frequently with new additions, and functionality. If something is missing, please create an Issue to request said feature. If something could be done better, also let me know.

**Applies To**

* [BlackBerry 10 WebWorks SDK](https://developer.blackberry.com/html5/download/sdk) 
* [Apache Cordova for BlackBerry 10](https://github.com/blackberry/cordova-blackberry/tree/master/blackberry10) 
* [Ionic Framework](http://www.ionicframework.com) 

**Author(s)** 

* [Chad Tetreault](http://www.twitter.com/chadtatro)

**Tested On**

* BlackBerry Passport
* BlackBerry Z30

**Features**

* Integrating with Native Apps
* In App Browser
* Share Media
* Notification
* Pull To Refresh
* ...more to follow

**Build System**

This sample uses Gulp for a build system. This allows you, the developer, to have an awesome workflow which follows best practices right out of the box with minimal effort.

**Contributing**

* To contribute code to this repository you must be [signed up as an official contributor](http://blackberry.github.com/howToContribute.html).

## Required Plugins

The following plugins are required in order for this app to work on device. You can manually install these, or run the bash script *install-plugins.sh*.

  ``cordova-plugin-bb-invoke``
  ``cordova-plugin-bb-card``

## How to modify the code

Since Gulp is used to run a few tasks before building the project, modifying it is slightly different than the typical approach. Take a look at the following directory tree. All of your code will basically reside in the ./src folder. 

* src/ - all of your code resides here
* src/static - any assets or 'static' files you want copied to www/ upon build
* www/ - after building your app resides here

## Getting Started

* Create a new Ionic app. [(You'll need to have Ionic installed first)](http://www.ionicframework.com)

`` ionic start myApp blank ``

* Copy the contents of this repository into the root folder of the newly created project
* Install dependencies

`` npm install ``

* Build 

`` gulp ``

## How to customize and build

Building this project might be a little different than what you're used to. [Gulp](http://gulpjs.com/) is being used which means your workflow will be as such:

1. Edit the code
2. Build with Gulp from command line
3. App is now built and published to the **www/** folder

## More Info

* [BlackBerry HTML5 WebWorks](https://bdsc.webapps.blackberry.com/html5/) - Downloads, Getting Started guides, samples, code signing keys.
* [BlackBerry WebWorks Development Guides](https://bdsc.webapps.blackberry.com/html5/documentation)
* [BlackBerry WebWorks Community Forums](http://supportforums.blackberry.com/t5/Web-and-WebWorks-Development/bd-p/browser_dev)
* [BlackBerry Open Source WebWorks Contributions Forums](http://supportforums.blackberry.com/t5/BlackBerry-WebWorks/bd-p/ww_con)

## Contributing Changes

Please see the [README](https://github.com/blackberry/BB10-WebWorks-Samples) of the BB10-WebWorks-Samples repository for instructions on how to add new Samples or make modifications to existing Samples.

## Bug Reporting and Feature Requests

If you find a bug in a Sample, or have an enhancement request, simply file an [Issue](https://github.com/blackberry/BB10-WebWorks-Samples/issues) for the Sample.

## Disclaimer

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
