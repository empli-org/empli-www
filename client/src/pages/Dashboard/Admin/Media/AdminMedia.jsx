import { useGetPostsQuery } from '@/redux/features/api/news/newsApi'
import {
  Badge,
  Card,
  Tab,
  TabList,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Title,
} from '@tremor/react'
import { useState } from 'react'
import esStrings from 'react-timeago/lib/language-strings/es'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'
import TimeAgo from 'react-timeago'

const tabs = [
  { value: 1, label: 'Noticias' },
  { value: 2, label: 'Media' },
]

const formatter = buildFormatter(esStrings)

export default function AdminMediaPage() {
  const [selectedView, setSelectedView] = useState(1)

  return (
    <main className="bg-slate-100 p-6">
      <Title>Media</Title>
      <TabList
        value={selectedView}
        onValueChange={setSelectedView}
        defaultValue={selectedView}
        className="mt-6"
      >
        {tabs.map((item, idx) => (
          <Tab value={item.value} text={item.label} key={idx} />
        ))}
      </TabList>

      <section className="py-6">
        {selectedView === 1 ? <PostsTable /> : <MediaTable />}
      </section>
    </main>
  )
}

function PostsTable() {
  const { data, isFetching, isLoading } = useGetPostsQuery()
  const posts = data?.data
  const loading = isFetching || isLoading

  const getBadgeStyle = active => {
    return `text-xs text-blue-whale ${
      active ? 'bg-gulf-stream/30' : 'bg-gray-200'
    }`
  }
  return (
    <Card>
      <Title>Lista de posts</Title>
      {loading && <h1>Cargando...</h1>}
      <Table className="mt-5">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Titulo</TableHeaderCell>
            <TableHeaderCell>Categoria</TableHeaderCell>
            <TableHeaderCell>Alcance</TableHeaderCell>
            <TableHeaderCell>Estado</TableHeaderCell>
            <TableHeaderCell>Creado</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {!loading &&
            posts &&
            posts?.length > 0 &&
            posts.map(post => (
              <TableRow key={post.id}>
                <TableCell>{post.title}</TableCell>
                <TableCell>{post.category}</TableCell>
                <TableCell>
                  <Badge className={getBadgeStyle(post.premium)}>
                    {post.premium ? 'Premium' : 'Libre'}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge className={getBadgeStyle(false)}>Publico</Badge>
                </TableCell>
                <TableCell>
                  <TimeAgo formatter={formatter} date={post.createdAt} />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </Card>
  )
}

function MediaTable() {
  return (
    <Card>
      <Title className="text-xl font-medium text-slate-500">
        Aún no hay media publicada
      </Title>
    </Card>
  )
}
