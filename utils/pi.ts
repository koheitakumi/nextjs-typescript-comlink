export default function pi(n: number): number {
    var v = 0
    for (let i = 1; i <= n; i += 4) {
      // increment by 4
      v += 1 / i - 1 / (i + 2) // add the value of the series
    }
    return 4 * v // apply the factor at last
  }
