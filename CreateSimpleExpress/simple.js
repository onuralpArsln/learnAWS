const express = require('express');
const app = express();
const PORT = 3000;

//  Basit bir API endpoint
app.get('/api/selam', (req, res) => {
    res.json({ mesaj: 'Selam' });
});

// URL parametre alma başında : ile parametre oldugunu belirt
app.get('/api/selam/:isim', (req, res) => {
    const isim = req.params.isim;
    res.json({ mesaj: `Selam, ${isim}!` }); // ${isim} ile değişkenden çek 
});
// http://localhost:3000/api/selam/Alp


//Query  youtube tarzı 
app.get('/api/selam2', (req, res) => {
    const isim = req.query.isim;
    res.json({ mesaj: `Selam, ${isim}!` });
});
// http://localhost:3000/api/selam?isim=Alp

// sayı alıp işlem yapma 

app.get('/api/topla', (req, res) => {
    // Query parametrelerinden 'sayi1' ve 'sayi2' alınır
    const sayi1 = parseInt(req.query.sayi1); // gelen stringi int yaptık
    const sayi2 = parseInt(req.query.sayi2);

    // İki sayıyı topla
    const toplam = sayi1 + sayi2;

    // Sonucu JSON formatında döndür
    res.json({ toplam: toplam });
});

// http://localhost:3000/api/topla?sayi1=5&sayi2=7

// HTML sayfası döndürme
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// HTML sayfası döndürme
app.get('/second', (req, res) => {
    res.sendFile(__dirname + '/second.html');
});

// Sunucuyu başlat lokal 
/*
app.listen(PORT, () => {
    console.log(`Sunucu çalışıyor http://localhost:${PORT}`);
});
*/

// sunucu başlat her yere açık ama dışarı dinlemeyen bir sistemde sıkıntı olmaz 
app.listen(3000, '0.0.0.0', () => {
    console.log("Listening on port 3000");
});
