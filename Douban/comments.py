'''
  @Author: UnjlAms
  @Date: 2018-08-07 18:15:40
  @Last Modified by:   UnjlAms
  @Last Modified time: 2018-08-07 18:15:40
 '''

import re
import requests
import json
from PIL import Image
from bs4 import BeautifulSoup
import urllib3
urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)
'''
功能介绍:
    爬去豆瓣书评
获取一本书:
    https://accounts.douban.com/login   登录表单的提交页面
    https://book.douban.com/subject/2130190/
    https://book.douban.com/subject/2130190/comments/  评论
    https://book.douban.com/subject/2130190/comments/new?p=39
'''


# 豆瓣评论信息
class DoubanComments:
    # 初始化构造函数
    def __init__(self):
        self._rs = requests.session()  # session请求
        self._username = 'username'  # 帐号
        self._password = 'password'  # 密码
        self._headers = {
            'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.106 Safari/537.36',
            'Connection':
            'keep-alive',
            'Accept-Language':
            'zh-CN,zh;q=0.9,en;q=0.8,en-US;q=0.7',
            'Accept':
            'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
            'Accept-Encoding':
            'gzip, deflate, br'
        }

    # 登录模块
    # @return 登录是否成功
    def login_douban(self):
        login_page = self._rs.get(
            url="https://www.douban.com/accounts/login",
            headers=self._headers,
            verify=False)
        bs = BeautifulSoup(login_page.content, "html.parser")
        # 登录判断是否有验证码
        if bs.find('img', id='captcha_image') == None:
            # 登录的数据
            data = {
                'source': 'None',
                'form_email': self._username,  # 帐号
                'form_password': self._password,  # 密码
                'login': '登录'
            }
        else:
            b = bs.find('img', id='captcha_image').get('src')
            img = requests.get(url=b, headers=self._headers, verify=False)
            path = 'test/cap.jpg'
            self.download(path, img)
            Image.open(path).show()
            captcha_content = input('请输入验证码:')
            captcha_id = bs.find(
                'div', class_='captcha_block').find(
                    'input', type='hidden').get('value')
            print('captcha-id: %s' % captcha_id)
            data = {
                'source': 'None',
                'form_email': self._username,  # 帐号
                'form_password': self._password,  # 密码
                'captcha-solution': captcha_content,
                'captcha-id': captcha_id,
                'login': '登录'
            }
        r = self._rs.post(
            url='https://accounts.douban.com/login',
            data=data,
            headers=self._headers,
            verify=False)
        print(r.status_code)
        if r.status_code == 200:
            return True
        else:
            return False
        # s = rs.get(
        #     'https://www.douban.com/accounts/',
        #     headers=self._headers,
        #     verify=False)
        # with open('xxx.html', 'wb') as f:
        #     f.write(s.content)

    # 获取书本模块 ,
    # @url 书籍豆瓣的地址
    # @return 书籍的基本信息的字典
    def get_one_book(self, url):
        r_book = self._rs.get(url=url, headers=self._headers, verify=False)
        bs_book = BeautifulSoup(r_book.content, "html.parser")
        book_info = {}
        for b in bs_book.find("div", id='info').find_all('span', class_='pl'):
            b_text_strip = b.text.strip()  # 键
            b_text = b.next_sibling  # 值
            if b_text.strip() == "" or b_text == None or b.text.strip() == "译者":
                if b.text.strip() != "译者":
                    book_info[b_text_strip] = re.sub(
                        r'[ |\r|\n]{2,}', '', b_text.next_sibling.text.strip())
                else:
                    book_info[b_text_strip + ":"] = re.sub(
                        r'[ |\r|\n]{2,}', '', b_text.next_sibling.text.strip())
            else:
                book_info[b_text_strip] = b_text.strip()
        return book_info

    # 获取书籍的评论模块
    # @url 书籍评论的url
    # @return 书籍评论的列表
    def get_one_book_comments(self, url):
        r = self._rs.get(url=url + '1', headers=self._headers, verify=False)
        accounts_comt = int(
            re.compile(r'\d+').search(
                BeautifulSoup(r.content, 'html.parser').find(
                    'span', id='total-comments').text).group())
        page = accounts_comt // 20 + 2
        book_list = []  # 所有的评论
        one_book_comment = {}  # 单个人的评论
        for p in range(1, page):
            req = self._rs.get(
                url=url + str(p), headers=self._headers, verify=False)
            bs = BeautifulSoup(req.content, 'html.parser')
            for li in bs.find(
                    'div', id='comments').find_all(
                        'li', class_='comment-item'):
                one_book_comment = {}
                one_book_comment['name'] = li.find(
                    'span', class_='comment-info').a.text
                one_book_comment['date'] = li.find(
                    'span', text=re.compile(r'\d{4}\-\d+\-\d+')).text
                one_book_comment['context'] = li.find(
                    'span', class_='short').text
                book_list.append(one_book_comment)
            print(p)
        self.save_json(book_list)
        return book_list

    # 下载模块
    # @path 文件存放的路径
    # @rc 图片url
    def download(self, path, rc):
        with open(path, "wb") as fw:
            fw.write(rc.content)

    # 保存模块
    def save_json(self, list):
        with open('test/comt.json', 'wb') as fw:
            fw.write(json.dumps(list, ensure_ascii=False).encode('utf-8'))

    # 读取json文件数据, 返回解析后的dict类型数据
    def read_data(self, file_path_name):
        file = None
        with open(file_path_name, 'rb') as f:
            file = f.read().decode('utf-8')
        return json.loads(file)

    # 写入纯文本文件
    def write_txt(self):
        dict = self.read_data('test/comt.json')
        with open('test/comt.txt', 'wb') as fw:
            for list in dict:
                fw.write(list['context'].encode('utf-8'))
                fw.write('\r\n'.encode('utf-8'))

    # 开始模块
    def start_programe(self):
        # self.login_douban()
        # self.get_one_book('https://book.douban.com/subject/2130190/')
        self.get_one_book_comments(
            url="https://book.douban.com/subject/4866934/comments/new?p=")
        self.write_txt()


if __name__ == '__main__':
    DoubanComments().start_programe()
