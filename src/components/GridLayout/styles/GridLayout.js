import styled from 'styled-components'
import { motion } from 'framer-motion'

export const GridContainer = styled(motion.div)`
	pointer-events: none;
	width: 100%;
	height: 100%;
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
        grid-area: 13 / 11 / 29 / 23;
    }

    #pos-5 {
        grid-area: 16 / 31 / 36 / 43;
    }

    #pos-6 {
        grid-area: 20 / 46 / 28 / 51;
    }

    #pos-7 {
        grid-area: 43 / 1 / 51 / 10;
    }

    #pos-8 {
        grid-area: 33 / 14 / 46 / 22;
    }

    #pos-9 {
        grid-area: 41 / 25 / 50 / 30;
    }

    #pos-10 {
        grid-area: 40 / 37 / 48 / 46;
    }
`;

export const FlexContainer = styled(motion.section)`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 90.5vh;
	align-items: center;
	justify-content: center;

    @media(max-width: 674px) {
        height: 50vh;
    }
`;

export const Item = styled(motion.div)`

    div {
        flex: none;
        width: 100%;
	    height: 100%;
        ${'' /* opacity: .6; */}
    } 

`;

export const Image = styled(motion.div)`
	position: relative;
    width: 100%;
	height: 100%;
    background:
    url(${({ backgroundImage }) => (backgroundImage && `${backgroundImage}`)})
    50% 50% / cover no-repeat;
`;
