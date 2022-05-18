import { atom } from 'recoil';
import data from '../data/data.json'

/*
type:id,title,content,date,milsec
*/
export const PostListState = atom({
    key:'PostListState',
    default:data,
});

