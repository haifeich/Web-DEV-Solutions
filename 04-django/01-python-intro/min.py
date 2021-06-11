def min(array): 
    try:
        min_number = array[0]   
        for x in array:
            if x <= min_number:min_number = x      
            else: min_number = min_number
        return min_number
    except IndexError as e:
        print('array is empty')
print(min([6,-2,7,3,-3]))
print(min([]))