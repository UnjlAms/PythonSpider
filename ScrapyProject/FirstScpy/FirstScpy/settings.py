# -*- coding: utf-8 -*-

# Scrapy settings for FirstScpy project
#
# For simplicity, this file contains only settings considered important or
# commonly used. You can find more settings consulting the documentation:
#
#     http://doc.scrapy.org/en/latest/topics/settings.html
#     http://scrapy.readthedocs.org/en/latest/topics/downloader-middleware.html
#     http://scrapy.readthedocs.org/en/latest/topics/spider-middleware.html

BOT_NAME = 'FirstScpy'

SPIDER_MODULES = ['FirstScpy.spiders']
NEWSPIDER_MODULE = 'FirstScpy.spiders'

# Crawl responsibly by identifying yourself (and your website) on the user-agent
# USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.57 Safari/537.36'

USER_AGENTS = [
    'AppleWebKit/533.16 (KHTML, like Gecko) Version/5.0 Safari/533.16"Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_3; zh-cn)',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.106 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.18 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:21.0) Gecko/20100101 Firefox/21.0',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.2486.0 Safari/537.36 Edge/13.10586'
]


PROXIES = [
    # 带帐号验证
    # {"ip_port": "121.42.140.113:16816", "user_passwd": "mr_mao_hacker:sffqry9r"},

    # 不带帐号验证
    {"ip_port": "127.0.0.1:1080", "username_password": ""}
]


# Obey robots.txt rules
# ROBOTSTXT_OBEY = True

# Configure maximum concurrent requests performed by Scrapy (default: 16)
# CONCURRENT_REQUESTS = 32

# Configure a delay for requests for the same website (default: 0)
# See http://scrapy.readthedocs.org/en/latest/topics/settings.html#download-delay
# See also autothrottle settings and docs
# DOWNLOAD_DELAY = 3
# The download delay setting will honor only one of:
# CONCURRENT_REQUESTS_PER_DOMAIN = 16
# CONCURRENT_REQUESTS_PER_IP = 16

# Disable cookies (enabled by default)
# COOKIES_ENABLED = False

# Disable Telnet Console (enabled by default)
# TELNETCONSOLE_ENABLED = False

# Override the default request headers:
DEFAULT_REQUEST_HEADERS = {
    'user-agent':
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.32 Safari/537.36",
    'Accept':
    'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
    # 'Accept-Language': 'en',
}


# Enable or disable spider middlewares
# See http://scrapy.readthedocs.org/en/latest/topics/spider-middleware.html
# SPIDER_MIDDLEWARES = {
#    'FirstScpy.middlewares.FirstscpySpiderMiddleware': 543,
# }

# Enable or disable downloader middlewares
# See http://scrapy.readthedocs.org/en/latest/topics/downloader-middleware.html
DOWNLOADER_MIDDLEWARES = {
    # 'FirstScpy.middlewares.MyCustomDownloaderMiddleware': 543,
    # User-Agent 中间件
    'FirstScpy.downloadMiddleware.UserAgent.UserAgentMiddlewares': 543,
    # 代理中间件
    'FirstScpy.downloadMiddleware.IPProxy.IpProxyMiddlewares': 544
}

# Enable or disable extensions
# See http://scrapy.readthedocs.org/en/latest/topics/extensions.html
# EXTENSIONS = {
#    'scrapy.extensions.telnet.TelnetConsole': None,
# }

# Configure item pipelines
# See http://scrapy.readthedocs.org/en/latest/topics/item-pipeline.html
# 管道文件 项目名.pipelines文件.类名
ITEM_PIPELINES = {
    # 设置好在管道文件的类
    # 'FirstScpy.pipelines.FirstscpyPipeline': 300,
    # 文件下载Pipelines
    # 'FirstScpy.filedownload.FileDownload': 100,
    # 图片下载Pipelines
    'FirstScpy.imagesDownload.ImagesDownload': 100,

}

# Enable and configure the AutoThrottle extension (disabled by default)
# See http://doc.scrapy.org/en/latest/topics/autothrottle.html
# AUTOTHROTTLE_ENABLED = True
# The initial download delay
AUTOTHROTTLE_START_DELAY = 200
# The maximum download delay to be set in case of high latencies
# AUTOTHROTTLE_MAX_DELAY = 60
# The average number of requests Scrapy should be sending in parallel to
# each remote server
# AUTOTHROTTLE_TARGET_CONCURRENCY = 1.0
# Enable showing throttling stats for every response received:
# AUTOTHROTTLE_DEBUG = False

# Enable and configure HTTP caching (disabled by default)
# See http://scrapy.readthedocs.org/en/latest/topics/downloader-middleware.html#httpcache-middleware-settings
# HTTPCACHE_ENABLED = True
# HTTPCACHE_EXPIRATION_SECS = 0
# HTTPCACHE_DIR = 'httpcache'
# HTTPCACHE_IGNORE_HTTP_CODES = []
# HTTPCACHE_STORAGE = 'scrapy.extensions.httpcache.FilesystemCacheStorage'


# ---------------- 数据的导出 ---------------------------
# scrapy crawl spiderName -o fileName.json
# 导出的位置
FEED_URL = 'H:/test2.csv'
# 导出的格式
FEED_FORMAT = 'csv'
# 导出文件的编码
FEED_EXPORT_ENCODING = 'utf-8'
# 导出文件的字段名和顺序
# FEED_EXPORT_FIELDS = ['text', 'author', 'tagName']
FEED_EXPORT_FIELDS = ['tag_name']


# ------------------保存日志信息的文件----------------------------
# LOG_FILE = 'log_file.log'
# 日志的五个等级
# CRITTICAL
# ERROR
# WARNING
# DEBUG
# INFO
# LOG_LEVEL = 'INFO'


# -----------------------关闭重定向-----------------------------
# REDIRECT_ENABLED = False


# ----------------------禁用Cookie----------------------------
COOKIES_ENABLED = False


# ----------------------文件下载---------------------------
FILES_STORE = 'H:\\IDM下载'


# ----------------------图片下载--------------------------
# 图片的路径
IMAGES_STORE = 'H:\\IDM下载'
# 过期天数
IMAGES_EXPIRES = 90  # 90天内抓取的都不会被重抓
# 缩略图
# IMAGES_THUMBS = {
#     "small": (50, 50),
#     "big": (270, 270)
# }
