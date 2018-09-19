#!/usr/bin/env python3
# -*- coding:utf-8 -*-
# @FilePath: \save_data.py
# @Created Date: Wednesday September 19th 2018 8:24:22 pm
# @Author: UnjlAms
# @Email: unjlams@gmail.com
# @Last Modified:Wednesday September 19th 2018 8:24:22 pm

import json
import pymysql
import redis


class ExportRedisToMysql:
    def __init__(self):
        # --------Mysql 数据初始化----------
        self.host = 'localhost'
        self.port = 3306  # 端口号 必须是数字不能是字符串
        self.user = 'root'  # 帐号
        self.passwd = 'root'  # 密码
        self.db = 'test'  # 数据库名字
        self.charset = 'UTF8'  # 数据库的编码
        self.mysql_conn = None  # 数据库的连接对象
        self.cursor = None  # 数据库的指针对象
        # ----------Redis 数据的初始化-----------------
        self.redis_host = '127.0.0.1'
        self.redis_port = '6379'
        self.redis_db = 0

    def connect_database(self):
        self.redis_conn = redis.Redis(
            host=self.redis_host,
            port=self.redis_port,
            db=self.redis_db
        )
        self.mysql_conn = pymysql.connect(
            host=self.host,
            port=self.port,
            user=self.user,
            passwd=self.passwd,
            db=self.db,
            charset=self.charset
        )
        self.cursor = self.mysql_conn.cursor()
        print('-----数据库连接成功-----')

    # 数据库的插入
    def insert_database(self, sql, data):
        try:
            self.cursor.execute(sql, data)
            self.mysql_conn.commit()  # 提交sql语句
            print('成功插入一条')
        except:
            print('发生异常')
            # 如果发生错误则回滚
            self.mysql_conn.rollback()

        # 关闭数据库
    def close_database(self):
        self.cursor.close()  # 关闭指针
        self.mysql_conn.close()  # 关闭数据库的连接
        print('-----数据库已关闭-----')

    # 程序开始
    def run(self):
        self.connect_database()
        sql = '''insert into doubanbook(book_name,author,rating_nums) values(%s,%s,%s)'''
        # 查看长度
        len = self.redis_conn.llen('doubanReq:items')
        count = 0
        while len > count:
            source, data = self.redis_conn.blpop('doubanReq:items')
            items = json.loads(data)
            each_data = items['book_name'], items['author'], items['rating_nums']
            self.insert_database(sql, each_data)
            count = count + 1
        self.close_database()


if __name__ == '__main__':
    ExportRedisToMysql().run()
