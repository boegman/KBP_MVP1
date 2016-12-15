angular.module('products').
    controller('productsCtrl',['$scope','$routeParams','$location','$firebaseArray','$firebaseObject',function( $scope, $routeParams, $location, $firebaseArray, $firebaseObject){
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

        // $scope.getProducts = function(){
        //     var hotel_index = 0;
        //     $scope.hotel = hotels_db[hotel_index];
        // };
        //
        // $scope.getProducts();

        //FIREBASE
        var ref = firebase.database().ref().child("hotels");

        // create a synchronized array
        $scope.hotels = $firebaseArray(ref);

        $scope.addHotel = function() {
           $scope.hotels.$add({
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
                 }
               ]
           });

           console.log("Data added!");
       };

      //  $scope.addHotel();

      //Get hotel products
      $scope.hotel = {};
      $scope.getHotel = function(){
        var hotel_index = '-KZ1Xi-GclC3Xy6nkYEs';
      var hotel_ref = firebase.database().ref().child("hotels/"+hotel_index);
        var hotelObj = $firebaseObject(hotel_ref);
        hotelObj.$loaded()
            .then(function(){
                //success callback
                $scope.hotel = hotelObj;
                  console.log($scope.hotel);
            })
            .catch(function(error){
                //Failure callback
                console.log(error);
            });

      };

      $scope.getHotel();

    }]);
