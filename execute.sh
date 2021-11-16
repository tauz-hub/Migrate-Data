#!/usr/bin/env bash
. $HOME/.asdf/asdf.sh
asdf install nodejs 12.0.0
asdf local nodejs 12.0.0 
npm i pm2 -g

pm2 start node receivingBot/receivingBot.js --name RECEIVINGBOT
pm2 start node self0/script.js --name SELF0
pm2 start node self1/script.js --name SELF1
pm2 start node self2/script.js --name SELF2
pm2 start node self3/script.js --name SELF3
pm2 start node self4/script.js --name SELF4
pm2 start node self5/script.js --name SELF5
pm2 start node self6/script.js --name SELF6
pm2 start node self7/script.js --name SELF7
pm2 start node self8/script.js --name SELF8
pm2 start node self9/script.js --name SELF9 

 echo -e "\e[0;32mOnline!\e[0m"