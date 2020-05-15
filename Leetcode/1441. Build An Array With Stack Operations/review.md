This leetcode question seemed confusing to say the least, but perhaps its because I am just beginning to get into leetcode.com.

Goal: O(n) time & O(1) space

The question asks us return an array of operations that would be required to reach a given target array given a maximum of n operations.

If we manage to build the target array before reaching n operations then we should break out of the loop and return.
We create a variable called prev that we will use to access the previous element in the target array since we are assured the array is always increasing.
