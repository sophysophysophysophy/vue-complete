vue 완벽 가이드 강의
1. vue.js 이용한 웹 서비스 구현 절차
2. 실무 프로젝트 진행 방식 ( 컴포넌트, 라우터, API, 스토어)
3. 컴포넌트 디자인 패턴과 자바스크립트 비동기 처리
4. Mixins과 HOC를 이용한 컴포넌트 재활용 방법
5. 외부 라이브러리 모듈화 및 실무 프로젝트 구성 방법
6. 사용자 경험을 높이는 라우터 설계 방법과 고급 라우터 패턴


-----------------------------------------------------------------------

VSCode 플러그인 리스트
Atom Keymap : 아톰의 키 설정을 불러오는 플러그인
Vetur : Vue.js 플러그인
Night Owl : 코드 하이라이팅 플러그인
Material Dark Syntax : 코드 하이라이팅 플러그인
Google Material Icon Theme : 폴더 아이콘 테마
ESLint : 자바스크립트 문법 검사 플러그인
TSLint : 타입스크립트 문법 검사 플러그인
Auto Close tag : HTML 태그 자동 닫기 플러그인
Live Server : 정적 파일을 로컬 서버에 올리고 자동 갱신해주는 플러그인
-----------------------------------------------------------------------

https://github.com/HackerNews/API
https://github.com/tastejs/hacker-news-pwas/blob/master/docs/api.md
구현할 화면 : hackernews 

----------------------------------------------------------------------

5개의 라우터 구성하여 페이지 이동할 수 있게 구현


----------------------------------------------------------------------

- vue cli 
vue init => vue 2.9에서 vue 프로젝트 생성 방식 
vue create vue-cli3 => CLI 3.0에서 동작  ==> vue create vue-cli3

vue 프로젝트 생성 시 
2 버전(init)과 3 버전(create)의 차이 ? 
전체 강의에서는 3 버전 기준으로 진행할 것 

차이점 
- 명령어 (init , create)
 vue init '프로젝트 템플릿 이름' '파일 위치'
 vue create '프로젝트 이름'

-웹팩 설정 파일 노출  (webpack.config.js)
2버전 : 노출 0
3버전 : 노출 x ===> 설정 추가하여 플러그인 등 추가해야 함 (설정 방법 새로 익혀야 함)

-프로젝트 구성 
2버전 : 깃헙의 템플릿 다운로드 ( vue init을 치면 기존의 파일 구성대로 다운로드 됨)
3버전 :  플러그인 기반으로 기능 추가 (npm i 로 추가해야 함. 원하는 기능 (라우터, vuex 등)을 추가할 수 있게 됨. 프로젝트 중간에도 플러그인 추가 가능)

- ES6 이해도
2버전 : 필요 x  ==> 
3버전 : 필요 o  ==> 축약문법 등 es6 문법에 충실한 코드 많음 

--------------------------------------------------------------------

preset : 기본적인 플러그인 골라 프로그램 셋업할 수 있게 해주는 것 

------------------------------------------------------------------------

eslint 끄는 법 : vue.config.js 파일에서 lintOnSave: false

-------------------------------------------------------------------------
<라우터 기본>
- 라우터 설치 및 라우터 구현
(npm i vue-router --save)  :

- router-view를 이용한 라우팅 컴포넌트 표시 (<router-view>)

- redirect 속성과 router-link


* 케밥 케이스 컴포넌트 스타일 가이드 
https://vuejs.org/v2/style-guide/#Component-name-casing-in-templates-strongly-recommended
* 파스칼 케이스 컴포넌트 스타일 가이드 
https://vuejs.org/v2/style-guide/#Multi-word-component-names-essential
------------------------------------------------------------------------
Toolbar의 라우터 링크

퀴즈 : itemview / userview 구현

* 라우터 폴더 작명 팁과 라우터 mode 안내
기본 라우터 폴더 : router
라우터 많기 떄문에 : routes 로 설정

