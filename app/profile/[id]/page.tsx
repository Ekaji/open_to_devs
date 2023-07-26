export default function Page({ params }: { params: { id: string | number } }) {
  return <div>My Profile: {params.id}</div>
}