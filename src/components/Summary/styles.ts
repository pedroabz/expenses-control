import { styled } from '@mui/material';

export const SummaryContainer = styled('section')(() => ({
  width: '100%',
  maxWidth: '1120px',
  margin: '0 auto',
  padding: '0 1.5rem',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '2rem',
  marginTop: '-5rem',
}));

interface SummaryCardProps {
  variant?: 'green';
}

export const SummaryCard = styled('div')<SummaryCardProps>(({ theme, variant }) => ({
  background: theme.palette.grey[600],
  borderRadius: '6px',
  padding: '2rem',
  '& header': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: theme.palette.grey[300],
  },
  '& strong': {
    display: 'block',
    marginTop: '1rem',
    fontSize: '2rem',
  },
  ...(variant === 'green' && {
    background: theme.palette.green[700],
  }),
}));
