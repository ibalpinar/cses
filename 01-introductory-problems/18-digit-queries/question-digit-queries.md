**Time limit:** 1.00 s
**Memory limit:** 512 MB

Consider an infinite string that consists of all positive integers in increasing order:<br />
12345678910111213141516171819202122232425...

Your task is to process $q$ queries of the form: what is the digit at position $k$ in the string?

**Input**
The first input line has an integer $q$: the number of queries.

After this, there are $q$ lines that describe the queries. Each line has an integer $k$: a 1-indexed position in the string.

**Output**

For each query, print the corresponding digit.
Constraints

 - 1 $\le$ $q$ $\le$ 1000
 - 1 $\le$ $k$ $\le$ $10^{18}$

**Example**

Input:<br />
3<br />
7<br />
19<br />
12

Output:<br />
7<br />
4<br />
1