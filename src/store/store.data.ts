import { IEventModel } from '@/app/(admin)/dashboard/(data)/activity/domain/model/IModel';
import { atom, useAtom } from 'jotai';
const value: IEventModel = {};
//this form to use access data for every component
const store = atom(value);

const useStoreDatas = () => useAtom(store);

export default useStoreDatas;
