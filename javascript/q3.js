const groupObjectsBy = (objArray, key) => {
  const ans = objArray.reduce((result, cur) => {
    if (!result[cur[key]]) {
      result[cur[key]] = []
    }
    result[cur[key]].push(cur)

    return result
  }, {})

  return ans
}

console.log(
  groupObjectsBy(
    [
      {
        channel: 'A',
        name: 'shoe',
      },
      {
        channel: 'A',
        name: 'electronics',
      },
      {
        channel: 'B',
        name: 'apparel',
      },
      {
        channel: 'C',
        name: 'electronics',
      },
    ],
    'channel'
  )
)
