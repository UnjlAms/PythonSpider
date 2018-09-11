#!/usr/bin/env python3
# -*- coding:utf-8 -*-
# @FilePath: \cmpItems.py
# @Created Date: Tuesday September 11th 2018 2:55:04 pm
# @Author: UnjlAms
# @Email: unjlams@gmail.com
# @Last Modified:Tuesday September 11th 2018 2:55:04 pm


import scrapy


class CmpItem(scrapy.Item):
    jobType_display = scrapy.Field()
    company_url = scrapy.Field()
    company_name = scrapy.Field()
    company_size_name = scrapy.Field()
    company_type_name = scrapy.Field()
    positionURL = scrapy.Field()
    companyLogo = scrapy.Field()
    workingExp_code = scrapy.Field()
    workingExp_name = scrapy.Field()
    eduLevel_code = scrapy.Field()
    eduLevel_name = scrapy.Field()
    salary = scrapy.Field()
    emplType = scrapy.Field()
    jobName = scrapy.Field()
    industry = scrapy.Field()
    geo_lat = scrapy.Field()
    geo_lon = scrapy.Field()
    city_name = scrapy.Field()
    city_code = scrapy.Field()
    updateDate = scrapy.Field()
    createDate = scrapy.Field()
    endDate = scrapy.Field()
    welfare = scrapy.Field()
