#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Date    : 2018-08-20 15:11:43
# @Author  : UnjlAms
# @Version : 1.0.0

import scrapy


class SecondSpider(scrapy.Spider):
    name = 'secondSpider'
    allowed_domains = ['quotes.toscrape.com']
    start_urls = ["http://quotes.toscrape.com/page/1/"]

    def parse(self, response):
        for quote in response.xpath("//div[@class='quote']"):
            yield {
                "text": quote.xpath("./span[@class='text']//text()").extract_first(),
                "author": quote.xpath("./span//small[@class='author']//text()").extract_first(),
                "tags": quote.xpath("./div/a[@class='tag']//text()").extract()
            }
        # 获取相对的地址链接 /page/2
        next_page = response.xpath(
            "//ul[@class='pager']/li[@class='next']/a/@href").extract_first()
        if next_page is not None:
            # 转换成绝对的地址链接 域名/page/2
            # next_page = response.urljoin(next_page)
            # yield scrapy.Request(url=next_page, callback=self.parse)
            # 或者使用 等价上面两行代码
            yield response.follow(next_page, callback=self.parse)
