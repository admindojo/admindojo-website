---
id: getting-started
title: Getting started
---

Start a training is easy and it's possible on your own VM or hassle-free directly on our servers.

# I want to train on my own machine
- Internet
- Ubuntu Server VM

or
- Ubuntu Server e.g. a free Amazon AWS micro instanz
# I don't want setup anything
## Requirements
- Internet
- terminal (mac/linux) or 

or
- SSH-Client (windows)
 
## Connect
### nativ mac/linux terminal
```sh
ssh -p 1332 admin@admingame.de
```
### nativ mac/linux terminal
putty: xyls



# Start your training

```sh
admin@admingame:~/$ admingame start

Available missions:

        1 Install and run apache webserver
        2 Install and run apache webserver
        3 Install and run apache webserver (cant get solved)
        4 TEST MISSION NAME
Please select a mission [Input number]:
1

######################################################
      Mission: Install and run apache webserver

         by: Marvin Heimbrodt url: slashlog.de
######################################################

Your Tasks:


⏵ Install Apache Webserver
        Description: Install the apache2 webserver for ubuntu

⏵ Apache Webserver is running
        Description: Make sure the webserver is running

⏵ Apache Website is online
        Description: You should be able to reach the apache demo website from the comadline

⏵ Apache Website is public
        Description: Your demo Website should be publicly visible with a webbrowser.

Note: Install and run apache webserver


```

### End your training
```sh
admin@admingame:~$admingame end

Mission: Install and run apache webserver

Your Result:
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

Mission complete

Mission marked as solved
```