#!/bin/sh

mkdir -p out
source build.rc
sed -e 's/#.*$//' -e '/^$/d' \
    -e "s/^\s*redir\b/$redir_server/" \
    -e "s/^\s*block\b/$block_server/" \
    src/hosts | sort | uniq > out/hosts
