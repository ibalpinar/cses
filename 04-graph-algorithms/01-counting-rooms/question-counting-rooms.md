**Time limit:** 1.00 s &nbsp;&nbsp;
**Memory limit:** 512 MB

You are given a map of a building, and your task is to count the number of its rooms. The size of the map is $n \times m$ squares, and each square is either floor or wall. You can walk left, right, up, and down through the floor squares.

**Input**

The first input line has two integers $n$ and $m$: the height and width of the map.

Then there are $n$ lines of $m$ characters describing the map. Each character is either . (floor) or # (wall).

**Output**

Print one integer: the number of rooms.

**Constraints**


- $1 \le n,m \le 1000$

**Example**

Input:<br />
5 8<br />
########<br />
#. . # . . . #<br />
####. # . #<br />
#. . # . . . #<br />
########

Output:<br />
3