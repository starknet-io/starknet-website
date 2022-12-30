import React from "react";
import Wrapper from "./Wrapper";

export default {
  title: "starknet.io/StyleGuide",
};

export const Font = () => (
  <Wrapper>
    <div className='prose'>
      <h1>Header 1: {"<h1>"}</h1>
      <h2>Header 2: {"<h2>"}</h2>
      <h3>Header 3: {"<h3>"}</h3>
      <h4>Header 4: {"<h4>"}</h4>
      <h5>Header 5: {"<h5>"}</h5>
      <h6>Header 6: {"<h6>"}</h6>
      <code>{"<code>"}</code>
      <blockquote>{"<blockquote>"}</blockquote>
      <div className='text-xsmall'>.text-xsmall</div>
      <div className='text-small'>.text-small</div>
      <div className='text-base'>.text-base</div>
      <div className='text-medium'>.text-medium</div>
      <div className='text-large'>.text-large</div>
      <div className='text-xlarge'>.text-xlarge</div>
    </div>
  </Wrapper>
);
Font.storyName = "Font Size";

export const Colors = () => (
  <Wrapper>
    <div>
      <p className='py-2 px-4 bg-gray-500 text-body'>.text-body</p>
      <p className='py-2 px-4 text-bodyText'>.text-bodyText</p>
      <p className='py-2 px-4 text-focus'>.text-focus</p>
      <p className='py-2 px-4 text-tabsTrigger'>.text-tabsTrigger</p>
      <p className='py-2 px-4 text-primary'>.text-primary</p>
      <p className='py-2 px-4 text-buttonPrimary'>.text-buttonPrimary</p>
      <p className='py-2 px-4 bg-gray-500 text-buttonPrimaryText'>
        .text-buttonPrimaryText
      </p>
      <p className='py-2 px-4 text-buttonPrimaryHover'>
        .text-buttonPrimaryHover
      </p>
      <p className='py-2 px-4 text-buttonDefault'>.text-buttonDefault</p>
      <p className='py-2 px-4 text-buttonDefaultText'>
        .text-buttonDefaultText
      </p>
      <p className='py-2 px-4 text-buttonDefaultHover'>
        .text-buttonDefaultHover
      </p>
      <p className='py-2 px-4 text-buttonDestructive'>
        .text-buttonDestructive
      </p>
      <p className='py-2 px-4 bg-gray-500 text-buttonDestructiveText'>
        .text-buttonDestructiveText
      </p>
      <p className='py-2 px-4 text-buttonDestructiveHover'>
        .text-buttonDestructiveHover
      </p>
      <p className='py-2 px-4 bg-gray-500 text-selectButton'>
        .text-selectButton
      </p>
      <p className='py-2 px-4 bg-gray-500 text-selectButtonHover'>
        .text-selectButtonHover
      </p>
      <p className='py-2 px-4 text-toolTip'>.text-toolTip</p>
      <p className='py-2 px-4 text-toolTipText'>.text-toolTipText</p>
    </div>
  </Wrapper>
);
Colors.storyName = "Colors";

export const Bg = () => (
  <Wrapper className='!w-full'>
    <div className='flex-1 grid grid-cols-4 grid-gap-2'>
      <p className='h-20 sn-center bg-primary'>
        <span className='text-white'>.bg-primary</span>
      </p>
      <p className='h-20 sn-center bg-navbar'>
        <span className='text-white'>.bg-navbar</span>
      </p>
      <p className='h-20 sn-center bg-buttonPrimary'>
        <span className='text-white'>.bg-buttonPrimary</span>
      </p>
      <p className='h-20 sn-center bg-focus'>
        <span className='text-white'>.bg-focus</span>
      </p>
      <p className='h-20 sn-center bg-tabsTrigger'>
        <span className='text-white'>.bg-tabsTrigger</span>
      </p>
      <p className='h-20 sn-center bg-toolTip'>
        <span className='text-white'>.bg-toolTip</span>
      </p>
    </div>
  </Wrapper>
);
Bg.storyName = "Background";
