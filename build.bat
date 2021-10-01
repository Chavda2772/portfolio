@ECHO OFF


REM List of Variables
set drive=E
set portfolioLocation=E:\Projects\Portfolio\MaheshChavda
set buildLocation=E:\Projects\Portfolio\build

set miniProjectLocation=E:\Projects\projects
set miniProjectsPortfolioLocation=E:\Projects\Portfolio\build\projects

set zip="C:\Program Files\WinRAR\rar.exe"
set zipName=%date%_Release.zip

REM Project Folder check
echo %cd%
REM if not exist %buildLocation% (
REM )
if exist %buildLocation% rmdir /Q /S "%buildLocation%"
mkdir %buildLocation%


REM Main Portfolio copy started
echo ---------------- project folder copy started  ------------------
xcopy %portfoliolocation% %buildlocation% /K /S /D /H /Y
echo ---------------- project copy successfully. --------------------

REM Mini project Copy started
ECHO ------------- Sub project folder copy started -------------------
Xcopy %miniProjectLocation% %miniProjectsPortfolioLocation% /K /S /D /H /Y
ECHO --------------- Sub project folder copyed successfully -------------

ECHO ---------- Remove Unnessary files -----------------
cd /d %buildLocation%
echo %cd%

REM Remove Folders
if exist %buildLocation% (for /f %%f in (%portfolioLocation%\excludeFolders.txt) do (FOR /d /r . %%s IN ("%%f") DO @IF EXIST "%%s" rd /s /q "%%s"))

REM Remove Files
if exist %buildLocation% (for /f %%f in (%portfolioLocation%\excludeFiles.txt) do (del %%f /a /s))
REM ECHO ----------------- Removing unnessary files Successfully -------------


REM ECHO ----------------- Zip Creating Started ----------------------------------
dir %buildLocation% /b > %portfolioLocation%\folders.txt
cd %buildLocation%
	
for /f %%f in (%portfolioLocation%\folders.txt) do (
	%zip% a %buildLocation%\%zipName% %%f
)
ECHO ----------------- Creating zip file Successfully ---------------------

IF NOT EXIST %portfolioLocation%\build\ MKDIR %portfolioLocation%\build\
IF EXIST %buildLocation%\%zipName% MOVE %buildLocation%\%zipName% %portfolioLocation%\build\%zipName%
ECHO ----------------- Zip moved Successfully ---------------------

ECHO ---------------- Operation Completed Successfully -----------------

PAUSE