# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# https://doc.scrapy.org/en/latest/topics/items.html

import scrapy


class ScrapyRedisJobsItem(scrapy.Item):
    jobType_display = scrapy.Field()
    company_url = scrapy.Field()
    company_name = scrapy.Field()
    company_size_name = scrapy.Field()
    company_type_name = scrapy.Field()
    positionURL = scrapy.Field()
    companyLogo = scrapy.Field()
    workingExp_code = scrapy.Field()
    workingExp_name = scrapy.Field()
    eduLevel_code = scrapy.Field()
    eduLevel_name = scrapy.Field()
    salary = scrapy.Field()
    emplType = scrapy.Field()
    jobName = scrapy.Field()
    industry = scrapy.Field()
    geo_lat = scrapy.Field()
    geo_lon = scrapy.Field()
    city_name = scrapy.Field()
    city_code = scrapy.Field()
    updateDate = scrapy.Field()
    createDate = scrapy.Field()
    endDate = scrapy.Field()
    welfare = scrapy.Field()


class DoubanItem(scrapy.Item):
    book_name = scrapy.Field()
    author = scrapy.Field()
    rating_nums = scrapy.Field()
