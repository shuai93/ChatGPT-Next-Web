import os
import random
import string
import csv

path = "./code.csv"

result_list = []
for i in range(100000):
    result_list.append(''.join(random.sample(string.ascii_letters + string.digits, 8)))

if os.path.exists(path):
  os.remove(path)

print(result_list)

print("----")
print(','.join(result_list[:100]))


with open(path, 'w') as f:
    # create the csv writer
    writer = csv.writer(f)

    # write a row to the csv file
    for code in set(result_list):
        writer.writerow([code])


