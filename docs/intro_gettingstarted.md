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

1. [install VirtualBox](https://www.virtualbox.org/)
2. [install Vagrant](https://www.vagrantup.com/downloads.html)
3. [download admindojo-trainings](https://github.com/admindojo/admindojo-trainings/archive/master.zip)

## Usage

1. Open a Terminal(Linux + Mac) or Powershell(Windows) and change in the downloaded admindojo directory
2. Change to a training directory
    - e.g. `cd ub18-apache-1`
3. Type `vagrant up`
    - Vagrant will now build the VM. The first run can take a while 
4. Type `vagrant ssh`
    - You're now inside the VM and can start the training
5. To verfiy your solution type: `admindojo`

### User and password
- username: `vagrant`
- password: `vagrant`
### System details
The used Linux distribution can differ by training:
- Ubuntu 18 (bionic)
    - [Official cloud-image distributed by Ubuntu](https://app.vagrantup.com/ubuntu/boxes/bionic64)
### shutdown, reset
- shutdown
    - inside VM: `shutdown now`
    - outside VM, inside training directory: `vagrant halt`
- reset
    - to completely rebuild the VM and reset the state: `vagrant destroy; vagrant up` 
### remove VM
- outside VM, inside training directory: `vagrant destroy`

# advanced users
- Vagrant 
    - [Official documentation](https://www.vagrantup.com/docs/cli/)
    - [Cheat Sheet by wpscholar](https://gist.github.com/wpscholar/a49594e2e2b918f4d0c4)
- VirtualBox
    - [Official documentation](https://www.virtualbox.org/wiki/End-user_documentation)
- InSpec 
    - [Official documentation](https://www.inspec.io/docs/reference/cli/)