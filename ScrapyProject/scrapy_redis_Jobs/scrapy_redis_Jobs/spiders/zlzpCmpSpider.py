# -*- coding: utf-8 -*-
import json
import os
import re

import scrapy
from scrapy.utils.project import get_project_settings
from scrapy_redis.spiders import RedisSpider

from scrapy_redis_Jobs.items import ScrapyRedisJobsItem

# lpush zlzpCmpSpider:start_urls https://fe-api.zhaopin.com/c/i/sou?start=0&pageSize=100&cityId=489&kt=3


class ZlzpcmpspiderSpider(RedisSpider):
    name = 'zlzpCmpSpider'
    # allowed_domains = ['fe-api.zhaopin.com']
    # start = 0
    # if os.path.exists('../data/Zlzp.db'):
    #     start = int(get_project_settings().get('ZLZPCMPSPIDER_START'))
    num_found = 0
    # start_urls = [
    #     'https://fe-api.zhaopin.com/c/i/sou?start=' +
    #     str(start)+'&pageSize=100&cityId=489&kt=3'
    # ]
    redis_key = 'zlzpCmpSpider:start_urls'
    # custom_settings = {
    #     'ITEM_PIPELINES': {
    #         'Jobs.Pipelines.cmpPipeline.CompanyPipeline': 300
    #     }
    # }

    # 设置请求域名
    # def __init__(self, *args, **kwargs):
    #     domain = kwargs.pop('domain', '')
    #     self.allowed_domains = filter(None, domain.split(','))
    #     super(ZlzpcmpspiderSpider, self).__init__(*args, **kwargs)

    # 开始爬取
    def parse(self, response):
        # print('start的值为----------', self.start)
        yield scrapy.Request(url=response.url, callback=self.get_all_numfound)

    # 获取职位的总数
    def get_all_numfound(self, response):
        self.num_found = json.loads(response.text)['data']['numFound']
        for start in range(0, self.num_found + 1, 100):
            url = 'https://fe-api.zhaopin.com/c/i/sou?start=' + \
                str(start)+'&pageSize=100&cityId=489&kt=3'
            yield scrapy.Request(
                url=url,
                meta={'start': start},
                callback=self.get_company_data
            )

    # 获取招聘公司的额所有信息
    def get_company_data(self, response):
        start = response.meta.get('start')
        # if response.meta.get('num_found') is not None:
        # self.num_found = response.meta['num_found']
        # print('总的职位数为:', self.num_found)
        company_json = json.loads(response.text)
        # if self.num_found > start:
        # print(self.num_found, self.start)
        for one_company in company_json['data']['results']:
            cpany = ScrapyRedisJobsItem()
            cpany['jobType_display'] = one_company['jobType']['display']
            cpany['company_url'] = one_company['company']['url']
            cpany['company_name'] = one_company['company']['name']
            cpany['company_size_name'] = one_company['company']['size']['name']
            cpany['company_type_name'] = one_company['company']['type']['name']
            cpany['positionURL'] = one_company['positionURL']
            cpany['companyLogo'] = one_company['companyLogo']
            cpany['workingExp_code'] = one_company['workingExp']['code']
            cpany['workingExp_name'] = one_company['workingExp']['name']
            cpany['eduLevel_code'] = one_company['eduLevel']['code']
            cpany['eduLevel_name'] = one_company['eduLevel']['name']
            cpany['salary'] = one_company['salary']
            cpany['emplType'] = one_company['emplType']
            cpany['jobName'] = one_company['jobName']
            cpany['industry'] = one_company['industry']
            cpany['geo_lat'] = one_company['geo']['lat']
            cpany['geo_lon'] = one_company['geo']['lon']
            # 所属地区的代码, 和名字
            if one_company['city']['items'] != []:
                code_list = []
                name_list = []
                for city in one_company['city']['items']:
                    name_list.append(city['name'])
                    code_list.append(city['code'])
                cpany['city_name'] = '-'.join(name_list)
                cpany['city_code'] = '-'.join(code_list)
            else:
                cpany['city_code'] = ''
                cpany['city_code'] = ''
            cpany['updateDate'] = one_company['updateDate']
            cpany['createDate'] = one_company['createDate']
            cpany['endDate'] = one_company['endDate']
            if one_company['welfare'] != []:
                cpany['welfare'] = ', '.join(one_company['welfare'])
            else:
                cpany['welfare'] = ''
            yield cpany
        # self.start = self.start + 100
        print('页面的数:', start)
        # yield scrapy.Request(url='https://fe-api.zhaopin.com/c/i/sou?start=' + str(self.start) + '&pageSize=100&cityId=489&kt=3', callback=self.get_company_data, dont_filter=True)
