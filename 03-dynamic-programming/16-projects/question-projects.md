**Time limit:** 1.00 s &nbsp;&nbsp;
**Memory limit:** 512 MB

There are $n$ projects you can attend. For each project, you know its starting and ending days and the amount of money you would get as reward. You can only attend one project during a day.

What is the maximum amount of money you can earn?

**Input**

The first input line contains an integer $n$: the number of projects.

After this, there are $n$ lines. Each such line has three integers $a_i, b_i,$ and $p_i$: the starting day, the ending day, and the reward.

**Output**

Print one integer: the maximum amount of money you can earn.

**Constraints**

 - $1 \le n \le 2 \cdot 10^5$
 - $1 \le a_i \le b_i \le 10^9$
 - $1 \le p_i \le 10^9$

**Example**

Input:<br />
4<br />
2 4 4<br />
3 6 6<br />
6 8 2<br />
5 7 3

Output:<br />
7