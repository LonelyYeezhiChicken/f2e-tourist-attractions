export const toQS = (obj) => {
  const qs = new URLSearchParams({
    ...obj,
    $format: 'JSON',
  })
  return qs.toString()
}
