import React, { useState } from 'react';

const PackageInstaller = () => {

    const softwareData = [
        {
            category: 'Other Package Managers',
            items: [
                { name: 'Snap', command: 'snapd' },
                { name: 'FlatPak', command: 'flatpak' },
                { name: 'Trizen', command: 'trizen' },
                { name: 'Pamac', command: 'pamac-aur' },
                { name: 'Powerpill', command: 'powerpill' },
            ]
        },
        {
            category: 'Browser',
            items: [
                { name: 'Brave Browser', command: 'brave-bin' },
                { name: 'Firefox', command: 'firefox' },
                { name: 'Google Chrome', command: 'google-chrome' },
                { name: 'Google Chrome Canary', command: 'google-chrome-dev' },
            ]
        },
        {
            category: 'Utilities',
            items: [
                { name: 'Yakuake (for KDE)', command: 'yakuake' },
                { name: 'Guake (for GNOME)', command: 'guake' },
                { name: 'ffmpegthumbs', command: 'ffmpegthumbs' },
                { name: 'mplayerthumbs', command: 'mplayerthumbs' },
                { name: 'qbittorrent', command: 'qbittorrent' },
                { name: 'KDE-Connect (Phone Sync)', command: 'kdeconnect' },
            ]
        },
        {
            category: 'Media',
            items: [
                { name: 'Audacity (Audio Editor)', command: 'audacity' },
                { name: 'RawTherapee (Image Editor)', command: 'rawtherapee' },
                { name: 'Pinta (Image Editor)', command: 'pinta' },
                { name: 'KdenLive (Video Editor)', command: 'kdenlive' },
                { name: 'OpenShot (Video Editor)', command: 'openshot-git' },
                { name: 'Shotcut (Video Editor)', command: 'shotcut' },
                { name: 'yt-dlp (Video Downloader)', command: 'yt-dlp-git' },
                { name: 'yt-dlp GUI (Video Downloader)', command: 'ytdlp-gui' },
                { name: 'HandBrake (Video Transcoder)', command: 'handbrake' },
                { name: 'Spotify (Music player)', command: 'spotify' },
            ]
        },
        {
            category: 'System Monitor',
            items: [
                { name: 'neofetch', command: 'neofetch' },
                { name: 'bpytop', command: 'bpytop' },
                { name: 'Stacer', command: 'stacer-bin' },
            ]
        },
        {
            category: 'Password Manager',
            items: [
                { name: 'Bitwarden', command: 'bitwarden' },
                { name: 'KeepassXC', command: 'keepassxc' },
            ]
        },
        {
            category: 'Messaging',
            items: [
                { name: 'Telegram', command: 'telegram-desktop-bin' },
                { name: 'Discord', command: 'discord' },
            ]
        },
        {
            category: 'Remote Desktop',
            items: [
                { name: 'TeamViwer', command: 'teamviewer' },
                { name: 'AnyDesk', command: 'anydesk-bin' },
            ]
        },
        {
            category: 'Flasher',
            items: [
                { name: 'Balena Etcher', command: 'etcher-bin' },
                { name: 'Popsicle', command: 'popsicle-bin' },
                { name: 'UNetbootin', command: 'unetbootin' },
            ]
        },
        {
            category: 'Development',
            items: [
                { name: 'Git', command: 'git' },
                { name: 'Docker', command: 'docker' },
                { name: 'Docker Compose', command: 'docker-compose' },
                { name: 'Github Desktop', command: 'github-desktop-bin' },
                { name: 'Visual Studio Code', command: 'visual-studio-code-bin' },
                { name: 'VirtualBox', command: 'virtualbox' },
                { name: 'OpenJDK v8', command: 'jdk8-openjdk' },
                { name: 'NodeJS', command: 'nodejs' },
                { name: 'Pycharm Community Edition', command: 'pycharm-community-edition' },
                { name: 'Eclipse', command: 'eclipse' },
                { name: 'NPM', command: 'npm' },
                { name: 'TCL', command: 'tcl' },
                { name: 'FPC', command: 'fpc' },
                { name: 'NotepadQQ', command: 'notepadqq' },
                { name: 'codeblocks', command: 'codeblocks' },
                { name: 'MongoDB Compass', command: 'mongodb-compoass' },
            ]
        },
        {
            category: 'Options in yay',
            items: [
                { name: '--noconfirm (No confirm. Choose the defaults)', command: '--noconfirm' },
                { name: '--noeditmenu (Skip editing PKGBUILD before building)', command: '--noeditmenu' },
                { name: '--noveride (Ignore version restrictions in the PKGBUILD)', command: '--noveride' },
                { name: '--nodiff (Skip checking for differences in files)', command: '--nodiff' },
                { name: '--editmenu (Edit PKGBUILD before building)', command: '--editmenu' },
                { name: '--rebuild (Rebuild a package even if its up to date)', command: '--editflags' },
                { name: '--verify (Verify the hashes of downloaded files)', command: '--verify' },
                { name: '--nodiff (Skip checking for differences in files)', command: '--nodiff' },
                { name: '--noextract (Skip extracting source files)', command: '--noextract' },
                { name: '--editflags (ggggggggggggg)', command: '--editflags' },
            ]
        },

        // uncomment and add more stuff later
        // ------------------------------------------------------------
        // {
        //     category: 'Media',
        //     items: [
        //          { name: 'Application Name', command: 'poackage-name-in-aur' },
        //         // items
        //     ]
        // },

    ];

    // track selected packages
    const [selectedSoftware, setSelectedSoftware] = useState([]);
    const [isCopied, setIsCopied] = useState(false);

    //  toggle package selection 
    function toggleSelection(command) {
        const selectedIndex = selectedSoftware.indexOf(command);
        if (selectedIndex === -1) {
            setSelectedSoftware([...selectedSoftware, command]);
        } else {
            const updatedSelection = [...selectedSoftware];
            updatedSelection.splice(selectedIndex, 1);
            setSelectedSoftware(updatedSelection);
        }
    }

    function generateCommand() {
        const [isCopied, setIsCopied] = useState(false);
        const command_tmp = selectedSoftware.join(' ');
        const base_command = 'yay -S'
        const command = base_command + command_tmp;

        const handleCopyClick = () => {
            copyToClipboard(command);
            setIsCopied(true);
        };

        const handleCloseClick = () => {
            setIsCopied(false);
        };

        return (
            <div>
                <h4>Selected Software:</h4>
                <textarea
                    value={command}
                    rows={3}
                    style={{
                        width: '100%',
                        minHeight: '100px',
                        border: '1px solid #ccc',
                        resize: 'none',
                    }}
                    onChange={(e) => {
                        e.preventDefault();
                    }}
                />
                <button
                    onClick={handleCopyClick}
                    className="button button--success"
                >
                    Copy Command
                </button>

                {isCopied && (
                    <div className="alert alert--success" role="alert" style={{ marginTop: '20px' }}>
                        <button
                            aria-label="Close"
                            className="clean-btn close"
                            type="button"
                            onClick={handleCloseClick}
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <strong>Success</strong>
                    </div>
                )}
            </div>
        );
    }

    // Function to copy text to clipboard
    function copyToClipboard(text) {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        setIsCopied(true);
    }

    return (
        <div>
            <div id="software-list">
                {softwareData.map((category) => (
                    <div key={category.category} className="category">
                        <h4>{category.category}</h4>
                        {category.items.map((item) => (
                            <div key={item.name} className='custom-checkbox-item'>
                                <input
                                    type="checkbox"
                                    id={item.name}
                                    checked={selectedSoftware.includes(item.command)}
                                    onChange={() => toggleSelection(item.command)}
                                    className="custom-checkbox"
                                />
                                <label htmlFor={item.name}>{item.name}</label>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            {generateCommand()}
        </div>
    );
};

export default PackageInstaller;