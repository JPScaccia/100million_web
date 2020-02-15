npm install
npm run build-staging

mkdir -p build/dist/public/
mkdir -p build/.well-known/

cp -r dist/* build/dist/
cp -r public/* build/dist/public/
cp -r .well-known/* build/.well-known/
cp -p robots-staging.txt build/dist/robots.txt
