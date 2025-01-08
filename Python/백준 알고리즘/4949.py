'''
그냥, 스택으로 소괄호, 중괄호 하면 되는거 아님?
'''
input_text = True
brackets = list()

while not input_text == '.':
    input_text = input()
    brackets = []
    answer = False
    for text in input_text:
        if text == '(':
            brackets.append(text)
        elif text == ')':
            if brackets and brackets[-1] == '[':
                print('no')
                answer = True
                break
            else:
                try:
                    brackets.pop()
                except:
                    print('no')
                    answer = True
                    break
        if text == '[':
            brackets.append(text)
        elif text == ']':
            if brackets and brackets[-1] == '(':
                print('no')
                answer = True
                break
            else:
                try:
                    brackets.pop()
                except:
                    print('no')
                    answer = True
                    break
    # print(brackets, answer)
    if not brackets and not answer and not input_text == '.':
        print('yes')
    elif not answer and not input_text == '.':
        print('no')
