environment=${1}

npm install
npm run build-${environment}

mkdir -p build/dist/public/
mkdir -p build/.well-known/

cp -r dist/* build/dist/
cp -r public/* build/dist/public/
cp -r .well-known/* build/.well-known/
cp -p robots-${environment}.txt build/dist/robots.txt
