import styled from '@emotion/styled';
import {Link as LinkRoute} from 'react-router-dom';

export const Header = styled.header`
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin: 0px;
                    padding: 0px;
`
export const Link = styled(LinkRoute)`
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    text-decoration: none;
                    margin: 0px;
                    padding: 0px;
                    
`

export const Img = styled.img`
                    witdh: 100%;
                    max-witdh: 60px;
                    max-height: 60px;
                    border-radius: 50%;
                    margin: 0px 5px;
`

export const H1 = styled.h1`
                    color: var(--theme-title);
`

export const DIV = styled.div`
                        background-color: var(--brand-color_4);
                        border: 5px solid var(--theme-body-border);
                        border-radius: 10px;
                        margin: 10px;
                        width: 98%;
                        height: 80px;
`