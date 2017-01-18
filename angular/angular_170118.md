#### 오늘 코드아카데미에서 짠 코드

- service
```js
app.factory('emails', ['$http', function($http){
  return $http.get('https://s3.amazonaws.com/codecademy-content/courses/ltp4/emails-api/emails.json')
  .success(function(data){
    return data;
  })
  .error(function(err){
    return err;
  });
}]);
```
> service를 만들때는 factory함수로 만들 수 있다.
> 두번째 인자로 배열을 던지고 서버쪽과 통신하기윈한 $http를 주입시킨다.
> 배열의 두번째 인자안에서 $http.get함수를 실행시키고
> 성공 할 경우와 실패할 경우를 구분한다.
> get함수에는 데이터를 넣는다.


- controller
```js
app.controller('HomeController', ['$scope','emails', function($scope, emails) {
  emails.success(function(data){
    $scope.emails = data;
  });
}]);
```
> 만든 서비스를 컨트롤러에 주입하는 경우, 배열의 두번째 인자로 추가할 서비스를 인자로 넣고
> 함수안에 매개변수에도 추가한다.
> 이메일 데이터를 가져오는 것을 성공했을때의 경우를 정의한다.




### Top 10 app
-----------------
index.html
```html
<!doctype html>
<html>
  <head>
      <link href='https://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>
    <link href="https://s3.amazonaws.com/codecademy-content/projects/bootstrap.min.css" rel="stylesheet" />
    <link href="css/main.css" rel="stylesheet" />
    <script src="js/vendor/angular.min.js"></script>
  </head>
  <body ng-app="Top10App">
    <div class="header">
      <div class="container">
        10
      </div>
    </div>

    <div class="main" ng-controller="MainController">
      <div class="container">
        <div class="content">
					<div  ng-repeat="tv in shows">
            <div class="rank">{{$index + 1}}</div>
            <tv-show info="tv"></tv-show>
            </div>
        </div>
      </div>
    </div>

    <!-- Modules -->
    <script src="js/app.js"></script>

    <!-- Controllers -->
    <script src="js/controllers/MainController.js"></script>

    <!-- Directives -->
    <script src="js/directives/tvShow.js"></script>

    <!-- Services -->
    <script src="js/services/shows.js"></script>
  </body>
</html>
```

```html
<div class="main" ng-controller="MainController">
  <div class="container">
    <div class="content">
                <div  ng-repeat="tv in shows">
        <div class="rank">{{$index + 1}}</div>
        <tv-show info="tv"></tv-show>
        </div>
    </div>
  </div>
</div>
```
- ng-repeat에 shows는 메인 컨트롤러에서의 shows이다.
- info는 tvShow.js scope로 tvShow.html에 {{info.series}} 이부분의 info와 연결되어있다.


- tvShow.html (모듈화 시킨 tvShow 템플릿)
```html
<div class="img_container">
  <img class="img-responsive" ng-src="{{ info.series_img }}">
</div>
<h2 class="series"> {{ info.series }}</h2>
<p class="genre">{{ info.genre }} </p>
<p class="run-start"> {{ info.run_start }}</p>
<p class="description">{{ info.description }} </p>
```

- tvShow.js (커스텀 디렉티브)
```js
app.directive('tvShow', function(){
 return {
   restrict: 'E',
   scope: {
     info: '='
   },
   templateUrl: 'js/directives/tvShow.html'
 };
});
```

- MainController.js
```js
app.controller('MainController', ['$scope','shows', function($scope, shows) {
  shows.success(function(data){
    $scope.shows = data;
  }
  );
}]);
```
