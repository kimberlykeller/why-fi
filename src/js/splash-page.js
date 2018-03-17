import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import HeroImage from './hero-image';
import SplashPageColumn from './splash-page-col';

/* SplashPage:
 * A component that holds the content for the splash page
 *
 * Props:
 * className (str, optional):
 *     to be used by styled-components for styling
 */
const SplashPage = (props) => (
    <div className={props.className}>
        <HeroImage />
        <SplashPageColumn
            title='Connecting Old Technology to New Opportunities'
        >
            <div>
                Hello World!
            </div>
        </SplashPageColumn>
    </div>
);

SplashPage.propTypes = {
    className: PropTypes.string,
};

const SplashPageStyled = styled(SplashPage)`
    height: 100%;
`;

export default SplashPageStyled;