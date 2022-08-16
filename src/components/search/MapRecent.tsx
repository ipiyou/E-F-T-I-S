import ReMoveIcon from "../../assets/Back";
import * as S from "./style";

interface PropType {
  Focus: boolean;
  recent: string[];
  RecentClick: (data: string) => void;
  SettingRecent: (payload: string) => void;
}

function MapRecent({ Focus, recent, RecentClick, SettingRecent }: PropType) {
  return (
    <div>
      {Focus && (
        <S._RecentWrapper>
          {recent.map((data) => (
            <S._RecentItemWrapper>
              <div onClick={() => RecentClick(data)}>{data}</div>
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
