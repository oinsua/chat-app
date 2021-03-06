import styled from '@emotion/styled';

export const DivForm = styled.div`
                                background-color: var(--brand-color_4);
                                display: flex;
                                flex-direction: column;
                                justify-content: center;
                                align-items: center;
                                width: 96%;
                                border: 5px solid var(--theme-body-border);
                                margin: 2px;
                                border-radius: 10px;
`
 
export const SpanError =  styled.span`
                                display: flex;
                                flex-direction: column;
                                justify-content: center;
                                align-items: center;
                                margin: 0px;
                                padding: 0px;
                                font-family: var(--font-fam);
                                font-size: var(--font-size);
                                color: var(--brand-color_13);
                                font-weight: 700;
                                height: 20px;
`

export const DivInput = styled.div`
                                display: flex;
                                justify-content: center;
                                align-items: center; 
                                margin-top: 3px;
                                width: 100%;

`

export const Form = styled.form`
                                display: flex;
                                justify-content: center;
                                align-items: center; 
                                margin-top: 3px;
                                width: 100%;

`

export const Input = styled.textarea`
                    font-family: var(--font-fam);
                    font-size: var(--font-size);
                    margin: 10px 0px;
                    padding: .2rem;
                    background-color: whitesmoke;
                    border: none;
                    border-radius: 10px;
                    font-size: 1rem;
                    resize: none;
                    margin-right: 5px;
`

export const Button = styled.button`
                                display: inline-block;
                                margin-right: 2px;
                                margin-top: 10px;
                                background-color: var(--brand-color_7);
                                color: var(--theme-title);
                                font-size: 0.8rem;
                                padding: .6rem;
                                font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
                                font-weight: 900;
                                width: 70px;
                                border: 2px solid var(--theme-body-txt);
                                border-radius: 10px;
                                letter-spacing: 3px;
                                text-transform: uppercase;

                                &:hover{
                                    background-color: var(--brand-color_8);
                                }
`