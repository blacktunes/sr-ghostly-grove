export const textReplace = (text: string) => {
  return text
    .replace(/\n/g, '<br>')
    .replace(/#(\S+?)#/g, '<span class="text_highlight">#$1#</span>')
    .replace(/@(\S+?)\s/g, '<span class="text_highlight">@$1</span>&#160;')
}
