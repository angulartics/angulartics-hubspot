(function (angular) {
  'use strict';

  /**
   * @ngdoc overview
   * @name angulartics-hubspot
   * Enables analytics support for Hubspot (http://www.hubspot.com)
   */
  angular.module('angulartics.hubspot', ['angulartics'])
    .config(['$analyticsProvider', function ($analyticsProvider) {
      
      // Don't send the first page, hubspot does it
      $analyticsProvider.settings.pageTracking.autoTrackFirstPage = false;

      /**
       * Track a page view
       */
      $analyticsProvider.registerPageTrack(function (path) {
        if (window._hsq) {
          _hsq.push(['trackPageView']);
          _hsq.push(['setPath', path]);
        }
      });

      /**
      * Track and event in Hubspot
      * @name trackEvent
      * 
      * @param {string} action
      * @param {object} properties
      *
      * @link http://developers.hubspot.com/docs/methods/enterprise_events/javascript_api
      */
      $analyticsProvider.registerEventTrack(function (action, properties) {
        if(properties.value) {
          var parsed = parseInt(properties.value, 10);
          properties.value = isNaN(parsed) ? 0 : parsed;
        }

        if (window._hsq) {
          _hsq.push();
          _hsq.push(["trackEvent", 
            {
              id : action,
              value: properties.value
            }]);

        }
      });
      
      /**
      * Add user identify to Hubspot tracking calls
      * @name identify
      *
      * @param {object} properties 
      *
      * @link http://developers.hubspot.com/docs/methods/enterprise_events/javascript_api
      */

      $analyticsProvider.registerSetUserProperties(function (properties) {
        if (window._hsq) {
          _hsq.push(["identify", properties]);
        }
      });

    }]);
})(angular);