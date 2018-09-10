#!/usr/bin/env python3
# -*- coding:utf-8 -*-
# @FilePath: \zlzpIdsSpider.py
# @Created Date: Tuesday September 11th 2018 12:08:29 am
# @Author: UnjlAms
# @Email: unjlams@gmail.com
# @Last Modified:Tuesday September 11th 2018 12:08:29 am

import json

import scrapy

from Jobs.Items.industryItems import industryItem

# 获取所有的招聘职位


class ZlzpIdsspiderSpider(scrapy.Spider):
    name = 'zlzpIdsSpider'
    allowed_domains = ['www.zhaoping.com', 'sou.zhaopin.com']
    start_urls = ['https://sou.zhaopin.com/']
    custom_settings = {
        'ITEM_PIPELINES': {
            'Jobs.Pipelines.industryPl.IndustryPipeline': 200
        }
    }

    def parse(self, response):
        # 获取所有的职业信息
        yield scrapy.Request("https://sou.zhaopin.com/?pageSize=60&jl=538&in=10100&kw=java", callback=self.get_all_industry)

        # 获取能选择的职业信息
    def get_all_industry(self, response):
        all = json.loads(response.xpath('//script[2]//text()').re(r'{.*}')[0])
        for big_type in all['basic']['dict']['industry']:
            if big_type['sublist'] != []:
                for small_type in big_type['sublist']:
                    industItem = industryItem()
                    industItem['big_type_en_name'] = big_type['en_name']
                    industItem['big_type_cn_name'] = big_type['name']
                    industItem['big_type_code'] = big_type['code']
                    industItem['small_type_en_name'] = small_type['en_name']
                    industItem['small_type_cn_name'] = small_type['name']
                    industItem['small_type_code'] = small_type['code']
                    yield industItem
