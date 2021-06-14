def validate(str):
    str = str.strip()
    if (str[0] != '('):
        def noarea(str):
            if str.strip('-.').isnumeric():
    else:
        if(str[5]== ')'): 
            if str[1:4].isnumeric():
                noarea(str[6:])
            else: return False
        else: return False    
        
    elif str.strip('-.').isnumeric():
        if(len(str.strip('()-.')) == 10 or len(str.strip('()-.'))==14): return True
        else:return False
        
        
        if (str.isnumeric()):
            if len(str) ==10: return True
            else: return False
        elif('-' in str):
            if(len(str.strip('-')) == 10): return True 
            else: return False
    else: return False        
print(validate('23'))