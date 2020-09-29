# cordova-android
Boilerplate Cordova 

Setelah melakukan clone :

1. Ketikkan : npm install
2. Jika ingin menambah plugin yang diperlukan ketikkan : cordova plugin add (nama_pluginnya)
3. Jika ingin menghapus plugin yang sudah terinstall dan tidak diperlukan ketikkan : cordova plugin remove (nama_pluginnya)
4. Buat folder www
5. Masukkan hasil build'an dari react atau apapun yang hasilnya static web ke folder www
6. Tambahkan script : <script src="cordova.js"></script> di index.html di folder www tadi
7. Buat folder res & Tambahkan icon.png di folder res
8. Ketikkan : cordova build android
9. Ketikkan : cordova run android
10. Letak APKnya : folder-root-anda\platforms\android\app\build\outputs\apk\debug
