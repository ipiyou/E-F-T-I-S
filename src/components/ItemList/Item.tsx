import styled from "@emotion/styled";
import React, { Dispatch, SetStateAction } from "react";

interface PropType {
  item: {
    name: string;
    types: [];
    basePrice: number;
    width: number;
    height: number;
    changeLast48hPercent: number;
    iconLink: string;
    sellFor: [
      { price: number; source: "fence" },
      { price: number; source: "skier" },
      { price: number; source: "peacekeeper" },
      { price: number; source: "ragman" },
      { price: number; source: "fleaMarket" }
    ];
  };
  setLastIntersectingImage?: Dispatch<SetStateAction<HTMLDivElement | null>>;
}

const Item = React.memo(({ item, setLastIntersectingImage }: PropType) => {
  const ShotBest = Math.max(
    ...item.sellFor.map((data) => (data.price ? data.price : 0))
  );
  const Kan = (value: number) => {
    return Math.floor(value / (item.height * item.width)) + "₽";
  };
  return (
    <_ItemWrapper ref={setLastIntersectingImage && setLastIntersectingImage}>
      <_ItemDisplay>
        <_ItemImg src={item.iconLink} />
        <div>{item.name}</div>
      </_ItemDisplay>
      <_ItemValueWrapper>
        <_ItemValue>
          {item.basePrice > ShotBest ? Kan(item.basePrice) : Kan(ShotBest)}
        </_ItemValue>
        <_ItemValue>{ShotBest !== -Infinity ? ShotBest + "₽" : "X"}</_ItemValue>
        <_ItemValue>{item.basePrice + "₽"}</_ItemValue>
        <_ItemValue>
          {Math.floor((item.basePrice * item.changeLast48hPercent) / 100) + "₽"}
        </_ItemValue>
      </_ItemValueWrapper>
    </_ItemWrapper>
  );
});

const _ItemWrapper = styled.div`
  width: 960px;
  height: 68px;
  display: flex;
  align-items: center;
  background-color: #373633;
  margin: 15px 0;
  padding: 0 10px;
  border-radius: 5px;
`;

const _ItemImg = styled.img`
  width: 48px;
  height: 48px;
  margin-right: 10px;
`;

const _ItemDisplay = styled.div`
  width: 650px;
  display: flex;
  align-items: center;
`;

const _ItemValueWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 500px;
`;

const _ItemValue = styled.div`
  padding: 0 10px;
`;

export default Item;
