#!/usr/bin/env bash

for i in 0 1 2 3 4 5 6 7 8 9; do
    echo  "\e[0;32m-->Cloning the $i node_modules...\e[0m"
    mkdir -p "self$i"
    cp -r "./templeteArchives/node_modules/" "./self$i"
    cp -r "./templeteArchives/package.json" "./self$i"
    cp -r "./templeteArchives/script.js" "./self$i"
done

echo -e "\e[0;32mFinished! \e[0m"