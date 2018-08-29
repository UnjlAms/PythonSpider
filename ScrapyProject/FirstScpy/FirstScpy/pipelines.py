# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: http://doc.scrapy.org/en/latest/topics/item-pipeline.html

import json


class FirstscpyPipeline(object):
    # __init__方法是可选的, 作为类的初始化方法
    def __init__(self, url, redirect):
        self.filename = open('test.json', 'wb')
        self.url = url
        self.redirect = redirect

    # 此方法处理item数据, 是必须写的
    def process_item(self, item, spider):
        self.filename.write(
            json.dumps(dict(item), ensure_ascii=False).encode('utf-8'))
        # print("+++++++++++++++",self.url,self.redirect)

    # 此方法是可选的, 在程序调用完毕之后执行
    def close_spider(self, spider):
        self.filename.close()

    @classmethod
    def from_crawler(cls, crawler):
        url = crawler.settings.get('FEED_URL')
        redirect = crawler.settings.getbool('REDIRECT_ENABLED')
        delay = crawler.settings.getint('AUTOTHROTTLE_START_DELAY')
        # print("-------", url, redirect, delay)
        # 相当于是初始化类方法, 调用self.__init__()
        return cls(url, redirect)
