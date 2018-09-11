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




-- 公司信息表

create table if not exists company(
    id integer primary key not null,
    jobType_display varchar(255),
    company_url text,
    company_name varchar(100),
    company_size_name varchar(100),
    company_type_name varchar(50),
    positionURL text,
    companyLogo text,
    workingExp_code varchar(20),
    workingExp_name varchar(50),
    eduLevel_code varchar(20),
    eduLevel_name varchar(20),
    salary varchar(50),
    welfare varchar(255),
    emplType varchar(50),
    jobName varchar(255),
    industry varchar(50),
    geo_lat varchar(20),
    geo_lon varchar(20),
    city_name varchar(20),
    city_code varchar(10),
    updateDate varchar(25),
    createDate varchar(25),
    endDate varchar(25)
)

insert into company(
    jobType_display,
    company_url,
    company_name,
    company_size_name,
    company_type_name,
    positionURL,
    companyLogo,
    workingExp_code,
    workingExp_name,
    eduLevel_code,
    eduLevel_name,
    salary,
    welfare,
    emplType,
    jobName,
    industry,
    geo_lat,
    geo_lon,
    city_name,
    city_code,
    updateDate,
    createDate,
    endDate
)
values(
    '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1' )




    "jobType": {
        "items": [
            {
                "code": "160000",
                "name": "软件/互联网开发/系统集成"
            },
            {
                "code": "2040",
                "name": "Java开发工程师"
            }
        ],
        "display": "软件/互联网开发/系统集成,Java开发工程师"
    },
    "company": {
        "number": "CZ327938480",
        "url": "https://company.zhaopin.com/CZ327938480.htm",
        "name": "武汉零壹众创信息科技有限公司",
        "size": {
            "code": "3",
            "name": "100-499人"
        },
        "type": {
            "code": "5",
            "name": "民营"
        }
    },
    "positionURL": "https://jobs.zhaopin.com/CC327938480J00222561701.htm",
    "workingExp": {
        "code": "-1",
        "name": "不限"
    },
    "eduLevel": {
        "code": "5",
        "name": "大专"
    },
    "salary": "4K-6K",
    "emplType": "全职",
    "jobName": "机械/土木 转行到JAVA软件开发",
    "industry": "160400,210500",
    "recruitCount": 0,
    "geo": {
        "lat": "30.477141",
        "lon": "114.406728"
    },
    "city": {
        "items": [
            {
                "code": "736",
                "name": "武汉"
            }
        ],
        "display": "武汉"
    },
    "updateDate": "2018-09-11 13:30:00",
    "createDate": "2018-08-17 15:08:34",
    "endDate": "2018-09-16 15:08:34",
    "welfare": ["节日福利", "弹性工作", "带薪年假", "定期体检", "五险一金"],
    "companyLogo": "https://zhaopin-rd5-pub.oss-cn-beijing.aliyuncs.com/imgs/company/541bb681abb44839b85c09c0fe84b6d0.gif"
