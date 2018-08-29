#!/usr/bin/env python3
# -*- coding:utf-8 -*-
# @FilePath: \sixItems.py
# @Created Date: Tuesday August 28th 2018 11:19:23 pm
# @Author: UnjlAms
# @Email: unjlams@gmail.com
# @Last Modified:Tuesday August 28th 2018 11:19:23 pm

import scrapy


class SixItems(scrapy.Item):
    image_urls = scrapy.Field()
    images = scrapy.Field()
    image_paths = scrapy.Field()