원래 url은 8080/#/user와 같이 해쉬값 붙음
mode : history ==> #으로 붙는 해쉬값 없는 상태로 깔끔하게 나옴 
==> 8080/user

----------------------------------------------------------------------
views 폴더의 컴포넌트들 : 페이지에 라우팅 되어있는 컴포넌트만 들어가는게 좋음
페이지 역할을 하는 컴포넌트에 라우팅 정보만 담고 있어야 함. 데이터를 패치해오는 로직이 들어가면 좋지 않다. => 별도의 컴포넌트 구성하여 view com에서는 불러오면 되는 방식으로 사용하는 것이 좋ㅇ음

일괄적으로 api 폴더를 만들어서 통신 관리 

--------------------------------------------------------------------------

vue의 라이프사이클 훅 
https://vuejs.org/v2/guide/reactivity.html#ad

-------------------------------------------------------------------------
this 4가지 & 화살표 함수 

1. this : 기본적으로 전역으로 시작함 
    window : 브라우저 객체. 돔에 대한 접근. 뭐든 가장 최상단에는 window 있음
2. 함수 안에서도 기본적으로 this는 전역 (window)
    (이를 방지하기 위하여 use strict 사용)

3. 생성자 함수 안에서는?
    ex) function Vue(el) {
        console.log(this)
        this.el = el
    }
    new Vue('#app') 호출시 ==> this는 VUe() ==> 생성자 함수

4. 비동기처리에서의 this
 .then( function() {
     this는 undefined 
     왜? 비동기호출을 할 때는 기존에 있었던, 원래의 context에서 벗어나게됨
 })

 하지만 화살표 함수일 때?
 .then(()=>{
     this는 원래의 context 가리킴! 
     따라서 바인딩을 계속 해야하는 번거로움을 벗어나기 위하여 화살표 함수 많이 사용
     (vm = this) 사용 안해도됨!
 })


<자바스크립트의 비동기 처리>
* callback
-자바스크립트는 비동기처리이기 때문에 스크립트 진행이 일정하지 않음
(result 오기 전에 스크립트 진행되기 때문)

<promise 이해하기>
https://joshua1988.github.io/web-development/javascript/promise-for-beginners/

<promise MDN 주소>
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise

* promise
- ().then().catch() ==> promise 
- promise 객체가 반환되어야 위의 코드 사용 가능
- promise ==> resolve, reject를 인자로 받음 
 ex) function callAjax() {
     return new Promise(function(resolve, reject) {
         $.ajax({
             url: 'http://wwww.naver.com',
             success: function(data) {
                 resolve(data)      //success되면 resolve된 결과가 떨어지게 됨
             }
         })
     })
 }


//이렇게 사용! : callAjax는 promise객체를 반환함
// callAjax 안에서는  데이터를 받아와서 data를 resolve했을 떄! then의 함수를 실행하게 됨
callAjax()
 .then() 

------------------------------------------------------------------------
* Vuex (상태관리)
api ==> newsview (b4)
api ==> vuex ==> newsview (after)

설치 : npm i vuex (dependency에 추가됨)

1. main.js에 vuex 라이브러리를 import OR store 폴더로 관리
2. main.js 에 store 임포트 후 Vue 인스턴스에 속성 추가 (연결)

* actions & mutation 
- vuex data flow 
https://vuex.vuejs.org/

map helper 


ES6 spread operator 설명 링크
https://joshua1988.github.io/es6-online-book/spread-operator.html
------------------------------------------------------------------------
<동적 라우트 매칭 원리 및 적용>
특정 라우트로 이동할 때 정보를 가지고 이동하는 것 
: route/index에 등록할 떄 :id를 일단 주면 , param으로 넘겨줄 수 잇음

(+ query는? ==> route함수 이용하는 것 아니었나)



실습 순서
1. ItemView 생성
2. 라우터 정보 등록 
3. 해당 페이지 컴포넌트로 이동했을 때 받아온 params(id)를 이용해서 페이징 데이터 표시

- Dynamic Route Matching 공식 문서
https://router.vuejs.org/guide/essentials/dynamic-matching.html

