#!/bin/bash

# Define o diretório de trabalho atual como o diretório onde o script está localizado
cd "$(dirname "$0")"

# Executa os comandos na ordem desejada
docker-compose up -d --build
cd backend
npx prisma migrate customer2

