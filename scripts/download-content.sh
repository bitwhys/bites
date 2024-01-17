#!/bin/bash

# Set your JSON file path here
JSON_FILE="data/bites-registry.json"

# Base URL for file downloads
BASE_URL="https://uidesigndaily.fra1.digitaloceanspaces.com" # Replace with the actual base URL

# Create directories
mkdir -p data/\{sources,images,thumbnails\}

# Iterate over the JSON array
jq -c '.[]' "$JSON_FILE" | while read -r item; do
    # Extract file URLs
    source=$(echo "$item" | jq -r '.source')
    image=$(echo "$item" | jq -r '.image')
    thumbnail=$(echo "$item" | jq -r '.thumbnail')

    # Download each file into its respective directory
    curl -o "data/sources/$(basename "$source")" "$BASE_URL$source"
    curl -o "data/images/$(basename "$image")" "$BASE_URL$image"
    curl -o "data/thumbnails/$(basename "$thumbnail")" "$BASE_URL$thumbnail"
done
