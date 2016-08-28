'use strict';

angular.module('bugTracker.version', [
  'bugTracker.version.interpolate-filter',
  'bugTracker.version.version-directive'
])

.value('version', '0.1');
