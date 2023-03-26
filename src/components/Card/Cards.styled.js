import styled from '@emotion/styled';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const CardContainer = styled('div')`
  max-width: 600px;
  padding: 3rem;
`;

export const StyledCard = styled(Card)`

`;

export const StyledCardMedia = styled(CardMedia)`
  height: 140px;
`;

export const SunlightTypography = styled(Typography)`
  margin: 16px;
  color: ${({ theme }) => theme.palette.primary.main};
  font-weight: ${({ theme }) => theme.typography.fontWeightBold};
`;

export const StyledButton = styled(Button)`
  margin: 16px;
`;
