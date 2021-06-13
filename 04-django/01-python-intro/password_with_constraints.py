import random
import string

choices = string.ascii_lowercase + string.ascii_uppercase + string.digits +'-'+'_'
length =random.randint(8, 12)
def generator():  
    return [random.choice(choices) for i in range(length)]

def check():
    good = generator()
    # Recursion
    # if ('-'in good or '_'in good):
    #     for x in good:
    #         if x.isnumeric():return good
    #         else: return check()       
    # else: return check()    
    i = 0
    while i < len(good):       
        if (good[i] =='-' or good[i]== '_'):
            for x in range(len(good)):
                if good[x].isnumeric():return good
                elif x == len(good)-1:
                    good = generator()
                    i = -1                
        elif i == len(good)-1:
            good = generator()
            i = -1
        i = i + 1
        

password = ''.join(check())
print(password)