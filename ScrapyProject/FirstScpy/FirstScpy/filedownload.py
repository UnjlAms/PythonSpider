#!/usr/bin/env python3
# -*- coding:utf-8 -*-
# @FilePath: \filedownload.py
# @Created Date: Tuesday August 28th 2018 9:09:17 pm
# @Author: UnjlAms
# @Email: unjlams@gmail.com
# @Last Modified:Tuesday August 28th 2018 9:09:17 pm

from os.path import basename, dirname, join
from urllib.parse import urlparse

from scrapy.pipelines.files import FilesPipeline


class FileDownload(FilesPipeline):
    def file_path(self, request, response=None, info=None):
        path = urlparse(request.url).path
        print("path为:", basename(dirname(path)))
        return join(basename(dirname(path)), basename(path))
