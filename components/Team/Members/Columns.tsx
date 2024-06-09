import { useHelpers } from '@/hooks/useHelpers'
import { ColumnDef } from '@tanstack/react-table'
import Roles from './Options/Roles'

export const columns: ColumnDef<any>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
    cell: ({ row }) => {
      const name: string = row.getValue('name')
      const email: string = row.original.email
      return (
        <div className='flex items-center gap-2'>
          <div className='flex items-center justify-center bg-black text-white font-bold capitalize w-8 h-8 rounded-full'>
            {name[0]}
          </div>
          <div className='grid'>
            <span className='font-medium'>{name}</span>
            <span className='text-xs text-neutral-500'>{email}</span>
          </div>
        </div>
      )
    },
  },
  {
    accessorKey: 'role',
    header: 'Role',
    cell: ({ row }) => {
      const { open, setOpen, loading, setLoading } = useHelpers()
      const role: string = row.getValue('role')

      const onRoleChanged = (v: string) => {
        try {
          setLoading(true)
          alert(v)
        } catch (error: any) {
          throw new Error(error)
        } finally {
          setOpen(false)
          setLoading(false)
        }
      }

      return (
        <div onClick={() => setOpen(!open)} className='w-[120px]'>
          {!open && (
            <span className='text-sm text-neutral-500 capitalized'>{role}</span>
          )}
          {open && <Roles {...{ selected: role }} setSelected={(v) => onRoleChanged(v)} />}
        </div>
      )
    },
  },
]
