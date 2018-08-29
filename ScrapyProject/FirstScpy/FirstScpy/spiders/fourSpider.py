#!/usr/bin/env python3
# -*- coding:utf-8 -*-
# @FilePath: \fourSpider.py
# @Created Date: Sunday August 26th 2018 10:28:00 pm
# @Author: UnjlAms
# @Email: unjlams@gmail.com
# @Last Modified:Sunday August 26th 2018 10:28:00 pm

import scrapy
# 导入CrawlSpider类和Rule
from scrapy.spiders import CrawlSpider, Rule
# 导入链接规则和匹配类, 用来提取符合规则的链接
from scrapy.linkextractors import LinkExtractor
# 导入items文件
from FirstScpy.fourItems import FourItem

# 继承CrawlSpider来自定义爬虫类


class FourSpider(CrawlSpider):
    name = 'fourSpider'
    allow_domains = ['book.douban.com']
    start_urls = ['https://book.douban.com/tag/编程?start=0&type=T']

    # link_list = LinkExtractor(allow=(r'.+start=\d+&.*T'))
    link_list = LinkExtractor(restrict_xpaths=(
        "//div[@class='paginator']/a"))

    rules = [
        Rule(link_list, callback='parse_item', follow=True)
    ]

    def parse_item(self, response):
        rex = response.xpath("//ul[@class='subject-list']")
        for rep in rex.xpath("./li[@class='subject-item']//div[@class='info']"):
            four = FourItem()
            four['book_name'] = rep.xpath(
                "./h2/a//text()").extract_first().strip()
            four['author'] = rep.xpath(
                "./div[@class='pub']//text()").extract_first().strip()
            four['rating_nums'] = rep.xpath(
                ".//span[@class='rating_nums']//text()").extract_first()
            yield four

        # def parse(self, response):
        #     # link_list = LinkExtractor(allow=(r'.+start=\d+&.*T'))
        #     link_list = LinkExtractor(restrict_xpaths=(
        #         "//div[@class='paginator']/a[1]"))
        #     list = link_list.extract_links(response)
        #     for link in list:
        #         print(link.url)
