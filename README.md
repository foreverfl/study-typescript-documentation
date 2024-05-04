# TypeScript Documentation

- TypeScript 공식 문서를 보고 만든 학습자료입니다. 공식 문서 및 Claude 3 Opus를 통해 작성했습니다.

## 목차

1. [개발 환경](#1-개발-환경)
2. [배포 환경](#2-배포-환경)
3. [Get Started](#3-get-started)
4. The Basics
5. Everyday Type
6. Narrowing
7. More on Functions
8. Object Types
9. Type Manipulation
10. Classes
11. Modules
12. Project Configuration
13. Namespaces

## 1. 개발 환경

### 순서

1. **ts-node 설치**: 터미널에서 아래의 명령어를 실행하여 `typeacript` 및 `ts-node`를 전역으로 설치. `ts-node`는 Node.js의 모듈 로딩 API를 훅(hook)하여 TypeScript 파일을 JavaScript로 JIT(Just-In-Time) 컴파일하고 실행함. 따라서 `ts-node`를 사용하면 TypeScript 파일을 미리 컴파일하지 않고도 직접 실행할 수 있음.

```sh
npm install -g typescript
npm install -g ts-node
```

2. **프로젝트 초기화**: `npm init -y` 명령어를 실행하여 프로젝트를 초기화함.
3. **TypeScript 설정 파일 생성**: `npx tsc --init` 명령어를 실행하여 TypeScript 설정 파일인 tsconfig.json을 생성함. 이 파일은 TypeScript 컴파일러의 옵션을 정의하는 데 사용됨. `ts-node`를 사용할 때, 프로젝트 루트 디렉토리에 `tsconfig.json` 파일이 있다면 `ts-node`는 해당 파일의 설정을 자동으로 감지하고 적용함. 만약 `tsconfig.json` 파일이 없다면, ts-node는 기본 설정을 사용하여 TypeScript 파일을 컴파일하고 실행함.
4. **TypeScript 코드 작성 및 실행**: 개발 환경에서는 전역으로 설치한 `ts-node`를 활용해서 코딩을 진행함. 예를 들어, `ts-node index.ts`와 같이 CMD로도 가능하고, VSCode를 사용하고 있는 경우에는 실행을 하면 바로 OUTPUT에 결과가 표시됨.

## 2. 배포 환경

### 개요

- TypeScript로 개발을 진행할 경우에는 `ts-node`로 개발을 진행하더라도, Electron이나 React 등의 프레임워크를 활용해서 실제로 운용되는 환경으로 배포를 할 경우에는 `.js`로 컴파일을 해서 진행함.

### 순서

1. **프로젝트 초기화**: `npm init -y` 명령어를 실행하여 프로젝트를 초기화함.
2. **TypeScript 설치**: `npm install typescript` 명령어를 실행하여 TypeScript를 프로젝트의 개발 의존성으로 설치함.
3. **TypeScript 설정 파일 생성**: `npx tsc --init` 명령어를 실행하여 TypeScript 설정 파일인 tsconfig.json을 생성함. 이 파일은 TypeScript 컴파일러의 옵션을 정의하는 데 사용됨. `ts-node`를 사용할 때, 프로젝트 루트 디렉토리에 `tsconfig.json` 파일이 있다면 `ts-node`는 해당 파일의 설정을 자동으로 감지하고 적용함. 만약 `tsconfig.json` 파일이 없다면, `ts-node`는 기본 설정을 사용하여 TypeScript 파일을 컴파일하고 실행함.
4. **TypeScript 코드 작성**: 프로젝트 폴더 내에 `.ts` 확장자를 가진 TypeScript 파일을 작성함.
5. **TypeScript 컴파일**: `npx tsc` 명령어를 실행하여 TypeScript 코드를 JavaScript로 컴파일함. 컴파일된 JavaScript 파일은 `.js` 확장자로 생성됨.
6. **JavaScript 파일 실행**: `node` 명령어를 사용하여 생성된 JavaScript 파일을 실행할 수 있음. 예를 들어, `node index.js`와 같이 실행할 수 있음.

## 3. Get Started

### 타입 추론 (Types by Inference)

- TypeScript는 타입 추론(Type Inference)을 지원함. 이는 변수나 상수를 선언할 때 초기 값을 기반으로 타입을 자동으로 추론하는 것을 의미함. 따라서 명시적으로 타입을 선언하지 않아도 TypeScript가 자동으로 타입을 유추함.

```typescript
let userName = "John";
let age = 25;
let isStudent = true;

// name: string
// age: number
// isStudent: boolean
```

### 타입 정의하기 (Defining Types)

- 변수나 상수를 선언할 때 명시적으로 타입을 정의할 수 있음. 이를 통해 변수의 타입을 명확하게 지정하고, 타입 안정성을 높일 수 있음.

```typescript
interface User {
  name: string;
  id: number;
}

class UserAccount {
  name: string;
  id: number;
  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const user: User = new UserAccount("haruna", 10);
```

### 타입 구성 (Composing Types)

- TypeScript에서는 여러 가지 방법으로 타입을 구성할 수 있음. 이를 통해 복잡한 데이터 구조를 표현할 수 있음.

#### 종류

- **배열 타입 (Array Types)**

```typescript
let numbers: number[] = [1, 2, 3, 4, 5];
let names: Array<string> = ["John", "Jane", "Alice"];
```

- **튜플 타입 (Tuple Types)**

```typescript
let person: [string, number] = ["John", 25];
```

- **객체 타입 (Object Types)**

```typescript
let person: { name: string; age: number } = {
  name: "John",
  age: 25,
};
```

- **유니언 타입 (Union Types)**

```typescript
let value: string | number = "Hello";
value = 42;
```

### 구조적 타입 시스템 (Structural Type System)

- TypeScript는 구조적 타입 시스템(Structural Type System)을 사용함. 이는 타입 호환성을 확인할 때 타입의 구조(멤버)를 기반으로 판단한다는 것을 의미함.

```typescript
interface Point {
  x: number;
  y: number;
}

function printPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`);
}

class VirtualPoint {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}
const newVPoint = new VirtualPoint(13, 56);
printPoint(newVPoint); // prints "13, 56"
```

===

## 13. Namespaces

### 개요

- namespace는 코드의 구조화, 캡슐화, 이름 충돌 방지 등의 목적으로 사용되며, 특히 대규모 프로젝트에서 코드를 관리하고 유지보수하는 데 도움이 될 수 있음. 하지만 최근에는 모듈 시스템(ES6 모듈, CommonJS 등)의 사용이 더 일반적이며, 모듈 시스템을 사용하는 것이 권장됨. 모듈은 파일 단위로 스코프를 제공하고, 명시적인 가져오기와 내보내기를 통해 코드의 의존성을 관리할 수 있음.

### 사용 이유

- **코드 구조화 및 그룹화**: namespace를 사용하면 관련된 코드를 하나의 논리적인 단위로 그룹화할 수 있음. 큰 프로젝트에서 코드를 기능이나 책임에 따라 구분할 때 namespace를 활용할 수 있음. 예를 들어, 프로젝트에서 "utils", "components", "services"와 같은 namespace를 만들어 관련된 코드를 구조화할 수 있음.
- **이름 충돌 방지**: 같은 이름의 변수, 함수, 클래스 등이 여러 곳에서 사용될 때 이름 충돌이 발생할 수 있음. namespace를 사용하면 이러한 이름 충돌을 방지할 수 있음. 각 namespace 내에서는 고유한 이름을 가질 수 있으므로, 다른 namespace와의 충돌을 피할 수 있음.
- **전역 스코프 오염 방지**: 전역 스코프에 너무 많은 변수나 함수를 선언하면 코드의 가독성과 유지보수성이 떨어질 수 있음. namespace를 사용하면 전역 스코프를 오염시키지 않고 코드를 캡슐화할 수 있음. namespace 내부에서 선언된 변수, 함수 등은 해당 namespace 내에서만 접근 가능하므로 전역 스코프와 분리됨.
- **라이브러리나 프레임워크 개발**: 라이브러리나 프레임워크를 개발할 때 namespace를 활용하여 코드를 구조화하고 캡슐화할 수 있음. 라이브러리의 기능을 논리적인 단위로 그룹화하고, 사용자가 라이브러리를 사용할 때 필요한 부분만 선택적으로 임포트할 수 있도록 namespace를 활용할 수 있음.
- **레거시 코드와의 호환성**: 예전에는 모듈 시스템이 널리 사용되기 전에 namespace를 사용하여 코드를 구조화하는 경우가 많았음. 레거시 코드와의 호환성을 유지하기 위해 namespace를 사용할 수 있음. 기존의 namespace 구조를 유지하면서 점진적으로 모듈 시스템으로 마이그레이션할 수 있음.