- 해커 뉴스 API 문서 주소
https://github.com/tastejs/hacker-news-pwas/blob/master/docs/api.md

- ES6 템플릿 리터럴 설명 글(e북)
https://joshua1988.github.io/es6-online-book/template-literal.html



<v-html !!!>



Font awesome 사이트
https://fontawesome.com/

v-html API 문서
https://vuejs.org/v2/api/#v-html

v-html과 데이터 바인딩 차이점 문서
https://vuejs.org/v2/guide/syntax.html#Raw-HTML



<라우터 트랜지션>
==> 라우팅될 때마다 화면 자연스럽게 변하는 것 
router-view를 트랜디션 태그로 감싸면 뷰 내부에서 제공하는 자연스러운 transtion 효과 사용 가능
==> app.vue에서 태그 추가


- 라우터 트랜지션 문서
https://router.vuejs.org/guide/advanced/transitions.html#per-route-transition

- 뷰 트랜지션 문서
https://vuejs.org/v2/guide/transitions.html

------------------------------------------------------------------------
<컴포넌트 공통화 리팩토링 소개>
페이지에서 공통적으로 사용하는 리스트 컴포넌트로 뽑아내는 작업 

------------------------------------------------------------------------
Props Validation API 문서 
https://vuejs.org/v2/guide/components-props.html#Prop-Validation


------------------------------------------------------------------------
slot을 이용한 사용자 프로필 컴포넌트 구현

==> 상위 컴포넌트에서 정의하는 방법 === slot 
------------------------------------------------------------------------

컴포넌트 재활용 방법 및 재활용할 포인트 소개 

* 이벤트 버스 
==> spinner 등의 컴포넌트 관리에 활용
utils / bus.js에 구현

* 하이오더 
https://reactjs.org/docs/higher-order-components.html
코드를 재사용할 수 있는 기술 중 하나
페이지 컴포넌트 재활용
==> 컴포넌트 깊이가 깊어짐
==> 통신 불편함 커짐

* Mixin
https://joshua1988.github.io/vue-camp/reuse/mixins.html#%EB%AF%B9%EC%8A%A4%EC%9D%B8-%EC%BD%94%EB%93%9C-%ED%98%95%EC%8B%9D
효율이 좋음
CRUD 제외한 도구의 코드를 줄일 수 있음

------------------------------------------------------------------------
UX를 고려한 데이터 호출 시점
* 데이터 호출 시점
1. 컴포넌트 라이프 사이클 훅을 이용하여 데이터 호출
    -created (type : function)
    컴포넌트(instance)가 생성되자 마자 실행(호출)되는 라이프사이클 훅
    

2. 라우터 네비게이션 가드 
특정 라우터 주소에 진입하기 전에 실행되는 advanced
특정 url로 접근하기 전의 동작을 정의하는 속성(함수)
(beforeEnter)





시점 차이 : 라우터 네비게이션 가드가 먼저 호출되고, 컴포넌트가 생성된 후 created 라이프 사이클 훅이 호출됨

- created 라이프 사이클 훅 API 문서
https://vuejs.org/v2/api/#created

- 네비게이션 가드 블로그 글 링크
https://joshua1988.github.io/web-development/vuejs/vue-router-navigation-guards/

- 네비게이션 가드 뷰 라우터 공식 문서
https://router.vuejs.org/guide/advanced/navigation-guards.html#global-guards

------------------------------------------------------------------------
<자바스크립트 비동기 처리 패턴의 발전 과정>
1. .then.catch (chain 형식)
    물 흐르듯이 코드 진행 과정 가시적으로 볼 수 있음
2. async await
    사고의 위배를 좀 더 해결할 수 있음. 코드 좀 더 가시적임.
    promise와 callback에서 주는 단점 해결
    절차적으로, 가식적으로 코드 작성 가능

    먼저 함수의 앞에 async 라는 예약어를 붙입니다. 그러고 나서 함수의 내부 로직 중 HTTP 통신을 하는 비동기 처리 코드 앞에 await를 붙입니다. 여기서 주의하셔야 할 점은 비동기 처리 메서드가 꼭 프로미스 객체를 반환해야 await가 의도한 대로 동작합니다.

    복잡한 시나리오가 들어가는 순간, async await의 직관성의 장점이 빛남

    async 함수에 await 없다면 동작 제대로 안함 

