def min(array): 
    min_number =array[0]   
    for x in array:
        if x <= min_number:min_number= x      
        else: min_number=min_number
    return min_number
print(min([6,-2,7,3,-3]))