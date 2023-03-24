function majorityElement(nums) {
    const hash = {};
    const n = nums.length;
    for (let i = 0; i < n; i++) {
      const num = nums[i];
      hash[num] = (hash[num] || 0) + 1;
      if (hash[num] > Math.floor(n / 2)) {
        return num;
      }
    }
}
  
console.log(majorityElement([2,2,1,1,1,2,2]))
console.log(majorityElement([3,2,3]))