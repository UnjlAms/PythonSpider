import numpy
from PIL import Image
from comments import DoubanComments
import matplotlib.pyplot as plt
from wordcloud import ImageColorGenerator, WordCloud


def wordcloud_comments():
    with open('test/comt.txt', 'rb') as r:
        text = r.read().decode('utf-8')
    fonts = r'D:\Dropbox\应用\字体\msyhbd.ttc'
    img = numpy.array(Image.open(r'H:\picture\词频分析图\huge.jpg'))
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
    ).generate(text)
    # 从背景图片生成颜色值
    # image_colors = ImageColorGenerator(img)
    # 重新配对颜色
    plt.imshow(wordcloud)
    plt.axis("off")
    wordcloud.to_file('test/ciyuan.png')
    plt.show()


DoubanComments().start_programe()
wordcloud_comments()