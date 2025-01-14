/**
 * [(lv.2)삼항-연산자.js]
 *
 * 다음을 수행하세요:
 * 1. 나이(age)에 따라 data 변수에 아래 값 중 하나를 할당하세요. 삼항연산자(?)를 반드시 사용해야 합니다.
 *    - 10세 이상 20세 미만이면 "10대"
 *    - 20세 이상 30세 미만이면 "20대"
 *    - 30세 이상 40세 미만이면 "30대"
 *
 * 위 조건을 만족하지 않을 경우는 자유롭게 처리합니다(빈 문자열 등).
 */

function ternaryOperator(age) {
  let data = "";
  if(age >= 10 && age < 20){
    data = "10대";
  }else if (age >=20 && age <30) {
    data = "20대";
  }else if (age >=30 && age<40) {
    data = "30대"
  }
  // TODO: 삼항연산자를 사용해 data 변수에 알맞은 값을 할당하세요.

  return data;
}

// export 를 수정하지 마세요.
export { ternaryOperator };
