import React from 'react'
import { storiesOf } from '@storybook/react'
import { CloseIcon, MailIcon, InfoIcon } from 'app-modules/icons'

storiesOf('Icons', module)
  .add('Close', () => <CloseIcon />, {
    notes: 'A simple close icon'
  })
  .add('Mail', () => <MailIcon />, {
    notes: 'A simple mail icon'
  })
  .add('Info', () => <InfoIcon />, {
    notes: 'A simple info icon'
  })
