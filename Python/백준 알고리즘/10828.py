# 각 명령어는 if~ elif로 해야하자
import sys
input_num = int(sys.stdin.readline())
stack : list = []
i = 0

while i < input_num: 
    input_command = sys.stdin.readline().split()
    if (input_command[0] == 'push'):
        stack.append(int(input_command[1]))
    elif (input_command[0] == 'pop'):
        if(stack):
            pop_num = stack.pop()
            print(pop_num)
        else:
            print('-1')
    elif (input_command[0] == 'size'):
        print(len(stack))
    elif (input_command[0] == 'empty'):
        if(stack):
            print('0')
        else:
            print('1')
    elif (input_command[0] == 'top'):
        if(stack):
            print(stack[-1])
        else:
            print('-1')
    i += 1