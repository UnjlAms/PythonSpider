#!/usr/bin/env python3
# -*- coding:utf-8 -*-
# @FilePath: \fiveItems.py
# @Created Date: Tuesday August 28th 2018 10:07:16 pm
# @Author: UnjlAms
# @Email: unjlams@gmail.com
# @Last Modified:Tuesday August 28th 2018 10:07:16 pm

import scrapy

class FiveItems(scrapy.Item):
    # fiveSpider
    file_urls = scrapy.Field()
    file = scrapy.Field()
