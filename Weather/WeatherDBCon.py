import pymysql
from ChinaWeather import *
'''
此文件为连接数据库, 并将数据添加到,数据库中
MySQL pyMySQL
'''


class WeatherDBCon(object):
    # 初始化链接数据库函数
    def __init__(self):
        self.host = 'localhost'
        self.port = 3306  # 端口号 必须是数字不能是字符串
        self.user = 'root'  # 帐号
        self.passwd = 'root'  # 密码
        self.db = 'chinaweather'  # 数据库名字
        self.charset = 'UTF8'  # 数据库的编码
        self.conn = None  # 数据库的连接对象
        self.cursor = None  #  数据库的指针对象

    # 连接数据库
    def connect_database(self):
        # 获取数据库连接
        self.conn = pymysql.connect(
            host=self.host,
            port=self.port,
            user=self.user,
            passwd=self.passwd,
            db=self.db,
            charset=self.charset)
        self.cursor = self.conn.cursor()  # 使用 cursor() 方法创建一个游标对象 cursor

    # 关闭数据库
    def close_database(self):
        self.cursor.close()  #  关闭指针
        self.conn.close()  #  关闭数据库的连接

    # 数据库的插入
    def insert_database(self, sql, data):
        try:
            self.cursor.execute(sql, data)
            self.conn.commit()  # 提交sql语句
        except:
            print('发生异常')
            # 如果发生错误则回滚
            self.conn.rollback()

    # 数据库的查询, 单独查询省
    def select_database(self, sql):
        try:
            list = []
            self.cursor.execute(sql)
            result = self.cursor.fetchall()
            for row in result:
                list.append(row[0])
        except:
            self.conn.rollback()
        return list

    # 数据库的查询, 单数查询市
    def select_city(self, sql):
        try:
            list = []
            self.cursor.execute(sql)
            result = self.cursor.fetchall()
            for row in result:
                list.append(row[0])
        except:
            self.conn.rollback()
        return list

    def select_city_change(self, sql):
        try:
            list = []
            self.cursor.execute(sql)
            result = self.cursor.fetchall()
            for row in result:
                list.append((row[0], row[1]))
        except:
            self.conn.rollback()
        return list


if __name__ == '__main__':
    # 省表的插入
    provinces_sql = '''insert into provincesandcity(province,city) values(%s,%s)'''
    # 市表的插入
    city_sql = '''insert into cityandarea(city, area, areacode, latitude,longitude) values(%s,%s,%s,%s,%s)'''
    # 天气表的插入
    weather_sql = '''insert into weather(area, areacode, time, climate, temperature, winddirection, windcount) values(%s,%s,%s,%s,%s,%s,%s)'''

    spider = ChinaWeatherSpider()
    spider.clear_data()
    spider.get_climate()
    list = spider.read_data('data/newData.json')
    climate = spider.read_data('data/climate.json')

    # 创建数据库对象
    database = WeatherDBCon()
    # 连接数据库
    database.connect_database()
    count = 0

    # 插入省,市表相关数据
    for map in list:
        province_name, = map  # 省的名字
        probvince_value, = map.values()  # 省名字对应的值
        # 市的名字, 市的值
        for city_key, city_value in probvince_value.items():
            database.insert_database(provinces_sql, (province_name, city_key))
            for area in city_value:
                database.insert_database(
                    city_sql, (city_key, area['area'], area['areacode'],
                               area['latitude'], area['longitude']))
                print('插入一条数据')

    # 插入所有的天气到数据库中
    for weather_map in climate:
        tup = (
            weather_map['area'],
            weather_map['areacode'],
            weather_map['datetime'],
            weather_map['climate'],
            weather_map['temperature'],
            str(weather_map['winddirection']),
            weather_map['windcount'],
        )
        database.insert_database(weather_sql, tup)
        count = count + 1
        print(count)
        print('插入一条数据')

    # 关闭数据库
    database.close_database()