await로 promise 객체(res) 리턴받앗을 때, 
`res` 라는 변수는 비동기 처리가 된 이후에만 접근이 가능할 것입니다. 따라서, `res` 변수와 연관된 로직들도 비동기 처리 이후에 진행됩니다. (res 관련하지 않은 코드들은 미리 진행, res 관련 코드들은 promise 객체 반환 후에 실행됨)


자바스크립트 async와 await
https://joshua1988.github.io/web-development/javascript/js-async-await/


* async await 에러 처리 방법
then의 경우 catch로 예외처리 ( 비동기 처리 요청에 대해서만 err 처리 가능)
async await ===> try catch 로 예외처리!
                (전통적인 js의 예외처리. 처리 요청 뿐 아니라 try 속에서 일어나는 모든 에러들을 catch에서 잡아줌)
            * 공통적으로 진행되는 에러에 대해 
            handleException(error)로 예외 처리
            ==> utils/handler.js 정의해서 공통적으로 처리 가능





------------------------------------------------------------------------
<외부 라이브러리 모듈화 방법(차트)>
1. 외부 라이브러리 모듈화 
 - 이유 : Vue.js 관련 라이브러리가 없을 때 일반 라이브러리를 결합할 수 있어야 함 
 - 종류
    1) 차트
    2) 데이트 피커
    3) 테이블
    4) 스피너


vue-charts 폴더 생성 => vue create => char.js 다운로드
1. 차트 라이브러리 NPM으로 설치
2. 설치된 라이브러리를 import로 App.vue에서 로딩
3. mounted() 라이프 사이클 훅에서 차트를 그림 
4. 차트를 컴포넌트화 (차트 모듈화)
    - 차트에 해당하는 코드들 별도의 컴포넌트로 생성
     (각 컴포넌트 충돌 해결 (이유: 캠버스 태그 똑같이 myChart이기에.. 뒤집어 씌워짐) ==> 요소 새로 등록해야함 or ref속성 사용 )
                - reference? 
                    : 일반 html 태그에 접근할 때(DOM접근할 때) js에서는 document.querySelector, document.getElementById로 접근
                        (돔 선택자)

                    vue에서 이와 같은 도구 ? => ref태그
                    ex) 
                        divEle= this.$refs.app (app이름으로 등록된 ref가져옴)
                            =>ref : 각 컴포넌트 기반으로 접근가능하기에 
                                    이름 같은 ref가 다른 컴포넌트에 있어도 충돌나지 않음!

5. 컴포넌트의 플러그인화 (Vue.prototype)
    plugins 폴더 생성 -> chartplugin.js 생성
    플러그인 : Vue.use 형태로 제공되는 라이브러리 => 플러그인 사용한 경우
    Vue에서 제공하는 플러그인 형태 ==> Vue.use로 접근하는 라이브러리

6. 컴포넌트 통신을 이용한 차트 컴포넌트 기능 결합
(props 속성, 이벤트 발생 등의 컴포넌트 통신을 통해 결합력 높임)
비즈니스 로직은 상위 컴포넌트에서 api 호출하여 받아와야 재활용성 높아짐


- Chart.js 공식 문서
https://www.chartjs.org/docs/latest/

- State of JS 2018 사이트 (현재 개발에 대한 통계 내주는 사이트)
https://2018.stateofjs.com/front-end-frameworks/overview/

- Vue.js 플러그인 문서
https://vuejs.org/v2/guide/plugins.html#ad




------------------------------------------------------------------------
<컴포넌트 디자인 패턴> - design 폴더에서 코드 확인 가능
1. Common - 기본적인 컴포넌트 등록과 컴포넌트 통신

