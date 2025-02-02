import { createAction, props } from '@ngrx/store';

import { PcError } from '@interfaces';

export function createPcAction<T>(type: string) {
  return createAction(type, props<{ payload: T }>());
}

export function createPcNoPayloadAction(type: string) {
  return createAction(type);
}

export function createPcErrorAction(type: string) {
  return createAction(type, props<{ error: PcError }>());
}
