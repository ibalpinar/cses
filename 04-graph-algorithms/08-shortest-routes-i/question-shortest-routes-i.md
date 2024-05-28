**Time limit:** 1.00 s &nbsp;&nbsp;
**Memory limit:** 512 MB

There are $n$ cities and $m$ flight connections between them. Your task is to determine the length of the shortest route from Syrjälä to every city.

**Input**

The first input line has two integers $n$ and $m$: the number of cities and flight connections. The cities are numbered $1,2,\dots,n$, and city 1 is Syrjälä.

After that, there are $m$ lines describing the flight connections. Each line has three integers $a$, $b$ and $c$: a flight begins at city $a$, ends at city $b$, and its length is $c$. Each flight is a one-way flight.

You can assume that it is possible to travel from Syrjälä to all other cities.

**Output**

Print $n$ integers: the shortest route lengths from Syrjälä to cities $1,2,\dots,n$.

**Constraints**

 - $1 \le n \le 10^5$
 - $1 \le m \le 2 \cdot 10^5$
 - $1 \le a,b \le n$
 - $1 \le c \le 10^9$

**Example**

Input:<br />
3 4<br />
1 2 6<br />
1 3 2<br />
3 2 3<br />
1 3 4

Output:<br />
0 5 2