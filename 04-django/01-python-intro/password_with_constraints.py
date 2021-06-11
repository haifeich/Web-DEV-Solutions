import random
import string

choices = string.ascii_lowercase + string.ascii_uppercase + string.digits +'-'+'_'
length =random.randint(8, 12)
def generator():  
    return [random.choice(choices) for i in range(length)]

def check():
    good = generator()
    if ('-'in good or '_'in good):
        for x in good:
            if x.isnumeric():return good
            else: return check()       
    else: return check()

password = ''.join(check())
print(password)