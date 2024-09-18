import React from 'react';
import { FiInfo } from 'react-icons/fi';
import { TiWarningOutline } from 'react-icons/ti';
import { GoQuote } from 'react-icons/go';
import styled from 'styled-components';

const Blockquote = ({ children, display = 'default' }) => {
  const types = {
    warning: (
      <div className='container warning'>
        <TiWarningOutline className='icon' />
        {children}
      </div>
    ),
    info: (
      <div className='container info'>
        <FiInfo className='icon' />
        {children}
      </div>
    ),
    default: (
      <div className='quote'>
        <GoQuote className='quote-icon' />
        {children}
      </div>
    ),
  };

  return <Wrapper>{types[display] || types.default}</Wrapper>;
};

const Wrapper = styled.blockquote`
  .container {
    padding: 2rem 1.5rem;
    background: var(--clr-grey-10, #f9f9f9);
    border-radius: var(--radius, 4px);
    color: var(--clr-grey-1, #333);
    border-left: 3px solid var(--clr-grey-5, #ccc);
    position: relative;
    margin: 2rem 0;
  }

  @media (min-width: 1170px) {
    .container {
      margin-left: -2rem;
      margin-right: -2rem;
    }
  }

  .icon {
    position: absolute;
    top: 0;
    left: -3px;
    background: var(--clr-white, #fff);
    transform: translate(-50%, -50%);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 6px solid var(--clr-white, #fff);
  }

  .info {
    background: var(--clr-primary-10, #e0f7fa);
    color: var(--clr-primary-1, #00796b);
    border-color: var(--clr-primary-5, #00796b);
    .icon {
      color: var(--clr-primary-5, #00796b);
    }
  }

  .warning {
    background: #fffaeb;
    color: #513c06;
    border-color: #f7d070;
    .icon {
      color: #f7d070;
    }
  }

  .quote {
    @media (min-width: 576px) {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
    }
    font-style: italic;
    color: var(--clr-grey-5, #666);
    line-height: 1.8;
    word-spacing: 3px;
    font-size: 1.2rem;
    margin: 2rem 0;
    .quote-icon {
      font-size: 6rem;
      color: var(--clr-primary-5, #00796b);
    }
  }
`;

export default Blockquote;
