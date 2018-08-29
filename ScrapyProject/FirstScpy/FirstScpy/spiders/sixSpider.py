# -*- coding: utf-8 -*-
import scrapy
from FirstScpy.sixItems import SixItems


class SixspiderSpider(scrapy.Spider):
    name = 'sixSpider'
    allowed_domains = ['matplotlib.org']
    start_urls = [
        'https://matplotlib.org/examples/pylab_examples/accented_text.html']

    def parse(self, response):
        item = SixItems()
        url = response.xpath(
            "(//div[@class='section']//p/a)[2]//@href").extract_first()
        url = response.urljoin(url)
        # file_urls 必须是一个列表
        item['image_urls'] = [url]
        return item
