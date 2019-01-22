#!/usr/bin/env bash

set -e;

cd dist/meme-wars
http-server -o --ssl --cert /home/oleg/codes/oresoftware/meme-wars/certificate.pem --key /home/oleg/codes/oresoftware/meme-wars/key.pem
