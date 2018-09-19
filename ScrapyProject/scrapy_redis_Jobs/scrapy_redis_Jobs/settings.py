# -*- coding: utf-8 -*-

# Scrapy settings for scrapy_redis_Jobs project
#
# For simplicity, this file contains only settings considered important or
# commonly used. You can find more settings consulting the documentation:
#
#     https://doc.scrapy.org/en/latest/topics/settings.html
#     https://doc.scrapy.org/en/latest/topics/downloader-middleware.html
#     https://doc.scrapy.org/en/latest/topics/spider-middleware.html

BOT_NAME = 'scrapy_redis_Jobs'

SPIDER_MODULES = ['scrapy_redis_Jobs.spiders']
NEWSPIDER_MODULE = 'scrapy_redis_Jobs.spiders'


# ---------------Redis 分布式----------------------
# scrapy-redis 的调度器
SCHEDULER = "scrapy_redis.scheduler.Scheduler"
# scrapy-redis 的指纹过滤器
DUPEFILTER_CLASS = "scrapy_redis.dupefilter.RFPDupeFilter"
# scrapy-redis 中 redis 爬取的优先级队列
SCHEDULER_QUEUE_CLASS = "scrapy_redis.queue.SpiderPriorityQueue"
# 记录爬虫爬取的位置, 以便继续爬取
SCHEDULER_PERSIST = True
# SCHEDULER_FLUSH_ON_START = True

# SCHEDULER_QUEUE_CLASS = 'scrapy_redis.queue.SpiderQueue'

# -------------------redis 数据库配置---------------------
# redis 远程的URL
# REDIS_URL = ''
REDIS_HOST = '127.0.0.1'  # host 地址
REDIS_PORT = '6379'  # 端口号
REDIS_PARAMS = {
    # 'password': '',  # 密码
    'db': 1  # 指定数据库
}


# ----------------日志---------------
# LOG_FILE = 'log_file.log'
# LOG_LEVEL = 'INFO'

# UserAgent
# USER_AGENTS = [
#     'AppleWebKit/533.16 (KHTML, like Gecko) Version/5.0 Safari/533.16"Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_3; zh-cn)',
#     'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.106 Safari/537.36',
#     'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.18 Safari/537.36',
#     'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:21.0) Gecko/20100101 Firefox/21.0',
#     'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.2486.0 Safari/537.36 Edge/13.10586'
# ]


# Configure maximum concurrent requests performed by Scrapy (default: 16)
#CONCURRENT_REQUESTS = 32

# Configure a delay for requests for the same website (default: 0)
# See https://doc.scrapy.org/en/latest/topics/settings.html#download-delay
# See also autothrottle settings and docs
#DOWNLOAD_DELAY = 3
# The download delay setting will honor only one of:
#CONCURRENT_REQUESTS_PER_DOMAIN = 16
#CONCURRENT_REQUESTS_PER_IP = 16


# 禁止重定向
# EDIRECT_ENABLED = False

# 禁止Cookies
COOKIES_ENABLED = False

# Disable Telnet Console (enabled by default)
# TELNETCONSOLE_ENABLED = False

# Override the default request headers:
DEFAULT_REQUEST_HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.81 Safari/537.36",
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
    'Accept-Language': 'en',
}

# Enable or disable spider middlewares
# See https://doc.scrapy.org/en/latest/topics/spider-middleware.html

# SPIDER_MIDDLEWARES = {
# #    'scrapy_redis_Jobs.middlewares.ScrapyRedisJobsSpiderMiddleware': 543,
#    'scrapy.spidermiddlewares.offsite.OffsiteMiddleware': None
# }

# Enable or disable downloader middlewares
# See https://doc.scrapy.org/en/latest/topics/downloader-middleware.html
# DOWNLOADER_MIDDLEWARES = {
#    'scrapy_redis_Jobs.middlewares.ScrapyRedisJobsDownloaderMiddleware': 543,
# }

# Enable or disable extensions
# See https://doc.scrapy.org/en/latest/topics/extensions.html
# EXTENSIONS = {
#    'scrapy.extensions.telnet.TelnetConsole': None,
# }

# Configure item pipelines
# See https://doc.scrapy.org/en/latest/topics/item-pipeline.html
# -------------------scrapy-redis pipeline文件内容--------------
ITEM_PIPELINES = {
    # 'scrapy_redis_Jobs.pipelines.ScrapyRedisJobsPipeline': 300,
    # 注意如果使用本地的piplines 文件, 一定要比该文件的优先级要小
    'scrapy_redis.pipelines.RedisPipeline': 400,
}


# Enable and configure the AutoThrottle extension (disabled by default)
# See https://doc.scrapy.org/en/latest/topics/autothrottle.html
#AUTOTHROTTLE_ENABLED = True
# The initial download delay
#AUTOTHROTTLE_START_DELAY = 5
# The maximum download delay to be set in case of high latencies
#AUTOTHROTTLE_MAX_DELAY = 60
# The average number of requests Scrapy should be sending in parallel to
# each remote server
#AUTOTHROTTLE_TARGET_CONCURRENCY = 1.0
# Enable showing throttling stats for every response received:
#AUTOTHROTTLE_DEBUG = False

# Enable and configure HTTP caching (disabled by default)
# See https://doc.scrapy.org/en/latest/topics/downloader-middleware.html#httpcache-middleware-settings
#HTTPCACHE_ENABLED = True
#HTTPCACHE_EXPIRATION_SECS = 0
#HTTPCACHE_DIR = 'httpcache'
#HTTPCACHE_IGNORE_HTTP_CODES = []
#HTTPCACHE_STORAGE = 'scrapy.extensions.httpcache.FilesystemCacheStorage'
