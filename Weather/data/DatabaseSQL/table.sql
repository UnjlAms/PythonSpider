


-- 设置数据库的编码
-- ALTER DATABASE chinaweather CHARACTER SET = utf8

-- 省级表
create table ProvincesAndCity(
		province varchar(10),  -- 省
		city varchar(10),     -- 市
		citycode varchar(9)  -- 市代码
);

-- 市级表
create table CityAndArea( 
		city VARCHAR(10),     -- 市
		citycode varchar(9),  -- 市区代码
		area varchar(20),   -- 县区
		areacode varchar(9),  -- 县区代码
		longitude VARCHAR(10),   -- 经度
		latitude varchar(10)  -- 纬度		
);

-- 天气表
create table weather(
	 area varchar(20),	-- 市区
	 areacode varchar(9),  -- 县区代码
	 time varchar(8), -- 时间 格式为:20180401
	 climate varchar(20), -- 气候
	 temperature varchar(10),  -- 温度
	 winddirection varchar(20),   -- 风向
	 windcount varchar(20)  -- 风的级数
);




