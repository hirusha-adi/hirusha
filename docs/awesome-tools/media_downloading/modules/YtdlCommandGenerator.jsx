import React, { useState } from 'react';

function YtDlpCommandGenerator() {
    const [videoType, setVideoType] = useState('video');
    const [downloadType, setDownloadType] = useState('video_dl');
    const [audioQuality, setAudioQuality] = useState('best');
    const [videoQuality, setVideoQuality] = useState('720p');
    const [options, setOptions] = useState({
        verbose: true,
        ignoreErrors: false,
        abortOnError: true,
        writeSubs: false,
        writeAutoSubs: false,
    });
    const [url, setUrl] = useState('');


    const generateCommand = () => {
        let command = `yt-dlp "${url}" `; // Add the URL here
        if (videoType === 'channel') {
            command += '--yes-playlist ';
        } else if (videoType === 'playlist') {
            command += '--extract-audio --audio-format mp3 ';
        }

        if (downloadType === 'audio_dl') {
            command += `--audio-quality ${audioQuality} `;
        } else {
            command += `--format ${videoQuality}+bestaudio `;
        }

        if (options.verbose) {
            command += '--verbose ';
        }
        if (options.ignoreErrors) {
            command += '--ignore-errors ';
        }
        if (options.abortOnError) {
            command += '--abort-on-error ';
        }
        if (options.writeSubs) {
            command += '--write-subs ';
        }
        if (options.writeAutoSubs) {
            command += '--write-auto-subs ';
        }

        return command;
    };

    return (
        <div>
            <h3>Media URL</h3>
            <input
                type="text"
                placeholder="Enter URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className='custom-input'
                style={{
                    width: '100%',
                    border: '1px solid #ccc',
                    resize: 'none',
                }}
            />
            <h3>Contents to Downlaod</h3>
            <div>
                <div className='custom-radio-item' >
                    <input
                        type="radio"
                        name="videoType"
                        value="video"
                        checked={videoType === 'video'}
                        onChange={() => setVideoType('video')}
                        className="custom-radio"
                    />
                    <label>Video</label>
                </div>

                <div className='custom-radio-item' >
                    <input
                        type="radio"
                        name="videoType"
                        value="channel"
                        checked={videoType === 'channel'}
                        onChange={() => setVideoType('channel')}
                        className="custom-radio"
                    />
                    <label>Channel</label>
                </div>

                <div className='custom-radio-item' >
                    <input
                        type="radio"
                        name="videoType"
                        value="playlist"
                        checked={videoType === 'playlist'}
                        onChange={() => setVideoType('playlist')}
                        className="custom-radio"
                    />
                    <label>Playlist</label>
                </div>
            </div>

            <h3>What to Download</h3>
            <div>
                <div className='custom-radio-item' >
                    <input
                        type="radio"
                        name="downloadType"
                        value="audio_dl"
                        checked={downloadType === 'audio_dl'}
                        onChange={() => setDownloadType('audio_dl')}
                        className="custom-radio"
                    />
                    <label>Audio</label>
                </div>

                <div className='custom-radio-item' >
                    <input
                        type="radio"
                        name="downloadType"
                        value="video_dl"
                        checked={downloadType === 'video_dl'}
                        onChange={() => setDownloadType('video_dl')}
                        className="custom-radio"
                    />
                    <label>Video</label>
                </div>
            </div>

            {downloadType === 'audio_dl' && (
                <div>
                    <h3>Audio Quality</h3>
                    <div className='custom-radio-item' >
                        <input
                            type="radio"
                            name="audioQuality"
                            value="128k"
                            checked={audioQuality === '128k'}
                            onChange={() => setAudioQuality('128k')}
                            className="custom-radio"
                        />
                        <label>128 kbps</label>
                    </div>

                    <div className='custom-radio-item' >
                        <input
                            type="radio"
                            name="audioQuality"
                            value="256k"
                            checked={audioQuality === '256k'}
                            onChange={() => setAudioQuality('256k')}
                            className="custom-radio"
                        />
                        <label>256 kbps</label>
                    </div>

                    <div className='custom-radio-item' >
                        <input
                            type="radio"
                            name="audioQuality"
                            value="best"
                            checked={audioQuality === 'best'}
                            onChange={() => setAudioQuality('best')}
                            className="custom-radio"
                        />
                        <label>Best Available</label>
                    </div>
                </div>
            )}

            {downloadType === 'video_dl' &&
                <div>
                    <h3>Video Quality</h3>
                    <div className='custom-radio-item' >
                        <input
                            type="radio"
                            name="videoQuality"
                            value="240p"
                            checked={videoQuality === '240p'}
                            onChange={() => setVideoQuality('240p')}
                            className="custom-radio"
                        />
                        <label>240p</label>
                    </div>

                    <div className='custom-radio-item' >
                        <input
                            type="radio"
                            name="videoQuality"
                            value="360p"
                            checked={videoQuality === '360p'}
                            onChange={() => setVideoQuality('360p')}
                            className="custom-radio"
                        />
                        <label>360p</label>
                    </div>

                    <div className='custom-radio-item' >
                        <input
                            type="radio"
                            name="videoQuality"
                            value="480p"
                            checked={videoQuality === '480p'}
                            onChange={() => setVideoQuality('480p')}
                            className="custom-radio"
                        />
                        <label>480p</label>
                    </div>

                    <div className='custom-radio-item' >
                        <input
                            type="radio"
                            name="videoQuality"
                            value="720p"
                            checked={videoQuality === '720p'}
                            onChange={() => setVideoQuality('720p')}
                            className="custom-radio"
                        />
                        <label>720p</label>
                    </div>

                    <div className='custom-radio-item' >
                        <input
                            type="radio"
                            name="videoQuality"
                            value="1080p"
                            checked={videoQuality === '1080p'}
                            onChange={() => setVideoQuality('1080p')}
                            className="custom-radio"
                        />
                        <label>1080p</label>
                    </div>

                    <div className='custom-radio-item' >
                        <input
                            type="radio"
                            name="videoQuality"
                            value="best"
                            checked={videoQuality === 'best'}
                            onChange={() => setVideoQuality('best')}
                            className="custom-radio"
                        />
                        <label>Best Available</label>
                    </div>
                </div>
            }

            <div>
                <h3>Additional Options</h3>
                <div className='custom-checkbox-item' >
                    <input
                        type="checkbox"
                        checked={options.verbose}
                        onChange={() => setOptions({ ...options, verbose: !options.verbose })}
                        className="custom-checkbox"
                    />
                    <label>Verbose</label>
                </div>
                <div className='custom-checkbox-item' >
                    <input
                        type="checkbox"
                        checked={options.ignoreErrors}
                        onChange={() => setOptions({ ...options, ignoreErrors: !options.ignoreErrors })}
                        className="custom-checkbox"
                    />
                    <label>Ignore Errors</label>
                </div>

                <div className='custom-checkbox-item' >
                    <input
                        type="checkbox"
                        checked={options.abortOnError}
                        onChange={() => setOptions({ ...options, abortOnError: !options.abortOnError })}
                        className="custom-checkbox"
                    />
                    <label>Abort on Error</label>
                </div>

                <div className='custom-checkbox-item' >
                    <input
                        type="checkbox"
                        checked={options.writeSubs}
                        onChange={() => setOptions({ ...options, writeSubs: !options.writeSubs })}
                        className="custom-checkbox"
                    />
                    <label>Write Subs</label>
                </div>

                <div className='custom-checkbox-item' >
                    <input
                        type="checkbox"
                        checked={options.writeAutoSubs}
                        onChange={() => setOptions({ ...options, writeAutoSubs: !options.writeAutoSubs })}
                        className="custom-checkbox"
                    />
                    <label>Write Auto Subs</label>
                </div>
            </div>

            <textarea
                value={generateCommand()}
                rows="4"
                cols="50"
                style={{
                    width: '100%',
                    minHeight: '100px',
                    border: '1px solid #ccc',
                    resize: 'none',
                }}
            />

        </div>
    );
}

export default YtDlpCommandGenerator;
