export function EditorSidebar() {
  return (
    <aside className='w-64 bg-gray-800 p-4 text-white'>
      <ul>
        <li className='mb-2'>
          <a href='/editor'>Dashboard</a>
        </li>
        <li>
          <a href='/editor/profile'>Perfil</a>
        </li>
      </ul>
    </aside>
  )
}
