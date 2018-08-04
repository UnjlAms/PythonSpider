select d.city , d.area, d.areacode , w.time , w.climate , w.temperature, w.winddirection, w.windcount
from (select p.city, c.area, c.areacode from provincesandcity as p , cityandarea as c
where p.city = c.city and province = "湖北省") as d, weather as w
where d.areacode = w.areacode and w.time = '201805081800'


select city, count(area) as area_count from cityandarea  GROUP BY city ORDER BY area_count desc