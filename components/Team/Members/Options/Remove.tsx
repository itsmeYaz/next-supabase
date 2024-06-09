import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import { useHelpers } from '@/hooks/useHelpers'
import { toast } from 'sonner'

function Remove({ user, open, onClose }: any) {
  const { loading, setLoading } = useHelpers()

  const removeMember = () => {
    try {
      setLoading(true)
      toast.success('User successfully archived.')
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }
  return (
    <AlertDialog open={open}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are You absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            {user.name || 'Member'} will be remove.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            onClick={() => onClose()}
            className='bg-red-500 text-white'
          >
            Cancel
          </AlertDialogCancel>
          {/* {<CustomButton {...{ label: 'Confirm', loading, onclick: removeMember }}/>} */}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default Remove
