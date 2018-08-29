#!/usr/bin/env python3
# -*- coding:utf-8 -*-
# @FilePath: \UserAgent.py
# @Created Date: Wednesday August 29th 2018 3:36:17 pm
# @Author: UnjlAms
# @Email: unjlams@gmail.com
# @Last Modified:Wednesday August 29th 2018 3:36:17 pm

import random
# 随机User-Agent
from FirstScpy.settings import USER_AGENTS


class UserAgentMiddlewares(object):
    def process_request(self, request, spider):
        user_agent = random.choice(USER_AGENTS)
        request.headers.setdefault("User-Agent", user_agent)
        print('user_agent为:', user_agent)
