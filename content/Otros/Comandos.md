/ANDROID MIRROR

- android - native - scrcpy --fullscreen --turn-screen-off --stay-awake --video-bit-rate=100M --max-fps=90 --video-codec=h265 --video-buffer=0 --window-borderless --render-driver=metal

/UPDATING WEBSITE

rm -rf .quartz-cache && npx quartz build && git add . && git commit -m "website update" && git push

/DELETE ALL ICONS IN MACOS AND MAKE IT NATIVE AGAIN:

clear; echo "Iniciando limpieza masiva de íconos...";
find ~ /Applications -name $'Icon\r' -exec rm -f {} ; 2>/dev/null;
xattr -r -d com.apple.ResourceFork ~ /Applications 2>/dev/null;
echo "Limpiando caché profunda de Sequoia...";
sudo rm -rf /Library/Caches/com.apple.iconservices.store;
sudo find /private/var/folders/ -name "com.apple.iconservices" -exec rm -rf {} ; 2>/dev/null;
echo "Reiniciando interfaz nativa...";
killall Finder && killall Dock;
echo "¡Proceso terminado! Tu Mac vuelve a ser 100% nativa."

/DOWNLOAD A PLAYLIST

yt-dlp -i -x --audio-format mp3 --audio-quality 0 --yes-playlist --no-mtime -o "~/Downloads/%(playlist_title)s/%(playlist_index)02d - %(title)s.%(ext)s" "URL_DE_LA_PLAYLIST"

/DOWNLOAD A SONG

yt-dlp -i -x --audio-format mp3 --audio-quality 0 --embed-metadata --embed-thumbnail --embed-chapters -o "~/Downloads/%(title)s.%(ext)s" "URL_DE_YOUTUBE"

/DOWNLOAD A VIDEO

yt-dlp -i -f "bv*[ext=mp4]+ba[ext=m4a]/b[ext=mp4]" --embed-metadata --embed-thumbnail --embed-chapters -o "~/Downloads/%(title)s.%(ext)s" "URL_DE_YOUTUBE"

/CUTTING PDFS

/MERGE PDFS

/ CONVERT AN IMAGE INTO WEBP
cwebp -lossless elcirculo.png -o elcirculo.webp

Contras

Facultad: 132435$4/vA
Personal: =%p3Ce5i7o%"
Otros: 061220#S4LV4m2 230206#EM1
