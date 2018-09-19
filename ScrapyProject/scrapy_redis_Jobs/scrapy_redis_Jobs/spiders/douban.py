# -*- coding: utf-8 -*-
import scrapy

from scrapy.linkextractors import LinkExtractor
from scrapy_redis.spiders import RedisCrawlSpider
from scrapy.spider import Rule

from scrapy_redis_Jobs.items import DoubanItem


# lpush douban:start_urls https://book.douban.com/tag/%E7%BC%96%E7%A8%8B?start=0&type=T

class DoubanSpider(RedisCrawlSpider):
    name = 'douban'
    allowed_domains = ['book.douban.com']
    # start_urls = ['https://book.douban.com/tag/编程?start=0&type=T']
    redis_key = 'douban:start_urls'

    # link_list = LinkExtractor(allow=(r'.+start=\d+&.*T'))
    link_list = LinkExtractor(restrict_xpaths=(
        "//div[@class='paginator']/a"))

    rules = [
        Rule(link_list, callback='parse_item', follow=True)
    ]

    def parse_item(self, response):
        rex = response.xpath("//ul[@class='subject-list']")
        for rep in rex.xpath("./li[@class='subject-item']//div[@class='info']"):
            four = DoubanItem()
            four['book_name'] = rep.xpath(
                "./h2/a//text()").extract_first().strip()
            four['author'] = rep.xpath(
                "./div[@class='pub']//text()").extract_first().strip()
            four['rating_nums'] = rep.xpath(
                ".//span[@class='rating_nums']//text()").extract_first()
            yield four
