window.app.controller('personController', personController);

personController.$inject = [];

function personController() {

  var vm = this;
  vm.firstName = "Mike";
  vm.lastName = "Testing";
  vm.getFullName = getFullName;

  function getFullName() {
    return vm.firstName + " " + vm.lastName;
  }

}
