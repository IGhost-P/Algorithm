
import sys
bracket_list = sys.stdin.readline().rstrip()

bracket_stack : list = []
result = 0

for bracket in bracket_list:
    if (bracket == ')'):
        check = 0
        if len(bracket_stack) == 0:
            print(0)
            sys.exit(0)
        while bracket_stack:
            pop = bracket_stack.pop()
            if (pop== '('):
                if check == 0:
                    bracket_stack.append(2)
                else:
                    bracket_stack.append(2 * check)
                break
            elif (pop == "["):
                    print("0")
                    exit(0)
            else:
                check = check + int(pop)

    elif (bracket == "]"):
            check = 0
            if len(bracket_stack) == 0:
                print(0)
                sys.exit(0)
            while bracket_stack:
                pop = bracket_stack.pop()
                if pop == "[":
                    if check == 0:
                        bracket_stack.append(3)
                    else:
                        bracket_stack.append(3 * check)
                    break
                elif pop == "(":
                    print("0")
                    exit(0)
                else:
                    check = check + int(pop)
 
    elif bracket == '(' or bracket == '[':
        bracket_stack.append(bracket)
    else:
        print(0)
        sys.exit(0)
        
for i in bracket_stack:
    if i == '(' or i == '[':
        print(0)
        sys.exit(0)
    else:
        result += i
print(result)