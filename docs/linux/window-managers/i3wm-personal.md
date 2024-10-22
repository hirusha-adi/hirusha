---
title: Getting Started with i3wm - A Beginner's Guide for Laptops
sidebar_label: i3wm Guide (Laptops)
---

## INCOMPLETE!

This guide is for user's running Ubuntu 22.04 on their laptops. Everything mentioned in this post has been tested on Pop OS 22.04 (non NVIDIA edition).

Note: Do not proceed if you are not the type of person that is ready to read documentation.

## Why i3wm?

i3wm is highly documented, and has more support online.

Learn the basics and use it for 30 minute's and you wouldn't want to swicth back. You dont have to keep on pressing Alt+Tab severl times to go through and select open windows. you can launch apps quickly. You can see your system's information easily at a glance. Its lightweight. Its extremely customizable. Its efficient, so, it saves time. ots quick and easy to navigate (after getting used to, which you can - even within several minutes)

## i3wm

### Installation

On PopOS, you can run the command below to install i3wm and all of its default dependencies. 

```bash
sudo apt install i3
```

### Initial Setup

After the installation has succeeded, you need to logout (using the GUI or by running the `logout` command) of your system, and log back in, selecting "i3(wm)" as your session by entering your password.

![alt text](image.png)

Once back you log in, everything will be black and gone. You are represented with the i3 configuration screen.

![alt text](image-1.png)

Press `ENTER` to create/dump the default configuration file in into `~/.config/i3/config`. We will be coming back to this file for further customizations.

On the next screen, you need to select your modifier key. This is important, as the "Mod" key is used to trigger most of i3's keyboard shortcuts. 

![alt text](image-2.png)

Use your (up and down) arrow keys to navigate and choose the modifier key you like. I personally prefer `<Alt>`, since you will be pressing this key like 90% of the time.

Press `ENTER` to confirm. 

![alt text](image-3.png)


Note: Since i selected the `Alt` key as my `Mod` key, in this blog post, form here onwards, wheren i say `Alt+X`, what is actually means is `Mod+X` where `Mod` is your modifier key.

All you have now is an empty black screen.

### Looking Around

To open an application, you can `Alt+D` to open i3 `dmenu` to open your applications from. You can type the package name to start it. eg: `firefox` to open yourbrwoser. Note that the application that you are to open with dmenu must be in your path already.

![alt text](image-4.png)

