**Time limit:** 1.00 s &nbsp;&nbsp;
**Memory limit:** 512 MB

You are given an array containing $n$ positive integers.

Your task is to divide the array into $k$ subarrays so that the maximum sum in a subarray is as small as possible.

**Input**

The first input line contains two integers $n$ and $k$: the size of the array and the number of subarrays in the division.

The next line contains n integers $x_1,x_2,\ldots,x_n$: the contents of the array.

**Output**

Print one integer: the maximum sum in a subarray in the optimal division.

**Constraints**

 - $1 \le n \le 2 \cdot 10^5$
 - $1 \le k \le n$
 - $1 \le x_i \le 10^9$

**Example**

Input:<br />
5 3<br />
2 4 7 3 5

Output:<br />
8

Explanation: An optimal division is $[2,4],[7],[3,5]$ where the sums of the subarrays are $6,7,8$. The largest sum is the last sum $8$.