app.controller("myController", function($scope) {
 $scope.ticketBox = [];
 $scope.item= {fname: "",lName: "",email:"", number:1, total: ""};
 $scope.addItem = function(fName, lName, email, number, total) {
    console.log("submit", fName, lName, email, number, total );
    var fedItem = {fname:fName, lName:lName, email:email, number:number, total:total};

    if(number > 1) {
      fedItem.extra = "s";
    } else {
      feditem.extra = "";
    }

    $scope.ticketbox.push(fedItem);
    $scope.item = {fName: "",lName: "", email:"",number:1,total:""};
};
});
