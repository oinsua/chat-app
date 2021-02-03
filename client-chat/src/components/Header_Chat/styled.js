import styled from '@emotion/styled';
import {Link as LinkS} from 'react-router-dom';

export const DivHeader = styled.div`
                                    background-color: var(--brand-color_4);
                                    width: 96%;
                                    height: 50px;
                                    border: 5px solid var(--theme-body-border);
                                    border-radius: 10px;
                                    margin: 1px;
`
export const Link = styled(LinkS)`
                                text-decoration: none;
                                color: var(--theme-title) ;
`

export const Spanleft = styled.span`
                                    float: left;
                                    display:flex;
                                    justify-content: center;
                                    font-family: var(--font-fam);
                                    font-size: 1.2rem;
                                    color: var(--theme-title);
                                    font-weight: 700;
                                    margin: 5px;
                                    text-transform: capitalize;
                                    
`

export const Spanright = styled.span`
                                    float:right;
                                    display:flex;
                                    justify-content: center;
                                    font-family: var(--font-fam);
                                    font-size: 1.5rem;
                                    color: var(--theme-title);
                                    font-weight: 700;
                                    margin: 5px;
`