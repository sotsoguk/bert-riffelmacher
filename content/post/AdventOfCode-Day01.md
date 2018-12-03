---
title: "AdventOfCode - Day 1"
date: 2018-12-02T01:08:19+01:00
draft: false
tags:
    - coding
    - python
    - aoc
---

I'm trying to get back to coding and problem solving at the moment and came across [Advent Of Code](https://adventofcode.com/), which seems to be a very good project to help me get started and keep me motivated. I will try to solve the problems using `python`, and maybe `c++` or any other language if i have the time.

## Day 1: Chronal Calibration

### Part 1

The first part of the first [problem](https://adventofcode.com/2018/day/1) was a very good starter for me. A very easy problem to refresh my knowledge about opening and reading files.

```python
with open('input.txt') as f:
    lines = f.readlines()

lines = [int(x.strip()) for x in lines]
oneRound = sum(lines)
print("First Star:"+str(oneRound))
```

### Part 2

My solution for the second part

```python
import itertools as it

with open('input.txt') as f:
    lines = f.readlines()

lines = [int(x.strip()) for x in lines]
oneRound = sum(lines)
print("First Star:"+str(oneRound))

seen = set()
seen.add(0)
twice = False

#partSums = [sum(lines[0:i]) for i,_ in enumerate(lines,1)]
partSums = list(it.accumulate(lines))
while not twice:
    for x in partSums:
        if x not in seen:
            seen.add(x)
        else:
            print("Second Star:" +str(x))
            twice = True
            break
    
    partSums = list(map(lambda x:x+oneRound, partSums))
```