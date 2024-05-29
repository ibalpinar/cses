**Time limit:** 1.00 s &nbsp;&nbsp;
**Memory limit:** 512 MB

Your task is to find the $k$ shortest flight routes from Syrjälä to Metsälä. A route can visit the same city several times.

Note that there can be several routes with the same price and each of them should be considered (see the example).

**Input**

The first input line has three integers $n$, $m$, and $k$: the number of cities, the number of flights, and the parameter $k$. The cities are numbered $1,2,\ldots,n$. City 1 is Syrjälä, and city $n$ is Metsälä.

After this, the input has $m$ lines describing the flights. Each line has three integers $a$, $b$, and $c$: a flight begins at city $a$, ends at city $b$, and its price is $c$. All flights are one-way flights.

You may assume that there are at least $k$ distinct routes from Syrjälä to Metsälä.

**Output**

Print $k$ integers: the prices of the $k$ cheapest routes sorted according to their prices.

**Constraints**

 - $2 \le n \le 10^5$
 - $1 \le m \le 2 \cdot 10^5$
 - $1 \le a,b \le n$
 - $1 \le c \le 10^9$
 - $1 \le k \le 10$

**Example**

Input:<br />
4 6 3<br />
1 2 1<br />
1 3 3<br />
2 3 2<br />
2 4 6<br />
3 2 8<br />
3 4 1

Output:<br />
4 4 7

Explanation: The cheapest routes are 1 \rightarrow 3 \rightarrow 4 (price 4), 1 \rightarrow 2 \rightarrow 3 \rightarrow 4 (price 4) and 1 \rightarrow 2 \rightarrow 4 (price 7).