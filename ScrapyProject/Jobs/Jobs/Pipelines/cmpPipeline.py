#!/usr/bin/env python3
# -*- coding:utf-8 -*-
# @FilePath: \CmpPipeline.py
# @Created Date: Tuesday September 11th 2018 2:58:25 pm
# @Author: UnjlAms
# @Email: unjlams@gmail.com
# @Last Modified:Tuesday September 11th 2018 2:58:25 pm


import sqlite3


class CompanyPipeline(object):
    def __init__(self, file_path):
        self.connect = sqlite3.connect(file_path)

    def open_spider(self, spider):
        print('sqlite数据库连接成功')
        self.connect.execute('''create table if not exists company(
                    id integer primary key not null,
                    jobType_display varchar(255),
                    company_url text,
                    company_name varchar(100),
                    company_size_name varchar(100),
                    company_type_name varchar(50),
                    positionURL text,
                    companyLogo text,
                    workingExp_code varchar(20),
                    workingExp_name varchar(50),
                    eduLevel_code varchar(20),
                    eduLevel_name varchar(20),
                    salary varchar(50),
                    welfare varchar(255),
                    emplType varchar(50),
                    jobName varchar(255),
                    industry varchar(50),
                    geo_lat varchar(20),
                    geo_lon varchar(20),
                    city_name varchar(20),
                    city_code varchar(10),
                    updateDate varchar(25),
                    createDate varchar(25),
                    endDate varchar(25)
                ) ''')
        print('表创建成功')

    def process_item(self, item, spider):
        self.insert_db(item)
        # print(item)
        return item

    def insert_db(self, item):
        list = (
            item['jobType_display'],
            item['company_url'],
            item['company_name'],
            item['company_size_name'],
            item['company_type_name'],
            item['positionURL'],
            item['companyLogo'],
            item['workingExp_code'],
            item['workingExp_name'],
            item['eduLevel_code'],
            item['eduLevel_name'],
            item['salary'],
            item['welfare'],
            item['emplType'],
            item['jobName'],
            item['industry'],
            item['geo_lat'],
            item['geo_lon'],
            item['city_name'],
            item['city_code'],
            item['updateDate'],
            item['createDate'],
            item['endDate'],
        )
        insert_sql = '''insert into company(
                jobType_display,
                company_url,
                company_name,
                company_size_name,
                company_type_name,
                positionURL,
                companyLogo,
                workingExp_code,
                workingExp_name,
                eduLevel_code,
                eduLevel_name,
                salary,
                welfare,
                emplType,
                jobName,
                industry,
                geo_lat,
                geo_lon,
                city_name,
                city_code,
                updateDate,
                createDate,
                endDate
            )
            values( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? )'''
        self.connect.execute(insert_sql, list)
        # print('数据库插入成功')

    def close_spider(self, spider):
        self.sub_file(str(spider.start))
        self.connect.commit()
        self.connect.commit()
        print('数据库已关闭')

    # 断点爬取
    def sub_file(self,number):
        data = ''
        number = "\'"+number+"\'\r"
        with open('../settings.py', 'r', encoding='UTF-8') as r:
            for line in r.readlines():
                if 'ZLZPCMPSPIDER_START' in line:
                    start = line.split('=')[1]
                    line = line.replace(start, number)
                data += line
        with open('../settings.py', 'w', encoding='UTF-8') as f:
            f.write(data)

    @classmethod
    def from_crawler(cls, crawler):
        file_path = crawler.settings.get('SQLITE_DATABASE_PATH')
        return cls(file_path)
