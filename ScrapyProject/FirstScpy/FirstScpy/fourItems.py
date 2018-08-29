#!/usr/bin/env python3
# -*- coding:utf-8 -*-
# @FilePath: \fourItems.py
# @Created Date: Sunday August 26th 2018 10:50:20 pm
# @Author: UnjlAms
# @Email: unjlams@gmail.com
# @Last Modified:Sunday August 26th 2018 10:50:20 pm

import scrapy


class FourItem(scrapy.Item):
    # 书名
    book_name = scrapy.Field()
    # 作者
    author = scrapy.Field()
    # 评价星级
    rating_nums = scrapy.Field()
