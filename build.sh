set -e # Exit immediately if a command exits with a non-zero status

# The directories to copy
TO_COPY=(
  "babylon"
  "cosmos"
  "google"
  "tendermint"
  # Add more directories as needed
)

docker build -t atomic-protogen . 
id=$(docker create atomic-protogen)
rm -rf dist
mkdir -p dist

# Copy each specified directory
for dir in "${TO_COPY[@]}"; do
  # echo "Copying: $dir"
  docker container cp $id:/app/third_party/keplr-wallet/packages/proto-types/$dir dist/

  # Calculate and output md5 hash of the copied directory
  # echo "Calculating md5 hash for $dir..."
  if [[ -d "dist/$dir" ]]; then
    find "dist/$dir" -type f -exec md5sum {} \; | sort | md5sum | awk '{print "MD5 hash of '"$dir"' directory: " $1}'
  fi
done

docker container cp $id:/app/third_party/keplr-wallet/packages/proto-types/outputHash dist/
docker rm -v $id

echo "The output hash of keplr build script result is"
cat ./dist/outputHash
echo

[[ -f "md5dist.txt" ]] && rm md5dist.txt
find "dist" -type f -exec md5sum {} \; | sort | md5sum | awk '{print $1}' > md5dist.txt
echo "MD5 hash of dist directory: "
cat md5dist.txt
