export const searchData = {
  text: '我是文本'
}

export function newText(state, newText) {
  return (state.searchData.text = newText)
}
