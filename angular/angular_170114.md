### directive

#### 참고 사이트
-[앵귤러 디렉티브 이야기](http://www.nextree.co.kr/p4850/)


#### restrict
- HTML에서 디렉티브를 사용하기 위한 DOM 엘리먼트의 속성을 설정.
- restrict 규칙을 생략할 경우는 'A'로 선언한 것과 같은 효과를 나타내며 종류는 다음과 같습니다.

> E : element : <my-example>
> A : attribute : <div my-example>
> C : class : <div class="my-example">
> M : comment : <!-- directive: my-example -->


#### templateUrl
- template을 별도의 html 파일로 관리.
- templateUrl에 선언한 url에 해당하는 HTML을 로드합니다.
- 이때 index.html 위치를 기준으로 로드할 html의 상대위치를 정의합니다.

- [index.html]
``` html
<!doctype html>  
<html ng-app="exampleDirective">  
  <head>
    <script src="http://code.angularjs.org/1.2.10/angular.min.js"></script>
    <script src="script.js"></script>
  </head>
  <body>
    <div ng-controller="Ctrl">
      <my-example></my-example>
    </div>
  </body>
</html>  
```

- [script.js]
```js
angular.module('exampleDirective', [])  
  .controller('Ctrl', function($scope) {
    $scope.person = {
      name: 'nextreeMember',
      address: 'Gasan'
    };
  })
  .directive('myExample', function() {
    return {
      templateUrl: 'my-example.html'
    };
});
```

- [my-example.html]
```html
Name: {{person.name}} </br> Address: {{person.address}}  
```
