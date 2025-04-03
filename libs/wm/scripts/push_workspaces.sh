#!/bin/bash

# Ensure Windmill CLI is installed and authenticated
if ! command -v wmill &> /dev/null; then
  echo "Error: Windmill CLI (wmill) is not installed."
  exit 1
fi

# Ensure yq is installed
if ! command -v yq &> /dev/null; then
  echo "Error: yq is not installed. Install it from https://github.com/mikefarah/yq."
  exit 1
fi

# Load environment variables from .env file in libs/windmill
env_file="$(dirname "$0")/../.env"
if [[ -f "$env_file" ]]; then
  export $(grep -v '^#' "$env_file" | xargs)
else
  echo "Error: .env file not found in libs/windmill."
  exit 1
fi

# Ensure the required environment variable is set
if [[ -z "$WINDMILL_URL" ]]; then
  echo "Error: WINDMILL_URL is not set in the .env file."
  exit 1
fi

# Check if a directory is provided as an argument
if [[ -z "$1" ]]; then
  echo "Usage: $0 <target_directory>"
  exit 1
fi

# Target directory
target_dir="$1"

# Ensure the target directory exists
if [[ ! -d "$target_dir" ]]; then
  echo "Error: Directory '$target_dir' does not exist."
  exit 1
fi

# Iterate through subdirectories in the target directory
for dir in "$target_dir"/*/; do
  # Check if wmill.yaml exists in the directory
  if [[ -f "$dir/wmill.yaml" ]]; then
    # Remove trailing slash to get the directory name
    workspace_name=$(basename "$dir")

    echo "Processing workspace: $workspace_name"

    # Extract parameters from wmill.yaml
    includes=$(yq '.includes | join(",")' "$dir/wmill.yaml")
    excludes=$(yq '.excludes | join(",")' "$dir/wmill.yaml")

    # Check if the workspace already exists
    if ! wmill workspac | grep -q "$workspace_name"; then
      echo "Workspace '$workspace_name' does not exist. Creating it..."
      wmill workspace add "$workspace_name" "$workspace_name" "$WINDMILL_URL" || {
        echo "Failed to create workspace: $workspace_name"
        continue
      }
    else
      echo "Workspace '$workspace_name' already exists. Skipping creation."
    fi

    # Switch to the workspace
    wmill workspace switch "$workspace_name" || {
      echo "Failed to switch to workspace: $workspace_name"
      continue
    }

    # Push the workspace with includes and excludes
    wmill sync push --includes "$includes" --excludes "$excludes" || {
      echo "Failed to push workspace: $workspace_name"
      continue
    }

    echo "Successfully processed workspace: $workspace_name"
  else
    echo "Skipping directory: $dir (no wmill.yaml found)"
  fi
done

echo "All workspaces processed."