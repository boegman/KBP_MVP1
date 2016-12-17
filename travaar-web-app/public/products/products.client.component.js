//@TODO Use curly braces for component
//FIX CONTROLLER TO USE NAME OF CONTROLLER AS A VARIABLE REFERENCE

angular.module('productView').
    component('productsView',{[
        templateUrl: './products/view-product.template.html',
        controller: ['$routeParams','$location', function($routeParams, $location){
            var self = this;

            self.products = [
                prod1 = {
                    name: 'Green Baby Sandstone Elephant',
                    description: 'A beautiful green baby sandstone elephant',
                    price: 1500,
                    origin: 'South Africa'
                }
            ];

            self.findOneProduct = function(){
                self.prodId = $routeParam.productId;
            };
        }]
    });
