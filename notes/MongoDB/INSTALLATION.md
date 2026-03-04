# MongoDB Installation Debug Summary (Windows)


## Step 1: Installed MongoDB Compass

 MongoDB Compass is only a GUI tool.
 
 It does NOT include the database engine.
 
 At this stage, only the UI was installed.

------------------------------------------------------------

## Step 2: Installed MongoDB Community Server via CMD


# After installation, tried:

mongod --version


# Error received:

'mongod' is not recognized as an internal or external command


# Root Cause:  MongoDB bin directory was NOT added to the system PATH environment variable.

------------------------------------------------------------

## Important Concepts

# mongod:     MongoDB Database Server (engine)

 Runs in background as a Windows Service

# mongosh:     MongoDB Shell

 Used to interact with the database

------------------------------------------------------------

## Why the Error Happened

# When we type:  mongod

# Windows searches for mongod.exe inside folders listed in PATH.
# Since MongoDB's bin folder was NOT added to PATH,
# Windows could not locate mongod.exe.

------------------------------------------------------------

## Solution

# Add MongoDB bin directory to PATH:

C:\Program Files\MongoDB\Server\8.x\bin

# After adding PATH:

# Close CMD

# Open new CMD



mongod --version


# Now it works.

------------------------------------------------------------

## Running CMD as Administrator


# Running normal CMD:

 - Limited privileges

 - Cannot start system services

 - Cannot modify system-level variables


# Running CMD as Administrator:

 - Elevated privileges

 - Can install/uninstall software

 - Can start/stop services

 - Can modify system PATH

 - Can access protected directories


------------------------------------------------------------


## Linux Comparison

# Windows:


# Right click -> Run as Administrator


# Entire session elevated


# Linux:


sudo command


# Only that command runs as root


# Conceptually:


# Administrator CMD ≈ sudo in Linux

------------------------------------------------------------


## Final Understanding

# MongoDB Compass  -> GUI


# mongod           -> Database server


# mongosh          -> Shell client


# PATH variable    -> Tells OS where executables are located


# Admin CMD        -> Elevated privilege session

------------------------------------------------------------

# Status: MongoDB Server Installed Successfully
