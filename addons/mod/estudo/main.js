// (C) Copyright 2015 Martin Dougiamas
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

angular.module('mm.addons.mod_estudo', ['mm.core'])

.constant('mmaModEstudoComponent', 'mmaModEstudo')

.config(function($stateProvider) {

    $stateProvider

    .state('site.mod_estudo', {
      url: '/mod_estudo',
      params: {
        module: null,
        courseid: null
      },
      views: {
        'site': {
          controller: 'mmaModEstudoIndexCtrl',
          templateUrl: 'addons/mod/estudo/templates/index.html'
        }
      }
    });

})

.config(function($mmCourseDelegateProvider, $mmCoursePrefetchDelegateProvider, $mmContentLinksDelegateProvider) {
    $mmCourseDelegateProvider.registerContentHandler('mmaModEstudo', 'estudo', '$mmaModEstudoHandlers.courseContent');
    $mmCoursePrefetchDelegateProvider.registerPrefetchHandler('mmaModEstudo', 'estudo', '$mmaModEstudoPrefetchHandler');
    $mmContentLinksDelegateProvider.registerLinkHandler('mmaModEstudo', '$mmaModEstudoHandlers.linksHandler');
});
