import { ColumnDef } from '@tanstack/react-table'

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
]
