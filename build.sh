echo "Building @beyerleinf/ngx-dnd...\n\n"

ng build @beyerleinf/ngx-dnd --configuration=production

echo "\n\nCopying required files... \n\n"
cp ./projects/beyerleinf/ngx-dnd/styles.css ./dist/lib/
cp README.md ./dist/lib/
cp LICENSE.md ./dist/lib/
cp ./projects/beyerleinf/ngx-dnd/CHANGELOG.md ./dist/lib
cp ./projects/beyerleinf/ngx-dnd/postinstall.js ./dist/lib

node add-postinst.js

echo "Done.\n"