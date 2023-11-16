interface MessageBase {
  name: string
  avatar: string
  text: string
}

type CommentItem = MessageBase & {
  comments: MessageBase[]
}

type Message = MessageBase & {
  title: string
  like: number
  image?: string
  comments: CommentItem[]
}
