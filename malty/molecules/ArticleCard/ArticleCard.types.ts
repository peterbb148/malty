import { ButtonColor, ButtonStyle } from '@carlsberggroup/malty.atoms.button';
import { CardOrientation, CardStyle } from '@carlsberggroup/malty.atoms.card';

export interface ArticleCardProps {
  cardStyle?: CardStyle;
  orientation?: CardOrientation;
  onCardClick?: () => void;
  title: string;
  description?: string;
  date?: string;
  imageSrc: string;
  dataTestId?: string;
  imageHeight?: string;
  imageWidth?: string;
  action?: {
    variant: ButtonStyle;
    color: ButtonColor;
    label: string;
    onClick: () => void;
  };
}