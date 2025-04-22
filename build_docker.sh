set -e # Exit immediately if a command exits with a non-zero status

docker build --progress=plain -t atomic-protogen . 
id=$(docker create atomic-protogen)
rm -rf dist
docker container cp $id:/app/dist dist
docker rm -v $id
