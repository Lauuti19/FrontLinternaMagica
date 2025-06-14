#!/bin/bash

echo "Instalando Git LFS..."
git lfs install

echo "Haciendo pull de archivos LFS..."
git lfs pull origin master  # o cambia "master" por la rama real si es distinta

echo "Iniciando build..."
npm run build
