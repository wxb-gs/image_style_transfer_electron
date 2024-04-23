class Solution:
    def combinationSum(self, candidates, target):
        candidates = sorted(candidates)
        ans = []

        def dfs(begin, t, path=[]):
            if t < 0:
                return
            elif t == 0:
                ans.append(path)
            else:
                for index in range(begin, len(candidates)):
                    val = candidates[begin]
                    p = list(path)
                    p.append(val)
                    if t-val >= 0:
                        dfs(begin, t-val, p)
                    else:
                        break

        dfs(0, target, [])
        return ans


s = Solution()
s.combinationSum([2, 3, 5])
