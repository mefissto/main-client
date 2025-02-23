import { AbstractControl, FormArray, FormControl, FormGroup } from '@angular/forms';

/**
 * Marks all the controls and their nested controls as dirty.
 * @param formControls - a control or an array of controls(can be FormControls, FormGroups or FormArrays)
 */
export function markAllControlsAsDirty(formControls: AbstractControl | AbstractControl[]): void {
  const controls = Array.isArray(formControls) ? formControls : [formControls];

  controls.forEach((abstractControl) => {
    if (abstractControl instanceof FormControl) {
      (abstractControl as FormControl).markAsDirty({ onlySelf: true });
    } else if (abstractControl instanceof FormGroup) {
      markAllControlsAsDirty(Object.values((abstractControl as FormGroup).controls));
    } else if (abstractControl instanceof FormArray) {
      markAllControlsAsDirty((abstractControl as FormArray).controls);
    }
  });
}
