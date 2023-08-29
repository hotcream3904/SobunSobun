import styled from "styled-components/";
import { Flex, cursor } from "../../common/GlobalStyle";

export const LayoutBox = styled.main`
    width: 100%;
    border-top: 1px solid #d9d9d9;
    margin: 0 auto;
`;

export const DetailMain = styled.article`
    max-width: 1550px;
    margin: 0 auto;
`;

export const Category = styled.div`
    width: 100%;
    margin: 90px 0 65px;
    ${cursor}
    display:inline-block;
    padding: 5px;
    color: #b6b6b6;
    span {
        color: #b6b6b6;
        &:hover {
            border-bottom: 1px solid #b6b6b6;
        }
    }
    strong {
        color: #333;
    }
`;

export const InlineWrapper = styled.div`
    width: 100%;
    ${Flex}
    justify-content: space-between;
`;

export const InfoSection = styled.div`
    width: 720px;
    min-width: 550px;
`;

export const Content = styled.section`
    width: 100%;
    height: 100%;
    margin: 20px 0;
    text-align: justify;
    white-space: pre-wrap;
    line-height: 200%;
    font-size: 1.1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    h1 {
        margin-bottom: 20px;
        font-size: 1.5rem;
    }
`;

export const Dates = styled.div`
    color: #8c8c8c;
    width: 300px;
    text-align: right;
    span {
        color: #8c8c8c;
        margin: 0 8px;
    }
`;

export const DetailList = styled.ul`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 90px;
    align-content: center;
    li {
        border-bottom: 1px solid #dcdcdc;
        border-top: 1px solid #dcdcdc;
        width: 100%;
        height: 75px;
        ${Flex}
        justify-content: flex-start;
    }
    strong {
        margin-left: 20px;
        display: inline-block;
        font-size: 1.3rem;
        width: 230px;
        /* height: 75px; */
    }
    span {
        font-size: 18px;
        color: #777;
        display: inline-block;
        padding-left: 24px;
    }
`;
