# Start with aws

Create aws account 
use EC2 service

Use ec2 instance Connect 


# Amazon Linux için

git yükle 
>sudo dnf install git -y

git kur ki repodan çek

tekte setup sh
>chmod +x setup.sh
>./setup.sh


node yükle:
> sudo dnf install nodejs -y

npm:
> sudo dnf install -y npm


>npm install express



# Dışarı açma 
🔒  AWS EC2 Security Group Ayarını Yap
AWS panelinden:

EC2 > Instances > instance’ını seç.

Alt kısımdaki Security Groups kısmından grubuna tıkla.

Inbound Rules sekmesine gir.

Edit Inbound Rules butonuna tıkla.

Aşağıdaki gibi yeni bir kural ekle:


Type	Protocol	Port Range	Source
Custom TCP	TCP	3000	0.0.0.0/0 (her yer)
⚠️ Geliştirme aşamasında 0.0.0.0/0 kullanılır ama canlıya çıkarken daha güvenli IP sınırlamaları önerilir.

IP'yi AWS EC2 konsolundan Public IPv4 address kısmında görebilirsin.
http://IP:PORT yaparak bağlan