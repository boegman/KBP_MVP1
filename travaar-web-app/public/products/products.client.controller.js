angular.module('products').
    controller('productsCtrl',['$scope','$routeParams','$location', function($scope, $routeParams, $location){
        var self = this;

        self.products = [
            {
                name: 'Green Baby Sandstone Elephant',
                imageUrl: './img/elephant.jpg',
                price: 1500,
                description: 'A beautiful green baby sandstone elephant',
                origin: 'South Africa'
            },
            {
                name: 'Cool Colourful Backpack',
                imageUrl: './img/backpack-md.jpg',
                price: 300,
                description: '',
                origin: 'South Africa'
            },
            {
                name: 'DoorStop',
                imageUrl: './img/doorstop.jpg',
                price: 250,
                description: '',
                origin: 'South Africa'
            },
            {
                name: 'Hand Bag',
                imageUrl: './img/handbag.jpg',
                price: 899,
                description: '',
                origin: 'South Africa'
            },
            {
                name: 'Colourful Necklace',
                imageUrl: './img/beads-necklace-md.jpg',
                price: 585,
                description: 'A Colourful Necklace made of beads',
                origin: 'South Africa'
            }
        ];

        self.findOneProduct = function(){
            self.prodId = $routeParams.productId;
            $scope.product = self.products[self.prodId];

        };

        self.findOneProduct();

    }]);
