/**
 * [(lv.3)deepClone.js]
 *
 * 중첩 객체와 배열을 복사하는 깊은 복사 함수를 작성하세요.
 * 재귀를 통해 객체나 배열을 만나면 내부까지 복사해야 합니다.
 *
 * @param {*} obj - 복사할 대상
 * @returns {*} 깊은 복사된 결과
 */

function deepClone(obj) {
  const result = {};
  if(typeof target === 'object' && target !== null){
    for(let prop in target) {
      result[prop] = obj[prop];
    }
  } else{
    result = target;
  }
  return result;
}

// export 를 수정하지 마세요.
export { deepClone };
