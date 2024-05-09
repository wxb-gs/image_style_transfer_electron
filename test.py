class Solution:
    def countWays(self, ranges) -> int:
        def cal(n, b):
            if n == b or b == 0:
                return 1
            sum = 1
            for i in range(b):
                sum *= n-i
            return sum

        def summary(n):
            sum = 0
            for i in range(n+1):
                sum += cal(n, i)
            return sum

        ranges = sorted(ranges, key=lambda x: x[0])
        arr = []
        l = len(ranges)
        arr.append(ranges[0])
        for i in range(1, l):
            [start1, end1] = arr[-1]
            area = ranges[i]
            [start2, end2] = area
            if start2 == end1 or (start2 < end1 and end2 >= end1):
                arr[-1][1] = end2
            elif start2 > end1:
                arr.append([start2, end2])

        return arr


s = Solution()
s.countWays([[1, 3], [10, 20], [2, 5], [4, 8]])
