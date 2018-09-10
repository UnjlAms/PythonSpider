#!/usr/bin/env python3
# -*- coding:utf-8 -*-
# @FilePath: \industry.py
# @Created Date: Monday September 10th 2018 8:22:37 pm
# @Author: UnjlAms
# @Email: unjlams@gmail.com
# @Last Modified:Monday September 10th 2018 8:22:37 pm


import sqlite3


class IndustryPipeline(object):
    def __init__(self, file_path):
        self.connect = sqlite3.connect(file_path)

    def open_spider(self, spider):
        print('sqlite数据库连接成功')
        self.connect.execute('''create table if not exists industry(
                id integer primary key not null,
                big_type_en_name varchar(40),
                big_type_cn_name varchar(40),
                big_type_code varchar(10),
                small_type_en_name varchar(40),
                small_type_cn_name varchar(40),
                small_type_code varchar(10)); ''')
        print('表创建成功')

    def process_item(self, item, spider):
        self.insert_db(item)
        # print(item)
        return item

    def insert_db(self, item):
        list = (
            item['big_type_en_name'],
            item['big_type_cn_name'],
            item['big_type_code'],
            item['small_type_en_name'],
            item['small_type_cn_name'],
            item['small_type_code'],
        )
        insert_sql = "insert into industry(big_type_en_name,big_type_cn_name,big_type_code,small_type_en_name,small_type_cn_name,small_type_code)values(?,?,?,?,?,?)"
        self.connect.execute(insert_sql, list)
        print('数据库插入成功')

    def close_spider(self, spider):
        self.connect.commit()
        self.connect.commit()
        print('数据库已关闭')

    @classmethod
    def from_crawler(cls, crawler):
        file_path = crawler.settings.get('SQLITE_DATABASE_PATH')
        return cls(file_path)
