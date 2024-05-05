import Svg, {Path} from 'react-native-svg';
import React from 'react';

interface SVGiconsProps {
  colorStroke?: string | undefined;
}

export const NotifyIcon = () => {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      // xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M15.07 19.25a3.08 3.08 0 01-6.14 0M19.48 12l.5 4a2 2 0 01-1.56 2.2 28.13 28.13 0 01-12.84 0A2 2 0 014.01 16l1-8.11a7 7 0 017-5.94v0h.65"
        stroke="#666E80"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19 9a4 4 0 100-8 4 4 0 000 8z"
        stroke="#666E80"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const SearchIcon = () => {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      // xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M18.654 17.595l2.93 2.928a.75.75 0 01-1.061 1.06l-2.93-2.929a9.75 9.75 0 111.061-1.06v.001zM11.25 19.5a8.25 8.25 0 100-16.5 8.25 8.25 0 000 16.5z"
        fill="#666E80"
      />
    </Svg>
  );
};

export const HumburgerMenuIcon = () => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M2 12h20M2 18h20M2 6h20"
        stroke="#666E80"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const HomeIcon = (props: SVGiconsProps) => {
  return (
    <Svg width={25} height={24} viewBox="0 0 25 24" fill="none">
      <Path
        d="M12.5 13v6M3.5 10.49C3.5 7.37 9.37 2 12.5 2s9 5.37 9 8.49v7.58a4 4 0 01-4 3.93h-10a4 4 0 01-4-3.93v-7.6"
        stroke={props.colorStroke}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const BlogIcon = (props: SVGiconsProps) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M7 22a4 4 0 010-8M7 2a4 4 0 00-4 4v12M7 2h12a2 2 0 012 2v12"
        stroke={props.colorStroke}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7 14h12a2 2 0 012 2v4a2 2 0 01-2 2H7"
        stroke={props.colorStroke}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const ProfileIcon = (props: SVGiconsProps) => {
  return (
    <Svg width={25} height={24} viewBox="0 0 25 24" fill="none">
      <Path
        d="M12.7 12a5 5 0 100-10 5 5 0 000 10zM3.5 22a9.71 9.71 0 019-7c4.12 0 7.63 2.91 9 7"
        stroke={props.colorStroke}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const FQAIcon = (props: SVGiconsProps) => {
  return (
    <Svg width={25} height={24} viewBox="0 0 25 24" fill="none">
      <Path
        d="M8.5 18l2.29 2.29a2.41 2.41 0 003.42 0L16.5 18h2a4 4 0 004-4V7a4 4 0 00-4-4h-12a4 4 0 00-4 4v7a4 4 0 004 4h2zM17.5 9h-10M13.5 12h-6"
        stroke={props.colorStroke}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const AskIcon = (props: SVGiconsProps) => {
  return (
    <Svg width={30} height={31} viewBox="0 0 24 25" fill="none">
      <Path
        d="M2.33 8.39C.25 11.82 9.42 14.9 9.42 14.9s3.08 9.17 6.51 7.09c3.64-2.22 8-15.86 5.12-18.72C18.17.41 4.55 4.75 2.33 8.39zM15.2 9.12L9.42 14.9"
        stroke={props.colorStroke}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
