docker build --progress=plain -t atomic-protogen . 2>&1 | tee build.log
id=$(docker create atomic-protogen)
rm -rf dist
docker container cp $id:/app/dist dist
docker container cp $id:/app/output_hash.txt dist
docker rm -v $id
