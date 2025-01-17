import { MyClass, MyEnum } from './members';

const instance = new MyClass();

export class Parent {
  instance: MyClass;
  constructor() {
    this.instance = new MyClass();

    // This member reference is only found because `this.instance` is a typed member of Parent
    this.instance.bUsedExternalFromTypedMemberInstance();
  }

  unusedMemberInEntry() {}
}

instance.bUsedExternal;
instance.cUsedExternal;
instance.dUsedExternal();
MyClass.eUsedExternal;

const a: MyEnum.A_UsedExternal = 1;

export enum EntryEnum {
  UnusedMemberInEntryEnum = 1,
}
