interface TitleProps {
  title: string
}

export function Title({ title }: TitleProps) {

  

  return (
    <h1 className="text-white text-3xl font-light text-center py-6">
      {title}
    </h1>
  )
}