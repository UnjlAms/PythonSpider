#!/usr/bin/env python3
# -*- coding:utf-8 -*-
# @FilePath: \threeSpider.py
# @Created Date: Tuesday August 21st 2018 10:59:56 pm
# @Author: UnjlAms
# @Email: unjlams@gmail.com
# @Last Modified:Tuesday August 21st 2018 10:59:56 pm


import scrapy
from FirstScpy.items import FirstscpyItem
from scrapy.loader import ItemLoader


class ThreeSpider(scrapy.Spider, ItemLoader):
    name = "threeSpider"
    allowed_domains = ['quotes.toscrape.com']
    start_urls = ["http://quotes.toscrape.com/page/1/"]

    def parse(self, response):
        # fi = FirstscpyItem(tag_name='小说', count='2')
        # print(fi)
        # list = []
        item = ItemLoader(item=FirstscpyItem(), response=response)
        # for each in response.
        item.add_xpath(
            'text', "//div[@class='quote']/span[@class='text']//text()")
        item.add_xpath(
            'author', "//div[@class='quote']/span//small[@class='author']//text()")
        item.add_xpath(
            'tags', "//div[@class='quote']/div/a[@class='tag']//text()")
        yield item.load_item()
