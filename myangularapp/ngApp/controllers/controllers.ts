namespace myangularapp.Controllers {

    export class HomeController {
        public message = 'Hello from the home page!';
        public search;
        public car;
        public makes;
        public details;

        fetch() {
          if( this.search ) {
            this.$http.get("/api/cars" + this.search)
              .then((results) => {
                this.car = results.data
              });
          }
        }

        showModal(car) {
          this.$uibModal.open({
            templateUrl: "/ngApp/views/dialog.html",
            controller: "DialogController",
            controllerAs: "modal",
            resolve: {
              car: () => car
            },
            size: "lg"
          });
        }

        constructor(CarService:myangularapp.Services.CarService,private $state, private $stateParams, private $uibModal, private $http) {
            this.search = CarService.listCars();
            this.makes = CarService.listMakes();
        }
    }

      export class DialogController {

        public ok() {
          this.$uibModalInstance.close();
        }

      constructor(public car: string, private $uibModalInstance) {
      }
    }
      angular.module("myangularapp").controller("DialogController", DialogController);
}
