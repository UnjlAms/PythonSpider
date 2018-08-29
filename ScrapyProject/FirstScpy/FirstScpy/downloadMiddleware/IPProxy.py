#!/usr/bin/env python3
# -*- coding:utf-8 -*-
# @FilePath: \IPProxy.py
# @Created Date: Wednesday August 29th 2018 5:57:46 pm
# @Author: UnjlAms
# @Email: unjlams@gmail.com
# @Last Modified:Wednesday August 29th 2018 5:57:46 pm

import random
import base64
from FirstScpy.settings import PROXIES


class IpProxyMiddlewares(object):
    def process_request(self, request, spider):
        proxy = random.choice(PROXIES)

        if proxy['username_password'] == "":
            # 没有代理账户验证代理使用方式
            request.meta['proxy'] = "http://" + proxy['ip_port']
        else:
              # 对账户密码进行base64编码转换
            base64_username_password = base64.b64encode(
                proxy['username_password'].encode('utf-8'))
            request.meta['proxy'] = "http://" + proxy['ip_port']
            # 对应到代理服务器的信令格式里, 注意Basic这里的空格
            request.headers['Proxy-Authorization'] = 'Basic ' + \
                base64_username_password.decode('utf-8')
        print("proxy为", proxy)
