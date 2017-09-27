app.controller("myController", function($scope, $localStorage) {
 $scope.ticketBox = [];
 //creates date function
 $scope.today = new Date();
 $scope.item= {fname: "",lName: "",email:"", number:1};
 $scope.addItem = function(fName, lName, email, number) {
     //create var fedItem to store info
    var fedItem = {fName:fName, lName:lName, email:email, number:number};



  // alert for if blank input field
    if (fName === "") {
        alert("Enter First Name");

    } else if (lName === "") {
        alert("Enter Last Name");

    } else if (email === "") {
        alert("Enter Email");
        return true;
    // if number is higher than 1 make plural
    } if(number > 1) {
        fedItem.extra = "s";

    } else {
        fedItem.extra = "";
    }
    //localStorage
    $localStorage.fedItem = fedItem;
      //pushes items to box
    $scope.ticketBox.push(fedItem);
     //resets inputs
    $scope.item = {fName: "",lName: "", email:"",number:1};
};
});
