#!/usr/bin/env python3
# -*- coding:utf-8 -*-
# @FilePath: \run.py
# @Created Date: Tuesday September 11th 2018 12:44:08 am
# @Author: UnjlAms
# @Email: unjlams@gmail.com
# @Last Modified:Tuesday September 11th 2018 12:44:08 am


from scrapy.utils.project import get_project_settings
from scrapy.crawler import CrawlerProcess

# 运行工程下的所有爬虫


def main():
    setting = get_project_settings()
    process = CrawlerProcess(setting)
    didntWorkSpider = ['sample']

    for spider_name in process.spiders.list():
        if spider_name in didntWorkSpider:
            continue
        print("Running spider %s" % (spider_name))
        process.crawl(spider_name)
    process.start()


if __name__ == '__main__':
    main()
