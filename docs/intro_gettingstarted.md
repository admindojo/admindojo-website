---
id: getting-started
title: Getting started
---

Here is how you start your training:

## What you'll need
- Internet
- a fresh Ubuntu Server VM (e.g. VirtualBox) with a `sudo user`

or
- a fresh Ubuntu Server with a `sudo user` (e.g. a free Amazon AWS micro instance)
- a Terminal (SSH)

Please note that you'll install software and modify the system during the training. 
It is recommended to use a fresh install for every lesson (use snapshots on local VMs).
 
### Login to the system
Connect to your Ubuntu via SSH or via console (in case of a VM)

## Install admindojo
Simpy download the latest version and install the required software by typing the following into the terminal:
```sh
#Download 
wget https://github.com/admindojo/admindojo/archive/master.tar.gz
tar -xzf master.tar.gz
rm master.tar.gz
mv admindojo-master admindojo

#Install required software and add directory to $PATH
bash ./setup.sh

```
## Start your training
Simply type `admindojo start` and you'll get a list of all available lessons:

```sh
admin@admindojo:~/$ admindojo start

Available lessons:

        1 Install and run apache webserver
        2 TEST MISSION
Please select a lesson [Input number]:
1

######################################################
      Lesson: Install and run apache webserver

         by: Marvin Heimbrodt url: slashlog.de
######################################################

Your Tasks:


⏵ Install Apache Webserver
        Description: Install the apache2 webserver for ubuntu

⏵ Apache Webserver is running
        Description: Make sure the webserver is running

⏵ Apache Website is online
        Description: You should be able to reach the apache demo website from the comandline

⏵ Apache Website is public
        Description: Your demo Website should be publicly visible with a webbrowser.



```

### End your training and check result
Type `admondojo end` to get your work checked:
```sh
admin@admindojo:~$admindojo end

Lesson: Install and run apache webserver

Your result:
⏵ Install Apache Webserver         solved ✔
  Points:                                 2
-------------------------
⏵ Apache Webserver is running      solved ✔
  Points:                                 1
-------------------------
⏵ Apache Website is online         solved ✔
  Points:                                 1
-------------------------
⏵ Apache Website is public         solved ✔
  Points:                                 1
-------------------------

  Total Points:                           5
  Your Points :                           5


You solved all tasks!

Lesson complete

Lesson marked as solved
```

### Train in tutor mode
In tutor mode a tutor checks your work in the background while you're working. Once a task is completed
```bash
admindojo tutor
```