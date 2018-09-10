/*
 * @FilePath: \city_code.sql
 * @Created Date: Monday September 10th 2018 3:25:41 pm
 * @Author: UnjlAms
 * @Email: unjlams@gmail.com
 * @Last Modified:Monday September 10th 2018 3:25:41 pm
 */



-- 创建城市表
create table if not exists cityCode(
    id integer primary key not null,
    province_cn_name varchar(20),
    province_en_name varchar(20),
    province_code varchar(10),
    city_cn_name varchar(20) not null,
    city_en_name varchar(20) not null,
    city_code varchar(10) not null,
    area_cn_name varchar(20),
    area_en_name varchar(20),
    area_code varchar(10)
)


-- 表的插入
insert into cityCode(province_cn_name,province_en_name,province_code,
city_cn_name,city_en_name,city_code,
area_cn_name,area_en_name,area_code)
values('1','2','3','4','5','6','7','8','9');




-- 创建 职业表
create table if not exists industry(
    id integer primary key not null,
    big_type_en_name varchar(40),
    big_type_cn_name varchar(40),
    big_type_code varchar(10),
    small_type_en_name varchar(40),
    small_type_cn_name varchar(40),
    small_type_code varchar(10)
)




