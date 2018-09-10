#!/usr/bin/env python3
# -*- coding:utf-8 -*-
# @FilePath: \cityCodePl.py
# @Created Date: Monday September 10th 2018 4:26:12 pm
# @Author: UnjlAms
# @Email: unjlams@gmail.com
# @Last Modified:Monday September 10th 2018 4:26:12 pm

import sqlite3

#  城市代码的数据存储


class CityCodePipeline(object):
    def __init__(self, file_path):
        self.connect = sqlite3.connect(file_path)

    def open_spider(self, spider):
        print('sqlite数据库连接成功')
        self.connect.execute('''create table if not exists cityCode(
                        id integer primary key not null,
                        province_cn_name varchar(20),
                        province_en_name varchar(20),
                        province_code varchar(10),
                        city_cn_name varchar(20) not null,
                        city_en_name varchar(20) not null,
                        city_code varchar(10) not null,
                        area_cn_name varchar(20),
                        area_en_name varchar(20),
                        area_code varchar(10));''')
        print('表创建成功')

    # 执行
    def process_item(self, item, spider):
        self.insert_db(item)
        return item

    #  数据表的插入
    def insert_db(self, item):
        list = (
            item['province_cn_name'],
            item['province_en_name'],
            item['province_code'],
            item['city_cn_name'],
            item['city_en_name'],
            item['city_code'],
            item['area_cn_name'],
            item['area_en_name'],
            item['area_code']
        )
        insert_sql = "insert into cityCode(province_cn_name,province_en_name,province_code,city_cn_name,city_en_name,city_code,area_cn_name,area_en_name,area_code) values(?,?,?,?,?,?,?,?,?)"
        self.connect.execute(insert_sql, list)
        print('数据库插入成功')

    # 关闭
    def close_spider(self, spider):
        self.connect.commit()
        self.connect.close()
        print('数据库已关闭')

    @classmethod
    def from_crawler(cls, crawler):
        file_path = crawler.settings.get('SQLITE_DATABASE_PATH')
        return cls(file_path)
