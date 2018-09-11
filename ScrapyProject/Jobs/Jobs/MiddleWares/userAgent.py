#!/usr/bin/env python3
# -*- coding:utf-8 -*-
# @FilePath: \userAgent.py
# @Created Date: Tuesday September 11th 2018 7:21:49 pm
# @Author: UnjlAms
# @Email: unjlams@gmail.com
# @Last Modified:Tuesday September 11th 2018 7:21:49 pm

import random
# 随机User-Agent
from Jobs.settings import USER_AGENTS


class UserAgentMiddlewares(object):
    def process_request(self, request, spider):
        user_agent = random.choice(USER_AGENTS)
        request.headers.setdefault("User-Agent", user_agent)
        # print('user_agent为:', user_agent)
