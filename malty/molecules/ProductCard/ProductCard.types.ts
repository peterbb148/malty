import { IconColor } from '@carlsberggroup/malty.atoms.base-icon';
import { CardOrientation, CardStyle } from '@carlsberggroup/malty.atoms.card';
import { PillProps } from '@carlsberggroup/malty.atoms.pill';
import { PriceProps } from '@carlsberggroup/malty.atoms.price';
import { SelectOptionsType } from '@carlsberggroup/malty.atoms.select';
import { AlertInlineProps } from '@carlsberggroup/malty.molecules.alert-inline';
import { ActionButton, ActionQuantityInput, Stock } from '@carlsberggroup/malty.molecules.product-quantity-actions';
import { MRO } from '@carlsberggroup/malty.molecules.sku';
import { SpaceProps } from '@carlsberggroup/malty.utils.space';

export interface ProductCardProps extends SpaceProps {
  productCardStyle?: CardStyle;
  orientation?: CardOrientation;
  onProductClick?: () => void;
  onSelectQuantityChange?: (value: SelectOptionsType[]) => void;
  onFavoriteClick?: (favorite: boolean) => void;
  title: string;
  sku?: string;
  mro?: MRO;
  productsCardsAlerts?: AlertInlineProps[];
  quantitySelectOptions?: SelectOptionsType[];
  discountPill?: PillProps;
  promoPill?: PillProps;
  cartPill?: PillProps;
  favoriteIconColor?: IconColor;
  stock?: Stock;
  loyalty?: {
    label: string;
    imageSrc: string;
  };
  price?: PriceProps;
  imageSrc: string;
  dataTestId?: string;
  imageHeight?: string;
  imageWidth?: string;
  actionQuantityInput?: ActionQuantityInput;
  actionButton?: ActionButton;
}
