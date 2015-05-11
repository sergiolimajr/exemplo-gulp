angular
  .module('app', [])
  .controller('appCtrl', appCtrl);

function appCtrl($scope) {
  $scope.title = "Search with AngularJs";
  $scope.contacts = [{
    name: 'Mary Jane',
    number: '888-1244'
  }, {
    name: 'Sergey Jonny',
    number: '555-5678'
  }, {
    name: 'Matt Johnson',
    number: '888-2299'
  }, {
    name: 'Sérgio Júnior',
    number: '888-9999'
  }, {
    name: 'Todd Motto',
    number: '888-6666'
  }, {
    name: 'Toretto',
    number: '146-9999'
  }, {
    name: 'Spider-man',
    number: '154-8956'
  }, {
    name: 'Batman',
    number: '775-6897'
  }]
};

it ('Should search contacts across this input', function() {
  var searchContact = element(by.model('searchContact'));
  searchContact.clear();
  searchContact.sendKeys('m');
  expectedContactName(['Mary Jane', 'Matt Jonny'], 'contact');

  searchContact.clear();
  searchContact.sendKeys('99');
  expectedContactName(['Matt Jhonson', 'Sérgio Júnior'], contact);
});
