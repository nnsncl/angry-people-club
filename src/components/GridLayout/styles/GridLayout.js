import styled from 'styled-components';

export const GridContainer = styled.section`
	pointer-events: none;
	position: absolute;
	width: 100%;
	height: 113%;
	display: grid;
	grid-template-columns: repeat(50,2%);
	grid-template-rows: repeat(50,2%);

    #pos-1 {
	    grid-area: 10 / 1 / 26 / 7;
    }

    #pos-2 {
        grid-area: 1 / 18 / 9 / 27;
    }

    #pos-3 {
        grid-area: 1 / 36 / 14 / 42;
    }

    #pos-4 {
        grid-area: 13 / 11 / 32 / 18;
    }

    #pos-5 {
        grid-area: 17 / 32 / 32 / 38;
    }

    #pos-6 {
        grid-area: 20 / 46 / 28 / 51;
    }

    #pos-7 {
        grid-area: 43 / 1 / 51 / 10;
    }

    #pos-8 {
        grid-area: 38 / 14 / 46 / 22;
    }

    #pos-9 {
        grid-area: 40 / 26 / 51 / 32;
    }

    #pos-10 {
        grid-area: 37 / 39 / 48 / 47;
    }
`;

export const FlexContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: calc(100vh - 9.5rem);
	position: relative;
	align-items: center;
	justify-content: center;
`;

export const HeadingContainer = styled.div`
    margin: 0;
	line-height: 1;
	position: relative;
    text-align: center;

    h1 {
        color: #f6bd60;
    }
`;

export const Item = styled.div`
	position: relative;

    div {
        flex: none;
        width: 100%;
	    height: 100%;
        will-change: transform;
    } 
`;

export const Image = styled.div`
	position: relative;
    width: 100%;
	height: 100%;
    background:
    url(${({ backgroundImage }) => (backgroundImage && `${backgroundImage}`)})
    50% 50% / cover no-repeat;
`;
