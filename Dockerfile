FROM registry.cn-shenzhen.aliyuncs.com/cqcy/iview:3.1.5
COPY dist /usr/share/nginx/html
RUN chown -R nginx.nginx /usr/share/nginx/html
# docker build -t financial-operating-system:v1.0 .