2. Slot - 마크업 확장이 가능한 컴포넌트
    - slot vs props 
        slot : 상위 컴포넌트에서 정의한 item 부분이 하위 slot안에 들어감 
               그렇다면 slot을 왜 쓰는가?
                            ==> 리스트 로우 중 하나는 좀 다르게 표현하고 싶을때 유연하게 화면의 영역을 확장할 수 있음( 돔 구조 확장) 
                            (button, img 등 모두 가능)
                            + slot은 style도 맘대로 정의 가능
3. Controlled - 결합력이 높은 컴포넌트 (input박스 다룰 때 문제점 해결)
    - checkbox 등은 하위로 props로 내리면 해당 변수 v-model로 접근 불가
      => 해결 ? 상위 컴포넌트에서 v-model로 내리면 됨! 
        아래 컴포넌트에서는 props와 emit으로 데이터 상태에 접근
    결합력 높은 컴포넌트 생성 가능
    입력폼을 세부적인 컴포넌트로 쪼갤 때 유용==> controlled component

4. Renderless - 데이터 처리 컴포넌트
    - 템플릿 표현식 없음 script단에서의 비즈니스 처리만 있는 컴포넌트
    - 데이터 provider (데이터 제공만 하는 컴포넌트 == FetchData.vue)
    - 하위 컴포넌트 === 데이터 가져오는 역할
    - 하위 컴포넌트의 데이터를 상위 컴포넌트에 가져와서 데이터 뿌려주는 패턴
    - 아주 기괴한 현상...!
    - 자신만의 방향을 가지고 구현 가능
    - slot-scoped / render function 
Render Function API 문서 링크
https://vuejs.org/v2/guide/render-function.html#ad

------------------------------------------------------------------------
<서비스 배포하기>
npm run build 
=> 파일 변환 : 이렇게 변환된 파일을 웹서버에 올려주면 됨 
=> 결국 build란 호스팅할 파일을 생성해줌 (dist폴더)
(script ==> vue-cli-service)

* Netlify(호스팅 사이트) 이용하여 배포
Netlify 공식 사이트 주소
https://www.netlify.com/




=> netlify에 github 주소 이용하여 signup 
=> create a new site  (github)
=> deploy setting ==> 완성된 코드 branch 선택하여 deploy도 가능
=> build command : 빌드할 수 있는 커맨드 (npm run build)
=> 퍼블리쉬 디렉토리 : dist 폴더
=> deploy failed : why? base directory 때문! = vue-news로 폴더 한 단계 내려가야 함 (따라서 vue-news가 base directory)  
=> retry deploy !
=> in log : npm run build 진행된 거 확인 가능 (서비스에서 자동 돌려줌)
=> preview click
=> route  문제 ( public의 _redirects 파일 유무 ( in master branch))
=> single page application : url 정보 서버에서는 알지 못하고 브라우저에서만 알고 있음 따라서 redirects 파일에서 모든 접근에 대하여 index.html로 돌리겠다고 서버마다 설정을 해주어야 함
=> 웹서버에 이런 설정을 하지 않으면 routing을 클라이언트단에서 했을 때, url변경되었을 때 페이지 찾을 수 없다고 서버에서 먼저 응답해버리는 문제 발생 

Vue CLI 배포 설명 페이지 링크
https://cli.vuejs.org/guide/deployment.html#netlify

Cracking Vue.js
------------------------------------------------------------------------
env 환경 변수 파일을 이용한 옵션 변경 방법

env 파일 생성 (.env)  (env ; 환경 변수 파일)
내용 작성 (변수는 무조건 어플리케이션에서 접근 가능 == 앞에 VUE_ 붙임)
VUE 안붙이면 접근 안됨..
컴포넌트에서 접근 => ex) process.env.VUE_APP_TITLE

API의 URL을 변경하든지 등의 작업에 env 파일 활용됨




------------------------------------------------------------------------
남의 아이디라는 것 잊지말자..
최대한 빨리 완강하기 ..
완강!!!!!!!!!!!!

