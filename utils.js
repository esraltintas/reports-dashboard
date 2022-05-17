export const groupBy = (arr, key) => {
  return arr.reduce((v, x) => {
    ;(v[x[key]] = v[x[key]] || []).push(x)
    return v
  }, {})
}
