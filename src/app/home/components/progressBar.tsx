import { styled } from '@mui/material/styles'
import LinearProgress, {
  linearProgressClasses
} from '@mui/material/LinearProgress'

export const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
    ...theme.applyStyles('dark', {
      backgroundColor: theme.palette.grey[800]
    })
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: '#FD3600',
    ...theme.applyStyles('dark', {
      backgroundColor: '#308fe8'
    })
  }
}))
