---
id: lesson_apache1
title: Install an Apache web server
---

In this lesson you'll learn how to install a basic Apache web server with a static html website.

## Start

```sh
admindojo start
```

If you're using a local VM, select:

    "Install and run an apache web server (offline version)"

If you're using a public server, select:

    Install and run apache web server (cloud version)
## Your tasks

☐ Install the apache2 webs erver

☐ Make sure the web server is running

☐ View the local demo website from your terminal

☐ View the demo website in a browser


## Detailed explanation (spoilers)
### About Apache
<details><summary>click to show</summary>
<p>

The Apache HTTP Server or short just *Apache* is one of the internets first, and most used, web server. Originally based on the *NCSA HTTPd* server, 
you'll still find it referenced as *httpd*(**H**yper**t**ext **T**ransfer **P**rotocol **d**aemon).

One reason of it's popularity is the ability to quickly add features through dynamically loadable modules. However, this also makes it a bit 
clunky compared to alternatives like nginx, which is optimized for performance. 

Apache is also part of the popular *LAMP* Stack - which is a bundle of **L**inux, **A**pache, **M**ySQL, and **P**HP". Generally speaking this refers to installing:
- an operating system
- a web server
- a database
- and an interpreter to create dynamic websites (without it, a web server usually just serves HTML content only)

External resources
- [Apache's website](https://httpd.apache.org/)
- [nginx's website](https://www.nginx.com/resources/wiki/)
- [nginx's take on "nginx vs. apache"](https://www.nginx.com/blog/nginx-vs-apache-our-view/)
- [An overview of popular Webservers](https://maccablo.com/web-servers-a-detailed-overview-popular-webservers/)
- [Wikipedia: LAMP](https://en.wikipedia.org/wiki/LAMP_(software_bundle))
</p>
</details>

### Starting and controlling apache
<details><summary>click to show</summary>
<p>

There are a few ways to manage programs in Linux. To understand older tutorials and books, you should know some of them.
The full story is quite complex and an interesting read for later. For now, just remember that 
`systemctrl` should always do the trick. 

- `sudo service programX start` This was the *old* command till Ubuntu 14.10. Used with SysVinit.
- `sudo systemctl start programX` This is the modern and universal approach. Used by systemd - a system and service manager.


There is even an extra program to control apache:
- `sudo apache2ctrl start` Since Ubuntu 16.04 this is already replaced and liked to the `systemctl` command.


Additional info:
- To check the status of a program, use `sudo systemctl status programX`
- Not all programs are stating automatically during the system start-up. Use `sudo systemctl enable programX` to enable the autostart.

External resources
- [Discussion: Difference between systemctl init.d and service](https://askubuntu.com/a/911543)
- [Commands SysVinit vs Systemd ](https://fedoraproject.org/wiki/SysVinit_to_Systemd_Cheatsheet)
</p>
</details>

### Accessing websites from terminal
<details><summary>click to show</summary>
<p>

Since you're in a terminal, you'll have to judge the status of websites by text-information only. There are a few tools for that e.g. :

- curl: a tool that can handle almost every internet-related protocol
- lynx: a text-based web-browser. It can't handle complex/modern websites or technologies. But it'll give you a visual representation of the website

Always keep in mind what information you're interested in. E.g:
- accessing "localhost" will only give you a status of the local web server. Users will access your web server via it's public IP or FQDN
- web servers will always send response status codes(e.g. 200 or 404). These codes are only visible in the HTTP header fields. Try `curl -v`
- ports and protocols are important. When checking websites, also check what protocol(e.g. try `curl -v http://wikipedia.com:443`)


External resources
- [HTTP headers - by Mozilla](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)  
- [HTTP response status codes - by Mozilla](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

</p>
</details>