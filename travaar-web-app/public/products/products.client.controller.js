angular.module('products').
    controller('productsCtrl',['$scope','$routeParams','$location', '$firebaseArray',function($firebaseArray, $scope, $routeParams, $location){
        var self = this;

        var hotels_db = [
          {
            id: 'hotel1',
            name: "Once in Joburg",
            address: '2 Something De Korte, Braamfontein ',
            contact_number: '011 1841516',
            products: [
                {
                    name: 'Green Baby Sandstone Elephant',
                    imageUrl: './img/backpack-md.jpg',
                    price: 1500,
                    description: 'A beautiful green baby sandstone elephant',
                    origin: 'South Africa',
                    quantity: 5
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
            ]
          },
          {
            id: 'hotel2',
            name: "The Bannister Hotel",
            address: '4 Bertha Street, Braamfontein ',
            contact_number: '011 235644',
            products: [
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
            ]
          }

        ];


        //Object that stores our products inventory
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

        //Function run by `ng-Init` on the products template once the page has loaded
        //Retreives the `productId` from url and loads product located at that index in the inventory
        $scope.findOneProduct = function(){
            self.prodId = $routeParams.productId;
            $scope.product = self.products[self.prodId];

        };

        $scope.getProducts = function(){
            var hotel_index = 0;
            $scope.hotel = hotels_db[hotel_index];
        };

        $scope.getProducts();

        //Firebase
    //     var ref = firebase.database().ref().child("hotels");
    //
    //     // create a synchronized array
    //     $scope.hotels = $firebaseArray(ref);
    // //
    // //    // add new items to the array
    // //    // the message is automatically added to our Firebase database!
    //     $scope.addHotel = function() {
    //         $scope.hotels.$add({
    //             name: 'Once in Joburg',
    //             address: '2 De Korte',
    //             contact_number: '011 134 2323'
    //         });
    //     };

        // $scope.addHotel();


    }]);


    angular.module('products').controller("SampleCtrl", function($scope, $firebaseArray) {

        var ref = firebase.database().ref().child("hotels");

        // create a synchronized array
        $scope.hotels = $firebaseArray(ref);
    //
    //    // add new items to the array
    //    // the message is automatically added to our Firebase database!

    $scope.addHotel = function() {
           $scope.hotels.$add({
               name: 'Once in Joburg',
               address: '2 De Korte',
               contact_number: '011 134 2323'
           });
           console.log("Data added!");
       };



        $scope.addHotel();

});
