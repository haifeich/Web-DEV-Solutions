users = [
    {
        "first_name": "Brain",
        "last_name": "Mohr",
        "age": 54
    },
    {
        "first_name": "Bella",
        "last_name": "VonRueden",
        "age": 17
    },
    {
        "first_name": "Franz",
        "last_name": "Raynor",
        "age": 28
    },
    {
        "first_name": "Celestino",
        "last_name": "Bailey",
        "age": 61
    }
]
def helloUsers(users):
    for user in users:
        print('My name is ' + user['first_name'] + " " + user["last_name"] + ' and I am ' + str(user['age'])+' years old.')
helloUsers(users)