Now, open your browser and go to [introduction section](https://i3wm.org/docs/userguide.html#_using_i3) of the official documentation.

And then, optionally, you may also watch this great [youtube video](https://youtu.be/j1I63wGcvU4?si=KS20xtV5_UcEtttC).

Try the key bindings out yourself and practice the basics for like 10-15 minutes.

From this point onwards, i will assume that you are familiar with the key bindings.

### Lightdm

Note: This section is optional.

To further save resources, you can switch from gdm to lightdm. 

Install lightdm:

```
sudo apt install lightdm
```

If you were not prompted to configure it as the default display manager, you can run the command below to manually configure it.

```
sudo dpkg-reconfigure lightdm
```

For the changes to take place, you can restart your computer.

```
sudo reboot
```

## Fonts

### Installation

Download ["JetBrainsMono Nerd Font"](https://www.nerdfonts.com/font-downloads) from this website.

Install the fonts:

```
mkdir tmp-fonts && cd tmp-fonts
mv ../JetBrainsMono.zip .
unzip ./JetBrainsMono.zip
mv ./* ~/.fonts/
cd ..
rm -rf tmp-fonts
```

You can also remove and re-build the font cache:

```
rm -rf ~/.cache/fontconfig
sudo fc-cache -r -v
```

### Update Fonts

TODO

## Custom Wallapers

Install `feh`, a command line utility that we can use the change the wallpaper:

```bash
sudo apt install feh
``` 

The command below will change the wallpaper to the picture available at `/mnt/E2366FC1366F9577/Pictures/wallpaper.jpg`

```
feh --bg-fill /mnt/E2366FC1366F9577/Pictures/wallpaper.jpg
```

In the i3 config file, With `exec` you can configure which commands will be performed by i3 on initial startup. `exec` commands will not run when restarting i3, if you need a command to run also when restarting i3 you should use the `exec_always` keyword. These commands will be run in order. [Click here](https://i3wm.org/docs/userguide.html#_automatically_starting_applications_on_i3_startups) to learn more.


- `~/.config/i3/config`

```
exec_always feh --bg-fill /mnt/E2366FC1366F9577/Pictures/wallpaper.jpg
```

This will run this command on startup and also on when restrating the i3 session - which will set the background wallpaper.


## Laptop User Experience

### Volume Controls

Assuming you already use pulseaudio, you should also have pactl installed. So, you can simply add these to the config file. In new versions on i3wm, these already exist in the i3 config file. 

```bash
# Use pactl to adjust volume in PulseAudio.
set $refresh_i3status killall -SIGUSR1 i3status
bindsym XF86AudioRaiseVolume exec --no-startup-id pactl set-sink-volume @DEFAULT_SINK@ +10% && $refresh_i3status
bindsym XF86AudioLowerVolume exec --no-startup-id pactl set-sink-volume @DEFAULT_SINK@ -10% && $refresh_i3status
bindsym XF86AudioMute exec --no-startup-id pactl set-sink-mute @DEFAULT_SINK@ toggle && $refresh_i3status
bindsym XF86AudioMicMute exec --no-startup-id pactl set-source-mute @DEFAULT_SOURCE@ toggle && $refresh_i3status
```

### Audio Controls

`playerctl` command line utility is also pre-installed and pre-configured in PopOS 22.04. So, you can add these lines to your i3 config file. If it's not installed, you will have to install it and start the daemon manually. [Click here](https://github.com/altdesktop/playerctl) to learn more.

```
bindsym XF86AudioPlay exec playerctl play
bindsym XF86AudioPause exec playerctl pause
bindsym XF86AudioNext exec playerctl next
bindsym XF86AudioPrev exec playerctl previous
```

### Brightness Controls

First, install `brightnessctl`. This is a command line utility which we can use to adjust the brightness of the screen.

```
sudo apt install brightnessctl
```

To increase the brightness by 5%, you can run:

```
sudo brightnessctl set +5%
```

To decrease the brightness by 5%, you can run:

```
sudo brightnessctl set 5%-
```

When i tried it without sudo, which i think is how i3 will run it (not as root), it won't work.

If it works without sudo, simply add the lines below to your i3 config and skip to the next section. 

```
bindsym XF86MonBrightnessUp exec --no-startup-id brightnessctl set +5%
bindsym XF86MonBrightnessDown exec --no-startup-id brightnessctl set 5%-
```


As it doesn't work without sudo, and since sudo will ask prompt you for the password, let's edit the sudoers file. An issue regarding this can be found [here](https://github.com/i3/i3/discussions/4763).

Run the command below to start editing

```
sudo vistudio
```

Adding this line to end of the sudoers file at `/etc/sudoers`, will stop prompting for the password when the user named `hirusha` is executing `/usr/bin/brightnessctl`. Make sure to replace your actual username with `hirusha`   

```
hirusha ALL=(ALL) NOPASSWD: /usr/bin/brightnessctl
```

Note: I am no expert and this was a workaround for it. Some of the functionality might break if there are multiple user accounts, who will use i3 with the same configuration. - which is less likely to happen. 

Now, you can edit the ifconfig i3 config file.

```
bindsym XF86MonBrightnessUp exec --no-startup-id sudo brightnessctl set +5%
bindsym XF86MonBrightnessDown exec --no-startup-id sudo brightnessctl set 5%-
```

### Touchpad Controls

Tapping with two fingers to right click is something that i cannot live without on my HP Envy x360. This is done with [libinput-gestures](https://github.com/bulletmark/libinput-gestures)

You need python 3.7 or later, python2 is not supported. You also need libinput release 1.0 or later.

You must be a member of the input group to have permission to read the touchpad device:

```
sudo gpasswd -a $USER inputd
```

After executing the above command, reboot your system.

Then, install `wmctrl` which is necessary for `_internal` command, as per default configuration, `xdotool` for simulating keyboard and mouse actions for Xorg or XWayland based apps.

```
sudo apt-get install wmctrl xdotool
```

First, install `libinput-tools`

```
sudo apt-get install libinput-tools
```

Then, to install `libinput-gestures` - you will have to install it manually.

Clone the repository:

```bash
# clone the repository
git clone https://github.com/bulletmark/libinput-gestures.git

# go into the cloned folder
cd ./libinput-gestures

# run the installation script.
sudo ./libinput-gestures-setup install
```

Then, add this to your i3 config file to start `libinput-gestures` automatically.

```
exec --no-startup-id "sudo libinput-gestures-setup start"
```

## The Bar

### Remove Default Bar

```
bar {
  ...
}
```

Find the `bar` section in the i3 config file and delete / comment it. Restart i3 using `Alt+Shift+R` and the status bar will be gone.

Note that you can still launch the terminal using `Alt+Return`.

### Install [Polybar](https://github.com/polybar/polybar)

The version available the ubuntu/debian package repositories are too outdated, and there are no proper customization guides for old versions. So, we will also have to build Polybar from source. [Clich here](https://github.com/polybar/polybar/wiki/Compiling#building) to view the official documentation.

To get the sources directly from the repository, run the following commands:

Warning: Compiling polybar this way will give you the latest unreleased changes, there may be bugs and it may break your config.

```bash
# make sure to type the `git' command as-is to clone all git submodules too
git clone --recursive https://github.com/polybar/polybar

# go into the cloned folder
cd polybar
```

To compile, run the following commands:

Note: If you are using anaconda, run conda deactivate before running cmake, also see the note on the [Known Issues page](https://github.com/polybar/polybar/wiki/Known-Issues#building-with-anaconda-installed) if that doesn't work.

Note: Similarly, if you are using pyenv, you will likely need to use system python during compilation. You can revert to system python in the current directory by executing pyenv local system directly before executing cmake.

```bash
mkdir build
cd build
cmake ..
make -j$(nproc)

# to install polybar into /usr/bin
sudo make install
```

### Initial Configuration

You can now copy the default configuration file (`config.ini`) and start editing it to match your needs.

```
cp /etc/polybar/config.ini ~/.config/polybar/config.ini
```

Open the copied configuration file and edit the name of the bar to `bar`, so, it should look like this now:

```
...

[bar/bar]

...
```

You can now launch polybar by running the `polybar` command in your terminal. 

But, we will start the bar in your i3wm's bootstrap routine.

First, lets create the startup script at: `~/.config/i3/launch-polybar.sh`

```
#!/usr/bin/env bash

# Terminate already running bar instances
# If all your bars have ipc enabled, you can use 
polybar-msg cmd quit
# Otherwise you can use the nuclear option:
# killall -q polybar

# Launch the bar named: bar
echo "---" | tee -a /tmp/polybar1.log
polybar bar 2>&1 | tee -a /tmp/polybar1.log & disown

echo "Bars launched..."
```

Then, we can start this script with i3 config file

```
exec_always ~/.config/i3/launch.sh
```

### Customization

TODO: polybar customization, polybar modules, compton, custom colors for both i3 and polybar, alacritty installation and customization, rofi installation and customization

## References

- Some images / screenshots taken from: https://opensource.com/article/18/8/getting-started-i3-window-manager





---

Last updated on 2024 October 22.



