app.controller("myController", function($scope) {
 $scope.ticketBox = [];
 $scope.today = new Date();
 $scope.item= {fname: "",lName: "",email:"", number:1};
 $scope.addItem = function(fName, lName, email, number) {
    console.log("submit form", fName, lName, email, number);
    var fedItem = {fName:fName, lName:lName, email:email, number:number};

    if (fName === "") {
        alert("Enter First Name");

    } else if (lName === "") {
        alert("Enter Last Name");

    } else if (email !== "") {
        alert("Enter Email");
        return true;

    } else if(number > 1) {
        fedItem.extra = "s";

    } else {
        fedItem.extra = "";
    }



    $scope.ticketBox.push(fedItem);
    $scope.item = {fName: "",lName: "", email:"",number:1};
};
});
