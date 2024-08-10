마이크로 프론트엔드 모노레포 형식의 간단한 예시 Repo 입니다.

### Getting started

```
npm install
npm run dev
```

### 구조

1. Host (app-shell)
   : 1개 이상의 Container를 Import 하고 있는 Module Federation Plugin의 단위 입니다.

2. Remote App (microfrontend1)
   : 현재 빌드의 일부가 아닌, 원격 컨테이너에서 런타임에 로드되는 모듈입니다.
