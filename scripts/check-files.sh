#!/bin/bash

# Enable extended globbing
shopt -s extglob

# Color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to check files in a directory
check_directory() {
    local folder=$1
    echo -e "${GREEN}Checking folder: $folder${NC}"
    local -a file_counts=()

    # Initialize array
    for ((i=0; i<=1585; i++)); do
        file_counts[$i]=0
    done

    # Iterate over files matching the naming convention
    for file in "$folder"/day_*.@(jpg|png|fig|sketch|psd|studio|xd|undefined); do
        if [[ $file =~ day_([0-9]+)(_thumb)?\. ]]; then
            day_number=${BASH_REMATCH[1]}
            ((file_counts[day_number]++))
        fi
    done

    # Check for missing or duplicate day numbers
    for ((i=1; i<=1585; i++)); do
        if [ "${file_counts[$i]}" -eq 0 ]; then
            echo -e "${YELLOW}Missing day: $i${NC}"
        elif [ "${file_counts[$i]}" -gt 1 ]; then
            echo -e "${RED}Duplicate day: $i${NC}"
        fi
    done
}

# Check if at least one directory is provided
if [ $# -eq 0 ]; then
    echo -e "${RED}Usage: $0 <directory1> [directory2] ...${NC}"
    exit 1
fi

# Check each directory provided as an argument
for dir in "$@"; do
    if [ -d "$dir" ]; then
        check_directory "$dir"
    else
        echo -e "${YELLOW}Warning: Directory $dir not found.${NC}"
    fi
done
