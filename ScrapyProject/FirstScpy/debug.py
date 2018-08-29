import scrapy
from scrapy.crawler import CrawlerProcess

from FirstScpy.spiders.secondSpider import SecondSpider

process = CrawlerProcess({
    'USER_AGENT': 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1)',
    'FEED_FORMAT': 'json',
    'FEED_URI': './debug.json'
})

process.crawl(SecondSpider)  # 需要调试的类的名字
process.start()
