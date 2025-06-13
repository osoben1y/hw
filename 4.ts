function intersect(nums1: number[], nums2: number[]): number[] {
  const map = new Map<number, number>();
  const result: number[] = [];

  for (const num of nums1) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  for (const num of nums2) {
    const count = map.get(num);
    if (count && count > 0) {
      result.push(num);
      map.set(num, count - 1);
    }
  }

  return result;
}
console.log(intersect([1, 2, 2, 1], [2, 2]));
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
