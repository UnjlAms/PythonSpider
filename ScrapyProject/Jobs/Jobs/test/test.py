#!/usr/bin/env python3
# -*- coding:utf-8 -*-
# @FilePath: \test.py
# @Created Date: Wednesday September 12th 2018 8:41:39 pm
# @Author: UnjlAms
# @Email: unjlams@gmail.com
# @Last Modified:Wednesday September 12th 2018 8:41:39 pm


def sub_file(number):
    data = ''
    number = "\'"+number+"\'\r"
    with open('test.txt', 'r', encoding='UTF-8') as r:
        for line in r.readlines():
            if 'ZLZPCMPSPIDER_START' in line:
                start = line.split('=')[1]
                line = line.replace(start, number)
            data += line
    with open('test.txt', 'w', encoding='UTF-8') as f:
        f.write(data)


import os


if os.path.exists('../data/Zlzp.db'):
    start = 0
else:
    start

file = os.path.basename(__file__)

print(this_file_path, db, file)
