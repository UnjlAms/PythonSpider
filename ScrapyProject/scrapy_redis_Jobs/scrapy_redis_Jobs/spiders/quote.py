# -*- coding: utf-8 -*-
import scrapy

from scrapy_redis.spiders import RedisSpider


# lpush quote:start_urls http://quotes.toscrape.com/

class QuoteSpider(RedisSpider):
    name = 'quote'
    allowed_domains = ['quotes.toscrape.com']
    # start_urls = ['http://quotes.toscrape.com/']
    redis_key = 'quote:start_urls'

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
