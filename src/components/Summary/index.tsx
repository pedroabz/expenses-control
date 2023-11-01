import { ArrowUpward, ArrowDownward, MonetizationOn } from '@mui/icons-material';
import { SummaryCard, SummaryContainer } from './styles';

export function Summary() {
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Incomes</span>
          <ArrowUpward fontSize="large" style={{ color: '#00b37e' }} />
        </header>

        <strong>€ 27.400,00</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Expenses</span>
          <ArrowDownward fontSize="large" style={{ color: '#f75a68' }} />
        </header>

        <strong>€ 2.400,00</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <MonetizationOn fontSize="large" style={{ color: '#fff' }} />
        </header>

        <strong>€ 25.000,00</strong>
      </SummaryCard>
    </SummaryContainer>
  );
}
