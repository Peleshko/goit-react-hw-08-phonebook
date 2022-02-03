import { createAction } from '@reduxjs/toolkit';
import { FILTER } from './contacts-types';

export const filterContact = createAction(FILTER);
