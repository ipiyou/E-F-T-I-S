import { Dispatch, SetStateAction } from "react";
import ReMoveIcon from "../../assets/Back";
import * as S from "./style";

interface PropType {
  Focus: boolean;
  recent: string[];
  onSearch: (keyWord: string) => void;
  SettingRecent: (payload: string) => void;
  setSearchKeyword: Dispatch<SetStateAction<{ searchValue: string }>>;
}

function MapRecent({
  Focus,
  recent,
  onSearch,
  SettingRecent,
  setSearchKeyword,
}: PropType) {
  const RecentItemClick = (data: string) => {
    setSearchKeyword({ searchValue: data });
    onSearch(data);
  };

  return (
    <div>
      {Focus && (
        <S._RecentWrapper>
          {recent.map((data,idx) => (
            <S._RecentItemWrapper key={idx}>
              <div onClick={() => RecentItemClick(data)}>{data}</div>
              <S._SearchButton onClick={() => SettingRecent(data)}>
                <ReMoveIcon />
              </S._SearchButton>
            </S._RecentItemWrapper>
          ))}
        </S._RecentWrapper>
      )}
    </div>
  );
}

export default MapRecent;
