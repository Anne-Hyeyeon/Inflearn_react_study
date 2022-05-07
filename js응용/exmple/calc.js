//계산 기능을 하는 파일

const add = (a,b) => a + b;
const sub = (a,b) => a - b;


// 이걸 사용하기 위해선 내보내기 해야함. 모듈로 만들기

module.exports ={
    moduleName : "calc",
    add : add,
    sub : sub,
};

