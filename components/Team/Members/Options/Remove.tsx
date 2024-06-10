import CustomButton from '@/components/CustomButton'
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
import { supabase } from '@/lib/supabase'
import { toast } from 'sonner'

function Remove({ user, open, onClose }: any) {
  const { loading, setLoading } = useHelpers()

  const removeMember = async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('team_members')
        .update({
          status: 'removed',
        })
        .eq('id', user.id)
        .select('*')

      if (data) {
        toast.success('User remove.')
      }
    } catch (error: any) {
      throw new Error(error)
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
          {
            <CustomButton
              {...{ label: 'Confirm', loading, onClick: removeMember }}
            />
          }
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default Remove
