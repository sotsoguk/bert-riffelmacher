---
title: "Linux Server vom iPhone aufwecken"
date: 2019-09-18T13:09:00+02:00
draft: false
---


Unter meinem Schreibtisch steht ein betagter, aber immer noch gut funktionierender **HP NL54** Server der mit UbuntuServer läuft. Da er aufgrund
seines Alters nicht sehr energieeffizient ist wird er nur bei Bedarf ein- und ausgeschalten. Vom Desktop aus geht das über `wol.exe` und ein kleines Skript.
Neuerdings aber auch vom iPhone aus, was wirklich sehr praktisch ist. Man braucht dafür nicht mehr als das kostenlose Tool [mochaWOL](https://apps.apple.com/de/app/mocha-wol/id422625778) 
und das in iOS integrierte Tool *Shortcuts* (Kurzbefehle).

## Server aufwecken

Um den Server überhaupt über WOL aufwecken zu können, muss die entsprechende Option im BIOS aktiviert werden. Dann benötigt man noch die IP und MAC Adresse des
Servers. In Ubuntu können über `sudo ifconfig -a` die Netzwerkschnittstellen ausgegeben werden. Seit einiger Zeit wird die primäre Ethernet Schnittstelle nicht mehr
als `eth0` bezeichnet, den entsprechenden Eintrag finde ich immer über die IP Adresse. Bei mir ist es `enp3s0`. Unter `HWaddr` findet man die MAC Adresse.



![wol configuration](/img/IMG_7800.jpg)


Nach einem Test ob das aufwecken auf funktioniert kann der Kurzbefehl erstellt werden. Die nötigen Aktionen zeigt das Bild unten. Außerdem kann der Kurzbefehl [hier](https://www.icloud.com/shortcuts/bde255bd011940359e72e673d8ea67a4) heruntergeladen werden. 
Um Kurzbefehle aus unbekannten Quellen hinzufügen zu können, muss die entsprechende Erlaubnis unter *Einstellungen -> Kurzbefehle* erteilt werden.


![shortcut](/img/IMG_7799.png)


Diesen Kurzbefehl kann man nun noch in das Widget legen oder über einen Siri-Kurzbefehl starten. Im nächsten Post zeige ich dann wie sich der Server über einen Kurzbefehl wieder herunterfahren lässt.