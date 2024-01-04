import { Container, Dot } from './styles';

export function OptionIcon() {
  const dots = [1, 2, 3];

  return (
    <Container style={{ gap: 3 }}>
      {dots.map((dot) => (
        <Dot key={dot} />
      ))}
    </Container>
  );
}
