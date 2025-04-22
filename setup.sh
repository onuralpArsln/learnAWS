#!/bin/bash

# Güncelleme ve temel paketler
echo "Sistem güncelleniyor..."
sudo dnf update -y

# Git kurulumu
echo "Git kuruluyor..."
sudo dnf install -y git

# Python 3 ve pip kurulumu
echo "Python3 ve pip kuruluyor..."
sudo dnf install -y python3 curl unzip
python3 -m ensurepip --upgrade
pip3 install --upgrade pip

# Flask kurulumu
echo "Flask kuruluyor..."
pip3 install flask

# Node.js kurulumu (NodeSource ile)
echo "Node.js kuruluyor..."
curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -
sudo dnf install -y nodejs

# npm kurulumu (Node.js ile birlikte gelir)
echo "npm kuruluyor..."
sudo dnf install -y npm

# Express kurulumu
echo "Express kuruluyor..."
mkdir ~/myapp
cd ~/myapp
npm init -y
npm install express

echo "Kurulum tamamlandı! Flask ve Express projeleri artık kullanıma hazır!"
