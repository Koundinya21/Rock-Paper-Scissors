import styled from 'styled-components'

export const GameScoreContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  width: 80%;
  border: 2px solid #ffffff;
  border-radius: 10px;
  background-color: transparent;
  //   margin-top: 2%;
  margin-bottom: 0px;
`

export const GameScoreNameContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const GameScoreName = styled.h1`
  color: white;
  font-size: 20px;
  font-family: 'Bree Serif';
  margin-top: 0px;
  margin-bottom: 0px;
  padding-left: 18px;
  @media screen and (max-width: 576px) {
    font-size: 14px;
  }
`

export const GameScoreBoardContainer = styled(GameScoreNameContainer)`
  background-color: #ffffff;
  width: 15%;
  height: 100%;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 576px) {
    width: 25%;
  }
`

export const GameScoreBoardHeading = styled.p`
  color: #223a5f;
  font-size: 20px;
  margin-top: 10px;
  font-weight: 500;
  font-family: 'Roboto';
  @media screen and (max-width: 576px) {
    font-size: 16px;
  }
`

export const GameScoreBoardScore = styled.p`
  color: #223a5f;
  font-size: 42px;
  margin-top: 0px;
  font-family: 'Roboto';
  text-align: center;
  font-weight: bold;
  @media screen and (max-width: 576px) {
    font-size: 24px;
    margin-top: 10px;
  }
`
