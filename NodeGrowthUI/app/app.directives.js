var app = angular.module('NodeGrowth', []);

app.directive('topNavBar', function () {
    return {
        templateUrl: '/app/shared/topNavBar/topNavBar.html'
    };
});

app.directive('rooms', function () {
    return {
        restrict: 'E',
        templateUrl: '/app/components/rooms/templates/rooms.html',
        controller: ['$scope', function ($scope) {
            $scope.rooms = [
                {
                    name: 'Veg Room',
                    errors: [],
                    lights: []
                },
                {
                    name: 'Flower Room',
                    errors: [],
                    lights: []
                }
            ];
        }]
    };
});

app.directive('settings', function () {
    return {
        templateUrl: '/app/components/settings/templates/settings.html'
    };
});
