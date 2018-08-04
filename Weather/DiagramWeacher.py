import matplotlib.pyplot as plt
import numpy
from PIL import Image
from wordcloud import ImageColorGenerator, WordCloud

from WeatherDBCon import *
'''
利用
matpotlib分析数据
wordcloud 分析词云内容
'''


class DiagramWeather(object):

    # 分析省份词云
    def wordcloud_province(self):
        # 创建数据库对象
        database = WeatherDBCon()
        # 连接数据库
        database.connect_database()
        sql = '''select province from provincesandcity '''
        list = database.select_database(sql)
        # 关闭数据库
        database.close_database()
        with open('data/word.txt', 'wb') as w:
            for ls in list:
                w.write((ls + ' ').encode('utf-8'))
        fonts = r'D:\Dropbox\应用\字体\msyhbd.ttc'
        text = open('data/word.txt', 'rb').read().decode('utf-8')
        word = WordCloud(
            background_color='black',
            font_path=fonts,
            width=500,
            height=500,
            margin=2).generate(text)
        plt.imshow(word)
        plt.axis("off")
        # word.to_file('ciyuan.png')   # 导出图片
        plt.show()

    # 分析市词云
    def wordclooud_city(self):
        # 创建数据库对象
        database = WeatherDBCon()
        # 连接数据库
        database.connect_database()
        sql = '''select city from cityandarea'''
        list = database.select_city(sql)
        # 关闭数据库
        database.close_database()
        # 关闭数据库
        with open('data/word_city.txt', 'wb') as w:
            for ls in list:
                w.write((ls + ' ').encode('utf-8'))
        fonts = r'D:\Dropbox\应用\字体\msyhbd.ttc'
        text = open('data/word_city.txt', 'rb').read().decode('utf-8')
        img = numpy.array(Image.open(r'H:\picture\词频分析图\haixili.png'))
        wordcloud = WordCloud(
            # 设置背景色
            background_color='white',
            # 设置字体
            font_path=fonts,
            # 词云形状
            mask=img,
            # 最大号字体
            max_font_size=100,
        ).generate(text)
        plt.imshow(wordcloud)
        plt.axis("off")
        plt.show()
        # wordcloud.to_file('ciyuan.png')   # 导出图片

    # 以图片为基础分析市词云
    def wordclooud_city_change(self):
        # 创建数据库对象
        database = WeatherDBCon()
        # 连接数据库
        database.connect_database()
        sql = '''select city, count(area) as area_count from cityandarea  GROUP BY city ORDER BY area_count desc'''
        list = database.select_city_change(sql)
        # 关闭数据库
        database.close_database()
        fonts = r'D:\Dropbox\应用\字体\msyhbd.ttc'
        img = numpy.array(Image.open(r'H:\picture\词频分析图\nvm.png'))
        # print(list)
        wordcloud = WordCloud(
            # 设置背景色
            background_color='white',
            # 设置字体
            font_path=fonts,
            # 词云形状
            mask=img,
            # 最大号字体
            max_font_size=100,
        ).generate_from_frequencies(dict(list))
        # 从背景图片生成颜色值
        image_colors = ImageColorGenerator(img)
        # 重新配对颜色
        plt.imshow(wordcloud.recolor(color_func=image_colors))
        plt.axis("off")
        # wordcloud.to_file('ciyuan.png')
        plt.show()

    # 计算


if __name__ == '__main__':
    # DiagramWeather().wordclooud_city()
    DiagramWeather().wordclooud_city_change()
    # DiagramWeather().wordcloud_province()
