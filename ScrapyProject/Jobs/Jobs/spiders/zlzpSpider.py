# -*- coding: utf-8 -*-

import json

import scrapy

from Jobs.Items.cityCodeItems import CityCodeItem

# cd .\PythonSpider\ScrapyProject\Jobs\Jobs\spiders\

# https://sou.zhaopin.com

# 获取爬虫的招聘城市代码信息


class ZlzpspiderSpider(scrapy.Spider):
    name = 'zlzpSpider'
    allowed_domains = ['www.zhaoping.com', 'sou.zhaopin.com']
    start_urls = ['https://sou.zhaopin.com/']
    custom_settings = {
        'ITEM_PIPELINES': {
            'Jobs.Pipelines.cityCodePl.CityCodePipeline': 100
        }
    }

    def parse(self, response):
        # 获取所有的城市信息
        yield scrapy.Request("https://sou.zhaopin.com/?pageSize=60&jl=538&in=10100&kw=java", callback=self.get_city_code)

    # 获取所有的城市代码
    def get_city_code(self, response):
        all = response.xpath('//script[2]//text()').re(r'{.*}')
        all = json.loads(all[0])
        city_set = set([])
        # 获取城市区的所有信息
        for province in all['basic']['dict']['location']['province']:
            if province['sublist'] != []:
                for city in province['sublist']:
                    if city['sublist'] != []:
                        for area in city['sublist']:
                            city_code_info = CityCodeItem()
                            city_code_info['province_cn_name'] = province['name']
                            city_code_info['province_en_name'] = province['en_name']
                            city_code_info['province_code'] = province['code']
                            city_code_info['city_cn_name'] = city['name']
                            city_code_info['city_en_name'] = city['en_name']
                            city_code_info['city_code'] = city['code']
                            city_code_info['area_cn_name'] = area['name']
                            city_code_info['area_en_name'] = area['en_name']
                            city_code_info['area_code'] = area['code']
                            city_set.add(city['name'])
                            yield city_code_info
                    else:
                        city_code_info = CityCodeItem()
                        city_code_info['province_cn_name'] = province['name']
                        city_code_info['province_en_name'] = province['en_name']
                        city_code_info['province_code'] = province['code']
                        city_code_info['city_cn_name'] = city['name']
                        city_code_info['city_en_name'] = city['en_name']
                        city_code_info['city_code'] = city['code']
                        city_code_info['area_cn_name'] = ''
                        city_code_info['area_en_name'] = ''
                        city_code_info['area_code'] = ''
                        city_set.add(city['name'])
                        yield city_code_info
        # 缺少的热门城市
        for hotcity in all['basic']['dict']['location']['hotcitys']:
            if hotcity['sublist'] != []:
                for sub_city in hotcity['sublist']:
                    if hotcity['name'] not in city_set:
                        city_code_info = CityCodeItem()
                        city_code_info['province_cn_name'] = ''
                        city_code_info['province_en_name'] = ''
                        city_code_info['province_code'] = ''
                        city_code_info['city_cn_name'] = hotcity['name']
                        city_code_info['city_en_name'] = hotcity['en_name']
                        city_code_info['city_code'] = hotcity['code']
                        city_code_info['area_cn_name'] = sub_city['name']
                        city_code_info['area_en_name'] = sub_city['en_name']
                        city_code_info['area_code'] = sub_city['code']
                        yield city_code_info
