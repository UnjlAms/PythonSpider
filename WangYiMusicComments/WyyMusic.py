#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Date    : 2018-08-12 17:30:49
# @Author  :Unjlams
# @Link    : link
# @Version : 1.0.0

import requests

import os

url = "http://music.163.com/weapi/song/enhance/player/url?csrf_token="


data = {
    'params': 'YhBWibftKUVfzsvwqhAFHaVZKPXR2Rlc2Hen7+aY0fHnsjhsMFy1yipCraQtsuQtjbV9dtIccN92GrLnbIPO2Cw1K/pR1KOB0nOkO331Xr0=',
    'encSecKey': '42534e7d4f77665605f8b37d77121557acb6318c3ec890d7df1b08a3de422eb985d958f4185ac052522f516a79fec92d428d9e000878c22cdb7b437234867a199984481fbebb87f3f1ce8efcdd6cc80030043a3f1f5e86156bcadd70c6a3cd84cd4f378544a08cb2ee450fde2b4576f4a71cf7ba65fd590466bb3ffda1c1a8e2'
}
headers = {
    'accept': "*/*",
    'accept-encoding': "gzip, deflate",
    'accept-language': "zh-CN,zh;q=0.9,en;q=0.8,en-US;q=0.7,ja;q=0.6",
    'cache-control': "no-cache",
    'connection': "keep-alive",
    'content-type': "application/x-www-form-urlencoded",
    'cookie': "**",
    'host': "music.163.com",
    'origin': "http://music.163.com",
    'pragma': "no-cache",
    'referer': "http://music.163.com/",
    'user-agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.32 Safari/537.36",
}

response = requests.post(url, data=data, headers=headers)

print(response.text)
