import random
import string
length =random.randint(8, 12)
choices= string.ascii_lowercase + string.ascii_uppercase + string.digits
print(choices)
def randomPassword(n):
    list = [random.choice(choices) for i in range(n)]
    password =''.join(list)
    return password
print(randomPassword(length))    