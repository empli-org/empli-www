import { Container, FormBlog } from '@/components'

export default function CreateMediaPage() {
  return (
    <Container>
      <div className="py-8">
        <h1>Create new post</h1>
        <FormBlog />
      </div>
    </Container>
  )
}
