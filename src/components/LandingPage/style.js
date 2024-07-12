import styled from "styled-components";

export const PageTitleContainer = styled.div`
  background: #ffffff;
  padding: 24px;
`;
export const PageTitle = styled.div`
  font-family: Commissioner;
  font-size: 28px;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: -0.20000000298023224px;
  text-align: left;
  color: #2d3540;
`;
export const ContentPart = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 16px;
  background-color: #f5f8fa;
`;

export const DeviceMoniteringCards = styled.div`
  display: flex;
  flex-direction: row;
  padding: 16px 24px 16px 24px;
  gap: 16px;
  opacity: 0px;
  background-color: white;
`;

export const SummaryCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;

export const SummaryCardImg = styled.img`
  width: 24px;
  height: 24px;
`;
export const SummaryCardNumber = styled.p`
  font-family: Commissioner;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.20000000298023224px;
  text-align: left;
  padding: 0px;
  margin: 0px;
  color: #2d3540;
`;
export const SummaryCardText = styled.p`
  padding: 0px;
  margin: 0px;
  font-family: Commissioner;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.20000000298023224px;
  text-align: left;
  color: #2d3540;
`;

export const TablePart = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
`;

export const SearchAndPagination = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
`;

export const SearchAndFilter = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const PaginationAndDropDown = styled.div`
  display: flex;
`;

export const DropDownContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const DropDownSelect = styled.select`
  padding: 5px;
  width: 50px;
`;

export const DropDownOption = styled.option`
  display: flex;
`;

export const TableHeading = styled.th`
  padding: 14px 20px;
  font-family: Commissioner;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.20000000298023224px;
  text-align: left;
  color: #2d3540;
`;
export const TableData = styled.td`
  padding: 14px 20px;
  font-family: Commissioner;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.20000000298023224px;
  text-align: left;
  color: #2d3540;
`;

export const ViewButton = styled.button`
  padding: 8px 16px;
  border-radius: 8px;
  opacity: 0px;
  background-color: #f5f8fa;
  border: none;
  cursor: pointer;
`;
