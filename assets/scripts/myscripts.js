const URL = "https://covid19.mathdro.id/api";

let app = angular.module('MyApp', []);
app.controller('MyAppCtrl', ($scope, $http) => {
    // check app loaded
    console.log("Your App is Loaded");

    // this is controller
    $scope.title = "Stay Home Stay Safe";

    // calling API
    $http.get(URL).then((response) => {
        // on success
        console.log(response.data);

        $scope.all_data = response.data;


    }, (error) => {
        // on error
        console.log(error);
    });

    //get country data 
    $scope.get_c_data = () => {
        let Country = $scope.c;
        if (Country == "") {
            $scope.C_data = undefined;
            return;
        };

        $http.get(`${URL}/countries/${Country}`).then((response) => {

                console.log(response.data);
                $scope.C_data = response.data;
            },
            (error) => {
                console.log(error);
                $scope.err = error;

            });
    };

});