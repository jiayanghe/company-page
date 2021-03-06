FROM nginx:alpine

COPY nginx/default.conf /etc/nginx/conf.d/

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

COPY dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
