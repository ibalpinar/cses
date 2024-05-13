**Time limit:** 1.00 s &nbsp;&nbsp;
**Memory limit:** 512 MB

You have to process $n$ tasks. Each task has a duration and a deadline, and you will process the tasks in some order one after another. Your reward for a task is $d-f$ where d is its deadline and $f$ is your finishing time. (The starting time is $0$, and you have to process all tasks even if a task would yield negative reward.)

What is your maximum reward if you act optimally?

**Input**

The first input line has an integer $n$: the number of tasks.

After this, there are $n$ lines that describe the tasks. Each line has two integers $a$ and $d$: the duration and deadline of the task.

**Output**

Print one integer: the maximum reward.

**Constraints**

 - $1 \le n \le 2 \cdot 10^5$
 - $1 \le a,d \le 10^6$

**Example**

Input:<br />
3<br />
6 10<br />
8 15<br />
5 12

Output:<br />
2