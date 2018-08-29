# -*- coding: utf-8 -*-
import scrapy
from FirstScpy.fiveItems import FiveItems


class FivespiderSpider(scrapy.Spider):
    name = 'fiveSpider'
    start_urls = [
        'https://matplotlib.org/examples/pylab_examples/accented_text.html']

    def parse(self, response):
        item = FiveItems()
        url = response.xpath(
            "(//div[@class='section']//p/a)[1]/@href").extract_first()
        url = response.urljoin(url)
        # file_urls 必须是一个列表
        item['file_urls'] = [url]
        return item
