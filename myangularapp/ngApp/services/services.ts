namespace myangularapp.Services {

    export class CarService {
        private carResource;
        private makeResource;

        public listCars() {
            return this.carResource.query();
        }

        public listMakes() {
          return this.makeResource.query();
        }

        constructor($resource: ng.resource.IResourceService) {
              this.carResource = $resource('/api/cars/');
              this.makeResource = $resource("/api/makes/");
        }
    }
    angular.module('myangularapp').service('CarService', CarService);
    export class MyService {

    }
    angular.module('myangularapp').service('myService', MyService);
    }
