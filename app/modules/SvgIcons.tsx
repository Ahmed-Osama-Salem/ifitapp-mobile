import Svg, {Circle, Path} from 'react-native-svg';
import React from 'react';

interface SVGiconsProps {
  colorStroke?: string | undefined;
  width?: number;
  height?: number;
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
        stroke="#202020"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19 9a4 4 0 100-8 4 4 0 000 8z"
        stroke="#202020"
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
        fill="#202020"
      />
    </Svg>
  );
};

export const HumburgerMenuIcon = () => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M2 12h20M2 18h20M2 6h20"
        stroke="#202020"
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
    <Svg
      width={props.width || 30}
      height={props.height || 31}
      viewBox="0 0 24 25"
      fill="none">
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

export const ShowIcon = () => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 16.01a4 4 0 100-8 4 4 0 000 8zM2 11.98c6.09-10.66 13.91-10.65 20 0M22 12.01c-6.09 10.66-13.91 10.65-20 0"
        stroke="#666E80"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const DotFlagIcon = (props: SVGiconsProps) => {
  return (
    <Svg width={7} height={8} viewBox="0 0 7 8" fill="none">
      <Circle cx={3.5} cy={4} r={3.5} fill={props.colorStroke} />
    </Svg>
  );
};

export const BackArrowIcon = () => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M22 11.93H2M8 19l-5.16-5a2.75 2.75 0 010-4L8 5"
        stroke="#202020"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const PlusIcon = () => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M20.813 12a.562.562 0 01-.563.563h-7.688v7.687a.562.562 0 11-1.124 0v-7.688H3.75a.563.563 0 010-1.124h7.688V3.75a.563.563 0 011.124 0v7.688h7.688a.562.562 0 01.563.562z"
        fill="#000"
      />
    </Svg>
  );
};

export const BookMarkIcon = () => {
  return (
    <Svg width={24} height={25} viewBox="0 0 24 25" fill="none">
      <Path
        d="M20 7.88a4.79 4.79 0 00-4.79-4.79H8.79A4.79 4.79 0 004 7.88M4 7.88V20.4a.88.88 0 001.62.57l1.77-2.88a.83.83 0 011.36-.14l2.5 2.81a1.001 1.001 0 001.5 0l2.5-2.81a.83.83 0 011.36.14l1.77 2.88A.88.88 0 0020 20.4V7.88"
        stroke="#000"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const HeartIcon = ({
  fillColor,
  strokeColor,
}: {
  fillColor?: string;
  strokeColor?: string;
}) => {
  return (
    <Svg width={26} height={26} viewBox="0 0 24 25" fill={fillColor || 'none'}>
      <Path
        d="M15.6 3.92a5.37 5.37 0 00-3.6 1.4 5.38 5.38 0 00-9 4c0 6.45 9 10.82 9 10.82s9-4.37 9-10.82a5.4 5.4 0 00-5.4-5.4z"
        stroke={strokeColor || '#000'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
