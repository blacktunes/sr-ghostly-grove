interface MessageBase {
  name: string
  avatar: string
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
  comments: CommentItem[]
}
