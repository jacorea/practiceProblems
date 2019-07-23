# assign variable
mylist = [1,2,3,4,5,6,7,8,9,10]

# for loop 
# for num in mylist:
#     print(num)

# printing even numbers of list 
for num in mylist:
    # check if num is even
    if(num%2 == 0):
        print(num)
    else:
        print(f'Odd Number: {num}')

# simple sum method 

list_sum = 0

for num in mylist: 
    list_sum = list_sum + num 
    
print(list_sum)

# tuple unpacking 
mylist = [(1,2),(3,4),(5,6),(7,8)]

for a,b in mylist:
    print(b)