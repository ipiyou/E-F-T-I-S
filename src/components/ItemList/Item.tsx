import styled from "@emotion/styled";
import React from "react";

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
}

const Item = React.memo(({item}: PropType)  => {
    const ShotBest = Math.max(...item.sellFor.map(data => data.price ? data.price : 0))
    const Kan = (value: number) =>{
        return Math.floor(value / (item.height * item.width)) + "₽" + item.height + item.width
    }
    return (
    <_ItemWrapper>
        <_ItemDisplay>
            <_ItemImg src={item.iconLink}/>
            <span>{item.name}</span>
        </_ItemDisplay>
      <_ItemValueWrapper>
        <_ItemValue>{item.basePrice > ShotBest ? Kan(item.basePrice) : Kan(ShotBest)}</_ItemValue>
        <_ItemValue>{ShotBest !== -Infinity ? ShotBest + "₽" : 'X'}</_ItemValue>
        <_ItemValue>{item.basePrice + "₽"}</_ItemValue>
        <_ItemValue>{Math.floor(item.basePrice * item.changeLast48hPercent / 100) + "₽"}</_ItemValue>
      </_ItemValueWrapper>
    </_ItemWrapper>
  );
})

const _ItemWrapper = styled.div`
  height: 68px;
  display: flex;
  align-items: center;
`;

const _ItemImg = styled.img`
  width: 48px;
  height: 48px;
`;

const _ItemDisplay = styled.div`
    
`

const _ItemValueWrapper = styled.div`
    display:flex;

`

const _ItemValue = styled.div`
    padding: 0 10px;
`

export default Item;
