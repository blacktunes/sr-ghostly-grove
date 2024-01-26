export const textReplace = (text: string, label?: boolean) => {
  if (label) {
    text = text.replace(/#(\S+?)#/g, '<span class="text_highlight">#$1#</span>')
  }
  return text
    .replace(/\n/g, '<br>')
    .replace(/@(\S+?)\s/g, '<span class="text_highlight">@$1</span>&#160;')
}
