**Time limit:** 1.00 s &nbsp;&nbsp;
**Memory limit:** 512 MB

You are given a map of a labyrinth, and your task is to find a path from start to end. You can walk left, right, up and down.

**Input**

The first input line has two integers $n$ and $m$: the height and width of the map.

Then there are $n$ lines of $m$ characters describing the labyrinth. Each character is . (floor), # (wall), A (start), or B (end). There is exactly one A and one B in the input.

**Output**

First print "YES", if there is a path, and "NO" otherwise.

If there is a path, print the length of the shortest such path and its description as a string consisting of characters L (left), R (right), U (up), and D (down). You can print any valid solution.

**Constraints**

 - $1 \le n,m \le 1000$

**Example**

Input:<br />
5 8<br />
\########<br />
\#. A# . . . #<br />
\#. ##. #B#<br />
\# . . . . . . #<br />
\########

Output:<br />
YES<br />
9<br />
LDDRRRRRU