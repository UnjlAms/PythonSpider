
'''

@author UnjlAms

'''

import json
import queue
import base64
import urllib3
import requests
from bs4 import BeautifulSoup
from Crypto.Cipher import AES
urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)


'''
功能介绍:
    抓取网易云音乐的评论

https://music.163.com/weapi/v1/resource/comments/R_SO_4_1299557768?csrf_token=
'''


class MusicComments:
    # 初始化参数
    def __init__(self):
        self._first_key = '0CoJUm6Qyw8W8jud'  # 第一把加密密钥
        self._second_key = 'FFFFFFFFFFFFFFFF'  # 第二把加密密钥
        self._iv = '0102030405060708'  # 加密密钥的偏移值
        self._key_mod = AES.MODE_CBC  # 密钥的加密模式
        self._queue = queue.Queue()  # 创建一个要爬歌曲的队列
        self._headers = {
            'Accept': '*/*',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,en-US;q=0.7,ja;q=0.6',
            'Connection': 'keep-alive',
            'Host': 'music.163.com',
            # 'Content-Type': 'application/x-www-form-urlencoded',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.32 Safari/537.36'
        }

    # AES加密
    def AES_encrypt(self, text, key, iv):
        add_len = 16 - len(text) % 16  # 需要补充的字符串位数
        text = text + add_len * chr(add_len)  # 增加填充后的字符串
        text = text.encode('utf-8')
        key = key.encode('utf-8')
        iv = iv.encode('utf-8')
        crypto_key = AES.new(key, self._key_mod, iv)
        crypto_text = crypto_key.encrypt(text)
        crypto_text = base64.b64encode(crypto_text)
        return crypto_text.decode('utf-8')

    # 获取params的值
    def get_params(self, text):
        first_Ciphertext = self.AES_encrypt(text, self._first_key, self._iv)
        second_Ciphertext = self.AES_encrypt(
            first_Ciphertext, self._second_key, self._iv)
        params = second_Ciphertext
        return params

    # 获取 encSecKey的值
    def get_encSecKey(self):
        encSecKey = '257348aecb5e556c066de214e531faadd1c55d814f9be95fd06d6bff9f4c7a41f831f6394d5a3fd2e3881736d94a02ca919d952872e7d0a50ebfa1769a7a62d512f5f1ca21aec60bc3819a9c3ffca5eca9a0dba6d6f7249b06f5965ecfff3695b54e1c28f3f624750ed39e7de08fc8493242e26dbc4484a01c76f739e135637c'
        return encSecKey

    # 获取json格式的数据
    def get_json(self, text, url):
        data = {
            'params': self.get_params(text),
            'encSecKey': self.get_encSecKey()
        }
        json_data = requests.post(url=url, data=data,
                                  headers=self._headers, verify=False)
        return json_data.content

    # 获取歌曲的名字和歌手
    def get_song_info(self, song_id):
        while True:
            try:
                url = 'https://music.163.com/song?id={0}'.format(song_id)
                r_content = requests.get(
                    url=url, headers=self._headers, verify=False)
                soup = BeautifulSoup(r_content.content, 'html.parser')
                if soup.find('div', class_='cnt') != None:
                    song_name = soup.find('div', class_='cnt').find(
                        'div', class_='tit').text.strip()
                    song_singer = soup.find('div', class_='cnt').find(
                        'p', class_=['des', 's-fc4']).span.a.text.strip()
                else:
                    continue
                break
            except Exception as e:
                print('请求出现错误, 请重新请求!!!', e)
        return song_name, song_singer

    # 获取评论的总条数
    def get_comments_count(self, song_id):
        url = 'https://music.163.com/weapi/v1/resource/comments/R_SO_4_{0}?csrf_token='.format(
            song_id)
        text = '{"rid":"R_SO_4_%s","offset":"%d","total":"%s","limit":"20","csrf_token":""}' % (
            song_id, 0, 'true')
        json_data = json.loads(self.get_json(text, url))
        return json_data['total']

    # 获取一首歌的评论
    def get_comments(self, song_id):
        comments_list = []
        url = 'https://music.163.com/weapi/v1/resource/comments/R_SO_4_{0}?csrf_token='.format(
            song_id)
        page_acount = self.get_comments_count(song_id) // 20 + 2
        print('共',page_acount,'页')
        for page in range(1, page_acount):
            print('-----------第{0}页---------------'.format(page))
            if page == 1:
                text = '{"rid":"R_SO_4_%s","offset":"%d","total":"%s","limit":"20","csrf_token":""}' % (
                    song_id, (page - 1) * 20, 'true')
            else:
                text = '{"rid":"R_SO_4_%s","offset":"%d","total":"%s","limit":"20","csrf_token":""}' % (
                    song_id, (page - 1) * 20, 'false')
            json_data = json.loads(self.get_json(text, url))
            for item in json_data['comments']:
                cmt = item['content']
                comments_list.append(cmt+'\r\n')
        return ''.join(comments_list)

    # 存入文本文件
    def save_txt(self, file_name, context):
        with open('test/{0}.txt'.format(file_name), 'wb') as fw:
            fw.write(context.encode('utf-8'))

    # 开始程序
    def start_programe(self):
        song_id = '536502758'
        song_name, song_singer = self.get_song_info(song_id)
        self.save_txt(song_name+"-"+song_singer, self.get_comments(song_id))


if __name__ == '__main__':
    MusicComments().start_programe()
