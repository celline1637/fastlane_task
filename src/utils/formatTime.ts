export const formatTime = (time: Date) => {
  if (time) {
    const newDate = new Date()
    const today = newDate.setHours(newDate.getHours())
    const timeValue = new Date(time).getTime()

    const dateToArray = time.toString().split('T')

    const yymmdd = dateToArray[0].split('-')

    const month = () => {
      if (yymmdd[1].split('')[0] === '0') {
        return yymmdd[1].split('')[1]
      } else {
        return yymmdd[1]
      }
    }

    const day = () => {
      if (yymmdd[2].split('')[0] === '0') {
        return yymmdd[2].split('')[1]
      } else {
        return yymmdd[2]
      }
    }

    const milliSeconds = today - timeValue
    const seconds = milliSeconds / 1000
    const minutes = seconds / 60
    const hours = minutes / 60
    const days = hours / 24

    if (seconds < 60) return `방금 전`
    if (minutes < 60) return `${Math.floor(minutes)}분 전`
    if (hours < 24) return `${Math.floor(hours)}시간 전`
    if (days < 7) return `${Math.floor(days)}일 전`
    return `${yymmdd[0]}년 ${month()}월 ${day()}일`
  }
}
