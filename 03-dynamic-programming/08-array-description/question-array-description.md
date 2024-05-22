**Time limit:** 1.00 s &nbsp;&nbsp;
**Memory limit:** 512 MB

You know that an array has $n$ integers between 1 and $m$, and the absolute difference between two adjacent values is at most 1.

Given a description of the array where some values may be unknown, your task is to count the number of arrays that match the description.

**Input**

The first input line has two integers $n$ and $m$: the array size and the upper bound for each value.

The next line has n integers $x_1,x_2,\dots,x_n$: the contents of the array. Value $0$ denotes an unknown value.

**Output**

Print one integer: the number of arrays modulo $10^9+7$.

**Constraints**

 - $1 \le n \le 10^5$
 - $1 \le m \le 100$
 - $0 \le x_i \le m$

**Example**

Input:<br />
3 5<br />
2 0 2

Output:<br />
3

Explanation: The arrays $[2,1,2]$, $[2,2,2]$ and $[2,3,2]$ match the description.