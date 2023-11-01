import {
  HeaderContainer,
  HeaderContent,
  LogoImage,
  NewTransactionButton,
} from './styles'
import moneyImg from '../../assets/money.svg'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoImage src={moneyImg} alt="" />
        <NewTransactionButton>New transaction</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  )
}
