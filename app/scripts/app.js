'use strict';

var appModule = angular.module('invirohubWebApp', [
    'ui.router',
    'ngCookies',
    'ngResource',
    'ngSanitize'
]);

appModule.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.defaults.headers.common["X-Requested-With"] = undefined;
}]);

appModule
    .config(function ($stateProvider, $urlRouterProvider) {


        $urlRouterProvider.otherwise('/');

        $stateProvider

            .state('main', {
                url : '/',
                views : {
                    'main-content' : {
                        templateUrl : 'views/main.html',
                        controller : 'MainCtrl'
                    }
                }
            })

            .state('about', {
                url: '/about',
                views: {
                    'main-content': {
                        templateUrl: 'views/about/main.html',
                        'controller': 'AboutMainCtrl'
                    }

                }
            })

            .state('about.about', {
                url: '/about',
                views: {
                    'about-content': {
                        templateUrl: 'views/about/about.html',
                        controller: 'AboutAboutCtrl'
                    }
                }
            })
            .state('about.directors', {
                url: '/directors',
                views: {
                    'about-content': {
                        templateUrl: 'views/about/directors.html',
                        controller: 'AboutDirectorsCtrl'
                    }
                }
            })
            .state('about.operating', {
                url: '/operating',
                views: {
                    'about-content': {
                        templateUrl: 'views/about/operating.html',
                        controller: 'AboutOperatingCtrl'
                    }
                }
            })
            .state('about.what', {
                url: '/what',
                views: {
                    'about-content': {
                        templateUrl: 'views/about/what.html',
                        controller: 'AboutWhatCtrl'
                    }
                }
            })
            .state('about.socio', {
                url: '/socio',
                views: {
                    'about-content': {
                        templateUrl: 'views/about/socio.html',
                        controller: 'AboutSocioCtrl'
                    }
                }
            })
            .state('about.bbbee', {
                url: '/bbbee',
                views: {
                    'about-content': {
                        templateUrl: 'views/about/bbbee.html',
                        controller: 'AboutBbbeeCtrl'
                    }
                }
            })

            .state('services', {
                url: '/services',
                views: {
                    'main-content': {
                        templateUrl: 'views/services/main.html',
                        'controller': 'ServicesMainCtrl'
                    }
                }
            })


            .state('services.services', {
                url: '/services',
                views: {
                    'services-content': {
                        templateUrl: 'views/services/services.html',
                        controller: 'ServicesServicesCtrl'
                    }
                }
            })

            .state('services.ami', {
                url: '/ami',
                views: {
                    'services-content': {
                        templateUrl: 'views/services/ami.html',
                        controller: 'ServicesAmiCtrl'
                    }
                }
            })

            .state('services.water prepaid', {
                url: '/water prepaid',
                views: {
                    'services-content': {
                        templateUrl: 'views/services/water prepaid.html',
                        controller: 'ServicesWaterPrepaidCtrl'
                    }
                }
            })


            .state('services.water engineering', {
                url: '/water engineering',
                views: {
                    'services-content': {
                        templateUrl: 'views/services/water engineering.html',
                        controller: 'ServicesWaterEngineeringCtrl'
                    }
                }
            })





            .state('services.vending', {
                url: '/vending',
                views: {
                    'services-content': {
                        templateUrl: 'views/services/vending.html',
                        controller: 'ServicesVendingCtrl'
                    }
                }
            })

            .state('services.profiling', {
                url: '/profiling',
                views: {
                    'services-content': {
                        templateUrl: 'views/services/profiling.html',
                        controller: 'ServicesProfilingCtrl'
                    }
                }
            })


            .state('services.field', {
                url: '/field',
                views: {
                    'services-content': {
                        templateUrl: 'views/services/field.html',
                        controller: 'ServicesFieldCtrl'
                    }
                }
            })

            .state('services.consulting', {
                url: '/consulting',
                views: {
                    'services-content': {
                        templateUrl: 'views/services/consulting.html',
                        controller: 'ServicesConsultingCtrl'
                    }
                }
            })


            .state('services.municipal', {
                url: '/municipal',
                views: {
                    'services-content': {
                        templateUrl: 'views/services/municipal.html',
                        controller: 'ServicesMunicipalCtrl'
                    }
                }
            })

            .state('services.commercial', {
                url: '/commercial',
                views: {
                    'services-content': {
                        templateUrl: 'views/services/commercial.html',
                        controller: 'ServicesCommercialCtrl'
                    }
                }
            })


            .state('services.case', {
                url: '/case',
                views: {
                    'services-content': {
                        templateUrl: 'views/services/case.html',
                        controller: 'ServicesCaseCtrl'
                    }
                }
            })

            .state('products', {
                url: '/products',
                views: {
                    'main-content': {
                        templateUrl: 'views/products/main.html',
                        'controller': 'ProductsMainCtrl'
                    }
                }
            })

            .state('products.products', {
                url: '/products',
                views: {
                    'products-content': {
                        templateUrl: 'views/products/products.html',
                        controller: 'ProductsProductsCtrl'
                    }
                }
            })
            .state('products.single', {
                url: '/single',
                views: {
                    'products-content': {
                        templateUrl: 'views/products/single.html',
                        controller: 'ProductsSingleCtrl'
                    }
                }
            })


            .state('products.three', {
                url: '/three',
                views: {
                    'products-content': {
                        templateUrl: 'views/products/three.html',
                        controller: 'ProductsThreeCtrl'
                    }
                }
            })


            .state('products.concentrator', {
                url: '/concentrator',
                views: {
                    'products-content': {
                        templateUrl: 'views/products/concentrator.html',
                        controller: 'ProductsConcentratorCtrl'
                    }
                }
            })


            .state('products.appliance', {
                url: '/appliance',
                views: {
                    'products-content': {
                        templateUrl: 'views/products/appliance.html',
                        controller: 'ProductsApplianceCtrl'
                    }
                }
            })


            .state('products.display', {
                url: '/display',
                views: {
                    'products-content': {
                        templateUrl: 'views/products/display.html',
                        controller: 'ProductsDisplayCtrl'
                    }
                }
            })


            .state('products.circuit', {
                url: '/circuit',
                views: {
                    'products-content': {
                        templateUrl: 'views/products/circuit.html',
                        controller: 'ProductsCircuitCtrl'
                    }
                }
            })


            .state('products.water', {
                url: '/water',
                views: {
                    'products-content': {
                        templateUrl: 'views/products/water.html',
                        controller: 'ProductsWaterCtrl'
                    }
                }
            })


            .state('products.vending unit', {
                url: '/vending unit',
                views: {
                    'products-content': {
                        templateUrl: 'views/products/vending unit.html',
                        controller: 'ProductsVendingUnitCtrl'
                    }
                }
            })


            .state('products.stand pipe', {
                url: '/stand pipe',
                views: {
                    'products-content': {
                        templateUrl: 'views/products/stand pipe.html',
                        controller: 'ProductsStandPipeCtrl'
                    }
                }
            })


            .state('tools', {
                url: '/tools',
                views: {
                    'main-content': {
                        templateUrl: 'views/tools/main.html',
                        'controller': 'ToolsMainCtrl'
                    }
                }
            })

            .state('tools.tools', {
                url: '/tools',
                views: {
                    'tools-content': {
                        templateUrl: 'views/tools/tools.html',
                        controller: 'ToolsToolsCtrl'
                    }
                }
            })
            .state('tools.downloads', {
                url: '/downloads',
                views: {
                    'tools-content': {
                        templateUrl: 'views/tools/downloads.html',
                        controller: 'ToolsDownloadsCtrl'
                    }
                }
            })
            .state('tools.distributor', {
                url: '/distributor',
                views: {
                    'tools-content': {
                        templateUrl: 'views/tools/distributor.html',
                        controller: 'ToolsDistributorCtrl'
                    }
                }
            })
            .state('contact', {
                url: '/contact',
                views: {
                    'main-content': {
                        templateUrl: 'views/contact/contact.html',
                        'controller': 'ContactContactCtrl'
                    }
                }
            })
            .state('contact.contact', {
                url: '/contact',
                views: {
                    'tools-content': {
                        templateUrl: 'views/contact/contact.html',
                        controller: 'ContactContactCtrl'
                    }
                }
            })

            .state('tools.software', {
                url: '/software',
                views: {
                    'tools-content': {
                        templateUrl: 'views/tools/software.html',
                        controller: 'ToolsSoftwareCtrl'
                    }
                }
            })

        ;
    });


































