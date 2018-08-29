#!/usr/bin/env python3
# -*- coding:utf-8 -*-
# @FilePath: \imagesDownload.py
# @Created Date: Tuesday August 28th 2018 11:23:32 pm
# @Author: UnjlAms
# @Email: unjlams@gmail.com
# @Last Modified:Tuesday August 28th 2018 11:23:32 pm

import scrapy
from scrapy.exceptions import DropItem
from scrapy.pipelines.images import ImagesPipeline
# 获取设置文件内容
from scrapy.utils.project import get_project_settings


class ImagesDownload(ImagesPipeline):
    def get_media_requests(self, item, info):
        for image_url in item['image_urls']:
            yield scrapy.Request(image_url)

    def item_completed(self, results, item, info):
        image_paths = [x['path'] for ok, x in results if ok]
        print('image_paths为:', image_paths, results)
        if not image_paths:
            raise DropItem("Item contains no images")
        item['image_paths'] = image_paths
        return item


'''
['full/128377b295cadde9f9e8371ce08a6bcc7c4adec7.jpg']
[
    (True,
        {
            'url': 'https://matplotlib.org/mpl_examples/pylab_examples/accented_text.png',
            'path': 'full/128377b295cadde9f9e8371ce08a6bcc7c4adec7.jpg', 'checksum': '5ba9960b202dc409e526d99a7cf5b953'
        }
     )
]
'''
