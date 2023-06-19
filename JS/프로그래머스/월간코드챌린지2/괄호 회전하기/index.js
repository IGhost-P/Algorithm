// 1. 괄호 체크 함수
// 2. dequeue로 돌리면서 괄호 체크 => 합계 구하기


const checkBrench = (s) => {
    const stack = []
    for(const k  of s){
        if(stack.length <= 0){
            stack.push(k)
            continue
        }
        
        if(stack.length >0){
            const top = stack[stack.length - 1]
            if(k === ']' && top === '['){
                stack.pop()
                continue
            }
        
            if(k === ')' && top === '('){
                stack.pop()
                continue
            }
        
            if(k === '{' && top === '}'){
                stack.pop()
                continue
            }    
        }
    }
    return stack.length > 0
}

function solution(s) {
    var answer = -1;
    return answer;
}
