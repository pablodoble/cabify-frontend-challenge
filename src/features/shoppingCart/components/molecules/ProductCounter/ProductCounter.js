import React from "react";
import styled from "styled-components";
import { Label } from "../../atoms/Label/Label";
import { NumberInput } from "../../atoms/NumberInput/NumberInput";

const CounterAligner = styled.div`
  display: flex;
  align-items: center;
`;

const CounterButton = styled.span`
  padding: 7px;
`;

const ClickableLabel = styled(Label)`
  cursor: pointer;
  user-select: none;
`;

export const ProductCounter = (props) => {
  const { value, onChange } = props;

  const onCounterButtonClick = (increment = 1) => () => {
    const newValue = value + increment;
    onChange(newValue >= 0 ? newValue : 0);
  };

  const onNumberInputChange = (event) => {
    onChange(parseInt(event.target.value));
  };

  return (
    <CounterAligner data-testid="product-counter">
      <CounterButton>
        <ClickableLabel
          bold
          color="primary"
          size="xl"
          onClick={onCounterButtonClick(-1)}
        >
          -
        </ClickableLabel>
      </CounterButton>
      <NumberInput value={value} onChange={onNumberInputChange} />
      <CounterButton>
        <ClickableLabel
          bold
          color="primary"
          size="xl"
          onClick={onCounterButtonClick(1)}
        >
          +
        </ClickableLabel>
      </CounterButton>
    </CounterAligner>
  );
};
