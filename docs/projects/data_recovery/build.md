---
title: Guide to building  Data-Recovery
sidebar_label: Build
---

1. Install Python
2. Run this command to use a Virtual Enviroment (This will help in a reduced compiled file size)

   ```
   python -m pip install virtualenv
   ```

3. Create a virtual enviroment

   ```
   virtualenv env
   ```

4. Activate the virtual enviroment

   ```
   env\Scripts\activate.bat
   ```

5. Install requirements

   ```
   pip install -r requirements.txt
   ```

6. Install PyInstaller to build the executable

   ```
   pip install pyinstaller
   ```

7. Run these commands to compile

   - Normal Mode

     ```
     pyinstaller recover.py --noconfirm --onefile --name "Data Recovery" --console
     ```

   - Hidden Mode

     ```
     pyinstaller recover.py --noconfirm --onefile --name "Data Recovery" --windowed
     ```

8. Deactive the virtual enviroment

   ```
   deactivate
   ```

Your compiled `Data Recovery.exe` is available at `./dist`
