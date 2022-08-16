import styled from "@emotion/styled";

function ExamName() {
  return (
    <div>
      <ExamListName>이름</ExamListName>
      <ExamListItem>칸성비</ExamListItem>
      <ExamListItem>상인 판매</ExamListItem>
      <ExamListItem>플리 판매</ExamListItem>
      <ExamListItem>가격 변동</ExamListItem>
    </div>
  );
}

const ExamListName = styled.span`
  font-size: 18px;
  padding: 0 267px;
`;

const ExamListItem = styled.span`
  font-size: 18px;
  padding: 0 15px;
`;

export default ExamName;
