# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# http://doc.scrapy.org/en/latest/topics/items.html

import scrapy
from scrapy.loader.processors import TakeFirst, MapCompose, Join


def marks_filter(text):
    return text.strip("“").strip("”")


class FirstscpyItem(scrapy.Item):
    # define the fields for your item here like:
    # name = scrapy.Field()
    # book_name = scrapy.Field()
    # writer_name = scrapy.Field()
    # star = scrapy.Field()
    # comments_count = scrapy.Field()
    # context = scrapy.Field()

    # secondSpider
    tag_name = scrapy.Field()
    count = scrapy.Field()
    # threeSpider
    text = scrapy.Field(
        input_processor=MapCompose(marks_filter),
    )

    author = scrapy.Field(
        input_processor=MapCompose(
            lambda x: [e[0] for e in x.split(' ')], str.upper),
        output_processor=Join()
    )

    tags = scrapy.Field(
        output_processor=Join('---')
    )


