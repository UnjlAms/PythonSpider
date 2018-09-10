#!/usr/bin/env python3
# -*- coding:utf-8 -*-
# @FilePath: \industryItems.py
# @Created Date: Monday September 10th 2018 8:32:41 pm
# @Author: UnjlAms
# @Email: unjlams@gmail.com
# @Last Modified:Monday September 10th 2018 8:32:41 pm


import scrapy


class industryItem(scrapy.Item):
    big_type_en_name = scrapy.Field()
    big_type_cn_name = scrapy.Field()
    big_type_code = scrapy.Field()
    small_type_en_name = scrapy.Field()
    small_type_cn_name = scrapy.Field()
    small_type_code = scrapy.Field()
