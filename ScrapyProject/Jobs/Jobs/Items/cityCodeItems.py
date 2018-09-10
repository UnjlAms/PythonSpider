#!/usr/bin/env python3
# -*- coding:utf-8 -*-
# @FilePath: \cityCodeItems.py
# @Created Date: Monday September 10th 2018 4:01:44 pm
# @Author: UnjlAms
# @Email: unjlams@gmail.com
# @Last Modified:Monday September 10th 2018 4:01:44 pm

import scrapy


#  获取城市代码和命令等相关信息
class CityCodeItem(scrapy.Item):
    province_cn_name = scrapy.Field()
    province_en_name = scrapy.Field()
    province_code = scrapy.Field()
    city_cn_name = scrapy.Field()
    city_en_name = scrapy.Field()
    city_code = scrapy.Field()
    area_cn_name = scrapy.Field()
    area_en_name = scrapy.Field()
    area_code = scrapy.Field()
