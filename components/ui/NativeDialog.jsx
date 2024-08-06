import { View, Text } from 'react-native'
import React from 'react'
import { Dialog, Portal } from 'react-native-paper'

export default function NativeDialog({visible, onDismiss, children}) {
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={onDismiss} style={{backgroundColor: "white"}}>
        {children}
      </Dialog>
    </Portal>
  )
}