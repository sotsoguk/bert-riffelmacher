+++ 
draft = true
date = 2021-11-12T09:37:07+01:00
title = "Trilateration"
description = ""
slug = ""
authors = []
tags = []
categories = []
externalLink = ""
series = []
+++

# Trilateration

This post is heavily inspired by a problem on Project Lovelace.


The equation of circle with center $C_i(x_i,y_i)$ and radius $r_i$ is given by 
$$(x-x_i)^2 + (y-y_i)^2 = r_i^2 .$$ 
The triangulation problem then equals the problem of computing the intersection point of three circles with centers $C_i$:
$$
\begin{align}
(x-x_1)^2 + (y-y_1)^2  &= r_1^2 \tag{1}\label{eq1} \\\\
(x-x_2)^2 + (y-y_2)^2 &= r_2^2 , \tag{2}\label{eq2}\\\\
(x-x_3)^2 + (y-y_3)^2 &= r_3^2 \tag{3}\label{eq3} .
\end{align}
$$ 
Distributing the equations yieldss:
$$\begin{aligned}
(1) \quad x^2-2x_1x +x_1^2  + y^2-2y_1y+y_1^2  &= r_1^2 \\\\
(2) \quad x^2-2x_2x +x_2^2  + y^2-2y_2y+y_2^2  &= r_1^2 \\\\
(3) \quad x^2-2x_3x +x_3^2  + y^2-2y_3y+y_3^2  &= r_1^2 \\\\
\end{aligned}$$ 

In order to solve for $x$ and $y$ we subtract the equation $(1)$ from $(2)$ and $(3)$:
$$\begin{aligned}
(2-1) \quad (2x_1-2x_2)x +(2y_1-2y_2)y  &= (d_2^2-d_1^2) - (y_2^2-y_1^2), \\\
(3-1) \quad (2x_1-2x_3)x +(2y_1-2y_3)y  &= (d_3^2-d_1^2) - (y_3^2-y_1^2).
\end{aligned}$$

Substituting:
$$\begin{aligned}
\mathbf{A} &= 2x_1-2x_2,\quad \mathbf{B} =2y_1-2y_2,\quad \mathbf{C} = (d_2^2-d_1^2) - (y_2^2-y_1^2), \\
\mathbf{D} &= 2x_1-2x_3,\quad \mathbf{E} =2y_1-2y_3,\quad \mathbf{F} = (d_3^2-d_1^2) - (y_3^2-y_1^2).
\end{aligned}$$

