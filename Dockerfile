#Létrehozunk egy nginx-et szervert
FROM nginx:latest

#Ide copy-zzuk be a dolgokat
COPY ./fidget-c/build /usr/share/nginx/html

#Port
EXPOSE 80