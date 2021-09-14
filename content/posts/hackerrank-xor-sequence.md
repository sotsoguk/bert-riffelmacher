+++ 
draft = true
date = 2021-08-31T17:12:46+02:00
title = "Hackerrank: XOR - Sequence"
description = ""
slug = ""
authors = []
tags = []
categories = []
externalLink = ""
series = []
+++

# Xor - Sequence


We are given an Array $A$, which is defined as follows:
- $A_0 = 0$
- $A_n = A_{n-1} \oplus n$

The beginning of this array looks like this:
$ A = [0,1,3,0,4,1,7,0,8,1,11,\dots]$

## Task

For a given $l,r$ with $l \leq r$, we have to compute the XOR sum of the segement of $A$
$$A[l] \oplus A[l+1] \oplus \dots \oplus A[r-1]\oplus A[r]$$

## Solution

Given the constraint $l\leq r \leq 10^{15}$ it is obvious, that a brute-force solution most likely will timeout for most testcases. Making use of the properties of the $\oplus$ operator can simplify this problem quite a lot.

First, define $S(n) = \oplus_i^n A_i$. Since $x\oplus x = 0$, the problem can be rewritten as follows:

$$ A[l] \oplus A[l+1] \oplus \dots \oplus A[r-1]\oplus A[r]  = S(r) \oplus S(l-1) $$. 

Next, we have to find a way to compute $S(n)$ efficiently. Writing out some of the sequences reveals the following pattern:

$$\require{cases}
S(n) 
a+b
$$
