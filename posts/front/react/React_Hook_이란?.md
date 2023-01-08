---
thumb: asdf.png
summary: asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfaasdfasdfasdfasdfasdfasdfasdfaasdfasdfasdfasdfasdfasdfasdfaasdfasdfasdfasdfasdfasdfasdfaasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfaasdfasdfasdfasdfasdfasdfasdfaasdfasdfasdfasdfasdfasdfasdfaasdfasdfasdfasdfasdfasdfasdfaasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfaasdfasdfasdfasdfasdfasdfasdfaasdfasdfasdfasdfasdfasdfasdfaasdfasdfasdfasdfasdfasdfasdfaasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfaasdfasdfasdfasdfasdfasdfasdfaasdfasdfasdfasdfasdfasdfasdfaasdfasdfasdfasdfasdfasdfasdfaasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfaasdfasdfasdfasdfasdfasdfasdfaasdfasdfasdfasdfasdfasdfasdfaasdfasdfasdfasdfasdfasdfasdfaasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfaasdfasdfasdfasdfasdfasdfasdfaasdfasdfasdfasdfasdfasdfasdfaasdfasdfasdfasdfasdfasdfasdfaasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfaasdfasdfasdfasdfasdfasdfasdfaasdfasdfasdfasdfasdfasdfasdfaasdfasdfasdfasdfasdfasdfasdfaasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfaasdfasdfasdfasdfasdfasdfasdfaasdfasdfasdfasdfasdfasdfasdfaasdfasdfasdfasdfasdfasdfasdfaasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfaasdfasdfasdfasdfasdfasdfasdfaasdfasdfasdfasdfasdfasdfasdfaasdfasdfasdfasdfasdfasdfasdfaasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfaasdfasdfasdfasdfasdfasdfasdfaasdfasdfasdfasdfasdfasdfasdfaasdfasdfasdfasdfasdfasdfasdfaasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfaasdfasdfasdfasdfasdfasdfasdfaasdfasdfasdfasdfasdfasdfasdfaasdfasdfasdfasdfasdfasdfasdfaasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfaasdfasdfasdfasdfasdfasdfasdfaasdfasdfasdfasdfasdfasdfasdfaasdfasdfasdfasdfasdfasdfasdfaasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfaasdfasdfasdfasdfasdfasdfasdfaasdfasdfasdfasdfasdfasdfasdfaasdfasdfasdfasdfasdfasdfasdfaasdfasdfasdfasdfasdfasdfasdfaasdfasdfasdfasdfasdfasdfasdfaasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf@@@@@@@@@@@@@@@@@@@@@
tags: 
    - test1
    - a
    - b
---


![](https://velog.velcdn.com/images/juhwannn/post/5375f999-2634-4967-8402-481ea35880ac/image.png)

### React Hook 이란 ?
>
Hook 은 React 16.8 버전부터 React 요소로 새로 추가가 되었습니다. Hook을 이용하여 기존 Class바탕의 코드를 작성할 필요 없이 상태값과 여러 React의 기능을 사용할 수 있습니다.


우선, React Hook을 만든 이유는 기존의 React가 컴포넌트 사이에서 상태로직을 재사용 하기 어렵고 무결성을 해치는 코드들이 많이 나왔었다고 한다. 그렇다고 기존 Class 컴포넌트들을 Hook 으로 리팩토링해야하느냐 ?
공식문서에는 Class를 제거할 계획도 없고 미래에도 계속 Class 컴포넌트들을 지원할 예정이라고 한다.
<br/><br/>

단, Hook은 브라우저의 메모리자원을 사용하기때문에 자원생각을 안하고 함부로 사용했다간 전체적인 성능저하를 불러올 수 있다.

---

### 1. State Hook
아래는 버튼 클릭시 값이 증가하는 간단한 예제이다.

```javascript
import React, { useState } from 'react';

function Example() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
    	<button onClick={(e) => setCount(count + 1)}/>
    </div>
  );
}
```

위에서 사용된 useState() 가 훅이다.
해당 state는 컴포넌트가 다시 렌더링 되어도 그대로 유지가 되고 현재의 state 값 과 이 값을 업데이트하는 함수를 쌍으로 제공한다 (set이 아니여도 되지만 보통 set을 주로 사용).

useState 초기 state값을 인자로 하나 받고 (위 코드에서는 0으로 줬다.) 해당 초기값은 첫번째 렌더링에만 딱 한번 사용된다.

### 여러 state변수 선언하기
```javascript
function Example() {
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: 'Learn Hooks'}]);
}
```

### Effect Hook
아래 예시는 타이틀을 바꾸는 컴포넌트이다
```javascript
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    document.title = `you clicked ${count} times`;
    
    return (
      <div>
        <p>you clicked {count} times</p>
        <button onClick={() => setCount(count+1)}/>
      </div>
    )
  });
```

useEffect 를 사용하면 React는 DOM을 업데이트 한 이후에 effect 함수를 실행할것이다. 

### Hook 사용 규칙
- 최상위(at the top level) 에서만 Hook 을 호출해야한다. (반복문, 조건문, 중첩된 함수 내에서 Hook을 실행하면 안된다.)
- React 함수 컴포넌트 내에서만 Hook을 호출해야한다. (직접 만든 Custom Hook내에선 호출 가능)


### Hook 종류

*기본 Hook*
##### useState
- 컴포넌트의 state를 관리한다.
- Class Component 에서의 `this.state`, `this.setState` 와 같은 기능
    
##### useEffect
- LifeCycle 에서 
- `componentDidMount` `componentDidUpdate` `componentWillUnmount`를 대체
- Component가 다시 렌더링 될때마다 호출하는데 렌더링 이후 비동기로 처리되어야 할때 (side effect) 처리하기 위함.

```javascript
useEffect(() => {
  ...
  ...
}, []);
  배열 안에 요소가 변경이 될때마다 실행,
  빈배열상태로 두면 최초 렌더링시에만 실행.
```

##### useContext
- 부모컴포넌트와 자식 컴포넌트 간의 변수와 함수를 전역적으로 정의할 수 있다.

*추가 Hooks*
##### useReducer
- useState의 대체함수이다.
- 다수의 하윗값을 포함하는 복잡한 정적 로직을 만드는 경우나, 다음 state가 이전 state에 의존적인경우 보통 useState보다 useReducer를 선호한다.
- state 업데이트 로직을, reducer 함수에 따로 분리 할 수 있다.

useEffect 사용
```javascript
function Counter({initialCount}) {
  const [count, setCount] = useState(initialCount);
  return (
    <>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
    </>
  );
}
```

useReducer 사용
```javascript
const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}
```
##### useCallback

##### useMemo
##### useRef
- Class Component 에서 `React.createRef` 를 대체
- 가상 돔을 직접 컨트롤할 때 사용함.
- React는 실제 돔을 컨트롤하는것을 추천 안하고있음.
```javascript
function Example() {
  const btnRef = useRef();
  const onClick = () => {
    btnRef.style.color = "red";
  };
  
  return (
    <button onClick={onClick} ref={btnRef}/>
  )
}
```
##### useImperativeHandle
##### useLayoutEffect
##### useDebugValue
##### useTransition
##### useId

*Library Hooks*
##### useSyncExternalStore
##### useInsertionEffect




