+++ 
draft = true
date = 2021-11-24T17:40:22+01:00
title = "Geometric Art"
description = ""
slug = ""
authors = []
tags = []
categories = []
externalLink = ""
series = []
+++

# Geometric Art

Denoting the length of the sides of the outer squares with $d$, the length of the inner, rotated square with $D$,we can use the *pythagorean theorem* to set up the following equation:
$$ D^2 = (d-x)^2 + x^2\tag{1}\label{eq1}$$.
On the other hand, $\sin{\alpha}$ can be expressed as:
$$ \sin{\alpha} = \frac{x}{D} \tag{2}\label{eq2}$$.
Solving Equation \eqref{eq2} for $x$, substituting in \eqref{eq1} and some rearranging yields the following quadratic equation in $D$:
$$ (1-2\sin^2{\alpha})D^2 + 2d\sin{\alpha}D - d^2 = 0\tag{3}\label{eq3}$$

Solving :
$$ D_{1,2} = \frac{-\sin{\alpha}\pm\cos\alpha}{1-2\sin^2\alpha}$$

$$ D = \frac{\cos{\alpha}-\sin\alpha}{1-2\sin^2\alpha}$$

Double Angle Identity
$$1-2\sin^2\alpha = \cos{2\alpha} = \cos^2\alpha - \sin^2\alpha$$

$$
\begin{align}
D &= \frac{\cos{\alpha}-\sin\alpha}{\cos^2\alpha - \sin^2\alpha} \\\\
&=\frac{\cos{\alpha}-\sin\alpha}{(\cos\alpha - \sin\alpha)(\cos\alpha + \sin\alpha)} \\\\
&= \frac{1}{\cos\alpha + \sin\alpha}
\end{align}
$$