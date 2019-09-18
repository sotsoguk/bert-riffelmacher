---
title: "Server Ios Shortcuts"
date: 2019-09-18T13:09:00+02:00
draft: false
---

# Linux Server vom iPhone an- und ausschalten

Unter meinem Schreibtisch steht ein betagter, aber immer noch gut funktionierender **HP NL54** Server der mit UbuntuServer läuft. Da er aufgrund
seines Alters nicht sehr energieeffizient ist wird er nur bei Bedarf ein- und ausgeschalten. Vom Desktop aus geht das über `wol.exe` und ein kleines Skript.
Neuerdings aber auch vom iPhone aus, was wirklich sehr praktisch ist. Man braucht dafür nicht mehr als das kostenlose Tool [mochaWOL](https://apps.apple.com/de/app/mocha-wol/id422625778) 
und das in iOS integrierte Tool *Shortcuts* (Kurzbefehle).

## Server aufwecken

Um den Server überhaupt über WOL aufwecken zu können, muss die entsprechende Option im BIOS aktiviert werden. Dann benötigt man noch die IP und MAC Adresse des
Servers. In Ubuntu können über `sudo ifconfig -a` die Netzwerkschnittstellen ausgegeben werden. Seit einiger Zeit wird die primäre Ethernet Schnittstelle nicht mehr
als `eth0` bezeichnet, den entsprechenden Eintrag finde ich immer über die IP Adresse. Bei mir ist es `enp3s0`. Unter `HWaddr` findet man die MAC Adresse.
![wol configuration](img/IMG_7800.jpg)



