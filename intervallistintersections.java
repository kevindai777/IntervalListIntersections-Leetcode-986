//Java Solution

class Solution {
    public int[][] intervalIntersection(int[][] A, int[][] B) {
        List<int[]> result = new ArrayList<>();
        int p1 = 0;
        int p2 = 0;
        
        while (p1 < A.length && p2 < B.length) {
            int start = Math.max(A[p1][0], B[p2][0]);
            int end = Math.min(A[p1][1], B[p2][1]);
            
            if (start <= end) {
                result.add(new int[] {start, end});
            }
            
            if (A[p1][1] < B[p2][1]) {
                p1++;
            } else {
                p2++;
            }
        }
        
        return result.toArray(new int[result.size()][]);
    }
}