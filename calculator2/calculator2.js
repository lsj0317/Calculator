function add(char) {
    var display = document.getElementById('display');
    // 태그에 있는 id 속성을 사용하여 해당 태그에 접근하여 하고 싶은 작업을 할 때 쓰는 함수
    display.value = display.value + char;
    // display.value는 input 태그 안에 들어 있는 값을 의미
    // display.value += char; 로 쓸 수도 있다
    // input 태그의 값 뒤에 char 문자를 추가해 주는 역할
}
function calculate() {
    var display = document.getElementById('display');
    var result = eval(display.value); 
    // 식을 계산하고 result 변수에 저장
    document.getElementById('result').value = result;
}

