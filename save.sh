#!/usr/bin/env bash

commit_msg=${1:-"update"}

echo "Saving changes..."
git add .
git commit -m "$commit_msg"
git push
echo "Changes saved and pushed."
