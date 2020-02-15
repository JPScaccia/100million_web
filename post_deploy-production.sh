npm install
npm run build-production

mkdir -p build/dist/public/
mkdir -p build/.well-known/

cp -r dist/* build/dist/
cp -r public/* build/dist/public/
cp -r .well-known/* build/.well-known/
cp -p robots-production.txt build/dist/robots.txt
