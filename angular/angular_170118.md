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
