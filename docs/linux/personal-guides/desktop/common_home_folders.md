---
title: Shared Home Folders Setup
sidebar_label: Shared Home Folders
slug: shared-home-folders
---

1. **Edit the Configuration File**: You can use a text editor of your choice to edit the `~/.config/user-dirs.dirs` file.

    ```
    nano ~/.config/user-dirs.dirs
    ```

2. **Edit the Configuration File's Content**:

    ```bash
    # this file is to be placed at:
    #       ~/.config/user-dirs.dirs 
    #
    # This file is written by xdg-user-dirs-update
    # If you want to change or add directories, just edit the line you're
    # interested in. All local changes will be retained on the next run.
    # Format is XDG_xxx_DIR="$HOME/yyy", where yyy is a shell-escaped
    # homedir-relative path, or XDG_xxx_DIR="/yyy", where /yyy is an
    # absolute path. No other format is supported.

    # these remains the same
    XDG_TEMPLATES_DIR="$HOME/Templates"
    XDG_PUBLICSHARE_DIR="$HOME/Public"

    # from 250GB HDD and 500GB HDD 
    XDG_DESKTOP_DIR="/mnt/5498F4E498F4C610/Desktop"
    XDG_DOWNLOAD_DIR="/mnt/5498F4E498F4C610/Downloads"
    XDG_DOCUMENTS_DIR="/mnt/5498F4E498F4C610/Documents"
    XDG_MUSIC_DIR="/mnt/5D9037A9106244F3"
    XDG_PICTURES_DIR="/mnt/5498F4E498F4C610/Pictures"
    XDG_VIDEOS_DIR="/mnt/5498F4E498F4C610/Videos"
    ```

3. **Save and Exit**: Replace the required contents, then save and exit `nano` (or your text editor of choice)

4. **Update User Directories**: To apply the changes, you'll need to update the user directories. Run the following command to do it:

    ```bash
    xdg-user-dirs-update
    ```

This will refresh the user directories with the changes you made.
