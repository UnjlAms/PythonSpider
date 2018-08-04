import re
import requests
import random
import json
from datetime import datetime
from datetime import timedelta
from bs4 import BeautifulSoup
from requests import exceptions
'''
功能介绍:
    爬取全国各个城市未来7天的天气状况
获取城市的代码:
    http://weather.china.com.cn/domestic.html
    http://qq.ip138.com/weather/   备用站点

获取相应省市对应情况:
    http://api.weather.china.com.cn/weather/data/f城市代码.js

获取未来7天的天气:
    http://www.weather.com.cn/weather/101200104.shtml
    http://www.weather.com.cn/weather/城市代码.shtml

想法:
    1.通过城市代码找出相对应的省市
    2.将其分类,然后后通过城市代码获取天气
'''


class ChinaWeatherSpider(object):
    # 初始化构造函数
    def __init__(self):
        # 城市代码url
        self.city_code_url = 'http://weather.china.com.cn/domestic.html'
        # self.weather_url = weather_url  # 天气url
        # 请求头的设置
        self.headers_list = [
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.106 Safari/537.36',
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.18 Safari/537.36',
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:21.0) Gecko/20100101 Firefox/21.0'
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586'
        ]
        self.headers = {
            'User-Agent': random.choice(self.headers_list),
            'Connection': 'close'
        }

    # 获取各大城市的代码
    def get_city_code(self):
        req = requests.get(url=self.city_code_url, headers=self.headers)
        soup = BeautifulSoup(req.content, 'html.parser')
        city_code_list = []  # 添加城市代码列表
        # 获取城市代码
        for city_code in soup.find('div', id='nav1').find_all('a'):
            city_code_list.append(city_code.get('data-areaid').split(','))
        return city_code_list  # 二纬列表

    # 获取每个省市区相关信息
    def divide_city_code(self):
        city_list = []  # 获取所有省市区的信息
        # 各大省的列表
        for list in self.get_city_code():
            # 市城市代码
            for city_code in list:
                dic = {}  # 获取省市区, 时间
                url = 'http://api.weather.china.com.cn/weather/data/f' + city_code + '.js'
                req = requests.get(url=url, headers=self.headers)
                p = re.compile(r'\{.*\}').search(req.text, re.M | re.I)
                dict = json.loads(p.group())
                if dict['city']['c7'] != "":
                    dic['province'] = dict['city']['c7'] + '省'  # 省
                    dic['city'] = dict['city']['c5'] + '市'  # 市
                    dic['citycode'] = city_code  # 市代码
                    dic['longitude'] = dict['city']['c14']  # 经度
                    dic['latitude'] = dict['city']['c13']  # 纬度
                    dic['area'] = dict['city']['c3'] + '区'  # 区
                    dic['areacode'] = city_code  # 区代码
                    dic['datetime'] = dict['forecast']['f0']  # 时间
                    city_list.append(dic)
                    print(dic)
        return city_list

    # 获取天气情况, 返回天气的所有数据
    def get_climate(self):
        print('程序开始')
        count = 0
        weather_list = []  # 存放所有的城市的天气
        time_count = 0
        all_city = self.read_data('data/save_temporary.json')
        # all_city = self.divide_city_code()

        for list in all_city:  # 获取所有城市的信息
            try:
                url = 'http://www.weather.com.cn/weather/' + list['areacode'] + '.shtml'
                req = requests.get(url=url, headers=self.headers)
                soup = BeautifulSoup(req.content, 'html.parser')
                time_count = 0
                # 获取七天的天气的信息
                for clim in soup.find(
                        'ul', class_="t clearfix").find_all(
                            'li', class_=["skyid", "sky"]):
                    weather_map = {}  # 存放每个天气的状况
                    weather_map['area'] = list['area']  # 获取区域的列表
                    weather_map['areacode'] = list['areacode']  # 获取区域的代码
                    # 字符串转时间格式
                    t = datetime.strptime(list['datetime'], '%Y%m%d%H%M') + timedelta(days = time_count)
                    # 时间转字符串,  获取区域的时间
                    weather_map['datetime'] = t.strftime('%Y%m%d%H%M')
                    weather_map['climate'] = clim.find(
                        'p', class_='wea').text  # 获取天气
                    weather_map['temperature'] = clim.find(
                        'p', class_='tem').text.strip('\n')  # 获取温度
                    weather_map['winddirection'] = [
                        x.get('title')
                        for x in clim.find('p', class_='win').find_all('span')
                    ]  # 获取风向
                    weather_map['windcount'] = clim.find(
                        'p', class_='win').i.text  # 获取风的级数
                    # print(weather_map)
                    weather_list.append(weather_map)
                    time_count = time_count + 1
            except exceptions.Timeout as e:
                print('超时请求下一条链接', e)
            # 当服务器连接最大的时候就会出现此异常
            except requests.exceptions.ConnectionError as r:
                print('连接错误', r)

            count = count + 1
            print(count)
        # 存储天气的信息
        self.save_data(weather_list, 'data/climate.json')
        return weather_list

    '''
        原来数据:
            [
                {},
                {},
            ]
        排列数据:
        [{
            "湖北省": {
                "武汉市": [
                    {
                        "蔡甸区": "1"
                    },
                    {
                        "新洲区": "1"
                    }
                ]
            }
        }]
        {'province': '海南省', 'city': '东方市', 'citycode': '101310202', 'longitude': 19.06, 'latitude': 108.37, 'area': '东方区', 'areacode': '101310202', 'datetime': '201804271800'}
    '''

    # 省市区的代码进行数据清洗
    def clear_data(self):
        all_city = self.divide_city_code()
        # 保存临时信息
        self.save_data(all_city, 'data/save_temporary.json')
        # all_city = json.loads(self.read_data('lis.json'))
        province = None  # 记录省的名字
        city = None  # 记录市的名字

        acount_list = []  # 总的list集合
        province_map = {}  # 每隔省的map集合
        city_map = {}  # 每个省中市的map集合
        city_list = []  # 每个市的去列表

        provice_count = 1  # 省计数
        city_count = 1  # 市计数
        province_set = set()  # 省set, 判断set集合中省的个数
        city_set = set()  # 市set, 判断set集合中市的个数

        # 添加一个无用行
        all_city.append({
            'province': '#',
            'city': '#',
            'citycode': '#',
            'longitude': '#',
            'latitude': '#',
            'area': '#',
            'areacode': '#',
            'datetime': '#'
        })
        # 将省市格式化
        for list in all_city:
            # 利用set集合中的数量来判断是否相同
            city_set.add(list['city'])
            if city_count == len(city_set):
                # 从第二次相同的市开始执行，记录前一次的该市的区信息
                if city_count >= 2:
                    city_map[city] = city_list
                    city_list = []
                city_count = city_count + 1
                city = list['city']

            # 利用set集合中的数量来判断省是否相同
            province_set.add(list['province'])
            if provice_count == len(province_set):
                # 从第二次相同的省开始执行，记录前一次的该省的市信息
                if provice_count >= 2:
                    province_map[province] = city_map
                    acount_list.append(province_map)
                    province_map = {}
                    city_map = {}
                    print(acount_list)
                provice_count = provice_count + 1
                province = list['province']

            # area_map 记录地区相关信息
            area_map = {}
            area_map['area'] = list['area']
            area_map['areacode'] = list['areacode']
            area_map['longitude'] = list['longitude']
            area_map['latitude'] = list['latitude']
            city_list.append(area_map)

        # 保存数据排列后的信息
        self.save_data(acount_list, 'data/newData.json')
        return acount_list

    # 保存数据为json文件
    def save_data(self, all_city, file_path_name):
        with open(file_path_name, 'wb') as f:
            f.write(json.dumps(all_city, ensure_ascii=False).encode('utf-8'))

    # 读取json文件数据, 返回解析后的dict类型数据
    def read_data(self, file_path_name):
        file = None
        with open(file_path_name, 'rb') as f:
            file = f.read().decode('utf-8')
        return json.loads(file)


if __name__ == '__main__':
    ChinaWeatherSpider().clear_data()
