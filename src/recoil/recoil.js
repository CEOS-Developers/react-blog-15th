import { atom } from 'recoil';
import data from '../data/data';

/*
type:id,title,content,date,milsec
*/
export const PostListState = atom({
    key:'PostListState',
    default:data,
});
