import {StyleSheet, View} from 'react-native';
import React, {forwardRef, ReactNode, useCallback, useMemo} from 'react';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import {BottomSheetDefaultBackdropProps} from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types';

interface CustomBottomSheetProps {
  children: ReactNode;
}

export type Ref = BottomSheetModal | null;

const CustomBottomSheet = forwardRef<Ref, CustomBottomSheetProps>(
  (props, ref) => {
    const snapPoints = useMemo(() => ['25%', '50%', '70%'], []);

    const handleSheetChanges = useCallback((index: number) => {
      console.log('handleSheetChanges', index);
    }, []);

    const renderBackdrop = useCallback(
      (
        props: React.JSX.IntrinsicAttributes & BottomSheetDefaultBackdropProps,
      ) => (
        <BottomSheetBackdrop
          {...props}
          disappearsOnIndex={-1}
          appearsOnIndex={0}
        />
      ),
      [],
    );

    return (
      <BottomSheetModalProvider>
        <View>
          <BottomSheetModal
            ref={ref}
            index={2}
            snapPoints={snapPoints}
            backdropComponent={renderBackdrop}
            onChange={handleSheetChanges}>
            <BottomSheetView style={styles.contentContainer}>
              {props.children}
            </BottomSheetView>
          </BottomSheetModal>
        </View>
      </BottomSheetModalProvider>
    );
  },
);

export default CustomBottomSheet;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    zIndex: 10,
  },
});
