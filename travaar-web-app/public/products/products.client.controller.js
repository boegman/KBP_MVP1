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

       $scope.addHotel_2 = function() {
          $scope.hotels.$add({
            "address": "90 De Korte St, Johannesburg, 2000, South Africa",
            "contact_number": "011 1841516",
            "id": "hotel1",
            "name": "Once in Joburg",
            "products": [
              {
                "prodId": 1,
                "shortDescription": "BADJA FITTED CAP",
                "detailedDescription": "100% Cotton, Plastic peak, Fusing Hand Made in South Africa",
                "image": [
                  {
                    "url": "./img/products/prod-1-1.jpg"
                  },
                  {
                    "url": "./img/products/prod-1-2.jpg"
                  }
                ],
                "costPrice": 200,
                "displayPrice": 340,
                "quantity": 10,
                "origin": "Cape Town, South Africa",
                "supplierRef": "FC_BADJA"
              },
              {
                "prodId": 2,
                "shortDescription": "Makulu Jumbo bag",
                "detailedDescription": "Our largest bag makes for an ideal day bag.  The isiZulu word makulu means 'the biggest'.",
                "image": [
                  {
                    "url": "./img/products/prod-2-1.jpg"
                  },
                  {
                    "url": "./img/products/prod-2-2.jpg"
                  }
                ],
                "costPrice": 450,
                "displayPrice": 640,
                "quantity": 10,
                "origin": "Cape Town, South Africa",
                "supplierRef": "MakuluJumbo"
              },
              {
                "prodId": 3,
                "shortDescription": "Doorstop",
                "detailedDescription": "",
                "image": [
                  {
                    "url": "./img/doorstop.jpg"
                  }
                ],
                "costPrice": 200,
                "displayPrice": 250,
                "quantity": 10,
                "origin": "South Africa",
                "supplierRef": ""
              },
              {
                "prodId": 4,
                "shortDescription": "Hand Bag",
                "detailedDescription": "",
                "image": [
                  {
                    "url": "./img/handbag.jpg"
                  }
                ],
                "costPrice": 800,
                "displayPrice": 899,
                "quantity": 10,
                "origin": "South Africa",
                "supplierRef": ""
              },
              {
                "prodId": 5,
                "shortDescription": "Colorful necklace",
                "detailedDescription": "A colorful necklace made of beads",
                "image": [
                  {
                    "url": "./img/beads-necklace-md.jpg"
                  }
                ],
                "costPrice": 500,
                "displayPrice": 585,
                "quantity": 10,
                "origin": "South Africa",
                "supplierRef": ""
              }
            ]
          });

          console.log("Data added!");
      };

      //  $scope.addHotel_2();

      //Get hotel products
      $scope.hotel = {};
      $scope.getHotel = function(){
        var hotel_index = '-KZ1tjKMBrimWj6k1pHb';
      var hotel_ref = firebase.database().ref().child("hotels/"+hotel_index);
        var hotelObj = $firebaseObject(hotel_ref);
        hotelObj.$loaded()
            .then(function(){
                //success callback
                $scope.hotel = hotelObj;
            })
            .catch(function(error){
                //Failure callback
                console.log(error);
            });

      };

      $scope.getHotel();

    }]);
