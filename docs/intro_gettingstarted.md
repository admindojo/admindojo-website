---
id: getting-started
title: Getting started
---

## Why and how?

Admindojo uses Vagrant and Virtualbox to create a local Linux VM.
After completing an objective it gets verified by the Testing Framework InSpec and you get instant feedback.

Admindojo is not just a simulation! Admindojo uses an unmodified Linux image and real-world objectives - everything that you learn is fully applicable to a standard Linux installation! 

## Requirements
- Windows, Mac, Linux
- 10-20GB HDD for VMs
- 1-2GB RAM for VMs
- Internet connection to download VMs (~500MB once + 50-100MB per training)
- Due to the usage of VirtualBox, you can't run Docker or Hyper-V in parallel with VirtualBox. See [Vagrants documentation](https://www.vagrantup.com/docs/installation/)

### Install Requirements
admindojo utilizes the third-party tools Virtualbox and Vagrant: 

1. [install VirtualBox](https://www.virtualbox.org/)
2. [install Vagrant](https://www.vagrantup.com/downloads.html)
3. [install git](https://git-scm.com/downloads) 
    
## Usage

1. Clone training-repository `git clone https://github.com/admindojo/admindojo-training.git`
    - it is also possible to just [download the trainings](https://github.com/admindojo/admindojo-training/archive/master.zip) - but git provides easier updates via `git pull` 
2. Change into cloned repository
3. Change to a training directory
    - e.g. `cd webserver-apache-basic-1-ub18`
4. Type `vagrant up`
    - Vagrant will now build the VM. The first run can take a while 
5. Type `vagrant ssh`
    - You're now inside the VM and can start the training
6. Run `admindojo` for instructions


### username and password
- username: `vagrant`
- password: `vagrant`

### operating system
The used Linux distribution can differ by training:
- Ubuntu 18 (bionic)
    - [Official cloud-image distributed by Ubuntu](https://app.vagrantup.com/ubuntu/boxes/bionic64)
    
### shutdown, reset
- shutdown
    - inside VM: `shutdown now`
    - outside VM, inside training directory: `vagrant halt`
- start over
    - outside VM, inside training directory: `vagrant destroy` and `vagrant up` to start again
    
### finish training, remove VM
- outside VM, inside training directory: `vagrant destroy`

# for advanced users

In case you are familiar with vagrant and ssh you can SSH directly to your admindojo box(SSH could require changes to the Vagrantfile depending on the Box Version).

Since admindojo uses real-world tools under the hood you're able to use their native functions.

- Vagrant 
    - [Official documentation](https://www.vagrantup.com/docs/cli/)
    - [Cheat Sheet by wpscholar](https://gist.github.com/wpscholar/a49594e2e2b918f4d0c4)
- VirtualBox
    - [Official documentation](https://www.virtualbox.org/wiki/End-user_documentation)
- InSpec 
    - [Official documentation](https://www.inspec.io/docs/reference/cli/)