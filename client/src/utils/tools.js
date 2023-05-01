export const protectEmail = user_email => {
  var avg, splitted, part1, part2
  splitted = user_email.split('@')
  part1 = splitted[0]
  avg = part1.length / 2
  part1 = part1.substring(0, part1.length - avg)
  part2 = splitted[1]
  return part1 + '***@' + part2
}
