angular
    .module('app', [])
    .controller('Hello', Hello);

Hello.$inject = [];

function Hello() {
    var vm = this;

    vm.message = "Hello World";
}