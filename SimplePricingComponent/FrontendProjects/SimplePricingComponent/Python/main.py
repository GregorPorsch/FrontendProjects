def maxProfit(prices) -> int:
        max_profit = 0
        prices_desc = prices.copy()
        prices_desc.sort(reverse=True)
        if prices == prices_desc or len(prices) == 1:
              return max_profit
        
        left = 0
        right = 1
        while left < len(prices) - 1:
            profit = prices[right] - prices[left]
            max_profit = max(max_profit, profit)
            if right == len(prices) - 1:
                left += 1
                right = left + 1
            elif profit < 0:
                left += 1
                right = left + 1
            else:
                right += 1

        return max_profit



print(maxProfit([1,2]))