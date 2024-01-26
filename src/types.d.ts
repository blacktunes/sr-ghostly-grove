interface MessageBase {
  user: Character | number
  text: string
}

type CommentItem = MessageBase & {
  comments: MessageBase[]
}

type Message = MessageBase & {
  id: number
  title: string
  is_like: boolean
  like: number
  image?: string
  time: number
  comments: CommentItem[]
}

interface Character {
  id: number
  name: string
  avatar: string
}
