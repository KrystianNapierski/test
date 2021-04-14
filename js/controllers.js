var portfolioApp = angular.module('portfolioApp',[]); 
portfolioApp.controller('GalleryListCtrl', function($scope) {
    $scope.galleries = [
    { 'title':'Czechy',
     'when':'2015-08-14',
     'thumbnailUrl':'img/podroz/1_sm.jpg'
    },
    { 'title':'Włochy',
     'when':'2014-06-04',
     'thumbnailUrl':'img/podroz/2_sm.jpg'
    },
    { 'title':'Hiszpania',
     'when':'2014-02-07',
     'thumbnailUrl':'img/podroz/3_sm.jpg'
    },
    { 'title':'Birma',
     'when':'2015-04-02',
     'thumbnailUrl':'img/podroz/4_sm.jpg'
    },
    { 'title':'Chiny',
     'when':'2017-02-01',
     'thumbnailUrl':'img/podroz/5_sm.jpg'
    },
    { 'title':'USA',
     'when':'2018-12-12',
     'thumbnailUrl':'img/podroz/6_sm.jpg'
    }
    ];
    $scope.sortList = [
        {
        'label':'Alfabetycznie',
        'value':'title'
        },
        {
        'label':'Chronologicznie',
        'value':'when'
        },
        {
        'label':'Najnowsze',
        'value':'-when'
        } 
        
        ]; 
$scope.orderProp =$scope.sortList[0]; 
    }
    ); 
portfolioApp.controller('TitleListCtrl',function($scope)
{
    $scope.titles=['Moje podróże'];
});