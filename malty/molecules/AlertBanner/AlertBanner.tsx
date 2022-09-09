import { Icon, IconColor, IconName, IconSize } from '@carlsberggroup/malty.atoms.icon';
import { Link, LinkColor, LinkStyle } from '@carlsberggroup/malty.atoms.link';
import { Text, TextColor, TextStyle } from '@carlsberggroup/malty.atoms.text';
import {
  CloseButtonContainer,
  Container,
  ContentRow,
  FadeText,
  FadeWrapper,
  MessageContainer,
  StyledAction,
  StyledMessage
} from '@carlsberggroup/malty.molecules.alert-banner/AlertBanner.styled';
import { AlertBannerProps, AlertBannerType } from '@carlsberggroup/malty.molecules.alert-banner/AlertBanner.types';
import { Pagination, PaginationType } from '@carlsberggroup/malty.molecules.pagination';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import layoutProps from '@carlsberggroup/malty.theme.malty-theme-provider/layout.json';
import React, { FC, KeyboardEvent, RefObject, useContext, useEffect, useRef, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { usePrevious, useScrollPosition } from './AlertBanner.helper';

export const iconColorsMap = {
  [AlertBannerType.Information]: IconColor.White,
  [AlertBannerType.Warning]: IconColor.DigitalBlack,
  [AlertBannerType.Error]: IconColor.White
};

const textColorsMap = {
  [AlertBannerType.Information]: TextColor.White,
  [AlertBannerType.Warning]: TextColor.DigitalBlack,
  [AlertBannerType.Error]: TextColor.White
};

export const AlertBanner: FC<AlertBannerProps> = ({
  alerts,
  breakpoint = layoutProps.small['device-max-width'].value,
  animation
}) => {
  const theme = useContext(ThemeContext) || defaultTheme;
  const [activeAlert, setActiveAlert] = useState(1);
  const [width, setWidth] = useState<number>(window.innerWidth);
  const currentAlert = alerts[activeAlert - 1];
  const breakpointNumber = Number(breakpoint.split('px')[0]);
  const isMobile = width <= breakpointNumber;
  const [textWrapperSize, setTextWrapperSize] = useState<number | undefined>(0);
  const alertBannerStyledMessage: RefObject<HTMLDivElement> = useRef(null);
  const { showAnimations, triggerYPosition, isBannerTextCompressed, toggleBannerTextCompress } = animation || {
    showAnimations: false,
    triggerYPosition: 0,
    isBannerTextCompressed: false,
    toggleBannerTextCompress: undefined
  };
  const prevAlertSelection: number = usePrevious(activeAlert);

  const handleToggle = (value: boolean) => {
    if (isMobile) {
      toggleBannerTextCompress?.(value);
    }
  };

  const showAlertBannerDetails = () => {
    if (isBannerTextCompressed && isMobile) {
      handleToggle(false);
    }
  };

  const setNewAlertBannerDetailsState = (newState: boolean) => {
    handleToggle(newState);
  };

  useScrollPosition(
    ({ currPos }) => {
      const scrollBiggerThanTriggerPosition = () =>
        isMobile && showAnimations && Math.abs(currPos.y) > triggerYPosition;
      if (scrollBiggerThanTriggerPosition() && !isBannerTextCompressed) {
        setNewAlertBannerDetailsState(true);
        return;
      }
      if (!scrollBiggerThanTriggerPosition() && isBannerTextCompressed) {
        setNewAlertBannerDetailsState(false);
      }
    },
    [isMobile, showAnimations, isBannerTextCompressed],
    200
  );

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  useEffect(() => {
    const textElement = alertBannerStyledMessage.current?.clientHeight;
    if (isMobile && !prevAlertSelection) {
      setTextWrapperSize(textElement);
    }
    if (isMobile && prevAlertSelection && prevAlertSelection !== activeAlert && textElement) {
      setTextWrapperSize(textElement);
    }
  }, [isMobile, activeAlert, prevAlertSelection, alertBannerStyledMessage.current]);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  const handleOnKeyUp =
    (action?: () => void) =>
    ({ key }: KeyboardEvent<HTMLDivElement>) => {
      if (key === 'Enter' && action) {
        action();
      }
    };

  const triggerAnimation = () => isBannerTextCompressed || false;

  if (!alerts?.length) {
    return null;
  }

  const renderAction = () => {
    if (!currentAlert.action) {
      return null;
    }
    return (
      <StyledAction
        data-testid={`${currentAlert.dataQaId}-action-container`}
        tabIndex={0}
        onClick={currentAlert.action}
        onKeyUp={handleOnKeyUp(currentAlert.action)}
        role="button"
        theme={theme}
        breakpoint={breakpoint}
      >
        <Link
          color={currentAlert.type !== AlertBannerType.Warning ? LinkColor.White : LinkColor.DigitalBlack}
          linkStyle={LinkStyle.MediumSmallBold}
        >
          {currentAlert.actionName}
        </Link>
      </StyledAction>
    );
  };

  const renderCloseButton = () => (
    <CloseButtonContainer
      triggerFadeAnimation={triggerAnimation()}
      data-testid={`${currentAlert.dataQaId}-close-icon`}
      onClick={currentAlert.dismiss || (() => null)}
      onKeyUp={handleOnKeyUp(currentAlert.dismiss)}
      tabIndex={0}
      role="button"
      theme={theme}
    >
      {currentAlert.dismiss && (
        <Icon
          className="inline-AlertBanner-icon"
          name={IconName.Close}
          size={IconSize.Medium}
          color={iconColorsMap[currentAlert.type]}
        />
      )}
    </CloseButtonContainer>
  );

  const renderIcon = () => {
    const iconNameMap = {
      [AlertBannerType.Information]: IconName.Information,
      [AlertBannerType.Warning]: IconName.Alert,
      [AlertBannerType.Error]: IconName.Alert
    };

    return (
      <Icon name={iconNameMap[currentAlert.type]} color={iconColorsMap[currentAlert.type]} size={IconSize.Medium} />
    );
  };

  const renderMessage = () =>
    isMobile ? (
      <FadeText fire={triggerAnimation()} currentElementHeight={textWrapperSize}>
        <StyledMessage hideText={triggerAnimation()} isMobile ref={alertBannerStyledMessage}>
          <Text textStyle={TextStyle.MediumSmallDefault} color={textColorsMap[currentAlert.type]}>
            {currentAlert.message}
          </Text>
        </StyledMessage>
      </FadeText>
    ) : (
      <StyledMessage hideText={triggerAnimation()}>
        <Text textStyle={TextStyle.MediumSmallDefault} color={textColorsMap[currentAlert.type]}>
          {currentAlert.message}
        </Text>
      </StyledMessage>
    );

  const renderMobileActionsContent = () => {
    if ((isMobile && alerts.length > 1) || currentAlert.action) {
      return (
        <FadeWrapper theme={theme} show={isBannerTextCompressed} data-testid="fade-wrapper">
          <ContentRow theme={theme}>
            <Pagination
              count={alerts?.length}
              onChange={(pageNr) => setActiveAlert(pageNr)}
              currentPage={activeAlert}
              type={PaginationType.Compact}
              isWhite={currentAlert.type !== AlertBannerType.Warning}
              dataQaId="alert-banner-pagination"
            />
            {renderAction()}
          </ContentRow>
        </FadeWrapper>
      );
    }
    return null;
  };

  return (
    <Container typeAlert={currentAlert.type} theme={theme}>
      <ContentRow
        data-testid={`${currentAlert.dataQaId}-AlertBanner-content`}
        theme={theme}
        onClick={showAlertBannerDetails}
      >
        {!isMobile && (
          <Pagination
            count={alerts.length}
            onChange={(pageNr) => setActiveAlert(pageNr)}
            currentPage={activeAlert}
            type={PaginationType.Compact}
            isWhite={currentAlert.type !== AlertBannerType.Warning}
          />
        )}
        <MessageContainer
          theme={theme}
          breakpoint={breakpoint}
          data-testid={`${currentAlert.dataQaId}-AlertBanner-message-content`}
        >
          {currentAlert.icon && renderIcon()}
          {renderMessage()}
          {!isMobile && currentAlert.action && renderAction()}
        </MessageContainer>
        {renderCloseButton()}
      </ContentRow>
      {isMobile && renderMobileActionsContent()}
    </Container>
  );
};
