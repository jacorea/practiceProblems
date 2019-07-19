my_list = [1,2,3]
print(my_list)
# length of a list 
print(len(my_list))

# Can index and slice 
# Can mutate elements in a list.

#adding new item to the end of the list 
my_list.append(4)
print(my_list)

#removing last item from a list
my_list.pop()
print(my_list)

#sort and revers methods
# sort method occurs in place
new_list = ['a','e','x','b','c']
num_list = [4,1,8,3]

num_list.sort()
new_list.sort()

print(my_list,new_list)

