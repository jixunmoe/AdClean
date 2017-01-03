## AdClean Hosts - 广告清理服务

请访问[首页](https://hosts.jixun.moe/)获取安装信息以及说明。

## 配置服务器

1. 克隆仓库到 `/home/adclean`
2. 复制 `/home/adclean/nginx/adclean.conf` 到 `/etc/nginx/conf.d/adclean.conf`
3. 复制 `build.rc.sample` 到 `build.rc`，将 `redir_server` 换成你的服务器 IP
4. 根据需求修改 nginx 配置文件。
5. 安装 `make`、`node`，以及 `npm i -g uglifyjs`
6. 运行 `make clean && make all`
7. 重启 nginx。

## 支持的网站一览

* `m.33yq.com`
* `m.lwxs.com`
* `m.69shu.com`