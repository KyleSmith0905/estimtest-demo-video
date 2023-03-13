import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion'
import { loadFont } from "@remotion/google-fonts/AzeretMono";
import BalanceText from 'react-balance-text';
import React from 'react';

const { fontFamily } = loadFont();

const container: React.CSSProperties = {
  top: '1em',
  display: 'flex',
  alignItems: 'center',
  fontSize: '2rem',
}

const box: React.CSSProperties = {
  fontFamily,
  width: 'fit-content',
  maxWidth: '80%',
  maxHeight: 'calc(100% - 3em)',
  padding: '0.7em 1.4em',
  overflow: 'hidden',
  borderRadius: '1em',
  borderStyle: 'solid',
  borderWidth: '1px',
  borderColor: 'hsl(0deg, 0%, 30%)',
  background: 'linear-gradient(45deg, hsl(0deg, 0%, 0%), hsl(0deg, 0%, 10%))',
  color: 'hsl(0deg, 0%, 100%)',
  boxShadow: '0em 0em 1em 0em hsl(0deg 0% 15%)',
  opacity: '0',
  transition: 'filter ease 300ms, opacity ease 300ms',
}

const text: React.CSSProperties = {
  margin: '0rem',
  textAlign: 'center',
}

export const TextBox: React.FC<{content: string, start: number, end: number}> = ({content, start, end}) => {
  const frame = useCurrentFrame();

  let boxStyles = box;
  
  const change = interpolate(frame, [start, start + 5, end, end + 5], [0, 1, 1, 0]);
  
  boxStyles = {...boxStyles, opacity: interpolate(change, [0, 1], [0, 1])}
  boxStyles = {...boxStyles, filter: `blur(${interpolate(change, [0, 1], [32, 0])}px)`}

	return (
    <AbsoluteFill style={container}>
      <div style={boxStyles}>
        <BalanceText style={text}>{content}</BalanceText>
      </div>
    </AbsoluteFill>
  );
};