**Time limit:** 1.00 s &nbsp;&nbsp;
**Memory limit:** 512 MB

There are $n$ pupils in Uolevi's class, and $m$ friendships between them. Your task is to divide the pupils into two teams in such a way that no two pupils in a team are friends. You can freely choose the sizes of the teams.

**Input**

The first input line has two integers $n$ and $m$: the number of pupils and friendships. The pupils are numbered $1,2,\dots,n$.

Then, there are $m$ lines describing the friendships. Each line has two integers $a$ and $b$: pupils $a$ and $b$ are friends.

Every friendship is between two different pupils. You can assume that there is at most one friendship between any two pupils.

**Output**

Print an example of how to build the teams. For each pupil, print "1" or "2" depending on to which team the pupil will be assigned. You can print any valid team.

If there are no solutions, print "IMPOSSIBLE".

**Constraints**

 - $1 \le n \le 10^5$
 - $1 \le m \le 2 \cdot 10^5$
 - $1 \le a,b \le n$

**Example**

Input:<br />
5 3<br />
1 2<br />
1 3<br />
4 5

Output:<br />
1 2 2 1 2