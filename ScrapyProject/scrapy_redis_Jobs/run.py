#!/usr/bin/env python3
# -*- coding:utf-8 -*-
# @FilePath: \run.py
# @Created Date: Wednesday September 19th 2018 6:09:15 pm
# @Author: UnjlAms
# @Email: unjlams@gmail.com
# @Last Modified:Wednesday September 19th 2018 6:09:15 pm


import redis
from scrapy import cmdline


def run(redis_keys, value):
    r = redis.Redis(host='127.0.0.1', port='6379', db=1)
    r.lpush(redis_keys, value)
    # 启动爬虫
    cmdline.execute('scrapy crawl zlzpCmpSpider'.split())


if __name__ == '__main__':
    redis_keys = 'zlzpCmpSpider:start_urls'
    values = 'https://fe-api.zhaopin.com/c/i/sou?start=0&pageSize=100&cityId=489&kt=3'
    run(redis_keys, values)
