import styled from "styled-components";

export const Info = styled.div`

div{
    position: absolute;
    right: 15px;
    margin-top: clamp(340px, 25vw, 200px);
    margin-left: 15px;
    background-color: rgba(201, 231, 242, 0.75);
    min-width: 25%;
    min-height: 25%;
    z-index: 10000;
    text-align:justify;
    border: 1px solid rgb(8, 165, 238);
    border-radius: 5px;
    text-align: center;
    color: rgb(8, 165, 238);
    font-weight: 700;

    h4{
        font-size:.75vw;
        margin-top: 20px;
    }
}

`
