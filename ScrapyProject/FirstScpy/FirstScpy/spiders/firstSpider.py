# -*- coding: utf-8 -*-
#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Date    : 2018-08-14 15:08:03
# @Author  : UnjlAms
# @Version : 1.0.0

import scrapy
from FirstScpy.items import FirstscpyItem


class FirstspiderSpider(scrapy.Spider):
    name = "firstSpider"
    # 允许爬虫作用的范围
    allowed_domains = ["book.douban.com"]
    # 爬虫开始爬行的url
    start_urls = ['https://book.douban.com/tag']

    def parse(self, response):
        # scrapy的xpath返回的都是列表
        tag = response.xpath("//table[@class='tagCol']//td")
        # list = []
        for item in tag:
            fsit = FirstscpyItem()
            tag_name = item.xpath('./a//text()').extract()
            count = item.xpath('./b//text()').extract()
            fsit['tag_name'] = tag_name[0]
            fsit['count'] = count[0][1:-1:]
            yield fsit
            # list.append(fsit)
    # return list
