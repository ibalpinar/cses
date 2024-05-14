**Time limit:** 1.00 s &nbsp;&nbsp;
**Memory limit:** 512 MB

You are given an array of $n$ integers. Your task is to calculate the median of each window of $k$ elements, from left to right.

The median is the middle element when the elements are sorted. If the number of elements is even, there are two possible medians and we assume that the median is the smaller of them.

**Input**

The first input line contains two integers $n$ and $k$: the number of elements and the size of the window.

Then there are n integers $x_1,x_2,\ldots,x_n$: the contents of the array.

**Output**

Print $n-k+1$ values: the medians.

**Constraints**

 - $1 \le k \le n \le 2 \cdot 10^5$
 - $1 \le x_i \le 10^9$

**Example**

Input:<br />
8 3<br />
2 4 3 5 8 1 2 1

Output:<br />
3 4 5 5 2 1