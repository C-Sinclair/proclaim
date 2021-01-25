import styled from "@emotion/styled";

export const SectionRoot = styled.section`
  display: flex;
  width: 100vw;
`;

export const RecordBtn = styled.button`
  color: var(--white);
  background-color: var(--red);
  height: 50px;
  width: 50px;
  border-radius: 50px;
  border: none;
  outline: none;
  font-size: 8pt;
  cursor: pointer;
`;

export const MicLevel = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  background-color: var(--white);
  width: 10px;
  height: calc(1200px / var(--level) - 30px);
`;
