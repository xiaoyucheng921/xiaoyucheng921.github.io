'use strict';

/**
 * Config for the router
 */
angular.module('app')
    .run(
        ['$rootScope', '$state', '$stateParams',
            function ($rootScope, $state, $stateParams) {
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;
            }
        ]
    )
    .config(
        ['$stateProvider', '$urlRouterProvider',
            function ($stateProvider, $urlRouterProvider) {

                $urlRouterProvider
                    .otherwise('/access/signin');
                $stateProvider
                    .state('app', {
                        abstract: true,
                        url: '/app',
                        templateUrl: 'tpl/app.html'
                    })

                    // ******-statr-side-menu****//
                    .state('app.purlist', {
                        url: '/purlist',
                        templateUrl: 'tpl/app_purlist.html',
                        resolve: {
                            deps: ['uiLoad',
                                function (uiLoad) {
                                    return uiLoad.load('js/controllers/purlist.js');
                                }]
                        }
                    })
                    .state('app.distributedetail', {
                        url: '/distributedetail',
                        templateUrl: 'tpl/distributedetail.html',
                        resolve: {}
                    })
                    .state('app.information', {
                        url: '/information',
                        templateUrl: 'tpl/app_information.html',
                        resolve: {
                            deps: ['uiLoad',
                                function (uiLoad) {
                                    return uiLoad.load('js/controllers/inform.js');
                                }]
                        }
                    })
                    .state('app.income', {
                        url: '/income',
                        templateUrl: 'tpl/app_income.html',
                        resolve: {
                            deps: ['uiLoad',
                                function (uiLoad) {
                                    return uiLoad.load('js/controllers/income.js');
                                }]
                        }
                    })
                    .state('app.expend', {
                        url: '/expend',
                        templateUrl: 'tpl/app_expend.html',
                        resolve: {
                            deps: ['uiLoad',
                                function (uiLoad) {
                                    return uiLoad.load('js/controllers/expend.js');
                                }]
                        }
                    })
                    .state('app.craft', {
                        url: '/craft',
                        templateUrl: 'tpl/app_craft.html',
                        resolve: {
                            deps: ['uiLoad',
                                function (uiLoad) {
                                    return uiLoad.load('js/controllers/craft.js');
                                }]
                        }
                    })

                    .state('apps', {
                        abstract: true,
                        url: '/apps',
                        templateUrl: 'tpl/layout.html'
                    })
                    .state('apps.note', {
                        url: '/note',
                        templateUrl: 'tpl/apps_note.html',
                        resolve: {
                            deps: ['uiLoad',
                                function (uiLoad) {
                                    return uiLoad.load(['js/app/note/note.js',
                                        'vendor/libs/moment.min.js']);
                                }]
                        }
                    })
                    .state('apps.contact', {
                        url: '/contact',
                        templateUrl: 'tpl/apps_contact.html',
                        resolve: {
                            deps: ['uiLoad',
                                function (uiLoad) {
                                    return uiLoad.load(['js/app/contact/contact.js']);
                                }]
                        }
                    })
                    .state('app.weather', {
                        url: '/weather',
                        templateUrl: 'tpl/apps_weather.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function ($ocLazyLoad) {
                                    return $ocLazyLoad.load(
                                        {
                                            name: 'angular-skycons',
                                            files: ['js/app/weather/skycons.js',
                                                'vendor/libs/moment.min.js',
                                                'js/app/weather/angular-skycons.js',
                                                'js/app/weather/ctrl.js']
                                        }
                                    );
                                }]
                        }
                    })
                    // ******-end-side-menu****//

                    .state('app.ui', {
                        url: '/ui',
                        template: '<div ui-view class="fade-in-up"></div>'
                    })
                    .state('app.ui.buttons', {
                        url: '/buttons',
                        templateUrl: 'tpl/ui_buttons.html'
                    })
                    .state('app.ui.icons', {
                        url: '/icons',
                        templateUrl: 'tpl/ui_icons.html'
                    })
                    .state('app.ui.grid', {
                        url: '/grid',
                        templateUrl: 'tpl/ui_grid.html'
                    })
                    .state('app.ui.widgets', {
                        url: '/widgets',
                        templateUrl: 'tpl/ui_widgets.html'
                    })
                    .state('app.ui.bootstrap', {
                        url: '/bootstrap',
                        templateUrl: 'tpl/ui_bootstrap.html'
                    })
                    .state('app.ui.sortable', {
                        url: '/sortable',
                        templateUrl: 'tpl/ui_sortable.html'
                    })
                    .state('app.ui.portlet', {
                        url: '/portlet',
                        templateUrl: 'tpl/ui_portlet.html'
                    })
                    .state('app.ui.timeline', {
                        url: '/timeline',
                        templateUrl: 'tpl/ui_timeline.html'
                    })
                    .state('app.ui.tree', {
                        url: '/tree',
                        templateUrl: 'tpl/ui_tree.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function ($ocLazyLoad) {
                                    return $ocLazyLoad.load('angularBootstrapNavTree').then(
                                        function () {
                                            return $ocLazyLoad.load('js/controllers/tree.js');
                                        }
                                    );
                                }
                            ]
                        }
                    })
                    .state('app.ui.toaster', {
                        url: '/toaster',
                        templateUrl: 'tpl/ui_toaster.html',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function ($ocLazyLoad) {
                                    return $ocLazyLoad.load('toaster').then(
                                        function () {
                                            return $ocLazyLoad.load('js/controllers/toaster.js');
                                        }
                                    );
                                }]
                        }
                    })


                    .state('app.chart', {
                        url: '/chart',
                        templateUrl: 'tpl/ui_chart.html',
                        resolve: {
                            deps: ['uiLoad',
                                function (uiLoad) {
                                    return uiLoad.load('js/controllers/chart.js');
                                }]
                        }
                    })
                    // table
                    .state('app.table', {
                        url: '/table',
                        template: '<div ui-view></div>'
                    })
                    .state('app.table.static', {
                        url: '/static',
                        templateUrl: 'tpl/table_static.html'
                    })
                    .state('app.table.datatable', {
                        url: '/datatable',
                        templateUrl: 'tpl/table_datatable.html',
                        resolve: {
                            deps: ['uiLoad',
                                function (uiLoad) {
                                    return uiLoad.load('js/controllers/datatable.js');
                                }]
                        }
                    })
                    .state('app.table.footable', {
                        url: '/footable',
                        templateUrl: 'tpl/table_footable.html'
                    })


                    // pages
                    .state('app.page', {
                        url: '/page',
                        template: '<div ui-view class="fade-in-down"></div>'
                    })
                    .state('app.page.profile', {
                        url: '/profile',
                        templateUrl: 'tpl/page_profile.html',
                        resolve: {
                            deps: ['uiLoad',
                                function (uiLoad) {
                                    return uiLoad.load('js/controllers/profile.js');
                                }]
                        }
                    })
                    .state('app.page.post', {
                        url: '/post',
                        templateUrl: 'tpl/page_post.html'
                    })
                    .state('app.page.search', {
                        url: '/search',
                        templateUrl: 'tpl/page_search.html'
                    })
                    .state('app.page.invoice', {
                        url: '/invoice',
                        templateUrl: 'tpl/page_invoice.html'
                    })
                    .state('app.page.price', {
                        url: '/price',
                        templateUrl: 'tpl/page_price.html'
                    })
                    .state('app.docs', {
                        url: '/docs',
                        templateUrl: 'tpl/docs.html'
                    })
                    // others
                    .state('lockme', {
                        url: '/lockme',
                        templateUrl: 'tpl/page_lockme.html'
                    })
                    .state('access', {
                        url: '/access',
                        template: '<div ui-view class="fade-in-right-big smooth"></div>'
                    })
                    .state('access.signin', {
                        url: '/signin',
                        templateUrl: 'tpl/page_signin.html',
                        resolve: {
                            deps: ['uiLoad',
                                function (uiLoad) {
                                    return uiLoad.load(['js/controllers/signin.js']);
                                }]
                        }
                    })

                    .state('access.forgotpwd', {
                        url: '/forgotpwd',
                        templateUrl: 'tpl/page_forgotpwd.html'
                    })

                    .state('access.404', {
                        url: '/404',
                        templateUrl: 'tpl/page_404.html'
                    })

                    // fullCalendar
                    .state('app.calendar', {
                        url: '/calendar',
                        templateUrl: 'tpl/app_calendar.html',
                        // use resolve to load other dependences
                        resolve: {
                            deps: ['$ocLazyLoad', 'uiLoad',
                                function ($ocLazyLoad, uiLoad) {
                                    return uiLoad.load(
                                        ['vendor/jquery/fullcalendar/fullcalendar.css',
                                            'vendor/jquery/fullcalendar/theme.css',
                                            'vendor/jquery/jquery-ui-1.10.3.custom.min.js',
                                            'vendor/libs/moment.min.js',
                                            'vendor/jquery/fullcalendar/fullcalendar.min.js',
                                            'js/app/calendar/calendar.js']
                                    ).then(
                                        function () {
                                            return $ocLazyLoad.load('ui.calendar');
                                        }
                                    )
                                }]
                        }
                    })

                    // mail
                    .state('app.mail', {
                        abstract: true,
                        url: '/mail',
                        templateUrl: 'tpl/mail.html',
                        // use resolve to load other dependences
                        resolve: {
                            deps: ['uiLoad',
                                function (uiLoad) {
                                    return uiLoad.load(['js/app/mail/mail.js',
                                        'js/app/mail/mail-service.js',
                                        'vendor/libs/moment.min.js']);
                                }]
                        }
                    })
                    .state('app.mail.list', {
                        url: '/inbox/{fold}',
                        templateUrl: 'tpl/mail.list.html'
                    })
                    .state('app.mail.detail', {
                        url: '/{mailId:[0-9]{1,4}}',
                        templateUrl: 'tpl/mail.detail.html'
                    })
                    .state('app.mail.compose', {
                        url: '/compose',
                        templateUrl: 'tpl/mail.new.html'
                    })

                    .state('layout', {
                        abstract: true,
                        url: '/layout',
                        templateUrl: 'tpl/layout.html'
                    })
                    .state('layout.fullwidth', {
                        url: '/fullwidth',
                        views: {
                            '': {
                                templateUrl: 'tpl/layout_fullwidth.html'
                            },
                            'footer': {
                                templateUrl: 'tpl/layout_footer_fullwidth.html'
                            }
                        },

                    })
                    .state('layout.mobile', {
                        url: '/mobile',
                        views: {
                            '': {
                                templateUrl: 'tpl/layout_mobile.html'
                            },
                            'footer': {
                                templateUrl: 'tpl/layout_footer_mobile.html'
                            }
                        }
                    })
                    .state('layout.app', {
                        url: '/app',
                        views: {
                            '': {
                                templateUrl: 'tpl/layout_app.html'
                            },
                            'footer': {
                                templateUrl: 'tpl/layout_footer_fullwidth.html'
                            }
                        },
                        resolve: {
                            deps: ['uiLoad',
                                function (uiLoad) {
                                    return uiLoad.load(['js/controllers/tab.js']);
                                }]
                        }
                    })

                    .state('music', {
                        url: '/music',
                        templateUrl: 'tpl/music.html',
                        controller: 'MusicCtrl',
                        resolve: {
                            deps: ['$ocLazyLoad',
                                function ($ocLazyLoad) {
                                    return $ocLazyLoad.load([
                                        'com.2fdevs.videogular',
                                        'com.2fdevs.videogular.plugins.controls',
                                        'com.2fdevs.videogular.plugins.overlayplay',
                                        'com.2fdevs.videogular.plugins.poster',
                                        'com.2fdevs.videogular.plugins.buffering',
                                        'js/app/music/ctrl.js',
                                        'js/app/music/theme.css'
                                    ]);
                                }]
                        }
                    })
                    .state('music.home', {
                        url: '/home',
                        templateUrl: 'tpl/music.home.html'
                    })
                    .state('music.genres', {
                        url: '/genres',
                        templateUrl: 'tpl/music.genres.html'
                    })
                    .state('music.detail', {
                        url: '/detail',
                        templateUrl: 'tpl/music.detail.html'
                    })
                    .state('music.mtv', {
                        url: '/mtv',
                        templateUrl: 'tpl/music.mtv.html'
                    })
                    .state('music.mtvdetail', {
                        url: '/mtvdetail',
                        templateUrl: 'tpl/music.mtv.detail.html'
                    })
                    .state('music.playlist', {
                        url: '/playlist/{fold}',
                        templateUrl: 'tpl/music.playlist.html'
                    })
            }
        ]
    );