import styled from '@emotion/styled';

export const CardStyle = styled.div`
  border-radius: var(--radius-md, 16px);
  border: 1px solid var(--border-card, #ECECF9);
  background: var(--surface-bg-page, #FBFBFB);
`;
export const CardStyleWhite = styled.div`
  border-radius: var(--radius-md, 16px);
  border: 1px solid var(--border-card, #ECECF9);
  background: var(--surface-bg-page, #FFFFFF);
`;
export const LargeCardLayout = styled.div`
  display: flex;
  padding: var(--padding-3-xl, 40px);
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 32px var(--padding-2-xl, 32px);
  flex: 1 0 0;
  flex-wrap: wrap;
`;
export const IconLinkCardLayout = styled.div`
  display: flex;
  padding: var(--padding-3-xl, 40px);
  align-items: flex-start;
  align-content: flex-start;
  gap: 32px var(--padding-2-xl, 32px);
  flex: 1 0 0;
  flex-wrap: wrap;
`;